import Head from 'next/head'

function HeadComponents({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | SmartActor</title>
    </Head>
  )
}

export default HeadComponents
