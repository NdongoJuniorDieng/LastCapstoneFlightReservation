FROM openjdk:8-jdk-alpine

MAINTAINER Ndongo Junior

COPY target/*.jar backend.jar

ENTRYPOINT ["java", "-jar", "backend.jar"]

EXPOSE 8080