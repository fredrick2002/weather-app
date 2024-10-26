
1. First Download and Install Docker Desktop - https://www.docker.com/products/docker-desktop/
2. Next git clone the project from the Github
   
3. After that open up the terminal from that directory![[Pasted image 20241026192151.png]]
4. Then type this command to build the docker image(Takes some time to build)
```
docker build -t weather-app-client .
```
![[Pasted image 20241026192709.png]]

5 .Make sure port 80 is free 
6 . run the image in docker
```
docker run -p 80:80 weather-app-client
```
![[Pasted image 20241026192955.png]]7. now open up browser and go to http://localhost/
8 . Next run the server which serves email alert (https://github.com/fredrick2002/weather-app-server.git)
