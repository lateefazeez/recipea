import { useEffect, useState } from "react"
import axios from "axios"



export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = () => {
      return axios
        .get(url, { signal: controller.signal})
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }

          const data = response.json()
          setData(data)
          setError(null)
        })
        .catch(err => {
          if (err.name === "AbortError") {
            console.log("The fetch was aborted")
          } else {
            setIsPending(false)
            setError("Could not fetch the data")
          }
        })
    }

    fetchData()
    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}