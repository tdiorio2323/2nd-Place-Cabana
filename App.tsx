
import React from 'react';
import CreatorCard from './components/CreatorCard';
import MediaTile from './components/MediaTile';
import SubscriptionTierCard from './components/SubscriptionTierCard';
import { CREATOR_DATA, MEDIA_DATA, SUBSCRIPTION_TIERS } from './constants';

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-luxury overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-holographic rounded-full opacity-20 blur-3xl animate-holo-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-holographic rounded-full opacity-20 blur-3xl animate-holo-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto p-4 sm:p-8">
        
        <main className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
          
          {/* Creator Card Column */}
          <div className="lg:col-span-1 xl:col-span-1 flex justify-center">
            <CreatorCard {...CREATOR_DATA} />
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 xl:col-span-3">
            
            <section id="subscriptions" className="mb-12">
               <h2 className="text-3xl font-bold font-display mb-6 text-foreground/90">Subscription Tiers</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {SUBSCRIPTION_TIERS.map(tier => <SubscriptionTierCard key={tier.tier} {...tier} />)}
               </div>
            </section>
            
            <section id="content">
              <h2 className="text-3xl font-bold font-display mb-6 text-foreground/90">Exclusive Content</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {MEDIA_DATA.map((media, index) => (
                  <MediaTile key={index} {...media} />
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
