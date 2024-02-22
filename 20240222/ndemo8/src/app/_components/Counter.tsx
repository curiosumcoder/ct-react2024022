'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Counter() {
    const [numero, setNumero] = useState(0)
  return (
    <>
        <h3>Counter</h3>
        <p>Número: {numero}</p>
        <button onClick={() => setNumero(numero+1)}>Incrementar</button>
        {/* <Link href={`/product/${numero}`}>Product</Link> */}
    </>
  )
}

export default Counter