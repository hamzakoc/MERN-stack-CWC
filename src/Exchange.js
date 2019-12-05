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
    <div className="ap">
        <header className="App-heade">
         
                 
                   <h2 >Currency Convertor</h2>
                   <p>This converter is based on Canadian Dollar. Enter a value to see recent amount</p>
                      <p >CAD <input onChange={this.handleInput} value={this.state.value}></input> </p>
                      
                  
                    <Table dark>
                        <thead >
                            
                            <th>Currency</th>
                            <th>Amount</th>
                            <th>Currency of 1</th>
                            
                        </thead>
                        <tbody>
                            <tr>
                           
                            <td>Turk Lirasi </td>
                            <td>{this.state.value*this.state.currentUSDCurrency.TRY}</td>
                            <td>{ ' TRY ='}{this.state.currentUSDCurrency.TRY}</td>
                            </tr>
                            <tr>
                            
                            <td>USD</td>
                            <td>{this.state.value*this.state.currentUSDCurrency.USD}</td>
                            <td>{ ' USD ='}{this.state.currentUSDCurrency.USD}</td>
                            </tr>
                            <tr>
                           
                            <td>EURO</td>
                            <td>{this.state.value*this.state.currentUSDCurrency.EUR}</td>
                            <td>{ ' EUR ='}{this.state.currentUSDCurrency.EUR}</td>
                            </tr>
                        </tbody>
                    </Table>
              
        
      </header>
    </div>
  );
}}

export default Exchange;
