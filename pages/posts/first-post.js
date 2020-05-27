import Head from 'next/head';

// To be used to create a link back to the homepage
import Link from 'next/link';

// Common layout
import Layout from '../../components/layout';

// Can have any name (FirstPost), but msut be exported as a default export
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
