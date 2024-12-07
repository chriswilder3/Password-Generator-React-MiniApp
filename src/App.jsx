import { useState, useCallback } from 'react';
import './App.css';

function App() {

  const [length, changeLength] = useState(0)
  const [numberAllowed, changeNumberAllowed] = useState(false)
  const [specialCharAllowed, changeSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const newHookFun = useCallback( function(){
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

        for (let index = 0; index < number; index++) {
            const index = floor(Math.random()*(str.length))
            pass += str[index]
        }
      
      // Now we need to change the password accordingly, but 
      // Note that We can set it only through setPassword
      // Hence We used that function also as dependency of callback

      setPassword(pass)

      }
    , [length, numberAllowed, specialCharAllowed, setPassword]
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

            <div className="controllers flex flex-row gap-2 p-4 text-blue-300 justify-center">
                <div className="slider">
                    <input type="range" min={0} max={16}  name='slider' id='slider' />
                    <label htmlFor="slider" className=''> Length(16) </label>
                </div>

                <div className="numbers relative">
                    <input type="checkbox" name="numbers" id="numbers" value={24} />
                    <label htmlFor="numbers"> Numbers</label>
                </div>

                <div className='specialchars'>
                  <input type="checkbox" name="specialchars" id="specialchars" value={24} />
                  <label htmlFor="specialchars"> Special Chars</label>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
