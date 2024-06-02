// ==UserScript==
// @name      HTML5 player enhanced script custom configuration
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      0.0.1
// @description  HTML5 video player enhanced script custom configuration
// @author       ankvps
// @icon         https://cdn.jsdelivr.net/gh/xxxily/h5player@master/logo.png
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @license      GPL
// @downloadURL https://update.greasyfork.org/scripts/455396/HTML5%E6%92%AD%E6%94%BE%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE.user.js
// @updateURL https://update.greasyfork.org/scripts/455396/HTML5%E6%92%AD%E6%94%BE%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE.meta.js
// ==/UserScript==

/* Customised configuration */
const customConfiguration = {
  media: {
    autoPlay: false,
    playbackRate: 1,
    volume: 1,

/* Whether to allow storage playback progress */
    allowRestorePlayProgress: {

    },
/* Video playback progress mapping table */
    progress: {}
  },
  hotkeys: [
    {
      desc: '网页全屏',
      key: 'shift+enter',
      command: 'setWebFullScreen',
      /* 如需禁用快捷键，将disabled设为true */
      disabled: false
    },
    {
      desc: '全屏',
      key: 'enter',
      command: 'setFullScreen'
    },
    {
      desc: '切换画中画模式',
      key: 'shift+p',
      command: 'togglePictureInPicture'
    },
    {
      desc: '视频截图',
      key: 'shift+s',
      command: 'capture'
    },
    {
      desc: '启用或禁止自动恢复播放进度功能',
      key: 'shift+r',
      command: 'capture'
    },
    {
      desc: '垂直镜像翻转',
      key: 'shift+m',
      command: 'setMirror',
      args: [true]
    },
    {
      desc: '水平镜像翻转',
      key: 'm',
      command: 'setMirror'
    },
    {
      desc: '下载音视频文件（实验性功能）',
      key: 'shift+d',
      command: 'mediaDownload'
    },
    {
      desc: '缩小视频画面 -0.05',
      key: 'shift+x',
      command: 'setScaleDown'
    },
    {
      desc: '放大视频画面 +0.05',
      key: 'shift+c',
      command: 'setScaleUp'
    },
    {
      desc: '恢复视频画面',
      key: 'shift+z',
      command: 'resetTransform'
    },
    {
      desc: '画面向右移动10px',
      key: 'shift+arrowright',
      command: 'setTranslateRight'
    },
    {
      desc: '画面向左移动10px',
      key: 'shift+arrowleft',
      command: 'setTranslateLeft'
    },
    {
      desc: '画面向上移动10px',
      key: 'shift+arrowup',
      command: 'setTranslateUp'
    },
    {
      desc: '画面向下移动10px',
      key: 'shift+arrowdown',
      command: 'setTranslateDown'
    },
    {
      desc: '前进5秒',
      key: 'arrowright',
      command: 'setCurrentTimeUp'
    },
    {
      desc: '后退5秒',
      key: 'arrowleft',
      command: 'setCurrentTimeDown'
    },
    {
      desc: '前进30秒',
      key: 'ctrl+arrowright',
      command: 'setCurrentTimeUp',
      args: [30]
    },
    {
      desc: '后退30秒',
      key: 'ctrl+arrowleft',
      command: 'setCurrentTimeDown',
      args: [-30]
    },
    {
      desc: '音量升高 5%',
      key: 'arrowup',
      command: 'setVolumeUp',
      args: [0.05]
    },
    {
      desc: '音量降低 5%',
      key: 'arrowdown',
      command: 'setVolumeDown',
      args: [-0.05]
    },
    {
      desc: '音量升高 20%',
      key: 'ctrl+arrowup',
      command: 'setVolumeUp',
      args: [0.2]
    },
    {
      desc: '音量降低 20%',
      key: 'ctrl+arrowdown',
      command: 'setVolumeDown',
      args: [-0.2]
    },
    {
      desc: '切换暂停/播放',
      key: 'space',
      command: 'switchPlayStatus'
    },
    {
      desc: '减速播放 -0.05',
      key: 'x',
      command: 'setPlaybackRateDown'
    },
    {
      desc: '加速播放 +0.05',
      key: 'c',
      command: 'setPlaybackRateUp'
    },
    {
      desc: '正常速度播放',
      key: 'z',
      command: 'resetPlaybackRate'
    },
    {
      desc: '设置1x的播放速度',
      key: 'Digit1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置1x的播放速度',
      key: 'Numpad1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: '设置2x的播放速度',
      key: 'Digit2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置2x的播放速度',
      key: 'Numpad2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: '设置3x的播放速度',
      key: 'Digit3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置3x的播放速度',
      key: 'Numpad3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: '设置4x的播放速度',
      key: 'Digit4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '设置4x的播放速度',
      key: 'Numpad4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: '下一帧',
      key: 'F',
      command: 'freezeFrame',
      args: 1
    },
    {
      desc: '上一帧',
      key: 'D',
      command: 'freezeFrame',
      args: -1
    },
    {
      desc: '增加亮度',
      key: 'E',
      command: 'setBrightnessUp'
    },
    {
      desc: '减少亮度',
      key: 'W',
      command: 'setBrightnessDown'
    },
    {
      desc: '增加对比度',
      key: 'T',
      command: 'setContrastUp'
    },
    {
      desc: '减少对比度',
      key: 'R',
      command: 'setContrastDown'
    },
    {
      desc: '增加饱和度',
      key: 'U',
      command: 'setSaturationUp'
    },
    {
      desc: '减少饱和度',
      key: 'Y',
      command: 'setSaturationDown'
    },
    {
      desc: '增加色相',
      key: 'O',
      command: 'setHueUp'
    },
    {
      desc: '减少色相',
      key: 'I',
      command: 'setHueDown'
    },
    {
      desc: '模糊增加 1 px',
      key: 'K',
      command: 'setBlurUp'
    },
    {
      desc: '模糊减少 1 px',
      key: 'J',
      command: 'setBlurDown'
    },
    {
      desc: '图像复位',
      key: 'Q',
      command: 'resetFilterAndTransform'
    },
    {
      desc: ' rotates picture 90 degrees',
      key: 'S',
      command: 'setRotate'
    },
    {
      desc: 'Play the next episode',
      key: 'N',
      command: 'setNextVideo'
    },
    {
      desc: 'Carry outJSScript',
      key: 'ctrl+j ctrl+s',
      command: () => {
        alert('自定义JS脚本-demo')
      },
      when: ''
    }
  ],
  enhance: {
/* If the default speed regulation logic is not disabled, the speed will be easily reset when multiple videos are switched, so this option is turned on by default */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false,
    blockSetVolume: false,
    allowExperimentFeatures: false
  },
  debug: false
}

