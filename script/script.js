window.onload = () => {
    const links = document.querySelectorAll('.link-numero');
    links.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.2}s`;
    });
    const icons = document.querySelectorAll('.icons-container a')
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    })

};
