import React , {Fragment, useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch,Route, } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'

import About from './Pages/About/About'
import PlayerApp from './Player/App'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'

import Navbar from './Pages/components/Navbar/Navbar'
import Footer from './Pages/components/Footer/Footer'
import Grid from '@material-ui/core/Grid';

const store = createStore(reducer)

const App = (props) => {
  const [onPlayer, setOnPlayer] = useState(false)
  const handlerPlayerOn = () => { setOnPlayer(!onPlayer) }

  const checkPage = () => {
    if(window.location.pathname === '/player') {
      setOnPlayer(true)
    }
  }
// asdasd 

  useEffect(()=> {
    checkPage()
  }, [])

  //test commit
  let style = {}
  if(window.innerWidth < 1200 && window.innerWidth > 767) {
      style = {width: '85%'}
  }
  console.log(props)

  let Nav = (
      <Grid className='wrapper' style={style}> 
          <Grid item lg={8} style={{position: 'relative'}}>
              <Navbar style={{marginTop: 75}} type='main'/>
          </Grid>
      </Grid>
  )
  
  return (
          <Fragment>
               {!onPlayer ? Nav : null}
              <Switch>
                  <Route path='/player' component={PlayerApp}/> 
                  <Route path='/about'><About handlerPlayerOn={handlerPlayerOn}/></Route>
                  <Route path='/'>
                  <div style={{
                      display: 'flex', 
                      flexDirection:'column', 
                      alignItems:'center', 
                      justifyContent:'center', 
                      width: '100%', 
                      minHeight: '80vh',
                      overflowX: 'hidden',
                      paddingTop: '100px'
                  }}>
                    <ErrorPage clicked={()=>setOnPlayer(true)}/>
                  </div>
                  </Route>

              </Switch>

                {!onPlayer ? <Footer /> : null}
          </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


