import Link from 'next/link'

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">
          Nextjs Template + ESLint (Standard) + Prettier
        </h1>
        <span className="branding">
          By&nbsp;
          <Link href="https://github.com/otonalmeidas">
            <a target="_blank" rel="noopener noreferrer">
              @otonalmeidas
            </a>
          </Link>
          <strong>|</strong>
          <Link href="https://tonalmeida.dev">
            <a target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </Link>
        </span>
        <h2 className="subtitle">Descrição:</h2>
        <p className="paragraph">
          Para projetos que será utilizado Nextjs + TypeScript.
        </p>
        <h2 className="subtitle">Dependências de desenvolvimento:</h2>
        <nav className="nav">
          <ul>
            <li>@typescript-eslint/eslint-plugin</li>
            <li>@typescript-eslint/parser</li>
            <li>eslint</li>
            <li>eslint-config-next</li>
            <li>eslint-config-prettier</li>
            <li>eslint-config-standard</li>
            <li>eslint-import-resolver-typescript</li>
            <li>eslint-plugin-import</li>
            <li>eslint-plugin-import-helpers</li>
            <li>eslint-plugin-n</li>
            <li>eslint-plugin-node</li>
            <li>eslint-plugin-prettier</li>
            <li>eslint-plugin-promise</li>
            <li>eslint-plugin-react</li>
            <li>prettier</li>
            <li>typescript</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
