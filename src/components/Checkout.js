import StripeCheckout from "react-stripe-checkout"


// eslint-disable-next-line react/prop-types
const Checkout = ({price}) => {
  return (
    <StripeCheckout price={price}
     token={token=> console.log(token)}
      name="AB_MART" // the pop-in header title
  description="Big Data Stuff" // the pop-in header subtitle
  image="https://i.ytimg.com/vi/w6AVzvGGHr8/maxresdefault.jpg" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Give Money" // prepended to the amount in the bottom pay button
  amount={price*110} // cents
  currency="pkr"
  stripeKey="pk_test_51OtNm7DTO3Xe2DsIu0S5vrvNtWSwFmG34TEWHLoJhDaaQm3BOfHvKxXbEhUrGugLOpGM3uEWa04l9NygOon2RfLR0097tMq6tr"
  >
  Pay Now
    </StripeCheckout>
  )
}

export default Checkout
