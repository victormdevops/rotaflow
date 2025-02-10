📅 Rotaflow – Workforce Scheduling Platform

Rotaflow is a web platform that allows managers in an organization to schedule workers and assign them roles.
This project is built with the MERN stack and fully containerized & automated using modern DevOps practices.

🚀 Features

👥 User Management – manage employees and roles

📅 Shift Scheduling – assign workers to shifts with roles

🔒 Role-based Access Control

📊 API Documentation – Swagger UI

🛠️ DevOps Stack
Area Tools & Practices
Containerization Docker + Docker Compose
CI/CD GitHub Actions (Build → Test → Deploy)
Secrets Management GitHub Secrets (DATABASE_URL, etc)
Infrastructure as Code docker-compose.yml, deploy.yml
Monitoring & Logging Healthchecks, Logs as CI Artifacts (Prometheus/Grafana/Loki planned)
Scalability Ready Stateless services, environment-based configs

📂 Project Structure
rotaflow/
├── rotaflow-backend/ # Express + Sequelize (API + DB)
├── rotaflow-frontend/ # React + Nginx
├── docker-compose.yml # Service orchestration
├── deploy.yml # CI/CD pipeline (GitHub Actions)
└── README.md # DevOps-focused documentation

⚡ Quick Start (Local Dev)

# Clone repository

git clone https://github.com/your-username/rotaflow.git
cd rotaflow

# Create backend .env file

echo "PORT=3000" > ./rotaflow-backend/.env
echo "DATABASE_URL=postgres://user:pass@db:5432/rotaflow" >> ./rotaflow-backend/.env

# Start all services

docker-compose up --build

🤖 CI/CD Workflow

Every push to master triggers:

Build & Test

Docker images are built for frontend & backend

Services launched in CI with docker-compose

Health checks run for /api/health and /

Logging & Debugging

Container health/state dumped on every run

Logs automatically uploaded as artifacts on failure

Deployment (optional)

Ready to deploy to VPS via SSH (deploy.yml)

🔍 Monitoring & Observability

✅ Healthcheck endpoint (/api/health)

✅ Container health inspection in CI

✅ Logs collected & uploaded on failure

🔜 Prometheus + Grafana for metrics

🔜 Loki for centralized logging

📖 API Docs

The backend includes auto-generated Swagger documentation.
👉 Visit /api-docs once backend is running.

💼 Why This Project Matters for DevOps

This project demonstrates:

CI/CD pipelines with GitHub Actions

Secure secret injection (no credentials in code)

Dockerized frontend + backend with multi-service orchestration

Automated health checks + debugging logs

Deployment-ready stack for interviews & portfolio

🧑‍💻 Author

👤 Victor Muthomi
