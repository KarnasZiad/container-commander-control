
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DeployForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    image: "",
    ports: "",
    environment: "",
  });
  const [isDeploying, setIsDeploying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);

    // Simulate deployment
    setTimeout(() => {
      setIsDeploying(false);
      toast({
        title: "Container Deployed",
        description: `${form.name} has been deployed successfully`,
      });
      setForm({
        name: "",
        image: "",
        ports: "",
        environment: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Deploy New Container</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Container Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="my-awesome-app"
            required
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Docker Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="nginx:latest"
            required
          />
        </div>
        
        <div>
          <label htmlFor="ports" className="block text-sm font-medium text-gray-700 mb-1">
            Ports (host:container)
          </label>
          <input
            type="text"
            id="ports"
            name="ports"
            value={form.ports}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="80:80, 443:443"
          />
        </div>
        
        <div>
          <label htmlFor="environment" className="block text-sm font-medium text-gray-700 mb-1">
            Environment Variables
          </label>
          <textarea
            id="environment"
            name="environment"
            value={form.environment}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="DB_HOST=localhost&#10;DB_PORT=5432&#10;DB_USER=postgres"
          />
        </div>
        
        <button
          type="submit"
          disabled={isDeploying}
          className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-cyan-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isDeploying ? "Deploying..." : "Deploy Container"}
        </button>
      </div>
    </form>
  );
};

export default DeployForm;
