import './App.css'
import { UserClass, UserFunction, UserChildren } from './user'
import { useState } from 'react'


export default function App() {

  const [korisnici, setKorisnici] = useState([
    {name: 'Ivan', years: 30},
    {name: 'Marko', years: 35},
    {name: 'Ana', years: 25}
  ])
  const [naziv, setNaziv] = useState("Proizvoljna varijabla")

  const promjeniGodine = () =>{
      setKorisnici(korisnici.map((korisnik) => {
            return {...korisnik, years: korisnik.years + 1}
          }))
  }

  return (
    <>
      <h1>State</h1>
      <UserClass name={korisnici[0].name} years={korisnici[0].years}/>
      <UserFunction name={korisnici[1].name} years={korisnici[1].years}/>
      <UserChildren name={korisnici[2].name} years={korisnici[2].years}><p>{naziv}</p></UserChildren>
      <button onClick={promjeniGodine}>Promjeni godine</button>
    </>
  )
}
