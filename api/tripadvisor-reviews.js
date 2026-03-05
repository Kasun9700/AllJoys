import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  const url = 'https://www.tripadvisor.com/Attraction_Review-g616035-d15771515-Reviews-All_Joys_Cookery_Class-Ella_Uva_Province.html';
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const reviews = [];
    $('.review-container, .YibKl').each((i, el) => {
      const name = $(el).find('.info_text > div, .ui_header_link').first().text().trim();
      const date = $(el).find('.ratingDate, .euPKI').first().text().trim().replace('Written ', '');
      const text = $(el).find('.partial_entry, .biGQs').first().text().trim();
      let rating = 5;
      const ratingEl = $(el).find('.ui_bubble_rating, .UctUV');
      if (ratingEl.length) {
        const className = ratingEl.attr('class') || '';
        const match = className.match(/bubble_(\d+)/);
        if (match) {
          rating = parseInt(match[1], 10) / 10;
        }
      }
      if (name && text) {
        reviews.push({ name, date, rating, text });
      }
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(reviews.slice(0, 8));
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch TripAdvisor reviews.' });
  }
}
