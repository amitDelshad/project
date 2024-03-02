import Index from './Pages/Index';
import SingIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('');

  switch(page) {
    case ('SignIn'):
      return (
        <SingIn setPage = {setPage}/>
      );
    case ('SignUp'):
      return (
        <SignUp setPage = {setPage}/>
      );
    case ('Index'):
      return (
        <Index setPage = {setPage}/>
      );
    default:
      return (
        <SingIn setPage = {setPage}/>
      );
  }
}
