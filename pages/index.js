import Head from 'next/head'
const contentful = require('contentful')

  
const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN

})



export default function Home({fighters}) {
  return (
    <div className="container">
      <Head>
        <title>safe_space</title>
      </Head>

     <header>
       <h1>safe_space</h1>
       <p>
       <a>signup</a>
       </p>
     </header>
     <main>
    {fighters.map(fighter =><p><a>{fighter}</a></p>)}
     </main>
    
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

        main {
          width: 80%;
        }
        header p {
          align-self: center;
        }
        a {
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

export async function getStaticProps() {

  const { items } = await client.getEntries()

  const entries = items.map(({fields}) => fields.name)
  console.log('entries', JSON.stringify(entries, null , 2))
  return {
    props: {
     fighters: entries
    },
  }
}
