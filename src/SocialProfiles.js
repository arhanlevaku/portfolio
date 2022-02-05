import { render } from "@testing-library/react";
import React, {Component} from "react";
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link, image} = this.props.SocialProfile;
        return(
            <div style={{display:"inline-table"}}>
                <a href={link}><img src={image} alt='social-profile' style={{width: 100, height:100 }}/></a>
            </div>
        )
    }
}
class SocialProfiles extends Component {

    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map( SOCIAL_PROFILES => {
                            return <SocialProfile key={SOCIAL_PROFILES.id} SocialProfile={SOCIAL_PROFILES} />
                        })
                    }
                </div>
            </div>
        )
    };
}

export default SocialProfiles;