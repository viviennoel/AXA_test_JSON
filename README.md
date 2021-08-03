# PRODUCTION FOR THE TECHNICAL TEST AXA

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1628025020/Capture_d_e%CC%81cran_2021-08-03_a%CC%80_23.09.23_kwf3hs.png)

# GETTING STARTED

### To deploy the BACKEND :

The structure of this backend was provided for the technical test. It includes a JSON-server and some data for the modelisation of the stocks evolution.

#### Install packages

```
npm i
```

#### Start Api

```bash
npm run start-api
```

### To deploy the FRONTEND :

The frontend was created with react. The command line to start this application have been siplified using a script for a smoother deployment.

#### Install packages

```bash
cd front
npm i
```

#### Start the frontend

```bash
npm start
```

## More command lines

#### Bellow are additional commands for the BACKEND, in case of need for the test


#### Start Api which response with delay (10s)

```bash
npm run delay-api
```

#### Start Server

```bash
# Dev
npm run watch
npm run dev

# Prod
npm run start
```

## Api Routes

To load the last 20 stock value samples :

```console
$> curl http://localhost:3000/stocks?_limit=20
```

To load all available stock value samples :

```console
$> curl http://localhost:3000/stocks
```

More exemple : [here](https://github.com/typicode/json-server#routes)

Queries return a JSON array of stock samples :

```javascript
[
  {
    timestamp: "2018-11-08T14:47:41.157Z",
    index: 0,
    stocks: "17.482"
  },
  {
    timestamp: "2018-11-07T14:47:41.158Z",
    index: 1,
    stocks: "18.335"
  }
];
```
