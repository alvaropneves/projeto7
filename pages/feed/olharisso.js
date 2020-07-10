import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/page';
import PostList from '../../components/post-list';

export default function Feed({ feed }) {
  if (feed.error) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={feed.title}>
    	<h1>Titulo = feed.title</h1>
    	<div>Oi meu nome é feed.slug</div>
    	<div>oi oi</div>
    	<h2>so umas h2 pra testar</h2>
    </Page>
  );
}

Feed.getInitialProps = async ({ res, query }) => {
  let api_base = process.env.NODE_ENV == 'production' ? 'https://next-feed-reader.now.sh' : 'http://localhost:3000';
  let r = await fetch(`${api_base}/api/feeds/${query.slug}`);
  let feed = await r.json();

  if (feed.error && res) {
    res.statusCode = 404;
  }

  return {
    feed
  };
};
