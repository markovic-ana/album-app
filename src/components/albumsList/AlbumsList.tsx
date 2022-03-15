import React, { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import ReactPaginate from 'react-paginate'
import { BASE_URL } from '../../config/params'
import { AlbumsDTO } from '../../interfaces/AlbumsInterface'
import AlbumsListstyles from './AlbumsList.module.css'

const AlbumsList = () => {
  const [albumsList, setAlbumsList] = useState<AlbumsDTO[]>([])
  const [pageNumber, setPageNumber] = useState(0)

  const { isLoading, data, error } = useFetch(`${BASE_URL}/albums`) as any

  useEffect(() => {
    if (!isLoading) {
      setAlbumsList(data)
    }
  }, [data, isLoading])

  const albumsPerPage = 10
  const pagesVisited = pageNumber * albumsPerPage
  const pageCount = Math.ceil(albumsList.length / albumsPerPage)

  const displayAlbums = albumsList
    .slice(pagesVisited, pagesVisited + albumsPerPage)
    .map((album) => (
      <div className={AlbumsListstyles.album} key={album.id}>
        {album.title}
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
      {data && displayAlbums}
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        pageCount={pageCount}
        pageRangeDisplayed={6}
        onPageChange={changePage}
        containerClassName={AlbumsListstyles.pagenationButtons}
        previousLinkClassName={AlbumsListstyles.pagenationPreviousLink}
        nextLinkClassName={AlbumsListstyles.pagenationNextLink}
        activeClassName={AlbumsListstyles.pagenationActive}
        disabledClassName={AlbumsListstyles.pagenationDisabled}
      />
    </div>
  )
}

export default AlbumsList
