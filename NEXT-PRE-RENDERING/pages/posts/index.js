import Link from 'next/link'
function PostList({ posts }) {
    console.log(posts);
    return <>
        <h1>posts are listed below</h1>
        {posts.map((post) => {
            const { userId, id, title, body } = post;
            return <>
                <div key={id}>

                    <Link href={`posts/${id}`}><a>{title}</a></Link>
                   </div></>
        })}
        </>
}

export default PostList;
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
   // console.log(data)

    return {
        props: {
            posts: data,
        }
    }
}
 

