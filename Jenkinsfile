pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'yarn'
      }
    }
    stage('test') {
        steps {
            sh 'yarn test'
        }
    }
    stage('build') {
      steps {
        sh 'yarn prod:build'
      }
    }
  }

  post {
    failure {
        mail to: '634407147@qq.com',
             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
             body: "Something is wrong with ${env.BUILD_URL}"
    }
    always {
        archive 'build/libs/**/*.jar'
        junit 'build/reports/**/*.xml'
    }
  }
}