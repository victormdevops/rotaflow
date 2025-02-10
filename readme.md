Understood — you want it in **pure Markdown syntax using `#`, `##`, `-`, etc.** (no emojis or fancy bullets), so that when you paste it into GitHub it renders cleanly and professionally.

Here is the same README **in clean GitHub-friendly Markdown**:

````markdown
# Rotaflow – Workforce Scheduling Platform (DevOps Case Study)

Rotaflow is a containerized MERN-based workforce scheduling platform.  
The primary goal of this project is to showcase modern DevOps practices including automation, observability, and deployment readiness.

---

## Project Overview

This application includes basic workforce scheduling functionality (user and role management, shift assignments, RBAC, and API documentation via Swagger).  
However, the emphasis of this project is on DevOps engineering:

- Infrastructure as Code
- Multi-service containerization
- Automated CI/CD pipelines
- Secure secrets management
- Health checks and logging
- Scalability readiness

---

## Architecture

| Layer | Technology / Tool |
|------|--------------------|
| Frontend | React served through Nginx |
| Backend | Node.js (Express) + Sequelize |
| Database | PostgreSQL |
| Container Orchestration | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Deployment | SSH (deploy.yml) |
| Secrets | GitHub Secrets |
| Observability | Health endpoints, CI log artifacts (Prometheus/Grafana/Loki planned) |

---

## Local Development

```bash
git clone https://github.com/your-username/rotaflow.git
cd rotaflow

# Minimal backend configuration
echo "PORT=3000" > ./rotaflow-backend/.env
echo "DATABASE_URL=postgres://user:pass@db:5432/rotaflow" >> ./rotaflow-backend/.env

# Launch full stack locally
docker-compose up --build
````

All services (frontend, backend, database) are defined as code in `docker-compose.yml`, enabling consistent and reproducible local environments.

---

## CI/CD Pipeline (GitHub Actions)

Every push to the `master` branch triggers the following automated sequence:

* **Build**: Docker images created for backend and frontend
* **Test**: Containers started in CI, health checked (`/api/health` and `/`)
* **Log Capture**: Container state and logs dumped
* **Artifacts**: Logs uploaded as CI artifacts for debugging
* **Deploy (optional)**: Via SSH using `deploy.yml`

*Note:* Services are tested inside real containers during CI — not mocked — to simulate production behavior.

---

## Monitoring and Observability

| Capability                           | Status      |
| ------------------------------------ | ----------- |
| Healthcheck Endpoint (`/api/health`) | Implemented |
| Container Health in CI               | Implemented |
| Log Collection in CI                 | Implemented |
| Prometheus + Grafana (metrics)       | Planned     |
| Loki (centralized logging)           | Planned     |

All logging and health checking is automated and integrated into the pipeline, ensuring fast feedback and easy debugging.

---

## Security and Secrets Management

* No hard-coded credentials
* Secrets (such as `DATABASE_URL`) managed via GitHub Secrets
* Docker images built following the least-privilege principle

---

## API Documentation

Auto-generated Swagger UI available at `/api-docs` once the backend is running.

---

## Why This Project Matters for DevOps

This project demonstrates:

* Multi-service containerization with Docker and Docker Compose
* Infrastructure as Code
* Automated CI/CD with GitHub Actions
* Secure secret injection
* Health checking and automatic log collection
* Deployment-ready stack that can be extended with full observability

---

## Author

Victor Muthomi
