const feeds = [
  {
    title: 'Smashing Magazine',
    slug: 'smashingmagazine',
    website: 'https://www.smashingmagazine.com',
    url: 'https://www.smashingmagazine.com/feed/'
  },
  {
    title: 'CSS Tricks',
    slug: 'css-tricks',
    website: 'https://css-tricks.com',
    url: 'http://feeds.feedburner.com/CssTricks'
  },
  {
    title: 'freeCodeCamp',
    slug: 'freecodecamp',
    website: 'https://www.freecodecamp.org/news/',
    url: 'https://www.freecodecamp.org/news/rss/'
  },
  {
    title: 'DEV.to',
    slug: 'dev',
    website: 'https://dev.to',
    url: 'https://dev.to/feed'
  },
  {
    title: 'React.org',
    slug: 'react',
    website: 'https://reactjs.org',
    url: 'https://reactjs.org/feed.xml'
  },
  {
    title: 'Overreacted',
    slug: 'overreacted',
    website: 'https://overreacted.io',
    url: 'https://overreacted.io/rss.xml'
  },
  {
    title: 'JavaScript Playground',
    slug: 'javascriptplayground',
    website: 'https://javascriptplayground.com',
    url: 'http://feeds.feedburner.com/TheJavascriptPlayground'
  },
  {
    title: 'Scotch',
    slug: 'scotch',
    website: 'https://scotch.io',
    url: 'https://scotch.io/feed'
  },
  {
    title: 'CodePen',
    slug: 'codepen',
    website: 'https://blog.codepen.io',
    url: 'https://blog.codepen.io/feed/'
  },
  {
    title: 'Alligator.io',
    slug: 'alligator',
    website: 'https://alligator.io',
    url: 'https://alligator.io/feed.xml'
  },
  {
    title: 'Daily JS',
    slug: 'dailyjs',
    website: 'https://medium.com/dailyjs',
    url: 'https://medium.com/feed/dailyjs'
  },
  {
    title: 'Code Tuts+',
    slug: 'tutsplus',
    website: 'https://code.tutsplus.com',
    url: 'https://code.tutsplus.com/posts.atom'
  },
  {
    slug: "01-fic-multimercado-previdenciario-credito-privado",
    full_name: "01 FIC Multimercado Previdenciário Crédito Privado",
    cnpj: "62.465.117/0001-06",
    risk: "m",
    charge_performance: "-",
    charge_performance_index: "-",
    investiment_initial: "0",
    investiment_additionally: "0",
    min_balance: "0.00",
    min_withdrawal: "0.00",
    date_start: "2006-01-27",
    description_politics: "Aplica seus recursos em cotas de fundos, negociados nos mercados interno e externo, os quais investem em qualquer classe de ativos disponíveis no mercado, entre ela: renda fixa, renda variável, cambial, derivativos e cotas de outros fundos.",
    goals: "Obter ganhos de capital.",
    administrator_name: "BEM DTVM",
    anbima_class: "Multimercados",
    benchmark: "CDI",
    target_audience: "Exclusivo previdenciário",
    custodian: "Banco Bradesco",
    nickname_gestora: "Fundação Cesp (FUNCESP)",
    slug_gestora: "fundacao-cesp",
    full_address: "Alameda Santos, 2477 - 3° andar - Cerqueira César - São Paulo/SP",
    email: "atendimento@funcesp.com.br",
    director: "Jorge Simino Júnior",
    contact_name: "Jorge Simino Júnior",
    contact_email: "jorge.simino@funcesp.com.br",
    contact_phone: "(11) 3065-3000",
    contact_website: "https://www.funcesp.com.br"
  },
  {
    slug: "02-fic-multimercado-previdenciario-credito-privado",
    full_name: "02 FIC Multimercado Previdenciário Crédito Privado",
    cnpj: "62.465.117/0001-06",
    risk: "m",
    charge_performance: "-",
    charge_performance_index: "-",
    investiment_initial: "0",
    investiment_additionally: "0",
    min_balance: "0.00",
    min_withdrawal: "0.00",
    date_start: "2006-01-27",
    description_politics: "Aplica seus recursos em cotas de fundos, negociados nos mercados interno e externo, os quais investem em qualquer classe de ativos disponíveis no mercado, entre ela: renda fixa, renda variável, cambial, derivativos e cotas de outros fundos.",
    goals: "Obter ganhos de capital.",
    administrator_name: "BEM DTVM",
    anbima_class: "Multimercados",
    benchmark: "-",
    target_audience: "Exclusivo previdenciário",
    custodian: "Banco Bradesco",
    nickname_gestora: "Fundação Cesp (FUNCESP)",
    slug_gestora: "fundacao-cesp",
    full_address: "Alameda Santos, 2477 - 3° andar - Cerqueira César - São Paulo/SP",
    email: "atendimento@funcesp.com.br",
    director: "Jorge Simino Júnior",
    contact_name: "Jorge Simino Júnior",
    contact_email: "jorge.simino@funcesp.com.br",
    contact_phone: "(11) 3065-3000",
    contact_website: "www.funcesp.com.br"
  },
  {
    slug: "03-fic-multimercado-previdenciario-credito-privado",
    full_name: "03 FIC Multimercado Previdenciário Crédito Privado",
    cnpj: "62.465.117/0001-06",
    risk: "m",
    charge_performance: "-",
    charge_performance_index: "-",
    investiment_initial: "0",
    investiment_additionally: "0",
    min_balance: "0.00",
    min_withdrawal: "0.00",
    date_start: "2006-01-27",
    description_politics: "Aplica seus recursos em cotas de fundos, negociados nos mercados interno e externo, os quais investem em qualquer classe de ativos disponíveis no mercado, entre ela: renda fixa, renda variável, cambial, derivativos e cotas de outros fundos.",
    goals: "Obter ganhos de capital.",
    administrator_name: "BEM DTVM",
    anbima_class: "Multimercados",
    benchmark: "-",
    target_audience: "Exclusivo previdenciário",
    custodian: "Banco Bradesco",
    nickname_gestora: "Fundação Cesp (FUNCESP)",
    slug_gestora: "fundacao-cesp",
    full_address: "Alameda Santos, 2477 - 3° andar - Cerqueira César - São Paulo/SP",
    email: "atendimento@funcesp.com.br",
    director: "Jorge Simino Júnior",
    contact_name: "Jorge Simino Júnior",
    contact_email: "jorge.simino@funcesp.com.br",
    contact_phone: "(11) 3065-3000",
    contact_website: "www.funcesp.com.br"
  }
];

export default feeds;
