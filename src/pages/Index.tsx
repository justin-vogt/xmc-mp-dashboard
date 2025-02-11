
import PublishCard from "@/components/PublishCard";
import WebsiteCollections from "@/components/WebsiteCollections";
import MediaLibrary from "@/components/MediaLibrary";

// Mock data - replace with real data from your API
const mockPublishInfo = {
  jobId: "Publish-2024-03-20-001",
  publisher: "John Smith",
  options: ["Smart Publish", "Include Children", "Republish"],
  dateTime: "March 20, 2024 14:30",
  stats: {
    published: 42,
    skipped: 5,
    failed: 0,
  },
};

const mockCollections = [
  {
    name: "Corporate Websites",
    websites: [
      { name: "Main Corporate Site", pageCount: 156 },
      { name: "Investor Relations", pageCount: 48 },
    ],
  },
  {
    name: "Regional Sites",
    websites: [
      { name: "North America", pageCount: 89 },
      { name: "Europe", pageCount: 92 },
      { name: "Asia Pacific", pageCount: 76 },
    ],
  },
];

const mockTotalAssets = 2847;

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto py-8">
        <div className="space-y-2 mb-8 animate-slide-up">
          <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>
          <p className="text-gray-500">Overview of your Sitecore XM Cloud environment</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <PublishCard publishInfo={mockPublishInfo} />
          </div>
          
          <div className="lg:col-span-6">
            <MediaLibrary totalAssets={mockTotalAssets} />
          </div>
          
          <div className="lg:col-span-12">
            <WebsiteCollections collections={mockCollections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
