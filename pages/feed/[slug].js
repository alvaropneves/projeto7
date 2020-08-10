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
        <h1>{feed.full_name}</h1>
        <div>CNPJ: {feed.cnpj}</div>
      

      <div>Tipo do fundo: {feed.anbima_class}</div>
      <div>Risco: {feed.risk}</div>
      <div>Benchmark: {feed.benchmark}</div>
      <div>Prazo de resgate: COLOCAR !!!!!</div>
      <div>Taxa de administração: COLOCAR !!!! </div>
      <div>Taxa de performance: {feed.charge_performance} do que exceder o {feed.charge_performance_index}</div>
      <div>Aplicação mínima: {feed.investiment_initial}</div>
      <div>Objetivos: {feed.goals}</div>
      <div>Política do fundo: {feed.description_politics}</div>
      </div>
      <br></br>
      <div>Informações sobre a gestora</div>
      <div className="info_gestora">
      <a href={feed.contact_website}>
            Site da gestora
          </a> (Olhar !!!!! rodar o exemplo cru e ver como ele usa URL)
      <div>Nome da gestora: {feed.nickname_gestora}</div>
      <div>Diretor: {feed.director}</div>
      <div>E-mail: {feed.email}</div>
      <div>Telefone: {feed.contact_phone}</div>
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
