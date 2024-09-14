import "./index.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false
};

export default function App() {
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <p>
        <button onClick={() => {}} disabled={false}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
}
