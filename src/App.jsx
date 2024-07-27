import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const FormPage = () => {

  const [name, getName] = useState('');
  const [email, getEmail] = useState('');
  const [mobile, getMobile] = useState('');
  const [suggestions, getSuggestions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', {state:
      {name, email, mobile, suggestions}
    })
  };

  return (
    <>
       <div className="h-screen bg-[url('assets/sample.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className='w-full max-w-lg max-h-lg rounded-xl m-10 bg-blue-200 p-4 bg-opacity-75'>
          <div className='bg-red-400 rounded-md text-center font-bold text-2xl opacity-100'>Sample Form</div>
          <form onSubmit={handleSubmit} method='GET'>
          <div className='m-3'>
            <label htmlFor="name">Name</label>
            <br/>
            <input className='transition-transform duration-200 ease-in-out transform hover:scale-110 border-blue-500 rounded-md border-x-2 border-y-2' type="text" value={name} onChange={(e) => getName(e.target.value)}/>
          </div>
          <div className='m-3'>
            <label htmlFor="email">Email</label>
            <br/>
            <input className='transition-transform duration-200 ease-in-out transform hover:scale-110 border-blue-500 rounded-md border-x-2 border-y-2' type="email" value={email} onChange={(e) => getEmail(e.target.value)} />
          </div>
          <div className='m-3'>
            <label htmlFor="mobile">Mobile</label>
            <br/>
            <input className='transition-transform duration-200 ease-in-out transform hover:scale-110 border-blue-500 rounded-md border-x-2 border-y-2' type="text" value={mobile} onChange={(e) => getMobile(e.target.value)} />
          </div>
          <div className='m-3'>
            <label htmlFor="suggestions">Suggestions</label>
            <br/>
            <textarea className='transition-transform duration-200 ease-in-out transform hover:scale-105 border-blue-500 w-full h-32 rounded-md border-x-2 border-y-2' type="text" value={suggestions} onChange={(e) => getSuggestions(e.target.value)} />
          </div>
          <div className='m-3'>
            <button type='submit' className='transition-transform duration-200 ease-in-out transform hover:scale-110 rounded-md bg-green-200 p-1 hover:bg-green-500'>Submit</button>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}


const ResultPage = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="h-screen bg-[url('assets/sample.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="h-screen flex items-center justify-center">
        <div className='w-full max-w-lg rounded-xl bg-blue-200 p-4 bg-opacity-75'>
          <h1 className='text-center font-bold text-2xl'>User Info</h1>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Mobile:</strong> {state.mobile}</p>
          <p><strong>Suggestions:</strong> {state.suggestions}</p>
        </div>
      </div>
    </div>
    
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FormPage/>}/>
        <Route path='/results' element={<ResultPage/>} />
      </Routes>
    </Router>

  )
}


export default App