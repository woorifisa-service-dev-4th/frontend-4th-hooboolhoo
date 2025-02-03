'use client'

import { Button } from "@chakra-ui/react"

const VsButton = ({choice, text, size, cardId}) => {
  return (
  <Button
    color = 'black'
    fontSize= {size.fontSize}
    borderRadius = {10}
    // px = {size.px}
    // py = {size.py}
    bg = {choice === "left" ? "#FFCC00":"#FF3B30"}
    onClick ={()=> {}}
    >
      {text}
  </Button>
  )
}

export default VsButton