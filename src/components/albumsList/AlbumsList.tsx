import React, { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import ReactPaginate from 'react-paginate'
import { BASE_URL } from '../../config/params'
import { AlbumsDTO } from '../../interfaces/AlbumsInterface'
import SearchBar from '../searchBar/SearchBar'
import AlbumsListstyles from './AlbumsList.module.css'
import { Link } from 'react-router-dom'
import AlbumAuthor from '../albumAuthor/AlbumsAuthor'

const AlbumsList = () => {
  const [albumsList, setAlbumsList] = useState<AlbumsDTO[]>([])
  const [pageNumber, setPageNumber] = useState(0)

  const {
    isLoading,
    data: albumsData,
    error,
  } = useFetch<AlbumsDTO[]>(`${BASE_URL}/albums`)

  useEffect(() => {
    if (!isLoading) {
      setAlbumsList(albumsData)
    }
  }, [albumsData, isLoading])

  const itemsPerPage = 10
  const pagesVisited = pageNumber * itemsPerPage
  const pageCount = Math.ceil(albumsList.length / itemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
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
      {albumsData && (
        <SearchBar placeholder="Search" data={albumsData} params="albums" />
      )}
      {albumsData &&
        albumsList
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((album, id) => {
            console.log('album:', album)
            return (
              <div key={id}>
                <Link to={`/albums/${id}`}>
                  <div className={AlbumsListstyles.album}>
                    <p>{album.title}</p>
                    <AlbumAuthor userId={album.userId} />
                  </div>
                </Link>
              </div>
            )
          })}
      {albumsData && (
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
      )}
    </div>
  )
}

export default AlbumsList
