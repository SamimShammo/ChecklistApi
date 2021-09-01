
/*
১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
*/
const student = {
    name: 'Orpa',
    age: 25,
    favourite: 'love',
    emPro :[2, 3, 4 , 1, 8],
    doObject:{
        teacher :{
            madam:'Samim Shammo '
    }},
    doFunc: function(previous) {
        this.age = this.age - previous;
        return this.age;
    }

}
const {madam} = student.doObject.teacher;
// console.log(student.doFunc(3))

/*
২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
*/
const template = `${student.name} ${student.age} ${student.favourite} ${student.doObject.teacher.madam} ${student.emPro[1]}`
// console.log(template)

/*
৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
*/
const arroFunction = () => {
    const number = 40 + 49
    return number;
}
// console.log(arroFunction(0))

/*
৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
*/
const arroDivide = number => {
    const divided = number / 7
    return divided
}

const divide = arroDivide(140)
// console.log(divide)

/*
৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
*/
const arro2pramiter = (num1, num2) =>{
    const plus = num1 + num2;
    const divide = plus / 2;
    return divide;
}

const praMIter = arro2pramiter(22, 46)
// console.log(praMIter)
/*
৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
const manyFunction = (num1, num2) => {
    let plus = num1 + 7;
    let num1Plus = plus;
    // console.log('num1', num1Plus)
    let dublePluse = num2 + 7;
    let num2Pluse = dublePluse;
    // console.log('num2', num2Pluse)
    let newPlus = num1Plus + num2Pluse;
    return newPlus
    
}
const newFun  = manyFunction(56, 89)
// console.log(newFun)
/*
৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

/*
৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
*/
// map Array kiso ekta korebe
const newaarr= [42, 64, 54, 76, 83, 36, 75].map(newarr =>  parseInt(newarr / 7))
console.log('this new array', newaarr)

// filter need condition 
const nim4 = [ 1, 3, 4 ,5 ,6, 7, 8, 9,12]

const bigNumbers = nim4.filter(numbers => numbers < 10);
console.log(bigNumbers)


// find jeta er shate milbe shei Array ta dibe first e 
const company=[
  
       {phone:'I phone 11 pro max', ram:'16GB', rom:'512GB', price: 160000, color: 'Blue'},
       {phone:'I phone 12 pro max', ram:'16GB', rom:'52GB', price: 1600, color: 'whute'},
        { Html: 'hypertext', css: 'Style CSS', react:'fremWorkd', javaScript:{
           es: 'newScript', food: 'Fuchka'
        }}
    
];

const nh = company.find(product => product.ram == "16GB");
console.log(nh)

/*
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/

// const lover = { age: 14, class: 7, school: 'Phakol Police line school and colage', blacne:{
//     sir: 'Jamal sir', name:'Orpa Shammo', mam: 'Jahanara',
// }}
const students = { 
    age: 14, 
    student:{
        blance:['samim', 'Orpa'+'Shammo']
    }}
       
console.log(students.student.blance[1])




 
 
    
