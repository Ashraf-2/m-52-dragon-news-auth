import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./SharedPages/Header/Header";
import LeftSideNav from "./SharedPages/LefSideNav/LeftSideNav";
import Navbar from "./SharedPages/Navbar/Navbar";
import RightSideNav from "./SharedPages/RightSIdeNav/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> 
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="col-span-2 ">
                    <h2 className="text-xl">news comming soon</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;