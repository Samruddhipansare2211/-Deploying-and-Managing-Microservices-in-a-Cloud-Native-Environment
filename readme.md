# Deploying and Managing Microservices in a Cloud-Native Environment using Kubernetes

## 📌 Project Overview

This project demonstrates deployment and management of multiple microservices using Docker and Kubernetes in a cloud-native environment. The project includes:

- User Service
- Product Service
- Order Service

All services are containerized using Docker and deployed using Kubernetes Deployments and Services.

The project also demonstrates:

- Kubernetes Pods
- Deployments
- Services
- Persistent Volumes
- Persistent Volume Claims
- Scaling
- Load Balancing
- Persistent Storage

---

# 🎯 Objectives

- Learn Docker containerization
- Deploy microservices using Kubernetes
- Manage Pods and Services
- Implement Persistent Storage
- Understand Kubernetes architecture
- Perform scaling and orchestration

---

# 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Kubernetes | Container Orchestration |
| Minikube | Local Kubernetes Cluster |
| kubectl | Kubernetes CLI |
| Docker Hub | Docker Image Repository |
| VS Code | Development Environment |
| GitHub | Version Control |

---

# 📂 Project Structure

```text
microservices-project
│
├── user-service
├── product-service
├── order-service
├── k8s
├── pv.yaml
├── pvc.yaml
└── README.md
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
Deploy Services into Kubernetes
     ↓
Pods Created
     ↓
Services Exposed
     ↓
Persistent Storage Attached
     ↓
Applications Accessible via Browser
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

# 🚀 STEP 1 — Start Kubernetes Cluster

Start Minikube cluster.

### Command

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

# 📸 Screenshot to Add

- Minikube started successfully
- Node status

---

# 🚀 STEP 2 — Build Docker Images

Build Docker images for all services.

---

# USER SERVICE

Go inside user-service folder.

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

# 📸 Screenshot to Add

- Docker images list

---

# 🚀 STEP 3 — Push Images to Docker Hub

Login to Docker Hub.

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

# 📸 Screenshot to Add

- Docker push successful

---

# 🚀 STEP 4 — Create Kubernetes Folder

Inside project folder create:

```text
k8s
```

---

# 🚀 STEP 5 — Kubernetes YAML Architecture

```text
YAML FILES
    ↓
Deployments
    ↓
Pods Created
    ↓
Services Created
    ↓
Applications Exposed
```

---

# 🚀 STEP 6 — Deployment & Service Workflow

```text
Deployment File
       ↓
Kubernetes Deployment
       ↓
ReplicaSet
       ↓
Pods
       ↓
Services
       ↓
Browser Access
```

---

# 🚀 STEP 7 — Persistent Storage Workflow

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

# 🚀 STEP 8 — Scaling Workflow

```text
Before Scaling

Product Pod 1

        ↓

After Scaling

Product Pod 1
Product Pod 2
Product Pod 3
Product Pod 4
```

---

# 🚀 STEP 9 — Kubernetes YAML Files (VERY DETAILED)

Now your Docker images are ready.

Next step is deploying everything into Kubernetes.

You are currently here:

```text
microservices-project
```

Folder structure should be:

```text
microservices-project
│
├── user-service
├── product-service
├── order-service
└── k8s
```

---

# STEP 9.1 — Open k8s Folder

In terminal:

```bash
cd k8s
```

Now terminal path becomes:

```text
C:\Users\SAMRUDDHI\microservices-project\k8s
```

---

# STEP 9.2 — Create USER DEPLOYMENT FILE

---

# What is Deployment?

Deployment tells Kubernetes:

- which Docker image to run
- how many containers (replicas)
- which port application uses

---

# Create File

Inside VS Code:

Right click `k8s`
→ New File

Name:

```text
user-deployment.yaml
```

---

# Paste YAML

Replace:

```text
yourdockerhubname
```

with your Docker Hub username.

---

# Understand This YAML

| Field | Meaning |
|---|---|
| kind: Deployment | Creates deployment |
| replicas | Number of containers |
| image | Docker Hub image |
| containerPort | Application port |

---

# STEP 9.3 — Create USER SERVICE FILE

---

# What is Service?

Service exposes Pods.

Without Service:

- Pods cannot be accessed properly

Service provides:

- networking
- load balancing
- stable access

---

# Create File

```text
user-service.yaml
```

---

# Understand This YAML

| Field | Meaning |
|---|---|
| selector | Connects service to pods |
| port | Service port |
| targetPort | Container port |
| NodePort | External access |

---

# STEP 9.4 — Create PRODUCT DEPLOYMENT

Create:

```text
product-deployment.yaml
```

---

# Why Resources Section?

Resources are required for:

- autoscaling
- CPU allocation
- performance optimization

Without resources:

- HPA may not work correctly

---

# STEP 9.5 — Create PRODUCT SERVICE

Create:

```text
product-service.yaml
```

---

# STEP 9.6 — Create ORDER DEPLOYMENT

---

# Why Order Service is Different?

Because it uses:

- Persistent Storage
- Volume Mounting
- PVC connection

Data survives even after pod restart.

---

# Storage Workflow

```text
Order Pod
    ↓
