import React, { Fragment } from 'react'
import Slider from '../components/Slider/Slider'
import RedBox from '../components/RedBox/RedBox';
import { Grid } from '@material-ui/core';
import cls from './About.module.css'
import Counter from '../components/Counter/Counter';
import Paragr from '../components/Paragr/Paragr';

const About = ({handlerPlayerOn}) => {
    let center = window.innerWidth < 959 ? {margin: '0 auto'} : {}
    return (
        <Fragment>
            <div className={cls.OneScreen}>
            </div>
            <section className={[cls.Grid, ' height100'].join(' ')}>
                <Slider handlerPlayerOn={handlerPlayerOn}/>
            </section>
            <section className={[cls.Grid, cls.aboutBlock].join(' ')}>
                <Grid item md={6} xs={10} className={cls.item} style={{flexBasis: '0'}}>
                    <div className={cls.aboutItem}>
                        <RedBox title='About us' subtitle='#freedommusic'/>
                        <Paragr className={cls.marginCenter}/>
                    </div>
                </Grid>
                <Grid item md={6} xs={10} style={{flexBasis: '0'}}>
                    <div className={cls.aboutItem}>
                        <RedBox title='Readme' subtitle='#freedommusic'/>
                        <Paragr className={cls.marginCenter}/>
                    </div>
                </Grid>
            </section>
            <section className={cls.counterSection}>
                <div className={`wrapper ${cls.counterBox}`}>
                    <Counter total='35842' text='Free tracks'/>
                    <Counter total='2689' text='Albums'/>
                    <Counter total='69' text='Users today'/>
                    <Counter total='9625' text='Users total'/>
                </div>
            </section>
            <section className={cls.lastSection}>   
                <div className="wrapper">
                    <Grid item md={7} xs={10} style={center}>
                        <div className={cls.lastSectionBox} style={center}>
                            <div className={cls.lastSectionTitle}>
                                Lorem ipsum dolar sit amet
                            </div>
                            <Paragr/>
                        </div>
                    </Grid>
                </div>
            </section>

        </Fragment>       
    )
}

export default About