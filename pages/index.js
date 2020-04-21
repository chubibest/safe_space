import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>safe_space</title>
      </Head>

     <header>
       <h1>safe_space</h1>
       <p>
       <a>Login</a>
       </p>
     </header>

    <div>

    </div>
      <style jsx>{`
        .container {
          min-width: 100vw;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: ;
          align-items: center;
        }

        header {
          width: 100%;
          padding-top: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }

        header p {
          align-self: center;
        }
        header p a {
          cursor: pointer;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
