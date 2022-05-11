import Head from 'next/head'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div className="container">
        <div className="content">
          <h1 className="title">404 | Página não encontrada</h1>
          <span className="branding">
            Voltar para o&nbsp;
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                Início
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
