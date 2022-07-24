import Layout from "../../components/layout"
import fetch from "isomorphic-fetch";

const User = ({user}) => {
    return (
        <>
            <Layout>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                        <div className="card-header">
                            <label>{ user.name }</label>
                        </div>  
                            <div className="card-body">
                            <label>Company :</label> 
                            <p>
                                { user.company.name }
                                { user.company.catchPhrase }
                                { user.company.bs }    
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

User.getInitialProps = async (ctx) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`).then(resp => resp.json());
    return { user: data }
}

export default User;