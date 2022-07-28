/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import { Layout } from 'components/layout'
import 'bootstrap/dist/css/bootstrap.css'

const MyApp = ({ Component, pageProps }) => {

    return (
        <Layout>
            <Head>
                <meta charSet="utf-8"/>
                <title>Nexjs MongoDB Ejemplo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>            
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp