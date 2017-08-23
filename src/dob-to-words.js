angular.module( "dobToWords", [] )
.factory( "convertDobToWords", [function(){
	
	var UtilityServiceMethods = {};
	var wDays = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth', 'Twentieth', 'Twenty-First', 'Twenty-Second', 'Twenty-Third', 'Twenty-Fourth', 'Twenty-Fifth', 'Twenty-Sixth', 'Twenty-Seventh', 'Twenty-Eighth', 'Twenty-Ninth', 'Thirtieth', 'Thirty-First'];
	var wMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var numbers = ["","One ","Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ","Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen ","Twenty ","Twenty One ","Twenty Two ","Twenty Three ","Twenty Four ","Twenty Five ","Twenty Six ","Twenty Seven ","Twenty Eight ","Twenty Nine ","Thirty ","Thirty One ","Thirty Two ","Thirty Three ","Thirty Four ","Thirty Five ","Thirty Six ","Thirty Seven ","Thirty Eight ","Thirty Nine ","Fourty ","Fourty One ","Fourty Two ","Fourty Three ","Fourty Four ","Fourty Five ","Fourty Six ","Fourty Seven ","Fourty Eight ","Fourty Nine ","Fifty ","Fifty One ","Fifty Two ","Fifty Three ","Fifty Four ","Fifty Five ","Fifty Six ","Fifty Seven ","Fifty Eight ","Fifty Nine ","Sixty ","Sixty One ","Sixty Two ","Sixty Three ","Sixty Four ","Sixty Five ","Sixty Six ","Sixty Seven ","Sixty Eight ","Sixty Nine ","Seventy ","Seventy One ","Seventy Two ","Seventy Three ","Seventy Four ","Seventy Five ","Seventy Six ","Seventy Seven ","Seventy Eight ","Seventy Nine ","Eighty ","Eighty One ","Eighty Two ","Eighty Three ","Eighty Four ","Eighty Five ","Eighty Six ","Eighty Seven ","Eighty Eight ","Eighty Nine ","Ninety ","Ninety One ","Ninety Two ","Ninety Three ","Ninety Four ","Ninety Five ","Ninety Six ","Ninety Seven ","Ninety Eight ","Ninety Nine "];
	
	
	//Helper Method to Convert Year to Words
	function ConvertWord(WrdAmt){
		var strtemp, strtemp1, NumInWords, intNumber;
        NumInWords = ""
        intNumber = WrdAmt.length;

        switch(intNumber){
			case 9:
					strtemp = WrdAmt.substring(0, 2);
					strtemp1 = WrdAmt.substring(2);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)] + "Crore " + ConvertWord(strtemp1);
					} 
					else{
						NumInWords = ConvertWord(strtemp1);
					}
					break;
            case 8:
					strtemp = WrdAmt.substring(0, 1);
					strtemp1 = WrdAmt.substring(1);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)] + "Crore " + ConvertWord(strtemp1);
					} 
					else{
						NumInWords = ConvertWord(strtemp1);
					}
					break;
            case 7:
					strtemp = WrdAmt.substring (1, 3);
					strtemp1 = WrdAmt.substring(2);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)] + "Lakh " + ConvertWord(strtemp1);
					}
					else{
						NumInWords = ConvertWord(strtemp1);
					}
					break;
            case 6:
					strtemp = WrdAmt.substring (0, 1);
					strtemp1 = WrdAmt.substring(1);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)] + "Lakh " + ConvertWord(strtemp1);
					}
					else{
						NumInWords = ConvertWord(strtemp1);	
					}
					break;
            case 5:
					strtemp = WrdAmt.substring(0, 2);
					strtemp1 = WrdAmt.substring(2);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)] + "Thousand " + ConvertWord(strtemp1);		
					} 
					else{
						NumInWords = ConvertWord(strtemp1);	
					}
					break;
            case 4:
					strtemp = WrdAmt.substring(0, 1);
					strtemp1 = WrdAmt.substring(1);
					if (strtemp!="0"){
						NumInWords = numbers[parseInt(strtemp)] + "Thousand " + ConvertWord(strtemp1);	
					}
					else{
						NumInWords = ConvertWord(strtemp1);	
					}
					break;
            case 3:
					strtemp = WrdAmt.substring(0 ,1)
					strtemp1 = WrdAmt.substring(1);
					if (strtemp!= "0"){
						NumInWords = numbers[parseInt(strtemp)]+ "Hundred " + ConvertWord(strtemp1);	
					}
					else{
						NumInWords = ConvertWord(strtemp1);	
					}
					break;
            case 2:
					strtemp = WrdAmt.substring(0,2)
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)];	
					}  
					else{
						NumInWords = ConvertWord(strtemp1);	
					}
					break;
            case 1:
					strtemp = WrdAmt.substring(1);
					if (strtemp != "0"){
						NumInWords = numbers[parseInt(strtemp)];	
					}  
					break;
            case 0: break;
		}
		return NumInWords;
	}

	
	
	
	function convertIntoWords(dateObject){		
		if (Object.prototype.toString.call(dateObject)!="[object Date]"){
			console.log("invalid parameter for dobToWords");
			return ;
		}
		else {
			var wordString=null;
			var date = dateObject
			var day = parseInt(date.getDate()) - 1;
			var month = parseInt(date.getMonth());
			var year = date.getFullYear();
			var yearString = year.toString();
			//Assign day and month
			wordString=wDays[day] + ' ' + wMonths[month];

			if (year < 2000) {
				wordString = wordString + " " + ConvertWord(yearString.substring(0, 2));
				wordString = wordString + ConvertWord(yearString.substring(2,4));
			}	
			else{
				wordString = wordString + " " + ConvertWord(yearString);
			}
			return wordString;
		}
	}
     UtilityServiceMethods.convertIntoWords=convertIntoWords;
	 return UtilityServiceMethods;
}]);