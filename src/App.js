import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="September 23, 2024" content="...I accidentally kept pushing my changes to a private repository where no one could see them." />
<ShameCard title="September 24, 2024" content="...I accidentally deleted my repository thinking it was a useless project." />
    </div>
  );
}

export default App;
