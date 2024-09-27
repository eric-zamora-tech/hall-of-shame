import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="September 23, 2024" content="...I accidentally kept pushing my changes to a private repository where no one could see them." />
<ShameCard title="September 24, 2024" content="...I accidentally deleted my repository thinking it was a useless project." />
<ShameCard title="September 24, 2024" content="...my cat kept sitting on my laptop keyboard and committing random code changes." />
<ShameCard title="September 24, 2024" content="...I accidentally pushed my cat pictures to a public repository instead of my code." />
<ShameCard title="September 25, 2024" content="...my cat needed to use my laptop as a scratching post." />
<ShameCard title="September 27, 2024" content="...I accidentally pushed my cat photos instead of my code changes." />
    </div>
  );
}

export default App;
