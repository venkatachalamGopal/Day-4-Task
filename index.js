// 1.Comparing of two objects

const obj1={
    name:"Person 1",
    age:5
}
const obj2={
    age:5,
    name:"Person 1"
    
}
if(obj1.name===obj2.name && obj1.age===obj2.age){
    console.log("Both obj 1 and obj 2 are same");
}else{
    console.log("Not same");
}



//2.Display- All the country Flag

const xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.send();
xhr.onload=function(){
    if(xhr.status==200 && xhr.readyState==4){
        const value=JSON.parse(xhr.response);
        value.forEach((obj)=>{
            // console.log(obj.flag);
        })
    }
    else{
        console.log('Request Failed');
    }
}


//3.Display- All the country name,region,subregion,population.

const xhr1=new XMLHttpRequest();
xhr1.open("GET", "https://restcountries.com/v2/all")
xhr1.send();
xhr1.onload=function(){
    if(xhr.status==200 && xhr.readyState==4){
        const value=JSON.parse(xhr.response);
        value.forEach((obj)=>{
            console.log('Name       :',obj.name);
            console.log('Region     :',obj.region);
            console.log('Subregion  :',obj.subregion);
            console.log('Population :',obj.population);
            console.log('<---------------------------->');
        })
    }
    else{
        console.log('Request Failed');
    }
}

// Q.4.Variables Arrays & Objects;


//1)How to get value of the variable myvar as output
var a=[]
b=""
c=[]
console.log(a+b+c)
//o/p
//blank
//------------------------------------------------

// 2)How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");
//o/p
//myvar
//--------------------------------------------------------

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var address={name:"joel m",
maritalstatus:"married",
coumntry:"india",
age:"27",
}
console.log(address)
//o/p
//{
//    name: 'joel m',
//    maritalstatus: 'married',
//   coumntry: 'india',
//    age: '30'
//--------------------------------------------------


// 4.Declare variables to store your first name, last name, marital status, country and age in a single line
var address=["name:joel","maritalstatus:married",
"coumntry:india","age:30"]
temp=""
for(i=0;i<address.length;i++)
if(i==address.length-1)
{
    temp+=address[i]
}
else{
    temp+=address[i]+","
}
console.log(temp)
//o/p
//name:joel m,maritalstatus:married,coumntry:india,age:30
//-------------------------------------------------

//5. Declare variables and assign string, boolean, undefined and null data types

var a;
b="narayanan";
console.log(b)
console.log("narayanan"==b,typeof(b))
console.log(a)
console.log(1&&1)
a=2;b=3;
if(a>b){
    console.log("b")
}
//------------------------------------------------

//6. Convert the string to integer parseInt()
//Number()
//Plus sign(+)
a="123";b="456";
console.log(Number(a)+Number(b))
a="123";b="456";
console.log(parseInt(a)+parseInt(b))
a="1";b="2";
console.log(+a + +b)
a=125;b=123;
console.log(a+"" + b+"")
//o/p
//579
//579
//3
//125123
//-----------------------------------------------


//square of anumber
class square
{
math(d){
    return d**2;
}
}
let o=new square();
a=o.math(20);
console.log(a);
//------------------------------------------------


//Swapping 2 numbers
function arrayrotate(a,k){
    for (let i=0;i<k;i++)
 {
 temp=a[0]
 for (let i=0;i<a.length-1;i++)
 {
 a[i]=a[i+1]
 }
 a[a.length-1]=temp
 }
 console.log(a);
 }
 ans=arrayrotate([1,2,3,4,5,6,7,8,9],9)
 //o/p
 //[1, 2, 3, 4, 5, 6, 7, 8, 9]
//-------------------------------------------

//add 3 number
add=(a)=>{
     temp=0
     for(let i=0;i<a.length;i++)
     {
         temp+=a[i]
     }
     return temp;
    }
j=add([1,2,3,4,5])
console.log(j)
//----------------------------------------------

//celsius to fahrenheat
fahren=(a)=>{
    f=a*(9/5)+32;
    return f;
}   
ans=fahren(2);
console.log(ans)
//o/p
//35.6
//----------------------------------------------

