import React from 'react'
import useFetch from 'react-fetch-hook'
import { useParams } from 'react-router'
import { BASE_URL } from '../../config/params'
import { PhotosDTO } from '../../interfaces/PhotosDTO'
import styles from './PhotoDetailsPage.module.css'

const PhotoDetails = () => {
  let params = useParams()
  const { isLoading, data: photoData } = useFetch<PhotosDTO>(
    `${BASE_URL}/photos/${params.id}`
  )

  if (isLoading) return <div>Loading...</div>
  return (
    <div className={styles.container}>
      <h3>{photoData.title}</h3>
      <img
        className={styles.photo}
        src={photoData.thumbnailUrl}
        alt={photoData.title}
      />
    </div>
  )
}

export default PhotoDetails
