import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/page';
import PostList from '../../components/post-list';

export default function Feed({ feed }) {
  if (feed.error) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={feed.full_name}>
      <div className="info_fundo">
        <h1>{feed.full_name} oi </h1>
        <div>CNPJ: {feed.cnpj}</div>
        <div>Objetivos: {feed.goals}</div>
        <div>Risco: {feed.risk}</div>
        <div>Objetivos: {feed.contact_website}</div>

      

      </div>

      


      {feed.posts.length ? <PostList posts={feed.posts} /> : <div>Posts are not available at the moment</div>}
      <style jsx>{`
        .feed {
          margin-bottom: 30px;
          overflow: hidden;
        }
        h1 {
          color: #555;
          margin: 0 0 10px 0;
          font-size: 33px;
          line-height: 1.2;
        }
        .image {
          float: left;
          width: 110px;
          height: 110px;
          margin: 0 20px 20px 0;
        }
      `}</style>
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
