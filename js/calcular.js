var _ = document.webL10n.get;

$("#Convertir").bind("click", function() {
   var grados=document.getElementById('grados').value,
      lon = document.getElementById('grados').value.length;
  
  grados=parseFloat(grados);
  if(lon > 0) {
    if($("input[value=celsius]:checked").val()) {
      cf = grados + " °C = " + parseFloat((1.8*grados)+32).toFixed(2) + " °F";
      ck = grados + " °C = " + parseFloat(grados + 273).toFixed(2) + " K";
      alert(cf + "\n\n" + ck);
    } else if($("input[value=farenheith]:checked").val()) {
      fc = grados + " °F = " + parseFloat((grados-32)/1.8).toFixed(2) + " °C";
      fk = grados + " °F = " + parseFloat(((grados-32)/1.8)+273).toFixed(2) + " K";
      alert(fc + "\n\n" + fk);
    } else {
      kc = grados + " K = " + parseFloat(grados - 273).toFixed(2) + " °C";
      kf = grados + " K = " + parseFloat(((grados-273)*1.8)+32).toFixed(2) + " °F";
      alert(kc + "\n\n" + kf);
    }
  } else {
    alert(_("no-val"));
  }
});

