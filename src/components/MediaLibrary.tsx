
import { Image } from "lucide-react";

interface MediaLibraryProps {
  totalAssets: number;
}

const MediaLibrary = ({ totalAssets }: MediaLibraryProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-full">
            Media Library
          </span>
          <div className="flex items-center gap-2 mt-2">
            <Image className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-primary">
              {totalAssets.toLocaleString()} Assets
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
