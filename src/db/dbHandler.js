import categorizeWebsite from '../algo';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyB0AZKmnHX_jo4VlinsLk0Y6OK6_biOWmU",
    authDomain: "amit-sprojectserver.firebaseapp.com",
    projectId: "amit-sprojectserver",
    storageBucket: "amit-sprojectserver.appspot.com",
    messagingSenderId: "27555672132",
    appId: "1:27555672132:web:62e0e63604b13ee19acc11",
    measurementId: "G-W59GRGMDJH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const localdb = [{username:'', password: '', firstName: '', lastName: '', history:[]}]

const dbHandler = {
    getUser() {
        return localdb[0];
    },
    async getLinks(user) {
        const userDoc = await doc(db, `users`, user);
        const userSnapshot = await getDoc(userDoc);
        return userSnapshot.data().links;
    },
    async loadUser(user) {
        const userDoc = await doc(db, `users`, user);
        const userSnapshot = await getDoc(userDoc);
        localdb[0] = userSnapshot.data();
        const links = await this.getLinks(user);
        if(!links)
            localdb[0].history = [];
        else
            localdb[0].history = links;
    },
    async getUsers() {
        const userCol = await collection(db, `users`);
        const userSnapshot = await getDocs(userCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        return userList;
    },
    async insertUser(obj) {
        localdb.push(obj);
        const id = `${obj.username}?${obj.password}`
        await setDoc(doc(db, "users", id), {
            firstName: obj.firstName,
            lastName: obj.lastName,
            username: obj.username,
            password: obj.password,
            links:[],
          });
        
    },
    async insertUrl(link, htmlContent, name) {
        const category = categorizeWebsite(htmlContent);
        localdb[0].history.push({name, category, link});
        await updateDoc(doc(db, "users", sessionStorage.getItem('user')), {
            links: localdb[0].history,
        });
    },
    async deleteUrl(link) {
        localdb[0].history = localdb[0].history.filter(url => url !== link);
        await updateDoc(doc(db, "users", sessionStorage.getItem('user')), {
            links: localdb[0].history,
        });
    },
};

export default dbHandler;