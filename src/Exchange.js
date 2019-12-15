import React,{ Component} from 'react';
import './css/exchange.css';
import {Table} from 'reactstrap'

class Exchange extends Component{
  constructor() {
    super()
    this.url = 'https://api.exchangeratesapi.io/latest?base=CAD'
        this.state = {
             value:'',
            currentUSDCurrency:'',
         };
      
  }



  handleInput =(event)=>{
    if(isNaN(event.target.value) === false  || event.target.value==="." ){
      this.setState({
        value: event.target.value
      });
    }else{
      alert('Enter a number')
    }
    
}


loadQuote = () => {
  fetch(this.url)
  .then((response)=>{
      return response.json()
  })
  .then((data)=>{
      this.setState({
           currentUSDCurrency:{...data.rates},
            })

      
  })

} 

componentDidMount(){
  this.loadQuote()
}



  render() {
  return (
    <div className="exc-background">
        <header className="">
         
                 
                   <h2 className="exc-header">Döviz Çevirici</h2>
                   <p>Bu çevirici 1 Kanada Dolarına sabitlenmiştir. Canlı kuru görmek için bir rakam giriniz.</p>
                      <p >CAD <input onChange={this.handleInput} value={this.state.value}></input> </p>
                      
                  
                    <table className="exc-table" dark>
                        <thead >
                            
                            <th>Para Birimi</th>
                            <th>Tutar</th>
                            <th>Recently</th>
                            
                        </thead>
                        <tbody>
                            <tr>
                           
                            <td>Türk Lirası </td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.TRY*100)/100)}</td>
                            <td>{ ' TRY = '}{Number(Math.round(this.state.currentUSDCurrency.TRY*100)/100)}</td>
                            </tr>
                            <tr>
                            
                            <td>ABD Doları</td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.USD*100)/100)}</td>
                            <td>{ ' USD = '}{Number(Math.round(this.state.currentUSDCurrency.USD*100)/100)}</td>
                            </tr>
                            <tr>
                           
                            <td>EURO</td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.EUR*100)/100)}</td>
                            <td>{ ' EUR = '}{Number(Math.round(this.state.currentUSDCurrency.EUR*100)/100)}</td>
                            </tr>
                        </tbody>
                    </table>
              
        
      </header>
    </div>
  );
}}

export default Exchange;
