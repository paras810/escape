import React, { useState } from 'react'
import P_context from './P_context'

const P_state = (props) => {
    const navVal={
    navHome: "home components",
    navCat: "category components"
    }
   
const [state, setState] = useState(navVal)
const update =()=>{
    setTimeout(() => {
        setState({
            navHome: "HOME COMPONENTS",
            navCat: "CATEGORY COMPONENTS"
        })
    }, 2000);
}

const navVal2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis consequatur porro atque aperiam nostrum ut soluta facilis doloribus. Temporibus enim delectus voluptate vitae expedita beatae quo id odio magni blanditiis.`

const array =['paras', 'paras2', 'paras3','paras4','paras5']
   
    return (
        <P_context.Provider value={{state, update, navVal2 , array}}>
            {props.children}
        </P_context.Provider>
    )
}

export default P_state