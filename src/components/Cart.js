import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '20px',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 15,
        top: 20,
    }
}

class Cart extends Component {
    render () {
        const { cart, isCartVisible, showCart } = this.props
        const total = cart.reduce((acc, grid) => acc + grid.total, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    { total !== 0
                    ? <BubbleAlert value={total} />
                    : null}
                </span>
                <button onClick={showCart} style={styles.cart}>
                    Cart
                </button>
                {isCartVisible ? <CartDetail cart={cart} /> : null}
            </div>
        )
    }
}

export default Cart