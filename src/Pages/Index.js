import SearchBar from '../components/SearchBar';
import Sites from '../components/Sites';
import TopRow from '../components/TopRow';


export default function Index(setPage) {
  return (
    <div className="App">
      <TopRow setPage = {setPage}/>
      <SearchBar/>
      <Sites/>
    </div>
  );
}
