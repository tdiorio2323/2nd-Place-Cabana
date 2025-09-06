
export interface CreatorCardProps {
  avatar: string;
  username: string;
  displayName: string;
  subscriberCount: number;
  isVerified: boolean;
  subscriptionPrice: number;
  previewImages: string[];
  mainContentPreview: string;
  tags: string[];
  tier: 'premium' | 'vip' | 'standard';
  isOnline: boolean;
}

export interface MediaTileProps {
  src: string;
  type: 'video' | 'image';
  isLocked: boolean;
  likes: number;
  comments: number;
  duration?: string;
  quality: '4k' | 'HD' | 'SD';
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface SubscriptionTierCardProps {
  tier: 'VIP' | 'Premium' | 'Standard';
  price: number;
  originalPrice?: number;
  discount?: number;
  features: string[];
  popular: boolean;
  billingPeriod: 'monthly' | 'yearly';
}