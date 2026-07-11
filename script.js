"use strict";

const STORAGE_KEY = "readme-studio-data-v2";
const LANGUAGE_KEY = "readme-studio-language-v2";

const translations = {
  en: {
    pageTitle: "README Studio",
    skipToEditor: "Skip to editor",
    brandSubtitle: "Open-source README builder",
    studio: "Studio",
    features: "Features",
    github: "GitHub",
    interfaceLanguage: "Interface language",
    openSource: "Free and open source",
    heroTitle: "Build a professional README in minutes",
    heroDescription:
      "Write your project details and get a clean Markdown file with a live preview, local auto-save, and one-click export.",
    startCreating: "Start creating",
    viewSource: "View source",
    editor: "Editor",
    projectDetails: "Project details",
    editorDescription:
      "Complete the form and your README will update automatically.",
    optional: "Optional",
    importRepository: "Import repository",
    githubPublicRepos: "Public GitHub repositories",
    importDescription:
      "Paste a public GitHub repository URL to import its basic details.",
    repositoryUrl: "Repository URL",
    repositoryPlaceholder: "https://github.com/owner/repository",
    import: "Import",
    importing: "Importing...",
    clearAll: "Clear all",
    content: "Content",
    readmeInformation: "README information",
    autosaved: "Auto-saved",
    projectName: "Project name",
    projectNamePlaceholder: "README Studio",
    projectNameHint: "Use the official name of your project.",
    description: "Description",
    descriptionPlaceholder:
      "Describe what your project does and why it exists...",
    descriptionHint: "Keep it clear, specific, and useful.",
    version: "Version",
    versionPlaceholder: "1.0.0",
    license: "License",
    noLicense: "No license",
    programmingLanguage: "Programming language",
    languagePlaceholder: "JavaScript",
    repository: "Repository",
    installation: "Installation",
    installationPlaceholder: "npm install",
    usage: "Usage",
    usagePlaceholder: "Explain how to use the project...",
    featuresLabel: "Features",
    featuresPlaceholder: "One feature per line",
    featuresHint: "Add one feature per line.",
    author: "Author",
    authorPlaceholder: "Your name",
    preview: "Preview",
    livePreview: "Live README",
    live: "Live",
    copyMarkdown: "Copy Markdown",
    copied: "Copied",
    downloadReadme: "Download README.md",
    everythingYouNeed: "Everything you need",
    featureLiveTitle: "Live preview",
    featureLiveDescription: "See your README update while you type.",
    featureSaveTitle: "Local auto-save",
    featureSaveDescription: "Your work stays saved in your browser.",
    featureExportTitle: "Fast export",
    featureExportDescription:
      "Copy Markdown or download a ready README.md file.",
    footerText: "Built for open-source developers.",
    sourceCode: "Source code",
    emptyPreview: "Enter a project name to begin creating your README.",
    savedNotice: "Your changes were saved locally.",
    clearedNotice: "All fields were cleared.",
    importedNotice: "Repository details were imported successfully.",
    invalidGithubUrl:
      "Enter a valid GitHub repository URL, such as https://github.com/owner/repository.",
    repositoryNotFound:
      "The repository was not found or it is private.",
    githubRateLimit:
      "GitHub API request limit has been reached. Please wait and try again later.",
    githubAccessDenied:
      "GitHub denied access to this repository.",
    importFailed:
      "The repository could not be imported. Check the URL and your connection.",
    projectNameRequired:
      "Enter a project name before downloading the README.",
    copyFailed:
      "Automatic copying failed. Select and copy the Markdown manually.",
    sectionAbout: "About",
    sectionFeatures: "Features",
    sectionInstallation: "Installation",
    sectionUsage: "Usage",
    sectionRepository: "Repository",
    sectionVersion: "Version",
    sectionBuiltWith: "Built with",
    sectionLicense: "License",
    sectionAuthor: "Author",
    defaultDescription:
      "A project README created with README Studio."
  },

  ar: {
    pageTitle: "استوديو README",
    skipToEditor: "انتقل إلى المحرر",
    brandSubtitle: "منشئ README مفتوح المصدر",
    studio: "الاستوديو",
    features: "المميزات",
    github: "GitHub",
    interfaceLanguage: "لغة الواجهة",
    openSource: "مجاني ومفتوح المصدر",
    heroTitle: "أنشئ ملف README احترافيًا خلال دقائق",
    heroDescription:
      "أدخل تفاصيل مشروعك واحصل على ملف Markdown منظم مع معاينة مباشرة وحفظ محلي وتصدير سريع.",
    startCreating: "ابدأ الإنشاء",
    viewSource: "عرض المصدر",
    editor: "المحرر",
    projectDetails: "تفاصيل المشروع",
    editorDescription:
      "أكمل النموذج وسيتم تحديث ملف README تلقائيًا.",
    optional: "اختياري",
    importRepository: "استيراد المستودع",
    githubPublicRepos: "مستودعات GitHub العامة",
    importDescription:
      "ألصق رابط مستودع GitHub عام لاستيراد بياناته الأساسية.",
    repositoryUrl: "رابط المستودع",
    repositoryPlaceholder: "https://github.com/owner/repository",
    import: "استيراد",
    importing: "جارٍ الاستيراد...",
    clearAll: "مسح الكل",
    content: "المحتوى",
    readmeInformation: "معلومات README",
    autosaved: "محفوظ تلقائيًا",
    projectName: "اسم المشروع",
    projectNamePlaceholder: "استوديو README",
    projectNameHint: "استخدم الاسم الرسمي لمشروعك.",
    description: "الوصف",
    descriptionPlaceholder:
      "اشرح وظيفة مشروعك وسبب إنشائه بصورة واضحة...",
    descriptionHint: "اجعل الوصف واضحًا ومحددًا ومفيدًا.",
    version: "الإصدار",
    versionPlaceholder: "1.0.0",
    license: "الترخيص",
    noLicense: "دون ترخيص",
    programmingLanguage: "لغة البرمجة",
    languagePlaceholder: "JavaScript",
    repository: "المستودع",
    installation: "التثبيت",
    installationPlaceholder: "npm install",
    usage: "الاستخدام",
    usagePlaceholder: "اشرح طريقة استخدام المشروع...",
    featuresLabel: "المميزات",
    featuresPlaceholder: "ميزة واحدة في كل سطر",
    featuresHint: "أضف ميزة واحدة في كل سطر.",
    author: "المؤلف",
    authorPlaceholder: "اسمك",
    preview: "المعاينة",
    livePreview: "ملف README المباشر",
    live: "مباشر",
    copyMarkdown: "نسخ Markdown",
    copied: "تم النسخ",
    downloadReadme: "تنزيل README.md",
    everythingYouNeed: "كل ما تحتاج إليه",
    featureLiveTitle: "معاينة مباشرة",
    featureLiveDescription: "شاهد تحديث ملف README أثناء الكتابة.",
    featureSaveTitle: "حفظ محلي تلقائي",
    featureSaveDescription: "يبقى عملك محفوظًا داخل متصفحك.",
    featureExportTitle: "تصدير سريع",
    featureExportDescription:
      "انسخ Markdown أو نزّل ملف README.md جاهزًا.",
    footerText: "صُمم لمطوري المصادر المفتوحة.",
    sourceCode: "الكود المصدري",
    emptyPreview: "أدخل اسم المشروع لبدء إنشاء ملف README.",
    savedNotice: "تم حفظ تعديلاتك محليًا.",
    clearedNotice: "تم مسح جميع الحقول.",
    importedNotice: "تم استيراد بيانات المستودع بنجاح.",
    invalidGithubUrl:
      "أدخل رابط مستودع GitHub صالحًا، مثل https://github.com/owner/repository.",
    repositoryNotFound:
      "لم يتم العثور على المستودع، أو أنه مستودع خاص.",
    githubRateLimit:
      "تم بلوغ الحد المسموح لطلبات GitHub API. انتظر قليلًا ثم حاول مجددًا.",
    githubAccessDenied:
      "رفض GitHub الوصول إلى هذا المستودع.",
    importFailed:
      "تعذر استيراد المستودع. تحقق من الرابط والاتصال.",
    projectNameRequired:
      "أدخل اسم المشروع قبل تنزيل ملف README.",
    copyFailed:
      "تعذر النسخ تلقائيًا. حدد نص Markdown وانسخه يدويًا.",
    sectionAbout: "نبذة",
    sectionFeatures: "المميزات",
    sectionInstallation: "التثبيت",
    sectionUsage: "الاستخدام",
    sectionRepository: "المستودع",
    sectionVersion: "الإصدار",
    sectionBuiltWith: "بُني باستخدام",
    sectionLicense: "الترخيص",
    sectionAuthor: "المؤلف",
    defaultDescription:
      "ملف README لمشروع أُنشئ باستخدام استوديو README."
  }
};

