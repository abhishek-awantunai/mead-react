import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    return (
        <div>
            <h1>Product - { productId }</h1>
            Navigate to welcome page <span onClick={() => navigate('/welcome') }>Click Here</span>
        </div>
    );
}

export default Product;