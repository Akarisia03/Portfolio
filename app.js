const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EJS를 뷰 엔진으로 설정
app.set("view engine", "ejs");

// 뷰 파일들의 위치 설정
app.set("views", path.join(__dirname, "views"));

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, "public")));

// 개발 환경에서 뷰 캐시 비활성화
if (process.env.NODE_ENV !== "production") {
  app.disable("view cache");
}

// 라우트 설정
app.get("/", (req, res) => {
  res.render("index");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
