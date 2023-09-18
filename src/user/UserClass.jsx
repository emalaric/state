import { Component } from 'react'

export default class UserClass extends Component {
    render() {
        const {name, years, handleChange} = this.props
        return (<>
        <p>Pozdrav, moje ime je {name} i imam {years} godina. <input type="text" onChange={handleChange} placeholder={name}></input> </p>
        </>)
    }
}