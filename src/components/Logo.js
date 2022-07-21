import { Component } from 'react'

const styles = {
    logo: {
        fontWeight: '500',
        fontSize: '2.5rem',
    }
}

class Logo extends Component {
    render () {
        return (
            <div style={styles.logo}>
                FootNova
            </div>
        )
    }
}

export default Logo;