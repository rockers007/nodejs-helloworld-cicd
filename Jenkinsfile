pipeline{
  environment {
    registry = "rockers/nodejs-helloworld"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Build'){
            steps{
                script{
                    sh 'echo 123'
                }
            }
        }
        
    }
}