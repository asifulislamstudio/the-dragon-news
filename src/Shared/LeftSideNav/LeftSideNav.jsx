import { useEffect, useState } from "react";
import SingleTopNews from "./singleTopNews";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [topNews, setTopNews] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setTopNews(data))
    },[])
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Categoris</h2>
            <div className="p-4">
                {categories.map(category => (
                    <p className="text-xl font-semibold my-4 hover:bg-slate-950 hover:text-white hover:p-1 hover:text-2xl" key={category.id}>{category.name}</p>
                ))}

            </div>
            {/* Top News */}
            <div>
                    {
                        topNews.map(sTopNews => (<SingleTopNews key={sTopNews._id} sNews={sTopNews} ></SingleTopNews>) )
                    }
            </div>
        </div>
    );
};

export default LeftSideNav;