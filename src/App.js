import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    products: [
      { name: "Air Jordan 1 Retro High OG 'Stage Haze", 
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/682/080/original/895937_01.jpg.jpeg?action=crop&width=1250",
      price: 165.00},
    {
      name: "Air Jordan 4 Retro PS 'Military Black",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/423/166/original/940616_01.jpg.jpeg?action=crop&width=1250",
      price: 265.00
    },
    {
      name: "Under Armour Curry Flow 9",
      img: "https://images.stockx.com/images/Under-Armour-Curry-Flow-8-Sesame-Street-Beyond-The-Stripe.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1655952791&q=80",
      price: 288.00
    },
    {
      name: "Off-White x Chuck 70 'White",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/015/310/233/original/459602_01.jpg.jpeg?action=crop&width=1250",
      price: 1150.00
    },
    {
      name: "Space Jam x Classic Clogs 'Tune Squad'",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/336/094/original/797255_01.jpg.jpeg?action=crop&width=1250",
      price: 95.00
    },
    {
      name: "Off-White x Wmns Air Jordan 4 SP 'Sail",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/039/610/547/original/603678_01.jpg.jpeg?action=crop&width=1250",
      price: 500.00
    },
    {
      name: "Air Jordan 1 Retro High OG 'University Blue",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/887/653/original/599627_01.jpg.jpeg?action=crop&width=1250",
      price: 650.00
    }
    ],
    cart: [],
    isCartVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state
    
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        total: 1,
      })
    })
  }
  removeFromCart = (product)=>{
    const { cart } = this.state
  
  return this.setState({
    cart: this.state.cart.concat({
      ...product,
      total: - 1,
    })
  })
}

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return(
      <div>
        <Navbar 
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart} />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            removeFromCart = {this.removeFromCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;