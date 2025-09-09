# syntax=docker/dockerfile:1
FROM python:3.11-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY backend/pyproject.toml backend/poetry.lock* ./
RUN pip install --no-cache-dir poetry && poetry config virtualenvs.create false && poetry install --only main
COPY backend/ .
ENV PORT=8000
CMD ["gunicorn","app.main:app","-k","uvicorn.workers.UvicornWorker","-w","2","-b","0.0.0.0:8000","--timeout","120"]