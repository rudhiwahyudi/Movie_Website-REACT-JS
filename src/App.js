
import './App.css'
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';
import './style/landingpage.css';




function App() {
  return (
    <div>
      <div className='myBG border'>
      <NavigationBar />
      <Intro />
      </div>


      {/* list Move */}
      <div className='trending '>
        <Trending />
      </div>

      <div className='superHero'>
        <SuperHero/>
      </div>
    </div>
  );
}

export default App;
