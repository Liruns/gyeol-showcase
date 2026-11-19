import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{t}from"./NavigationMenu-KxniYCgG.js";import{t as n}from"./usage-source-BdQLyNT5.js";var r=`import {NavigationMenu} from '@gyeol/ui';\r
\r
const metrics = [\r
  {title: '진행 중인 프로젝트', value: '8', detail: '이번 주 새 프로젝트 2개'},\r
  {title: '이번 주 일정', value: '12', detail: '오늘 14:00 디자인 리뷰'},\r
  {title: '함께하는 동료', value: '24', detail: '기획 6, 디자인 8, 개발 10'},\r
];\r
\r
function NavigationBar() {\r
  return (\r
    <section aria-label="모아 작업 공간" style={{display: 'grid', gap: 'var(--g-space-6)', width: '100%', minWidth: 0, color: 'var(--g-ink)'}}>\r
      <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2) var(--g-space-6)', paddingBlockEnd: 'var(--g-space-3)', borderBottom: 'var(--g-border-width) solid var(--g-border)'}}>\r
        <strong style={{fontWeight: 'var(--g-weight-semibold)'}}>모아</strong>\r
        <div style={{flex: '1 1 calc(var(--g-space-16) * 6)', minWidth: 0}}><NavigationMenu label="작업 공간 탐색" currentHref="#/navigation-bar" items={[\r
          {id: 'home', label: '개요', href: '#/navigation-bar'},\r
          {id: 'projects', label: '프로젝트', href: '#/project-card'},\r
          {id: 'schedule', label: '일정', href: '#/calendar'},\r
          {id: 'resources', label: '도움말', links: [\r
            {id: 'start', label: '시작 안내', description: '설치와 초대 순서', href: '#/setup-guide'},\r
            {id: 'updates', label: '새로운 소식', description: '공지와 변경 사항', href: '#/announcement'},\r
          ]},\r
        ]}/></div>\r
      </header>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-1) var(--g-space-3)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>개요</h2>\r
        <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>10월 26일 월요일</span>\r
      </div>\r
      <dl style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, var(--g-field-basis)), 1fr))', gap: 'var(--g-space-6)', margin: 0}}>\r
        {metrics.map(item => <div key={item.title} style={{display: 'grid', gap: 'var(--g-space-1)', alignContent: 'start', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
          <dt style={{color: 'var(--g-muted)'}}>{item.title}</dt>\r
          <dd style={{margin: 0, fontSize: 'var(--g-text-heading-2)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)', fontVariantNumeric: 'tabular-nums'}}>{item.value}</dd>\r
          <dd style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{item.detail}</dd>\r
        </div>)}\r
      </dl>\r
    </section>\r
  );\r
}`,i=e(),a=[{title:`진행 중인 프로젝트`,value:`8`,detail:`이번 주 새 프로젝트 2개`},{title:`이번 주 일정`,value:`12`,detail:`오늘 14:00 디자인 리뷰`},{title:`함께하는 동료`,value:`24`,detail:`기획 6, 디자인 8, 개발 10`}];function o(){return(0,i.jsxs)(`section`,{"aria-label":`모아 작업 공간`,style:{display:`grid`,gap:`var(--g-space-6)`,width:`100%`,minWidth:0,color:`var(--g-ink)`},children:[(0,i.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2) var(--g-space-6)`,paddingBlockEnd:`var(--g-space-3)`,borderBottom:`var(--g-border-width) solid var(--g-border)`},children:[(0,i.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-semibold)`},children:`모아`}),(0,i.jsx)(`div`,{style:{flex:`1 1 calc(var(--g-space-16) * 6)`,minWidth:0},children:(0,i.jsx)(t,{label:`작업 공간 탐색`,currentHref:`#/navigation-bar`,items:[{id:`home`,label:`개요`,href:`#/navigation-bar`},{id:`projects`,label:`프로젝트`,href:`#/project-card`},{id:`schedule`,label:`일정`,href:`#/calendar`},{id:`resources`,label:`도움말`,links:[{id:`start`,label:`시작 안내`,description:`설치와 초대 순서`,href:`#/setup-guide`},{id:`updates`,label:`새로운 소식`,description:`공지와 변경 사항`,href:`#/announcement`}]}]})})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-1) var(--g-space-3)`},children:[(0,i.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`개요`}),(0,i.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`10월 26일 월요일`})]}),(0,i.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, var(--g-field-basis)), 1fr))`,gap:`var(--g-space-6)`,margin:0},children:a.map(e=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,alignContent:`start`,minWidth:0,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,i.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e.title}),(0,i.jsx)(`dd`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`,fontVariantNumeric:`tabular-nums`},children:e.value}),(0,i.jsx)(`dd`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.detail})]},e.title))})]})}var s={id:`navigation-bar`,title:`작업 공간 내비게이션`,koreanTitle:`작업 공간 내비게이션`,group:`blocks`,interactions:[`press`],description:`작업 공간 이름과 상단 메뉴, 그 아래 개요 화면을 묶은 블록입니다.`,behavior:[`상단 막대는 아래쪽 구분선 하나만 그립니다. 바깥 테두리와 배경은 이 블록을 담는 화면이 정합니다.`,`NavigationMenu는 현재 주소의 링크에 aria-current="page"를 붙입니다. 도움말은 Enter나 Space로 여는 하위 메뉴이고, Escape로 닫으면 초점이 도움말 버튼으로 돌아갑니다.`,`메뉴 너비가 40rem보다 좁으면 항목이 세로로 쌓이고, 하위 메뉴는 떠 있는 층 대신 그 자리에서 펼쳐집니다.`,`현황은 용어와 값 목록이고, 숫자는 표 형태 숫자로 맞춥니다.`,`예제의 메뉴는 관련 쇼케이스 예제로 연결됩니다.`],demo:o,whenToUse:[`작업 공간 이름과 프로젝트, 일정, 도움말 같은 상단 메뉴를 한 줄로 두고 아래에 개요를 놓는 화면에서 씁니다.`,`현재 위치를 aria-current로 표시해야 하는 사내 도구의 최상위 이동 막대에 맞습니다.`],whenNot:[`화면 왼쪽에 항목이 길게 쌓이는 메뉴는 Sidebar를 씁니다.`,`모바일 하단의 주요 목적지 이동은 TabBar를 씁니다.`,`한 화면 안에서 같은 층의 내용을 바꾸는 탭은 Tabs를 씁니다.`],aiNotes:[`props 없이 NavigationMenu를 조합한 블록이므로 usage의 소스를 복사해 메뉴 항목과 주소를 바꿉니다.`,`NavigationMenu가 현재 주소와 같은 링크에 aria-current를 붙이므로 항목의 href를 실제 라우트와 맞춥니다.`,`메뉴 너비가 40rem보다 좁으면 항목이 세로로 쌓이고 하위 메뉴가 그 자리에서 펼쳐지는 동작을 유지합니다.`],usage:n(r),props:[{name:`NavigationMenu`,type:`'@gyeol/ui'`,description:`현재 위치와 프로젝트, 일정, 도움말 하위 메뉴를 담은 탐색 영역입니다.`}]};export{s as doc};