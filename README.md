## Application 2: Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates (Client)

### Prerequisites
- Ensure you have [Docker](https://www.docker.com/get-started) installed on your system.
- Confirm that port **80** is free for the client application.

### Setup Instructions

1. **Download the Environment Configuration**
   - Before starting, download the compressed ZIP file containing the **`.env`** file from the link provided in the PDF. Due to security reasons, the `.env` file cannot be uploaded here.
   - Extract the contents of the ZIP file, and paste the **`.env`** file into the project directory.

2. **Clone the Repository**
   Open your terminal and navigate to the directory where you want to clone the repository. Run the following command:
   ```bash
   git clone https://github.com/fredrick2002/weather-app-client
   cd weather-app-client
   ```

3. **Build the Docker Image**
   Execute the following command to build the Docker image for the client application. This process may take some time:
   ```bash
   docker build -t weather-app-client .
   ```

4. **Verify Port Availability**
   Before running the Docker container, ensure that port **80** is not in use. You can check for active connections using:
   - On **Linux/Mac**:
     ```bash
     lsof -i :80
     ```
   - On **Windows**:
     ```bash
     netstat -ano | findstr :80
     ```

5. **Run the Docker Image**
   Start the client application by running the following command, mapping port **80** on your host to port **80** in the container:
   ```bash
   docker run -p 80:80 weather-app-client
   ```

6. **Access the Weather Monitoring Client Application**
   Open your web browser and navigate to:
   ```
   http://localhost/
   ```

7. **Run the Email Alert Server**
   Make sure the server that serves email alerts is running by cloning the server repository and following the setup instructions provided there:
   ```bash
   git clone https://github.com/fredrick2002/weather-app-server.git
   ```

### Notes
- If you encounter any issues during the build process, check the terminal logs for errors and ensure that Docker has permission to access the necessary resources.
- To stop the running Docker container, you can use `Ctrl + C` in the terminal where it's running or find the container ID using:
  ```bash
  docker ps
  ```
  Then stop it using:
  ```bash
  docker stop <container-id>
  ```