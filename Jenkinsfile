pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nandhini2011/ehospital-frontend"
    }

    stages {
        stage('Pull GitHub Repo') {
            steps {
                git 'https://github.com/Nandhini-Reddy/E-Hospital-System.git'
            }
        }

        stage('Pull Docker Image') {
            steps {
                sh "docker pull $DOCKER_IMAGE"
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker run -d -p 8080:80 $DOCKER_IMAGE"
            }
        }
    }
}
