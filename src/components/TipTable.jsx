import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function TipTable({ tips, deleteTip }) {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>Data</th>
          <th>Status</th>
          <th>Opis</th>
          <th>URL</th>
          <th>Akcje</th>
        </tr>
      </thead>

      <tbody>
        {tips.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center">
              No tips found
            </td>
          </tr>
        )}
        {tips.map((t) => (
          <tr key={t._id}>
            <td>{new Date(t.createdAt).toISOString().slice(0, 10)}</td>

            <td>
              <StatusBadge status={t.status} />
            </td>

            <td>{t.message.substring(0, 100)}</td>

            <td className="text-truncate" style={{ maxWidth: "250px" }}>
              {t.url}
            </td>

            <td>
              <Link
                to={`/tips/${t._id}`}
                className="btn btn-sm btn-outline-primary me-2"
              >
                Podgląd
              </Link>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTip(t._id)}
              >
                Usuń
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TipTable;
