import { Link } from "react-router-dom";

const SingleTopNews = ({ sNews }) => {

    const { title, thumbnail_url, _id } = sNews
    return (
        <div>
            <div className="max-w-fit space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-fit border my-2 ">
                <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={thumbnail_url} alt="card navigate ui" />
                <div className="grid gap-2">
                    <h1 className="text-lg font-semibold ">{title.slice(0, 50)}</h1>
                </div>
                <div className="flex gap-4">
                    <Link to={`/news/${_id}`} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  duration-300 hover:bg-gray-200">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTopNews;