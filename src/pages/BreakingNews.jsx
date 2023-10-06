import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn">Breaking News</button>
            <Marquee pauseOnHover={true} speed={50}>
                <Link to="/" className="mr-10">I can be a React component, multiple React components.....</Link>
                <Link to="/" className="mr-10">I can be a React component, multiple React components.....</Link>
                <Link to="/" className="mr-10">I can be a React component, multiple React components.....</Link>
                
            </Marquee>

        </div>
    );
};

export default BreakingNews;