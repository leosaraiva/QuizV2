import React, { useState } from "react";
import "./App.css";

function App() {
  const [exibirResultado, setExibirResultado] = useState(false);
  const [perguntAtual, setPerguntAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);

  const perguntas = [
    {
      texto: "O que é Front-end?",
      alternativas: [
        { id: 0, texto: "Parte de um sistema que é oculta para o usuário", isCorreta: false },
        { id: 1, texto: "Parte de um sistema é visível e interativa ao usuário", isCorreta: true },
        { id: 2, texto: "Parte Lógiva que recebe as regras de negócio", isCorreta: false },
        { id: 3, texto: "Nenhuma das alternativas anteriores", isCorreta: false },
      ],
    },
    {
      texto: "O que é React?",
      alternativas: [
        { id: 0, texto: "Uma poderosa biblioteca JavaScript", isCorreta: true },
        { id: 1, texto: "Uma linguagem de programação", isCorreta: false },
        { id: 2, texto: "Um servidor de Cloud", isCorreta: false },
        { id: 3, texto: "Todas as respostas anteriores", isCorreta: false },
      ],
    },
    {
      texto: "Quais são as principais tecnologias do mundo Front-End?",
      alternativas: [
        { id: 0, texto: "Java, golang e python", isCorreta: false },
        { id: 1, texto: "AWS, Google Cloud e Azure", isCorreta: false },
        { id: 2, texto: "Kotlin, HTML, CSS", isCorreta: false },
        { id: 3, texto: "HTML, CSS e JavaScript", isCorreta: true },
      ],
    }
  ];

  
  const optionClicked = (isCorreta) => {
    if (isCorreta) {
      setPontuacao(pontuacao + 1);
    }

    if (perguntAtual + 1 < perguntas.length) {
      setPerguntAtual(perguntAtual + 1);
    } else {
      setExibirResultado(true);
    }
  };

  const reiniciarJogo = () => {
    setPontuacao(0);
    setPerguntAtual(0);
    setExibirResultado(false);
  };

  return (
    <div className="App">
      <h1>Quiz Front End</h1>
      <h2>Placar: {pontuacao}</h2>
      {exibirResultado ? (
        <div className="resultado">
          <h1>Resultados</h1>
          <h2>
            {pontuacao} de {perguntas.length} corretas - (
            {(pontuacao / perguntas.length) * 100}%)
          </h2>
          <button onClick={() => reiniciarJogo()}>Reiniciar</button>
        </div>
      ) : (
        <div className="blocoPergunta">
          <h2>
            Pergunta: {perguntAtual + 1} de {perguntas.length}
          </h2>
          <h3 className="textoPergunta">{perguntas[perguntAtual].texto}</h3>
          <ul>
            {perguntas[perguntAtual].alternativas.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorreta)}
                >
                  {option.texto}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
