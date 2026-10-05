# 网站视觉改造审阅记录

日期：2026-10-04。范围：第一轮现代简约视觉改造；全部改动留在本地，未提交或推送 GitHub。

## 网站结构与现有功能

这是直接包含 Minimal Mistakes 4.26.2 主题源码的 Jekyll 网站，不依赖远程主题文件。

| 位置 | 用途 |
| --- | --- |
| `_config.yml`、`Gemfile`、主题 gemspec | 网站配置、Ruby/Jekyll 依赖和插件 |
| `index.html`、`_pages/` | 英文首页、中文首页、研究/学术/个人博客列表、分类归档、简历 |
| `_posts/` | 19 篇中英文博客和研究文章；本轮未修改任何文章 |
| `_data/navigation.yml`、`authors.yml`、`ui-text.yml` | 主导航、作者资料和界面文案 |
| `_layouts/` | 首页、归档、文章等页面骨架 |
| `_includes/` | 导航、作者侧栏、文章列表、目录、搜索、页脚等组件 |
| `assets/css/main.scss`、`_sass/` | 样式入口、主题和自定义样式 |
| `assets/images/`、`assets/js/`、`assets/pdf/` | 图片、交互脚本、研究/简历 PDF |
| `_site/`、`.jekyll-cache/` | 本地构建产物与缓存；不属于发布源代码 |

主要功能：作者侧栏与内容双栏布局、响应式菜单、移动端 Follow 菜单、Lunr 搜索、深浅色切换和偏好记忆、中英文内容、MathJax 数学公式、照片画廊、地图、折叠目录/内容、文章大图、代码复制。

配置启用的插件：`jekyll-paginate-v2`、`jekyll-sitemap`、`jekyll-gist`、`jekyll-feed`、`jekyll-include-cache`。分页设置为每页 4 篇，但当前首页展示个人介绍和 News，未包含文章分页循环。评论、分享、相关文章和统计分析当前关闭。

## 本轮每个改动点

| 文件 | 改动与目的 |
| --- | --- |
| `_sass/minimal-mistakes/_modern.scss`（新增） | 将本轮视觉覆盖集中放在最后一层，方便审阅与调整，保留原主题及历史自定义样式文件。 |
| 同上：配色 | 使用浅灰绿背景、白色表面、深色正文和蓝绿色强调色；深色模式具有对应配色、边框与阴影。 |
| 同上：排版 | 调整字号、标题粗细、段落行距与阅读留白；桌面正文不再放大到 22px。 |
| 同上：布局 | 列表页利用原先保留的右侧空白；统一内容最大宽度及桌面/手机边距。文章的宽屏、数学与画廊布局仍由原模板负责。 |
| 同上：导航与页脚 | 页眉和普通页脚改为干净的纯色表面、细边框；保留 Chicago 文章原有的专属照片页脚。搜索和主题按钮变为圆形。 |
| 同上：作者资料 | 增加圆角、细边框、轻阴影与留白；保留你原创的蒙德里安背景，增强遮罩以降低视觉干扰；取消资料卡整体透明度，保持文字和头像清晰。 |
| 同上：首页 | 个人介绍放入柔和的圆角表面；调整照片间距和手机排布；细化分隔线，统一 News 与实习提示样式。 |
| 同上：标签导航 | Travel、Minimax 等标签导航改为自动换行的胶囊按钮，保留原有锚点和数量。 |
| 同上：文章卡片 | 20px 圆角（手机 16px）、细边框、轻阴影；悬停轻微上移并淡入相关图片。文字上方有渐变遮罩；摘要里的装饰文字用 CSS 统一为次要文字色，改善深浅色模式的对比。 |
| 同上：交互可用性 | 键盘聚焦同样显示图片，添加可见焦点；触屏无需悬停即可阅读和点击内容；修正移动端 Follow 菜单的层级与表面、深色导航菜单悬停色；尊重减少动画偏好，打印时移除背景图片和阴影。 |
| `assets/css/main.scss` | 在主题导入前统一系统无衬线字体栈，包含中文字体回退；最后导入新样式。未增加远程字体下载。 |
| `_layouts/single.html` | 移除原来对整个文章页面强制使用 Times New Roman/宋体的内联规则。中文字体别名在新样式中保留；数学与代码的专门字体未修改。 |
| `_layouts/archive.html` | 中英文首页的可见主标题改为作者名字，并显示原有副标题；页面配置标题、正文和 SEO 标题保留。其他归档标题保留。 |
| `_includes/archive-single.html` | 为统一的文章列表组件添加卡片、装饰图片、正文和摘要容器。标题、链接、元信息、grid teaser 与原有摘要转换/截断逻辑保留。 |
| `_data/post-card-images.yml`（新增） | 集中管理列表背景图。使用文章 slug 匹配中英文旅行文章，共用相应的轻量封面；研究/学术文章使用数学几何图。 |
| `assets/images/cards/`（新增） | 5 张旅行封面预览 JPG 和 2 张原创 SVG：`default.svg` 等高线图、`mathematics.svg` 数学几何图。不覆盖任何原图片。 |
| `_includes/masthead.html` | 搜索与主题按钮采用内联 SVG；主题按钮增加按钮类型、状态及读屏标签。无需图标字体即可显示这两个图标。 |
| `assets/js/my_script_3.js` | 与新 SVG 按钮配合，更新深浅色状态和读屏标签；继续使用已有 `darkMode` 偏好，支持系统主题变化与存储不可用的情况。 |
| `assets/js/my_script_1.js` | 修复原脚本在 jQuery 加载前使用 `$` 的错误；移动端 Follow 菜单改用原生事件，避免和主题的旧处理器重复切换，支持点空白处或 Escape 关闭，并同步展开状态。 |
| `assets/js/_main.js`、`main.min.js` | 为主题标题锚点功能增加正文容器存在检查，修复首页/归档页没有 `.page__content` 时的错误；源码和实际加载的脚本同步。 |
| `_config.yml` | `masthead_title` 设为简洁的 `Yikun Li`（站点完整标题保留）；将此审阅文件加入 Jekyll 排除列表，避免它成为公开页面。 |
| `DESIGN_REVIEW.md`（本文件，新增） | 记录网站结构、全部改动、素材替换方式、预览方法和验证结果。 |

