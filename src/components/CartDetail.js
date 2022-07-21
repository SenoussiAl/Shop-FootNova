import { Component } from 'react'

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    product: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottom: 'solid 1px #aaa',
        display: 'flex',
        listStyleType: 'none',
        justifyContent: 'space-between',
        padding: '25px 20px',
        borderRadius: '5px',
    }
}

class CartDetail extends Component {
    render () {
        const { cart } = this.props
        console.log(cart)
        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map( x => 
                        <li style={styles.product} key={x.name}>
                            <img width="50" height="32" alt={x.name} src={x.img} />
                            {x.name} <span>{x.total}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetail