function Personaje ({titulo, nombre, imagen}) {
return (
    <>
    <h2>{titulo}</h2>
    <p>{nombre}</p>
    <img src={imagen} />
    </>
)
}

export default Personaje