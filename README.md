
## Application 2 : Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates(Client)
1. Before Starting download the .env file for client and paste it in the project file (Cannot upload .env file due to Security Reasons)
   
2. After that open up the terminal from that directory

3. Then type this command to build the docker image(Takes some time to build)

```
docker build -t weather-app-client .
```

4.Make sure port 80 is free 

5. run the image in docker

```
docker run -p 80:80 weather-app-client
```

6. now open up browser and go to http://localhost/

7. Next run the server which serves email alert (https://github.com/fredrick2002/weather-app-server.git)