//meter to miles
miletome=(a)=>{
    f=a*0.000621371;
    return f;
}   
ans=miletome(1000);
console.log(ans)
//o/p
//0.621371
//-----------------------------------------------

//pounds  to kg
poukg=(a)=>{
    f=a*0.453592;
    return f;
}   
ans=poukg(1);
console.log(ans)
//o/p;
//0.453592
//-------------------------------------------------

//batting avg
bavg=(runs,inn)=>{
    f=runs/inn;
    return f;
}   
ans=bavg(1,2);
console.log(ans)
//o/p
//0.5
//--------------------------------------------------

//test avg
bavg=(runs,nomat)=>{
    temp=0;
    for(let i=0;i<runs.length;i++)
    {
temp+=runs[i];
    }
    f=temp/nomat;
    return f;
}   
ans=bavg([1,2,3,4,5],5);
console.log(`avg ${ans}`)
//o/p
//avg 3
//---------------------------------------------------

//power of two num
pow=(runs,nomat)=>{
return runs**nomat
    }
    
ans=pow(2,5);
console.log(`pow ${ans}`)
//o/p
//pow 32
//--------------------------------------------------

//Calculate Simple Interest
function si(p,n,r){
    val=p*n*r/100;
    return val;
}
m=si(400,5,2);
console.log(`interest ${val}`)
//o/p
//interest 40
//--------------------------------------------------

//equi of tri
function et(a){
    val=((Math.sqrt(3))/4)*(a**2);
    return val;
}
m=et(40);
console.log(`triangel ${val}`)
//o/p
//triangel 692.8203230275509
//----------------------------------------------------

//Area Of Isosceles Triangle(aoi)

function aoi(b,h){
    val=(b*h/2);
    return val;
}
m=aoi(4,6);
console.log(`aoisscles tri ${val}`)
//o/p
//aoisscles tri 12
//--------------------------------------------------

//vol of sphere(vos)
function aoi(r){
    val=(4/3*22/7*r**3);
    return val;
}
m=aoi(4);
console.log(`vol of sphere ${val}`)
//o/p
//vol of sphere 268.1904761904762
//--------------------------------------------------

//Volume Of Prism

function aoi(l,w,h){
    val=(l*w*h);
    return val;
}
m=aoi(4,4,4);
console.log(`Volume Of Prism ${val}`)
//o/p
//Volume Of Prism 64
//-------------------------------------------------


//Find area of a triangle (aot).
function aot(l,h){
    val=(l*h/2);
    return val;
}
m=aot(4,4);
console.log(`area of a triangle ${val}`)
//o/p
//area of a triangle 8
//--------------------------------------------------

//Actual cost and Sold cost, Calculate Discount Of Product
function aot(l,h){
    min=l-h;
    return min;
}
m=aot(1000,50);
console.log(`dis ${min}rs`)
//o/p
//dis 950rs
//---------------------------------------------------

//redius to coc, diameter of circle
function aot(r){
    coc=(2*22/7*r)
    return coc;
}
function ao(radius){
    aoc=(2*22/7*radius**2)
    return aoc;
}
m=aot(2);
console.log(`coc ${coc}rs`)
y=ao(2);
console.log(`aoc ${aoc}rs`)
//o/p
//coc 12.571428571428571rs
//aoc 25.142857142857142rs
//--------------------------------------------------

//two numbers and perform all arithmetic operations.

function arith(a,b,c,d,e,f)
{
    tot=a+b*c-d/e%f;
    return tot;
}
ans=arith(1,2,3,4,5,6)
console.log(ans)
//o/p
//6.2
//--------------------------------------------------

//Display the asterisk pattern 
a="*****";
b="*****";
c="*****";
d="*****";
e="*****";
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
//o/p
//*****
//*****
//*****
//*****
//*****
//--------------------------------------------------

//Calculate electricity bill?
function ebill(waats,hours,month){
    cac=((waats/1000)*10*(hours)*(month))
    return cac;
}
bill=ebill(1000,2,3)
console.log(`Ebill ${bill}rs`)
//o/p
//Ebill 60rs
//---------------------------------------------------

