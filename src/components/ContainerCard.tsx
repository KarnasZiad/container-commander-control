
import React from "react";
import { Play, StopCircle, RefreshCw, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { Container } from "@/data/mockData";

interface ContainerCardProps {
  container: Container;
}

const ContainerCard = ({ container }: ContainerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{container.name}</h3>
          <StatusBadge status={container.status} />
        </div>
        <p className="text-sm text-gray-500 mt-1">Image: {container.image}</p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div>
            <span className="text-gray-500">ID:</span> {container.id.substring(0, 12)}
          </div>
          <div>
            <span className="text-gray-500">Ports:</span> {container.ports.join(", ")}
          </div>
          <div>
            <span className="text-gray-500">Created:</span> {container.created}
          </div>
          <div>
            <span className="text-gray-500">CPU:</span> {container.cpu}%
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex space-x-2">
            {container.status === "running" ? (
              <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                <StopCircle size={20} />
              </button>
            ) : (
              <button className="p-1 text-green-500 hover:bg-green-50 rounded">
                <Play size={20} />
              </button>
            )}
            <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
              <RefreshCw size={20} />
            </button>
          </div>
          <Link
            to={`/logs?containerId=${container.id}`}
            className="p-1 text-gray-500 hover:bg-gray-50 rounded flex items-center"
          >
            <Terminal size={20} />
            <span className="ml-1 text-sm">Logs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
