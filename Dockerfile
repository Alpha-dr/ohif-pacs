FROM jodogne/orthanc-plugins:latest

RUN apt-get update && apt-get install -y unzip curl

RUN mkdir -p /usr/share/orthanc/plugins/ohif

COPY orthanc.json /etc/orthanc/orthanc.json
