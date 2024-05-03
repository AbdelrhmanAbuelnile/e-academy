/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
// eslint-disable-next-line react/prop-types


const VideoSections = ({ sections, onSectionClick }) => {

  function createDescriptionWithLinks(description) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return description.split(' ').map((word, index) => {
        if (word.match(urlRegex)) {
            return <a key={index} href={word} target="_blank" rel="noopener noreferrer">{word}</a>;
        } else {
            return word;
        }
    }).reduce((prev, current, index) => prev.concat(index > 0 ? [' ', current] : [current]), []);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  const sectionClick = (time) => {
    onSectionClick(time);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div className=" text-gray-400 flex flex-col justify-center items-start gap-10 py-4 px-10">
      {sections.map((section) => (
        <div className="flex flex-col justify-center items-start gap-4" key={section.id} onClick={() => sectionClick(section.start)}>
          {/* <img src={section.thumbnail} alt={section.title} /> */}
          <div className="flex justify-start items-center gap-5">
            <h1 className="text-3xl font-bold">
              {section.title} 
            </h1>
            <span className="text-sm flex justify-center items-center gap-2 hover:text-gray-100 px-2 py-1 border border-gray-400 rounded-2xl hover-border-gray-100">
              <FaPlay />
              <span>{formatTime(section.start)}</span>
            </span>
            </div>
            <p className="w-2/4">{createDescriptionWithLinks(section.description)}</p>
            {section?.links?.map((link) =>(
              <>
              <ul className="ul">
                <li className="li">
                  <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600 underline">{link}</a>
                </li>
              </ul>
              </>
            ))}
        </div>
      ))}
    </div>
  );
};

export default VideoSections;
