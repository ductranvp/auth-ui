pipeline {
  agent any

  tools { nodejs 'node' }

  environment {
    DOCKER_USER = 'ductranvp'
    DOCKER_PASSWORD = '0d138f7b-bcb4-4e89-920a-e89a84c3bf80'
    APP_MODE = 'production'
    APP_API_ENDPOINT = 'http://localhost:4000'
  }

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $DOCKER_USER/auth-ui .'
      }
    }

    stage('Delivery') {
      steps {
        sh 'docker logout'
        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin'
        sh 'docker push $DOCKER_USER/auth-ui'
      }
    }

    stage('Deploy') {
      script {
        input 'Deploy?'
        sh 'docker stop $DOCKER_USER/auth-ui || true && docker rm $DOCKER_USER/auth-ui || true'
        sh 'docker run -p 80:80 -d $DOCKER_USER/auth-ui'
      }
    }
  }
}
