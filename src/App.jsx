import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [upi, setUpi] = useState("");

  // 🔥 TRANSACTIONS DATA
  const transactions = [
    {
      title: "Evening deposit",
      date: "Apr 14, 2026, 6:30 PM",
      amount: "+₹500",
      type: "credit",
    },
    {
      title: "Afternoon deposit",
      date: "Apr 14, 2026, 2:15 PM",
      amount: "+₹300",
      type: "credit",
    },
    {
      title: "Emergency withdrawal",
      date: "Apr 13, 2026, 4:20 PM",
      amount: "-₹200",
      type: "debit",
    },
    {
      title: "Morning deposit",
      date: "Apr 13, 2026, 10:00 AM",
      amount: "+₹1000",
      type: "credit",
    },
    {
      title: "Night deposit",
      date: "Apr 12, 2026, 9:00 PM",
      amount: "+₹700",
      type: "credit",
    },
  ];

  // 🔥 LAST 5 TRANSACTIONS
  const recentTransactions = transactions.slice(0, 5);

  // ================= ADD MONEY =================
  if (showAddMoney) {
    return (
      <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-6 w-[350px] text-center">
          <div
            className="flex items-center mb-4 text-gray-600 cursor-pointer"
            onClick={() => setShowAddMoney(false)}
          >
            ← Back
          </div>

          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            💳
          </div>

          <h2 className="text-xl font-semibold text-blue-900">
            Add Money
          </h2>

          <p className="text-gray-500 text-sm mt-1">Amount to add</p>

          <h1 className="text-3xl font-bold text-green-500 my-2">
            ₹{amount || 0}
          </h1>

          <div className="text-left text-sm text-blue-900 mb-1 mt-4">
            Enter your UPI ID
          </div>

          <input
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            placeholder="yourname@upi"
            className="w-full border-2 border-blue-900 rounded-xl px-3 py-3"
          />

          <button
            disabled={!upi}
            className={`mt-5 w-full py-3 rounded-xl text-white ${
              upi ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            ✔ Pay ₹{amount || 0}
          </button>
        </div>
      </div>
    );
  }

  // ================= MAIN UI =================
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center">
      <div className="w-[390px]">

        {/* HEADER */}
        <div className="flex justify-between items-center p-4 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center">
              👤
            </div>
            <div>
              <p className="font-semibold text-blue-900">Ramesh Traders</p>
              <p className="text-sm text-gray-500">ID: RT2847</p>
            </div>
          </div>
        </div>

        {/* BALANCE */}
        <div className="bg-blue-900 text-white rounded-2xl p-5 m-4">
          <p>Total Balance</p>
          <h1 className="text-4xl font-bold">₹45,500</h1>
        </div>

        {/* DEPOSIT */}
        <div className="px-4">
          <button className="w-full bg-green-500 text-white py-3 rounded-xl">
            Deposit Today's Savings
          </button>
        </div>

        {/* QUICK */}
        <div className="flex gap-3 px-4 mt-4">
          {[100, 500, 1000].map((amt) => (
            <button
              key={amt}
              className="flex-1 border rounded-full py-2"
              onClick={() => setAmount(amt)}
            >
              +₹{amt}
            </button>
          ))}
        </div>

        {/* INPUT */}
        <div className="flex items-center gap-2 px-4 mt-4">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 border rounded-full px-4 py-3"
          />
          <button
            onClick={() => amount && setShowAddMoney(true)}
            className="bg-green-500 text-white w-12 h-12 rounded-full text-xl"
          >
            +
          </button>
        </div>

        {/* ✅ RECENT TRANSACTIONS */}
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-blue-900 mb-3">
            Recent Transactions
          </h2>

          <div className="space-y-4">
            {recentTransactions.map((t, i) => (
              <div key={i} className="flex justify-between items-center">

                <div className="flex gap-3 items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      t.type === "credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {t.type === "credit" ? "↗" : "↙"}
                  </div>

                  <div>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </div>

                <div
                  className={`font-semibold ${
                    t.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {t.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HISTORY BUTTON */}
        <div className="px-4 mt-6">
          <button
            onClick={() => setShowHistory(true)}
            className="w-full bg-blue-900 text-white py-3 rounded-xl"
          >
            ⏱ History
          </button>
        </div>

        {/* HISTORY POPUP */}
        {showHistory && (
          <div className="fixed inset-0 bg-black/40 flex items-end justify-center">
            <div className="bg-white w-full max-w-[390px] rounded-t-3xl p-4 h-[80%] overflow-y-auto">

              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold">All Transactions</h2>
                <button onClick={() => setShowHistory(false)}>✕</button>
              </div>

              <div className="space-y-4">
                {transactions.map((t, i) => (
                  <div key={i} className="flex justify-between items-center">

                    <div className="flex gap-3 items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          t.type === "credit"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {t.type === "credit" ? "↗" : "↙"}
                      </div>

                      <div>
                        <p className="font-medium">{t.title}</p>
                        <p className="text-sm text-gray-500">{t.date}</p>
                      </div>
                    </div>

                    <div
                      className={`font-semibold ${
                        t.type === "credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {t.amount}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}