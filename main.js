let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
 cursor: "<span style='color: #ad30de;'>|</span>",
});
 
typewriter
  .pauseFor(2000)
  .typeString('<span style="color: ;">Caminando al éxito</span>')
  .pauseFor(400)
  .deleteChars(20)
  .start();