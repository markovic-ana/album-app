import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'
import { useParams } from 'react-router'
import SearchBar from '../../components/searchBar/SearchBar'
import { BASE_URL } from '../../config/params'
import ReactPaginate from 'react-paginate'
import { PhotosDTO } from '../../interfaces/PhotosDTO'
import styles from './AlbumDetailsPage.module.css'
import { SRLWrapper } from 'simple-react-lightbox'

const AlbumDetailsPage = () => {
  const [photosList, setPhotosList] = useState<PhotosDTO[]>([])
  const [pageNumber, setPageNumber] = useState(0)
  const [columnNumber, setColumnNumber] = useState(styles.photoContainer)

  let params = useParams()
  const twoColumns = styles.photoContainer2
  const threeColumns = styles.photoContainer
  const fourColumns = styles.photoContainer4

  const { isLoading, data, error } = useFetch<PhotosDTO[]>(
    `${BASE_URL}/photos?albumId=${params.id}`
  )

  useEffect(() => {
    if (!isLoading) {
      setPhotosList(data)
    }
  }, [data, isLoading])

  const itemsPerPage = 6
  const pagesVisited = pageNumber * itemsPerPage
  const pageCount = Math.ceil(photosList.length / itemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  }

  if (isLoading) return <div>Loading...</div>
  if (error)
    return (
      <div>
        <p>Code: {error.status}</p>
      </div>
    )

  return (
    <div>
      {data && (
        <SearchBar
          placeholder="Search for a photo"
          data={data}
          params="photos"
        />
      )}
      <SRLWrapper options={options}>
        <div className={columnNumber}>
          {data &&
            photosList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((photo, id) => {
                return (
                  <div key={id}>
                    <a href={`${photo.url}`}>
                      <img
                        className={styles.img}
                        src={`${photo.thumbnailUrl}`}
                        alt={`${photo.title}`}
                      />
                      <p className={styles.imgTitle}>{photo.title}</p>
                    </a>
                  </div>
                )
              })}
        </div>
      </SRLWrapper>
      <div className={styles.columnsIcons}>
        <button onClick={() => setColumnNumber(twoColumns)}>|| </button>
        <button onClick={() => setColumnNumber(threeColumns)}>|||</button>
        <button onClick={() => setColumnNumber(fourColumns)}>||||</button>
      </div>
      {data && (
        <ReactPaginate
          previousLabel={'??'}
          nextLabel={'??'}
          pageCount={pageCount}
          pageRangeDisplayed={6}
          onPageChange={changePage}
          containerClassName={styles.pagenationButtons}
          previousLinkClassName={styles.pagenationPreviousLink}
          nextLinkClassName={styles.pagenationNextLink}
          activeClassName={styles.pagenationActive}
          disabledClassName={styles.pagenationDisabled}
        />
      )}
    </div>
  )
}

export default AlbumDetailsPage
