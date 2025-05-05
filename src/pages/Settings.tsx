
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { RefreshCw, Download, Upload, FilePen, Database, DatabaseBackup } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [backupInProgress, setBackupInProgress] = useState(false);
  const [restoreInProgress, setRestoreInProgress] = useState(false);

  const handleBackup = () => {
    setBackupInProgress(true);
    // Simulate backup process
    setTimeout(() => {
      setBackupInProgress(false);
      toast({
        title: "Backup Completed",
        description: "Database backup has been created successfully"
      });
    }, 2000);
  };

  const handleRestore = () => {
    setRestoreInProgress(true);
    // Simulate restore process
    setTimeout(() => {
      setRestoreInProgress(false);
      toast({
        title: "Restore Completed",
        description: "Database has been restored successfully"
      });
    }, 3000);
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">
          Manage system configuration and backups
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium flex items-center">
              <FilePen className="mr-2" size={20} />
              Configuration Files
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b flex justify-between items-center">
                  <span className="font-medium">nginx.conf</span>
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </div>
                <div className="p-4 text-sm text-gray-700">
                  <p>Last modified: 2 days ago</p>
                  <p>Size: 4.2 KB</p>
                </div>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b flex justify-between items-center">
                  <span className="font-medium">docker-compose.yml</span>
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </div>
                <div className="p-4 text-sm text-gray-700">
                  <p>Last modified: 1 week ago</p>
                  <p>Size: 2.8 KB</p>
                </div>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b flex justify-between items-center">
                  <span className="font-medium">.env.production</span>
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </div>
                <div className="p-4 text-sm text-gray-700">
                  <p>Last modified: 3 days ago</p>
                  <p>Size: 0.5 KB</p>
                </div>
              </div>
              
              <button className="flex items-center justify-center w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200">
                <Upload size={16} className="mr-1" />
                Upload Configuration File
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium flex items-center">
              <Database className="mr-2" size={20} />
              Database Management
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Current Database Status</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Type:</span> PostgreSQL
                  </div>
                  <div>
                    <span className="text-gray-500">Version:</span> 14.1
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span> 256 MB
                  </div>
                  <div>
                    <span className="text-gray-500">Connections:</span> 5
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Backup & Restore</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleBackup}
                    disabled={backupInProgress}
                    className="flex items-center justify-center w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md disabled:bg-cyan-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {backupInProgress ? (
                      <>
                        <RefreshCw size={16} className="mr-1 animate-spin" />
                        Backing Up...
                      </>
                    ) : (
                      <>
                        <DatabaseBackup size={16} className="mr-1" />
                        Create Backup
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleRestore}
                    disabled={restoreInProgress}
                    className="flex items-center justify-center w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md disabled:bg-amber-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {restoreInProgress ? (
                      <>
                        <RefreshCw size={16} className="mr-1 animate-spin" />
                        Restoring...
                      </>
                    ) : (
                      <>
                        <Download size={16} className="mr-1" />
                        Restore from Backup
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Scheduled Backups</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Daily backup at 01:00 AM</span>
                  <div className="flex">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weekly backup on Sunday at 03:00 AM</span>
                  <div className="flex">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
