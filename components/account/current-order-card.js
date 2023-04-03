import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCartItem from "../checkout/review-cart-item";

function CurrentOrderCard({ key,items,total,date,city,region,street,status}) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Order ID: {key}</span>
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-danger">
              Cancel order
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Delivery Address</h6>
            <div className="vstack text-dark small">
              <span>{street}</span>
              <span>{city}</span>
              <span>{region}</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Payment Method</h6>
            <div className="text-success">
              <span className="fw-bold">
                <FontAwesomeIcon icon={["fab", "cc-visa"]} size="lg" />
              </span>
              <span className="ms-2 small">XXXX-XXXX-XXXX-2345</span>
            </div>
            <div>Subtotal: 30,000</div>
            <div>Delivery fee: 3,000</div>
            <div className="fw-semibold">Total: {total}</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Status</h6>
            <div className="text-warning">
              <span className="fw-semibold">{status}</span>
            </div>
          </div>
        </div>

        <hr className="text-muted" />

        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <ReviewCartItem />
          </div>
          <div className="col">
            <ReviewCartItem />
          </div>
          <div className="col">
            <ReviewCartItem />
          </div>
        </div>
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        Order Date: {new Date().toDateString()}
      </div>
    </div>
  );
}

export default CurrentOrderCard;
