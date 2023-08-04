document.addEventListener("click" , trocaCor);

document.getElementById( "Btn" ).addEventListener( "click");

function mudar( e )
{
    let nome = document.getElementById( "mudar" ).value;
    e.preventDefault();
}
function trocaCor( e ){
    document.body.style.backgroundColor = 'pink';
}