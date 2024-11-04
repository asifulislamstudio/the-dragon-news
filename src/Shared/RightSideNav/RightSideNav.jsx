import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../assets/qZone1.png"
import img2 from "../../assets/qZone2.png"
import img3 from "../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div className="p-4">
            {/* Login with Google and GitHub */}
            <div className="p-2">
                <h2 className="text-2xl font-semibold mb-2">Log in</h2>
                <button className="btn btn-wide mb-4">
                   <FaGoogle></FaGoogle>
                    LogIn With Google
                </button>
                <button className="btn btn-wide">
                   <FaGithub></FaGithub>
                    LogIn With GitHub
                </button>
            </div>
            {/* social section */}
            <div className="my-4">
            <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
                <Link className="btn btn-wide border-2 bg-transparent" to="/">
                    <FaFacebook></FaFacebook>
                    Facebook

                </Link>
                <Link className="btn btn-wide border-2 bg-transparent" to="/">
                    <FaInstagram></FaInstagram>
                    Instagram

                </Link>
                <Link className="btn btn-wide border-2 bg-transparent" to="/">
                    <FaTwitter></FaTwitter>
                    Twitter

                </Link>
            </div>
            {/* Q-ZOne */}
            <div>
            <h2 className="text-2xl font-semibold mb-2">Q-Zone</h2>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;