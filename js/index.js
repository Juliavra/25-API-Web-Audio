var contexto;
function iniciar() {
var mibuffer;
var boton = document.getElementById("boton");
boton.addEventListener("click", function() {
reproducir(mibuffer);
});
contexto = new AudioContext();
var url = "audio/20 Dubby Augustus Pablo NR Song.mp3";
var solicitud = new XMLHttpRequest(); alert("solicitud: "+`${solicitud}`)
solicitud.responseType = "arraybuffer";
solicitud.addEventListener("load", function() {
alert("solicitud.status: "+`${solicitud.status}`)
    if (solicitud.status == 200) {
contexto.decodeAudioData(solicitud.response, function(buffer) {
mibuffer = buffer;
boton.disabled = false;
});
}
});
solicitud.open("GET", url, true);
solicitud.send();
}
function reproducir(mibuffer) {
var nodofuente = contexto.createBufferSource();
nodofuente.buffer = mibuffer;
nodofuente.connect(contexto.destination);
nodofuente.start(0);
}
window.addEventListener("load", iniciar);