function operacion(){
    var n1=parseFloat(document.MyForm.numero1.value);
    var n2=parseFloat(document.MyForm.numero2.value);
    var n3=parseFloat(document.MyForm.numero3.value);
    var kv=(n1/1000)
    var kvh=(kv*n2)
    var kvm=(kvh*30)
    var pago=(kvm*n3)
    resul1=document.getElementById("resultado1");
    resul1.innerHTML=kv;
    resul2=document.getElementById("resultado2");
    resul2.innerHTML=kvm;
    resul3=document.getElementById("resultado3");
    resul3.innerHTML=pago;   
}