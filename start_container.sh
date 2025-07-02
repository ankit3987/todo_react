#!/bin/bash
set -e

sudo su - root

# Pull the Docker image from Docker Hub
# docker pull techwithalok/codepipeline-demo

docker pull ankitrawat3987/my-frontend
docker pull ankitrawat3987/my-backend

# Run the Docker image as a container
# docker run -d -p 5000:5000 techwithalok/codepipeline-demo

docker run -d -p 3000:3000 ankitrawat3987/my-frontend
docker run -d -p 3500:3500 ankitrawat3987/my-backend
