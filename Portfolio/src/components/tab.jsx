import ExpIcon from '../assets/experience.png'

export default function Tab(props) {
  return (
    <div className="about-containers">
                    <div className="details-container">
                        <img 
                        src={props.ExpIcon} 
                        alt="Experience icon"
                        className="icon"
                        />
                        <h3>{props.details}</h3>
                        <ul>
                        <li>{props.info}</li>
                        <li>{props.info2}</li>
                        </ul>
                    </div>
            </div>
  )
}
