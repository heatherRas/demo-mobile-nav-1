const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open-nav');
});

// A: The element to attach the event listener to (usually a button). .toggle-btn
// B: The element in html that we will add and remove the class to. .main-menu
// C: The name of the CSS class to toggle. No period (.) already expects a (.) so just open-nav.