保留：所有 `_posts/`、`_pages/`、`index.html`、原有导航链接和素材文件均未改动。开始任务前已有的 `.gitignore` 修改也未改动。

## 背景图片与后续替换

图片淡入通过装饰层透明度实现，过渡约 550ms，不新增文章卡片 JavaScript。卡片初始为纯色；悬停/聚焦时显示图片和渐变遮罩。摘要本来已有的图片仍保留。

选图优先级：文章 `card_image` → `header.teaser` → `my_wide_image.src` → `header.image` → 数据文件映射 → `default.svg`。若已有大图与映射的 `source` 相同，自动采用轻量缩略图；显式设置 `card_image` 或 teaser 时直接尊重该设置。

已有旅行封面：Chicago、Alaska、Japan、Guatemala、Thailand。Seattle 与麻将文章暂用等高线默认图；研究与学术文章使用数学图。照片预览最长边 1200px，总计约 519KiB；Chicago 保留全景比例，其他为 1200×720。两张 SVG 各约 1.6KB。

以后可以在某篇文章的 YAML front matter 增加：

```yaml
card_image: /assets/images/cards/your-image.jpg
```

也可以只修改 `_data/post-card-images.yml` 中对应 slug 的 `image`，不改博客文件。旅行图的映射同时含 `source`，替换该 `image` 即可。slug 使用文件名去掉日期和扩展名后的原大小写，例如 `Japan-Tour-Plan_EN`。

## 本地预览与环境说明

预览地址：<http://127.0.0.1:4000/>。

本机沙盒中的 Ruby 对用户目录下的绝对路径 glob 返回空结果，导致原命令出现 `Jekyll::Filters::URLFilters` 加载错误。临时 launcher 仅在当前进程修正 glob，不修改 gem、依赖和网站配置，位于已被 Git 忽略的 `.jekyll-cache/runtime/jekyll-local.rb`。

```powershell
# 本次运行的服务器关闭自动监听；源文件修改后手动构建。
bundle exec ruby .jekyll-cache/runtime/jekyll-local.rb build
bundle exec ruby .jekyll-cache/runtime/jekyll-local.rb serve --port 4000 --no-watch

# 普通环境继续使用原命令。
bundle exec jekyll serve --port 4000
```

浏览器连接工具没有可用会话，因此本轮采用专用临时配置的本地无头 Edge 检查页面；不使用你的浏览器个人资料。脚本、截图和测试报告位于被 Git 忽略的 `.jekyll-cache/visual-review/`。

## 验证结果

- Jekyll 构建成功；JavaScript 语法检查和 `git diff --check` 通过。原有 Sass 弃用警告与“首页未启用分页”的提示不影响构建。
- 已检查中英文首页、个人/学术/研究列表的桌面与手机画面（1440×1000、390×844），列表和首页未出现横向溢出或本地图片缺失。
- 卡片桌面圆角 20px、手机 16px；背景图片在静止时透明度为 0，悬停和键盘聚焦时为 1；实际旅行照片淡入也已检查。减少动画偏好生效，触屏保持无需悬停的可读状态。
- 深浅色按钮状态、标签和刷新后的偏好记忆通过；移动端导航、Follow 单次展开/点空白关闭/Escape 关闭、搜索结果与 Escape 退出通过。
- 最后一轮确认 Follow 菜单位于卡片上方且具有不透明背景，深色导航悬停文字与背景对比正常；真实 Tab 键可聚焦文章链接，显示 2px 焦点边框并淡入图片。
- 实际点击卡片成功进入 Japan 旅行文章与 exponential-regression 研究文章；旅行目录可正常展开。
- 最终首页与个人列表检查未出现 JavaScript 控制台错误；本轮修复了原有的两类脚本错误。
- `_posts/`、`_pages/`、`index.html` 与导航数据的 Git diff 为空；原图片文件保留；此审阅文件未出现在 `_site/` 中。

