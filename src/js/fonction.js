function carrousel() {  /* Carrousel page Chappie */
    
	var images15 = document.querySelectorAll('.image15');
    let d = 2500;
    let delta = 1000;

    images15.forEach(function(img,indice) {
        img.style.zIndex = images15.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images15,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                        if (ind == 0) return (4*delta)+(2*d);
                        if (ind == 1) return (3*delta)+(2*d);
                        if (ind == 2) return (2*delta)+d;
                        if (ind == 3) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
}

function carrousel2() { /* Carrousel page Blade Runner */
    
	var images15 = document.querySelectorAll('.image15');
    let d = 2500;
    let delta = 1000;

    images15.forEach(function(img,indice) {
        img.style.zIndex = images15.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images15,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                        if (ind == 0) return (4*delta)+(2*d);
                        if (ind == 1) return (3*delta)+(2*d);
                        if (ind == 2) return (2*delta)+d;
                        if (ind == 3) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
}
 /* afficher la légende */
function monterLegende() { 
    document.querySelector('.texte13').style.display = 'block';
    return anime({
        targets: '.texte13',
        translateY: '-2em',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
    
}
/* cacher la légende */
function descendreLegende() {
    return anime({
        targets: '.texte13',
        translateY: '2em',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}