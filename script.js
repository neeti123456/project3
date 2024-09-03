let item=document.querySelectorAll('.item');
item.forEach(item=>{
    const title=item.querySelector(".title")
    const content=item.querySelector(".content box");

    title.addEventListener('click',()=>{
        item.classlist.toggle('active');
    });
});