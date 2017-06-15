# hacktivpress-sidik

Hacktivpress-sidik adalah web app sederhana untuk berbagi post dan article blog.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd hacktivpress-sidik/server
$ npm install
$ npm start
$ cd ../client
$ npm install
$ npm run dev
```

### Testing

```sh
$ cd server
$ NODE_ENV=test mocha
```

### API endpoint

Berikut API yang bisa d gunakan dalam web app ini:

|Method| URL | README |
|------| ------ | ------ |
| POST | /signup | create new user |
| POST | /signin | authenticate user |
| GET | / | get all article blog post |
| GET |  article/:id | view only 1 article blog post |
| POST |  article/new | create new article blog post |
| PUT |  article/:id | edit article blog post |
| GET | article/by-category | view article blog post by it's category |
| GET | article/by-author | view article blog post by it's author |
| DELETE |  article/:id | delete article blog post |
