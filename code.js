function PustoTu(zmienna)
{
    dlugosc= zmienna.length;
    if (dlugosc==0)
        {return true;}
    else
    {return false;}
}

function weryfikacja()
{
    var form=document.forms["user_data"];
    var pole_imie = document.forms["user_data"]["imie"].value
    var pole_email = form["email"].value;
    var pole_kod=form["kod"].value;
    var pole_wiadomosc=form["wiadomosc"].value;
    if(!walidujNapis(pole_imie, "podaj imie!")) return false;
    if(!walidujNapis(pole_email, "podaj email!")) return false;
    if (!poprawnyAdres(pole_email))
        {
            return false;
        }
    if (!walidujNapis(pole_kod, "Podaj kod pocztowy!")) return false;
    if (!walidujNapis(pole_wiadomosc, "Wpisz wiadomość!")) return false;
    
    return true;  
}
/*
var formularz =document forms["user_data"]

for (var i=0; i<formularz.length; i++)
{
walidujNapis(formularz[i].value, "Uzupełnij pole"+formularz[i].name)}
*/
function bialeZnaki(string)
{
    return string.trim().length===0;
}

function walidujNapis(ciag, komunikat)
{
    if(bialeZnaki(ciag)||PustoTu(ciag))
    {
        alert(komunikat);
        return false;
    }
    return true;
}
/*

function walidujNapis(ciag, komunikat)
{
if (PustoTu(ciag))
{
alert(komunikat)
return false;

}
else
{
if(bialeZnaki(ciag))
alert(komunikat)
return false;}
}
return true;
*/
function poprawnyAdres(adres) {
    let email_form = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (email_form.test(adres))
        return true;
    else {
        alert("Adres e-mail jest niepoprawny");
        return false;
    }
}
