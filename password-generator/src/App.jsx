import { useState, useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false)
  const [Password,setPassword] =useState("")

  //useref hook

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
  let pass=''
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*()_+={}[]?<>"

  for(let i=1; i<=length;i++){
    let char=Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)


},[length,numberAllowed,charAllowed,setPassword])    // here u will learn how to optimize   // and another one is dependendies ... it will in array format

const copyPasswordToClipboard =useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 3);
  window.navigator.clipboard.writeText(Password)
} , [Password])

useEffect(() => {
  passwordGenerator()
}, [length,numberAllowed,charAllowed,passwordGenerator])  // here if any changes are there means u can rerun

  return (
    <>
    {/* <h1 className='text-4xl text-center text-black '>Password generator</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-600 bg-gray-700'>
      <h1 className='text-white text-center my-2'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-600 text-white px-2 py-0.5 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input 
        type="range"
        min ={6}
        max={100}
        value ={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}} />
        <label>Length : {length}</label>
    
      <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setnumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          charAllowedAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='characterInput'>Character</label>
      </div>
</div>
    </div>
    </div>
    </>
  )
}

export default App
