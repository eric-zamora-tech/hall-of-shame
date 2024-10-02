import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="October 1, 2024" content="...I accidentally used git push --amend to push an empty commit and pretended it was intentional." />
<ShameCard title="October 2, 2024" content="...I accidentally deleted my entire repository thinking I was organizing my files in a new folder." />
    </div>
  );
}

export default App;
