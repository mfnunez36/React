import Layout from "../components/layout"
import Head from "next/head";
import fetch from 'isomorphic-fetch';
import Users from '../components/users'

const Index = (props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home</title>
                </Head>
                <h1>Hello World! </h1>
                <hr/>
                <Users users={props.users} />
            </Layout>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return { users: data }
}

export default Index;