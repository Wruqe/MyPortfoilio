import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
  return (
    <div>
      <Button component={Link} to={props.link} color="neutral" variant="outlined">
        {props.text}
      </Button>
    </div>
  )
}
