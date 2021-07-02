import React from 'react'
// import PropTypes from 'prop-types'
import Table from "react-bootstrap/Table"


const ProductListComp = ({ orders }) => {
  let formatter = new Intl.DateTimeFormat('pl',{day:'numeric',month:'numeric',year:'numeric',hour:'numeric',minute:'numeric',second:'numeric'});
  console.log(orders.map(x=>{
    return x
  }))

  return orders == [] ? null : orders.map(order => (
    <div key = {order.id}>
      <h6>Order Number : {order.id}  </h6>
      <h6>Order Date : {formatter.format(Date.parse(order.orderDate))}  </h6>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>OrderId</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map(product =>
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.orderId}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
  )
  //  <div>
  // <ul>
  //   {products.map(product =>
  //     <Product
  //       key={product.productId}
  //       {...product}
  //     />
  //   )}
  // </ul>
  //   </div>

          }

// ProductListComp.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     productId: PropTypes.number.isRequired,
//     productName: PropTypes.string.isRequired,
//     productPrice: PropTypes.number.isRequired
//   }).isRequired).isRequired
// }

export default ProductListComp