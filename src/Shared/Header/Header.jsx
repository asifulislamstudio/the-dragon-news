import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <div className="flex flex-col justify-center items-center my-8">
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h3>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h3>
            <div className="flex bg-lime-700/40 rounded-lg text-black font-medium">
                <button className="btn bg-lime-700 text-white">Latest</button>
                <Marquee
                pauseOnHover={true}
                
                >
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, modi quibusdam? Dolores aperiam aliquam doloribus.</p>

                    <p className="mx-14">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, modi quibusdam? Dolores aperiam aliquam doloribus.</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, modi quibusdam? Dolores aperiam aliquam doloribus.</p>

                    <p className="mx-14">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, modi quibusdam? Dolores aperiam aliquam doloribus.</p>
                </Marquee>

            </div>
        </div>
    );
};

export default Header;