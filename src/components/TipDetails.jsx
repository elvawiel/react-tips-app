import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTipById } from "../api/tipsApi";
import StatusBadge from "./StatusBadge";
import Layout from "./Layout";

function TipDetails() {
  const { id } = useParams();

  const [tip, setTip] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTipById(id)
      .then((data) => {
        setTip(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Cannot load tip");
      });
  }, [id]);

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="container mt-4">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="mb-4">Tip Details</h1>

        <div className="card">
          <div className="card-body">
            <p>
              <strong>Date:</strong>{" "}
              {new Date(tip.createdAt).toISOString().slice(0, 10)}
            </p>

            <p>
              <strong>Status:</strong> <StatusBadge status={tip.status} />
            </p>

            <p>
              <strong>URL:</strong>{" "}
              <a href={tip.url} target="_blank" rel="noreferrer">
                {tip.url}
              </a>
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p>{tip.message}</p>

            <Link to="/admin" className="btn btn-secondary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TipDetails;
