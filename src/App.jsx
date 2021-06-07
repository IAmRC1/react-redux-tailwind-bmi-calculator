import React, { useState, } from 'react'
import { Header, Form, Result, } from './containers'
import { SubmitButton } from './components'

function App() {
  const [isResultOpen, setIsResultOpen] = useState(false)
  return (
    <div className="h-screen bg-gray-700">
      <Header />
      <div className="sm:w-2/3 md:w-1/2 sm:m-auto">
        {isResultOpen 
          ? <Result />
          : <Form />
        }
      </div>
      <SubmitButton 
        isResultOpen={isResultOpen}
        setIsResultOpen={setIsResultOpen}
      />
    </div>
  );
}

export default App;
