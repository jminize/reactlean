import React,{Component} from "react";
import ProductItem from "./productitem";


class ProductList extends Component{

    showproduct(){
            return (this.props.product && this.props.product.map(product=>(
                <ProductItem key={product.productId} product={product} onaddOrder={this.props.onaddOrder}/>
            ))
            );
    }
    render(){
        return(
            <div className="row">
                {this.showproduct()}
            </div>
        );
    }
}

export default ProductList;