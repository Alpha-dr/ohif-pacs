FROM jodogne/orthanc-plugins:latest

COPY custom.json /etc/orthanc/custom.json

CMD ["/usr/share/orthanc/Orthanc", "/etc/orthanc/custom.json"]
