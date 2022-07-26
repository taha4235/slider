//get slider items || array.from[es6 feautrues]
var slideritems = Array.from(document.querySelectorAll('.slider-container img'))
var slidescount = slideritems.length;
//set current slides
var currentslide = 1;
//slide number string element
var slidenumberelement = document.getElementById('slide-number')
var nextbutton = document.getElementById('next')
var prevbutton = document.getElementById('prev')
nextbutton.onclick = nextslide;
nextbutton.onclick = prevslide;
//create the main ul element
var pagination = document.createElement('ul');
pagination.setAttribute('id', 'pagination-ul')
    //create lis-items based on array
for (var i = 1; i <= slidescount; i++) {
    var paginationitems = document.createElement('li');
    paginationitems.setAttribute('data-index', i);
    paginationitems.appendChild(document.createTextNode(i));
    pagination.appendChild(paginationitems);

}
//get the new created ul
var paginationnewcreatedul = document.getElementById('pagination-ul')
var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'))
for (var i = 0; i < paginationbullets.length; i++) {
    paginationbullets[i].onclick = function() {
        currentslide = parseInt(this.getAttribute('data-index'));
        thecheker
    }
}

//add the creth;ite ul element to the page
document.getElementById("indicators").appendChild(pagination)

//function nextslide
function nextslide() {
    if (nextbutton.classList.contains('disabled')) {
        return false
    } else {
        currentslide++;
        thecheker()
    }
}
nextslide();
thecheker();
prevslide();
removeallactive();

function prevslide() {
    if (prevbutton.classList.contains('disabled')) {
        return false
    } else {
        currentslide;
        thecheker()
    }
}

function thecheker() {
    slidenumberelement.textContent = 'slide #' + (currentslide) + 'of' + (slidescount)
    slideritems[currentslide - 1].classList.add('active')
    paginationnewcreatedul.children[currentslide - 1].classList.add('active');
    //check if currents lide is the first
    if (currentslide == 1) {
        prevbutton.classList.add('disabled')
    } else {
        prevbutton.classList.remove('disabled')
    }
    if (currentslide == slidescount) {
        nextbutton.classList.add('disabled')
    } else {
        next.classList.remove('disabled')
    }

    function removeallactive() {
        slideritems.forEach(function(img) {
            img.classList.remove('active')
        })
        paginationbullets.forEach(function(bullet) {
            bullet.classList.remove('active')
        })
    }
}