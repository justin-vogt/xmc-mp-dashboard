
import { FolderGit2 } from "lucide-react";

export interface XMCloudEnvironment {
  id: string;
  projectName: string;
  environmentName: string;
  publishInfo: {
    jobId: string;
    publisher: string;
    options: string[];
    dateTime: string;
    stats: {
      published: number;
      skipped: number;
      failed: number;
    };
  };
  collections: {
    name: string;
    websites: {
      name: string;
      pageCount: number;
    }[];
  }[];
  totalAssets: number;
}

interface EnvironmentSelectorProps {
  environments: XMCloudEnvironment[];
  selectedEnvironmentId: string;
  onEnvironmentSelect: (environmentId: string) => void;
}

const EnvironmentSelector = ({
  environments,
  selectedEnvironmentId,
  onEnvironmentSelect,
}: EnvironmentSelectorProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in mb-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 className="h-5 w-5 text-accent" />
        <h2 className="text-lg font-semibold text-primary">XM Cloud Environments</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {environments.map((env) => (
          <button
            key={env.id}
            onClick={() => onEnvironmentSelect(env.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedEnvironmentId === env.id
                ? "border-accent bg-accent/5"
                : "border-gray-100 hover:border-accent/50"
            }`}
          >
            <div className="text-left">
              <p className="font-medium text-primary">
                {env.projectName}
              </p>
              <p className="text-sm text-gray-500">
                {env.environmentName}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentSelector;
