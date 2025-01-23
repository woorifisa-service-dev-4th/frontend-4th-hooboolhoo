import React from 'react'
import TigerBody from './TigerBody'
import TigerTail from './TigerTail'

const Tiger = () => {
  return (
    <div className ="flex h-[200]">
        <TigerBody/>
        <div className="h-[200]">
            <div className="h-[45%]"></div>
        <TigerTail/>
        </div>
    </div>
  )
}

export default Tiger