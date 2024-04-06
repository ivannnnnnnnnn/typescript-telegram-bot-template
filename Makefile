

DOCKER_FILE=docker-compose.dev.yml

ifeq (shell, $(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(lastword $(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

ifeq (build, $(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(lastword $(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

ifeq (logs, $(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(lastword $(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

.PHONY: up
up: 
	@docker-compose -f $(DOCKER_FILE) up


.PHONY: up-silent
up-silent: 
	@docker-compose -f $(DOCKER_FILE) up -d

.PHONY: down
down: 
	@docker-compose -f $(DOCKER_FILE) down


.PHONY: rebuild
rebuild:
	@docker-compose -f $(DOCKER_FILE) up --build


.PHONY: shell
shell:
	@docker-compose -f $(DOCKER_FILE) exec $(RUN_ARGS) /bin/bash



.PHONY: build
build:
	@docker-compose -f $(DOCKER_FILE) build $(RUN_ARGS)


.PHONY: logs
logs:
	@docker-compose -f $(DOCKER_FILE) logs $(RUN_ARGS)