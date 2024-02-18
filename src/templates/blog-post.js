import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  
  return (
    <Layout>
      <div className="w-4/5 max-w-3xl mx-auto mt-9 px-6">
        <h1 className="font-rammetto text-gray-900 mb-6 uppercase tracking-wide mt-8">{post.title}</h1>
        {post.featuredImage && (
          <div>
          <GatsbyImage image={getImage(post.featuredImage.node.localFile)} 
          alt={post.title} 
          className="mb-6 mt-8"
          style={{ width: "100%", height: "auto" }} 
          />
          </div>
        )}
        <div className="prose lg:text-lg xl:text-xl mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`
