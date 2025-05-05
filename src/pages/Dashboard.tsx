
import React from "react";
import Layout from "@/components/Layout";
import ContainerCard from "@/components/ContainerCard";
import { containers } from "@/data/mockData";

const Dashboard = () => {
  const runningContainers = containers.filter(c => c.status === "running").length;
  const totalContainers = containers.length;

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          {runningContainers} of {totalContainers} containers running
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {containers.map((container) => (
          <ContainerCard key={container.id} container={container} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
