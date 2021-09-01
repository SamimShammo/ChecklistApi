/*
৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 

৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে /{id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 



৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
*/

const getDataPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => myData(data))
}
getDataPhotos();

const myData = data =>{
    console.log(data)
    const getContainer = document.getElementById('card')
    data.forEach(data => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('col-lg-4')
        newDiv.innerHTML = ` 
       <div class="">
         <img src="${data.url}" class="card-img-top" alt=""  onclick="seeDetails(${data.id})">
            <div class="card-body">
            <h5 class="card-title text-uppercase">${data.title}</h5>
         
         <a href="#" class="btn btn-primary">See Details</a>
       </div></div>`;
        getContainer.appendChild(newDiv);
    });
}
const seeDetails = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/{id}${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => myNewClick(data[0]))
}
const myNewClick = data =>{
    const newContainer = document.getElementById('new')
    console.log(data)
    const newDiv = document.createElement('div')
        newDiv.classList.add('col-lg-4')
        newDiv.innerHTML = ` 
       <div class="">
         <img src="${data}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title text-uppercase">${data}</h5>
         
         <a href="#" class="btn btn-primary">See Details</a>
       </div></div>`;
       newContainer.appendChild(newDiv)
}

