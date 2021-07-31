//import { useRouter } from "next/router";

function Post({ post }) {
  //  const { id, title, body } = post;
//   const router = useRouter();
//   if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <div>
        <h1>{post.id}</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default Post;



export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: '1' },
      },

      {
        params: { postId: '2' },
      },
      {
        params: { postId:'3' },
      },
    ],
    fallback: 'blocking',
  };
}
