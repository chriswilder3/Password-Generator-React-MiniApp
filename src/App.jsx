import './App.css';

function App() {
  return (
    <div className="App bg-gray-800 w-full h-screen ">
        <h1 className=' text-blue-500 text-3xl font-semibold font-mono '> Password Generator </h1>
        <div className='bg-slate-500 w-3/4 h-28 mx-auto flex flex-col justify-center rounded-md'>
            <div className='flex flex-row justify-center mx-1 '>
              <div className=' bg-slate-100 w-3/4 h-12 rounded-md '>

              </div>
              <button className=' bg-sky-500 h-full text-center my-auto text-slate-100 p-3 ml-1 px-3 rounded-md '>
                Copy
              </button>
            </div>

            <div className="controllers flex flex-row gap-2 p-4 ">
                <div className="slider">
                    <input type="range" min={0} max={100} name='slider' id='slider' />
                    <label htmlFor="slider"> Length(16) </label>
                </div>
                <div className="numbers">

                </div>
                <div className='specialchars'>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
