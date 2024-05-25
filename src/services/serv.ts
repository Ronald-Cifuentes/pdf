import { signal } from '@preact/signals-react'

export const data = signal({})

export const getData = async () => {
  try {
    setTimeout(() => {})
    const res = await fetch('https://rickandmortyapi.com/api')
    const json = await res.json()
    data.value = json
  } catch (error) {
    console.log('Error', error)
  }
}
