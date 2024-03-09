import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://free-football-soccer-videos.p.rapidapi.com/', {
          headers: {
            'X-RapidAPI-Key': '3ca081609fmshc09c98d62f3db70p13d882jsnc34e9dd01316',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
          }
        });
        setVideos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    setFilteredVideos(
      videos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [videos, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Football Videos</h2>
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {filteredVideos
              .slice(0, showAll ? filteredVideos.length : 10) // Change 10 to the desired initial number of videos to display
              .map((video, index) => (
                <li key={index} style={{ cursor: 'pointer' }} onClick={() => handleVideoClick(video)}>
                  {video.title}
                </li>
              ))}
          </ul>
        )}
        {!showAll && (
          <button onClick={toggleShowAll}>Show more</button>
        )}
        {showAll && (
          <button onClick={toggleShowAll}>Show less</button>
        )}
      </div>
      <div style={{ flex: 2, marginLeft: '20px' }}>
        {selectedVideo && (
          <>
            <h2>{selectedVideo.title}</h2>
            <iframe
              width="560"
              height="315"
              src={selectedVideo.url}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
}

export default VideoSection;
