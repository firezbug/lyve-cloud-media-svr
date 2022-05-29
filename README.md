# ☁️ Lyve Cloud Media Server 
![lyvecloudLogo](https://cdn.fs.agorize.com/wt6ZbldrT9OKiDDiJXxn)
---

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## 📝 About The Project
Creating a low tier YouTube in 5 days🤡

### 🔧 Built With
This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Amazon SDK](https://aws.amazon.com/sdk-for-javascript/)

## 📖 Getting Started 
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### 💾 Prerequisites
This is an example of how to list things you need to use the software and how to install them.

### 💾 Installation 
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

1. Clone the repo
```bash
  git clone https://github.com/firezbug/lyve-cloud-media-svr.git
```
2. In "lyve-cloud-media-svr" folder, go to "frontend" folder
```bash
  cd frontend
```
Then install
```bash
  npm install
```
Then back to the "lyve-cloud-media-svr" folder
```bash
  cd ..
```
3. You are now in "lyve-cloud-media-svr" folder, go to "middleware" folder
```bash
  cd middleware
```
Then install
```bash
  npm install
```
Then back to the "lyve-cloud-media-svr" folder
```bash
  cd ..
```
4. You are now in "lyve-cloud-media-svr" folder, install another node_modules 
```bash
  npm install
```
Please make sure you have 3 node_modules folders in your "lyve-cloud-media-svr", "frontend" and "middleware" folders respectively 
5. Now we are ready to configure endpoint url, access key & secret key. Go to "middleware" folder
```bash
  cd middleware
```
We need to create a .env file
```bash
  touch .env
```
Now open the .env file and insect the endpoint url, access key and secret key, in our case, we put
```bash
  ACCESS_KEY=K5OY51LQVVZR2AL2
  SECRET_KEY=4JT2UYHPY2PWFWEJVZU0HLCO020FM1AA
  ENDPOINT_URL=s3.ap-southeast-1.lyvecloud.seagate.com
  REGION=ap-southeast-1
  AUDIT_LOGS_BUCKET=x-log-records
  NEW_BUCKET=x-media-files
```
Please save this file and back to the "lyve-cloud-media-svr" folder
```bash
  cd ..
```
6. Now we done all the setting, time to start the system!
```bash
  npm start
```

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.


