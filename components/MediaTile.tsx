
import React from 'react';
import type { MediaTileProps } from '../types';
import Icon from './Icon';

const MediaTile: React.FC<MediaTileProps> = ({
  src,
  type,
  isLocked,
  likes,
  comments,
  duration,
  quality,
  aspectRatio,
}) => {
  const aspectClasses = {
    portrait: 'aspect-[9/16]',
    landscape: 'aspect-[16/9]',
    square: 'aspect-square',
  };

  return (
    <div className={`relative group w-full ${aspectClasses[aspectRatio]} rounded-3xl overflow-hidden shadow-glass border border-glass-border`}>
      <img src={src} alt="Media content" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-foreground">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {isLocked ? (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-glass-surface/50 backdrop-blur-sm border border-glass-border">
                <Icon name="lock" className="w-3 h-3 text-foreground" />
                <span className="text-xs font-semibold">Locked</span>
              </div>
            ) : (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-glass-surface/50 backdrop-blur-sm border border-glass-border">
                <Icon name="unlock" className="w-3 h-3 text-neon-blue" />
                <span className="text-xs font-semibold text-neon-blue">Unlocked</span>
              </div>
            )}
          </div>
          <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-primary text-background">{quality.toUpperCase()}</span>
        </div>
        
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <Icon name="heart" className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="comment" className="w-4 h-4" />
              <span>{comments}</span>
            </div>
          </div>
          {type === 'video' && duration && (
            <span className="text-sm font-semibold px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">{duration}</span>
          )}
        </div>
      </div>
      
      {type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-glass-surface/30 backdrop-blur-lg flex items-center justify-center border border-glass-border/50 scale-0 group-hover:scale-100 transition-transform duration-300">
                <Icon name="play" className="w-8 h-8 text-foreground fill-foreground ml-1" />
            </div>
        </div>
      )}
    </div>
  );
};

export default MediaTile;
