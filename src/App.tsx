import SongFinderApp from "./SongFinder/SongFinderApp";

function App() {
 const SongFinderStyle =
  "h-full w-full bg-gradient-to-l from-blue-600 to-violet-600 text-white";
 return (
  <div className={SongFinderStyle}>
   <SongFinderApp />
  </div>
 );
}

export default App;
