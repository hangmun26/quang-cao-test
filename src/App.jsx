import "./App.css";
import Slider from "./slider";
function App() {
  return (
    <div className="container">
      <div className="top">0901234567 | hotmail@gmail.com</div>

      <div className="menu">
        <div className="menu-logo"></div>
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
      <div className="overview">
        <div className="ov-container">
          <div className="gioi_thieu">
            <div className="gt-top">
              <div className="gt-left"></div>
              <div className="gt-right"></div>
            </div>
            <div className="gt-bottom">
              <div className="tam_nhin"></div>
              <div className="su_menh"></div>
              <div className="cot_loi"></div>
            </div>
          </div>
        </div>
        <div className="lich_su_hanh_trinh">
          <div className="ov-container ls_mota">
            <h1>Lich su hinh thanh</h1>
            <p>hon 20 nam ...</p>
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

      <div className="doi_ngu_nhan_su">
        <div className="ns_content">
          <h1>Đội ngũ nhân sự</h1>
          <p>Với một đội ngũ nhân sự tài năng</p>
        </div>

        <div className="ns_name"></div>
      </div>
    </div>
  );
}

export default App;
