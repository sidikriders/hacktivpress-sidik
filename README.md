# hacktivpress-sidik

Hacktivpress-sidik adalah web app sederhana untuk berbagi post dan blog.

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

### API endpoint

Berikut API yang bisa d gunakan dalam web app ini:

|Method| URL | README |
|------| ------ | ------ |
| POST | /signup | create new user |
| POST | /signin | authenticate user |
| GET | / | get all blog post |
| POST | /blog/new | create new blog post |
| GET | /blog/:id | view only 1 blog post |
| PUT | /blog/:id | edit blog post |
| DELETE | /blog/:id | delete blog post |
