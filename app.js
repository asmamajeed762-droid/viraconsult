/* ViraConsult website: React (via CDN) written with React.createElement, no build step needed */
const {useState,useEffect}=React,h=React.createElement;
const IM={a:'images/open-office.jpg',b:'images/meeting-room.jpg',c:'images/man-laptop.jpg',d:'images/board-meeting.jpg',e:'images/team-meeting.jpg',f:'images/luxury-desk.jpg',h:'images/executive-office.jpg',i:'images/laptop-charts.jpg',j:'images/blueprint-team.jpg',k:'images/desk-mug.jpg'};
const NAV=[['home','Home'],['about','About Us'],['services','Services'],['projects','Our Work'],['insights','Insights'],['contact','Contact Us']];
const go=k=>{location.hash=k};
const IC={bulb:'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z',chart:'M4 20V10M10 20V4M16 20v-8M22 20H2',users:'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',target:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',eye:'M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',gem:'M6 3h12l4 6-10 13L2 9zM2 9h20M12 22 8 9l4-6 4 6z',arr:'M5 12h14M13 6l6 6-6 6',phone:'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',mail:'M3 5h18v14H3zM3 7l9 7 9-7',chat:'M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.2A8 8 0 1 1 21 12z'};
const Ic=({n,c='w-5 h-5'})=>h('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.6,strokeLinecap:'round',strokeLinejoin:'round',className:c,'aria-hidden':true},h('path',{d:IC[n]}));
const Im=(k,c='',p)=>h('img',{src:IM[k],alt:'',loading:'lazy',className:'w-full h-full object-cover '+c,style:p?{objectPosition:p}:undefined});
const Logo=()=>h('a',{href:'#home',className:'flex items-center gap-2'},h('svg',{viewBox:'0 0 32 28',className:'w-8 h-7','aria-hidden':true},h('path',{d:'M1 2h9l6 13 6-13h9L16 27z',fill:'#4b2e1f'})),h('span',{className:'leading-none'},h('span',{className:'serif text-xl block'},'ViraConsult'),h('span',{className:'text-[9px] text-mut'},'Build Today, Grow Tomorrow.')));

const SERV=[
['Business Strategy','Identify opportunities, solve challenges and plan for growth.','We turn market analysis and internal data into a clear roadmap with owners, milestones and measurable targets.','j'],
['Financial Advisory','Make smarter financial decisions for a stronger tomorrow.','Budgeting, forecasting and capital planning that give leadership a confident view of cash, risk and return.','d'],
['Marketing Solutions','Build your brand, reach your audience and increase your impact.','Positioning, campaigns and analytics that connect your message to the customers most likely to buy.','i'],
['IT & Digital Services','Modern technology for better efficiency and growth.','Systems selection, automation and data tools introduced in small steps your team can adopt.','a'],
['Growth Consulting','Scale your business with data-driven insights.','Pricing, channel and customer analysis that finds the next wave of growth inside your current business.','c'],
['Team Development','Build stronger teams for better results.','Leadership coaching, role design and incentives that help people do their best work.','e']];
const PROJ=[
['Executive Office Redesign','Operations','Northgate Group','−30% meeting time','Reworked workflows and spaces for a leadership team of 40.','h'],
['Headquarters Relocation','Operations','Atlas Freight','2 months early','Planned and delivered a 300-seat move with zero downtime.','b'],
['Boardroom Reporting Suite','Finance','Helix Capital','4× faster reports','Built one reporting pack for monthly board reviews.','f'],
['Digital Workplace Rollout','Technology','Meridian Health','1,200 users onboarded','Moved every team onto one shared platform in eight weeks.','a'],
['Growth Analytics Platform','Marketing','Oakline Home','+27% conversion','Unified sales and campaign data for weekly decisions.','i'],
['Market Entry Strategy','Strategy','Crest Energy','3 new markets','Prioritised and launched three regional markets in 14 months.','j']];
const POSTS=[
['Why margins erode quietly, and how to catch it early','Strategy','Oct 14, 2026','6 min','A simple monthly review that surfaces small leaks fast.','Margin rarely collapses overnight. It erodes through discounting habits, scope creep and unmanaged complexity.\n\nReview price realisation, cost-to-serve and rework rate every month. Leaders who watch the same three numbers spot drift in weeks, not quarters.','k'],
['Capital allocation in an uncertain rate cycle','Finance','Sep 29, 2026','7 min','Where to invest, where to wait, and how to keep options open.','Strong allocators don’t guess rate direction. They stage commitments and tie each tranche to a clear trigger.\n\nRank projects by payback speed and reversibility, then fund the fast, reversible ones first.','i'],
['Making digital pilots pay for themselves','Technology','Sep 12, 2026','5 min','Most pilots stall. The ones that scale share three traits.','Successful pilots start from a costed business problem, have a named owner and plan for production from day one.\n\nIf you can’t describe the saving in one sentence, the pilot isn’t ready.','c'],
['Designing teams that decide faster','People','Aug 11, 2026','4 min','Clear decision rights beat more meetings every time.','Slow decisions usually signal unclear ownership. Write down who decides, who advises and who simply needs to know.\n\nReview the chart each quarter and retire any forum that no longer decides anything.','d']];

const Btn=({to,onClick,children,cls='',type,v})=>h(to?'a':'button',{href:to?'#'+to:undefined,onClick,type,className:'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition duration-200 hover:opacity-90 hover:-translate-y-0.5 '+(v==='g'?'bg-[#C8873A] text-ink rounded-full font-semibold shadow-md ':v==='c'?'bg-[#f6ece2] text-pri rounded-full ':v==='o'?'border border-line hover:bg-soft ':'bg-pri text-white ')+cls},children);
const Sec=({children,cls=''})=>h('section',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-16 '+cls},children);
const Head=(k,t,r)=>h('div',{className:'flex items-end justify-between gap-4 mb-8'},h('div',null,h('p',{className:'text-[11px] tracking-[.25em] uppercase text-mut'},k),h('h2',{className:'serif text-3xl mt-1'},t)),r);
const Top=(t,s)=>h('section',{className:'bg-soft border-b border-line'},h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-16'},h('h1',{className:'serif text-4xl md:text-5xl'},t),h('p',{className:'mt-3 max-w-xl text-mut'},s)));
const Cta=()=>h('section',{className:'max-w-6xl mx-auto px-5 sm:px-8 pb-12'},h('div',{className:'rounded-lg bg-pri text-[#f6ece2] px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5'},h('div',null,h('h2',{className:'serif text-2xl md:text-3xl'},'Ready to Take Your Business to the Next Level?'),h('p',{className:'mt-1 text-sm text-[#d9c3ad]'},'Get in touch with us today and let’s build something great together.')),h(Btn,{to:'contact',v:'g'},'Contact Us',h(Ic,{n:'arr',c:'w-4 h-4 ml-2'}))));
const Modal=({onClose,children})=>{useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);return h('div',{className:'fixed inset-0 z-[70] bg-black/50 flex items-center justify-center p-4',onClick:onClose},h('div',{role:'dialog','aria-modal':true,className:'relative bg-white rounded-lg w-full max-w-xl max-h-[88vh] overflow-auto',onClick:e=>e.stopPropagation()},h('button',{onClick:onClose,'aria-label':'Close',className:'absolute top-2 right-3 z-10 h-8 w-8 rounded-full bg-white/90 text-xl'},'✕'),children))};
const Chips=(cats,f,setF)=>h('div',{className:'flex flex-wrap gap-2 mb-8'},cats.map(c=>h('button',{key:c,onClick:()=>setF(c),className:'rounded-full px-4 py-2 text-sm border transition '+(f===c?'bg-pri text-white border-pri':'border-line hover:bg-soft')},c)));

const Header=({r})=>{const [o,setO]=useState(false);useEffect(()=>setO(false),[r]);
return h('header',{className:'sticky z-50 bg-white border-b border-line',style:{top:'env(safe-area-inset-top,0px)'}},
h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between'},h(Logo),
h('nav',{className:'hidden lg:flex gap-8 text-sm'},NAV.map(n=>h('a',{key:n[0],href:'#'+n[0],className:'py-1 border-b-2 '+(r===n[0]?'border-pri':'border-transparent text-mut hover:text-ink')},n[1]))),
h(Btn,{to:'contact',v:'g',cls:'hidden lg:inline-flex !px-5 !py-2'},'Get in Touch'),
h('button',{className:'lg:hidden p-2 text-2xl leading-none','aria-label':'Menu','aria-expanded':o,onClick:()=>setO(!o)},o?'✕':'☰')),
o&&h('nav',{className:'lg:hidden border-t border-line bg-white px-5 py-2 flex flex-col'},NAV.map(n=>h('a',{key:n[0],href:'#'+n[0],onClick:()=>setO(false),className:'py-3 border-b border-line last:border-0 '+(r===n[0]?'font-semibold':'text-mut')},n[1]))))};
const Footer=()=>h('footer',{className:'border-t border-line'},h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5'},h(Logo),h('nav',{className:'flex flex-wrap gap-x-6 gap-y-2 text-xs text-mut'},NAV.map(n=>h('a',{key:n[0],href:'#'+n[0],className:'hover:text-ink'},n[1]))),h('div',{className:'flex gap-2'},['in','x','f','ig'].map(s=>h('span',{key:s,className:'h-8 w-8 rounded-full bg-beige text-pri text-xs flex items-center justify-center'},s)))),h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 pb-20 text-xs text-mut flex justify-between flex-wrap gap-2'},h('span',null,'© 2026 ViraConsult. All rights reserved.'),h('span',null,'Privacy Policy | Terms & Conditions')));

/* ---------- pages ---------- */
const Home=()=>h('div',null,
h('section',{className:'relative overflow-hidden text-white flex items-center min-h-[520px] lg:min-h-[580px]'},h('div',{className:'absolute inset-0 hz'},Im('h','','center 60%')),h('div',{className:'absolute inset-0',style:{background:'linear-gradient(90deg,rgba(32,17,10,.9),rgba(32,17,10,.6) 55%,rgba(32,17,10,.25))'}}),
h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 relative z-10 py-20 w-full'},h('div',{className:'lg:w-1/2 up'},
h('p',{className:'text-xs tracking-[.25em] uppercase text-[#e6cdb5] mb-5'},'Strategy / Consulting / Growth'),
h('h1',{className:'serif text-5xl md:text-6xl font-medium leading-[1.05]'},'Your Business Growth Partner'),
h('p',{className:'mt-6 max-w-md text-[#f1e4d6]'},'We help businesses build stronger strategies, improve performance and achieve sustainable growth in today’s competitive world.'),
h('div',{className:'mt-8 flex flex-wrap items-center gap-5'},h(Btn,{to:'contact',v:'g'},'Book a Free Consultation',h(Ic,{n:'arr',c:'w-4 h-4 ml-2'})),
h('a',{href:'#about',className:'inline-flex items-center gap-3 text-sm'},h('span',{className:'h-10 w-10 rounded-full border border-white/70 flex items-center justify-center'},h('svg',{viewBox:'0 0 24 24',className:'w-3.5 h-3.5 fill-current','aria-hidden':true},h('path',{d:'M7 4l13 8-13 8z'}))),'Watch Our Story')))),
),
h('section',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8'},
[['bulb','Business Strategy','Smart strategies for long-term success and stability.'],['chart','Growth Consulting','Scale your business with data-driven insights.'],['users','Team Development','Build stronger teams for better results.'],['target','Digital Transformation','Modern solutions for a smarter future.']].map((f,i)=>h('div',{key:i,className:'text-center px-4 '+(i?'md:border-l border-line':'')},h('span',{className:'mx-auto h-14 w-14 rounded-full bg-beige text-pri flex items-center justify-center'},h(Ic,{n:f[0],c:'w-6 h-6'})),h('h3',{className:'mt-4 font-medium text-sm'},f[1]),h('p',{className:'mt-1 text-xs text-mut'},f[2])))),
h('section',{className:'max-w-6xl mx-auto px-5 sm:px-8 pb-14 grid lg:grid-cols-5 gap-10 items-center'},
h('div',{className:'lg:col-span-3 grid sm:grid-cols-5 bg-soft'},h('div',{className:'sm:col-span-2 h-56 sm:h-auto'},Im('k','','center 65%')),
h('div',{className:'sm:col-span-3 p-8'},h('p',{className:'text-[11px] tracking-[.25em] uppercase text-mut'},'About us'),h('h2',{className:'serif text-3xl mt-2 leading-tight'},'Turning Ideas Into Success'),h('p',{className:'mt-4 text-sm text-mut'},'We are a team of experienced professionals, passionate about helping businesses grow. With a focus on innovation, strategy and long-term value, we work closely with our clients to create real and lasting impact.'),h(Btn,{to:'about',cls:'mt-6 !px-5 !py-2.5'},'Learn More',h(Ic,{n:'arr',c:'w-4 h-4 ml-2'})))),
h('div',{className:'lg:col-span-2 divide-y divide-line'},[['target','Our Mission','To empower businesses with strategic solutions for a better future.'],['eye','Our Vision','To be a global leader in business consulting and growth.'],['gem','Our Values','Integrity, Innovation, Collaboration, Excellence.']].map(m=>h('div',{key:m[1],className:'flex gap-4 py-5 first:pt-0 last:pb-0'},h('span',{className:'h-11 w-11 shrink-0 rounded-full bg-beige text-pri flex items-center justify-center'},h(Ic,{n:m[0]})),h('div',null,h('h3',{className:'font-medium'},m[1]),h('p',{className:'text-sm text-mut mt-1'},m[2])))))),
h('section',{className:'bg-beige'},h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center'},[['100+','Happy Clients'],['5+','Years of Experience'],['50+','Projects Completed'],['98%','Client Satisfaction']].map((s,i)=>h('div',{key:i,className:i?'md:border-l border-line':''},h('p',{className:'serif text-3xl'},s[0]),h('p',{className:'text-xs text-mut mt-1'},s[1]))))),
h(Sec,null,Head('Our services','What We Offer',h('a',{href:'#services',className:'text-sm hidden sm:block'},'View All Services →')),
h('div',{className:'grid sm:grid-cols-2 lg:grid-cols-4 gap-5'},SERV.slice(0,4).map((s,i)=>h('div',{key:i,className:'border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg'},h('div',{className:'h-36'},Im(s[3])),h('div',{className:'px-5 pb-5'},h('span',{className:'serif inline-block -mt-4 relative bg-white rounded-full px-3 py-0.5 text-lg'},'0'+(i+1)),h('h3',{className:'mt-2 font-medium'},s[0]),h('p',{className:'mt-2 text-sm text-mut'},s[1]),h('a',{href:'#services',className:'mt-4 inline-block text-xs font-medium'},'Learn More →')))))),
h('section',{className:'bg-soft'},h('div',{className:'max-w-6xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-4 gap-6 items-center'},
h('div',null,h('p',{className:'text-[11px] tracking-[.25em] uppercase text-mut'},'Our work'),h('h2',{className:'serif text-3xl mt-1'},'Recent Projects'),h('p',{className:'mt-3 text-sm text-mut'},'Explore some of our recent work and see how we’ve helped businesses achieve their goals.'),h(Btn,{to:'projects',cls:'mt-5 !px-5 !py-2.5'},'View All Projects')),
[0,1,2].map(i=>h('a',{key:i,href:'#projects',className:'block h-44 overflow-hidden'},Im(PROJ[i][5],'transition hover:scale-105'))))),
h(Sec,null,Head('Testimonials','What Our Clients Say'),h('div',{className:'grid md:grid-cols-3 gap-5'},[['The team at ViraConsult helped us restructure our business and achieve remarkable growth. Their expertise and support are unmatched.','Sarah Khan','CEO, TechNova'],['Professional, reliable and result-driven. They truly understand business needs and deliver beyond expectations.','Ahmed Raza','Founder, BrightPath'],['Working with ViraConsult was one of the best decisions for our company. Their strategic insights made a real difference.','Fatima Ali','Managing Director, GreenLeaf']].map(t=>h('div',{key:t[1],className:'border border-line p-6'},h('span',{className:'serif text-4xl text-pri leading-none'},'“'),h('p',{className:'text-sm text-mut -mt-1'},t[0]),h('div',{className:'mt-5 flex items-center gap-3'},h('span',{className:'h-10 w-10 rounded-full bg-pri text-white flex items-center justify-center text-sm'},t[1][0]),h('div',null,h('p',{className:'text-sm font-medium'},t[1]),h('p',{className:'text-xs text-mut'},t[2]))))))),
h(Cta));

const About=()=>h('div',null,Top('About Us','An independent advisory team helping businesses grow with clear strategy and steady execution.'),
h(Sec,{cls:'grid md:grid-cols-2 gap-10 items-center'},h('div',{className:'h-72 md:h-96 overflow-hidden'},Im('e')),h('div',null,h('h2',{className:'serif text-3xl'},'Turning Ideas Into Success'),h('p',{className:'mt-4 text-mut'},'ViraConsult brings together strategists, analysts and operators who stay involved from the first workshop to the final handover. We work closely with each client, so plans turn into results.'),h('p',{className:'mt-4 text-mut'},'Over five years we’ve completed 50+ projects for 100+ clients, with 98% reporting they are satisfied.'))),
h(Sec,{cls:'pt-0'},h('div',{className:'grid md:grid-cols-3 gap-5'},[['Integrity','We tell clients what they need to hear, not what is easiest.'],['Innovation','We bring fresh, practical ideas to long-standing problems.'],['Collaboration','One team with yours, with shared goals and accountability.']].map(v=>h('div',{key:v[0],className:'border border-line p-6'},h('h3',{className:'serif text-xl'},v[0]),h('p',{className:'mt-2 text-sm text-mut'},v[1]))))),
h(Sec,{cls:'pt-0 grid md:grid-cols-2 gap-10 items-center'},h('div',null,h('h2',{className:'serif text-3xl'},'Our approach'),h('p',{className:'mt-4 text-mut'},'We listen first, test our thinking with data, then agree a plan with named owners and dates. Progress is reviewed openly every month.')),h('div',{className:'h-64 overflow-hidden'},Im('d','','center 40%'))),
h(Cta));

const Services=({setPre})=>{const [o,setO]=useState(0);return h('div',null,Top('Services','Choose one service or combine several. Every engagement starts with a clear scope and measurable goals.'),
h(Sec,{cls:'max-w-4xl'},h('div',{className:'space-y-3'},SERV.map((s,i)=>h('div',{key:i,className:'border border-line'},
h('button',{onClick:()=>setO(o===i?-1:i),'aria-expanded':o===i,className:'w-full flex items-center justify-between gap-4 p-5 text-left'},h('span',{className:'font-medium text-lg'},s[0]),h('span',{className:'text-2xl text-mut'},o===i?'−':'+')),
o===i&&h('div',{className:'grid sm:grid-cols-5 gap-5 px-5 pb-5'},h('div',{className:'sm:col-span-2 h-40 overflow-hidden'},Im(s[3])),h('div',{className:'sm:col-span-3'},h('p',{className:'font-medium'},s[1]),h('p',{className:'mt-2 text-mut text-sm'},s[2]),h(Btn,{onClick:()=>{setPre(s[0]);go('contact')},cls:'mt-4 !px-5 !py-2.5'},'Enquire about this')))))),),h(Cta))};

const Projects=()=>{const cats=['All',...new Set(PROJ.map(p=>p[1]))];const [f,setF]=useState('All'),[m,setM]=useState(null);
return h('div',null,Top('Our Work','Selected engagements and the results our clients measured.'),
h(Sec,null,Chips(cats,f,setF),h('div',{className:'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'},PROJ.filter(p=>f==='All'||p[1]===f).map(p=>h('button',{key:p[0],onClick:()=>setM(p),className:'text-left border border-line bg-white transition hover:shadow-lg'},h('div',{className:'h-44 overflow-hidden'},Im(p[5])),h('div',{className:'p-5'},h('p',{className:'text-xs text-mut'},p[1]+' · '+p[2]),h('h3',{className:'mt-1 font-medium'},p[0]),h('p',{className:'mt-2 serif text-xl text-pri'},p[3]))))),
m&&h(Modal,{onClose:()=>setM(null)},h('div',{className:'h-52'},Im(m[5])),h('div',{className:'p-6'},h('p',{className:'text-xs text-mut'},m[1]+' · '+m[2]),h('h3',{className:'serif text-2xl mt-1'},m[0]),h('p',{className:'serif text-2xl text-pri mt-3'},m[3]),h('p',{className:'mt-3 text-mut'},m[4]),h(Btn,{onClick:()=>{setM(null);go('contact')},cls:'mt-5'},'Discuss a similar project')))),h(Cta))};

const Insights=()=>{const cats=['All',...new Set(POSTS.map(p=>p[1]))];const [f,setF]=useState('All'),[q,setQ]=useState(''),[m,setM]=useState(null);
const L=POSTS.filter(p=>(f==='All'||p[1]===f)&&(p[0]+p[4]).toLowerCase().includes(q.toLowerCase()));
return h('div',null,Top('Insights','Short, practical ideas from our team.'),
h(Sec,{cls:'max-w-4xl'},h('input',{value:q,onChange:e=>setQ(e.target.value),placeholder:'Search articles…','aria-label':'Search articles',className:'w-full border border-line px-5 py-3 mb-5'}),Chips(cats,f,setF),
L.length?h('div',{className:'space-y-4'},L.map(p=>h('button',{key:p[0],onClick:()=>setM(p),className:'flex w-full text-left border border-line transition hover:shadow-lg'},h('div',{className:'w-28 sm:w-44 shrink-0 overflow-hidden'},Im(p[6])),h('div',{className:'p-4 sm:p-5'},h('p',{className:'text-xs text-mut'},p[1]+' · '+p[2]+' · '+p[3]),h('h3',{className:'serif text-lg sm:text-xl mt-1'},p[0]),h('p',{className:'mt-1 text-sm text-mut hidden sm:block'},p[4]))))):h('p',{className:'text-mut py-10 text-center'},'No articles match your search.')),
m&&h(Modal,{onClose:()=>setM(null)},h('div',{className:'h-48'},Im(m[6])),h('div',{className:'p-6'},h('p',{className:'text-xs text-mut'},m[1]+' · '+m[3]+' read'),h('h3',{className:'serif text-2xl mt-1'},m[0]),m[5].split('\n\n').map((t,i)=>h('p',{key:i,className:'mt-4 text-mut'},t)))))};

const Contact=({pre,setPre})=>{
const [v,setV]=useState({name:'',email:'',svc:pre||'',msg:''}),[e,setE]=useState({}),[ok,setOk]=useState(false);
const set=k=>ev=>setV({...v,[k]:ev.target.value});
const send=ev=>{ev.preventDefault();const x={};if(!v.name.trim())x.name='Please enter your name.';if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='Enter a valid email address.';if(v.msg.trim().length<10)x.msg='Tell us a little more (10+ characters).';setE(x);if(!Object.keys(x).length){setOk(true);setPre('')}};
const cls='mt-1.5 w-full border border-line bg-white px-4 py-3';
const F=(k,l,el)=>h('label',{className:'block'},h('span',{className:'text-sm font-medium'},l),el,e[k]&&h('span',{className:'block text-sm text-[#b3402a] mt-1'},e[k]));
return h('div',null,Top('Contact Us','Tell us about your goals and a senior consultant will reply within one business day.'),
h(Sec,{cls:'grid md:grid-cols-5 gap-10'},
h('div',{className:'md:col-span-2 space-y-5'},h('div',{className:'h-44 overflow-hidden'},Im('h')),[['Office','Level 12, Meridian Tower'],['Hours','Mon–Fri, 9:00–18:00']].map(i=>h('div',{key:i[0]},h('p',{className:'text-xs text-mut'},i[0]),h(i[0]==='Email'||i[0]==='Phone'?'a':'p',{className:'font-medium block',href:i[0]==='Email'?'mailto:'+i[1]:i[0]==='Phone'?'tel:+15550132040':undefined},i[1])))),
h('div',{className:'md:col-span-3 bg-soft border border-line p-6 md:p-8'},
ok?h('div',{className:'text-center py-10'},h('p',{className:'serif text-3xl'},'Thank you, '+v.name.split(' ')[0]+'.'),h('p',{className:'mt-3 text-mut'},'Your message is in. We’ll reply to '+v.email+' within one business day.'),h(Btn,{v:'o',onClick:()=>{setOk(false);setV({name:'',email:'',svc:'',msg:''})},cls:'mt-6'},'Send another message'))
:h('form',{onSubmit:send,noValidate:true,className:'space-y-5'},
F('name','Full name',h('input',{className:cls,value:v.name,onChange:set('name'),autoComplete:'name'})),
F('email','Email',h('input',{className:cls,type:'email',value:v.email,onChange:set('email'),autoComplete:'email'})),
F('svc','Service of interest',h('select',{className:cls,value:v.svc,onChange:set('svc')},h('option',{value:''},'Not sure yet'),SERV.map(s=>h('option',{key:s[0],value:s[0]},s[0])))),
F('msg','How can we help?',h('textarea',{className:cls,rows:5,value:v.msg,onChange:set('msg')})),
h(Btn,{type:'submit',v:'g'},'Send message')))))};

const Fab=()=>{const [o,setO]=useState(false);
const L=[['Contact form','#contact','chat'],['Email us','mailto:hello@viraconsult.example','mail']];
return h('div',{className:'fixed right-4 z-[55] flex flex-col items-end gap-2',style:{bottom:'calc(1rem + env(safe-area-inset-bottom,0px))'}},
o&&L.map(x=>h('a',{key:x[0],href:x[1],target:x[0]==='WhatsApp'?'_blank':undefined,rel:'noopener',className:'flex items-center gap-2 rounded-full bg-white border border-line shadow-lg pl-4 pr-3 py-2 text-sm font-medium text-ink'},x[0],h('span',{className:'h-8 w-8 rounded-full bg-pri text-white flex items-center justify-center'},h(Ic,{n:x[2],c:'w-4 h-4'})))),
h('a',{href:'#contact','aria-label':'Contact us',className:'ring h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#C8873A] text-ink shadow-xl flex items-center justify-center'},h(Ic,{n:'chat',c:'w-6 h-6'})))};
function App(){
const get=()=>{const k=location.hash.slice(1);return NAV.some(n=>n[0]===k)?k:'home'};
const [r,setR]=useState(get),[pre,setPre]=useState('');
useEffect(()=>{const f=()=>{setR(get());scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);
useEffect(()=>{document.title=NAV.find(n=>n[0]===r)[1]+' — ViraConsult'},[r]);
useEffect(()=>{if(!('IntersectionObserver' in window))return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});const t=setTimeout(()=>document.querySelectorAll('main section:not(:first-child)').forEach(s=>{s.classList.add('rv');io.observe(s)}),30);return()=>{clearTimeout(t);io.disconnect()}},[r]);
const P={home:Home,about:About,services:Services,projects:Projects,insights:Insights,contact:Contact}[r];
return h('div',null,h(Header,{r}),h('main',{key:r+pre,className:'pg'},h(P,{pre,setPre})),h(Footer),h(Fab));
}
ReactDOM.createRoot(document.getElementById('root')).render(h(App));
