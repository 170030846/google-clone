-material ui
-context api
-react router
-google custom search api ---> https://developers.google.com/custom-search/v1/using_rest (generate API)
---> https://cse.google.com/cse/create/new

-building own custom hook to pull the info from the service
-firebase to connect to google
-firebase to deploy

1. when we hit search it will redirect to /search page
2. it's going to push the term which you have searched into the data layer
   3)once that in data layer, pull it from using useState value
   4)then we use our custom hook that we have created useGoogleSearch to pass that term and return the data as an object
