import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
const Item = ({id, name,img, price,stock}) => {
    return(
        <article>
            <header>
            <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
                <section>
                    <p>
                        Precio: ${price}
                    </p>
                    <p>
                        Stock disponible:{stock}
                    </p>
                </section>
                <footer>
                <Link style={{backgroundColor:'black'}} to={`/item/${id}`}> Ver Detalle </Link>
                </footer>
                <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log(`Compraste ${quantity} items.`)}/>
            </picture>
        </article>
    )
}

export default Item