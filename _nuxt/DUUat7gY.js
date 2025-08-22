import { u as useRuntimeConfig } from "./Cjp7n_DA.js";
var define_process_env_default = {};
const adsenseConfig = {
  // 실제 애드센스 클라이언트 ID로 변경하세요
  clientId: "ca-pub-6441782123701736",
  // 테스트 모드 설정 (localhost 및 개발 환경에서 테스트 광고 표시)
  testMode: window.location.hostname === "localhost",
  // 각 페이지별 광고 슬롯 ID
  slots: {
    main: "1234567890",
    footer: "0987654321",
    pdfToWord: "1111111111",
    wordToPdf: "2222222222",
    merge: "3333333333",
    sidebar: "4444444444",
    pdfGuide: "5727200247",
    interstitial: "5555555555"
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
        sidebar: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || adsenseConfig.slots.sidebar,
        pdfGuide: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_PDF_GUIDE || adsenseConfig.slots.pdfGuide,
        interstitial: define_process_env_default.NUXT_PUBLIC_ADSENSE_SLOT_INTERSTITIAL || adsenseConfig.slots.interstitial
      },
      settings: adsenseConfig.settings
    };
  }
}
export {
  getAdsenseConfig as g
};
