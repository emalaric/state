import './App.css'
import { Component } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

const users = [
  {name: 'Ivan', years: 30},
  {name: 'Marko', years: 35},
  {name: 'Ana', years: 25}
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      korisnici: [
        {name: 'Ivan', years: 30},
        {name: 'Marko', years: 35},
        {name: 'Ana', years: 25}
      ],
      naziv: "Proizvoljna varijabla"
    }
  }

  promjeniGodine = () =>{
    const noviKorisnici = this.state.korisnici.map( (korisnik) => {
      return {...korisnik, years: korisnik.years + 1}
    }) 

    this.setState({korisnici: noviKorisnici})
  }

  render() {
    const { korisnici, naziv} = this.state
    return (
      <>
        <h1>State</h1>
        <UserClass name={korisnici[0].name} years={korisnici[0].years}/>
        <UserFunction name={korisnici[1].name} years={korisnici[1].years}/>
        <UserChildren name={korisnici[2].name} years={korisnici[2].years}><p>{naziv}</p></UserChildren>
        <button onClick={this.promjeniGodine}>Promjeni godine</button>
      </>
    )
  }
  
}
