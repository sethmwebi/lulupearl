import Head from "next/head"
import Layout from "../components/Layout"

const Contact = () => {

	return (
		<div>
			<Head>
        <title>Lulu Pearl | Contact</title>
        <link rel="icon" href="/lulupearl.png" />
      </Head>
			Contact
		</div>
	)
}

export default Contact

Contact.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}