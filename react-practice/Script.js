const target = document.getElementById('target');
const yes = document.getElementById('yes'); 

yes.addEventListener('click', () => {
    alert("You are a developer...!👩‍🔬💻✅");
   
});

function moveTarget() {
    const maxWidth = 400;
    const maxHeight = 400;
    const randomX = Math.floor(Math.random() * maxWidth); 
    const randomY = Math.floor(Math.random() * maxHeight); 
    target.style.left = randomX + 'px'; 
    target.style.top = randomY + 'px'; 
}

target.addEventListener('mouseenter', function() {
    moveTarget();
});


