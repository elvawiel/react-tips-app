function TipForm({ createTip, url, setUrl, message, setMessage }) {
  return (
    <form onSubmit={createTip} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-primary">Add Tip</button>
    </form>
  );
}

export default TipForm;
