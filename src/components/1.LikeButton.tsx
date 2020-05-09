import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  useEffect(() => {
    console.log('ksdfjldsjfklsdldsjfkldsjfldsjkl');
    
    document.title = `点击了${like}次`
  }, [like, on])

  return (
    <>
      <button onClick = {() => { setLike(like + 1)} }>
        {like}❤
      </button>
      <button onClick= { () => { setOn(!on) } }>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton