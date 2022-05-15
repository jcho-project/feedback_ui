import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    // Calculate ratings avg
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // Change to 1 decimal place unless 0 in which case trim
    average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats