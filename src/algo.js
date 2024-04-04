const axios = require('axios');
const cheerio = require('cheerio'); 

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
        } else {
            categories['other'].push(paragraph);
        }
    }); 
    let max = {categorie: 'other', len: 0};
    Object.keys(categories).map((category) => {
        if(max.len < categories[category].length){
            max.category = category;
            max.len = categories[category].length
        }
    })
    return max.categorie;
}

export default categorizeWebsite;
