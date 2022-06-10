"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,h=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"/releasing/",sidebar_position:7},l="Releasing",p={unversionedId:"releasing",id:"releasing",title:"Releasing",description:"The release process of Task is done with the help of",source:"@site/docs/releasing.md",sourceDirName:".",slug:"/releasing/",permalink:"/releasing/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/releasing/",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/community/"},next:{title:"Taskfile Versions",permalink:"/taskfile-versions/"}},u={},c=[],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"releasing"},"Releasing"),(0,o.kt)("p",null,"The release process of Task is done with the help of\n",(0,o.kt)("a",{parentName:"p",href:"https://goreleaser.com/"},"GoReleaser"),". You can test the release process locally by calling\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"test-release")," task of the Taskfile."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/actions"},"GitHub Actions")," should release\nartifacts automatically when a new Git tag is pushed to master\n(raw executables and DEB and RPM packages)."),(0,o.kt)("h1",{id:"homebrew"},"Homebrew"),(0,o.kt)("p",null,"To release a new version on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap"},"Homebrew tap")," edit the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap/blob/master/Formula/go-task.rb"},"Formula/go-task.rb")," file, updating with the new version, download\nURL and sha256."),(0,o.kt)("h1",{id:"snapcraft"},"Snapcraft"),(0,o.kt)("p",null,"The exception is the publishing of a new version of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-task/snap"},"snap package"),". This current require two steps after publishing\nthe binaries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updating the current version on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-task/snap/blob/master/snap/snapcraft.yaml#L2"},"snapcraft.yaml"),";"),(0,o.kt)("li",{parentName:"ul"},"Moving both ",(0,o.kt)("inlineCode",{parentName:"li"},"i386")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"amd64")," new artifacts to the stable channel on\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://snapcraft.io/task/releases"},"Snapcraft dashboard"))),(0,o.kt)("h1",{id:"scoop"},"Scoop"),(0,o.kt)("p",null,"Scoop is a community owned installation method. Scoop owners usually take care\nof updating versions there by editing\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukesampson/scoop-extras/blob/master/bucket/task.json"},"this file"),".\nIf you think its Task version is outdated, open an issue to let us know."),(0,o.kt)("h1",{id:"nix"},"Nix"),(0,o.kt)("p",null,"Nix is a community owned installation method. Nix package maintainers usually take care\nof updating versions there by editing\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs/blob/nixos-unstable/pkgs/development/tools/go-task/default.nix"},"this file"),".\nIf you think its Task version is outdated, open an issue to let us know."))}m.isMDXComponent=!0}}]);