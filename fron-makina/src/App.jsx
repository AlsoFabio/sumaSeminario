import { useState } from 'react'

function App() {
  const [estadito, setestadito] = useState()
  const [estadito2, setestadito2] = useState(0)

  const [filas, setFilas] = useState(0)
  const [columnas, setColumnas] = useState(0)
  
  const fetchPost = async (url, body) => {
    try {let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    let raw = JSON.stringify({filas:filas,columnas:columnas})
    let requestOptions = {
      method:"POST",
      headers:myHeaders,
      body:raw,
      redirect:'follow'
    }
      const response = await fetch(url, requestOptions)
      return response.json()
    }
    catch(error){
      return error
    }
  }
  const consulta = async (e) => {
    e.preventDefault()
    const infoPost = await fetchPost("http://localhost:3000/suma")
    const infoBasePost = await infoPost
    setestadito2(infoBasePost)
  }
  return (
    <div>
      <h1>Sonidos de Autos</h1>

      {/* <input type="button" onClick="crearMatriz()" value="GTR R35"/> */}
      <form action="" onSubmit={consulta} style={{ width: "50%" }}>
        <label htmlFor="fila" style={{ paddingRight: "20px" }}>Ingrese un número</label>
        <input type="number" name="fila" id="fila" min={0} onChange={e => { setFilas(parseFloat(e.target.value))}}  />
        <br />
        <label htmlFor="columna" style={{ paddingRight: "20px" }}>Ingrese otro número</label>
        <input type="number" name="columna" id="columna" min={0} onChange={e => { setColumnas(parseFloat(e.target.value)) }}  />
        <br />
        <button type='submit'>Generar</button>
      </form>

      <p>{JSON.stringify(estadito)}</p>
      <p>El resultado es: {estadito2.suma}</p>
    </div>
  )
}

export default App
