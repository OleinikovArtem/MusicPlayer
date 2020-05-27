import React from 'react'
import Navbar from '../Navbar/Navbar'
import cls from './Footer.module.css'
import { Grid } from '@material-ui/core'

const Footer = props => {
    let style = {}
    if(window.innerWidth < 1200 && window.innerWidth > 767) {
        style = {width: '85%'}
    }
    let MobBorde = {}
    if( window.innerWidth < 767) {
        MobBorde = {borderTop: 'solid 2px #fff', marginTop: '40px'}
    }
    return (
        <div className={cls.Box} style={{marginBottom: '75px' , width: '100%'}}>
            <Grid item lg={3} xs={false}></Grid>
            <Grid item xs={12} lg={9}>
                <Grid className='wrapper' style={style}> 
                    <Grid item lg={8} style={{position: 'relative' , ...MobBorde }}>
                        <Navbar style={{width: '100%' }}/>   
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}



export default Footer
