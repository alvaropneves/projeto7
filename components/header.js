import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>Tudo sobre fundos de investimento</a>
        </Link>
        
      </div>
      <div className="logo2">
        <a href="https://google.com">
          <a>Ir para o blog</a>
        </a>
        
      </div>
      <style jsx>{`
        header {
          text-align: center;
          margin: 40px 0;
        }
        .logo a {
          text-shadow: rgba(0, 0, 0, 0.13) 3px 3px 5px;
          font-size: 40px;
          font-weight: 900;
          color: #190;
        }
      `}</style>
    </header>
  );
};

export default Header;
