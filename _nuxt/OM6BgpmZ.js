import { u as useRuntimeConfig } from "./Bogji2Ua.js";
function getCurrentEnv() {
  var _a;
  try {
    const config = useRuntimeConfig();
    return ((_a = config == null ? void 0 : config.public) == null ? void 0 : _a.nodeEnv) || "production";
  } catch (error) {
    return "production";
  }
}
const apiConfig = {
  // 개발 환경 (Docker + Nginx)
  development: {
    baseURL: "http://127.0.0.1:8100",
    apiURL: "http://127.0.0.1:8100/api",
    healthURL: "http://127.0.0.1:8100/health",
    docsURL: "http://127.0.0.1:8100/docs",
    redocURL: "http://127.0.0.1:8100/redoc"
  },
  // 프로덕션 환경 (HTTPS)
  production: {
    baseURL: "https://api.freetopdf.com",
    apiURL: "https://api.freetopdf.com/api",
    healthURL: "https://api.freetopdf.com/health",
    docsURL: "https://api.freetopdf.com/docs",
    redocURL: "https://api.freetopdf.com/redoc"
  },
  // 테스트 환경 (필요시)
  test: {
    baseURL: "http://127.0.0.1:8000",
    apiURL: "http://127.0.0.1:8000/api",
    healthURL: "http://127.0.0.1:8000/health",
    docsURL: "http://127.0.0.1:8000/docs",
    redocURL: "http://127.0.0.1:8000/redoc"
  }
};
function getApiConfig() {
  const currentEnv = getCurrentEnv();
  console.log("🔍 getApiConfig() - currentEnv:", currentEnv);
  if (currentEnv === "development") {
    return apiConfig.development;
  } else if (currentEnv === "production") {
    return apiConfig.production;
  } else {
    return apiConfig.test;
  }
}
function getApiUrl() {
  console.log("🔍 getApiUrl() called");
  try {
    const config = useRuntimeConfig();
    console.log("🔍 runtimeConfig:", config == null ? void 0 : config.public);
    if (config && config.public && config.public.apiUrl) {
      const envApiUrl = config.public.apiUrl;
      console.log("✅ Using runtimeConfig API URL:", envApiUrl);
      return {
        baseURL: envApiUrl,
        apiURL: `${envApiUrl}/api`,
        healthURL: `${envApiUrl}/health`,
        docsURL: `${envApiUrl}/docs`,
        redocURL: `${envApiUrl}/redoc`
      };
    }
  } catch (error) {
    console.log("RuntimeConfig not available:", error.message);
  }
  const currentEnv = getCurrentEnv();
  console.log("⚠️ Using default API configuration for environment:", currentEnv);
  const defaultConfig = getApiConfig();
  console.log("🔍 Default config:", defaultConfig);
  return defaultConfig;
}
const getApiURL = () => getApiUrl().apiURL;
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
function getFullApiUrl(endpoint) {
  const baseUrl = getApiURL();
  return `${baseUrl}${endpoint}`;
}
export {
  apiEndpoints as a,
  getApiURL as b,
  getFullApiUrl as g
};
