import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";
import { Footer } from "flowbite-react";
export default function FooterPage() {
    return (
        <Footer className="border border-t-8 border-teal-500">
            <div>
                <div>
                    <div>
                        <Link to={"/"}>
                            <span>
                                Bharat's
                            </span>
                            Blog
                        </Link>
                    </div>
                </div>
                <div>
                    <Footer.Copyright href="#" by="" year={new Date().getFullYear()} />
                    <div>
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>

                </div>

            </div>


        </Footer>
    )
}
