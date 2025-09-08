import React from 'react';

type FilterType = 'all' | 'video' | 'image';
type FilterLockStatus = 'all' | 'locked' | 'unlocked';
type FilterQuality = 'all' | '4k' | 'HD' | 'SD';

interface FilterBarProps {
  filters: {
    type: FilterType;
    lockStatus: FilterLockStatus;
    quality: FilterQuality;
  };
  onFilterChange: {
    setType: (type: FilterType) => void;
    setLockStatus: (status: FilterLockStatus) => void;
    setQuality: (quality: FilterQuality) => void;
  };
}

const FilterButton: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}> = ({ onClick, isActive, children }) => {
  const baseClasses = "px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50";
  const activeClasses = "bg-gradient-luxury text-background shadow-luxury";
  const inactiveClasses = "bg-glass-surface/50 hover:bg-glass-surface border border-transparent hover:border-glass-border text-foreground/70";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
};


const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="w-full p-4 mb-8 rounded-2xl bg-glass-surface/50 backdrop-blur-lg border border-glass-border shadow-glass">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        
        {/* Media Type Filter */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground/80 flex-shrink-0">Type:</span>
          <div className="flex items-center gap-2">
            <FilterButton onClick={() => onFilterChange.setType('all')} isActive={filters.type === 'all'}>All</FilterButton>
            <FilterButton onClick={() => onFilterChange.setType('video')} isActive={filters.type === 'video'}>Video</FilterButton>
            <FilterButton onClick={() => onFilterChange.setType('image')} isActive={filters.type === 'image'}>Image</FilterButton>
          </div>
        </div>
        
        {/* Lock Status Filter */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground/80 flex-shrink-0">Status:</span>
          <div className="flex items-center gap-2">
            <FilterButton onClick={() => onFilterChange.setLockStatus('all')} isActive={filters.lockStatus === 'all'}>All</FilterButton>
            <FilterButton onClick={() => onFilterChange.setLockStatus('locked')} isActive={filters.lockStatus === 'locked'}>Locked</FilterButton>
            <FilterButton onClick={() => onFilterChange.setLockStatus('unlocked')} isActive={filters.lockStatus === 'unlocked'}>Unlocked</FilterButton>
          </div>
        </div>

        {/* Quality Filter */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground/80 flex-shrink-0">Quality:</span>
          <div className="flex items-center gap-2">
            <FilterButton onClick={() => onFilterChange.setQuality('all')} isActive={filters.quality === 'all'}>All</FilterButton>
            <FilterButton onClick={() => onFilterChange.setQuality('4k')} isActive={filters.quality === '4k'}>4K</FilterButton>
            <FilterButton onClick={() => onFilterChange.setQuality('HD')} isActive={filters.quality === 'HD'}>HD</FilterButton>
            <FilterButton onClick={() => onFilterChange.setQuality('SD')} isActive={filters.quality === 'SD'}>SD</FilterButton>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
