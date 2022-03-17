import React from 'react'

function Header({ embedUrl, title, views, createdAt }) {
  return (
    <div className="Header">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
    </div>
  )
}

export default Header