var stopper = 100;
var x = 0;

setInterval(()=>{
	if(x<=stopper){
		document.getElementById('whatsappBackground').style.filter = `invert(${x}%)`;
		x+=1;
	}

	else {
		document.getElementById('whatsappBackground').style.filter = 'invert(0%)';
		x=0;
	};


}, 20);

document.getElementById('chat').disabled = 'true';

document.getElementById('generate').addEventListener('click',()=>{
	var operableNumber = document.getElementById('numberEntry').value;

	var removeables = ['(',')','-','+']

	for (var i = 0; i < removeables.length; i++){
		operableNumber = operableNumber.replace(removeables[i],'');
	}

	document.getElementById('chat').setAttribute('href',`https://wa.me/+${operableNumber}`);

	document.getElementById('generate').innerText='G E N E R A T E D'
	document.getElementById('generate').disabled='true'

	setTimeout(()=>{
		window.reload();
	}, 1500);

});
