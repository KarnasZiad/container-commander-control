
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import LogViewer from "@/components/LogViewer";
import { getContainerById } from "@/data/mockData";

const Logs = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const containerId = searchParams.get("containerId") || "";
  
  const container = containerId ? getContainerById(containerId) : null;

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Container Logs</h1>
        {container ? (
          <p className="text-gray-600">
            Viewing logs for <span className="font-medium">{container.name}</span> ({container.id.substring(0, 12)})
          </p>
        ) : (
          <p className="text-gray-600">
            Select a container to view logs
          </p>
        )}
      </div>

      {containerId ? (
        <LogViewer containerId={containerId} />
      ) : (
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500">No container selected. Select a container from the dashboard to view its logs.</p>
        </div>
      )}
    </Layout>
  );
};

export default Logs;
