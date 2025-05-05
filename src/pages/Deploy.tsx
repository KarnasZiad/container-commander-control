
import React from "react";
import Layout from "@/components/Layout";
import DeployForm from "@/components/DeployForm";

const Deploy = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Deploy Container</h1>
        <p className="text-gray-600">
          Deploy a new containerized application
        </p>
      </div>

      <div className="max-w-2xl">
        <DeployForm />
      </div>
    </Layout>
  );
};

export default Deploy;
