import React, {useState} from 'react'
import cls from './Slider.module.css'
import { Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const Slider = ({handlerPlayerOn}) => {
    const [state, setState] = useState({
        slides:['Welcome to the world of', 'Slider Two', 'Slider Three'],
        IndexActiveSlide: 0
    })

    const prevSlide = () => {
        let i = state.IndexActiveSlide
        i = i !== 0 ? i -1 : state.slides.length - 1
        setState((prevSteta)=> ({
            ...prevSteta,
            IndexActiveSlide: i
        }))
    }
    const nextSlide = () => {
        let i = state.IndexActiveSlide
        i = state.slides.length - 1 > i ? i + 1 : 0
        setState((prevSteta)=> ({
            ...prevSteta,
            IndexActiveSlide: i
        }))
    }

    return (
        <div className='wrapper'>
            <Grid  item lg={8} >

            <div className={cls.Box}>
                <div className={cls.stepBlock}>
                    <button className={[cls.step, cls.stepPrev].join(' ')} onClick={prevSlide}></button>
                    <button className={[cls.step, cls.stepNext].join(' ')} onClick={nextSlide}></button>
                </div>

                <div className={cls.slideItem}>
                    <div className={cls.slideSubtitle}>
                        {state.slides[state.IndexActiveSlide]}
                    </div>
                    <h2 className={cls.slideTitle}>
                        <span className={cls.red}>Freedom</span> music
                    </h2>
                    <p className={cls.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque. Maecenas tincidunt fermentum tristique. Duis sem odio, porttitor id sapien ullamcorper, sagittis hendrerit tortor. Nam aliquam posuere facilisis. Duis ornare sem tellus, in sagittis augue rutrum id.</p>
                </div>

                <div className={cls.btnsBlock}>
                    <NavLink to='/player' className={cls.btn} onClick={handlerPlayerOn}>start now</NavLink>
                    <NavLink to='/' className={cls.btn} >learn more</NavLink>
                </div>
            </div>
            </Grid>
        </div>
    )
}

Slider.propTypes = {

}

export default Slider
