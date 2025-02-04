import PropTypes from "prop-types"
import "./index.scss"

export default function Account({
  title = "Argent Bank",
  amount = "1000",
  amountDescription = "Available Balance",
}) {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h4 className="account__title">{title}</h4>
        <p className="account__amount">{`$ ${amount}`}</p>
        <p className="account__amount__description">{amountDescription}</p>
      </div>
      <div className="account__content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountDescription: PropTypes.string,
}
