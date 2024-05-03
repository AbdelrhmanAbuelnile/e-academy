import { Link } from "react-router-dom";
import data from "../data/videos.json";
import ScrollToTopButton from "../components/video/ScrollToTop";

function VideosPage() {
	// const sections = data.map(video => video.sections).flat();
	// console.log("🚀 ~ VideosPage ~ sections:", sections)

	// const [currentSection, setCurrentSection] = useState(null);

	// const handleSectionClick = (time) => {
	// const player = document.querySelector('video')

	// if (player) {
	//   player.currentTime = time
	//   player.play();
	// }
	// };

	// const handleProgress = (playedSeconds) => {
	//   const section = sections.find((s) => playedSeconds >= s.time )
	//   if (section) {
	//     setCurrentSection(section.time)
	//   }
	// };

	return (
		<div className="overflow-hidden bg-page-bg min-h-screen p-4 lg:px-10 lg:py-20">
			{/* <VideoPlayer url="https://res.cloudinary.com/dmmbxksq2/video/upload/v1714679707/kid8j0zrx2msrhmnfoyd.mp4" sections={sections} onProgress={handleProgress} />
      <VideoSections sections={sections} onSectionClick={handleSectionClick} currentSection={currentSection} /> */}
      <div className="flex justify-center items-center gap-10 flex-wrap">

			{data?.map((video) => (
        <>
					<Link to={`/video/${video.id}`} className="p-3 rounded-md bg-gray-600 flex flex-col justify-center items-center gap-2 w-4/12 h-1/4">
            <img src={video.thumbnail} alt="video thumbnail" className="rounded-md" width={600}  />
            <h2 className="text-white text-lg">{video.videoTitle}</h2>
          </Link>
				</>
			))}
      </div>
			<ScrollToTopButton />
		</div>
	);
}

export default VideosPage;
