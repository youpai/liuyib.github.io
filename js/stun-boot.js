$(document).ready(function(){Stun.utils.showThemeInConsole(),CONFIG.shortcuts&&CONFIG.shortcuts.switch_post&&Stun.utils.registerHotkeyToSwitchPost(),CONFIG.external_link&&Stun.utils.addIconToExternalLink("#footer"),Stun.utils.pjaxReloadBoot=function(){if(CONFIG.codeblock){var t=CONFIG.codeblock.style;"default"===t?(this.addCodeHeader(),this.addCopyButton(),this.registerCopyEvent()):"carbon"===t&&this.addCodeHeader("carbon")}if(CONFIG.reward&&this.registerShowReward(),CONFIG.lazyload&&this.lazyLoadImage(),CONFIG.gallery_waterfall&&this.showImageToWaterfall(),CONFIG.external_link){this.addIconToExternalLink(".archive, .post-header-title")}CONFIG.fancybox?this.wrapImageWithFancyBox():CONFIG.zoom_image&&this.registerClickToZoomImage()},Stun.utils.pjaxReloadBoot()});