Volume Mount
    ↓
Persistent Volume Claim
    ↓
Persistent Volume
    ↓
Data Stored Permanently
```

---

# STEP 9.7 — Create ORDER SERVICE

Create:

```text
order-service.yaml
```

---

# STEP 9.8 — Create Persistent Volume

Go back to project folder.

```bash
cd ..
```

Create:

```text
pv.yaml
```

---

# What PV Does

Persistent Volume creates storage inside Minikube.

Storage Capacity:

```text
1GB
```

---

# STEP 9.9 — Create PVC

Create:

```text
pvc.yaml
```

---

# What PVC Does

PVC requests storage from PV.

Connection:

```text
PVC → PV
```

---

# 🚀 STEP 10 — APPLY YAML FILES

Now deploy everything.

---

# STEP 10.1 — Apply PV and PVC

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

Expected STATUS:

```text
Bound
```

---

# 📸 Screenshot to Add

- PV created
- PVC Bound

---

# STEP 10.2 — Deploy Kubernetes Files

Go inside k8s folder:

```bash
cd k8s
```

---

# Apply All YAML Files

```bash
kubectl apply -f .
```

---

# Expected Output

```text
deployment.apps/user-deployment created
service/user-service created
deployment.apps/product-deployment created
service/product-service created
deployment.apps/order-deployment created
service/order-service created
```

---

# 📸 Screenshot to Add

- Deployment creation successful

---

# STEP 10.3 — Check Pods

Run:

```bash
kubectl get pods
```

Expected:

```text
NAME                                  READY
user-deployment-xxxxx                 1/1
product-deployment-xxxxx              1/1
order-deployment-xxxxx                1/1
```

---

# 📸 Screenshot to Add

- Running Pods

---

# STEP 10.4 — Check Services

```bash
kubectl get svc
```

You should see:

```text
user-service
product-service
order-service
```

---

# 📸 Screenshot to Add

- Kubernetes services

---

# STEP 10.5 — Access USER SERVICE

```bash
minikube service user-service --url
```

Expected Output:

```text
User Service Running
```

---

# STEP 10.6 — Access PRODUCT SERVICE

```bash
minikube service product-service --url
```

Expected:

```text
Product Service Running
```

---

# STEP 10.7 — Access ORDER SERVICE

```bash
minikube service order-service --url
```

---

# Write Data

Open:

```text
http://127.0.0.1:52341/write
```

Expected:

```text
Data Written
```

---

# Read Data

Open:

```text
http://127.0.0.1:52341/read
```

Expected:

```text
Order Saved
```

---

# 📸 Screenshot to Add

- Browser outputs

---

# 🚀 STEP 11 — Test Persistent Storage

---

# Check Pods

```bash
kubectl get pods
```

Copy ORDER pod name.

Example:

```text
order-deployment-67f9f8b9c8-abcde
```

---

# Delete Order Pod

```bash
kubectl delete pod order-deployment-67f9f8b9c8-abcde
```

Kubernetes automatically creates a new pod.

Wait 30 seconds.

---

# Verify Data Persistence

Again open:

```text
http://127.0.0.1:52341/read
```

If output still shows:

```text
Order Saved
```

then Persistent Storage is working successfully.

---

# 📸 Screenshot to Add

- Pod deletion
- New pod creation
- Persistent data output

---

# 📊 Final Kubernetes Deployment Flow

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
