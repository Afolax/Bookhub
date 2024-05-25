import React from "react";
import './About.css'
import aboutImage from '../../imgs/istockphoto-505773698-612x612.jpg'

const About = () => {
    return ( 
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <div className="about-content grid">
                    <div className="about-img">
                        <img src={aboutImage} alt="About" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-title s-26 ls-1">About Bookhub</h2>
                        <p className="s-17">At vero eos et accusamus et iusto odio 
                        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                        cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
                        est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
                        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
                        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur 
                        aut perferendis doloribus asperiores repellat
                        </p>

                        <p className="s-17">At vero eos et accusamus et iusto odio 
                        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                        cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
                        est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
                        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
                        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur 
                        aut perferendis doloribus asperiores repellat
                        </p>
                        

                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default About;