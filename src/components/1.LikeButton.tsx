import React, { useState, useEffect, useContext } from 'react'

// import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {

  const theme = useContext(ThemeContext)
  // console.log(theme);
  const style = {
    background: theme.background,
    color: theme.color
  }
  
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  // const positions = useMousePosition()
  useEffect(() => {
    console.log(theme);
    console.log('ksdfjldsjfklsdldsjfkldsjfldsjkl');
    
    document.title = `点击了${like}次`
  }, [like, on])

  return (
    <>
    {/* <h2> X：{positions.x}，Y：{positions.y}</h2> */}
      <button style = {style} onClick = {() => { setLike(like + 1)} }>
        {like}❤
      </button>
      <button onClick= { () => { setOn(!on) } }>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton