import { _ as _export_sfc, g as ref, s as reactive, l as computed, c as createElementBlock, b as createVNode, w as withCtx, r as resolveComponent, i as useRouter, o as openBlock, f as createBlock, m as createCommentVNode, d as createTextVNode, t as toDisplayString, u as useRuntimeConfig } from "./BZR40qXE.js";
const _hoisted_1 = { class: "secure-pdf-container" };
const _sfc_main = {
  __name: "secure-pdf",
  setup(__props) {
    useRouter();
    const selectedFile = ref(null);
    const fileError = ref("");
    const isProcessing = ref(false);
    const result = ref(null);
    const error = ref("");
    const securityOptions = reactive({
      password: {
        enabled: false,
        value: "",
        confirm: ""
      },
      signature: {
        enabled: false,
        text: "ZuPDF Security System"
      },
      permissions: {
        print: true,
        copy: false,
        edit: false,
        annotate: false
      },
      watermark: {
        enabled: false,
        text: "ZuPDF - Confidential"
      }
    });
    const fileRules = [
      (v) => !!v || "PDF 파일을 선택해주세요.",
      (v) => !v || v.type === "application/pdf" || "PDF 파일만 업로드 가능합니다.",
      (v) => !v || v.size <= 5 * 1024 * 1024 || "파일 크기는 5MB를 초과할 수 없습니다."
    ];
    const passwordRules = [
      (v) => !!v || "비밀번호를 입력해주세요.",
      (v) => v.length >= 4 || "비밀번호는 최소 4자 이상이어야 합니다."
    ];
    const passwordConfirmRules = computed(() => [
      (v) => !!v || "비밀번호 확인을 입력해주세요.",
      (v) => v === securityOptions.password.value || "비밀번호가 일치하지 않습니다."
    ]);
    const onFileSelect = (file) => {
      fileError.value = "";
      result.value = null;
      error.value = "";
      if (file && file.size > 5 * 1024 * 1024) {
        fileError.value = "파일 크기는 5MB를 초과할 수 없습니다.";
        selectedFile.value = null;
      }
    };
    const applyQuickSecurity = (type) => {
      switch (type) {
        case "basic":
          securityOptions.password.enabled = true;
          securityOptions.password.value = "zupdf1234";
          securityOptions.password.confirm = "zupdf1234";
          securityOptions.signature.enabled = true;
          securityOptions.signature.text = "ZuPDF Security System";
          securityOptions.permissions.print = true;
          securityOptions.permissions.copy = false;
          securityOptions.permissions.edit = false;
          securityOptions.permissions.annotate = false;
          securityOptions.watermark.enabled = true;
          securityOptions.watermark.text = "ZuPDF - Basic Security";
          break;
        case "strict":
          securityOptions.password.enabled = true;
          securityOptions.password.value = "secure2024!";
          securityOptions.password.confirm = "secure2024!";
          securityOptions.signature.enabled = true;
          securityOptions.signature.text = "ZuPDF Strict Security";
          securityOptions.permissions.print = false;
          securityOptions.permissions.copy = false;
          securityOptions.permissions.edit = false;
          securityOptions.permissions.annotate = false;
          securityOptions.watermark.enabled = true;
          securityOptions.watermark.text = "ZuPDF - Strict Security - Confidential";
          break;
        case "business":
          securityOptions.password.enabled = true;
          securityOptions.password.value = "business2024";
          securityOptions.password.confirm = "business2024";
          securityOptions.signature.enabled = true;
          securityOptions.signature.text = "ZuPDF Business Security";
          securityOptions.permissions.print = true;
          securityOptions.permissions.copy = false;
          securityOptions.permissions.edit = false;
          securityOptions.permissions.annotate = true;
          securityOptions.watermark.enabled = true;
          securityOptions.watermark.text = "ZuPDF - Business Document";
          break;
      }
    };
    const processSecurity = async () => {
      if (!selectedFile.value) {
        error.value = "PDF 파일을 선택해주세요.";
        return;
      }
      if (securityOptions.password.enabled && securityOptions.password.value !== securityOptions.password.confirm) {
        error.value = "비밀번호가 일치하지 않습니다.";
        return;
      }
      isProcessing.value = true;
      error.value = "";
      result.value = null;
      try {
        const formData = new FormData();
        formData.append("file", selectedFile.value);
        if (securityOptions.password.enabled || securityOptions.signature.enabled || securityOptions.watermark.enabled || !securityOptions.permissions.print || !securityOptions.permissions.copy || !securityOptions.permissions.edit || !securityOptions.permissions.annotate) {
          formData.append("password", securityOptions.password.enabled ? securityOptions.password.value : "");
          formData.append("signature", securityOptions.signature.enabled ? securityOptions.signature.text : "");
          formData.append("allow_print", securityOptions.permissions.print);
          formData.append("allow_copy", securityOptions.permissions.copy);
          formData.append("allow_edit", securityOptions.permissions.edit);
          formData.append("allow_annotate", securityOptions.permissions.annotate);
          formData.append("watermark", securityOptions.watermark.enabled ? securityOptions.watermark.text : "");
          const config = useRuntimeConfig();
          const apiUrl = config.public.apiUrl || "http://127.0.0.1:8100";
          const response = await fetch(`${apiUrl}/api/custom-secure-pdf`, {
            method: "POST",
            body: formData
          });
          if (!response.ok) {
            const errorData = await response.json();
            if (response.status === 429 && errorData.error === "무료 사용 한도 초과") {
              error.value = `You have used all your free usage limit (${errorData.limit} times). Watch ads to continue using our tools.`;
              if (errorData.current_count !== void 0 && errorData.limit !== void 0) {
                error.value += ` (Current: ${errorData.current_count}/${errorData.limit})`;
              }
            } else {
              throw new Error(errorData.detail || errorData.error || "An error occurred during security processing.");
            }
            return;
          }
          result.value = await response.json();
        } else {
          const config = useRuntimeConfig();
          const apiUrl = config.public.apiUrl || "http://127.0.0.1:8100";
          const response = await fetch(`${apiUrl}/api/secure-pdf`, {
            method: "POST",
            body: formData
          });
          if (!response.ok) {
            const errorData = await response.json();
            if (response.status === 429 && errorData.error === "무료 사용 한도 초과") {
              error.value = `You have used all your free usage limit (${errorData.limit} times). Watch ads to continue using our tools.`;
              if (errorData.current_count !== void 0 && errorData.limit !== void 0) {
                error.value += ` (Current: ${errorData.current_count}/${errorData.limit})`;
              }
            } else {
              throw new Error(errorData.detail || errorData.error || "An error occurred during security processing.");
            }
            return;
          }
          result.value = await response.json();
        }
      } catch (err) {
        error.value = err.message || "An error occurred during security processing.";
      } finally {
        isProcessing.value = false;
      }
    };
    const downloadSecurePdf = () => {
      if (result.value && result.value.download_url) {
        window.open(result.value.download_url, "_blank");
      }
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_alert_title = resolveComponent("v-alert-title");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_container, null, {
          default: withCtx(() => [
            createVNode(_component_v_row, { justify: "center" }, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "10",
                  lg: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h4 text-center pa-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              size: "large",
                              class: "mr-3",
                              color: "primary"
                            }, {
                              default: withCtx(() => _cache[16] || (_cache[16] = [
                                createTextVNode("mdi-shield-lock")
                              ])),
                              _: 1,
                              __: [16]
                            }),
                            _cache[17] || (_cache[17] = createTextVNode(" PDF 보안 설정 "))
                          ]),
                          _: 1,
                          __: [17]
                        }),
                        createVNode(_component_v_card_text, { class: "text-center text-body-1" }, {
                          default: withCtx(() => _cache[18] || (_cache[18] = [
                            createTextVNode(" PDF 파일에 비밀번호 보호, 디지털 서명, 권한 제한, 워터마크 등을 추가하여 문서를 안전하게 보호하세요. ")
                          ])),
                          _: 1,
                          __: [18]
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, {
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h6 pa-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[19] || (_cache[19] = [
                                createTextVNode("mdi-upload")
                              ])),
                              _: 1,
                              __: [19]
                            }),
                            _cache[20] || (_cache[20] = createTextVNode(" PDF 파일 업로드 "))
                          ]),
                          _: 1,
                          __: [20]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_file_input, {
                              modelValue: selectedFile.value,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFile.value = $event),
                              accept: ".pdf",
                              label: "PDF 파일을 선택하세요",
                              "prepend-icon": "mdi-file-pdf-box",
                              "show-size": "",
                              counter: "",
                              rules: fileRules,
                              onChange: onFileSelect,
                              class: "mb-4"
                            }, null, 8, ["modelValue"]),
                            fileError.value ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: "error",
                              variant: "tonal",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(fileError.value), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, {
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h6 pa-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[21] || (_cache[21] = [
                                createTextVNode("mdi-cog")
                              ])),
                              _: 1,
                              __: [21]
                            }),
                            _cache[22] || (_cache[22] = createTextVNode(" 보안 옵션 설정 "))
                          ]),
                          _: 1,
                          __: [22]
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
                                    createVNode(_component_v_card, {
                                      variant: "outlined",
                                      class: "h-100"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "text-subtitle-1 pa-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => _cache[23] || (_cache[23] = [
                                                createTextVNode("mdi-lock")
                                              ])),
                                              _: 1,
                                              __: [23]
                                            }),
                                            _cache[24] || (_cache[24] = createTextVNode(" 비밀번호 보호 "))
                                          ]),
                                          _: 1,
                                          __: [24]
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_switch, {
                                              modelValue: securityOptions.password.enabled,
                                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => securityOptions.password.enabled = $event),
                                              label: "비밀번호 보호 활성화",
                                              color: "primary",
                                              class: "mb-3"
                                            }, null, 8, ["modelValue"]),
                                            securityOptions.password.enabled ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 0,
                                              modelValue: securityOptions.password.value,
                                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => securityOptions.password.value = $event),
                                              label: "비밀번호",
                                              type: "password",
                                              variant: "outlined",
                                              density: "compact",
                                              rules: passwordRules,
                                              "prepend-icon": "mdi-key"
                                            }, null, 8, ["modelValue"])) : createCommentVNode("", true),
                                            securityOptions.password.enabled ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 1,
                                              modelValue: securityOptions.password.confirm,
                                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => securityOptions.password.confirm = $event),
                                              label: "비밀번호 확인",
                                              type: "password",
                                              variant: "outlined",
                                              density: "compact",
                                              rules: passwordConfirmRules.value,
                                              "prepend-icon": "mdi-key-check"
                                            }, null, 8, ["modelValue", "rules"])) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      variant: "outlined",
                                      class: "h-100"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "text-subtitle-1 pa-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => _cache[25] || (_cache[25] = [
                                                createTextVNode("mdi-signature")
                                              ])),
                                              _: 1,
                                              __: [25]
                                            }),
                                            _cache[26] || (_cache[26] = createTextVNode(" 디지털 서명 "))
                                          ]),
                                          _: 1,
                                          __: [26]
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_switch, {
                                              modelValue: securityOptions.signature.enabled,
                                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => securityOptions.signature.enabled = $event),
                                              label: "디지털 서명 추가",
                                              color: "primary",
                                              class: "mb-3"
                                            }, null, 8, ["modelValue"]),
                                            securityOptions.signature.enabled ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 0,
                                              modelValue: securityOptions.signature.text,
                                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => securityOptions.signature.text = $event),
                                              label: "서명 텍스트",
                                              variant: "outlined",
                                              density: "compact",
                                              placeholder: "예: ZuPDF Security System",
                                              "prepend-icon": "mdi-text"
                                            }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      variant: "outlined",
                                      class: "h-100"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "text-subtitle-1 pa-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => _cache[27] || (_cache[27] = [
                                                createTextVNode("mdi-account-lock")
                                              ])),
                                              _: 1,
                                              __: [27]
                                            }),
                                            _cache[28] || (_cache[28] = createTextVNode(" 권한 설정 "))
                                          ]),
                                          _: 1,
                                          __: [28]
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_checkbox, {
                                              modelValue: securityOptions.permissions.print,
                                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => securityOptions.permissions.print = $event),
                                              label: "인쇄 허용",
                                              color: "primary"
                                            }, null, 8, ["modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              modelValue: securityOptions.permissions.copy,
                                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => securityOptions.permissions.copy = $event),
                                              label: "텍스트 복사 허용",
                                              color: "primary"
                                            }, null, 8, ["modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              modelValue: securityOptions.permissions.edit,
                                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => securityOptions.permissions.edit = $event),
                                              label: "편집 허용",
                                              color: "primary"
                                            }, null, 8, ["modelValue"]),
                                            createVNode(_component_v_checkbox, {
                                              modelValue: securityOptions.permissions.annotate,
                                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => securityOptions.permissions.annotate = $event),
                                              label: "주석 추가 허용",
                                              color: "primary"
                                            }, null, 8, ["modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      variant: "outlined",
                                      class: "h-100"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { class: "text-subtitle-1 pa-3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              class: "mr-2",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => _cache[29] || (_cache[29] = [
                                                createTextVNode("mdi-watermark")
                                              ])),
                                              _: 1,
                                              __: [29]
                                            }),
                                            _cache[30] || (_cache[30] = createTextVNode(" 워터마크 "))
                                          ]),
                                          _: 1,
                                          __: [30]
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_switch, {
                                              modelValue: securityOptions.watermark.enabled,
                                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => securityOptions.watermark.enabled = $event),
                                              label: "워터마크 추가",
                                              color: "primary",
                                              class: "mb-3"
                                            }, null, 8, ["modelValue"]),
                                            securityOptions.watermark.enabled ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 0,
                                              modelValue: securityOptions.watermark.text,
                                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => securityOptions.watermark.text = $event),
                                              label: "워터마크 텍스트",
                                              variant: "outlined",
                                              density: "compact",
                                              placeholder: "예: ZuPDF - Confidential",
                                              "prepend-icon": "mdi-text"
                                            }, null, 8, ["modelValue"])) : createCommentVNode("", true)
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
                    }),
                    createVNode(_component_v_card, {
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h6 pa-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[31] || (_cache[31] = [
                                createTextVNode("mdi-lightning-bolt")
                              ])),
                              _: 1,
                              __: [31]
                            }),
                            _cache[32] || (_cache[32] = createTextVNode(" 빠른 보안 설정 "))
                          ]),
                          _: 1,
                          __: [32]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      block: "",
                                      variant: "outlined",
                                      color: "primary",
                                      onClick: _cache[12] || (_cache[12] = ($event) => applyQuickSecurity("basic")),
                                      disabled: !selectedFile.value || isProcessing.value,
                                      class: "mb-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { class: "mr-2" }, {
                                          default: withCtx(() => _cache[33] || (_cache[33] = [
                                            createTextVNode("mdi-shield")
                                          ])),
                                          _: 1,
                                          __: [33]
                                        }),
                                        _cache[34] || (_cache[34] = createTextVNode(" 기본 보안 "))
                                      ]),
                                      _: 1,
                                      __: [34]
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      block: "",
                                      variant: "outlined",
                                      color: "warning",
                                      onClick: _cache[13] || (_cache[13] = ($event) => applyQuickSecurity("strict")),
                                      disabled: !selectedFile.value || isProcessing.value,
                                      class: "mb-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { class: "mr-2" }, {
                                          default: withCtx(() => _cache[35] || (_cache[35] = [
                                            createTextVNode("mdi-shield-lock")
                                          ])),
                                          _: 1,
                                          __: [35]
                                        }),
                                        _cache[36] || (_cache[36] = createTextVNode(" 엄격한 보안 "))
                                      ]),
                                      _: 1,
                                      __: [36]
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      block: "",
                                      variant: "outlined",
                                      color: "info",
                                      onClick: _cache[14] || (_cache[14] = ($event) => applyQuickSecurity("business")),
                                      disabled: !selectedFile.value || isProcessing.value,
                                      class: "mb-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { class: "mr-2" }, {
                                          default: withCtx(() => _cache[37] || (_cache[37] = [
                                            createTextVNode("mdi-briefcase")
                                          ])),
                                          _: 1,
                                          __: [37]
                                        }),
                                        _cache[38] || (_cache[38] = createTextVNode(" 비즈니스용 "))
                                      ]),
                                      _: 1,
                                      __: [38]
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      block: "",
                                      variant: "outlined",
                                      color: "success",
                                      onClick: _cache[15] || (_cache[15] = ($event) => applyQuickSecurity("custom")),
                                      disabled: !selectedFile.value || isProcessing.value,
                                      class: "mb-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { class: "mr-2" }, {
                                          default: withCtx(() => _cache[39] || (_cache[39] = [
                                            createTextVNode("mdi-tune")
                                          ])),
                                          _: 1,
                                          __: [39]
                                        }),
                                        _cache[40] || (_cache[40] = createTextVNode(" 사용자 정의 "))
                                      ]),
                                      _: 1,
                                      __: [40]
                                    }, 8, ["disabled"])
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
                    }),
                    createVNode(_component_v_card, {
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, { class: "text-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              size: "large",
                              color: "primary",
                              onClick: processSecurity,
                              disabled: !selectedFile.value || isProcessing.value,
                              loading: isProcessing.value,
                              class: "px-8"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => _cache[41] || (_cache[41] = [
                                    createTextVNode("mdi-shield-check")
                                  ])),
                                  _: 1,
                                  __: [41]
                                }),
                                createTextVNode(" " + toDisplayString(isProcessing.value ? "보안 설정 중..." : "보안 설정 적용"), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    result.value ? (openBlock(), createBlock(_component_v_card, {
                      key: 0,
                      class: "mb-6",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h6 pa-4 text-success" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              class: "mr-2",
                              color: "success"
                            }, {
                              default: withCtx(() => _cache[42] || (_cache[42] = [
                                createTextVNode("mdi-check-circle")
                              ])),
                              _: 1,
                              __: [42]
                            }),
                            _cache[43] || (_cache[43] = createTextVNode(" 보안 설정 완료 "))
                          ]),
                          _: 1,
                          __: [43]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_alert, {
                              type: "success",
                              variant: "tonal",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => _cache[44] || (_cache[44] = [
                                createTextVNode(" PDF 보안 설정이 성공적으로 완료되었습니다. ")
                              ])),
                              _: 1,
                              __: [44]
                            }),
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, null, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_icon, { color: "primary" }, {
                                      default: withCtx(() => _cache[45] || (_cache[45] = [
                                        createTextVNode("mdi-file-pdf-box")
                                      ])),
                                      _: 1,
                                      __: [45]
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => _cache[46] || (_cache[46] = [
                                        createTextVNode("원본 파일")
                                      ])),
                                      _: 1,
                                      __: [46]
                                    }),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(result.value.original_filename), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_icon, { color: "success" }, {
                                      default: withCtx(() => _cache[47] || (_cache[47] = [
                                        createTextVNode("mdi-shield-check")
                                      ])),
                                      _: 1,
                                      __: [47]
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => _cache[48] || (_cache[48] = [
                                        createTextVNode("보안 설정된 파일")
                                      ])),
                                      _: 1,
                                      __: [48]
                                    }),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(result.value.secure_filename), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              block: "",
                              color: "success",
                              size: "large",
                              onClick: downloadSecurePdf,
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { class: "mr-2" }, {
                                  default: withCtx(() => _cache[49] || (_cache[49] = [
                                    createTextVNode("mdi-download")
                                  ])),
                                  _: 1,
                                  __: [49]
                                }),
                                _cache[50] || (_cache[50] = createTextVNode(" 보안 PDF 다운로드 "))
                              ]),
                              _: 1,
                              __: [50]
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    error.value ? (openBlock(), createBlock(_component_v_alert, {
                      key: 1,
                      type: "error",
                      variant: "tonal",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_alert_title, null, {
                          default: withCtx(() => _cache[51] || (_cache[51] = [
                            createTextVNode("Error Occurred")
                          ])),
                          _: 1,
                          __: [51]
                        }),
                        createTextVNode(" " + toDisplayString(error.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
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
const securePdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8569bb63"]]);
export {
  securePdf as default
};
