import '../styles/Home.css'
import movieBg from "../images/init-img.jpg"
import MenuBar from '../components/MenuBar'

const Home =()=>{

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
                <div>
                    web info
                </div>
                <div>
                    review comments
                </div>
            </div>

            {/* recommend */}
            <div className="recommend-container">
                <h3>
                    Movie Recommendation 
                </h3>
                <div className="movie-container">
                    <div>
                        <div>
                            <h5>
                                Movie Name
                            </h5>
                            <p>Movie description</p>
                            <button>explore</button>
                        </div>
                        <div>
                            <img src="#"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>
                                Movie Name
                            </h5>
                            <p>Movie description</p>
                            <button>explore</button>
                        </div>
                        <div>
                            <img src="#"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>
                                Movie Name
                            </h5>
                            <p>Movie description</p>
                            <button>explore</button>
                        </div>
                        <div>
                            <img src="#"/>
                        </div>
                    </div>
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