//Program To Calculate CGPA
function cgpa(mark,sub){
    cac=(mark/sub)
    return cac;
}
uni=cgpa(100,2)
console.log(`CGPA ${uni}`)
//o/p
//CGPA 50
//--------------------------------------------------

//Write a loop
a=["#","#","#","#","#",'#']
temp=""
for(let i=0;i<a.length;i++)
{
temp+=`${a[i]} `
console.log(temp);
}
//o/p
//# 
//# # 
//# # #
//# # # #
//# # # # #
//# # # # # #
//----------------------------------------------------

//string array
var a= ["<option>Jazz</option>",
      "<option>Blues</option>",
      "<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"]

for(let i=0;i<a.length;i++)
{
temp=`${a[i]} `
console.log(temp);
}
//o/p
//<option>Jazz</option> 
//<option>Blues</option>     
//<option>New Age</option>   
//<option>Classical</option> 
//<option>Opera</option>     
//----------------------------------------------------

//declare an empty array
//empty array to fill push method
a=[];
m=a.push("thayir","chapathi","rasam","murungakaai","kathirika","bread","ittly","kambukool");
console.log(m)
//o/p
//[
 //   'thayir',
 //   'chapathi',
 //   'rasam',
 //   'murungakaai',
 //   'bread',
 //   'ittly',
 //   'kambukool' ]
//---------------------------------------------------

//write a code to count the elements in the array . Don’t use length property

var arr=[11,22,33,44,55];
arr1=arr.push()
console.log(`array length is ${arr1}`)
//o/p
//array length is 5
//--------------------------------------------------

//choose fav food
let food=['thayir','chapathi','rasam','murungakaai','bread','ittly','kambukool']
console.log(food.slice(2,3))
//o/p
//['rasam']

//------------------------------------------------
//change element
var m= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];

function dataHandling(m,f,l){
  {
  temp=m[f] 
  m[f]=m[t]
  m[t]=temp
  }
console.log(m)
}
  ans=dataHandling(m,0,3);

//----------------------------------------------------
//till you meet CaptianAmerica.
let m= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];
function dataHandling(m,timeofloop){
  for (let i=0;i<timeofloop;i++)
  {
  temp=m[0]
  for (let i=0;i<m.length;i++) 
  {
  m[i]=m[i+1]
  }
  m[m.length-1]=temp
  }
console.log(m)
}
  ans=dataHandling(m,2);
//o/p
//[
//  'CaptianAmerica',     
 // 'Munnabai',
 // 'Jeff',
 // 'AAK chandran',       
 // 'Mari',
 // 'MaryJane'
//----------------------------------------------

