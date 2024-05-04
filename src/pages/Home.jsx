import { Link } from "react-router-dom"


function Home() {
  return (
    <div className='mt-24 overflow-hidden bg-page-bg flex flex-col justify-start items-center gap-10 w-full'>
      <h1 className="text-4xl text-center mt-10 text-white">Welcome to the Home Page</h1>
      <p className="text-center mt-5  text-white">Click on the videos link in the navigation to view the videos page</p>
      <Link to="/videos" className="text-center mt-5  text-pink-900 underline hover:text-pink-600">Go to Videos</Link>
      <div className="flex flex-col justify-center items-center gap-44 text-white text-xl">
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
      </div>
    </div>
  )
}

export default Home