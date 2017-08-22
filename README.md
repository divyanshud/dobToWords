# dobToWords

Step 1 : Inject dobToWords module into your app
  app.module('appname',[dobToWords])
  
 Step 2 : Inject convertDobToWords Service into your controller
  app.controller('SampleCtrl',['$scope','convertDobToWords',function($scope,convertDobToWords){}]);
  
  Step3 : Use convertIntoWords method
    convertDobToWords.convertIntoWords(new Date()) 
    
    Note: It will only get take 1 date object as argument and return string
