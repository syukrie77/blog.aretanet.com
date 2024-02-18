import React from "react"
//import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import Blog from "../components/blog"
import Seo from "../components/seo"

const Home = () => {
      return (
        <Layout>
          <Seo/>
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