function carrousel() {
    
	var images15 = document.querySelectorAll('.image15');
    let d = 2000;
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
                         if (ind == 0) return (7*delta)+(6*d);
                         if (ind == 1) return (6*delta)+(5*d);
                         if (ind == 2) return (5*delta)+(4*d);
                         if (ind == 3) return (4*delta)+(3*d);
                         if (ind == 4) return (3*delta)+(2*d);
                         if (ind == 5) return (2*delta)+(d);
                         if (ind == 6) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 7) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            return (8*delta)+(7*d);
        }
    });
}