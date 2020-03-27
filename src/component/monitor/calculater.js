import React,{Component} from "react";


class Calculator extends Component{
    showOrder(order){
        if(!order || order==0){
            return <li className="text-right text-muted title"> ไม่มีสินค้า</li>
        }else{
            return order.map(order=>{
                return(
                <li className="text-right text-success title">
                    {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                    <button className="btn btn-light btn-sm" onClick={()=>this.props.onDelOrder(order.product)}>X</button>
                </li>
                );
            })
        }

    }
    render(){
        const {totalPrice,order}=this.props;

        return(
            <div>
                <h1 className="text-right">
                    {totalPrice}
                </h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrder(order)}
                </ul>
                <hr/>
                <button className="btn btn-danger title" onClick={()=>this.props.onconfirmOrder()}>
                    ยืนยัน
                </button>
                <button className="btn btn-secondary title" onClick={()=>this.props.oncancelOrder()}>
                    ยกเลิก
                </button>
            </div>
        );
    }
}

export default Calculator;