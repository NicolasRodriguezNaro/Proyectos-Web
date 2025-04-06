import {useEffect, useState} from 'react'
import './App.css'

import Pagination from '@mui/material/Pagination';

import Header from './Components/Header/Header.jsx'
import CardCharacter from './Components/CardCharacter/CardCharacter.jsx'

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results)
      setTotalPages(data.info.pages)
    }
    );
  },[])

  const handlePagination = (event, page) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }
  
  return (
    <>
      <Header />
      
      <main>
        {characters.map((item) => {
            return(
              <CardCharacter key={item.id} name={item.name} image={item.image} />
            )
        })}
      </main>
      
      <div id='pagination'>
        <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />
      </div>
    </>
  )
}

export default App