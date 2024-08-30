import UserImg from '../images/init-img.jpg'

const ReviewCard=(props)=>{
    const{userName,review,movieName,star}=props

    return (
        <div className="review-item">
            <div className="user-info">
                <img src={UserImg} alt="user-img" />
                <h5>
                    {userName}
                </h5>
            </div>
            <div className="review-content">
                <p>
                    {review}
                </p>
                <div className="movie-info">
                    <h5>
                        {movieName}
                    </h5>
                    <div>
                        {/* ⭐⭐⭐⭐⭐ */}
                        {star}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewCard