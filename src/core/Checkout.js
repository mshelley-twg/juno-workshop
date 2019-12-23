import React from 'react'
import { Formik, Field } from 'formik'
import Button from 'react-bootstrap/button'
import Card from 'react-bootstrap/card'
import Container from 'react-bootstrap/container'

const ShippingAddressForm = () => {
  return (
    <div>
      <Field type='text' name='streetNumber' />
    </div>
  )
}

const DeliveryTimeForm = () => {
  return (
    <div>delivery time</div>
  )
}

const PaymentForm = () => {
  return (
    <div>
      payment
    </div>
  )
}

export const Checkout = () => {
  const totalCost = 64.99

  const initialValues = {
    streetNumber: '65'
  }

  const handleSubmit = (values) => {
    console.log('submit checkout form', values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Container>
            <Card>
              <Card.Title>Shipping</Card.Title>
              <ShippingAddressForm />
            </Card>
            <Card>
              <Card.Title>Delivery</Card.Title>
              <DeliveryTimeForm />
            </Card>
            <Card>
              <Card.Title>Payment</Card.Title>
              <PaymentForm />
            </Card>
            <div>
              {totalCost}
            </div>
            <Button type='submit'>
                Submit
            </Button>
          </Container>
        </form>
      )}
    </Formik>
  )
}
