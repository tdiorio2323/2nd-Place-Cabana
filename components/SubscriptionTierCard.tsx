
import React from 'react';
import type { SubscriptionTierCardProps } from '../types';
import Icon from './Icon';

const SubscriptionTierCard: React.FC<SubscriptionTierCardProps> = ({
  tier,
  price,
  originalPrice,
  discount,
  features,
  popular,
  billingPeriod,
}) => {
  const isVIP = tier === 'VIP';

  return (
    <div className={`relative p-8 rounded-3xl border ${isVIP ? 'bg-gradient-holographic border-transparent shadow-glow' : 'bg-glass-surface border-glass-border shadow-glass'} transition-all duration-300 hover:shadow-glow hover:-translate-y-2`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-luxury text-foreground font-bold text-sm flex items-center gap-2 shadow-luxury">
            <Icon name="star" className="w-4 h-4 fill-current"/>
            <span>Most Popular</span>
        </div>
      )}
      
      <div className="text-center">
        <h2 className={`text-3xl font-bold font-display ${isVIP ? 'bg-gradient-holographic bg-400% animate-holo-shift bg-clip-text text-transparent' : 'text-primary'}`}>{tier}</h2>
        
        <div className="my-6">
          <span className="text-5xl font-bold text-foreground tracking-tighter">${price.toFixed(2)}</span>
          <span className="text-foreground/60">/{billingPeriod.slice(0, 2)}</span>
          {originalPrice && discount && (
            <p className="text-foreground/70 mt-2">
              <span className="line-through">${originalPrice.toFixed(2)}</span>
              <span className="ml-2 px-2 py-0.5 rounded bg-neon-pink/20 text-neon-pink text-xs font-bold">{discount}% OFF</span>
            </p>
          )}
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Icon name="check" className="w-5 h-5 text-neon-blue flex-shrink-0" />
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 font-bold text-lg rounded-xl text-foreground transition-transform hover:scale-105 ${isVIP ? 'bg-gradient-luxury shadow-luxury' : 'bg-primary/50 hover:bg-primary shadow-glass'}`}>
        Choose {tier}
      </button>
    </div>
  );
};

export default SubscriptionTierCard;
