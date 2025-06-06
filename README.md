node index.js to start backend 
npm run build to make build
npm start to start frontend

in frontend directory there is an .env file so we have to change the url of backend 
REACT_APP_API_URL=http://13.127.47.7:3500
REACT_APP_API_URL=http://ip_of_instance:3500

.env of backend:-
PORT=3500
DB_PORT=27017

DB_NAME=myappdb
DB_HOST=localhost
DB_USER=ankit
DB_PASS=ankit

#MONGO_CONN_STR='mongodb://ankit:ankit@localhost:27017/myappdb?authSource=admin

.env of frontend:-

REACT_APP_API_URL=http://13.127.47.7:3500
REACT_APP_BACKEND_URL=http://13.127.47.7:3500




