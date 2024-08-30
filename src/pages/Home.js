import '../styles/Home.css'
import movieBg from "../images/init-img.jpg"
import MenuBar from '../components/MenuBar'
import ReviewCard from '../components/ReviewCard'
import UserImg from '../images/init-img.jpg'
import RecommendMovie from '../components/RecommendMovie'


const Home =()=>{

    const reviewDatalist=[
    {
        userName:"hello movie",
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        movieName:"Movie name",
        star:4.5
    },
    {
        userName:"hello movie",
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        movieName:"Movie name",
        star:4.5
    },
    {
        userName:"hello movie",
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        movieName:"Movie name",
        star:4.5
    }
    ,
    {
        userName:"hello movie",
        review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        movieName:"Movie name",
        star:4.5
    }
    ]

    const movieDataList=[
        {
            movieName:"movie name",
            movieDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            star:4.5,
            watch:100
        }
    ]

    return (
        <>
        <MenuBar/>
        <div className="home-container">
            {/* newest movie banner */}
            <div className="newest-movie-container">
                <div className="title-container">
                    <h3>
                        Newest Movie Name
                    </h3>
                    <p>
                        description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <button>
                        เข้าไปดูกัน!
                    </button>
                </div>
                {/* video or img container
                <div className="movie-img-container">
                    <img src="#"/>
                </div>*/}
                <img src={movieBg} className="background-movie-img" />
            </div>

            {/* comments and review */}
            <div className="web-info-container">
                <div className="information-container">
                    <div className="info-item">
                        <h4>
                            100k
                        </h4>
                        <h5>
                            Reviews
                        </h5>
                    </div>
                    <hr/>
                    <div className="info-item">
                        <h4>
                            4.5
                        </h4>
                        <h5>
                            Stars
                        </h5>
                    </div>
                    <hr/>
                    <div className="info-item">
                        <h4>
                            100
                        </h4>
                        <h5>
                            Movies
                        </h5>
                    </div>
                </div>
                <div className="review">
                    <button>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0718 28.5445L13.9164 20.5216C13.4859 20.1091 13.143 19.6118 12.9086 19.06C12.6741 18.5082 12.5532 17.9134 12.5532 17.3125C12.5532 16.7116 12.6741 16.1168 12.9086 15.5649C13.143 15.0131 13.4859 14.5159 13.9164 14.1033L22.0718 6.08044" stroke="#FCBF49" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div className="reviews-container" >
                        
                        <div className="review-list">
                            {reviewDatalist.map((element,index)=>{
                                return <ReviewCard {...element} key={index} />
                            })}
                        </div>
                        
                    </div>
                    <button>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9282 5.45548L20.0836 13.4784C20.5141 13.8909 20.8571 14.3882 21.0915 14.94C21.3259 15.4918 21.4469 16.0866 21.4469 16.6875C21.4469 17.2884 21.3259 17.8832 21.0915 18.4351C20.8571 18.9869 20.5141 19.4841 20.0836 19.8967L11.9282 27.9196" stroke="#FCBF49" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* recommend */}
            <div className="recommend-container">
                <h3>
                    Movie Recommendation 
                </h3>
                <div className="movie-container">
                    {
                        movieDataList.map((element,index)=>{
                            return  <RecommendMovie {...element} key={index} />

                        })
                    }
                    
                </div>
            </div>

            {/* let see what zeed got */}
            <div className="">
                <div>
                    <h5>
                        อย่าได้รอช้า มาทำวันนี้ของคุณให้แย่กัน!!
                    </h5>
                    <p>
                        description
                    </p>
                    <button>
                        explore
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home