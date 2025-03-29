import React from 'react'
import './App.css'

import Header from './Components/Header/Header.jsx'
import CardPersonal from './Components/CardPersonal/CardPersonal.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CardPersonal name={"uno"} img={"https://www.cali.gov.co/dagma/info/principal/media/pubInt/thumbs/thpub_700x400_176508.jpg"}/>
        <CardPersonal name={"dos"} img={"https://static.nationalgeographicla.com/files/styles/image_3200/public/green-iguana.jpg?w=1600"}/>
        <CardPersonal name={"tres"} img={"https://palmitospark.es/wp-content/uploads/2023/04/reptile-g431a1a603_1280-1024x682.jpg"}/>
      </main>
    </>
  )
}

export default App