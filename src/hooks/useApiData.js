import { useState, useEffect } from 'react'

function useApiData(url, token) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refetch = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': true,
        },
      })
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refetch() // Initial fetch on mount
  }, [url, token]) // Depend on the URL or token to refetch when they change

  return { data, loading, error, refetch }
}

export default useApiData
