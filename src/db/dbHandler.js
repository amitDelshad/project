const db = [{firstName: 'Amit', lastName: 'Delshad', email: 'a', password: 'a', history: []}]
const dbHandler = {
    getUser() {
        return db[0];
    },
    insertUser(obj) {
        db.push(obj);
    }
};

export default dbHandler;