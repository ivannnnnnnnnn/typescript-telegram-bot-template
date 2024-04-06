# TypeScript Telegram Bot Template

### Stack:
 - [TypeScript](https://www.typescriptlang.org/) - base programming language
 - [Telegraf](https://github.com/telegraf/telegraf) - package for interact with [Telegram Bot Api](https://core.telegram.org/bots/api)
 - [nodemon](https://nodemon.io/) - hot reload
 - [prettier](https://prettier.io/) - code formatting
 - [Postgres](https://www.postgresql.org/) - Database
 - [DrizzleORM](https://orm.drizzle.team/) - ORM for interact with database
 - [Docker](https://www.docker.com/) - Containerization platform
 - [docker-compose](https://docs.docker.com/compose/) - orchestration




### Files structure

```
.
├── app
│   ├── .prettierignore
│   ├── .prettierrc.js
│   ├── Dockerfile
│   ├── Makefile
│   ├── nodemon.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── src
│   │   ├── bot  // <-- Bot application files
│   │   │   ├── middleware 
│   │   │   │   ├── dbServicesMiddleware.ts  // <-- add db services to telegram context
│   │   │   │   └── index.ts
│   │   │   └── types.ts
│   │   ├── db // <-- database files - DrizzleORM + services  
│   │   │   ├── index.ts
│   │   │   ├── migrate.ts
│   │   │   ├── migrations
│   │   │   │   ├── 0000_cuddly_moira_mactaggert.sql
│   │   │   │   └── meta
│   │   │   │       ├── 0000_snapshot.json
│   │   │   │       └── _journal.json
│   │   │   ├── schema
│   │   │   │   ├── index.ts
│   │   │   │   └── user.ts
│   │   │   ├── services // <-- buisness logic layer for interact with database
│   │   │   │   ├── abstract.ts
│   │   │   │   └── user.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   └── tsconfig.json
├── docker-compose.dev.yml
├── dump // <-- directory mapped to [app, db] containers for share files in dev mode 
├── Makefile
└── README.MD

```

### Makefile

```
    up - start application (docker-compose up)
    up-silend - start in detached mode (docker-compose up -d)
    rebuild - rebuild all containers (docker-compose up --build)
    down - stop and remove container (docker-compose down)
    shell (container_name) - open container shell (docker-compose exec <container_name> /bin/bash)
    build (container_name) - rebuild specified container (docker-compose build <container-name>) 
    logs (container_name) - logs for specified container (docker-compose logs <container-name>)
```


### App Makefile
```
    migrations - create new migrations
    migrate - apply migrations
    prettier - write prettier
    chmod - reset a+w chmod for all files
    n (...args) - npm run (...args) shortcut 
```

### TODO
 - Add Production setup
 - Add CI/CD