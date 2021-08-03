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

# KEY FUNCTIONALITIES

### Display a graph of the 20 latest data received and provide a table for data modification.

The data are updated and saved in the localStorage or a Redux store in yhis version. The implementation of a database would be interesting for a further version (more secure).

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1628025020/Capture_d_e%CC%81cran_2021-08-03_a%CC%80_23.09.23_kwf3hs.png)

### Display a graph of all the data, including the modified data.

The data are updated and saved in the localStorage allowing us to update the complete dataset with their modified value. It allows us to provide the user with the updated data, even when displaying a longer period of time.

I choosed as well to display the average stock value for the whole period in order to give a better idea to the user of the evolution.

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1628025482/Capture_d_e%CC%81cran_2021-08-03_a%CC%80_23.17.50_xegq23.png)

### Handle errors and issues.

I have used conditional rendering in order to provide the user the information about the request's status.
A loader have been implemented and is rendered as long as the data is not received, allowing the rendering of the chart and table components.
In addition, if an error occurs, a message is displayed on the page.

![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1628026701/Capture_d_e%CC%81cran_2021-08-03_a%CC%80_23.38.07_lximu8.png)
![alt text](https://res.cloudinary.com/viviennoel07/image/upload/v1628027096/Capture_d_e%CC%81cran_2021-08-03_a%CC%80_23.44.47_xmxjyo.png)

# TESTS AND AREAS OF IMPROVEMENT

Bellow are the command lines to run the test.
As highlighted during the interview, this is an identified area for improvement.
More test are needed and I'm strongly willing to learn how to test sytematicaly the code. 

```bash
cd front
npm run test
```

# VULNERABILITY

the command 'npm audit' allows us to identify clearly the vulnerabilities of the application.
The analysis if this application is presented bellow. It would be very important to fix these vulnerabilities before pushing the application to production.

# More command lines

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
