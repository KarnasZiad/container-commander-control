
import React, { useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";

interface LogViewerProps {
  containerId: string;
}

const LogViewer = ({ containerId }: LogViewerProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [autoScroll, setAutoScroll] = useState(true);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Simulate fetching logs
  useEffect(() => {
    const fetchLogs = () => {
      setIsLoading(true);
      // Simulate API call with timeout
      setTimeout(() => {
        const mockLogs = generateMockLogs(containerId);
        setLogs(mockLogs);
        setIsLoading(false);
      }, 500);
    };

    fetchLogs();
    
    // Set up interval to fetch new logs every 5 seconds
    const interval = setInterval(fetchLogs, 5000);
    
    return () => clearInterval(interval);
  }, [containerId]);

  useEffect(() => {
    if (autoScroll && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, autoScroll]);

  const generateMockLogs = (id: string) => {
    const prefixes = [
      "INFO",
      "DEBUG",
      "WARN",
      "ERROR",
      "TRACE"
    ];
    
    const messages = [
      "Starting container",
      "Initializing application",
      "Connected to database",
      "Processing request",
      "Request completed in 45ms",
      "Cache hit",
      "Cache miss, fetching from database",
      "User authenticated",
      "New client connection",
      "Client disconnected",
      "Resource allocated",
      "Resource freed",
      "Configuration loaded",
      "Metrics collected"
    ];
    
    return Array.from({ length: 30 }, (_, i) => {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const message = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date(Date.now() - (30 - i) * 1000).toISOString();
      return `${timestamp} [${prefix}] ${message} (container: ${id.substring(0, 8)})`;
    });
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      const mockLogs = generateMockLogs(containerId);
      setLogs(mockLogs);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-medium">Container Logs</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={autoScroll}
              onChange={() => setAutoScroll(!autoScroll)}
              className="mr-2"
            />
            Auto-scroll
          </label>
          <button
            onClick={handleRefresh}
            className="p-1 text-gray-500 hover:bg-gray-100 rounded"
            disabled={isLoading}
          >
            <RefreshCw 
              size={18} 
              className={isLoading ? "animate-spin" : ""}
            />
          </button>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-200 p-4 font-mono text-sm overflow-auto h-96">
        {isLoading && logs.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-pulse">Loading logs...</div>
          </div>
        ) : (
          <>
            {logs.map((log, index) => {
              // Colorize log levels
              let logColor = "text-gray-200";
              if (log.includes("[INFO]")) logColor = "text-cyan-300";
              if (log.includes("[DEBUG]")) logColor = "text-gray-400";
              if (log.includes("[WARN]")) logColor = "text-yellow-300";
              if (log.includes("[ERROR]")) logColor = "text-red-400";
              if (log.includes("[TRACE]")) logColor = "text-purple-300";

              return (
                <div key={index} className={`${logColor} py-0.5`}>
                  {log}
                </div>
              );
            })}
            <div ref={logsEndRef} />
          </>
        )}
      </div>
    </div>
  );
};

export default LogViewer;
