import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Navbar.module.css'
import Toolbar from './Toolbar'


export default class Navbar extends Component {
    
    state = {
        links: [
            {title: 'Home', exact: true, url: '/'},
            {title: 'About', exact: false, url: '/about'},
            {title: 'Features', exact: false, url: '/features'},
            {title: 'Works', exact: false, url: '/works'},
            {title: 'Team', exact: false, url: '/team'},
            {title: 'Prices', exact: false, url: '/teamprices'},
            {title: 'Contact', exact: false, url: '/contact'},
        ],
        show : true,
        mask: ''
    }   
    componentDidMount() {
        this.showToolBar()
    }
    componentDidUpdate() {
        if(this.state.show !== this.state.show) {
            this.showToolBar()
        }
    }
 
    showToolBar () {
        if( window.innerWidth < 767 && this.props.type === 'main') {
            console.log(this.props)
            this.setState({
                show: false,
                mask: cls.MobMask
            })
        }else {
            this.setState(prevState => ({
                ...prevState,
                show: true
            }))
        }
    }

    render() {
        const { links } = this.state
        const TopNavbar = this.state.show || window.innerWidth > 767? (
            <nav className={[cls.Navbar, 'wrapper', this.state.mask].join(' ')}>
            {links.map(({title, exact, url}) => (
                <NavLink 
                    className={cls.Item}
                    activeClassName={cls.active}
                    key={title} 
                    exact={exact}
                    to={url}
                    onClick={()=> { this.setState({show: false})}}
                    >
                
                    {title}
                </NavLink>
            ))}
            </nav> )
            : <Toolbar clicked={()=>this.setState({show: true}) }/>

        const FooterNavbar = (
            <nav className={[cls.Navbar, 'wrapper'].join(' ')}>
            {links.map(({title, exact, url}) => (
                <NavLink 
                    className={cls.Item}
                    activeClassName={cls.active}
                    key={title} 
                    exact={exact}
                    to={url}
                    onClick={ ()=> this.setState({show: false}) }
                    >
                    {title}
                </NavLink>
            ))}
            </nav> )
        
        return this.props.type ? TopNavbar : FooterNavbar
    }
          
}

