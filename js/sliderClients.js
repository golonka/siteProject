const mySiema = new Siema({
    perPage: 3,
    loop: true
});

setInterval(function () {return mySiema.next();}, 5000);

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
