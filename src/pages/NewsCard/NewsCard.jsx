import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, title, thumbnail_url, details,total_view,rating,image_url } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 ">
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`} className="text-blue-400 font-bold ">Read more..</Link> </p> : <p>{details}</p>
                    }
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;