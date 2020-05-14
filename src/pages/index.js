import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <Header />
  <div className="homepage">
    <SEO title="Jonathan" />
    <p className="intro1">Hi, my name is</p>
    <h2 className="introname">Aditi.</h2>
   <h3>a community focused software engineer<br />in New York City!</h3>
    
    {/* <p className="para"><br />
 </p> */}
    <div className="btnrow">
    <button className="button"><a className="btnlink" href="mailto:aditidevelops@gmail.com">Get In Touch</a></button>
    <button className="button"><a className="btnlink" href="https://drive.google.com/file/d/1TafkGyEq01zJXOlJNXotM5GqlhPS0_Md/view">&nbsp;Resume&nbsp;</a></button>
    </div>
    {/* <div style={{ maxWidth: `100px`, marginB `1.45rem` }}>
      <Image />
    </div> */}
    {/* <AniLink cover to="projects" bg="#663399">
      <a className="projbtn">Projects</a>
    </AniLink> */}
  </div>
  <Footer />
  </div>
)

export default IndexPage
