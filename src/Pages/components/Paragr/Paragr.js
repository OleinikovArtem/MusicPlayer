import React from 'react'
// import PropTypes from 'prop-types'

let styleP = {
    fonsSize: '14px',
    fontWeight: '300',
    wordBreak: 'break-all'
}

const Paragr = ({text}) => {
    let p = null
    if(text !== undefined) {
        p = text
    }else {
        text = `Lorem ipsum dolor sit amet
        consectetur adipiscing elit. Pellentesque condimentum, tortor convallis eleifend dapibus, quam sem commodo lorem, vitae suscipit sapien purus dignissim orci. Ut vulputate scelerisque sapien tempor dignissim. Vivamus accumsan condimentum rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor lectus et nibh tincidunt, et dignissim lectus scelerisque. Maecenas tincidunt fermentum tristique. Duis sem odio, porttitor id sapien ullamcorper, sagittis hendrerit tortor. Nam aliquam posuere facilisis. Duis ornare sem tellus, in sagittis augue rutrum id.`
    }

    return (
        <p style={styleP}>
            {text}
        </p>
    )
}

// Paragr.propTypes = {

// }

export default Paragr
