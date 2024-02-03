# 🛠️ Setting up Jenkins with Docker

This guide will walk you through setting up Jenkins using a Docker container. By using Docker, you can easily deploy and manage Jenkins instances in an isolated environment.

## Prerequisites

- Docker installed on your system. You can download and install Docker Desktop from the official website: [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Steps

### 1. Pull Jenkins Image

Pull the `jenkins/jenkins` Docker image from Docker Hub using the following command:

```bash
docker pull jenkins/jenkins
```

### 2. Run Jenkins Container

Start a Jenkins container using the pulled image. Replace `my-jenkins` with your desired container name:

```bash
docker run -d -p 8080:8080 -v jenkins_home:/var/jenkins_home --name my-jenkins-container jenkins/jenkins
```

- `-d`: Run the container in detached mode (in the background).
- `-p 8080:8080`: Map port 8080 on your host machine to port 8080 on the container (Jenkins web interface).
- `-v jenkins_home:/var/jenkins_home`: Mount a volume named `jenkins_home` to persist Jenkins data.
- `--name my-jenkins`: Assign a name `my-jenkins` to the running container.

### 3. Access Jenkins

Once the container is running, access Jenkins by opening a web browser and navigating to [http://localhost:8080](http://localhost:8080).

### 4. Unlock Jenkins

When accessing Jenkins for the first time, you'll be prompted to unlock it. Run the following command to find the initial administrator password:

```bash
docker exec my-jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

Copy the password from the output and paste it into the Jenkins web interface to unlock Jenkins.

### 5. Configure Jenkins

Follow the on-screen instructions to complete the Jenkins setup. You can install recommended plugins or select custom plugins based on your requirements.

### 6. Start Using Jenkins

Once Jenkins is configured, you can start creating jobs, pipelines, and automating your software development processes.

## Additional Notes

- Replace `my-jenkins` with your desired container name.
- You can adjust the ports and volume mounts according to your preferences.
- Make sure to keep your Jenkins instance secure by regularly updating it and following security best practices. 🔒
