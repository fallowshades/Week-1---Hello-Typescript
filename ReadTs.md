
##  how to bundle typscript and parcel

### intro save-deve

[v-1] https://www.youtube.com/watch?v=ciRdVJh9LRU

npm i -D parcel-bundler typescript
npm uninstall parcel-bundler

###

###

###

###

## did not work
[parcel-tsc]https://www.youtube.com/watch?v=ZSOK_qb8eYQ

### 00:00 Video Intro

- docs sum log

parcel as bundler

- install defaults
- parcel as a dev dependency

```sh
npm init -y
npm i parcel --save-dev
touch index.html
```

- create src directory

```sh
mkdir ./src
touch ./src/index.ts
```

### 01:08 Instantiate a new npm project

goal: tsc -p ./tsconfig.json

### 01:50 Install Parcel

html --> auto compleate in index.html file

index.html

- ts will detect and perform transpiling

```html
<script src="./src/index.ts"></script>
```

### 02:27 Creating the required files and directories

generate tsconfig.json

```sh
tsc --init
```

### 04:42 Installing Prettier

tsconfig.json

```json
"noEmitOnError":true
```

[prettier] https://prettier.io/docs/en/install

```sh
npm install --save-dev --save-exact prettier
```

- generate its configuration fiile
### 06:00 Create npm script

- create a web server: watch changes

package.json

- remove the main property within

```json
"start":"(npm parcel ./index.html) & npx parcel watch ./index.html"

```

### 09:34 Testing everything
