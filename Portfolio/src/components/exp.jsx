import checkmark from '../assets/checkmark.png'

export default function exp(props) {
  return (
   <div className="article-container">
                        <article>
                            <img 
                            src={checkmark} 
                            alt="experience icon"
                            className="icon"
                            />
                            <div>
                                <h3>{props.skill}</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
    </div>
  )
}
