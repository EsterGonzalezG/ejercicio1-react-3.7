import React from 'react';

class OnionHater extends React.Component {
  inputtext(event){
    if(event.currentTarget.value.includes('cebolla')){
      alert('odio la cebolla me da gases');
    }
  }
  render(){
    return (
      <textarea className="input_cebolla" onKeyUp={this.inputtext}>

      </textarea>
    );
  }
}

export default OnionHater;
