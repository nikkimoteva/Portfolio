//Author: Nikki Moteva
//Date Published: April 27, 2020

function hiddenDiv(val) {
    document.getElementById('to-hide').style.display = 'none';
    if (val === "programming language") {
        document.getElementById('hidden_div1').style.display = 'block';
        document.getElementById('hidden_div2').style.display = 'none';
        document.getElementById('hidden_div3').style.display = 'none';
        document.getElementById('hidden_div4').style.display = 'none';
    }
    else if (val === "development methodology") {
        document.getElementById('hidden_div1').style.display = 'none';
        document.getElementById('hidden_div2').style.display = 'block';
        document.getElementById('hidden_div3').style.display = 'none';
        document.getElementById('hidden_div4').style.display = 'none';
    }
    else if (val === "ide") {
        document.getElementById('hidden_div1').style.display = 'none';
        document.getElementById('hidden_div2').style.display = 'none';
        document.getElementById('hidden_div3').style.display = 'block';
        document.getElementById('hidden_div4').style.display = 'none';
    }
    else {
        document.getElementById('hidden_div1').style.display = 'none';
        document.getElementById('hidden_div2').style.display = 'none';
        document.getElementById('hidden_div3').style.display = 'none';
        document.getElementById('hidden_div4').style.display = 'block';
    }
}

// once the document is loaded
document.addEventListener("DOMContentLoaded", function() { 
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.animate_name');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter_n'>$&</span>");

    var textWrapper0 = document.querySelector('.animate_s');
    textWrapper0.innerHTML = textWrapper0.textContent.replace(/\S/g, "<span class='letter_s'>$&</span>");

    var textWrapper2 = document.querySelector('.animate_welcome');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter_w'>$&</span>");

    var textWrapper3 = document.querySelector('.animate_website');
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter_pw'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.animate_welcome, .letter_w',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuart",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.animate_name, .letter_n',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuart",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.animate_s, .letter_s',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuart",
        duration: 10,
        delay: (el, i) => 100 + 10 * i
    }).add({
        targets: '.animate_website, .letter_pw',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutQuart",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add ({
        targets: '.animate_website',
        opacity: 0,
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 100 + 20 * i
    }).add ({
        targets: '.animate_welcome',
        opacity: 0,
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 100 + 20 * i
    }).add ({
        targets: '.animate_s',
        opacity: 0,
        easing: "easeInOutQuad",
        duration: 1000,
        delay: (el, i) => 100 + 10 * i
    })
    setTimeout(display_intro, 10500)
});


var descriptions = ['Software Engineer', 'Critical Thinker', 'Problem Solver', 'BiLingual', 'Designer', 'Leader',
                    'Developer', 'Team Worker', 'Yogi', 'Hiker', 'Swimmer', 'Customer Oriented', 'Fast Learner',
                    'Teacher', 'Detail Oriented', 'Runner']

function display_intro(){
    document.getElementById('hidden_intro').style.display = 'block';
    var typed5 = new Typed('#typed', {
        strings: descriptions,
        startDelay: 500,
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        shuffle: true,
        smartBackspace: false,
        loop: true
      });
}
