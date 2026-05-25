function CookiePolicy() {
  return (
    <div className="cookies-info card fixed-bottom">
      <div
        className="container"
        style={{
          borderTop: "2px solid #008ac9",
        }}
      >
        <div className="row">
          <div className="col-lg-10 p-4">
            <p>
              <strong>COOKIES INFORMATION:</strong>
            </p>

            <p>
              Due to the fact that "cookies" are used on the Project website,
              the Company - Entity informs you about the privacy policy used in
              the Project system. At the same time, we point out that the use of
              website without changing your browser settings means that you
              accept receiving "cookies". You can change your cookie settings at
              any time. More information in Privacy policy.
            </p>
          </div>

          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <button className="btn btn-primary">I agree</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
