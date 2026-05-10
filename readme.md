# 🚀 Deploying and Managing Microservices in a Cloud-Native Environment using Kubernetes

---

# 📌 Project Title

## Deploying and Managing Microservices in a Cloud-Native Environment

---

# 📖 Project Description

This project demonstrates deployment and management of multiple microservices using Docker and Kubernetes in a cloud-native environment.

The project contains three independent microservices:

- 👤 User Service
- 📦 Product Service
- 🛒 Order Service

Each service is containerized using Docker and deployed on Kubernetes using:

- Deployments
- Services
- Persistent Volumes
- Persistent Volume Claims

The project demonstrates real-world cloud-native deployment practices including:

- Container orchestration
- Service networking
- Persistent storage
- Pod scaling
- Kubernetes management

---

# 🎯 Objectives

- Learn Docker containerization
- Deploy microservices using Kubernetes
- Understand Kubernetes architecture
- Manage Pods and Services
- Implement Persistent Storage
- Perform scaling and orchestration
- Understand cloud-native deployment workflow

---

# 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Kubernetes | Container Orchestration |
| Minikube | Local Kubernetes Cluster |
| kubectl | Kubernetes CLI |
| Docker Hub | Image Repository |
| Node.js | Backend Microservices |
| VS Code | Development Environment |
| GitHub | Version Control |

---

# 📂 Project Structure

```text
microservices-project
│
├── Screenshots
│
├── k8s
│   ├── order-deployment.yaml
│   ├── order-service.yaml
│   ├── product-deployment.yaml
│   ├── product-service.yaml
│   ├── user-deployment.yaml
│   └── user-service.yaml
│
├── order-service
│   ├── node_modules
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── product-service
│   ├── node_modules
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── user-service
│   ├── node_modules
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── pv.yaml
├── pvc.yaml
├── Kubernetes_Microservices_Documentation.docx
└── README.md
```

---

# ☸️ Kubernetes Architecture

```text
                    +----------------------+
                    |      USER            |
                    +----------+-----------+
                               |
                               v
                 +-----------------------------+
                 |      Kubernetes Service     |
                 +-----------------------------+
                      |         |         |
                      |         |         |
                      v         v         v

             +-------------+ +-------------+ +-------------+
             | User Pod    | | Product Pod | | Order Pod  |
             +-------------+ +-------------+ +-------------+
                      |               |               |
                      |               |               |
               +---------------------------------------------+
               |         Kubernetes Cluster (Minikube)       |
               +---------------------------------------------+
                                      |
                                      v
                         +-------------------------+
                         | Persistent Volume (PV)  |
                         +-------------------------+
                                      |
                                      v
                       +-----------------------------+
                       | Persistent Volume Claim PVC |
                       +-----------------------------+
```

---

# 🔄 Complete Project Workflow

```text
Source Code
     ↓
Dockerfile Creation
     ↓
Docker Image Build
     ↓
Push Images to Docker Hub
     ↓
Start Minikube Cluster
     ↓
Create Kubernetes YAML Files
     ↓
Deploy Applications into Kubernetes
     ↓
Pods Created
     ↓
Services Exposed
     ↓
Persistent Storage Attached
     ↓
Browser Access
     ↓
Scaling and Monitoring
```

---

# ⚙️ Prerequisites

Before starting the project, install the following software:

| Software | Purpose |
|---|---|
| Docker Desktop | Containerization |
| Minikube | Kubernetes Cluster |
| kubectl | Kubernetes CLI |
| Git | Version Control |
| VS Code | Code Editor |

---

# 🚀 STEP 1 — Start Kubernetes Cluster

Start Minikube cluster.

```bash
minikube start
```

---

# Verify Cluster

```bash
kubectl cluster-info
```

---

# Check Nodes

```bash
kubectl get nodes
```

Expected Status:

```text
Ready
```

---

# 📸 Minikube Started

![Minikube Started](Screenshots/minikube-start.png)

---

# 📸 Kubernetes Nodes

![Kubernetes Nodes](Screenshots/kubectl-get-nodes.png)

---

# 🚀 STEP 2 — Build Docker Images

Build Docker images for all services.

---

# USER SERVICE

```bash
cd user-service
```

Build image:

```bash
docker build -t yourdockerhubname/user-service:v1 .
```

---

# PRODUCT SERVICE

```bash
cd ../product-service
```

Build image:

```bash
docker build -t yourdockerhubname/product-service:v1 .
```

---

# ORDER SERVICE

```bash
cd ../order-service
```

Build image:

```bash
docker build -t yourdockerhubname/order-service:v1 .
```

---

# Verify Images

```bash
docker images
```

---

# 📸 Docker Images

![Docker Images](Screenshots/docker-images.png)

---

# 🚀 STEP 3 — Push Images to Docker Hub

Login Docker Hub:

