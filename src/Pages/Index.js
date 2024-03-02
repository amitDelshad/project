import SearchBar from '../components/SearchBar';
import Sites from '../components/Sites';
import TopRow from '../components/TopRow';


export default function Index() {
  return (
    <div className="App">
      <TopRow/>
      <SearchBar/>
      <Sites/>
    </div>
  );
}
