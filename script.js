let comida;

function selecionarcomida(botao){

    const botaoselect = document.querySelector('.selecionado');
    

    if ( botaoselect !== null) {
        botaoselect.classList.remove('selecionado');
    }
    botao.classList.add('selecionado');
    

    comida = botao.querySelector('.sub2').innerHTML;
    

    
    habilitabotao()
    
}

let price1;
function getprice1(bottao){
    price1 = (bottao.querySelector('.custa').innerHTML);
}

let bebida;

function selecionarbebida(botao1){

    const botao1select = document.querySelector('.selecionado1');

    if ( botao1select !== null) {
        botao1select.classList.remove('selecionado1');
    }

    botao1.classList.add('selecionado1');
    //price2 = number(botao1.querySelector('.price.custa').innerHTML);

    bebida = botao1.querySelector('.sub2').innerHTML;
    


    habilitabotao()

}

let price2;
function getprice2(bottao1){
    price2 = (bottao1.querySelector('.custa').innerHTML);
}

let sobremesa;

function selecionarsobremesa(botao2){

    const botao2select = document.querySelector('.selecionado2');

    if ( botao2select !== null) {
        botao2select.classList.remove('selecionado2');
    }

    botao2.classList.add('selecionado2');
    //price2 = number(botao2.querySelector('.price.custa').innerHTML);

    sobremesa = botao2.querySelector('.sub2').innerHTML;


    habilitabotao()

}
let price3;
function getprice3(bottao2){
    price3 = (bottao2.querySelector('.custa').innerHTML);
}

function habilitabotao(){
    const pedido = document.querySelector('.selecione');
    const fpedido = document.querySelector('.fechar');
    if(comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        pedido.classList.add('esconder');
        fpedido.classList.remove('esconder');
    }
}

let msg;
let total;
function zap(){
    val1 = parseFloat(price1.replace(',','.'));
    val2 = parseFloat(price2.replace(',','.'));
    val3 = parseFloat(price3.replace(',','.'));
    total = val1 + val2 + val3;
    msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n - Prato: ${comida}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesa}\n Total: ${total.toFixed(2)}`)
    window.open(`https://wa.me/5521984055359?text=${msg}`)
}