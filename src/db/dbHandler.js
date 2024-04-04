import categorizeWebsite from "../algo";

const db = [{firstName: 'Amit', lastName: 'Delshad', email: 'a', password: 'a',
     history: [{name: 'hello', category: 'other', url: "https://hello.com"},
                {name: 'google', category: 'other', url: "https://google.com"},]}]
const dbHandler = {
    getUser() {
        return db[0];
    },
    insertUser(obj) {
        db.push(obj);
    },
    insertUrl(url, htmlContent) {
        const category = categorizeWebsite(htmlContent);
        console.log(category);
        db[0].history.push({name:'hi', category, url});
    }
};

export default dbHandler;