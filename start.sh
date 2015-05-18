#!/bin/bash

cmdForever=./node_modules/forever/bin/forever
cmdHttpServer=./node_modules/http-server/bin/http-server

# Check print moduly potrebne
if [ -e ${cmdForever} ] && [ -e ${cmdHttpServer} ]
then
  echo "Forever: ${cmdForever}"
  echo "HttpServer: ${cmdHttpServer}"
else
  echo "Neexistuje forever alebo http-server module"
  exit 1
fi

# make dir if not exist
mkdir -p ./logs
logDir=./logs/

# name log file
fileName=${logDir}http-server_$(date +%Y%m%d-%H:%M:%S).log
echo "Log_file: ${fileName}"

# stop previous server
${cmdForever} stop "it-portfolio"

# start server
# --uid            Process uid, useful as a namespace for processes (must wrap in a string)
#                  e.g. forever start --uid "production" app.js
#                  forever stop production
# -v, --verbose    Turns on the verbose messages from Forever
# -p  PATH         Base path for all forever related files (pid files, etc.)
# -l  LOGFILE      Logs the forever output to LOGFILE
${cmdForever} start --uid "it-portfolio" -v -p . -l ${fileName} ${cmdHttpServer} ./dist/ -a localhost -p 8080
