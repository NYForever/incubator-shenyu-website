"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3872],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return l}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=m(n),l=r,b=h["".concat(p,".").concat(l)]||h[l]||u[l]||i;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32718:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Voting in a new PPMC member",sidebar_position:8,description:"Voting in a new PPMC member",categories:"Apache ShenYu",tags:["Vote-PPMC-Member"]},p=void 0,m={unversionedId:"vote-ppmc",id:"vote-ppmc",isDocsHomePage:!1,title:"Voting in a new PPMC member",description:"Voting in a new PPMC member",source:"@site/community/7-vote-ppmc.md",sourceDirName:".",slug:"/vote-ppmc",permalink:"/community/vote-ppmc",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/7-vote-ppmc.md",version:"current",lastUpdatedBy:"Zhang Dong",lastUpdatedAt:1644291370,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:8,frontMatter:{title:"Voting in a new PPMC member",sidebar_position:8,description:"Voting in a new PPMC member",categories:"Apache ShenYu",tags:["Vote-PPMC-Member"]},sidebar:"community",previous:{title:"How to vote Committer",permalink:"/community/vote-committer"},next:{title:"Two FA",permalink:"/community/two-fa"}},c=[],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Start the discussion in ",(0,i.kt)("a",{parentName:"strong",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),", Only current PPMC member could nominate.")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo\uff1aprivate@shenyu.apache.org\n\nTitle\uff1a [DISCUSS] (nominee name not GitHub ID) PPMC membership\n\nContent\uff1a\n\nHi, everyone\n\nI propose to invite an active committer, (nominee name not GitHub ID), to be our PPMC member, considering his/her efforts and motivation to the community.\nThis discussion shows his/her contribution to the community and welcome your opinions about this proposal.\n\nThe pull requests between become a committer until now of him/her:\n\nhttps://github.com/apache/incubator-shenyu/pull/1\nhttps://github.com/apache/incubator-shenyu/pull/2\nhttps://github.com/apache/incubator-shenyu/pull/3\nhttps://github.com/apache/incubator-shenyu/pull/4\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve \n\n[ ] +0 no opinion\n \n[ ] -1 disapprove with the reason\n\n")),(0,i.kt)("p",null,"If there is a consensus that the proposed member is suitable, there should be a formal vote."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Start the vote in ",(0,i.kt)("a",{parentName:"strong",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),", Only current PPMC member could nominate.")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo\uff1aprivate@shenyu.apache.org\n\nTitle\uff1a [VOTE] (nominee name not GitHub ID) PPMC membership\n\nContent\uff1a\n\nHi, everyone\n\nThis is a formal vote about inviting (nominee name not GitHub ID) as our new PPMC member. \nHe/She really made an effort to improve ShenYu and fix many issues. \nThe following links will direct you to his/her work.\n\nhttps://github.com/apache/incubator-shenyu/pull/1\nhttps://github.com/apache/incubator-shenyu/pull/2\nhttps://github.com/apache/incubator-shenyu/pull/3\nhttps://github.com/apache/incubator-shenyu/pull/4\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Wait 72 hours to get vote result from community PPMC.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4. PPMC sends vote result over email.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo: private@shenyu.apache.org\n\nTitle: [RESULT][VOTE] (nominee name not GitHub ID) PPMC membership\n\nContent:\n\nHi all PPMCs, \n\nI am glad to receive your votes, and the voting result is[1],\n6   +1 votes, 0   +/-1 votes, 0   -1 votes\n\n[1]: https://lists.apache.org/thread.html/xxxxxxxxxxxxxxxxxxxxxxx\nTherefore, I will send the invitation to (nominee name not GitHub ID).\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5. PPMC sends notice over email.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Example\uff1a\n\nTo: private@incubator.apache.org\nCC: private@shenyu.apache.org\n\nTitle: [NOTICE] (nominee name not GitHub ID) for Apache ShenYu PPMC\n\nContent:\n\nHi, \n\n(nominee name not GitHub ID) has been voted as a new member of the Apache ShenYu PPMC. the vote thread is at: (link to the vote thread)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6. Wait grace period of 72 hours.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7. Send an offer to become a PPMC member with @",(0,i.kt)("a",{parentName:"strong",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"To: (nominee email address)\n\ncc: private@shenyu.apache.org\n\nTitle: Invitation to become Apache ShenYu PPMC member: (nominee name not GitHub ID)\n\nContent:\n\nDear (nominee name not GitHub ID),\n\nIn recognition of your demonstrated commitment to, and alignment with, the\ngoals of the Apache ShenYu project, the ShenYu PPMC has voted to offer you\nmembership in the ShenYu PPMC (\"Podling Project Management Committee\").\n\nPlease let us know if you accept by subscribing to the private alias [by\nsending mail to private-subscribe@shenyu.incubator.apache.org], and posting \na message to private@shenyu.apache.org.\n\nThe PPMC is the Incubator podling version of a project PMC (\"Project\nManagement Committee\") that for every top-level project is tasked by the\nApache Board of Directors with official oversight and binding votes in\nthat project.  When ShenYu graduates from the Incubator to a top-level\nproject, the project PMC is usually formed from the membership of the PPMC.\nNote that while participation in the PMC after graduation is not\nguaranteed, simply continuing your constructive and active participation\nis usually sufficient.\n\nAs a PPMC member, and later as a PMC member, you are responsible for\ncontinuing the general project, code, and community oversight that you\nhave exhibited so far.  The votes of the PPMC are not legally binding;\nvotes of the Incubator PMC are.  However, many of the PPMC members\nare also Incubator PMC members, so they implicitly cast binding votes\nwhen we vote on PPMC issues.  While this is an important legal\ndistinction, it shouldn't enter your thinking when working on the PPMC -\nmembers should treat every decision as if it were legally binding for the ASF.  \nAlso, in day-to-day activities, the Incubator PMC member vs PPMC member\ndistinction should be invisible -- we are peers.\n\nAll PPMC members are subscribed to the project's private mail list, which \nis used to discuss issues unsuitable for an open, public forum, such as\npeople issues (e.g. new committers, problematic community members, etc.),\nsecurity issues, and the like.  It can't be emphasized enough that\ncare should be taken to minimize the use of the private list, discussing\neverything possible on the appropriate public list.\n\nThe private PPMC list is *private* - it is strictly for the use of the\nPPMC. Messages are not to be forwarded to anyone else without the express\npermission of the PPMC. Also note that any Member of the Foundation has\nthe right to review and participate in any PPMC or PMC list, as a PMC \nand PPMC are acting on behalf of the Membership.\n\nFinally, the PPMC (and assuming graduation, the PMC) is not meant to create \na hierarchy within the committership or the community.  In fact, a goal is to\nadd all committers over time to the PPMC/PMC, as our belief is that those who\ndo the work should get a binding vote.  Therefore, in our day-to-day\ninteractions with the rest of the community, we continue to interact as\npeers, where every reasonable opinion is considered, and all community\nmembers are invited to participate in our public voting.  If there ever\nis a situation where the PMC/PPMC's view differs significantly from that \nof the rest of the community, this is a symptom of a problem that needs to\nbe addressed.\n\nWith the expectation of your acceptance, welcome!\n\nThe Apache ShenYu PPMC\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8. Nominee replies the invitation, including content like accept the offer and give thanks.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"9. PPMC adds new PPMC member in ",(0,i.kt)("a",{parentName:"strong",href:"https://whimsy.apache.org/roster/ppmc/shenyu"},"roster"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"10. Notify new PPMC member to subscribe to the private mailing list: ",(0,i.kt)("a",{parentName:"strong",href:"mailto:private-subscribe@shenyu.apache.org"},"private-subscribe@shenyu.apache.org"),", same process as subscribing to the dev mailing list")))}h.isMDXComponent=!0}}]);