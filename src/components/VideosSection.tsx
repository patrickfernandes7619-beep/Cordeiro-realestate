import React, { useState } from 'react';
import { Play, Youtube, ExternalLink, X } from 'lucide-react';
import { VIDEOS_DATA } from '../data/siteData';
import { VideoItem } from '../types';

export const VideosSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [playingInlineId, setPlayingInlineId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Youtube className="w-3.5 h-3.5 text-red-600" />
            <span>Property Video Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-serif-luxury">
            Videos
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Educational video briefings covering property acquisition principles, verification protocols,
            and real estate market dynamics in India.
          </p>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS_DATA.map((video) => (
            <div
              key={video.id}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all border border-slate-200 flex flex-col group"
              id={`video-card-${video.id}`}
            >
              {/* Video Player / Thumbnail */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                {playingInlineId === video.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setPlayingInlineId(video.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-700 transition-all">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                      {video.duration || 'Watch Video'}
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2.5 font-serif-luxury">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setPlayingInlineId(video.id)}
                    className="text-blue-800 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-blue-800" />
                    <span>{playingInlineId === video.id ? 'Now Playing' : 'Play Video'}</span>
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal (if user wants full modal experience) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-slate-800">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 text-white">
              <h3 className="font-bold text-base truncate font-serif-luxury">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
