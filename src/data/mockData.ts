
export type ContainerStatus = "running" | "stopped" | "error" | "pending";

export interface Container {
  id: string;
  name: string;
  image: string;
  status: ContainerStatus;
  ports: string[];
  created: string;
  cpu: number;
  memory: string;
}

export const containers: Container[] = [
  {
    id: "c1d094a28642",
    name: "web-frontend",
    image: "nginx:latest",
    status: "running",
    ports: ["80:80", "443:443"],
    created: "2 days ago",
    cpu: 0.5,
    memory: "24.5 MB"
  },
  {
    id: "9a87d6ef5124",
    name: "api-service",
    image: "node:16-alpine",
    status: "running",
    ports: ["3000:3000"],
    created: "1 day ago",
    cpu: 2.3,
    memory: "87.2 MB"
  },
  {
    id: "87f6e51c9d2a",
    name: "database",
    image: "postgres:14",
    status: "running",
    ports: ["5432:5432"],
    created: "3 days ago",
    cpu: 1.7,
    memory: "125.4 MB"
  },
  {
    id: "2e4f8c31b7a9",
    name: "cache",
    image: "redis:alpine",
    status: "stopped",
    ports: ["6379:6379"],
    created: "5 days ago",
    cpu: 0,
    memory: "0 MB"
  },
  {
    id: "5d9e2c17f834",
    name: "auth-service",
    image: "custom/auth:1.2",
    status: "error",
    ports: ["4000:4000"],
    created: "12 hours ago",
    cpu: 0,
    memory: "0 MB"
  },
  {
    id: "3b8f7d4e9c12",
    name: "worker-service",
    image: "worker:latest",
    status: "running",
    ports: [],
    created: "4 days ago",
    cpu: 5.8,
    memory: "156.7 MB"
  },
];

export const getContainerById = (id: string): Container | undefined => {
  return containers.find(container => container.id === id);
};
