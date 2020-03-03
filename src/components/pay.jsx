import React, { Component } from 'react';
import './satr.css';
class Payupay extends Component {
    constructor(props) {
        super(props);
       this.state = {
            merchantId: 508029,
            ApiKey: "4Vj8eK4rloUd272L48hsrarnUA",
            referenceCode:"butiqueOros"+" "+this.props.dataprops.id,
            accountId: 512321,
            description: this.props.dataprops.descripcion + " " + "talla:" + " " + this.props.talla,
            amount: this.props.dataprops.precio,
            tax: 0,
            signature:null,
            taxReturnBase: 0,
            currency: "COP",
            test: 1,
            buyerFullName:this.props.name,
            buyerEmail:this.props.emails,
            info:
            "al generar la compra la informacion se enviara al señor/sra:"  
            + " " + this.props.name + " " + "al siguiente correo eletronico"  +" " + this.props.emails 
           };

           console.log(this.state)
       }

       componentWillMount (){
          var md5 = require('md5');
          const MD5 = md5(
             this.state.ApiKey + "~" + 
             this.state.merchantId  + "~"+ 
             this.state.referenceCode +  "~" + this.state.amount +"~" + "COP")
             this.setState({
              signature:MD5
             })
       }

   render() {
        return (
            <div>
             <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu">
            <div>
               <img className="image-pay" width="300px" height="300px" src={this.props.dataprops.image}/>
            </div>
            <input name="merchantId"    type="hidden"  value={this.state.merchantId}  />
            <input name="ApiKey"        type="hidden"  value={this.state.ApiKey}  />
            <input name="accountId"     type="hidden"  value={this.state.accountId} />
            <input name="description"   type="hidden"  value={this.state.description} />
            <input name="referenceCode" type="hidden"  value={this.state.referenceCode} />
            <input name="amount"        type="hidden"  value={this.state.amount}  />
            <input name="tax"           type="hidden"  value={this.state.tax} />
            <input name="taxReturnBase" type="hidden"  value={this.state.taxReturnBase} />
            <input name="currency"      type="hidden"  value={this.state.currency} />
            <input name="signature"     type="hidden"  value={this.state.signature} />
            <input name="test"          type="hidden"  value={this.state.test} />
            <input name="buyerFullName" type="hidden"  value={this.state.buyerFullName}/> 
            <input name="buyerEmail"    type="hidden"  value={this.state.buyerEmail}/> 
            <input name="Submit" className="sutmit"    type="submit"  value="generar la Compra"/>
              </form>
             <div className="content-info-pay">
                <h6 className="info-pay">{this.state.info}</h6>
              </div>
            </div>
         )
    } 
}

export default Payupay





















