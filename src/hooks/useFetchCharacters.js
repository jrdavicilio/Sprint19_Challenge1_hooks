import { useEffect, useState } from "react"

export const useFetchCharacter = (url) => {
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const getCharacter = async () => {
    try {
      setIsLoading(true)
        const res = await fetch(url)
      if(!res.ok) throw new Error(`No ha encontrado el persopnaje ${res.status}`)
      const data = await res.json()
      setCharacter(data)

    } catch (err) {
      console.error (err)
    } finally {
        setIsLoading(false)
    }
}
    useEffect(() => {
      getCharacter()
    }, [url])
    return { character, isLoading }
  }

