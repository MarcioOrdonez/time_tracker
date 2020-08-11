# time_tracker
A sutdy case for a time tracking system and restful api archtecture


# Time tracker RESTFUL API 


We are going to use docker to run our postgres instance
docker run --name time_tracker_database -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres ( user name postgres)

docker ps shows all the containers running at the moment on your machine
docker ps -a shows all containers on your machine even those not running at the moment

docker stop <container-name>
docker start <container-name>


database structure
Users = name, email, password, [0,n groups], [0,n tasks]

groups = name ,[1,n Users],[0,n tasks]

tasks = state, [1 Users], start, end



