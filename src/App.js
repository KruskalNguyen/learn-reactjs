export default function LeftContain() {
  return (
      <div className="LeftContain col-lg-8">
              <div className="fxt-column-wrap justify-content-between">
                <div className="fxt-animated-img">
                  <div className="fxt-transformX-L-50 fxt-transition-delay-10">
                    <img src="img/figure/bg34-1.png" alt="Animated Image" />
                  </div>
                </div>
                <div className="fxt-transformX-L-50 fxt-transition-delay-3">
                  <a href="login-34.html" className="fxt-logo">
                  <h1
                    style={{
                      color: "rgb(85, 85, 255)",
                      font: "bold",
                      fontWeight: 600,
                      fontSize: 50
                    }}
                  >
                    Kruskal Nguyễn
                  </h1>
                  </a>
                </div>
                <div className="fxt-transformX-L-50 fxt-transition-delay-5">
                  <div className="fxt-middle-content">
                    <h1 className="fxt-main-title">Sign In to Rechage Direct</h1>
                    <div className="fxt-switcher-description1">
                      If you don’t have an account You can
                      <p className="fxt-switcher-text ms-2">
                        Sign Up
                      </p>
                    </div>
                  </div>
                </div>
                <div className="fxt-transformX-L-50 fxt-transition-delay-7">
                  <div className="fxt-qr-code">
                    <img src="img/elements/qrcode.png" alt="QR" style={{width: 200}}/>
                  </div>
                </div>
              </div>
      </div>
  );
}

export function LoginContain(){
    return (
      <div className="LoginContain col-lg-4">
            <div className="fxt-column-wrap justify-content-center">
              <div className="fxt-form">
                <form method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email or Mobile Number"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="********"
                      required="required"
                    />
                    <i
                      toggle="#password"
                      className="fa fa-fw fa-eye toggle-password field-icon"
                    />
                  </div>
                  <div className="form-group">
                    <div className="fxt-switcher-description2 text-right">
                      <p  className="fxt-switcher-text">
                        Recovery Password
                      </p>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="fxt-btn-fill">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="fxt-style-line">
                <span>Or Continus with</span>
              </div>
              <ul className="fxt-socials">
                <li className="fxt-google">
                  <a href="#" title="google">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li className="fxt-apple">
                  <a href="#" title="apple">
                    <i className="fab fa-apple" />
                  </a>
                </li>
                <li className="fxt-facebook">
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
              </ul>
            </div>
      </div>
    );
}

// export default LeftContain;
