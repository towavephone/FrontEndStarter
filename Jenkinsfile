pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'yarn'
      }
    }
    stage('build') {
      steps {
        sh 'yarn prod:build'
      }
    }
  }
}