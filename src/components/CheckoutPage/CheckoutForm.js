import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.scss';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      complete: false,
      paymentType: 'Pay Online'
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async submit(ev) {
    // User clicked submit
    ev.preventDefault();
    // const firstName = document.getElementById('firstName').value;
    // const lastName = document.getElementById('lastName').value;
    // const name = `${firstName} ${lastName}`;
    // const userEmail = document.getElementById('userEmail').value;

    const name = document.getElementById('cardName').value;
    const address_line1 = document.getElementById('streetAddress').value;
    const address_city = document.getElementById('city').value;
    const address_state = document.getElementById('state').value;
    const address_zip = document.getElementById('zip').value;

    console.log('button was clicked for submission');
    let { token } = await this.props.stripe.createToken({ 
      name,
      address_line1,
      address_city,
      address_state,
      address_zip,
      address_country: 'US'
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
          <fieldset className="user-info">
            <h3>User Info</h3>
            <div className="input-group">
              <div className="input-container name-input">
                <label>Name*</label>
                <div className="names side-by-side">
                  <input id="firstName" type="text" name="firstName" placeholder="First" required />
                  <input id="lastName" type="text" name="lastName" placeholder="Last" required />
                </div>
              </div>
              <div className="input-container email-input">
                <label>Email*</label>
                <input id="userEmail" type="email" name="email" required />
              </div>
            </div>
            <div className="input-container payment-type">
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
            </div>
          </fieldset>

          {paymentType === "Pay Online" ? (
            <fieldset className="billing-info">
              <h3>Billing Info</h3>
              <div className="input-group">
                <div className="input-container">
                  <label>Name on Card*</label>
                  <input id="cardName" type="text" name="cardName" required />
                </div>
                <div className="input-container">
                  <label>Street Address*</label>
                  <input id="streetAddress" type="text" name="streetAddress" required />
                </div>
                <div className="input-container">
                  <label>City*</label>
                  <input id="city" type="text" name="city" required />
                </div>
                  <div className="input-container state-input">
                    <div className="side-by-side">
                      <label for="state">State*</label>
                      <label for="zip">Zip*</label>
                    </div>
                    <div className="side-by-side">
                      <input id="state" type="text" name="state" maxLength={2} minLength={2} required />
                      <input id="zip" type="text" name="zip" maxLength={5} minLength={5} required />
                    </div>
                  </div>
                <div className="input-container">
                  <label>Card Info.*</label>
                  <CardElement style={style} hidePostalCode={true} />
                </div>
              </div>
            </fieldset>
          ) : null}
          <button className="purchase-btn" type="submit">Purchase</button>
        </form>
      </div>
    );
  }
}

const style = {
  base: {
    padding: '0.5em 0',
    fontSize: '16px',
    fontFamily: '"Open Sans", sans-serif',
    backgroundColor: 'white',
  },
  invalid: {
    color: '#e5424d',
    ':focus': {
      color: '#303238',
    },
  },
};

export default injectStripe(CheckoutForm);