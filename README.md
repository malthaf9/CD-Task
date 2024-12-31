# Deployment link: https://cd-task-git-main-althaf-hussains-projects.vercel.app/

# React Application CI/CD with Docker and Jenkins
This project demonstrates the automation of the CI/CD pipeline for a React application using Docker and Jenkins. The application is containerized with Docker, and Jenkins is used to handle the continuous integration and delivery process.

# Features
Dockerized React App: The React application is packaged into a Docker container for easy deployment.
CI/CD Pipeline: The Jenkins pipeline automates the build, test, and deployment process.
AWS EC2 Setup: Jenkins is set up on an AWS EC2 instance to manage the pipeline and deployments.
Prerequisites
Docker
Jenkins
AWS EC2 instance
React.js application

#Setup Instructions
1. Clone the Repository
Clone this repository to your local machine:

git clone https://github.com/yourusername/your-repository-name.git

2. Set up Docker
Build and run the Docker container:

docker build -t react-app .
docker run -p 3000:3000 react-app

3. Set up Jenkins on AWS EC2
Launch an AWS EC2 instance and install Jenkins.
Configure Jenkins to use the repository and trigger builds automatically.

5. Jenkins Pipeline
The Jenkinsfile contains stages for building, testing, and deploying the React application.
Running the Application
Once the pipeline is set up, Jenkins will automatically handle the building and deployment of the application. You can view the application running on the specified port (default is 3000).

# Conclusion
This project helps automate the build and deployment process of a React app using Docker and Jenkins, simplifying continuous delivery and ensuring consistency in environments.
