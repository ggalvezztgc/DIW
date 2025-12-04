import { createRoot } from 'react-dom/client'
import Video from './components/Video';

const videos = [
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  {
    img: "https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ",
    titulo: "HOLLOW KNIGHT!",
    visualizaciones: "1.1k",
    duracion: "2:34:50",
    tiempo: "3 meses"
  },
  
]


createRoot(document.getElementById('root')).render(
  <>
    <Video 
      img="https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ"
      titulo="HOLLOW KNIGHT!"
      visualizaciones="1.1k"
      duracion="2:34:50"
      tiempo="3 meses"
    />
  </>,
)
 