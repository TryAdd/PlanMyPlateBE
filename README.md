# Front End:
- https://github.com/TryAdd/PlanMyPlateFE

# ERD:
- https://files.slack.com/files-pri/T03JBCX8WE7-F053015QDGB/capture.jpg

# Figma prototype:
- https://www.figma.com/proto/d65OitkOzGGh52q7H48rZL/PlanMyPlate?page-id=0%3A1&node-id=9-151&viewport=1062%2C796%2C0.38&scaling=contain&starting-point-node-id=9%3A151

# Plan My Plate ReadMe
	- An embedded screenshot of the app
	- Explanations of the technologies used
	

* -For Plan My Plate the following technologies were implemented:
	- Figma was used to prototype the project and draw the RED model as well 
	- Express and node.js was used for the implementation of the backend  
	- MongoDB was used for creating and storing the database 
	- React was used for the frontend implementation 
	- Cloudinary was used to upload and retrieve and images 
	- Insomnia to test the API funcitionality before implementation in the frontend
	- A couple paragraphs about the general approach you took
	

* -In short the approach  for the project is : 
Starting with the ERD model to identify the needed model and how they interact together 
Moving on to Figma and creating a full prototype of the website with all the needed pages and the interactions with each page 
Segmenting the project into small sections and completing each one of them fully before moving to the next one.

* -As this project deal with backend and front end we Started  by creating a full functioning backend and checking it with insomnia before moving into react to create the components.
Running both frontend and backend project and testing 
	- Installation instructions for any dependencies
	

* -After downloading the project from GitHub , user will need to download on both backend and frontend node_modules , cloudinary , express , axios ,bootstrap-react 
	- Documentation of your application architecture
	- Entity Relationship Diagram (ERD) or Data Model.
	- Your user stories – who are your users, what do they want, and why?
	

* -Plan My Plate is customized for users who are looking to keep track of their daily food intake by creating different recipes of all kind and ordering them in a calendar 
 Your wireframes – sketches of major views / interfaces in your application
	- Descriptions of any unsolved problems or major hurdles you had to overcome
	

* -As we were short in time some features are to be implemented in the future , these features were select an ingredient from the recipes list  and add it to a grocery list . Another function is to add the recipes created into a calendar. 

# Description of the project: 
Planning the daily meals and keeping track of different recipes has become a necessity to many people. Plan My Plate provide a friendly interface to create a recipe and plan your daily meals . 
The User have to login to his/her account in order to view the recipes and modify them 
In order for the user to signup the below crediantiols are needed :  
	- User Name 
	- Email address
	- Password 
	

Once the user has logged in they are able to view their created recipes , see the details of each recipe and edit it , and delete a recipe . The recipe includes the following : 
	- Recipe name as String 
	- Ingredients as an array 
	- Steps as String 
	- Recipe Image 
	

A future addition to the website will include adding the recipe to a calendar to have a plan of daily meal for breakfast, lunch and dinner. In addition, the user will have the ability to add an ingredient to grocery list . 