const fieldIds = [
  "projectName",
  "description",
  "version",
  "license",
  "programmingLanguage",
  "repository",
  "installation",
  "usage",
  "featuresInput",
  "author"
];

const elements = {
  html: document.documentElement,
  form: document.getElementById("readmeForm"),
  language: document.getElementById("interfaceLanguage"),
  repositoryUrl: document.getElementById("repositoryUrl"),
  importButton: document.getElementById("importButton"),
  clearButton: document.getElementById("clearButton"),
  copyButton: document.getElementById("copyButton"),
  downloadButton: document.getElementById("downloadButton"),
  markdownPreview: document.getElementById("markdownPreview"),
  notice: document.getElementById("notice"),
  projectNameCount: document.getElementById("projectNameCount"),
  descriptionCount: document.getElementById("descriptionCount"),
  menuButton: document.getElementById("menuButton"),
  navigationLinks: document.getElementById("navigationLinks")
};

let currentLanguage = "en";
let noticeTimer = null;
let saveTimer = null;

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function getField(id) {
  return document.getElementById(id);
}

function getFormData() {
  return fieldIds.reduce((data, id) => {
    const field = getField(id);
    data[id] = field ? field.value.trim() : "";
    return data;
  }, {});
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeMarkdown(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/([`*_{}[\]()#+.!|>~-])/g, "\\$1");
}

function sanitizeUrl(value = "") {
  try {
    const url = new URL(String(value).trim());

    if (!["http:", "https:"].includes(url.protocol)) {
      return "";
    }

    return url.href;
  } catch {
    return "";
  }
}

function normalizeMultiline(value = "") {
  return String(value).replace(/\r\n?/g, "\n").trim();
}

function getFeatureLines(value = "") {
  return normalizeMultiline(value)
    .split("\n")
    .map((line) => line.trim().replace(/^[-*+]\s*/, ""))
    .filter(Boolean);
}

function buildMarkdown() {
  const data = getFormData();
  const projectName = data.projectName || "Project Name";
  const safeRepository = sanitizeUrl(data.repository);
  const features = getFeatureLines(data.featuresInput);
  const lines = [`# ${escapeMarkdown(projectName)}`, ""];

  lines.push(
    data.description
      ? normalizeMultiline(data.description)
      : t("defaultDescription"),
    ""
  );

  if (data.version) {
    lines.push(
      `## ${t("sectionVersion")}`,
      "",
      escapeMarkdown(data.version),
      ""
    );
  }

  if (features.length) {
    lines.push(`## ${t("sectionFeatures")}`, "");

    features.forEach((feature) => {
      lines.push(`- ${escapeMarkdown(feature)}`);
    });

    lines.push("");
  }

  if (data.installation) {
    lines.push(
      `## ${t("sectionInstallation")}`,
      "",
      "```bash",
      normalizeMultiline(data.installation),
      "```",
      ""
    );
  }

  if (data.usage) {
    lines.push(
      `## ${t("sectionUsage")}`,
      "",
      normalizeMultiline(data.usage),
      ""
    );
  }

  if (safeRepository) {
    lines.push(
      `## ${t("sectionRepository")}`,
      "",
      `[${safeRepository}](${safeRepository})`,
      ""
    );
  }

  if (data.programmingLanguage) {
    lines.push(
      `## ${t("sectionBuiltWith")}`,
      "",
      escapeMarkdown(data.programmingLanguage),
      ""
    );
  }

  if (data.license && data.license !== "None") {
    const licenseText =
      currentLanguage === "ar"
        ? `هذا المشروع مرخص بموجب ترخيص ${escapeMarkdown(data.license)}.`
        : `This project is licensed under the ${escapeMarkdown(data.license)} license.`;

    lines.push(`## ${t("sectionLicense")}`, "", licenseText, "");
  }

  if (data.author) {
    lines.push(
      `## ${t("sectionAuthor")}`,
      "",
      escapeMarkdown(data.author),
      ""
    );
  }

  return `${lines.join("\n").trim()}\n`;
}

function buildPreviewHtml() {
  const data = getFormData();

  if (!data.projectName) {
    return `
      <div class="empty-preview">
        <p>${escapeHtml(t("emptyPreview"))}</p>
      </div>
    `;
  }

  const safeRepository = sanitizeUrl(data.repository);
  const features = getFeatureLines(data.featuresInput);
  let html = `<h1>${escapeHtml(data.projectName)}</h1>`;

  html += `
    <p>
      ${escapeHtml(
        data.description || t("defaultDescription")
      ).replaceAll("\n", "<br>")}
    </p>
  `;

  if (data.version) {
    html += `
      <h2>${escapeHtml(t("sectionVersion"))}</h2>
      <p>${escapeHtml(data.version)}</p>
    `;
  }

  if (features.length) {
    html += `<h2>${escapeHtml(t("sectionFeatures"))}</h2><ul>`;

    features.forEach((feature) => {
      html += `<li>${escapeHtml(feature)}</li>`;
    });

    html += "</ul>";
  }

  if (data.installation) {
    html += `
      <h2>${escapeHtml(t("sectionInstallation"))}</h2>
      <pre><code>${escapeHtml(
        normalizeMultiline(data.installation)
      )}</code></pre>
    `;
  }

  if (data.usage) {
    html += `
      <h2>${escapeHtml(t("sectionUsage"))}</h2>
      <p>${escapeHtml(
        normalizeMultiline(data.usage)
      ).replaceAll("\n", "<br>")}</p>
    `;
  }

  if (safeRepository) {
    html += `
      <h2>${escapeHtml(t("sectionRepository"))}</h2>
      <p>
        <a
          href="${escapeHtml(safeRepository)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(safeRepository)}
        </a>
      </p>
    `;
  }

  if (data.programmingLanguage) {
    html += `
      <h2>${escapeHtml(t("sectionBuiltWith"))}</h2>
      <p>${escapeHtml(data.programmingLanguage)}</p>
    `;
  }

  if (data.license && data.license !== "None") {
    html += `
      <h2>${escapeHtml(t("sectionLicense"))}</h2>
      <p>${escapeHtml(data.license)}</p>
    `;
  }

  if (data.author) {
    html += `
      <h2>${escapeHtml(t("sectionAuthor"))}</h2>
      <p>${escapeHtml(data.author)}</p>
    `;
  }

  return html;
}

function updatePreview() {
  if (elements.markdownPreview) {
    elements.markdownPreview.innerHTML = buildPreviewHtml();
  }
}

function updateCounters() {
  const projectName = getField("projectName");
  const description = getField("description");

  if (elements.projectNameCount && projectName) {
    elements.projectNameCount.textContent =
      `${projectName.value.length} / 100`;
  }

  if (elements.descriptionCount && description) {
    elements.descriptionCount.textContent =
      `${description.value.length} / 500`;
  }
}

function saveData() {
  try {
    const payload = {
      form: getFormData(),
      repositoryUrl: elements.repositoryUrl?.value.trim() || ""
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Continue operating if browser storage is unavailable.
  }
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveData, 180);
}

function loadData() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);

    if (!rawData) {
      return;
    }

    const saved = JSON.parse(rawData);

    if (!saved || typeof saved !== "object") {
      return;
    }

    fieldIds.forEach((id) => {
      const field = getField(id);

      if (field && typeof saved.form?.[id] === "string") {
        field.value = saved.form[id];
      }
    });

    if (
      elements.repositoryUrl &&
      typeof saved.repositoryUrl === "string"
    ) {
      elements.repositoryUrl.value = saved.repositoryUrl;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function showNotice(message, type = "success", timeout = 3200) {
  if (!elements.notice) {
    return;
  }

  window.clearTimeout(noticeTimer);

  elements.notice.textContent = message;
  elements.notice.className = `notice ${type}`;
  elements.notice.hidden = false;

  noticeTimer = window.setTimeout(() => {
    elements.notice.hidden = true;
  }, timeout);
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";

  elements.html.lang = currentLanguage;
  elements.html.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  if (elements.language) {
    elements.language.value = currentLanguage;
  }

  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[currentLanguage]?.[key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (translations[currentLanguage]?.[key]) {
        element.placeholder = translations[currentLanguage][key];
      }
    });

  try {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  } catch {
    // Continue if local storage is blocked.
  }

  updatePreview();
}

function parseGitHubRepositoryUrl(value) {
  const input = String(value).trim();

  if (!input) {
    return null;
  }

  try {
    let normalized = input;

    normalized = normalized
      .replace(/^git\+https?:\/\//i, "https://")
      .replace(/^git:\/\/github\.com\//i, "https://github.com/")
      .replace(/^git@github\.com:/i, "https://github.com/");

    if (!/^https?:\/\//i.test(normalized)) {
      normalized = `https://${normalized}`;
    }

    const url = new URL(normalized);

    if (!["github.com", "www.github.com"].includes(url.hostname.toLowerCase())) {
      return null;
    }

    const parts = url.pathname
      .replace(/\.git\/?$/i, "")
      .split("/")
      .filter(Boolean);

    if (parts.length !== 2) {
      return null;
    }

    const owner = decodeURIComponent(parts[0]).trim();
    const repository = decodeURIComponent(parts[1]).trim();

    const validSegment = /^[A-Za-z0-9_.-]+$/;

    if (
      !owner ||
      !repository ||
      !validSegment.test(owner) ||
      !validSegment.test(repository)
    ) {
      return null;
    }

    return {
      owner,
      repository,
      canonicalUrl:
        `https://github.com/${encodeURIComponent(owner)}/` +
        `${encodeURIComponent(repository)}`
    };
  } catch {
    return null;
  }
}

function getGitHubError(response) {
  if (response.status === 404) {
    return "NOT_FOUND";
  }

  if (response.status === 403 || response.status === 429) {
    const remaining = response.headers.get("x-ratelimit-remaining");

    if (response.status === 429 || remaining === "0") {
      return "RATE_LIMIT";
    }

    return "ACCESS_DENIED";
  }

  return "REQUEST_FAILED";
}

async function importRepository() {
  const parsed = parseGitHubRepositoryUrl(
    elements.repositoryUrl?.value || ""
  );

  if (!parsed) {
    showNotice(t("invalidGithubUrl"), "error");

    if (elements.repositoryUrl) {
      elements.repositoryUrl.focus();
    }

    return;
  }

  elements.importButton.disabled = true;
  elements.importButton.textContent = t("importing");

  try {
    const endpoint =
      `https://api.github.com/repos/` +
      `${encodeURIComponent(parsed.owner)}/` +
      `${encodeURIComponent(parsed.repository)}`;

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });

    if (!response.ok) {
      throw new Error(getGitHubError(response));
    }

    const repository = await response.json();

    getField("projectName").value =
      repository.name || parsed.repository;

    getField("description").value =
      repository.description || "";

    getField("repository").value =
      repository.html_url || parsed.canonicalUrl;

    getField("programmingLanguage").value =
      repository.language || "";

    const licenseField = getField("license");
    const licenseId = repository.license?.spdx_id;

    if (
      licenseField &&
      licenseId &&
      (!licenseField.value || licenseField.value === "None")
    ) {
      const supportedLicenses = Array.from(
        licenseField.options
      ).map((option) => option.value);

      if (supportedLicenses.includes(licenseId)) {
        licenseField.value = licenseId;
      }
    }

    elements.repositoryUrl.value =
      repository.html_url || parsed.canonicalUrl;

    updateCounters();
    updatePreview();
    saveData();
    showNotice(t("importedNotice"), "success");
  } catch (error) {
    const messages = {
      NOT_FOUND: t("repositoryNotFound"),
      RATE_LIMIT: t("githubRateLimit"),
      ACCESS_DENIED: t("githubAccessDenied"),
      REQUEST_FAILED: t("importFailed")
    };

    showNotice(
      messages[error.message] || t("importFailed"),
      "error",
      5000
    );
  } finally {
    elements.importButton.disabled = false;
    elements.importButton.textContent = t("import");
  }
}

async function copyMarkdown() {
  const markdown = buildMarkdown();

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(markdown);
    } else {
      const temporaryTextarea = document.createElement("textarea");

      temporaryTextarea.value = markdown;
      temporaryTextarea.setAttribute("readonly", "");
      temporaryTextarea.style.position = "fixed";
      temporaryTextarea.style.inset = "0 auto auto 0";
      temporaryTextarea.style.opacity = "0";
      temporaryTextarea.style.pointerEvents = "none";

      document.body.appendChild(temporaryTextarea);
      temporaryTextarea.focus();
      temporaryTextarea.select();

      const copied = document.execCommand("copy");
      temporaryTextarea.remove();

      if (!copied) {
        throw new Error("COPY_FAILED");
      }
    }

    elements.copyButton.textContent = t("copied");

    window.setTimeout(() => {
      elements.copyButton.textContent = t("copyMarkdown");
    }, 1600);
  } catch {
    showNotice(t("copyFailed"), "error");
  }
}

