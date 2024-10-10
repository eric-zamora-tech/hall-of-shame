import 'bootstrap/dist/css/bootstrap.min.css';
import ShameCard from './components/ShameCard';

function App() {
  return (
    <div className="App">
<ShameCard title="October 1, 2024" content="...I accidentally used git push --amend to push an empty commit and pretended it was intentional." />
<ShameCard title="October 2, 2024" content="...I accidentally deleted my entire repository thinking I was organizing my files in a new folder." />
<ShameCard title="October 3, 2024" content="...my cat decided to take a nap on my laptop keyboard and accidentally deleted all my code." />
<ShameCard title="October 4, 2024" content="I accidentally pushed my lunch order instead of code..." />
<ShameCard title="October 5, 2024" content="I accidentally pushed my code to a random stranger's repository..." />
<ShameCard title="October 6, 2024" content="...my cat discovered my laptop's power button doubles as a toy and kept turning it off whenever I tried to work." />
<ShameCard title="October 7, 2024" content="...I accidentally deleted all my code thinking it was just a dream." />
<ShameCard title="October 8, 2024" content="...I accidentally committed my grocery list instead of my code changes!" />
<ShameCard title="October 9, 2024" content="...my cat kept walking on my keyboard and committing random code changes." />
<ShameCard title="October 10, 2024" content="I accidentally spent all my time rearranging my Funko Pop collection..." />
    </div>
  );
}

export default App;
