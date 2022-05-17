pipeline {
  agent any

  tools { nodejs 'node' }

  environment {
    DOCKER_USER = 'ductranvp'
    DOCKER_PASSWORD = '0d138f7b-bcb4-4e89-920a-e89a84c3bf80'
  }

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t auth-ui:$BUILD_NUMBER .'
      }
    }

    stage('Delivery') {
      steps {
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASSWORD'
        sh 'docker push auth-ui:$BUILD_NUMBER'
      }
    }
  }
}
