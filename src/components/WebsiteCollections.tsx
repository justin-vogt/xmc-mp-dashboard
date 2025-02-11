
import { FolderKanban, Globe } from "lucide-react";

interface Website {
  name: string;
  pageCount: number;
}

interface Collection {
  name: string;
  websites: Website[];
}

interface WebsiteCollectionsProps {
  collections: Collection[];
}

const WebsiteCollections = ({ collections }: WebsiteCollectionsProps) => {
  const totalCollections = collections.length;
  const totalWebsites = collections.reduce((acc, curr) => acc + curr.websites.length, 0);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-full">
            Website Collections
          </span>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5 text-gray-400" />
              <span className="font-semibold">{totalCollections} Collections</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-400" />
              <span className="font-semibold">{totalWebsites} Websites</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {collections.map((collection, index) => (
          <div key={index} className="space-y-3">
            <h4 className="font-medium text-primary">{collection.name}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {collection.websites.map((website, wIndex) => (
                <div
                  key={wIndex}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <span className="text-sm font-medium">{website.name}</span>
                  <span className="text-xs text-gray-500">{website.pageCount} pages</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteCollections;
