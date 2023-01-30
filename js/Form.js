class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 -20);
    this.greeting.position(width / 2 - 200, height / 2 - 100);
  }
  //funcion para invocar cosas del archivo "style.ccs"
  setElementstyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customImput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }
  //funcion para esconder algunas cosas
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  //
  handleMousePressed(){
    this.playButton.mousePressed(() =>{
      this.input.hide();// el hide es una herramienta no la variable
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;//manera de combinar js y html ``
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    })
  }
  //el nombre display se puede cambiar por el que sea solo es una funcion para ejecutar
  display(){
    this.setElementsPosition();
    this.setElementstyle();
    this.handleMousePressed();
  }

}
 