function slugify(value) {
  const slug = String(value)
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "Project";
}

function downloadReadme() {
  const projectName = getField("projectName")?.value.trim();

  if (!projectName) {
    showNotice(t("projectNameRequired"), "error");
    getField("projectName")?.focus();
    return;
  }

  const markdown = buildMarkdown();
  const blob = new Blob([markdown], {
    type: "text/markdown;charset=utf-8"
  });

  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const fileName = `${slugify(projectName)}-README.md`;

  link.href = downloadUrl;
  link.download = fileName;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(downloadUrl);
  }, 1000);
}

function clearAll() {
  elements.form.reset();

  const licenseField = getField("license");

  if (licenseField) {
    const hasMit = Array.from(licenseField.options).some(
      (option) => option.value === "MIT"
    );

    if (hasMit) {
      licenseField.value = "MIT";
    }
  }

  if (elements.repositoryUrl) {
    elements.repositoryUrl.value = "";
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Continue if local storage is unavailable.
  }

  updateCounters();
  updatePreview();
  showNotice(t("clearedNotice"), "success");
}

function closeMobileMenu() {
  if (!elements.navigationLinks || !elements.menuButton) {
    return;
  }

  elements.navigationLinks.classList.remove("open");
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  if (!elements.navigationLinks || !elements.menuButton) {
    return;
  }

  const isOpen = elements.navigationLinks.classList.toggle("open");

  elements.menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
}

