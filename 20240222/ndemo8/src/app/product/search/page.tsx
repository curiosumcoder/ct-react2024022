import React from 'react'

export default function ProductSearch() {

    async function handleSubmit(fd: FormData) {
        'use server'
        const filter = fd.get('filter')?.valueOf() ?? ''

        console.log(`Searching ...${filter}`)
    }

  return (
    <>
        <h3>Product Search</h3>
        <form action={handleSubmit}>
            <input type="search" name="filter" />
            <button type='submit'>Search</button>
        </form>
    </>
  )
}
