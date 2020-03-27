import React,{Component} from 'react';

let Footer=(props)=>{
    const {name,email}=props;
    return (
        <div className="container-fluid">
                <hr/>
                <div className="text-center title text-uppercase">
                    <span className="text-danger">powered By : {name}</span>
                    |<span>Email : {email}</span>
                </div>
            </div>
    );
}
export default Footer;