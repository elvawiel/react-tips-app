import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TipDetails from "./components/TipDetails";
import { fetchTips, createTipApi, deleteTipApi } from "./api/tipsApi";
import TipsListPage from "./components/TipsListPage";

function App() {
  const [tips, setTips] = useState([]);
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchTips()
      .then((data) => {
        setTips(data);
      })
      .catch((err) => {
        console.log(err);

        setError("Cannot load tips");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const createTip = async (e) => {
    e.preventDefault();

    try {
      const newTip = await createTipApi({
        url,
        message,
        email,
      });

      setTips([newTip, ...tips]);

      setUrl("");
      setMessage("");
      setEmail("");

      setSuccessMessage("Suggestion added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTip = async (id) => {
    const confirmDelete = window.confirm("Usunąć sugestię?");

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteTipApi(id);

      setTips(tips.filter((t) => t._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h1 className="mb-4 display-4">Dodaj sugestię okazji</h1>

                <div className="card p-4">
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
                  <form onSubmit={createTip}>
                    <div className="mb-4">
                      <label className="form-label">URL *</label>

                      <input
                        type="text"
                        className="form-control"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Opis *</label>

                      <textarea
                        className="form-control"
                        rows="6"
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-4 text-secondary">
                      {message.length}/500 znaków
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Email (opcjonalnie)</label>

                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <button className="btn btn-primary btn-lg">
                      Wyślij sugestię
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Layout>
        }
      />

      <Route
        path="/admin"
        element={<TipsListPage tips={tips} deleteTip={deleteTip} />}
      />

      <Route path="/tips/:id" element={<TipDetails />} />
    </Routes>
  );
}

export default App;
