import { useState } from "react";
import VideoPlayer from "../components/video/VideoPlayer";
import VideoSections from "../components/video/VideoSections";
import data from "../data/videos.json";
import { useParams } from "react-router-dom";

function Video() {
	const { id } = useParams();

	const video = data.find((video) => {
    return video.id == id
	})
  console.log("🚀 ~ Video ~ video:", video)
  const sections = video.sections.map((section) => {
    return {
      ...section,
      duration: section.end - section.start
    }
  });

	const [currentSection, setCurrentSection] = useState(null);

	const handleSectionClick = (time) => {
		const player = document.querySelector("video");

		if (player) {
			player.currentTime = time;
			player.play();
		}
	};

	const handleProgress = (playedSeconds) => {
		const section = sections.find((s) => playedSeconds >= s.time);
		if (section) {
			setCurrentSection(section.time);
		}
	};
	return (
		<div className="bg-page-bg overflow-hidden w-full flex flex-col justify-start items-center">
			<VideoPlayer
				url={video.videoLink}
				sections={sections}
				onProgress={handleProgress}
			/>
			<VideoSections
				sections={sections}
				onSectionClick={handleSectionClick}
				currentSection={currentSection}
			/>
		</div>
	);
}

export default Video;
