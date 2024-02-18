import React from "react"
//import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import Blog from "../components/blog"
import SEO from "../components/seo"

const Home = () => {
      return (
        <Layout>
          <SEO/>
          <Header/>
          <Blog/>
        </Layout>
      )
}

export default Home

export const pageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          slug
          excerpt
        }
      }
    }
  }
`