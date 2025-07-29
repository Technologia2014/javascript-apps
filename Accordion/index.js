const accordion = document.getElementById('contentBox');

accordion.addEventListener('click', function(){
    this.classList.toggle('active');
})