import React,{Component} from "react";
import Calculator from "./calculater";
import ProductList from "../product/productlist";
import Axios from "axios";

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state={totalPrice:0,order:[],confirm:false,msg:''};
        this.addOrder=this.addOrder.bind(this);
        this.delOrder=this.delOrder.bind(this);
        this.cancelOrder=this.cancelOrder.bind(this);
        this.confirmOrder=this.confirmOrder.bind(this);
    }

    addOrder(product){
        let findorder=this.state.order.find(order=>order.product.id==product.id);
        
        if(findorder){
            findorder.quantity++;
            console.log("sss");
        }else{
            this.state.order.push({product: product,quantity:1});
        }
        const totalPrice=this.state.totalPrice+ parseInt(product.unitPrice);
        this.setState({totalPrice : totalPrice,order : this.state.order,confirm:false})
    }

    delOrder(product){
        let findorder=this.state.order.find(order=>order.product.id==product.id);
        let resultOrder = this.state.order.filter(order=>order.product.id != product.id);
        const totalPrice=this.state.totalPrice-(findorder.quantity * parseInt(findorder.product.unitPrice));
        this.setState({totalPrice : totalPrice,order:resultOrder,confirm:false});
    }

    cancelOrder(){
        this.setState({totalPrice:0,order:[],confirm:false});
    }
    
    confirmOrder(){
        const {totalPrice,order}=this.state;
        this.setState({totalPrice : totalPrice,order:[],confirm:true,msg:"ssss"});
    }
    render(){
        return(
            <div className="container-fluid">
                {this.state.confirm &&
                    <div className="alert alert-secondary title text-right">
                        {this.state.msg}
                    </div>
                }
                
                <div className="row">
                    <div className="col-9">
                        <ProductList product={this.props.product} onaddOrder={this.addOrder}/>
                    </div>
                    <div className="col-3">
                        {this.state.order}
                        <Calculator totalPrice={this.state.totalPrice} order={this.state.order} onDelOrder={this.delOrder} oncancelOrder={this.cancelOrder} onconfirmOrder={this.confirmOrder}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Monitor;