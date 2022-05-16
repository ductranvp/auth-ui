pipeline {
    agent { label "tvduc1" }
    tools {
        node "16.15.0"
    }
    environment {
        APP_MODE=production
        APP_PORT=3000
        APP_API_ENDPOINT=http://localhost:4000
        DOCKER_CREDENTIALS=credentials('dockerhub')
    }
    stages {
        stage("build") {
            steps {
                echo 'BUILD EXECUTION STARTED'
                sh 'docker build -t auth-ui:${BUILD_NUMBER}'
            }
        }
        stage('push') {
            agent any
            steps {
                sh "echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin"
                sh 'docker push auth-ui:${BUILD_NUMBER}'
            }
        }
    }
}