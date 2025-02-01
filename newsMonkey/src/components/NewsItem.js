import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, publishedAt, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="badge rounded-pill text-bg-danger" style={{ position: 'absolute', zIndex: '1', right: '0' }}>{source}</span>
        <img src={!imageurl ? "https://image.cnbcfm.com/api/v1/image/107346161-1702345318636-gettyimages-519814322-img_7726.jpeg?v=1702345425&w=1920&h=1080" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {publishedAt = (new Date(publishedAt)).toGMTString()}</small></p>
          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

