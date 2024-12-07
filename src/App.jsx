import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {

  const [length, changeLength] = useState(8)
  const [numberAllowed, changeNumberAllowed] = useState(false)
  const [specialCharAllowed, changeSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback( function(){
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqerstuvwxyz"
        // This is the string using whose chars the password is
        // generated. Currently its only has alpha chars. But as
        // other options are given, numbers, specialchars are added
        // to it so password generator can use them as well

        if(numberAllowed){
          str += "0123456789"
        }
        if(specialCharAllowed){
          str += ",./`';~!#$%^&*(){}[]"
        }

        // Now we can get apply the forloop and pick random number
        // and use it as index of str to get a random char to use for
        // password. But how many times I should run this? This
        // depends on the length of the password which is 
        // the state var length.

        for (let index = 0; index < length; index++) {
            const index = Math.floor(Math.random()*(str.length))
            // Dont add +1 for array cases while generating
            // random numbers(produces out of bound, undefined)

            pass += str[index]
        }
      
      // Now we need to change the password accordingly, but 
      // Note that We can set it only through setPassword
      // Hence We used that function also as dependency of callback

      setPassword(pass)

      }
    , [length, numberAllowed, specialCharAllowed, setPassword]
  )
  useEffect( function(){
      passwordGenerator()
  }, 
  [length, numberAllowed, specialCharAllowed, passwordGenerator]
  )
  return (
    <div className="App bg-gray-800 w-full h-screen font-mono">
        <h1 className=' text-blue-500 text-3xl font-semibold  '> Password Generator </h1>
        <div className='bg-slate-500 md:w-3/4 md:h-32 h-32 w-full mx-auto flex flex-col justify-center  rounded-md'>
            <div className='flex flex-row justify-center mx-1 mt-3 '>
              <div className=' bg-slate-100 w-3/4 h-12 pt-3 rounded-md'>
                  {password}
              </div>
              <button className=' bg-sky-500 h-full text-center my-auto text-slate-100 p-3 ml-1 px-3 rounded-md '>
                Copy
              </button>
            </div>

            <div className="controllers flex flex-row gap-2 p-4 text-blue-300 justify-around ">
                <div className="slider">
                    <input type="range" name='slider' id='slider' 
                              min={8} max={16} value={length} 
                            onChange={ (e) => changeLength(e.target.value) }/>
                    <label htmlFor="slider" className=''> Length({length}) </label>
                </div>

                <div className="numbers relative">
                    <input type="checkbox" name="numbers" id="numbers" defaultChecked={numberAllowed}
                      onChange={ () => changeNumberAllowed( (prev) => !prev )} />
                    <label htmlFor="numbers"> Numbers({numberAllowed}) </label>
                </div>

                <div className='specialchars'>
                  <input type="checkbox" name="specialchars" id="specialchars" defaultChecked={specialCharAllowed}
                      onChange={ () => changeSpecialCharAllowed( (prev) => !prev )} />
                  <label htmlFor="specialchars"> Special Chars({specialCharAllowed}) </label>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
