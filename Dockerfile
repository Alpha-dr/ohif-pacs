FROM jodogne/orthanc-plugins:latest

COPY custom.json /etc/orthanc/custom.json

CMD ["Orthanc", "/etc/orthanc/custom.json"]
