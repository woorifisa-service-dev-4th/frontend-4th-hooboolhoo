'use client'

import { Button } from "@chakra-ui/react"

const VsButton = ({choice, text, size}) => {
  return (
  <Button
    color = 'black'
    fontSize= {size.fontSize}
    borderRadius = {20}
    px = {size.px}
    py = {size.py}
    bg = {choice === 'left' ? "#FFCC00":"#432616"}
    onClick ={()=> {}}
    >
      {text}
  </Button>
  )
}

export default VsButton