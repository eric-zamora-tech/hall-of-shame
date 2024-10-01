import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="October 1, 2024" content="...I accidentally used git push --amend to push an empty commit and pretended it was intentional." />
    </div>
  );
}

export default App;
