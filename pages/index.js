import Head from 'next/head'
import { getAllPosts } from '../lib/posts';
import styles from '../styles/Home.module.css'

export default function Home() {
  const posts = getAllPosts();
  return <div className ={styles.container}>
    <Head>
      <title>Cooking with nebi</title>
    </Head>
    <div>
      <h1>Cooking with nebi</h1>
    </div>
    <div>
      {posts.map(
        (p) => <BlogPostPreview key={p.id} data={p} />
        )}
    </div>
  </div>;

}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (<div  style={{maxWidth: "400px"}}>
    <img 
      src={data.coverImage}
      alt={data.title}
      style={{ width: "100%"}}
    />
    <h2>{data.title}</h2>
    <div>{data.PublishDate}</div>
    <p>
      {data.content}
    </p>
    <div style={{ fontWeight: "bold"}}>nebi the great chief</div>
  </div>
  );
}
