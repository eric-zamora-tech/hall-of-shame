import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="Example" content="Lorem ipsum" />
<ShameCard title="Example" content="Lorem ipsum" />
<ShameCard title="September 18, 2024" content="... my cat decided to "help" me by sitting on my keyboard whenever I tried to commit code." />
<ShameCard title="September 18, 2024" content="...I accidentally committed all my changes to the wrong branch and was too embarrassed to fix it." />
    </div>
  );
}

export default App;
