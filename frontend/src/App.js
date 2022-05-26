import './App.css';
import NavBar from './components/NavBar';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { callApi } from './functions';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';
import PlayVideoModal from './components/PlayVideoModal';
import ShowLogModal from './components/ShowLogModal';

function App() {
  const [showPlayVideoModal, setShowPlayVideoModal] = useState(null);
  const [showLog, setShowLog] = useState(null);
  const [selectedTab, setSelectedTab] = useState('VIDEOS');
  const toggleShowPlayVideoModal = () => {
    setShowPlayVideoModal(null);
  };
  const [_videos, setVideos] = useState([]);
  const [_logs, setLogs] = useState([]);
  useEffect(() => {
    if (selectedTab === 'VIDEOS' && _videos.length === 0) {
      fetchVideos();
    } else if (selectedTab === 'LOGS' && _logs.length === 0) {
      fetchLogs();
    }
  }, [selectedTab]);
  const fetchVideos = async () => {
    const videos = await callApi({
      url: '/videos',
      mehod: 'GET',
      data: {},
      authenticaed: false,
    });
    setVideos(videos);
  };
  const fetchLogs = async () => {
    const logs = await callApi({
      url: '/logs',
      mehod: 'GET',
      data: {},
      authenticaed: false,
    });
    setLogs(logs);
  };
  return (
    <div className="App">
      <NavBar />
      {/* <div className="tabs">
        <button onClick={() => setSelectedTab('VIDEOS')}>Videos</button>
        <button onClick={() => setSelectedTab('LOGS')}>Logs</button>
      </div> */}
      {selectedTab === 'VIDEOS' ? (
        <div className="video-list">
          {_videos &&
            _videos.map((_video, key) => (
              <div className="video-item" key={key}>
                <MdOutlineSlowMotionVideo
                  className="video-icon"
                  onClick={() => setShowPlayVideoModal(_video.Key)}
                />
                <span className="video-name">{_video.Key}</span>
              </div>
            ))}
        </div>
      ) : (
        <div className="log list">
          {_logs &&
            _logs.map((_log, key) => (
              <div className="video-item" key={key}>
                <BiErrorCircle
                  className="video-icon"
                  onClick={() => setShowLog(_log.Key)}
                />
                <span className="video-name">{_log.Key}</span>
              </div>
            ))}
        </div>
      )}
      {showPlayVideoModal && (
        <PlayVideoModal
          toggle={() => toggleShowPlayVideoModal()}
          isOpen={showPlayVideoModal}
          name={showPlayVideoModal}
        />
      )}
      {showLog && (
        <ShowLogModal
          toggle={() => setShowLog(null)}
          isOpen={showLog}
          name={showLog}
        />
      )}
    </div>
  );
}

export default App;
