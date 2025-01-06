import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ListBooks from './pages/books/ListBooks'
import CreateBook from './pages/books/CreateBook'

const App = () => {
  return (
    <Suspense fallback={<div className='bg-transparent w-screen h-screen flex justify-center items-center'><h1 className='text-3xl text-blue-500 font-semibold animate-pulse'>Loading boss..</h1></div>}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/books'>
            <Route path='/books/list_book' element={<ListBooks/>}/>
            <Route path='/books/create_book' element={<CreateBook/>}/>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
