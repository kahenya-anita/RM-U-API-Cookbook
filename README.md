## RM & U API Cookbook
This is a Rick and Morty and Unsplash API documentation bootstrapped with [Next.js](https://nextjs.org/)

### Author : Anita Kahenya April 2024

## Endpoints Available

### 1. Rick and Morty

| Method | Endpoint            | Description                       
| ------ | ------------------- | --------------------------------- 
| GET   | /location            | get all locations                    
| GET   | /location/{id}       | get location by id                   
| GET   | /location/1,13,5     | get multiple locations by id         
| GET   | /character/{id}      | get a character by id                
| GET   | /characters          | get all characters                     
| GET   | /character/3, 15,24  | get multiple characters by ids        
| GET   | /episode/{id}        | get episode by id        
| GET   | /episode             | get all episodes
| GET   | /episode/2,13,20     | get multiple episodes by ids     


## 2. Unsplash 

| Method | Endpoint            | Description                       
| ------ | ------------------- | --------------------------------- 
| GET   | /photos            | get all photos                    
| GET   | /photos/{id}       | get a photo by id                   
| GET   | /photos/random     | get a random photo        
| GET   | /photos/{id}/statistics      | get photo statistics               
| GET   | /photos/{id}/download          | download a photo by id                     
| GET   | /search/photos      | Search photo by page and keyword       
| GET   | /search/collection   | Search photo by page number and collection name        
| GET   | /search/users         | search photo by username and page number
| GET   | /collections          | get collection by page number   
| GET   | /collections/{id}     | get collection by id 
| GET   | /topics/{id_or_slug}  | get topic by id or slug  
| GET   | /topics/{page}        | get a topic by page number  
| GET   | /topics/{id_or_slug}/photos         | get a topic's photo 

### Technologies & Languages
* [NextJs](https://nextjs.org/)
* [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 
* [Apidog](https://apidog.com/)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)
* [Vercel](https://vercel.com/)

## SetUp Instruction
1. Clone the repository using `git clone`
2.  Navigate to the project folder
3.  Install dependencies by running `npm install` or `yarn install`.
4.  Run the development  server with `npm run dev` or `yarn dev`.
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   
## Contributing and Making Changes
1.  Create a new branch in your terminal `git checkout -b improve-feature`
2. Make necessary changes on the codebase
2.  Run the development  server with `npm run dev` or `yarn dev` to see the changes.
3.  Add the changes and commit them `git commit -am "Improve App"`
4.  Push to the branch `git push origin improve-app` and open a new pull request

## Known Bugs
There are no known bugs

*****
## Contact Information
* Email : anitakahenya1@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 2024 Anita Kahenya