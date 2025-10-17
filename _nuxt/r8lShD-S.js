import { u as useHead } from "./emusmzRb.js";
import { _ as _export_sfc, c as createElementBlock, b as createVNode, w as withCtx, r as resolveComponent, o as openBlock, d as createTextVNode, a as createBaseVNode } from "./D3cvlsFD.js";
const _hoisted_1 = { class: "mb-6" };
const _hoisted_2 = { class: "mb-6" };
const _sfc_main = {
  __name: "privacy",
  setup(__props) {
    useHead({
      title: "Privacy Policy - FreeToPDF | Data Protection & Security",
      meta: [
        {
          name: "description",
          content: "FreeToPDF Privacy Policy. Learn how we protect your data and ensure privacy when using our PDF conversion tools. Secure file processing and data protection."
        },
        {
          name: "keywords",
          content: "privacy policy, data protection, security, PDF converter privacy, file security, personal information protection"
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
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy Policy for FreeToPDF - Data protection and security information",
            "url": "https://freetopdf.com/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "FreeToPDF"
            }
          })
        }
      ]
    });
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_v_row, { justify: "center" }, {
          default: withCtx(() => [
            createVNode(_component_v_col, {
              cols: "12",
              md: "10",
              lg: "8"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_card, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "text-h4 text-center mb-6" }, {
                      default: withCtx(() => _cache[0] || (_cache[0] = [
                        createTextVNode(" Privacy Policy ")
                      ])),
                      _: 1,
                      __: [0]
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-body-1 mb-4" }, [
                          createBaseVNode("strong", null, "Last Updated:"),
                          createTextVNode(" July 6, 2024 ")
                        ], -1)),
                        createVNode(_component_v_divider, { class: "mb-6" }),
                        _cache[6] || (_cache[6] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "1. Purpose of Personal Information Collection and Use"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " FreeToPDF collects and uses personal information for the following purposes: "),
                          createBaseVNode("ul", { class: "text-body-1 mb-3" }, [
                            createBaseVNode("li", null, "Providing PDF conversion services"),
                            createBaseVNode("li", null, "Customer inquiries and support"),
                            createBaseVNode("li", null, "Service improvement and development"),
                            createBaseVNode("li", null, "Legal obligation compliance")
                          ])
                        ], -1)),
                        createBaseVNode("section", _hoisted_1, [
                          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "2. Personal Information Items Collected", -1)),
                          createVNode(_component_v_table, null, {
                            default: withCtx(() => _cache[1] || (_cache[1] = [
                              createBaseVNode("thead", null, [
                                createBaseVNode("tr", null, [
                                  createBaseVNode("th", null, "Items Collected"),
                                  createBaseVNode("th", null, "Purpose of Collection"),
                                  createBaseVNode("th", null, "Retention Period")
                                ])
                              ], -1),
                              createBaseVNode("tbody", null, [
                                createBaseVNode("tr", null, [
                                  createBaseVNode("td", null, "Email Address"),
                                  createBaseVNode("td", null, "Account management, service notifications"),
                                  createBaseVNode("td", null, "1 year after service termination")
                                ]),
                                createBaseVNode("tr", null, [
                                  createBaseVNode("td", null, "Uploaded Files"),
                                  createBaseVNode("td", null, "PDF conversion service"),
                                  createBaseVNode("td", null, "Deleted immediately after conversion")
                                ]),
                                createBaseVNode("tr", null, [
                                  createBaseVNode("td", null, "Access Logs"),
                                  createBaseVNode("td", null, "Service usage statistics, security"),
                                  createBaseVNode("td", null, "3 months")
                                ])
                              ], -1)
                            ])),
                            _: 1,
                            __: [1]
                          })
                        ]),
                        _cache[7] || (_cache[7] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "3. Third-Party Disclosure of Personal Information"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " FreeToPDF does not provide users' personal information to third parties as a general rule. However, exceptions are made in the following cases: "),
                          createBaseVNode("ul", { class: "text-body-1 mb-3" }, [
                            createBaseVNode("li", null, "When the user has given prior consent"),
                            createBaseVNode("li", null, "When required by law or when law enforcement agencies request information through legally established procedures"),
                            createBaseVNode("li", null, "When providing only the minimum personal information necessary for service provision")
                          ])
                        ], -1)),
                        _cache[8] || (_cache[8] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "4. Security Measures for Personal Information"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " FreeToPDF implements the following measures to ensure the security of personal information: "),
                          createBaseVNode("ul", { class: "text-body-1 mb-3" }, [
                            createBaseVNode("li", null, "Encryption of personal information"),
                            createBaseVNode("li", null, "Technical measures against hacking"),
                            createBaseVNode("li", null, "Restriction of access to personal information"),
                            createBaseVNode("li", null, "Minimization and training of personnel handling personal information"),
                            createBaseVNode("li", null, "Operation of dedicated personal information protection organization")
                          ])
                        ], -1)),
                        _cache[9] || (_cache[9] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "5. User Rights and Obligations"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " Users have the following rights regarding their personal information: "),
                          createBaseVNode("ul", { class: "text-body-1 mb-3" }, [
                            createBaseVNode("li", null, "Request to access personal information"),
                            createBaseVNode("li", null, "Request to correct or delete personal information"),
                            createBaseVNode("li", null, "Request to suspend processing of personal information"),
                            createBaseVNode("li", null, "Withdraw consent for personal information processing")
                          ])
                        ], -1)),
                        _cache[10] || (_cache[10] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "6. Cookie Usage"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " FreeToPDF may use cookies to provide services. Cookies are small text files automatically generated when visiting the website, which store user preferences and visit records. ")
                        ], -1)),
                        createBaseVNode("section", _hoisted_2, [
                          _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "7. Personal Information Protection Officer", -1)),
                          createVNode(_component_v_card, {
                            variant: "outlined",
                            class: "pa-4"
                          }, {
                            default: withCtx(() => _cache[3] || (_cache[3] = [
                              createBaseVNode("p", { class: "text-body-1 mb-2" }, [
                                createBaseVNode("strong", null, "Personal Information Protection Officer:"),
                                createTextVNode(" John Doe ")
                              ], -1),
                              createBaseVNode("p", { class: "text-body-1 mb-2" }, [
                                createBaseVNode("strong", null, "Contact:"),
                                createTextVNode(" freetopdf@gmail.com ")
                              ], -1),
                              createBaseVNode("p", { class: "text-body-1 mb-2" }, [
                                createBaseVNode("strong", null, "Phone:"),
                                createTextVNode(" +82-2-1234-5678 ")
                              ], -1),
                              createBaseVNode("p", { class: "text-body-1" }, [
                                createBaseVNode("strong", null, "Address:"),
                                createTextVNode(" 123 Teheran-ro, Gangnam-gu, Seoul, Korea ")
                              ], -1)
                            ])),
                            _: 1,
                            __: [3]
                          })
                        ]),
                        _cache[11] || (_cache[11] = createBaseVNode("section", { class: "mb-6" }, [
                          createBaseVNode("h3", { class: "text-h5 mb-3" }, "8. Changes to Privacy Policy"),
                          createBaseVNode("p", { class: "text-body-1 mb-3" }, " This Privacy Policy may be changed in accordance with laws and policies. When the Privacy Policy is changed, we will notify you in advance or provide individual notice of the changes. ")
                        ], -1))
                      ]),
                      _: 1,
                      __: [5, 6, 7, 8, 9, 10, 11]
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
      ]);
    };
  }
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82431299"]]);
export {
  privacy as default
};
