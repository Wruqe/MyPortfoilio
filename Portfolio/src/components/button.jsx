import Button from '@mui/joy/Button';


export default function Buttons(props) {
  return (
    <div>
            <Button color="neutral" variant="outlined">{props.text}</Button>
    </div>
  )
}
