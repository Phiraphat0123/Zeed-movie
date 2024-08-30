import UserImg from '../images/init-img.jpg'

const RecommendMovie=(props)=>{
    const {movieName,movieDesc,star,watch}=props
    return (
        <div className="movie-item" >
            <div className="movie-info">
                <div className="movie-name">
                    <h5>
                        {movieName}
                    </h5>
                    <div className="star-and-watch">
                        <div>
                            {/* ⭐⭐⭐⭐ */}
                            {star}    
                        </div>
                        <div>
                            {watch}
                        </div>
                    </div>
                </div>
                <p>
                    {movieDesc}
                </p>
                <button>
                    explore
                </button>
            </div>
            <div>
                <img src={UserImg}/>
            </div>
        </div>
    )
}
export default RecommendMovie