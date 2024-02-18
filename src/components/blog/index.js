import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import BlogItem from "./blogItem"

const Blog = () => {

    const articles = useStaticQuery(graphql`
    {
        allWpPost {
          nodes {
            id
            title
            slug
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
    `)

    const allArticles = articles.allWpPost.nodes.map((item) => (
        <BlogItem
            key={item.id}
            image={getImage(item.featuredImage?.node?.localFile ? getImage(item.featuredImage.node.localFile) : '')}
            slug={item.slug}
            alt={item.title}
            title={item.title}
        />
    ))
    
    return (
        <div className="px-10 py-12">
            <h3 className="text-2xl font-rammetto">Berbagi Tip dan Trik</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8">
                {allArticles}
            </div>
        </div>
    )
}

export default Blog