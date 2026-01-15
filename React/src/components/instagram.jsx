import { useState } from "react";
import "../assets/CSS/instagram.css";
 
export default function Instagram() {
const [liked, setLiked] = useState(false);
const [likes, setLikes] = useState(362);
 
 
const toggleLike = () => {
setLiked(!liked);
setLikes(liked ? likes - 1 : likes + 1);
};
 
return (
<div className="post">
<div className="header">
<div className="user-info">
<img
className="avatar"
src="https://randomuser.me/api/portraits/women/44.jpg"
alt="avatar"
/>
<strong>M.Cantos</strong>
</div>
<div className="menu">
<span className="follow">Follow</span>
<span className="dots">⋯</span>
</div>
</div>
 
<div className="image">
<img
src="https://scontent-ams2-1.xx.fbcdn.net/v/t51.75761-15/464067531_18460853872058759_2009152006934863116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Hc0OAiFlcMsQ7kNvwHbGO5j&_nc_oc=AdnytFBxYcaLpBh_lUBpJc19WLVkdXPBHnnYZeDfCITNxDbff2tHh9Sw7PGDBqryc2c&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=fAQkbmdmaAVAXw0dR06rNQ&oh=00_Afr_x9tt1XYI9BZDPd9cMNovMSB3Rjo43ZdBC_Cx4CRiGA&oe=696E90B8%22"
/>
</div>
 
<div className="actions">
<span
className={`heart ${liked ? "liked" : ""}`}
onClick={toggleLike}
>
❤
</span>
<span>💬</span>
<span>📤</span>
<span className="icon">🔖</span>
</div>
 
 
<div className="likes">{likes} likes</div>
<div className="caption">
<strong>M.Cantos</strong> Dia chill con gente chill.
</div>
</div>
);
}