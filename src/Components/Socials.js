import {ReactComponent as FacebookLogo} from "../Assets/facebook-social-logo.svg"
import {ReactComponent as GithubLogo} from "../Assets/GitHub-logo.svg"
import {ReactComponent as LinkedinLogo} from "../Assets/linkedin-logo.svg"


const Socials = () => {
    return(
            <div className="socials">
                <a href="https://www.linkedin.com/in/tian-miao-yu/">
                    <div className="socials-bubble" >
                        <div className="text-outer center-flex">
                            <div className="text-inner">
                            <LinkedinLogo
                            fill='#0E1428' // TODO: load this from CSS variable declaration
                            style={{
                                height:20,
                                width:20,
                            }}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a  href="https://github.com/TianmYu">
                    <div className="socials-bubble" >
                        <div className="text-outer center-flex">
                            <div className="text-inner">
                            <GithubLogo
                            fill='#0E1428'
                            style={{
                                height:20,
                                width:20,
                            }}/>
                            </div>
                        </div>
                    </div>
                </a> 
                <a href="https://www.facebook.com/tian.yu.3975">
                    <div className="socials-bubble" >
                        <div className="text-outer center-flex">
                            <div className="text-inner">
                            <FacebookLogo
                            fill='#0E1428'
                            style={{
                                height:20,
                                width:20,
                            }}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default Socials