import Index from './Pages/Index';
import SingIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('');
  const [user, setUser] = useState(sessionStorage.getItem('user'));

  switch(page) {
    case ('SignIn'):
      return (
        <SingIn setPage = {setPage} setUser={setUser}/>
      );
    case ('SignUp'):
      return (
        <SignUp setPage = {setPage} setUser={setUser}/>
      );
    case ('Index'):
      return (
        <Index setPage = {setPage}/>
      );
    case ('Profile'):
      return (
        <Profile setPage = {setPage}/>
      );
    default:
      return (
        <SingIn setPage = {setPage} setUser={setUser}/>
      );
  }
}
