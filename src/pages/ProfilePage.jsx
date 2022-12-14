import { H1 } from "../components/styles/text";
import { Layout } from "../layouts";

export default function ProfilePage(){
  return (
    <div>
      <H1>ProfilePage</H1>
    </div>
  )
}

ProfilePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}