import Link from "next/link";
import Head from 'next/head'
export default function SecondPost() {
  return (
    <>
          <div>
              <Head>
                  <title>second post</title>
              </Head>
              <h1>second post</h1>
              <Link href="/"><a>Back to home!</a></Link>
      </div>
    </>
  );
}
