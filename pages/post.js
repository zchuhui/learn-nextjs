import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async (context) =>{
    console.log(context.query);
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();

    console.log(`Fetched show: ${data.name}`)

    return {
        show:data
    }
}

export default Post

