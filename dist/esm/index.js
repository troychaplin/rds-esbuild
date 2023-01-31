import w from"react";var n=({primary:e=!1,size:r="medium",backgroundColor:t,label:l,...s})=>{let y=e?"storybook-button--primary":"storybook-button--secondary";return w.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${r}`,y].join(" "),style:{backgroundColor:t},...s},l)};import o from"react";var T=({user:e,onLogin:r,onLogout:t,onCreateAccount:l})=>o.createElement("header",null,o.createElement("div",{className:"wrapper"},o.createElement("div",null,o.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),o.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),o.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),o.createElement("h1",null,"Acme")),o.createElement("div",null,e?o.createElement(o.Fragment,null,o.createElement("span",{className:"welcome"},"Welcome, ",o.createElement("b",null,e.name),"!"),o.createElement(n,{size:"small",onClick:t,label:"Log out"})):o.createElement(o.Fragment,null,o.createElement(n,{size:"small",onClick:r,label:"Log in"}),o.createElement(n,{primary:!0,size:"small",onClick:l,label:"Sign up"})))));import u from"react";var i={none:"max-w-none",full:"max-w-full","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl","6xl":"max-w-6xl","7xl":"max-w-7xl"},c={1:"",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-2 lg:grid-cols-4","1/3":"lg:grid-cols-3 lg:[&>*:last-child]:col-span-2","2/3":"lg:grid-cols-3 lg:[&>*:first-child]:col-span-2"},p={0:"gap-0 [&+.cu-column]:mt-0","0.5":"gap-0.5 [&+.cu-column]:mt-0.5",1:"gap-1 [&+.cu-column]:mt-1",2:"gap-2 [&+.cu-column]:mt-2",4:"gap-4 [&+.cu-column]:mt-4",8:"gap-8 [&+.cu-column]:mt-8",10:"gap-10 [&+.cu-column]:mt-10"},m={none:"bg-transparent",black:"bg-cu-black-800",white:"bg-white",red:"bg-cu-red",grey:"bg-cu-black-50","dark-grey":"bg-cu-black-600"};var x={8:"top-8",12:"top-12",16:"top-16",20:"top-20",24:"top-24"};var I=({children:e,isSticky:r,topSpace:t})=>{let l=r?"sticky":"",s=t?x[t]:"";return u.createElement("aside",null,u.createElement("div",{className:`${l} ${s}`},e))};import k from"react";var v={column:"cu-column mx-auto grid grid-cols-1 [&:last-child]:mb-0"},X=({children:e,maxWidth:r="5xl",gridGap:t="8",cols:l="1"})=>k.createElement("div",{className:`
        ${v.column}
        ${c[l]}
        ${i[r]} ${p[t]}
      `},e);import P from"react";var C={container:"cu-container not-prose py-10 lg:py-12 px-6 lg:px-8 [&.bg-cu-black-50+.cu-container.bg-cu-black-50]:pt-0 [&.bg-transparent+.cu-container.bg-transparent]:pt-0"},R=({children:e,bgColor:r="none"})=>{let t=r?m[r]:"";return P.createElement("div",{className:`${C.container} ${t}`},e)};import N from"react";var d={core:"relative",spacing:"py-10 lg:py-12 px-6 lg:px-8",overlap:"z-20 -mt-20 md:-mt-32"},ro=({children:e,hasOverlap:r,hasSpacing:t})=>{let l=r?d.overlap:"",s=t?d.spacing:"";return N.createElement("main",{className:`${d.core} ${s} ${l}`},e)};import b from"react";var a={panel:"cu-panel not-prose rounded-lg bg-white [&+.cu-panel]:mt-8",border:"border border-cu-black-100",shadow:"shadow-lg",title:"px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gray-50 text-cu-black-900"},g=({children:e,hasBorder:r,hasShadow:t})=>{let l=r?a.border:"",s=t?a.shadow:"";return b.createElement("div",{className:`${a.panel} ${l} ${s}`},e)},h=({children:e})=>b.createElement("h2",{className:`${a.title}`},e);g.displayName="Panel";h.displayName="Panel.Title";var so=Object.assign(g,{Title:h});import $ from"react";var f={stackedlist:"overflow-hidden",hasDividers:"[&>li]:border-cu-cu-black-50 [&>li]:border-b last:[&>li]:border-b-0"},io=({children:e,hasDividers:r})=>$.createElement("ul",{className:`${f.stackedlist} ${r?f.hasDividers:""}`},e);export{I as Aside,n as Button,X as Column,R as Container,T as Header,ro as Main,so as Panel,io as StackedList};
//# sourceMappingURL=index.js.map
