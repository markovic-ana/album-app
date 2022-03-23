import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'
import { BASE_URL } from '../../config/params'
import { UsersDTO } from '../../interfaces/UsersInterfaces'

interface AuthorDTO {
  name: string
  id: number
}

interface Props {
  userId: number
}

const AlbumAuthor = ({ userId }: Props) => {
  const [author, setAuthor] = useState<AuthorDTO>(null)
  const [users, setUsers] = useState<UsersDTO[]>([])

  const { isLoading, data } = useFetch<UsersDTO[]>(`${BASE_URL}/users`)

  useEffect(() => {
    if (!isLoading) {
      setUsers(data)
    }
  }, [data, isLoading])

  useEffect(() => {
    if (users.length > 0) {
      const checkForAuthor = users.find((user) => user.id === userId)
      setAuthor(checkForAuthor)
    }
  }, [userId, users])

  if (!author) {
    return <div>Loading...</div>
  }

  return (
    <div>{users && <p style={{ color: '#c6c6c6' }}>- {author?.name}</p>}</div>
  )
}

export default AlbumAuthor
