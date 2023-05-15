const link = document.getElementById('link');

link.addEventListener('click', function (e) {
    //frena mandar el link
    e.preventDefault();
    alert('Quisiste ir a: ' + e.currentTarget.href)
})