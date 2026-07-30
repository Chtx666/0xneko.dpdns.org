import { defineAstroPaperConfig } from "@/types/config.ts";

export default defineAstroPaperConfig({
  site: {
    url: "https://0xneko.dpdns.org/",
    title: "0xNEKO - 一個嶄新的博客",
    description: "它做你覺得它會做的事。",
    author: "Chtx666",
    profile: "你需要找到我的時候，會出現的。",
    ogImage: "ogImage.png",
    lang: "zh-TW",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Chtx666" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
    { name: "qq", url: "https://connect.qq.com/widget/shareqq/index.html?url=" },
  ],
});