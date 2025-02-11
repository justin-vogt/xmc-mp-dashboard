
import { Clock, CheckCircle, XCircle, SkipForward } from "lucide-react";

interface PublishStats {
  published: number;
  skipped: number;
  failed: number;
}

interface PublishInfo {
  jobId: string;
  publisher: string;
  options: string[];
  dateTime: string;
  stats: PublishStats;
}

interface PublishCardProps {
  publishInfo: PublishInfo;
}

const PublishCard = ({ publishInfo }: PublishCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-full">
            Latest Publish
          </span>
          <h3 className="text-lg font-semibold mt-2 text-primary">{publishInfo.jobId}</h3>
        </div>
        <Clock className="text-gray-400 h-5 w-5" />
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Published by</p>
          <p className="text-sm font-medium">{publishInfo.publisher}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Options</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {publishInfo.options.map((option, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-secondary rounded-full text-gray-600"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Date & Time</p>
          <p className="text-sm font-medium">{publishInfo.dateTime}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <div>
              <p className="text-xs text-gray-500">Published</p>
              <p className="text-sm font-semibold">{publishInfo.stats.published}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <SkipForward className="h-4 w-4 text-warning" />
            <div>
              <p className="text-xs text-gray-500">Skipped</p>
              <p className="text-sm font-semibold">{publishInfo.stats.skipped}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4 text-destructive" />
            <div>
              <p className="text-xs text-gray-500">Failed</p>
              <p className="text-sm font-semibold">{publishInfo.stats.failed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishCard;
