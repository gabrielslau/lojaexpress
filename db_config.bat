echo off
mkdir "./data/db/"
mongod --dbpath "./data/db/"
echo "Database start"