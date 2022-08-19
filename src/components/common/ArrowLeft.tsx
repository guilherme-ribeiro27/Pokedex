import { ArrowLeftCircle } from "react-feather";
import { Link } from "react-router-dom";

interface props{
    to: string;
}
const ArrowLeft = ({to}:props) => {
    return (
        <Link to={to} style={{
            margin: '35px',
            color: '#bababa',
        }}>
            <ArrowLeftCircle  size={50} />
        </Link>
    )
}
export default ArrowLeft;