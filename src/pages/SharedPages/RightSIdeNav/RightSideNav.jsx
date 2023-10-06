import { AiOutlineGoogle,AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>

                <h2>Login with</h2>
                

                    <button className="btn w-full normal-case btn-outline">
                        <AiOutlineGoogle className='text-blue-500'></AiOutlineGoogle>
                        Login with Google
                    </button>
                    <button className="btn w-full normal-case btn-outline">
                        <BsGithub className=''></BsGithub>
                        Login with Github
                    </button>
                    
                
            </div>
            <div className='p-4 border rounded mb-4'>

                <h2>Find Us On</h2>
                

                    <a href='www.facebook.com' className="flex flex-row items-center mb-1 w-full normal-case gap-2 rounded-t-lg border-x">
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        Facebok
                    </a>
                    <a href="www.twitter.com" className="flex flex-row items-center mb-1 w-full normal-case gap-2 rounded-t-lg border-x">
                        <AiFillTwitterCircle className='text-blue-400'></AiFillTwitterCircle>
                        Twitter
                    </a>
                    <a href='www.instagram.com' target='_blank' className="flex flex-row items-center gap-2 mb-1 w-full normal-case rounded-t-lg border-x">
                        <AiFillInstagram className='text-red-300'></AiFillInstagram>
                        Instagram
                    </a>
            </div>
            <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={Qzone1} alt="qzone1" />
                <img src={Qzone2} alt="qzone2" />
                <img src={Qzone3} alt="qzone3" />
            </div>
        </div>
    );
};

export default RightSideNav;