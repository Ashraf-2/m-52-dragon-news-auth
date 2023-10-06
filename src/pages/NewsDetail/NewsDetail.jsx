import { useParams } from "react-router-dom";
import Header from "../SharedPages/Header/Header";
import RightSideNav from "../SharedPages/RightSIdeNav/RightSideNav";
import Navbar from "../SharedPages/Navbar/Navbar";

const NewsDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>


            

        </div>
    );
};

export default NewsDetail;