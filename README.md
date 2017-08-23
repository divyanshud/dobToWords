# dobToWords

## Steps to Use

**Step 1** :Inject dobToWords module into your app i.e. generally knows as the dependency injection in the angular application which we have instantiated.  
 
 `app.module('appname',[dobToWords])`
  
 **Step 2** : Inject convertDobToWords Service into your controller so that you can easily use the methods of the service of the library.
 
 `app.controller('SampleCtrl',['$scope','convertDobToWords',function($scope,convertDobToWords){}]);`
  
 **Step 3** : Use convertIntoWords method into your controller now by calling the method `convertIntoWords(Date object)`
 
 `convertDobToWords.convertIntoWords(new Date());`
    
 ## Things to Keep in mind
 * It takes only one argument which is a date object
 * It returns string which is the converted Date object into words 
 
 ## Example

 ### Sample Code
```
 angular.module('sampleApp',[dobToWords])
 .controller('SampleCtrl',['$scope','convertDobToWords',function($scope,convertDobToWords){
    var dateOfBirth = new Date('04/21/1990');
    var dobIntoWords = convertDobToWords.convertIntoWords(dateOfBirth);
    console.log('Date of Birth in Words : '+ dobIntoWords);
 }]);

 ```
### Output

`Date of Birth in words: Twenty-first April Nineteen Ninety Four`
