import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Generator from "../components/generator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p style={{textAlign: `center`}}>Emphasize 👏 your 👏 text.</p>
    <Generator />
  </Layout>
)

export default IndexPage
