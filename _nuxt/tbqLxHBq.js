import { u as useHead } from "./emusmzRb.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, b as createVNode, d as createTextVNode, a as createBaseVNode } from "./D3cvlsFD.js";
const _sfc_main = {
  __name: "about",
  setup(__props) {
    useHead({
      title: "About FreeToPDF - Free Online PDF Tools & Document Converter",
      meta: [
        {
          name: "description",
          content: "Learn about FreeToPDF, your trusted online PDF conversion platform. Convert Word, Excel, PowerPoint, and images to PDF format. Free, secure, and easy to use."
        },
        {
          name: "keywords",
          content: "about FreeToPDF, PDF converter, document converter, online PDF tools, free PDF conversion, secure file processing"
        },
        {
          name: "robots",
          content: "index, follow"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FreeToPDF",
            "description": "Free online PDF conversion platform",
            "url": "https://freetopdf.com",
            "logo": "https://www.freetopdf.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "freetopdf@gmail.com"
            },
            "sameAs": [
              "https://freetopdf.com"
            ]
          })
        }
      ]
    });
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, null, {
        default: withCtx(() => [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "text-h4 font-weight-bold primary--text" }, {
                        default: withCtx(() => _cache[0] || (_cache[0] = [
                          createTextVNode(" About FreeToPDF ")
                        ])),
                        _: 1,
                        __: [0]
                      }),
                      createVNode(_component_v_card_text, { class: "text-body-1" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-h5 mb-4" }, "Your Trusted PDF Conversion Platform", -1)),
                                  _cache[7] || (_cache[7] = createBaseVNode("p", { class: "mb-4" }, " FreeToPDF is a powerful and user-friendly online platform designed to convert various file formats into high-quality PDF documents. Whether you're a student, professional, or business owner, our service provides a seamless solution for all your document conversion needs. ", -1)),
                                  _cache[8] || (_cache[8] = createBaseVNode("h4", { class: "text-h6 mb-3" }, "Supported File Formats", -1)),
                                  createVNode(_component_v_row, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => _cache[1] || (_cache[1] = [
                                          createBaseVNode("h5", { class: "text-subtitle-1 font-weight-bold mb-2" }, "Documents", -1),
                                          createBaseVNode("ul", { class: "ml-4" }, [
                                            createBaseVNode("li", null, "Microsoft Word (.doc, .docx)"),
                                            createBaseVNode("li", null, "Text files (.txt)"),
                                            createBaseVNode("li", null, "Rich Text Format (.rtf)")
                                          ], -1)
                                        ])),
                                        _: 1,
                                        __: [1]
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => _cache[2] || (_cache[2] = [
                                          createBaseVNode("h5", { class: "text-subtitle-1 font-weight-bold mb-2" }, "Spreadsheets", -1),
                                          createBaseVNode("ul", { class: "ml-4" }, [
                                            createBaseVNode("li", null, "Microsoft Excel (.xls, .xlsx)"),
                                            createBaseVNode("li", null, "CSV files")
                                          ], -1)
                                        ])),
                                        _: 1,
                                        __: [2]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => _cache[3] || (_cache[3] = [
                                          createBaseVNode("h5", { class: "text-subtitle-1 font-weight-bold mb-2" }, "Presentations", -1),
                                          createBaseVNode("ul", { class: "ml-4" }, [
                                            createBaseVNode("li", null, "Microsoft PowerPoint (.ppt, .pptx)")
                                          ], -1)
                                        ])),
                                        _: 1,
                                        __: [3]
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => _cache[4] || (_cache[4] = [
                                          createBaseVNode("h5", { class: "text-subtitle-1 font-weight-bold mb-2" }, "Images", -1),
                                          createBaseVNode("ul", { class: "ml-4" }, [
                                            createBaseVNode("li", null, "JPEG, PNG, GIF"),
                                            createBaseVNode("li", null, "WebP, BMP, TIFF")
                                          ], -1)
                                        ])),
                                        _: 1,
                                        __: [4]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  _cache[9] || (_cache[9] = createBaseVNode("h4", { class: "text-h6 mb-3" }, "Key Features", -1)),
                                  _cache[10] || (_cache[10] = createBaseVNode("ul", { class: "mb-4 ml-4" }, [
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "Fast & Secure:"),
                                      createTextVNode(" Quick conversion with secure file handling")
                                    ]),
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "High Quality:"),
                                      createTextVNode(" Maintains original formatting and quality")
                                    ]),
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "Easy to Use:"),
                                      createTextVNode(" Simple drag-and-drop interface")
                                    ]),
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "No Registration:"),
                                      createTextVNode(" Start converting immediately")
                                    ]),
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "Free Service:"),
                                      createTextVNode(" No hidden costs or subscriptions")
                                    ]),
                                    createBaseVNode("li", null, [
                                      createBaseVNode("strong", null, "Privacy Focused:"),
                                      createTextVNode(" Files are automatically deleted after processing")
                                    ])
                                  ], -1)),
                                  _cache[11] || (_cache[11] = createBaseVNode("h4", { class: "text-h6 mb-3" }, "How It Works", -1)),
                                  _cache[12] || (_cache[12] = createBaseVNode("ol", { class: "mb-4 ml-4" }, [
                                    createBaseVNode("li", null, "Upload your file using our simple interface"),
                                    createBaseVNode("li", null, "Our system automatically detects the file format"),
                                    createBaseVNode("li", null, "Advanced conversion engine processes your document"),
                                    createBaseVNode("li", null, "Download your high-quality PDF instantly")
                                  ], -1)),
                                  _cache[13] || (_cache[13] = createBaseVNode("h4", { class: "text-h6 mb-3" }, "Perfect For", -1)),
                                  _cache[14] || (_cache[14] = createBaseVNode("ul", { class: "mb-4 ml-4" }, [
                                    createBaseVNode("li", null, "Students submitting assignments"),
                                    createBaseVNode("li", null, "Professionals sharing reports"),
                                    createBaseVNode("li", null, "Businesses archiving documents"),
                                    createBaseVNode("li", null, "Anyone needing PDF format compatibility")
                                  ], -1)),
                                  createVNode(_component_v_alert, {
                                    type: "info",
                                    class: "mt-4"
                                  }, {
                                    default: withCtx(() => _cache[5] || (_cache[5] = [
                                      createBaseVNode("strong", null, "Note:", -1),
                                      createTextVNode(" All uploaded files are processed securely and automatically deleted after conversion to ensure your privacy and data protection. ")
                                    ])),
                                    _: 1,
                                    __: [5]
                                  })
                                ]),
                                _: 1,
                                __: [6, 7, 8, 9, 10, 11, 12, 13, 14]
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    class: "pa-4",
                                    color: "grey lighten-4"
                                  }, {
                                    default: withCtx(() => _cache[15] || (_cache[15] = [
                                      createBaseVNode("h4", { class: "text-h6 mb-3" }, "Why Choose FreeToPDF?", -1),
                                      createBaseVNode("ul", { class: "ml-4" }, [
                                        createBaseVNode("li", null, "100% Free"),
                                        createBaseVNode("li", null, "No Registration Required"),
                                        createBaseVNode("li", null, "Secure File Processing"),
                                        createBaseVNode("li", null, "High-Quality Output"),
                                        createBaseVNode("li", null, "Fast Conversion"),
                                        createBaseVNode("li", null, "Multiple Format Support"),
                                        createBaseVNode("li", null, "Mobile Friendly"),
                                        createBaseVNode("li", null, "24/7 Availability")
                                      ], -1)
                                    ])),
                                    _: 1,
                                    __: [15]
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
