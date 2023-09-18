export default function UserChidren({name, years, handleChange, children}){
    return (
        <>
        <p>Pozdrav, moje ime je {name} i imam {years} godina. <input type="text" onChange={handleChange} placeholder={name}></input></p>
        {children}
        </>)
 }