export default function UserFunction({name, years, handleChange}){
   return <p>
            Pozdrav, moje ime je {name} i imam {years} godina.
            <input type="text" onChange={handleChange} placeholder={name}></input>
        </p>
}