自动检查为保持一致性屏蔽了远程 CDN，因此外部图标字体、MathJax 和远程画廊资源没有做网络加载验证；原有引用均保留。Japan 英文旅行文章已有 6 个空图片占位和 1 个不存在的 `2025-06-22 110128.webp` 引用，本轮没有修改这些博客内容。

本地截图：

- [首页（桌面）](.jekyll-cache/visual-review/final-home-desktop.png)
- [首页（手机）](.jekyll-cache/visual-review/final-home-mobile.png)
- [旅行卡片悬停效果](.jekyll-cache/visual-review/final-photo-hover.png)
- [深色卡片效果](.jekyll-cache/visual-review/final-photo-hover-dark.png)

完整自动检查证据保存在同目录的 `before-report.json`、`after-report.json`、`detail-report.json`、`final-report.json`、`smoke-report.json`、`final-css-report.json` 和 `keyboard-report.json`，仅留在本地。

## 可留到下一轮的方向

1. 为 Seattle、麻将和每篇研究文章挑选更具体的卡片封面。
2. 若希望不同设备字体完全一致，可以加入小体积、许可明确的自托管字体。
3. 统一长旅行文章中散落的内联标题、色彩和图片排版；这涉及更多细节，留待你确认首轮风格后处理。

## 后续改动：浅色、深色、跟随系统三种模式

根据后续要求，将右上角原先的深浅色按钮改为三选一菜单。界面沿用网站的英文文案：**Light、Dark、Follow system**。按钮分别显示太阳、月亮、显示器图标，勾选标记表示当前模式。

| 文件 | 本次改动 |
| --- | --- |
| `_includes/masthead.html` | 增加三种主题选项、系统模式图标和单选菜单语义；按钮维护菜单展开状态及当前主题标签。 |
| `assets/js/my_script_3.js` | 保存 `themeMode`（`light`、`dark`、`system`）；兼容旧 `darkMode` 偏好。新访客默认跟随系统；系统变化时实时更新，手动模式保持固定。同步原有 `body.dark-mode` 样式、原生控件配色和选中状态；支持菜单键盘操作、Escape/点空白关闭及其他标签页偏好变更。 |
| `_sass/minimal-mistakes/_modern.scss` | 添加主题菜单的圆角、表面、阴影、选中勾和悬停状态；按钮图标按选择的模式显示，手机菜单在屏幕范围内展开。 |
| `DESIGN_REVIEW.md` | 补充本次主题功能、兼容方式和验收结果。 |

选择 **Follow system** 后会清除旧的手动 `darkMode` 值，避免旧偏好阻止自动切换；新的 `themeMode=system` 保留当前选择。选择 Light 或 Dark 时会同时更新旧偏好，兼容此前的网站版本。存储不可用时，当前页面仍可切换并实时跟随系统。

验证：Jekyll 构建、JavaScript 语法检查和 diff 检查通过。独立本地 Edge 的 **27 项主题行为检查**通过，包括系统深浅色实时变化、手动覆盖系统、刷新与跨页面记忆、旧偏好兼容、方向键/Enter/Home/End/Tab/Escape、菜单外点击关闭、320px/390px 手机菜单及存储不可用。无 JavaScript 错误或横向溢出。

本次使用临时自动关闭的测试端口，没有额外启动 4000 端口服务，也未提交或推送 GitHub。

本地证据：`.jekyll-cache/visual-review/theme-behavior-report.json`、`theme-report.json`。截图：[桌面深色菜单](.jekyll-cache/visual-review/theme-desktop-system-menu.png)、[桌面浅色菜单](.jekyll-cache/visual-review/theme-desktop-light-menu.png)、[手机菜单](.jekyll-cache/visual-review/theme-mobile-320-menu.png)。

## 后续改动：增强博客卡片与页面背景的区分

- `_sass/minimal-mistakes/_modern.scss`：新增独立的 `--card-surface` 变量。浅色模式卡片使用柔和灰绿色 `#e3ede7`（页面为 `#f6f8f7`）；深色模式卡片使用较明亮的深绿色 `#293c31`（页面为 `#141d19`）。仅文章列表卡片使用此变量。
- 图片的文字可读性遮罩原先始终覆盖卡片，会冲淡静止背景。现在遮罩默认透明，在鼠标悬停或键盘聚焦时与背景图一起以 550ms 淡入，移开后一起淡出；保留圆角、阴影和减少动画偏好。
- `DESIGN_REVIEW.md`：记录本次配色、遮罩调整及验证结果。

