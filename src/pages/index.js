import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MainHero } from "../components/mainHero"
import { SignUp } from "../components/signUp"



const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <MainHero />
      <SignUp />
      {/* <img
        style={{ width: "300px" }}
        alt="A random dog"
        src={serverData.message}
      /> */}
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
