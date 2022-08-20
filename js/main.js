const mario = document.querySelector(".its-marioo");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const modalGameOver = document.querySelector("#modalGameOver");
var pontuacao = -1;
var maximapontuacao = 0;

//Fazer o mario pular
const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 600);
};

//Score-game
const score = setInterval(() => {
  pontuacao++;
  if (maximapontuacao < pontuacao) {
    maximapontuacao = pontuacao;
  }
  document.getElementById("pontos").innerHTML = pontuacao;
}, 50);

//Game-over recarregar a pagina ao clicar na tela
const gameOver = () => {
  modalGameOver.style.zIndex = -2;
  modalGameOver.removeEventListener("click", startGame, false);
};

modalGameOver.addEventListener("click", () => {
  location.reload();
});

//Toda a logica do game
const loop = setInterval(() => {
  console.log("loop");
  const positionpipe = pipe.offsetLeft;
  const postitionmario = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (positionpipe <= 108 && positionpipe > 0 && postitionmario < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${positionpipe}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${postitionmario}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "70px";
    mario.style.marginLeft = "38px";

    function gameOver() {
      modalGameOver.style.zIndex = 10;
      modalGameOver.removeEventListener("click", startGame, false);
    }

    clearInterval(loop);
    clearInterval(score);
    return gameOver();
  }
}, 10);

document.addEventListener("keydown", jump);

//features:
//colocar um score
//adicionar uma tela de game-over com um botão de reinicar