/**
* Task Control Center
* It is used to configure all tasks that cannot be processed universally. For example, if the full-screen mode of different websites is different, the full-screen logic of the website itself must be called to ensure the normal work of subtitles, bullet subtitles, etc.
 **/
const customTaskControlCenter = {
  /**
* Configuration example

* The parent key name corresponds to the first-level domain name.

* The name of the relevant function corresponding to the child key name, the function corresponding to the key value click selector to be triggered or the relevant function to be called

* All child-level key values support the use of selector triggers or function calls

* If the sub-level is configured, use the sub-level configuration logic to operate, otherwise the default logic is used.

* Note: except for the two child key names of include and exclude, which are used for url range matching.
   * */
  'demo.demo': {
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    pause: '.player-pause',
    play: '.player-play',
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
    currentTime: function () {},
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
// Customise the execution mode of shortcut keys. If it is a combination of keys, it must be in the order of ctrl-->shift-->alt. There is nothing that can be ignored, and the key name must be in all lowercase.
    shortcuts: {
/* Register shortcut keys to perform custom callback operations */
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
/* Customize the callback operation of shortcut keys */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data
        console.log(event, player)
      }
    },
/* The path information to be included under the current domain name. By default, all paths under the whole domain name are available. It must be regular */
    include: /^.*/,
/* The path information to be excluded under the current domain name does not exclude any path by default. It must be regular */
    exclude: /\t/
  },
  'netflix.com': {
// Stop using all functions of the plug-in under netflix
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
* Use netflix's own speed regulation, because the current plug-in cannot solve the problem of service interruption caused by speed regulation.
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       * TODO
        * Netflix Some users are used to using the F key for full screen, so the next frame function of the f key is blocked here.
        * After the subsequent opening of custom configuration capabilities, let users decide whether to block or not.
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        return true
      }
    }
  }
}

/* Register custom configuration information */
const pageWin = window.unsafeWindow
if (pageWin) {
  const configuration = { customConfiguration, customTaskControlCenter }
  pageWin.__h5PlayerCustomConfiguration__ = configuration
  pageWin.__setH5PlayerCustomConfiguration__ instanceof Function && pageWin.__setH5PlayerCustomConfiguration__(configuration, 'External')
}
