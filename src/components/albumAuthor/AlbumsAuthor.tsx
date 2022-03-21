import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'
import { BASE_URL } from '../../config/params'
import { UsersDTO } from '../../interfaces/UsersInterfaces'

interface AuthorDTO {
  name: string
  id: number
}

const AlbumAuthor = ({ albumsData }) => {
  const [author, setAuthor] = useState<AuthorDTO>(null)
  const [users, setUsers] = useState<UsersDTO[]>([])

  const { isLoading, data } = useFetch(`${BASE_URL}/users`) as any

  useEffect(() => {
    if (!isLoading) {
      setUsers(data)
    }
  }, [data, isLoading])

  useEffect(() => {
    console.log(albumsData, users)
    //albumsData.userId nedef.
    const checkForAuthor = users.find((user) => user.id === albumsData.userId)
    console.log('check', albumsData.userId)
    if (checkForAuthor[0]) {
      setAuthor(checkForAuthor[0])
    }
  }, [albumsData, albumsData.userId, data, users])

  if (!author) {
    return <div>Loading...</div>
  }

  return <div>{author?.name}</div>
}

export default AlbumAuthor
