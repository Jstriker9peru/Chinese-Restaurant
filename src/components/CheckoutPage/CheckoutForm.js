import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.scss';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      complete: false,
      paymentType: null
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('target name ', name);
    console.log('target value ', value);
    this.setState({ [name]: value });
  }

  async submit(ev) {
    // User clicked submit
    ev.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const name = `${firstName} ${lastName}`
    const userEmail = document.getElementById('userEmail').value;
    const cardName = document.getElementById('cardName').value;
    const billingAddress = document.getElementById('billingAddress').value;
    
    console.log('event target 1 ', firstName);
    console.log('event target 2 ', lastName);
    console.log('event target 3 ', userEmail);
    console.log('button was clicked for submission');
    let { token } = await this.props.stripe.createToken({ 
      cardName,
      billingAddress
    });
    // token = token.id
    console.log('the mofo token', token);
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body:  JSON.stringify({ "token": token })
    // });

    // console.log('rose', response);

    // if (response.status === 200) { 
    //   console.log("Purchase Complete!");
    //   this.setState({complete: true})
    // };
  }

  render() {
    const { complete, paymentType } = this.state;
    if (complete) {
      return <h1>Purchase Complete</h1>;
    } 

    return (
      <div className="checkout">
        <form onSubmit={this.submit} id="checkout-form" name="checkout-form" >
          <p>Would you like to complete the purchase?</p>
          <fieldset>
            <h3>User Info</h3>
            <label>First Name: </label><input id="firstName" type="text" name="firstName" /><br />
            <label>Last Name: </label><input id="lastName" type="text" name="lastName" /><br />
            <label>Email: </label><input id="userEmail" type="text" name="email" /><br />
          </fieldset>

          <label>Payment Type: </label><br />
          <div>
            <label>
              <input
                type="radio"
                name="paymentType"
                value="Pay Online"
                checked={this.state.paymentType === "Pay Online"}
                onChange={this.handleChange}
              />
              Pay Online
            </label>
      
            <label>
              <input
                type="radio"
                name="paymentType"
                value="Pay in Store"
                checked={this.state.paymentType === "Pay in Store"}
                onChange={this.handleChange}
            />
              Pay in Store 
            </label>
          </div>
          {paymentType === "Pay Online" ? (
            <fieldset>
              <h3>Billing Info</h3>
              <label>Name on Card: </label><input id="cardName" type="text" name="cardName" /><br />
              <label>Street Address: </label><input id="streetAddress" type="text" name="streetAddress" /><br />
              <label>City: </label><input id="city" type="text" name="city" /><br />
              <label>State: </label><input id="state" type="text" name="state" /><br />
              <label>Zip: </label><input id="zip" type="text" name="zip" /><br />
              <CardElement />
            </fieldset>
          ) : null}
          <button type="submit">Purchase</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);