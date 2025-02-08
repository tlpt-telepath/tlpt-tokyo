async function fetchYouTubeVideos() {
    const channelId = document.getElementById('youtube-feed').dataset.channelId;
    const apiKey = 'YOUR_API_KEY'; // YouTube Data APIのキーを設定
    const maxResults = 10;

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        const data = await response.json();
        
        const videoList = document.getElementById('video-list');
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;
            
            const videoElement = document.createElement('div');
            videoElement.className = 'video-item';
            videoElement.innerHTML = `
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${thumbnail}" alt="${title}">
                    <h3>${title}</h3>
                </a>
            `;
            videoList.appendChild(videoElement);
        });
    } catch (error) {
        console.error('YouTube APIの取得に失敗しました:', error);
    }
} 