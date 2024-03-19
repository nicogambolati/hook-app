

export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section className="card-container">
        <h2 className="text-capitalize">#{id} - {name}</h2>
        <div>
            {sprites.map((sprite) => (
                <img key={sprite} src={sprite} alt={name} />
            ))}
        </div>
    </section>
  )
}
