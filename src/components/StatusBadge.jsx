function StatusBadge({ status }) {
  if (status === "new") {
    return <span className="badge bg-success">new</span>;
  }

  if (status === "processed") {
    return <span className="badge bg-primary">processed</span>;
  }

  return <span className="badge bg-danger">rejected</span>;
}

export default StatusBadge;