var friends= ["Mari","MaryJane",
"CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];

function dataHandling(input, name){
  for (var i = 0; i < input.length;i++) 
  if(friends[i]==name)
  {
    find=friends[i]
    console.log(`${find} is my friends`)
  }  
  }
  let found = dataHandling(friends,"Munnabai");
//o/p
//Munnabai is my friends
//--------------------------------------------------

//two list of friends combine one

var friends1= ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = [ "Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];

friends=[...friends1,...friends2]
function dataHandling(input){
  input.sort()
  console.log(friends)
  }
  dataHandling(friends);
//[
 // 'AAK chandran', 'CaptianAmerica',
 // 'ET',           'Gabbar',
 // 'Jeff',         'Jeff',
 // 'Mari',         'MaryJane',
 // 'Mass',         'Munnabai',
 // 'Rajinikanth',  'Spiderman'
//------------------------------------------------

//get first,mid,last item
function ord(...a){
m=(a.length-1)/2;
l=a.length-1;
i=0;
console.log(a[i],a[m],a[l])}
o=ord(1,2,3,4,5,6,7)
//o/p
//1 4 7
//-----------------------------------------------------

//2. Add your name to the end of the friends array, and add another name to beginning.
var friends= ["Mari","AAK chandran"];

function ord(friends,l,f){
  (friends.push(l),friends.unshift(f))
  console.log(friends)
}
  o=ord(friends,"manju","gopi")
//o/p
 // ['gopi', 'Mari','AAK chandran','manju']
//-------------------------------------------------

//add mr and ms
var friends= ["venkatachalm","joel"];

function ord(friends,l,f){

  console.log(l,friends[0],f,friends[1])
}
  o=ord(friends,"mr","ms")

  //o/p
  //mr venkatachalam ms joel
//-------------------------------------------------

var friends2=  ["venkatachalm","joel"];

function ord(friends){
  temp=""
  for(let i=0;i<friends.length;i++)
  if(i==friends.length-1)
  {
    temp+=`"${friends[i]}"`
  }
  else{
     temp+=`"${friends[i]}",`
  }
  console.log(temp)
}
  o=ord(friends)
//o/p
//"venkatachalam","joel"
//---------------------------------------------------

// Find the friends names who has letter ‘a’ and return the list.
value=["venkat","nj","go","pmi","va","esma","mva"]
function identify(a,find){
  val=""
for(let i=0;i<a.length;i++)
for(let j=0;j<a.length;j++)
if(a[i][j]==find)
if(i==a.length-1)
{
  val+=a[i]
}
else{
val+=a[i]+","
}
return val
}
a=identify(value,"m")
console.log(val)
//o/p
//venkat,pmi,esma,mva
//------------------------------------------------------

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

a=["venkat","joel","jayanthi","munusamy"]
function avg(a){
value=0
for(let i=0;i<a.length;i++)
{
value+=a[i].length/a.length
}
console.log(value)
}
m=avg(a);
//o/p
//7.25

//------------------------------------------------------

//Find the names and return the list starting with letter M.
value=["majjnhju","manath","gopm","god"]
function identify(a,find){
  val=""
for(let i=0;i<a.length;i++)
for(let j=0;j<a.length;j++)
if(a[i][j]==find)
{
  val+=a[i]+","
}
return val
}
a=identify(value,"m")
console.log(a)
//o/p
//manju,nnknkj,gibjbo,pmji,mvaj

//---------------------------------------------------

//8. Find the name with max characters and return the name.
a=["venkatachalam","manoj","bigfamilly","arun","vani","priya"]
function order(a){
for(let i=0;i<a.length;i++)
for(let j=i+1;j<a.length;j++)
if(a[i].length>a[j].length)
{
  temp=a[j];
a[j]=a[i];
a[i]=temp;
}
return (a[a.length-1])
}
h=order(a);
console.log(h)
//o/p
//bigfamily


//-----------------------------------------------------
//9. Find the name with min characters and return the name.
a=["venkatachalam","manoj","bigfamilly","arun","vani","priya"]
function order(a){
for(let i=0;i<a.length;i++)
for(let j=i+1;j<a.length;j++)
if(a[i].length<a[j].length)
{
  temp=a[j];
a[j]=a[i];
a[i]=temp;
}
return (a[a.length-1])
}
h=order(a);
console.log(h)
//o/p
//arun


//--------------------------------------------------
let value=[6,12,"Mari",1,true, "Munnabai","200", "CaptianAmerica",8,10];
function add(a){
temp=0;
for(let i=0;i<a.length;i++)
if(Number(a[i]))
{
temp+=Number(a[i]);
}
console.log(temp)
}
m=add(value)
//o/p
//36
//-------------------------------------------------

//Print the contents of the input variable
var input = [
["0001","Roman Alamsyah","Bandar Lampung","21/05/1989", "Membaca"],
["0002","Dika Sembiring","Medan","10/10/1992","Bermain Gitar"],
["0003","Winona","Ambon","25/12/1965","Memasak"]]


function add(a,i,j){
{
temp=(a[i][j]);
}
return temp;
}
m=add(input,0,4)
console.log(m)
//o/p
//Membaca
//--------------------------------------------------

//add key value

myobject = {om:"one","11":1,"name":"arun"};
myobject.key3="ten"
value=Object.assign(myobject,{ok:"m"})
console.log(value);
console.log(myobject);
//o/p
//{ '11': 1, om: 'one', name: 'arun', key3: 'ten' }

//-------------------------------------------------
//
myobject={gh:"one",jb:"1",name:"arun"};
m=`${myobject}kjbk`
console.log(m);
//o/p
//[object Object]kjbk


