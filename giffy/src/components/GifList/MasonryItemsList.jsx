import * as React from 'react'
import Masonry from 'react-masonry-css'
import Gif from '../Gif/Gif'

import './MasonryItemsList.css'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

export default function MasonryGifList ({ itemData, page, setPage }) {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    550: 1
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {itemData?.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}

      </Masonry>
      {/*  */}
      <ScrollToTopButton />
      <LoadMoreBtn
        itemData={itemData}
        page={page}
        setPage={setPage}
      />
    </>

  )
}
