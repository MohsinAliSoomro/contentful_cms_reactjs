# Contentful CMS integration in reactjs app
The react app is integrated with [Contentful CMS](https://www.contentful.com/) API on the posts


:point_right: :heavy_heart_exclamation: :point_left:


![App](https://github.com/MohsinAliSoomro/contentful_cms_reactjs/blob/master/src/contentful.gif?raw=true)

Dependency
```
npm install contentful
```
Get Your entries from contentful CMS
get your space id and accessToken from contentful CMS
```
import * as contentful from 'contentful';

export const client = contentful.createClient({
	space: process.env.REACT_APP_SPACE_ID,
	accessToken:process.env.REACT_APP_ACCESS_TOKEN
});
client.getEntries()
.then(entries=>console.log(entries))
.catch(er=>console.log(er))

```
Clone
```
https://github.com/MohsinAliSoomro/contentful_cms_reactjs.git
```

Run Commands
```
npm install
npm start
```
