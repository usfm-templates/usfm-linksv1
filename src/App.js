import logo from "./assets/us-familymarketing-logo.png";
import "./App.css";

function App() {
  return (
    <header className="flex justify-center items-center h-screen ">
      <div className="rounded-xl pb-7 px-10 border z-100 bg-white floatbub shadow-md">
        <img src={logo} className="h-24 m-auto" alt="logo" />
        <div className="flex flex-col">
          <a
            href="https://familymarketing.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" min-w-full	 font-bold font-mono text-center px-10 py-3 m-2 rounded-full border border-gray-400 cosmo">
              US Family Marketing
            </button>
          </a>

          <a
            href="https://www.facebook.com/unitedstatesfamilymarketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="min-w-full	 font-bold font-mono text-center px-10 py-3 m-2 rounded-full border border-gray-400 cosmo">
              Facebook
            </button>
          </a>

          <a
            href="https://familymarketing.us"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <button className="min-w-full	 font-bold font-mono text-center px-10 py-3 m-2 rounded-full border border-gray-400 cosmo">
              Coming soon...
            </button>
          </a>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </header>
  );
}

export default App;
