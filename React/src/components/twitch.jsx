import React from "react";

function Twitch() {
  // Lista simple con los streamers
  const streamers = [
    { nombre: "IlloJuan", categoria: "Charlando", viewers: 1293 },
    { nombre: "Auronplay", categoria: "Just Chatting", viewers: 8421 },
    { nombre: "Sr.Neutro", categoria: "Charlando", viewers: 612 },
    { nombre: "MarcosCantoos", categoria: "Fortnite", viewers: 1226 },
    { nombre: "Ibai", categoria: "Eventos", viewers: 37771 }, // extra
  ];

  return (
    <div className="panel">
      {/* Parte de arriba */}
      <div className="top">
        <span className="logo">T</span>
        <h1 className="titulo">Explorar</h1>
        <button className="boton">⋮</button>
      </div>

      {/* Título de la lista */}
      <div className="subtop">
        <h2 className="subtitulo">Canales en directo</h2>
        <button className="botonPeq">⟵</button>
      </div>

      {/* Lista */}
      <div className="lista">
        {streamers.map((s) => (
          <div className="item" key={s.nombre}>
            {/* Avatar falso (círculo) */}
            <div className="avatar">{s.nombre[0]}</div>

            {/* Nombre + categoría */}
            <div className="info">
              <div className="nombre">{s.nombre}</div>
              <div className="categoria">{s.categoria}</div>
            </div>

            {/* Puntito rojo + viewers */}
            <div className="directo">
              <span className="punto"></span>
              <span className="viewers">{s.viewers}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Abajo */}
      <div className="footer">Tren del Hype • Nivel 9</div>
    </div>
  );
}

export default Twitch;
