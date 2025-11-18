import React, { useEffect, useState } from "react";
import "./YouTubeSection.css";

function YouTubeSection() {
  const [playlists, setPlaylists] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCQMBr0z81zhpCI4CDjJUVfA";

  useEffect(() => {
    // 1️⃣ Obtener las listas de reproducción del canal
    const fetchPlaylists = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`
        );
        const data = await res.json();
        const playlistsData = data.items || [];

        // 2️⃣ Cargar los videos de cada lista
        const playlistsWithVideos = await Promise.all(
          playlistsData.map(async (playlist) => {
            const resVideos = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlist.id}&maxResults=10&key=${API_KEY}`
            );
            const videosData = await resVideos.json();
            return {
              title: playlist.snippet.title,
              videos: videosData.items || [],
            };
          })
        );

        setPlaylists(playlistsWithVideos);
      } catch (error) {
        console.error("Error al cargar playlists:", error);
      }
    };

    fetchPlaylists();
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className="youtube-section">
      <h2 className="main-title">Explora los videos de Balloon y Ben</h2>

      {playlists.map((playlist, index) => (
        <div key={index} className="categoria-bloque">
          <h3 className="categoria-titulo">{playlist.title}</h3>
          <div className="videos-row">
            {playlist.videos.map((video, i) => (
              <div key={i} className="video-card">
                <iframe
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  title={video.snippet.title}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default YouTubeSection;
