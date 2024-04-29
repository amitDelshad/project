import axios from 'axios';
const cheerio = require('cheerio');

async function fetchWebsiteContent(url) {
    try {
        const response = await axios.get('https://www.ebay.com')
        .then(response => {
          console.log(response.data); // Output the HTML content
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        const html = response.data;
        console.log(html);
        return html;
    } catch (error) {
        console.error("Error fetching website content:", error);
        return null;
    }
}

function extractTextFromHTML(html) {
    const $ = cheerio.load(html);
    const text = $('body').text();
    return text;
}

function getRandomCat() {
    const min = Math.ceil(0);
    const max = Math.floor(10);
    const min1 = Math.ceil(1);
    const max1 = Math.floor(5);
    const random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    let retCat = [];
    const categories = ['Technology',
    'Health',
    'Sports',
    'Finance',
    'Entertainment',
    'Education',
    'Travel',
    'Food',
    'Fashion',
    'Politics',
    'Other']
    for(let i = 0; i < random1; i++){
        retCat.push(categories[Math.floor(Math.random() * (max - min + 1)) + min])
    }
    let cat = [];
    if(retCat[0] === 'Other') return ['Other'];
    retCat.forEach((cat1) => {
        if(!cat.includes(cat1) && cat1 != 'Other'){
            cat.push(cat1);
        }
    })
    return cat;
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

function categorizeWebsite(htmlContent) {
    const $ = cheerio.load(htmlContent); 
    // Example: Extracting text content from paragraphs and categorizing based on keywords
    const paragraphs = $('p').map((index, element) => $(element).text()).get();

    const categories = {
        'technology': [],
        'health': [],
        'sports': [],
        'finance': [],
        'entertainment': [],
        'education': [],
        'travel': [],
        'food': [],
        'fashion': [],
        'politics': [],
        'other': []
    }; 

    // Categorizing based on keywords
    paragraphs.forEach(paragraph => {
        if (paragraph.includes('technology') || paragraph.includes('טכנולוגיה')) {
            categories['technology'].push(paragraph);
        } else if (paragraph.includes('health') || paragraph.includes('בריאות')) {
            categories['health'].push(paragraph);
        } else if (paragraph.includes('sports') || paragraph.includes('ספורט')) {
            categories['sports'].push(paragraph);
        } else if (paragraph.includes('finance') || paragraph.includes('כלכלה')) {
            categories['finance'].push(paragraph);
        } else if (paragraph.includes('entertainment') || paragraph.includes('בידור')) {
            categories['entertainment'].push(paragraph);
        } else if (paragraph.includes('education') || paragraph.includes('חינוך')) {
            categories['education'].push(paragraph);
        } else if (paragraph.includes('travel') || paragraph.includes('טיול')) {
            categories['travel'].push(paragraph);
        } else if (paragraph.includes('food') || paragraph.includes('אוכל')) {
            categories['food'].push(paragraph);
        } else if (paragraph.includes('fashion') || paragraph.includes('אופנה')) {
            categories['fashion'].push(paragraph);
        } else if (paragraph.includes('politics') || paragraph.includes('פוליטיקה')) {
            categories['politics'].push(paragraph);
        }
    }); 
    let retcat = [];
    Object.keys(categories).forEach(key => {
        if(categories[key]){
            retcat.push(categories[key])
        }
    })
    return getRandomCat();
}

async function categorizeWebsiteContent(url) {
    // Fetch website content
    const html = await fetchWebsiteContent(url);

    if (!html) {
        console.error("Failed to fetch website content");
        return null;
    }

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

export default categorizeWebsite;
