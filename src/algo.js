const cheerio = require('cheerio');

function extractTextFromHTML(html) {
    const $ = cheerio.load(html);
    const text = $('body').text();
    return text;
}

function categorizeContent(text) {
    const categories = {
        "Technology": ["tech", "digital", "innovation", "software", "hardware"],
        "Sports": ["sports", "football", "basketball", "tennis", "soccer"],
        "Health": ["health", "fitness", "nutrition", "wellness", "medicine"],
        "Finance": ["finance", "investment", "stocks", "economy", "money"],
        "Education": ["education", "school", "university", "learning", "student"],
        "Entertainment": ["entertainment", "movies", "music", "celebrity", "art"],
        "Travel": ["travel", "vacation", "tourism", "destination", "holiday"],
        "Food": ["food", "eat", "pizza", "pasta", "hamburger"],
        "Fashion": ["fashion", "design", "clothes", "shirt", "pants"],
        "Politics": ["politic", "government", "president", "vote"],
    };

    const categorized = [];
    for (const category in categories) {
        const categoryKeywords = categories[category];
        for (const keyword of categoryKeywords) {
            if (text.toLowerCase().includes(keyword)) {
                categorized.push(category);
                break; // Move to the next category
            }
        }
    }

    return categorized.length > 0 ? categorized : ["Other"];
}

async function categorizeWebsiteContent(html) {

    // Extract text content from HTML
    const text = extractTextFromHTML(html);

    if (!text) {
        console.error("Failed to extract text content from HTML");
        return null;
    }

    // Categorize content
    const categories = categorizeContent(text);
    return categories;
}

export default categorizeWebsiteContent;
