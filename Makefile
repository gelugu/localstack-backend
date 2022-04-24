registry=gelugu
container=localstack-server
version=0.1.0

prepare:
	npm install

lint:
	npm run format && npm run lint

start:
	npm start
dev:
	npm run start:dev
debug:
	npm run start:debug
prod:
	npm run start:prod

db:
	npm run start:db

test:
	npm run test:cov

build:
	npm run build

docker-build:
	docker build -t ${registry}/${container}:${version} .
docker-push:
	docker push ${registry}/${container}:${version}