function handleFormInput() {
  updateCounters();
  updatePreview();
  scheduleSave();
}

function initializeEvents() {
  elements.form.addEventListener("input", handleFormInput);
  elements.form.addEventListener("change", handleFormInput);

  elements.repositoryUrl.addEventListener("input", scheduleSave);

  elements.repositoryUrl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      importRepository();
    }
  });

  elements.language.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    closeMobileMenu();
  });

  elements.importButton.addEventListener("click", importRepository);
  elements.clearButton.addEventListener("click", clearAll);
  elements.copyButton.addEventListener("click", copyMarkdown);
  elements.downloadButton.addEventListener("click", downloadReadme);

  if (elements.menuButton) {
    elements.menuButton.addEventListener("click", toggleMobileMenu);
  }

  if (elements.navigationLinks) {
    elements.navigationLinks
      .querySelectorAll("a")
      .forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });
  }

  document.addEventListener("click", (event) => {
    if (!elements.navigationLinks || !elements.menuButton) {
      return;
    }

    const clickedInsideNav =
      elements.navigationLinks.contains(event.target) ||
      elements.menuButton.contains(event.target);

    if (!clickedInsideNav) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMobileMenu();
    }
  });
}

function validateRequiredElements() {
  const requiredElements = [
    ["readmeForm", elements.form],
    ["interfaceLanguage", elements.language],
    ["repositoryUrl", elements.repositoryUrl],
    ["importButton", elements.importButton],
    ["clearButton", elements.clearButton],
    ["copyButton", elements.copyButton],
    ["downloadButton", elements.downloadButton],
    ["markdownPreview", elements.markdownPreview]
  ];

  const missing = requiredElements
    .filter(([, element]) => !element)
    .map(([id]) => id);

  if (missing.length) {
    console.error(
      `README Studio initialization failed. Missing elements: ${missing.join(", ")}`
    );

    return false;
  }

  return true;
}

function initialize() {
  if (!validateRequiredElements()) {
    return;
  }

  let savedLanguage = null;

  try {
    savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  } catch {
    savedLanguage = null;
  }

  const browserLanguage =
    navigator.language?.toLowerCase().startsWith("ar")
      ? "ar"
      : "en";

  const initialLanguage =
    savedLanguage && translations[savedLanguage]
      ? savedLanguage
      : browserLanguage;

  loadData();
  setLanguage(initialLanguage);
  updateCounters();
  updatePreview();
  initializeEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
