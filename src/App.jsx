import "./App.css";
import Slider from "./slider";
function App() {
  return (
    <div className="container">
      <div className="top">
        <div className="top_mota">0901234567 | hotmail@gmail.com</div>
      </div>

      <div className="menu">
        <div className="m_container">
          <div className="menu-logo">
            <img
              style={{
                width: 60,
              }}
              src="https://st2.depositphotos.com/3576231/8284/v/950/depositphotos_82847046-stock-illustration-fragonfly-business-sign-template.jpg"
              alt="logo"
            />
          </div>
          <ul className="menu-items">
            <li>Trang chu</li>
            <li>Gioi thieu</li>
            <li>linh vuc</li>
            <li>Du an</li>
            <li>Tin tuc</li>
            <li>Tuyen dung</li>
            <li>Lien he</li>
            <li className="tim_kiem"></li>
          </ul>
        </div>
      </div>
      <div className="overview">
        <div className="ov-container">
          <div className="gioi_thieu">
            <div className="gt-top">
              <div className="gt-left">
                <h2>Về chúng tôi</h2>
                <p>Với tiềm lực ...</p>
              </div>
              <div className="gt-right">
                <h4>
                  Chúng tôi kiến tạo kiến trúc thương mại & dân cư với độ ngũ
                  thiết kế chuyên nghiệp
                </h4>
                <div className="gtr_list">
                  <div className="gtr_item">
                    <div>
                      <p>01.</p>
                      <p className="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div>
                      <p>02.</p>
                      <p className="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                  <div className="gtr_item">
                    <div>
                      <p>03.</p>
                      <p className="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div>
                      <p>04.</p>
                      <p className="detail">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                  <div className="gtr_second"></div>
                </div>
              </div>
            </div>
            <div className="gt-bottom">
              <div className="tam_nhin gt_active">
                <div className="tn_container">
                  <h4>Tầm nhìn</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="su_menh">
                <div className="tn_container">
                  <h4>Tầm nhìn</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="cot_loi">
                <div className="tn_container">
                  <h4>Tầm nhìn</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lich_su_hanh_trinh">
          <div className="ov-container ls_mota">
            <h1>Lich su hinh thanh</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
          </div>
          <div className="ls_nam">
            <Slider />
          </div>
          <div className="ls_gioi_thieu_theo_nam"></div>
        </div>
        <div className="ov-container">
          <div className="thanh_tuu">
            <h1>Thành tựu</h1>

            <div className="tt_content">
              <div className="ttc_mo_ta">
                <h1> Top 50</h1>
                <p>Top 50 thương hiệu tuyển dụng</p>
              </div>
              <img
                src="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
                alt="anh tt"
              />
              <p>2022</p>
            </div>
            <div className="tt_content">
              <div className="ttc_mo_ta">
                <p>Top 50 thương hiệu tuyển dụng</p>
              </div>
              <p>2022</p>
            </div>
            <div className="tt_content">
              <div className="ttc_mo_ta">
                <p>Top 50 thương hiệu tuyển dụng</p>
              </div>
              <p>2022</p>
            </div>
            <div className="tt_content">
              <div className="ttc_mo_ta">
                <p>Top 50 thương hiệu tuyển dụng</p>
              </div>
              <p>2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
