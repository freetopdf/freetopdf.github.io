function getApiUrl() {
  console.log("🔍 getApiUrl() called");
  console.log("🔍 process.env.NODE_ENV:", "production");
  console.log("🔍 process.env.NUXT_PUBLIC_API_URL:", "https://api.freetopdf.com");
  {
    const envApiUrl = "https://api.freetopdf.com";
    console.log("✅ Using .env file NUXT_PUBLIC_API_URL:", envApiUrl);
    return {
      baseURL: envApiUrl,
      apiURL: `${envApiUrl}/api`,
      healthURL: `${envApiUrl}/health`,
      docsURL: `${envApiUrl}/docs`,
      redocURL: `${envApiUrl}/redoc`
    };
  }
}
const getApiURL = () => getApiUrl().apiURL;
function getFullApiUrl(endpoint) {
  const baseUrl = getApiURL();
  return `${baseUrl}${endpoint}`;
}
const apiEndpoints = {
  // PDF 변환 관련
  pdfToWord: "/convert-pdf-to-word",
  wordToPdf: "/convert-to-pdf",
  mergePdf: "/merge-files",
  // 파일 업로드
  upload: "/upload",
  // 이메일 전송
  sendEmail: "/contact",
  // 파일 다운로드
  downloadPdf: "/download-pdf",
  downloadWord: "/download-word",
  // 헬스 체크
  health: "/health"
};
export {
  apiEndpoints as a,
  getApiURL as b,
  getFullApiUrl as g
};
