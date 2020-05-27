import React from 'react'

const Logo = () => {
    const logoStyl = {
        fontSize: '20px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontWeight: 'bold'
    }

    return (
        <div style={logoStyl}>
                <a href="/about"><span style={{color:'#f23005', fontSize: '20px'}}>Freedome</span>music</a>
        </div>
    )
}

export default Logo