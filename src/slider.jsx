import "./slider.css";
function Slider() {
  return (
    <>
      <div className="slider">
        <div class="timeline-container">
          <div class="timeline">
            <div class="timeline-bar"></div>
            <ul>
              <li>
                <div class="year active" data-year="2010">
                  2009
                </div>
              </li>
              <li>
                <div class="year" data-year="2010">
                  2010
                </div>
              </li>
              <li>
                <div class="year" data-year="2012">
                  2012
                </div>
              </li>
              <li>
                <div class="year" data-year="2014">
                  2014
                </div>
              </li>
              <li>
                <div class="year" data-year="2016">
                  2016
                </div>
              </li>
              <li>
                <div class="year" data-year="2018">
                  2018
                </div>
              </li>
              <li>
                <div class="year" data-year="2019">
                  2019
                </div>
              </li>
              <li>
                <div class="year" data-year="2020">
                  2020
                </div>
              </li>
            </ul>
          </div>
          <div class="timeline-content">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Construction Image"
            />
            <div class="text-content">
              <h2>2010</h2>
              <ul>
                <li>Thành lập Công ty TNHH Lộc Bình 1</li>
                <li>Thành lập Công ty Cổ phần Lộc Bình 2</li>
                <li>
                  Sở hữu Công ty Cổ phần Đầu tư và Dịch vụ Thương mại Minh Anh
                </li>
                <li>Sở hữu Công ty Cổ phần Cơ khí và Xây dựng Nam Sơn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