验证：Jekyll 构建与 diff 检查通过；独立本地 Edge 检查深浅色静止与悬停、键盘聚焦及 390px 手机共 6 种状态，并查看截图。静止时图片与遮罩透明，悬停/聚焦时均显示；无横向溢出或 JavaScript 错误。博客内容未改动，未提交或推送 GitHub。

本地截图：[浅色卡片](.jekyll-cache/visual-review/card-color-light.png)、[深色卡片](.jekyll-cache/visual-review/card-color-dark.png)、[手机卡片](.jekyll-cache/visual-review/card-color-mobile.png)。验证记录：`.jekyll-cache/visual-review/card-color-behavior-report.json`、`card-color-report.json`。

## 后续配色调整：淡暖灰米色卡片

按后续要求，将 `_sass/minimal-mistakes/_modern.scss` 的浅色 `--card-surface` 从灰绿色改为淡暖灰米色 `#eee8e0`，与页面冷色背景及侧栏原有的米色艺术块协调。深色模式同步改为暖灰色 `#35312c`。悬停图片渐变、圆角和阴影保持原有设置。

Jekyll 构建、diff 检查和 6 种卡片状态检查通过，已查看深浅色截图，截图与验证记录更新到上述路径。无横向溢出或 JavaScript 错误，未提交或推送 GitHub。

## 后续配色调整：提高浅色卡片的灰度

将 `_sass/minimal-mistakes/_modern.scss` 的浅色 `--card-surface` 改为接近中性的浅暖灰 `#e7e7e5`，减弱之前米黄色的色感，仍与页面背景保持区分。深色卡片继续使用 `#35312c`。当前配色以本节为准。

Jekyll 构建、diff 检查及原有 6 种卡片状态检查通过，已查看浅色截图；截图与验证记录更新到上述路径。无横向溢出或 JavaScript 错误，未提交或推送 GitHub。

## 后续动画调整：只保留卡片图片淡入

原先 `_modern.scss` 中图片和卡片 `::after` 遮罩分别从透明度 0 过渡到 1，均为 550ms。两层独立叠加会让图片在显现过程中又被越来越浓的遮罩冲淡，产生先显现后变淡的观感。

- `_includes/archive-single.html`：新增装饰容器 `.post-card__visual`，包含原有背景图片，容器标为 `aria-hidden`。
- `_sass/minimal-mistakes/_modern.scss`：将固定的文字可读性遮罩移到 `.post-card__visual::after`，图片与遮罩作为一个整体进行 550ms 淡入及 750ms 轻微缩放。鼠标悬停或键盘聚焦期间保持显示；退出后直接恢复纯色，不做淡出。打印时隐藏整个装饰容器，减少动画偏好仍生效。此前的纯色配色保持不变。
- `DESIGN_REVIEW.md`：记录原因、新行为与验证结果。本节动画设置取代前文的两层独立淡入/淡出说明。

验证：Jekyll 构建与 diff 检查通过；独立本地 Edge 分别在深浅色模式下逐帧采样约 950ms，确认整体透明度只增加并最终保持为 1，遮罩不单独变化，移开鼠标后立即回到纯色；键盘聚焦与 390px 手机检查通过。已查看深浅色悬停截图，无 JavaScript 错误或横向溢出，未提交或推送 GitHub。

本地证据：`.jekyll-cache/visual-review/card-hover-behavior-report.json`、`card-hover-report.json`。截图：[浅色悬停](.jekyll-cache/visual-review/card-hover-visible-light.png)、[深色悬停](.jekyll-cache/visual-review/card-hover-visible-dark.png)。

## 动画范围修正：保留移出时的淡出

用户澄清要求只去掉移入时图片显现后又变暗的阶段，并保留原有移出淡出。因此调整 `_sass/minimal-mistakes/_modern.scss`，将 `opacity 550ms ease, transform 750ms ease` 放到 `.post-card__visual` 的基础规则，移入和移出均使用平滑过渡；删除悬停与聚焦规则中重复的 transition 设置。图片与固定遮罩一起淡入的结构保持不变，移入后持续显示，移出时平滑淡出回到纯色。本节取代上一节“退出后直接恢复纯色”的设置。

Jekyll 构建与 diff 检查通过；深浅色模式分别逐帧检查移入和移出：移入透明度持续增加并保持为 1，移出透明度持续降低至 0，包含中间过渡帧。键盘聚焦和手机检查通过，无 JavaScript 错误或横向溢出。验证记录更新至上一节所列本地路径，未提交或推送 GitHub。
