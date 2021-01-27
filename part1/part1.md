1. What will happen at line 11 and why?
   The function prints the number of prices because i acts as a counter for the number of prices in the function. The scope of i is the whole function.

2. What will happen at line 12 and why?
   The function prints the last discounted price calculated in the for loop. It is because discountedPrice is lastly updated when calculating the discounted price for the last price in prices. The scope of discountedPrice is the whole function.

3. What will happen at line 13 and why?
   The function prints the last final price calculated in the for loop. It is because finalPrice is lastly updated when calculating the final price for the last price in prices. The scope of finalPrice is the whole function.

4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
   The function will return [50,100,150]. 50 is the final price of the first original price, 100 is the final price of the second original price, 150 is the final price of the last original price.
    

5. What will happen at line 11 and why?
   There is an error. The scope of i is just inside the for loop.

6. What will happen at line 12 and why?
   There is an error. The scope of discountedPrice is just inside the for loop.

7. What will happen at line 13 and why?
   The final price of the last price of the original prices will be printed. The scope of finalPrice is inside the whole function.

8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
   If ignore the errors that will happen at lines 11 and 12, the function will print 150 on console.

   If not ignore the error that will happen at lines 11 and 12, the function will return an error. 150 is the amount of money that is left from subtracting the last original price which is half of the original price.

9. What will happen at line 11 and why?
    There will be an error occurred at line 7 when trying to update the cosnt finalPrice. Ignore line 7, line 11 will generate an error. The scope of i is just inside the for loop.

10. What will happen at line 12 and why?
    There will be an error occurred at line 7 when trying to update the cosnt finalPrice. Ignore line 7, line 12 will generate an error, it is becasue the scope of discountedPrice is just inside the for loop.

11. What will happen at line 13 and why?
    There will be an error occurred at line 7 when trying to update the cosnt finalPrice. Ignore line 7, line 13 will print the number 0 on the console becasue the scope of the const finalPrice is inside the whole function.

12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    If ignore the errors that will happen at lines 7, 11, and 12, the function will return [0,0,0]. Since finalPrice is set to be o constantly in the function, so the final price for each original price is set to 0.

13. 
    a. let key = "name";
       alert(student[key]);
    b. alert(student['Grad Year']);
    c. student.greeting();
    d. alert(student['Favourite Teacher'].name);
    e. alert(student.courseLoad[0]);

14.  
    a. 32
    '3' is a string and the number 2 is changed to a string when performance the string concatenation, so string "32" is generated.
    b. 1
    The string '3' is converted to a number when operting the subtraction in JS, so the final answer is the number 1 derived from 3 minus 2.
    c. 3
    The number 3 is added to a null, so it self is returned.
    d. 3null
    Since '3' is a stirng, + here means string concatanetion. null is converted to a string "null" and concatenated to the string "3".
    e. 4
    3 is a number and true here is converted to the number 1 in addition. The final result is 3+1=4.
    f. 0
    false is converted to the number 0 and null does not do anything, so the final answer is still 0.
    g. 3undefined
    3 is a string so the + here means string concatenation. undefined is converted to string "undefined" and concatenated after string "3".
    h. NaN
    The string "3" and undefined are both converted to numbers when operating subtraction. So the final answer is the number 3 - NaN = NaN.

15. 
    a. true
    String '2' here becomes number 2 when comparing with number 1.
    b. false
    The dictionary order of stirng '2' is greater than '12'.
    c. true
    string '2' becomes number 2 in comparison.
    d. false
    Number 2 and string '2' have different types.
    e. false
    The numerical value of true is 1, it does not equal to 2.
    f. true
    Boolean(2) function returns true as the answer. And this true is compared with another true, so the final answer is true.

16. A strict equality operator === checks the equality without type conversion. When comparing values of different types, JavaScript converts the values to numbers. A regular equality check == has a problem. For example, it cannot differentiate 0 from false because they have the name numberical value.

17. 'How are you?' is printed. The code first evaluates 2 == true, which is not true becasue 2 != 1, so it goes on to evaluate else if. Else if block checks whether 2 is not false, it is correct. Any number that is not 0 means not false, or true, so 'How are you?' is printed. 
    
19. The function returns [6,8,10]. 
    Here are the steps:
    1. When i = 0, num is 1; callback is always doSomething.
    2. Go to doSomething, doSomething calls callback with x = 1+2 = 3.
    3. Go back ro function(x), it returns 3*2 = 6. 6 is pushed to newArr.
    4. When i = 1, num is 2; callback is always doSomething.
    5. Go to doSomething, doSomething calls callback with x = 2+2 = 4.
    6. Go back ro function(x), it returns 4*2 = 8. 8 is pushed to newArr.
    7. When i = 2, num is 3; callback is always doSomething.
    8. Go to doSomething, doSomething calls callback with x = 3+2 = 5.
    9. Go back ro function(x), it returns 5*2 = 10. 10 is pushed to newArr.

21. 1
    4
    3
    2



