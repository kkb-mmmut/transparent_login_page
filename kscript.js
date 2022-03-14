function captcha()
{
//alert("This is captcha!!");
document.getElementById("this").reset(); 
var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','@'];
var a=alpha[Math.floor(Math.random()*63)];
var b=alpha[Math.floor(Math.random()*63)];
var c=alpha[Math.floor(Math.random()*63)];
var d=alpha[Math.floor(Math.random()*63)];
var e=alpha[Math.floor(Math.random()*63)];
var f=alpha[Math.floor(Math.random()*63)];
var g=alpha[Math.floor(Math.random()*63)];

sam=a+b+c+d+e+f+g;
document.getElementById("capt").value=sam;
}
function match()
{
var mat=document.getElementById("catch").value;
if(mat!==sam)
{
alert("Invalid Captcha!");
document.getElementById("catch").value="";
captcha();
}
else
{
alert("Hello KAMLESH!");
//window.location.href="index.html";
}

}
