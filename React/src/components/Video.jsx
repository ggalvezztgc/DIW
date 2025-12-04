import "../assets/CSS/Video.css";

export default function Video()
{
    return(
        <div className="video-container">
            <div className="video-imagen">
                <img src="https://i.ytimg.com/vi/7gC6irzx0nk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAaRzbFHLWUUuRdoLs5jY2AShcqQQ" alt="" />
                <span>2:49:51</span>
            </div>
            <div className="video-titulo">
                <h3>¿Es Campus una estafa? El lado oscuro de AulaCampus</h3>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" 
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                </button>
            </div>
            <small className="video-info">11 visualizaciones · hace 3 meses</small>
        </div>
    );
}
 