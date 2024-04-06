ifeq (n, $(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(lastword $(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif


.PHONY: migrations
migrations:
	@npm run makemigrations

.PHONY: migrate
migrate:
	@npm run migrate


.PHONY: chmod
chmod:
	@chmod -R a+w ./


.PHONY: n
n:
	@npm run $(RUN_ARGS)