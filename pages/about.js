import Head from 'next/head'
import FrontendLayout from "../layouts/FrontendLayout";

const About = () => {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1 className="text-2xl">About Page</h1>
        </div>
    );
}

About.getLayout = function getLayout(page) {
    return (
      <FrontendLayout>
        {page}
      </FrontendLayout>
    )
  }
export default About;