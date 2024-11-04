import { useContext } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Header/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/leftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    const {loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-1 border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    {
                        data.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
                    }
                </div>
                <div className="col-span-1 border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;