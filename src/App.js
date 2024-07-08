// import './App.css';
import LoadingButton from './LoadingButton.js'
import NavbarApk from './NavBarApk.js';
import Parse from 'parse/dist/parse.min.js';
import ListProducts from './Products.js';

   // Your Parse initialization configuration goes here
   const PARSE_APPLICATION_ID = 'DCyAirVyv1XoUNFBjZwnABOwfxAyvg1rPLaaGsvD';
   const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
   const PARSE_JAVASCRIPT_KEY = '5MkuAWptgJohXEWzEdq7beAiBaSg08LvKvBRm8Kk';
   Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
   Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <meta charSet='utf-8'></meta>
        <meta name='viewport' content='with=device-with,inicial-scale=1'></meta>

       
      </header>
      <NavbarApk/>
      <ListProducts />
      <LoadingButton />
          
          
    </div>
  );
}

export default App;
