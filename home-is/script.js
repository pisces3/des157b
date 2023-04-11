(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const buttonIcon = document.querySelector('button img');
    const bannerTitle = document.querySelector('#banner h3');
    const bannerSubtitle = document.querySelector('#banner p');
    const fallBanner = document.querySelector('#leaf-animation');
    const springBanner = document.querySelector('#flower-animation');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            buttonIcon.src = 'images/flower.png';
            bannerTitle.innerHTML = `"Until the spring day comes again"`;
            bannerSubtitle.innerHTML = '-Spring Day by BTS';
            fallBanner.className = 'hidden';
            springBanner.className = 'showing'
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            buttonIcon.src = 'images/fall-switch.png';
            bannerTitle.innerHTML = `"Autumn leaves falling down like pieces into place"`;
            bannerSubtitle.innerHTML = "-All Too Well(10 Minute Version)(Taylor's Version)";
            fallBanner.className = 'showing';
            springBanner.className = 'hidden'
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()