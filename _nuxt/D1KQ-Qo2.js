import { u as useRuntimeConfig } from "./D3cvlsFD.js";
var define_process_env_default = {};
const adsenseConfig = {
  // 실제 애드센스 클라이언트 ID로 변경하세요
  clientId: "ca-pub-6441782123701736",
  // 테스트 모드 설정 (localhost 및 개발 환경에서 테스트 광고 표시)
  testMode: window.location.hostname === "localhost",
  // 각 페이지별 광고 슬롯 ID
  slots: {
    main: "5727200247",
    footer: "6524876559",
    loading: "5727200247",
    // 로딩 화면용 광고 슬롯 (임시로 main과 동일하게 설정)
    download: "5727200247"
    // 다운로드 페이지용 광고 슬롯 (임시로 main과 동일하게 설정)
  },
  // 광고 설정
  settings: {
    format: "auto",
    fullWidthResponsive: "true",
    enablePageLevelAds: true
  }
};
function getAdsenseConfig() {
  {
    let clientId = adsenseConfig.clientId;
    let testMode = adsenseConfig.testMode;
    try {
      const config = useRuntimeConfig();
      if (config == null ? void 0 : config.public) {
        clientId = config.public.adsenseClientId || clientId;
        testMode = config.public.adsenseTestMode || testMode;
      }
    } catch (error) {
      console.log("Runtime config not available for AdSense");
    }
    return {
      clientId,
      testMode,
      slots: {
        main: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_MAIN || adsenseConfig.slots.main,
        footer: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_FOOTER || adsenseConfig.slots.footer,
        pdfToWord: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_PDF_TO_WORD || adsenseConfig.slots.pdfToWord,
        wordToPdf: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_WORD_TO_PDF || adsenseConfig.slots.wordToPdf,
        merge: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_MERGE || adsenseConfig.slots.merge,
        loading: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_LOADING || adsenseConfig.slots.loading,
        download: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_DOWNLOAD || adsenseConfig.slots.download
      },
      settings: adsenseConfig.settings
    };
  }
}
export {
  getAdsenseConfig as g
};
