# Ekidle

[**Ekidle**](https://to-kyo.github.io/ekidle/) は、駅名を当てるゲームです。

https://github.com/cwackerfuss/react-wordle をフォークして制作されました。

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

```bash
$> docker build -t game .
$> docker run -d -p 3000:3000 game
```

Open [http://localhost:3000](http://localhost:3000) in browser.