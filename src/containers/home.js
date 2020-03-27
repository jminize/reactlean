import React, { Component } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Monitor from '../component/monitor/Monitor';
import axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {product :""}
  }
  componentDidMount(){
  // 1 ใส่ข้อมูลปกิ
  //   this.setState({product : [
  //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  // ]})

  //2 fetch
  // fetch("http://localhost:3001/products",{method:"GET"})
  // .then(res => res.json())
  // .then(res=>{this.setState({product:res})})
  //3 axios
  axios.get("http://localhost:3003/products").then(res=>{
    this.setState({product:res.data});
  });

  }
  render(){
    return(
      <div>
        <Header/>
        <Monitor product={this.state.product}/>
        <Footer name="Jakkrit Nuanin" email="nuaninjakkrit@gmail.com"/>
      </div>
    );
  }
}

export default Home;
