#! /bin/bash

cd /usr/src/app
rm /usr/src/app/output/img.png /usr/src/app/output/iteration_*.jpg /usr/src/app/output/status.json
echo "{\"progress\": 0}" > /usr/src/app/output/status.json
echo "$1" > phrase.txt

until [ -f output/img.png ]
do
  sleep 1
  echo "Waiting for img file"
  echo "Waiting for img file" >> output/log.txt
done
echo "File ready"
echo "File ready" >> output/log.txt
exit
