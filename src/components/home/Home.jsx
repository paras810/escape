import React, { useContext } from 'react';
import P_context from '../../Contexts/paras/P_context';

const Home = () => {
  const vale = useContext(P_context)
  return (
    <>
    <div> this is {vale.state.navHome} and next is {vale.state.navCat}</div> <br /><hr /><br />
    <p>{vale.navVal2}</p>
    <br /><br />
    <ul>
      <li>{vale.array}</li>
    </ul>
    </>
  )
}

export default Home