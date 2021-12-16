"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86569],{97706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={description:"Getting started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},s="Getting Started with Rust",p={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started with Rust",description:"Getting started with the official IOTA Wallet Library Software Rust library.",source:"@site/external/wallet.rs/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/wallet.rs/libraries/rust/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/edit/mainnet/external/wallet.rs/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"IOTA Wallet Libraries",permalink:"/wallet.rs/libraries/overview"},next:{title:"Examples",permalink:"/wallet.rs/libraries/rust/examples"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Initialisation",id:"initialisation",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"Rust")," and ",(0,i.kt)("em",{parentName:"p"},"Cargo")," are required to use wallet.rs. You can find installation instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust documentation"),"."),(0,i.kt)("p",null,"We recommend you update ",(0,i.kt)("em",{parentName:"p"},"Rust")," to the latest stable version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"rustup update stable"),". The nightly version should be fine, but there is a chance some changes are not compatible."),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rust-embedded.org/book/intro/no-std.html"},(0,i.kt)("em",{parentName:"a"},"no_std"))," is not currently supported, but we are working on it, and we will provide it as a feature once the new implementation is ready."),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/documentation/"},(0,i.kt)("em",{parentName:"a"},"cmake"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},(0,i.kt)("em",{parentName:"a"},"openssl"))," are required. In order to run the build process successfully using Cargo you may need install additional build tools on your system. "),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"cmake")," can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/download/"},"official cmake website"),".\n",(0,i.kt)("em",{parentName:"p"},"openssl")," can be installed with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"vcpkg")," or ",(0,i.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"vcpkg")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./vcpkg.exe install openssl:x64-windows\n./vcpkg.exe integrate install\n# you may want to add this to the system environment variables since you'll need it to compile the crate\nset VCPKGRS_DYNAMIC=1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"chocolatey")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'choco install openssl\n# you may need to set the OPENSSL_ROOT_DIR environment variable\nset OPENSSL_ROOT_DIR="C:\\Program Files\\OpenSSL-Win64"\n')))),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," can be installed with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.brew.sh/"},(0,i.kt)("em",{parentName:"a"},"Homebrew"))," by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install cmake\nbrew install openssl@1.1\n# you may want to add this to your .zshrc or .bashrc since you'll need it to compile the crate\nOPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)\n")),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," with your distro's package manager or download from their websites. On Debian and Ubuntu you will also need the ",(0,i.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/build-essential"},(0,i.kt)("em",{parentName:"a"},"build-essential"))," package."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the library, add this to your ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[dependencies]\niota-wallet = { git = "https://github.com/iotaledger/wallet.rs", branch = "dev" }\n')),(0,i.kt)("h3",{id:"initialisation"},"Initialisation"),(0,i.kt)("p",null,"In order to use the library, you first need to create an ",(0,i.kt)("em",{parentName:"p"},"AccountManager")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_wallet::{account_manager::AccountManager, client::ClientOptionsBuilder, signing::SignerType};\nuse std::path::PathBuf;\n\n#[tokio::main]\nasync fn main() -> iota_wallet::Result<()> {\n    let storage_folder: PathBuf = "./my-db".into();\n    let manager = AccountManager::builder()\n        .with_storage(&storage_folder, None)?\n        .finish()\n        .await?;\n    manager.set_stronghold_password("password").await?;\n    // If no mnemonic is provided, then the Stronghold file is the only way for a backup\n    manager.store_mnemonic(SignerType::Stronghold, None).await?;\n    let client_options = ClientOptionsBuilder::new()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .build()?;\n    let account = manager\n        .create_account(client_options)?\n        .signer_type(SignerType::Stronghold)\n        .initialise()\n        .await?;\n    let address = account.generate_address().await?;\n    println!("Address: {}", address.address().to_bech32());\n    Ok(())\n}\n')))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);