
import React from 'react';
import type { CreatorCardProps } from '../types';
import Icon from './Icon';

const CreatorCard: React.FC<CreatorCardProps> = ({
  avatar,
  username,
  displayName,
  subscriberCount,
  isVerified,
  subscriptionPrice,
  previewImages,
  mainContentPreview,
  tags,
  isOnline,
}) => {
  return (
    <div className="relative w-full max-w-sm p-8 rounded-3xl bg-gradient-glass backdrop-blur-2xl border border-glass-border shadow-glass overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-1.5 bg-gradient-holographic rounded-full animate-holo-spin" />
          <img src={avatar} alt={displayName} className="relative w-28 h-28 rounded-full border-4 border-glass-surface" />
        </div>
        
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-15 text-8xl select-none" role="presentation">
            🌹
          </div>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <h1 className="text-5xl font-script text-neon-red">{displayName}</h1>
            {isVerified && (
              <div className="text-neon-red pt-2">
                <Icon name="verified" className="w-6 h-6 fill-neon-red" />
              </div>
            )}
          </div>
          <p className="text-foreground/70">@{username}</p>
        </div>
        
        <div className="flex gap-6 my-6 text-center">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {(subscriberCount / 1000).toFixed(1)}K
            </p>
            <p className="text-sm text-foreground/60">Subscribers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">${subscriptionPrice.toFixed(2)}</p>
            <p className="text-sm text-foreground/60">/month</p>
          </div>
        </div>

        <div className="flex justify-around items-center w-full max-w-[220px] mb-6">
            <a href="#" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="instagram" className="w-7 h-7" />
            </a>
            <a href="#" aria-label="OnlyFans" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="onlyfans" className="w-7 h-7" />
            </a>
            <a href="#" aria-label="Email" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="email" className="w-7 h-7" />
            </a>
            <a href="#" aria-label="Tip creator" className="w-8 h-8 flex items-center justify-center rounded-full bg-neon-blue text-background transition-all duration-300 hover:shadow-glow hover:scale-110">
                <Icon name="tip" className="w-4 h-4 text-background" strokeWidth="2.5" />
            </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-2 w-full mb-6">
          {previewImages.map((src, index) => (
            <img key={index} src={src} alt={`Preview ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
          ))}
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-glass-border">
            <img src={mainContentPreview} alt="Exclusive Content Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center text-center p-4">
                <Icon name="lock" className="w-12 h-12 text-foreground/80 mb-2" />
                <h3 className="font-bold text-lg text-foreground">Unlock Exclusive Content</h3>
                <p className="text-sm text-foreground/70 mb-4">Subscribe to see this and more</p>
                <button className="w-full max-w-xs py-3 font-bold text-lg rounded-xl bg-gradient-luxury text-foreground shadow-luxury transition-transform hover:scale-105">
                  Subscribe Now
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
