# ensure you heroku login and heroku container:login before

docker build -t pbrn-projects:v0.0.1 .
docker tag pbrn-projects:v0.0.1 registry.heroku.com/pbrn-projects/web
docker push registry.heroku.com/pbrn-projects/web                  
heroku container:release web -a pbrn-projects