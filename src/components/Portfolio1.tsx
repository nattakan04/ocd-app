import Link from "next/link";
import React from "react";

export default function Potfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small></small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href="https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    target="rel=noooprner noreferrer"
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-1-66.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                </h3>
                <p>
                  บริหารการเปลี่ยนแปลงที่ต่อเนื่องทั้งในขนาดและความเร็ว
                  การจัดการการเปลี่ยนแปลงเป็นกิจกรรมสำคัญที่ส่วนใหญ่มักถูกมองข้ามในการเปลี่ยนแปลงการทำงานของฝ่ายบุคคล
                  การนำ Workplaze
                  ไปปรับใช้จะช่วยยกระดับกระบวนการและพฤติกรรมของทั้งฝ่ายทรัพยากรบุคคลและพนักงานที่คุ้นเคยมาหลายปี
                </p>
                <p>
                  การจัดการการเปลี่ยนแปลงเป็นวิธีการเชิงโครงสร้างในการเปลี่ยนผ่านบุคคล
                  ทีมงาน และองค์กรจากสถานะปัจจุบันไปสู่สถานะในอนาคตที่ต้องการ
                  มันเกี่ยวข้องกับการวางแผนอย่างเป็นระบบ การนำไปปฏิบัติ
                  และการจัดการการเปลี่ยนแปลงกระบวนการ ระบบ โครงสร้าง
                  หรือวัฒนธรรมภายในองค์กร เพื่อให้บรรลุผลตามที่ต้องการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-67-71.pdf"
                  target="noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>การเปลี่ยนผ่านสู่ระบบดิจิทัลคืออะไร</p>
                <p>
                  ารเปลี่ยนผ่านสู่ระบบดิจิทัลเป็นกระบวนการที่องค์กรนำไปใช้เพื่อรวมเทคโนโลยีดิจิทัลในทุกด้านของธุรกิจ
                  กระบวนการนี้จะเปลี่ยนแปลงวิธีการที่องค์กรส่งมอบคุณค่าให้กับลูกค้าโดยพื้นฐาน
                  บริษัทต่าง ๆ
                  นำเทคโนโลยีดิจิทัลที่เป็นนวัตกรรมมาใช้เพื่อสร้างการเปลี่ยนแปลงทางวัฒนธรรมและการดำเนินงานที่ปรับให้เข้ากับความต้องการของลูกค้าที่เปลี่ยนแปลงไปได้ดีมากยิ่งขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-72-75.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-76-78.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง (Resistance to change) คืออะไร
                  การต่อต้านการเปลี่ยนแปลง คือ
                  การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                  เพื่อรองรับการเติบโต หรือเพื่อความอยู่รอดขององค์กร
                  แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว
                  ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น
                  การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
                  การปรับเปลี่ยนกลยุทธ์ทางการตลาด
                  หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่ เป็นต้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-86-89.pdf"
                  target="noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  การเปลี่ยนแปลงทางเศรษฐกิจในปัจจุบันทำให้หลายองค์กรต้องเดินทางมาถึงจุดที่ต้อง
                  “เปลี่ยนวิธีการทำธุรกิจ”
                  อาจจะด้วยเหตุผลเพื่อความอยู่รอดหรือเพื่อความเติบโตก้าวหน้า
                  บุคคลซึ่งเป็นหัวหอกสำคัญที่ต้องนำการเปลี่ยนแปลงคงหนีไม่พ้น
                  “ผู้จัดการและหัวหน้างาน”
                  และปฏิเสธไม่ได้เลยว่าเมื่อมีการเปลี่ยนแปลงเกิดขึ้น
                  ไม่ใช่พนักงานทุกคนจะตอบสนองต่อการเปลี่ยนแปลงด้วยทัศนคติที่ว่า
                  “ฉันชอบการเปลี่ยนแปลง
                  หรือฉันตื่นเต้นที่ได้เป็นส่วนหนึ่งของมัน!” ⁣
                </p>
                <p>
                  ดังนั้น ในยุคที่ทุกอย่างอยู่บนความเปลี่ยนแปลง
                  ทักษะที่สำคัญที่สุดที่ผู้จัดการและหัวหน้างาน
                  รวมถึงตัวของพนักงานเองควรมีคือ “Managing Resistance to Change”
                  และนี่คือเคล็ดลับ 10
                  ข้อที่ช่วยให้คุณบริหารการต่อต้านการเปลี่ยนแปลงได้อย่างยอดเยี่ยม
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-90-92.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change
                </h3>
                <p>
                  <Link
                    href="https://www.gotoknow.org/posts/495807"
                    target="rel=noooprner noreferrer"
                  >
                    การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  Kotter's 8-Step Model:
                  แนวทางสำหรับผู้นำในการบริหารการเปลี่ยนแปลงองค์กร
                </p>
                <p>
                  ในการเปลี่ยนแปลงเป็นสิ่งที่หลีกเลี่ยงไม่ได้ในโลกธุรกิจที่พัฒนาอย่างรวดเร็ว
                  ไม่ว่าการเปลี่ยนแปลงนั้นจะเกิดจากการปรับปรุงกระบวนการภายใน
                  การนำเทคโนโลยีใหม่ๆ มาใช้ หรือการเปลี่ยนแปลงเชิงกลยุทธ์
                  การจัดการการเปลี่ยนแปลงอย่างมีประสิทธิภาพจึงเป็นสิ่งจำเป็นสำหรับผู้นำองค์กรที่ต้องการประสบความสำเร็จในระยะยาว
                  หนึ่งในโมเดลที่เป็นที่ยอมรับและมีการใช้อย่างแพร่หลายในวงการบริหารคือ
                  **Kotter's 8-Step Change Model** ซึ่งพัฒนาโดย John P. Kotter
                  ศาสตราจารย์จาก Harvard Business School
                  โมเดลนี้เป็นเครื่องมือสำคัญสำหรับผู้นำในการวางแผนและดำเนินการเปลี่ยนแปลงให้เป็นผลสำเร็จการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-93-98.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link
                    href="images/change/chenge_pocessing-90-92.pdf"
                    target="rel=noooprner noreferrer"
                  >
                    ขั้นตอนการสร้าง Vision Statement
                  </Link>
                </p>
                <p>
                  ใระบุให้ชัดเจนว่าคุณจะทำอะไรบ้างเพื่อตอบเหตุผลว่าทำไมถึงมีคุณบนโลกใบนี้
                  เตรียมวางกรอบแนวคิดด้านคุณค่าที่จะมอบให้ลูกค้า
                  มองและวางแผนถึงอนาคตที่คุณวาดฝันเอาไว้
                  เชื่อมทุกอย่างเข้าด้วยกันแล้วนำมาเรียบเรียงเป็น Vision
                  Statement.
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-90-92.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างความพร้อมในการเปลี่ยนแปลง (Identifying Key
                  Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://www.psy.chula.ac.th/th/feature-articles/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3/"
                    target="rel=noooprner noreferrer"
                  >
                    คุณพร้อมไหม?
                    …นักจิตวิทยาพร้อมจะช่วยการสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                  </Link>
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-79-82.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.nectec.or.th/news/news-pr-news/smc-openhouse2024.html"
                    target="rel=noooprner noreferrer"
                  >
                    เปิดบ้าน SMC 2024! เผยผลสำเร็จ 1 ปี
                    ยกระดับโรงงานด้วยเทคโนโลยี ลดต้นทุน-พลังงาน
                    เพิ่มประสิทธิภาพการผลิต พร้อมเดินหน้าภารกิจปี 68
                    หนุนใช้ดิจิทัลปั้นอุตสาหกรรม 4.0 อย่างยั่งยืน
                  </Link>
                </p>
                <p>
                  ในการสำรว17 ธันวาคม 2567 ณ สำนักงานใหญ่ EECi จังหวัดระยอง :
                  ศูนย์นวัตกรรมการผลิตยั่งยืน หรือ SMC (Sustainable
                  Manufacturing Center)
                  ภายใต้เมืองนวัตกรรมระบบอัตโนมัติหุ่นยนต์และอิเล็กทรอนิกส์อัจฉริยะ
                  (ARIPOLIS) ในเขตนวัตกรรมระเบียงเศรษฐกิจพิเศษภาคตะวันออก
                  (Eastern Economic Corridor of Innovation: EECi)
                  หน่วยงานภายใต้สังกัดสำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ
                  (สวทช.) กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.)
                  ร่วมกับ พันธมิตรภาคอุตสาหกรรม
                  จัดกิจกรรมเปิดบ้านศูนย์นวัตกรรมการผลิตยั่งยืน (SMC Open House
                  2024) ภายใต้แนวคิด “เทคโนโลยีดิจิทัล
                  เปลี่ยนอุตสาหกรรมสู่อนาคตที่ยั่งยืน (Sustainable Digital
                  Transformation)”
                  พร้อมรายงานผลความก้าวหน้าการดำเนินงานที่ผ่านมา
                  แผนงานที่จะเกิดขึ้นในปี 2568 ของ SMC
                  และรายงานผลการสำรวจความพร้อมอุตสาหกรรม 4.0 ของไทยปี 2567
                  นอกจากนี้ภายในงานยังมีสัมมนา นิทรรศการ จากสมาชิก พันธมิตร
                  และคณะนักวิจัยของ SMC ที่เจาะลึกเรื่องราวเทคโนโลยีดิจิทัล
                  โซลูชัน และนวัตกรรมเพื่อยกระดับโรงงานอุตสาหกรรมการนำ Digital
                  Transformation ขับเคลื่อนโรงงานอย่างมีประสิทธิภาพและยั่งยืน
                  รวมทั้งกิจกรรมเยี่ยมชม SMC Testbed และ Business Matching
                  ช่วยต่อยอดเครือข่ายธุรกิจ
                  และความร่วมมือเพื่อเพิ่มขีดความสามารถของโรงงานอีกด้วยจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-83-85.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย Identifying Key Stakeholders
                </h3>
                <p>
                  <Link
                    href="https://www.sasimasuk.com/16883363/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B9%83%E0%B8%94%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2-stakeholders-management"
                    target="rel=noooprner noreferrer"
                  >
                    การบริหารผู้มีส่วนใดส่วนเสีย (Stakeholders Management)
                    โดยศศิมา สุขสว่าง
                  </Link>
                </p>
                <p>
                  การบริหารผู้มีส่วนใดส่วนเสีย (Stakeholders Management) หมายถึง
                  บุคคล หน่วยงานหรือองค์กรที่ให้ ความสนใจ หรือมีความเกี่ยวข้อง
                  ต่อผลการดำเนินการของโครงการ
                  ซึ่งผลการดำเนินการของโครงการนั้นสามารถส่งผลบวกและผลลบต่อผู้ที่เกี่ยวข้องโดยตรง
                  หรือทางอ้อม
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-103-106.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://api.reactrouter.com/v7/functions/react_router.Link.html"
                    target="rel=noooprner noreferrer"
                  >
                    การมีส่วนร่วมกับผู้มีส่วนได้เสีย และการวิเคราะห์ประเด็นสำคัญ
                  </Link>
                </p>
                <p>
                  การบริหารจัดการธุรกิจที่มีประสิทธิภาพไม่ได้เกิดขึ้นด้วยตัวองค์กรเองเท่านั้น
                  แต่เกี่ยวข้องกับห่วงโซ่คุณค่าซึ่งประกอบด้วยผู้มีส่วนได้เสียหลากหลายกลุ่ม
                  ดังนั้น
                  องค์กรต้องพิจารณาให้ได้ว่ามีความเกี่ยวข้องกับผู้มีส่วนได้เสียกลุ่มใดบ้าง
                  แต่ละกลุ่มมีลักษณะเฉพาะอย่างไร
                  รวมถึงมีความสำคัญและสอดคล้องกับกลยุทธ์การดำเนินงานขององค์กรอย่างไร
                  ที่สำคัญองค์กรและผู้มีส่วนได้เสียมีคุณค่าร่วมกันอย่างไร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-107-110.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  คณะกรรมการขับเคลื่อนการดำเนินงานศูนย์การเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม
                </p>
                <p>
                  อธิบดีกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม,
                  ประธานกรรมการ. 2.
                  รองอธิบดีกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อมที่ได้รับมอบหมาย,
                  รองประธานกรรมการ.
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-111-114.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum) </h3>

                <p>
                  <Link
                    href="https://www.phyathai.com/th/article/3214-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%AD"
                    target="rel=noooprner noreferrer"
                  >
                    การดูแลแบบประคับประคองสำหรับผู้ป่วยและครอบครัว
                  </Link>
                </p>
                <p>
                  การดูแลแบบประคับประคอง (Palliative Care)
                  เป็นที่รู้จักกว้างขวางในต่างประเทศ โดยเฉพาะในประเทศตะวันตก
                  และกำลังเริ่มเป็นที่รู้จักมากขึ้นในประเทศไทย
                  แต่การดูแลผู้ป่วยกลุ่มนี้โดยเฉพาะในช่วงใกล้เสียชีวิต
                  ยังจำเป็นต้องสร้างความรู้ความเข้าใจให้มากขึ้น
                  เพื่อให้ผู้ป่วยและครอบครัวไม่ตื่นตระหนก เข้าใจ
                  และรับมือกับอาการที่เกิดขึ้นได้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/chenge_pocessing-115-119.pdf"
                  target="rel=noooprner noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
