FROM node:12.16-alpine 
WORKDIR /usr/src/app
# COPY ./package.json . 
# RUN npm install 
COPY . .
# EXPOSE 3333
# CMD npm run dev:server

# docker build -t dockersetup . <- motando a imagem
# docker run -it --rm dockersetup sh <- verificando a imagem dentro do container

# docker run --rm --name setup_container -p 3333:3333 dockersetup <- rodando o container 

# DEPLOY TO YOUR DockerHub 
# eh necessario o account ser o mesmo 
# docker tag dockersetup:latest mateusbentes03/dockersetup <- tagear o container
# docker push mateusbentes03/dockersetup <- commit no container 

# VERIFICANDO IMAGEM BAIXADA
# docker pull mateusbentes03/docketsetup <- baixar a imagem 
# docker run -p 5000:5000 mateusbentes03/dockersetup:latest <- rodar o container
# sudo docker commit [CONTAINER_ID] [new_image_name] <- apos ter feito modifica.
# docker images ls
# docker exec -it [CONTAINER_NAME] [TERMINAL]

# APAGAR IMAGE <none>
# docker images -f "dangling=true" -q
# docker rmi $(docker images -f "dangling=true" -q)
# docker system prune

# docker-compose.yml 
# > docker-compose up && docker-compose rm -fsv <- criar containers e desfazer 


