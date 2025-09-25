function countLinks(){
    const linksEL = document.querySelectorAll("a")
    const numLinks = linksEL.length;
    const firstLink = linksEL[0];
    const lastLink = linksEL[numLinks - 1];

    alert(`La cantidad de links es: ${numLinks}. El primer link es: ${firstLink} y el último link es ${lastLink}`)

}