```bash
docker login
```

---

# Push User Service

```bash
docker push yourdockerhubname/user-service:v1
```

---

# Push Product Service

```bash
docker push yourdockerhubname/product-service:v1
```

---

# Push Order Service

```bash
docker push yourdockerhubname/order-service:v1
```

---

# 📸 Docker Push Successful

![Docker Push](Screenshots/docker-push.png)

---

# 🚀 STEP 4 — Kubernetes YAML Workflow

```text
YAML FILES
    ↓
Deployments
    ↓
ReplicaSets
    ↓
Pods Created
    ↓
Services Created
    ↓
Applications Exposed
```

---

# 🚀 STEP 5 — Persistent Storage Workflow

```text
Persistent Volume (PV)
            ↓
Persistent Volume Claim (PVC)
            ↓
Mounted into Order Pod
            ↓
Data Stored Permanently
```

---

# 🚀 STEP 6 — Apply Kubernetes YAML Files

Apply Persistent Volume:

```bash
kubectl apply -f pv.yaml
```

---

Apply PVC:

```bash
kubectl apply -f pvc.yaml
```

---

# Verify Storage

```bash
kubectl get pv
```

```bash
kubectl get pvc
```

Expected:

```text
Bound
```

---

# 📸 Persistent Volume Created

![Persistent Volume](Screenshots/pv-created.png)

---

# 📸 Persistent Volume Claim Bound

![Persistent Volume Claim](Screenshots/pvc-bound.png)

---

# Deploy Kubernetes Files

```bash
cd k8s
kubectl apply -f .
```

---

# 📸 Kubernetes Deployments Created

![Deployments](Screenshots/deployments-created.png)

---

# 🚀 STEP 7 — Verify Kubernetes Resources

---

# Check Pods

```bash
kubectl get pods
```

---

# 📸 Running Pods

![Pods Running](Screenshots/get-pods.png)

---

# Check Services

```bash
kubectl get svc
```

---

# 📸 Running Services

![Services Running](Screenshots/get-services.png)

---

# 🚀 STEP 8 — Access Applications

---

# USER SERVICE

```bash
minikube service user-service --url
```

---

# 📸 User Service Output

![User Service](Screenshots/user-service-browser.png)

---

# PRODUCT SERVICE

```bash
minikube service product-service --url
```

---

# 📸 Product Service Output

![Product Service](Screenshots/product-service-browser.png)

---

# ORDER SERVICE

```bash
minikube service order-service --url
```

---

# 📸 Order Service Output

![Order Service](Screenshots/order-service-browser.png)

---

# 🚀 STEP 9 — Test Persistent Storage

---

# Delete Order Pod

```bash
kubectl delete pod <order-pod-name>
```

---

# 📸 Pod Deleted Successfully

![Pod Deleted](Screenshots/pod-delete.png)

---

# 📸 New Pod Created Automatically

![New Pod](Screenshots/new-pod-created.png)

---

# Verify Persistence

Open:

```text
http://127.0.0.1:52341/read
```

Expected:

```text
Order Saved
```

---

# 📸 Persistent Data Verified

![Persistent Storage](Screenshots/persistent-storage-success.png)

---

# 🚀 STEP 10 — Scaling and Monitoring

---

# Scale Product Service

```bash
kubectl scale deployment product-deployment --replicas=4
```

---

# 📸 Scaling Output

![Scaling](Screenshots/scaling-output.png)

---

# Monitor Logs

```bash
kubectl logs <pod-name>
```

---

# 📸 Logs Monitoring

![Logs](Screenshots/logs-monitoring.png)

---

# 📊 Final Deployment Flow

```text
Docker Images
      ↓
Docker Hub
      ↓
Kubernetes Deployment
      ↓
Pods Created
      ↓
Services Created
      ↓
Persistent Storage Attached
      ↓
Browser Access
      ↓
High Availability & Scalability
```

---

# ✅ Expected Output

This project successfully demonstrates:

- Docker containerization
- Kubernetes deployment
- Pod orchestration
- Service networking
- Persistent storage
- Application scaling
- Cloud-native architecture

---

# 🌟 Advantages

- Highly scalable
- Self-healing system
- Persistent storage support
- Easy deployment management
- Efficient resource utilization
- Cloud-native deployment support

---

# 📚 Learning Outcomes

After completing this project, you will understand:

- Kubernetes architecture
- Deployments and Services
- Persistent Volumes
- Persistent Volume Claims
- Pod management
- Container orchestration
- Cloud-native deployment

---

# 🏁 Conclusion

This project provides complete hands-on experience with Docker and Kubernetes for deploying microservices in a cloud-native environment. It demonstrates deployment automation, persistent storage, scalability, orchestration, and Kubernetes networking concepts used in real-world DevOps environments.

---

# 👩‍💻 Author

## Samruddhi Pansare

---
