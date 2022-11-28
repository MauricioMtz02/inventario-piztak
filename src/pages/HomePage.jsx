import { DashboardLayout } from "../layouts";

export default function HomePage(){
  return (
    <div className="text-4xl">
      HomePage
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}