import More from "./just";
import Page from "./users/page";

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>ShadCN Tables</h1>
        {/* <Page/> */}
        <More/>
      </div>
    </section>
  )
}
