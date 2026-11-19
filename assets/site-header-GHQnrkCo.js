import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-DjMJDlCG.js";import{t as i}from"./NavigationMenu-KxniYCgG.js";import{t as a}from"./SearchInput-Dd3aAzAW.js";import{t as o}from"./Dialog-DZH8IFII.js";import{t as s}from"./DisplaySettings-CK97p-zC.js";import{t as c}from"./LanguageSwitcher-B8sl6X8M.js";import{t as l}from"./Sheet-CR4NhoA0.js";import{t as u}from"./usage-source-BdQLyNT5.js";import{n as d,r as f}from"./styles-C6lJXrWT.js";var p=`import type {CSSProperties} from 'react';\r
const listReset: CSSProperties = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-4)', margin: 0, padding: 0, listStyle: 'none'};\r
const listLink: CSSProperties = {display: 'inline-flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)'};\r
const region = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'} as const;
import {useId, useLayoutEffect, useRef, useState, type MouseEvent, type RefObject} from 'react';\r
import {Button, Dialog, DisplaySettings, LanguageSwitcher, NavigationMenu, SearchInput, Sheet} from '@gyeol/ui';\r
import type {NavigationMenuProps} from '@gyeol/ui';\r
\r
const mainMenu: NavigationMenuProps['items'] = [\r
  {id: 'apply', label: '민원 신청', links: [\r
    {id: 'move-in', label: '전입신고', description: '이사한 날부터 14일 안에 새 주소지로 신고합니다.', href: '/apply/move-in'},\r
    {id: 'resident-copy', label: '주민등록표 등본 발급', description: '본인과 세대원 등본을 바로 출력합니다.', href: '/apply/resident-copy'},\r
    {id: 'passport', label: '여권 재발급 예약', description: '본관 1층 민원실 방문 시간을 고릅니다.', href: '/apply/passport'},\r
  ]},\r
  {id: 'life', label: '생활 안내', links: [\r
    {id: 'waste', label: '생활폐기물 배출 요일', href: '/life/waste'},\r
    {id: 'parking', label: '공영주차장 요금', href: '/life/parking'},\r
    {id: 'vaccine', label: '어린이 예방접종 일정', href: '/life/vaccine'},\r
  ]},\r
  {id: 'join', label: '시민 참여', links: [\r
    {id: 'proposal', label: '시민 제안', href: '/join/proposal'},\r
    {id: 'survey', label: '진행 중인 설문', href: '/join/survey'},\r
  ]},\r
  {id: 'about', label: '결시청 안내', href: '/about'},\r
];\r
const utilityLinks = [{label: '로그인', href: '/login'}, {label: '사이트맵', href: '/sitemap'}] as const;\r
\r
const pageLabels = new Map<string, string>([['/', '홈']]);\r
for (const link of utilityLinks) pageLabels.set(link.href, link.label);\r
for (const item of mainMenu) for (const link of 'links' in item ? item.links : [item]) pageLabels.set(link.href, link.label);\r
\r
\r
/** Below 40rem the main menu would already stack into a column, so the header hands it to a sheet instead. */\r
function useNarrow(ref: RefObject<HTMLElement | null>) {\r
  const [narrow, setNarrow] = useState(false);\r
  useLayoutEffect(() => {\r
    const element = ref.current;\r
    if (!element) return;\r
    const measure = () => {\r
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);\r
      setNarrow(element.getBoundingClientRect().width < 40 * rem);\r
    };\r
    const observer = new ResizeObserver(measure);\r
    observer.observe(element);\r
    measure();\r
    return () => observer.disconnect();\r
  }, [ref]);\r
  return narrow;\r
}\r
\r
function SiteHeader() {\r
  const root = useRef<HTMLDivElement>(null);\r
  const main = useRef<HTMLElement>(null);\r
  const mainId = useId();\r
  const narrow = useNarrow(root);\r
  const [current, setCurrent] = useState('/apply/move-in');\r
  const [message, setMessage] = useState('현재 주소: /apply/move-in');\r
  const [menuOpen, setMenuOpen] = useState(false);\r
  const [sheetSide, setSheetSide] = useState<'left' | 'right'>('right');\r
  const [skipFocused, setSkipFocused] = useState(false);\r
\r
  /* Demo only: a link updates the stand-in page heading and the readout instead of leaving the catalog page. */\r
  function followLink(event: MouseEvent<HTMLDivElement>) {\r
    const href = (event.target as Element).closest('a')?.getAttribute('href');\r
    if (!href?.startsWith('/')) return;\r
    event.preventDefault();\r
    setCurrent(href);\r
    setMessage(\`현재 주소: \${href}\`);\r
    setMenuOpen(false);\r
  }\r
\r
  function search(query: string) {\r
    const text = query.trim();\r
    if (!text) {\r
      setMessage('검색어를 입력해 주세요.');\r
      return;\r
    }\r
    setCurrent('/search');\r
    setMessage(\`검색어: \${text}\`);\r
    setMenuOpen(false);\r
  }\r
\r
  function openMenu(open: boolean) {\r
    if (open && root.current) setSheetSide(getComputedStyle(root.current).direction === 'rtl' ? 'left' : 'right');\r
    setMenuOpen(open);\r
  }\r
\r
  const utility = <nav aria-label="이용자 메뉴">\r
    <ul style={listReset}>{utilityLinks.map(link => <li key={link.href}><a href={link.href} style={listLink}>{link.label}</a></li>)}</ul>\r
  </nav>;\r
  const settings = (variant: 'quiet' | 'secondary') => <span className="catalog-subordinate-tools">\r
    <LanguageSwitcher label="언어 선택" languages={[{code: 'ko', label: '한국어'}, {code: 'en', label: 'English'}, {code: 'ja', label: '日本語'}]}\r
      defaultValue="ko" onChange={code => setMessage(\`선택한 언어: \${code}\`)}/>\r
    <Dialog title="화면 설정" closeLabel="닫기" trigger={<Button variant={variant}>화면 설정</Button>}>\r
      <DisplaySettings onReset={() => setMessage('화면 설정을 초기화했어요.')}/>\r
    </Dialog>\r
  </span>;\r
  const searchField = <div role="search" style={{flex: '0 1 calc(var(--g-field-basis) * 1.75)', minWidth: 0}}>\r
    <SearchInput label="통합검색" placeholder="예: 전입신고, 여권" onSearch={search}/>\r
  </div>;\r
\r
  /* The readout sits under the block, not in a Workbench rail: a rail would narrow the preview below 40rem and hide the wide header. */\r
  return <div style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
  <div ref={root} onClickCapture={followLink} style={{minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header style={{position: 'relative', isolation: 'isolate', display: 'grid', gap: 'var(--g-space-4)', paddingBlockEnd: narrow ? 'var(--g-space-4)' : 'var(--g-space-2)', borderBottom: 'var(--g-border-width) solid var(--g-border)'}}>\r
      <a href={\`#\${mainId}\`} onFocus={() => setSkipFocused(true)} onBlur={() => setSkipFocused(false)}\r
        onClick={event => { event.preventDefault(); main.current?.focus(); }}\r
        style={{position: 'absolute', insetBlockStart: 0, insetInlineStart: 0, zIndex: 1, display: 'inline-flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)', paddingInline: 'var(--g-space-3)', border: 'var(--g-border-width) solid var(--g-border)', borderRadius: 'var(--g-radius-control)', background: 'var(--g-surface)', fontWeight: 'var(--g-weight-semibold)', opacity: skipFocused ? 1 : 0, pointerEvents: skipFocused ? 'auto' : 'none', transition: 'opacity var(--g-duration-fast) var(--g-ease-standard)'}}>본문 바로가기</a>\r
      {!narrow && <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', columnGap: 'var(--g-space-4)', fontSize: 'var(--g-text-small)'}}>\r
        {utility}\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-1)'}}>{settings('quiet')}</div>\r
      </div>}\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: narrow ? 'center' : 'flex-end', justifyContent: 'space-between', gap: 'var(--g-space-4)'}}>\r
        <a href="/" aria-label="결시 민원 포털 홈" style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0, color: 'inherit', textDecoration: 'none'}}>\r
          <span style={{fontSize: 'var(--g-text-heading-3)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>결시 민원 포털</span>\r
          <span style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>결시청 시민소통과 운영</span>\r
        </a>\r
        {narrow\r
          ? <Sheet title="전체 메뉴" closeLabel="닫기" side={sheetSide} size="full" open={menuOpen} onOpenChange={openMenu}\r
            trigger={<Button variant="secondary">전체 메뉴</Button>}>\r
            {searchField}\r
            <NavigationMenu label="주 메뉴" items={mainMenu} currentHref={current}/>\r
            <div style={{fontSize: 'var(--g-text-small)'}}>{utility}</div>\r
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>{settings('secondary')}</div>\r
          </Sheet>\r
          : searchField}\r
      </div>\r
      {!narrow && <NavigationMenu label="주 메뉴" items={mainMenu} currentHref={current}/>}\r
    </header>\r
    <section ref={main} id={mainId} tabIndex={-1} aria-labelledby={\`\${mainId}-title\`} style={{paddingBlock: 'var(--g-space-6)'}}>\r
      <h2 id={\`\${mainId}-title\`} style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>{pageLabels.get(current) ?? '통합검색 결과'}</h2>\r
    </section>\r
  </div>\r
  <output className="catalog-readout" aria-live="polite">{message}</output>\r
  </div>;\r
}`,m=e(t(),1),h=n(),g=[{id:`apply`,label:`민원 신청`,links:[{id:`move-in`,label:`전입신고`,description:`이사한 날부터 14일 안에 새 주소지로 신고합니다.`,href:`/apply/move-in`},{id:`resident-copy`,label:`주민등록표 등본 발급`,description:`본인과 세대원 등본을 바로 출력합니다.`,href:`/apply/resident-copy`},{id:`passport`,label:`여권 재발급 예약`,description:`본관 1층 민원실 방문 시간을 고릅니다.`,href:`/apply/passport`}]},{id:`life`,label:`생활 안내`,links:[{id:`waste`,label:`생활폐기물 배출 요일`,href:`/life/waste`},{id:`parking`,label:`공영주차장 요금`,href:`/life/parking`},{id:`vaccine`,label:`어린이 예방접종 일정`,href:`/life/vaccine`}]},{id:`join`,label:`시민 참여`,links:[{id:`proposal`,label:`시민 제안`,href:`/join/proposal`},{id:`survey`,label:`진행 중인 설문`,href:`/join/survey`}]},{id:`about`,label:`결시청 안내`,href:`/about`}],_=[{label:`로그인`,href:`/login`},{label:`사이트맵`,href:`/sitemap`}],v=new Map([[`/`,`홈`]]);for(let e of _)v.set(e.href,e.label);for(let e of g)for(let t of`links`in e?e.links:[e])v.set(t.href,t.label);function y(e){let[t,n]=(0,m.useState)(!1);return(0,m.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{let e=parseFloat(getComputedStyle(document.documentElement).fontSize);n(t.getBoundingClientRect().width<40*e)},i=new ResizeObserver(r);return i.observe(t),r(),()=>i.disconnect()},[e]),t}function b(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),n=(0,m.useId)(),u=y(e),[p,b]=(0,m.useState)(`/apply/move-in`),[x,S]=(0,m.useState)(`현재 주소: /apply/move-in`),[C,w]=(0,m.useState)(!1),[T,E]=(0,m.useState)(`right`),[D,O]=(0,m.useState)(!1);function k(e){let t=e.target.closest(`a`)?.getAttribute(`href`);t?.startsWith(`/`)&&(e.preventDefault(),b(t),S(`현재 주소: ${t}`),w(!1))}function A(e){let t=e.trim();t?(b(`/search`),S(`검색어: ${t}`),w(!1)):S(`검색어를 입력해 주세요.`)}function j(t){t&&e.current&&E(getComputedStyle(e.current).direction===`rtl`?`left`:`right`),w(t)}let M=(0,h.jsx)(`nav`,{"aria-label":`이용자 메뉴`,children:(0,h.jsx)(`ul`,{style:f,children:_.map(e=>(0,h.jsx)(`li`,{children:(0,h.jsx)(`a`,{href:e.href,style:d,children:e.label})},e.href))})}),N=e=>(0,h.jsxs)(`span`,{className:`catalog-subordinate-tools`,children:[(0,h.jsx)(c,{label:`언어 선택`,languages:[{code:`ko`,label:`한국어`},{code:`en`,label:`English`},{code:`ja`,label:`日本語`}],defaultValue:`ko`,onChange:e=>S(`선택한 언어: ${e}`)}),(0,h.jsx)(o,{title:`화면 설정`,closeLabel:`닫기`,trigger:(0,h.jsx)(r,{variant:e,children:`화면 설정`}),children:(0,h.jsx)(s,{onReset:()=>S(`화면 설정을 초기화했어요.`)})})]}),P=(0,h.jsx)(`div`,{role:`search`,style:{flex:`0 1 calc(var(--g-field-basis) * 1.75)`,minWidth:0},children:(0,h.jsx)(a,{label:`통합검색`,placeholder:`예: 전입신고, 여권`,onSearch:A})});return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,h.jsxs)(`div`,{ref:e,onClickCapture:k,style:{minWidth:0,color:`var(--g-ink)`},children:[(0,h.jsxs)(`header`,{style:{position:`relative`,isolation:`isolate`,display:`grid`,gap:`var(--g-space-4)`,paddingBlockEnd:u?`var(--g-space-4)`:`var(--g-space-2)`,borderBottom:`var(--g-border-width) solid var(--g-border)`},children:[(0,h.jsx)(`a`,{href:`#${n}`,onFocus:()=>O(!0),onBlur:()=>O(!1),onClick:e=>{e.preventDefault(),t.current?.focus()},style:{position:`absolute`,insetBlockStart:0,insetInlineStart:0,zIndex:1,display:`inline-flex`,alignItems:`center`,minBlockSize:`var(--g-target-min)`,paddingInline:`var(--g-space-3)`,border:`var(--g-border-width) solid var(--g-border)`,borderRadius:`var(--g-radius-control)`,background:`var(--g-surface)`,fontWeight:`var(--g-weight-semibold)`,opacity:+!!D,pointerEvents:D?`auto`:`none`,transition:`opacity var(--g-duration-fast) var(--g-ease-standard)`},children:`본문 바로가기`}),!u&&(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`flex-end`,columnGap:`var(--g-space-4)`,fontSize:`var(--g-text-small)`},children:[M,(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-1)`},children:N(`quiet`)})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:u?`center`:`flex-end`,justifyContent:`space-between`,gap:`var(--g-space-4)`},children:[(0,h.jsxs)(`a`,{href:`/`,"aria-label":`결시 민원 포털 홈`,style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0,color:`inherit`,textDecoration:`none`},children:[(0,h.jsx)(`span`,{style:{fontSize:`var(--g-text-heading-3)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`결시 민원 포털`}),(0,h.jsx)(`span`,{style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:`결시청 시민소통과 운영`})]}),u?(0,h.jsxs)(l,{title:`전체 메뉴`,closeLabel:`닫기`,side:T,size:`full`,open:C,onOpenChange:j,trigger:(0,h.jsx)(r,{variant:`secondary`,children:`전체 메뉴`}),children:[P,(0,h.jsx)(i,{label:`주 메뉴`,items:g,currentHref:p}),(0,h.jsx)(`div`,{style:{fontSize:`var(--g-text-small)`},children:M}),(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:N(`secondary`)})]}):P]}),!u&&(0,h.jsx)(i,{label:`주 메뉴`,items:g,currentHref:p})]}),(0,h.jsx)(`section`,{ref:t,id:n,tabIndex:-1,"aria-labelledby":`${n}-title`,style:{paddingBlock:`var(--g-space-6)`},children:(0,h.jsx)(`h2`,{id:`${n}-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:v.get(p)??`통합검색 결과`})})]}),(0,h.jsx)(`output`,{className:`catalog-readout`,"aria-live":`polite`,children:x})]})}var x={id:`site-header`,title:`사이트 헤더`,koreanTitle:`사이트 헤더`,group:`blocks`,interactions:[`press`,`type`],description:`공공 서비스 화면 맨 위에 두는 헤더입니다. 본문 바로가기, 이용자 메뉴, 언어와 화면 설정, 서비스 이름, 통합검색, 주 메뉴 순서로 읽힙니다. 헤더 폭이 40rem보다 좁으면 검색과 주 메뉴가 전체 메뉴 시트 안으로 옮겨 갑니다.`,demo:b,whenToUse:[`공공 서비스 화면 맨 위에서 본문 바로가기, 통합검색, 주 메뉴를 한 번에 두는 헤더에 씁니다.`,`글자 크기와 대비 같은 화면 설정과 언어 선택이 함께 필요한 시민 대상 서비스에 씁니다.`],whenNot:[`작업 도구 안의 좌측 탐색은 Sidebar나 LineSidebar가 맞습니다.`,`메뉴 항목이 많은 앱의 상단 메뉴는 MenuBar를 씁니다.`,`화면 이동 없이 상태를 알리는 바는 StatusBar를 씁니다.`],aiNotes:[`이 블록은 NavigationMenu, SearchInput, Sheet, LanguageSwitcher, DisplaySettings, Button을 조합한 예시라 소스를 복사해 메뉴와 링크를 바꿉니다.`,`읽는 순서가 본문 바로가기, 이용자 메뉴, 언어와 화면 설정, 서비스 이름, 통합검색, 주 메뉴이므로 이 순서를 바꾸지 않습니다.`,`폭이 40rem보다 좁으면 검색과 주 메뉴가 Sheet로 옮겨 가야 합니다. 언어 선택 데모는 본문을 번역하지 않습니다.`],usage:u(p),props:[{name:`NavigationMenu`,type:`'@gyeol/ui'`,description:`민원 신청, 생활 안내, 시민 참여 하위 메뉴와 현재 위치를 표시하는 주 메뉴.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`보이는 레이블이 있는 통합검색 필드. Enter로 검색하고 Esc로 검색어를 지웁니다.`},{name:`Sheet`,type:`'@gyeol/ui'`,description:`좁은 화면에서 검색, 주 메뉴, 이용자 메뉴를 담는 전체 메뉴. 읽기 방향의 끝 가장자리에서 열립니다.`},{name:`LanguageSwitcher`,type:`'@gyeol/ui'`,description:`언어 이름을 해당 언어로 읽는 선택 메뉴. 데모는 선택 결과를 표시하고 본문을 번역하지 않습니다.`},{name:`DisplaySettings`,type:`'@gyeol/ui'`,description:`화면 설정 대화상자에서 글자 크기, 대비, 테마를 바꿉니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`전체 메뉴와 화면 설정 대화상자를 엽니다.`}]};export{x as doc};