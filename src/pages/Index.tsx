import { useState } from "react";
import PublishCard from "@/components/PublishCard";
import WebsiteCollections from "@/components/WebsiteCollections";
import MediaLibrary from "@/components/MediaLibrary";
import EnvironmentSelector, { XMCloudEnvironment } from "@/components/EnvironmentSelector";
import { ThemeToggle } from "@/components/ThemeToggle";

// Mock data - replace with real data from your API
const mockEnvironments: XMCloudEnvironment[] = [
  {
    id: "env-1",
    projectName: "Corporate Website",
    environmentName: "Production",
    publishInfo: {
      jobId: "Publish-2024-03-20-001",
      publisher: "John Smith",
      options: ["Smart Publish", "Include Children", "Republish"],
      dateTime: "March 20, 2024 14:30",
      stats: {
        published: 42,
        skipped: 5,
        failed: 0,
      },
    },
    collections: [
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
    ],
    totalAssets: 2847,
  },
  {
    id: "env-2",
    projectName: "Corporate Website",
    environmentName: "Staging",
    publishInfo: {
      jobId: "Publish-2024-03-19-002",
      publisher: "Jane Doe",
      options: ["Smart Publish", "Include Children"],
      dateTime: "March 19, 2024 16:45",
      stats: {
        published: 28,
        skipped: 3,
        failed: 1,
      },
    },
    collections: [
      {
        name: "Corporate Websites",
        websites: [
          { name: "Main Corporate Site", pageCount: 158 },
          { name: "Investor Relations", pageCount: 49 },
        ],
      },
      {
        name: "Regional Sites",
        websites: [
          { name: "North America", pageCount: 91 },
          { name: "Europe", pageCount: 94 },
          { name: "Asia Pacific", pageCount: 77 },
        ],
      },
    ],
    totalAssets: 2852,
  },
  {
    id: "env-3",
    projectName: "Corporate Website",
    environmentName: "Development",
    publishInfo: {
      jobId: "Publish-2024-03-18-003",
      publisher: "Alex Johnson",
      options: ["Smart Publish"],
      dateTime: "March 18, 2024 10:15",
      stats: {
        published: 15,
        skipped: 2,
        failed: 0,
      },
    },
    collections: [
      {
        name: "Corporate Websites",
        websites: [
          { name: "Main Corporate Site", pageCount: 160 },
          { name: "Investor Relations", pageCount: 50 },
        ],
      },
      {
        name: "Regional Sites",
        websites: [
          { name: "North America", pageCount: 93 },
          { name: "Europe", pageCount: 95 },
          { name: "Asia Pacific", pageCount: 78 },
        ],
      },
    ],
    totalAssets: 2858,
  },
];

const Index = () => {
  const [selectedEnvironmentId, setSelectedEnvironmentId] = useState(mockEnvironments[0].id);
  const selectedEnvironment = mockEnvironments.find(env => env.id === selectedEnvironmentId)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-2 animate-slide-up">
            <h1 className="text-3xl font-semibold text-primary">XM Cloud - Bird's Eye View</h1>
            <p className="text-muted-foreground">Overview of your Sitecore XM Cloud environments</p>
          </div>
          <ThemeToggle />
        </div>

        <EnvironmentSelector
          environments={mockEnvironments}
          selectedEnvironmentId={selectedEnvironmentId}
          onEnvironmentSelect={setSelectedEnvironmentId}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <PublishCard publishInfo={selectedEnvironment.publishInfo} />
          </div>
          
          <div className="lg:col-span-6">
            <MediaLibrary totalAssets={selectedEnvironment.totalAssets} />
          </div>
          
          <div className="lg:col-span-12">
            <WebsiteCollections collections={selectedEnvironment.collections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
