import { _ as _export_sfc, h as ref, c as createElementBlock, b as createVNode, w as withCtx, r as resolveComponent, o as openBlock, d as createTextVNode, a as createBaseVNode, m as withModifiers } from "./DuAxdMrd.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { u as useHead } from "./DDMDSQXO.js";
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = { class: "mb-4" };
const _hoisted_3 = { class: "mb-4" };
const _hoisted_4 = { class: "mb-4" };
const _sfc_main = {
  __name: "contact",
  setup(__props) {
    useHead({
      title: "Contact FreeToPDF - Get Support for PDF Conversion Tools",
      meta: [
        {
          name: "description",
          content: "Contact FreeToPDF for support with our PDF conversion tools. Get help with PDF to Word, Word to PDF, and other document conversion services."
        },
        {
          name: "keywords",
          content: "contact FreeToPDF, PDF converter support, customer service, technical support, help with PDF conversion"
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
            "@type": "ContactPage",
            "name": "Contact FreeToPDF",
            "description": "Contact page for FreeToPDF support",
            "url": "https://freetopdf.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "FreeToPDF",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "freetopdf@gmail.com",
                "telephone": "+82-2-1234-5678",
                "availableLanguage": "English, Korean"
              }
            }
          })
        }
      ]
    });
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const loading = ref(false);
    const nameInput = ref(null);
    const emailInput = ref(null);
    const subjectInput = ref(null);
    const messageInput = ref(null);
    const submitForm = async () => {
      if (!form.value.name) {
        alert("Please enter your name.");
        nameInput.value && nameInput.value.focus();
        return;
      }
      if (!form.value.email) {
        alert("Please enter your email.");
        emailInput.value && emailInput.value.focus();
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.value.email)) {
        alert("Please enter a valid email address.");
        emailInput.value && emailInput.value.focus();
        return;
      }
      if (!form.value.subject) {
        alert("Please enter the subject.");
        subjectInput.value && subjectInput.value.focus();
        return;
      }
      if (!form.value.message) {
        alert("Please enter your message.");
        messageInput.value && messageInput.value.focus();
        return;
      }
      loading.value = true;
      try {
        const emailUrl = await getFullApiUrl(apiEndpoints.sendEmail);
        console.log("🔍 Contact Email URL:", emailUrl);
        const res = await fetch(emailUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form.value)
        });
        const data = await res.json();
        if (res.ok && data.success) {
          if (data.email_sent) {
            alert("Message sent successfully! Email has also been sent.");
          } else {
            alert("Message sent successfully! (Email sending failed but data was saved to database)");
          }
          form.value = { name: "", email: "", subject: "", message: "" };
        } else {
          alert(data.message || "Failed to send message. Please try again.");
        }
      } catch (error) {
        alert("Failed to send message. Please try again.");
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_v_row, { justify: "center" }, {
          default: withCtx(() => [
            createVNode(_component_v_col, {
              cols: "12",
              md: "8",
              lg: "6"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_card, { class: "pa-6" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "text-h4 text-center mb-6" }, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode(" Contact Us ")
                      ])),
                      _: 1,
                      __: [4]
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-h6 mb-4" }, "Get in Touch", -1)),
                                createVNode(_component_v_form, {
                                  onSubmit: withModifiers(submitForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.name,
                                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                                      label: "Name",
                                      required: "",
                                      variant: "outlined",
                                      class: "mb-3",
                                      ref_key: "nameInput",
                                      ref: nameInput
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.email,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.email = $event),
                                      label: "Email",
                                      type: "email",
                                      required: "",
                                      variant: "outlined",
                                      class: "mb-3",
                                      ref_key: "emailInput",
                                      ref: emailInput
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: form.value.subject,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.subject = $event),
                                      label: "Subject",
                                      required: "",
                                      variant: "outlined",
                                      class: "mb-3",
                                      ref_key: "subjectInput",
                                      ref: subjectInput
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_v_textarea, {
                                      modelValue: form.value.message,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.message = $event),
                                      label: "Message",
                                      required: "",
                                      variant: "outlined",
                                      rows: "5",
                                      class: "mb-4",
                                      ref_key: "messageInput",
                                      ref: messageInput
                                    }, null, 8, ["modelValue"]),
                                    createVNode(_component_v_btn, {
                                      type: "submit",
                                      color: "primary",
                                      size: "large",
                                      block: "",
                                      loading: loading.value
                                    }, {
                                      default: withCtx(() => _cache[5] || (_cache[5] = [
                                        createTextVNode(" Send Message ")
                                      ])),
                                      _: 1,
                                      __: [5]
                                    }, 8, ["loading"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1,
                              __: [6]
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                _cache[19] || (_cache[19] = createBaseVNode("h3", { class: "text-h6 mb-4" }, "Contact Information", -1)),
                                createBaseVNode("div", _hoisted_1, [
                                  createVNode(_component_v_icon, {
                                    class: "mr-3",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => _cache[7] || (_cache[7] = [
                                      createTextVNode("mdi-email")
                                    ])),
                                    _: 1,
                                    __: [7]
                                  }),
                                  _cache[8] || (_cache[8] = createBaseVNode("span", null, "Email: freetopdf@gmail.com", -1))
                                ]),
                                createBaseVNode("div", _hoisted_2, [
                                  createVNode(_component_v_icon, {
                                    class: "mr-3",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => _cache[9] || (_cache[9] = [
                                      createTextVNode("mdi-phone")
                                    ])),
                                    _: 1,
                                    __: [9]
                                  }),
                                  _cache[10] || (_cache[10] = createBaseVNode("span", null, "Phone: +82-2-1234-5678", -1))
                                ]),
                                createBaseVNode("div", _hoisted_3, [
                                  createVNode(_component_v_icon, {
                                    class: "mr-3",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => _cache[11] || (_cache[11] = [
                                      createTextVNode("mdi-clock")
                                    ])),
                                    _: 1,
                                    __: [11]
                                  }),
                                  _cache[12] || (_cache[12] = createBaseVNode("span", null, "Business Hours: Mon-Fri 09:00 - 18:00", -1))
                                ]),
                                createBaseVNode("div", _hoisted_4, [
                                  createVNode(_component_v_icon, {
                                    class: "mr-3",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => _cache[13] || (_cache[13] = [
                                      createTextVNode("mdi-map-marker")
                                    ])),
                                    _: 1,
                                    __: [13]
                                  }),
                                  _cache[14] || (_cache[14] = createBaseVNode("span", null, "Address: 123 Teheran-ro, Gangnam-gu, Seoul, Korea", -1))
                                ]),
                                createVNode(_component_v_divider, { class: "my-6" }),
                                _cache[20] || (_cache[20] = createBaseVNode("h4", { class: "text-h6 mb-3" }, "Frequently Asked Questions", -1)),
                                createVNode(_component_v_expansion_panels, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_expansion_panel, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_expansion_panel_title, null, {
                                          default: withCtx(() => _cache[15] || (_cache[15] = [
                                            createTextVNode(" I'm having trouble converting files ")
                                          ])),
                                          _: 1,
                                          __: [15]
                                        }),
                                        createVNode(_component_v_expansion_panel_text, null, {
                                          default: withCtx(() => _cache[16] || (_cache[16] = [
                                            createTextVNode(" Please check the supported file formats and ensure your file is under 50MB. ")
                                          ])),
                                          _: 1,
                                          __: [16]
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_expansion_panel, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_expansion_panel_title, null, {
                                          default: withCtx(() => _cache[17] || (_cache[17] = [
                                            createTextVNode(" I have questions about privacy protection ")
                                          ])),
                                          _: 1,
                                          __: [17]
                                        }),
                                        createVNode(_component_v_expansion_panel_text, null, {
                                          default: withCtx(() => _cache[18] || (_cache[18] = [
                                            createTextVNode(" Uploaded files are deleted immediately after conversion, and personal information is safely protected. ")
                                          ])),
                                          _: 1,
                                          __: [18]
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1,
                              __: [19, 20]
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
      ]);
    };
  }
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-591c2a8b"]]);
export {
  contact as default
};
