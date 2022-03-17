import React, { useState } from 'react'
import CounterButton from './CounterButton';
import ToggleButton from './ToggleButton'
import CommentsList from './CommentsList'

function Main({ upvotes, downvotes, comments }) {
  const [countUp, setCountUp] = useState(upvotes);
  const [countDown, setCountDown] = useState(downvotes);
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="Main">
      <span>
        <CounterButton counter={countUp} setCounter={setCountUp} emoji={"👍"} />
      </span>
      <span>
        <CounterButton counter={countDown} setCounter={setCountDown} emoji={"👎"} />
      </span>
      <ToggleButton show={showComments} setShow={setShowComments} />
      {showComments
        ? <CommentsList items={comments} />
        : null
      }

    </div>
  )
}

export default Main