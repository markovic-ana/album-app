import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'
import { useParams } from 'react-router'
import SearchBar from '../../components/searchBar/SearchBar'
import { BASE_URL } from '../../config/params'
import ReactPaginate from 'react-paginate'
import { PhotosDTO } from '../../interfaces/PhotosDTO'
import { Link } from 'react-router-dom'
import styles from './AlbumDetailsPage.module.css'

const AlbumDetailsPage = () => {
  const [photosList, setPhotosList] = useState<PhotosDTO[]>([])
  const [pageNumber, setPageNumber] = useState(0)
  const [columnNumber, setColumnNumber] = useState(styles.photoContainer)

  let params = useParams()
  const twoColumns = styles.photoContainer2
  const threeColumns = styles.photoContainer
  const fourColumns = styles.photoContainer4

  const { isLoading, data, error } = useFetch(
    `${BASE_URL}/photos?albumId=${params.id}`
  ) as any

  useEffect(() => {
    if (!isLoading) {
      setPhotosList(data)
    }
  }, [data, isLoading])

  const itemsPerPage = 6
  const pagesVisited = pageNumber * itemsPerPage
  const pageCount = Math.ceil(photosList.length / itemsPerPage)

  const displayPhotos = photosList
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((photo, id) => (
      <div key={id}>
        <Link to={`/photos/${id}`}>
          <img src={`${photo.thumbnailUrl}`} alt={`${photo.title}`} />
          <p className={styles.imgTitle}>{photo.title}</p>
        </Link>
      </div>
    ))

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>
      {error && (
        <div>
          <p>Code: {error.status}</p>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {data && (
        <SearchBar
          placeholder="Search for a photo"
          data={data}
          params="photos"
        />
      )}
      <div className={columnNumber}>{data && displayPhotos}</div>
      <div className={styles.columnsIcons}>
        <button onClick={() => setColumnNumber(twoColumns)}>|| </button>
        <button onClick={() => setColumnNumber(threeColumns)}>|||</button>
        <button onClick={() => setColumnNumber(fourColumns)}>||||</button>
        {/* <GiDiceSixFacesTwo onClick={() => setColumnNumber(twoColumns)} />
        <GiDiceSixFacesThree onClick={() => setColumnNumber(threeColumns)} />
        <GiDiceSixFacesFour onClick={() => setColumnNumber(fourColumns)} /> */}
      </div>
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        pageCount={pageCount}
        pageRangeDisplayed={6}
        onPageChange={changePage}
        containerClassName={styles.pagenationButtons}
        previousLinkClassName={styles.pagenationPreviousLink}
        nextLinkClassName={styles.pagenationNextLink}
        activeClassName={styles.pagenationActive}
        disabledClassName={styles.pagenationDisabled}
      />
    </div>
  )
}

export default AlbumDetailsPage
