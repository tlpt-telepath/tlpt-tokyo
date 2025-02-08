require 'google/apis/youtube_v3'
require 'yaml'

YOUTUBE_API_KEY = 'YOUR_API_KEY'  # Google Cloud ConsoleでAPIキーを取得して設定
CHANNEL_ID = 'UCWzIfRfMhpQGEHYeZoMwD0w'

youtube = Google::Apis::YoutubeV3::YouTubeService.new
youtube.key = YOUTUBE_API_KEY

# チャンネルの動画を取得
response = youtube.list_searches('snippet',
  channel_id: CHANNEL_ID,
  order: 'date',
  type: 'video',
  max_results: 6
)

videos = response.items.map do |item|
  {
    'id' => item.id.video_id,
    'title' => item.snippet.title,
    'published_at' => item.snippet.published_at
  }
end

# YAMLファイルに保存
File.write('_data/youtube_videos.yml', videos.to_yaml) 