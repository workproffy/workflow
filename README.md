Basic Work Flow

Steps to run on local machine : 
  
  1) Clone this repo.
  2) cd into the root of the app.
  3) Run the following commands : 
  
      -> npm install (This will install the dependencies)
      
      -> node server.js (Will start the server on localhost port 5000)
      
  4) After running the above commands, open the app your browser on : "localhost:5000"
  

##### PLEASE NOTE : DOCKER IS VERY IMPORTANT TO IMPLEMENT MICRO-SERVICES #####

* To play around with Postgres via docker container :

1. Pull Postgres image from docker hub (make sure docker is installed in your system, if you are using Windows which is not a Professional Edition, then install docker toolbox for windows, necessary resources can be found at the end of this doc).
	
	docker pull postgres

2. To start an instance of postgres :
	
	docker run --name [add a name for your container, name can be anything] -e POSTGRES_PASSWORD=[add your password here] -d postgres
	
	This will start a docker postgres instance.
 
  3. To connect to you database :

	 docker run -it --rm --link [name of your container]:postgres postgres psql -h postgres -U postgres

	You will be prompted for password.Enter the password you setup in the above command and now you will be inside your postgres instance. You can now fire 		commands there.

	Reference : https://docs.docker.com/samples/library/postgres/

 Resources for getting started with docker : 

	1) https://www.docker.com/
	2) https://docs.docker.com/toolbox/overview/
	3) https://www.youtube.com/watch?v=Kyx2PsuwomE
	4) https://www.youtube.com/watch?v=hP77Rua1E0c

* To start postgres and adminer as separate services using docker-compose : 
	
	1. Just fire the following command in the root (make sure you read through the docker-compose.yml file for understanding) : 

		docker-compose up -d
