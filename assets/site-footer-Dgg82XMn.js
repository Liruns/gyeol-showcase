import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Separator-iI59zboq.js";import{t as i}from"./usage-source-BdQLyNT5.js";import{n as a,r as o}from"./styles-C6lJXrWT.js";var s=`import type {CSSProperties} from 'react';\r
const listReset: CSSProperties = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-4)', margin: 0, padding: 0, listStyle: 'none'};\r
const listLink: CSSProperties = {display: 'inline-flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)'};\r
const region = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'} as const;
import {useId, useState, type MouseEvent} from 'react';\r
import {Separator} from '@gyeol/ui';\r
\r
const guideLinks = [\r
  {label: '찾아오시는 길', href: '/guide/location'},\r
  {label: '자주 묻는 질문', href: '/guide/faq'},\r
  {label: '사이트맵', href: '/sitemap'},\r
];\r
const relatedSites = [\r
  {label: '결시의회', href: 'https://council.gyeol-si.example'},\r
  {label: '결시 보건소', href: 'https://health.gyeol-si.example'},\r
  {label: '결시 평생학습관', href: 'https://learn.gyeol-si.example'},\r
  {label: '결시 시설관리공단', href: 'https://facility.gyeol-si.example'},\r
];\r
const policyLinks = [\r
  {label: '개인정보 처리방침', href: '/policy/privacy', emphasis: true},\r
  {label: '이용약관', href: '/policy/terms', emphasis: false},\r
  {label: '저작권 정책', href: '/policy/copyright', emphasis: false},\r
  {label: '이메일 무단수집 거부', href: '/policy/email', emphasis: false},\r
];\r
\r
const contacts = [\r
  {term: '주소', value: <>(17920) 결시 한빛로 120 결시청 본관</>},\r
  {term: '대표전화', value: <a href="tel:0310002400">031-000-2400</a>},\r
  {term: '민원 상담', value: <>평일 09:00~18:00, <a href="tel:0310002424">031-000-2424</a></>},\r
  {term: '이메일', value: <a href="mailto:minwon@gyeol-si.example">minwon@gyeol-si.example</a>},\r
];\r
\r
function SiteFooter() {\r
  const relatedId = useId();\r
  const [followed, setFollowed] = useState('');\r
\r
  /* Demo only: links report where they lead instead of leaving the catalog page. */\r
  function followLink(event: MouseEvent<HTMLElement>) {\r
    const link = (event.target as Element).closest('a');\r
    const href = link?.getAttribute('href');\r
    if (!link || !href) return;\r
    event.preventDefault();\r
    setFollowed(\`\${link.textContent ?? ''} (\${href})\`);\r
  }\r
\r
  /* The readout sits under the footer, not in a Workbench rail: a rail would narrow the preview and stack the footer columns at desktop width. */\r
  return <div style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
    <footer onClickCapture={followLink} style={{display: 'grid', gap: 'var(--g-space-5)', minWidth: 0, paddingBlockStart: 'var(--g-space-6)', borderTop: 'var(--g-border-width) solid var(--g-border)', color: 'var(--g-ink)', fontSize: 'var(--g-text-compact)'}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-8)'}}>\r
        <div style={{flex: '2 1 calc(var(--g-field-basis) * 2)', minWidth: 0, display: 'grid', gap: 'var(--g-space-4)', alignContent: 'start'}}>\r
          <div>\r
            <p style={{margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>결시청</p>\r
            <p style={{margin: 'var(--g-space-1) 0 0', color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>결시 민원 포털은 결시청 시민소통과가 운영합니다.</p>\r
          </div>\r
          <dl aria-label="결시청 연락처" style={{display: 'grid', gridTemplateColumns: 'max-content minmax(0, 1fr)', columnGap: 'var(--g-space-4)', rowGap: 'var(--g-space-1)', margin: 0, fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)', overflowWrap: 'anywhere'}}>\r
            {contacts.map(({term, value}) => <div key={term} style={{display: 'contents'}}>\r
              <dt style={{color: 'var(--g-muted)'}}>{term}</dt>\r
              <dd style={{margin: 0}}>{value}</dd>\r
            </div>)}\r
          </dl>\r
          <nav aria-label="이용 안내">\r
            <ul style={listReset}>{guideLinks.map(link => <li key={link.href}><a href={link.href} style={listLink}>{link.label}</a></li>)}</ul>\r
          </nav>\r
        </div>\r
        <nav aria-labelledby={relatedId} style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, display: 'grid', gap: 'var(--g-space-2)', alignContent: 'start'}}>\r
          <h2 id={relatedId} style={{margin: 0, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-control)'}}>관련 사이트</h2>\r
          <ul style={{...listReset, display: 'grid'}}>{relatedSites.map(site => <li key={site.href}><a href={site.href} style={listLink}>{site.label}</a></li>)}</ul>\r
        </nav>\r
      </div>\r
      <Separator decorative/>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', columnGap: 'var(--g-space-6)'}}>\r
        <nav aria-label="정책">\r
          <ul style={listReset}>{policyLinks.map(link => <li key={link.href}>\r
            <a href={link.href} style={{...listLink, color: link.emphasis ? 'var(--g-ink)' : 'var(--g-muted)', fontWeight: link.emphasis ? 'var(--g-weight-semibold)' : 'var(--g-weight-regular)'}}>{link.label}</a>\r
          </li>)}</ul>\r
        </nav>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>© 2026 결시청</p>\r
      </div>\r
    </footer>\r
    <output className="catalog-readout" aria-live="polite">누른 링크: {followed || '없음'}</output>\r
  </div>;\r
}`,c=e(t(),1),l=n(),u=[{label:`찾아오시는 길`,href:`/guide/location`},{label:`자주 묻는 질문`,href:`/guide/faq`},{label:`사이트맵`,href:`/sitemap`}],d=[{label:`결시의회`,href:`https://council.gyeol-si.example`},{label:`결시 보건소`,href:`https://health.gyeol-si.example`},{label:`결시 평생학습관`,href:`https://learn.gyeol-si.example`},{label:`결시 시설관리공단`,href:`https://facility.gyeol-si.example`}],f=[{label:`개인정보 처리방침`,href:`/policy/privacy`,emphasis:!0},{label:`이용약관`,href:`/policy/terms`,emphasis:!1},{label:`저작권 정책`,href:`/policy/copyright`,emphasis:!1},{label:`이메일 무단수집 거부`,href:`/policy/email`,emphasis:!1}],p=[{term:`주소`,value:(0,l.jsx)(l.Fragment,{children:`(17920) 결시 한빛로 120 결시청 본관`})},{term:`대표전화`,value:(0,l.jsx)(`a`,{href:`tel:0310002400`,children:`031-000-2400`})},{term:`민원 상담`,value:(0,l.jsxs)(l.Fragment,{children:[`평일 09:00~18:00, `,(0,l.jsx)(`a`,{href:`tel:0310002424`,children:`031-000-2424`})]})},{term:`이메일`,value:(0,l.jsx)(`a`,{href:`mailto:minwon@gyeol-si.example`,children:`minwon@gyeol-si.example`})}];function m(){let e=(0,c.useId)(),[t,n]=(0,c.useState)(``);function i(e){let t=e.target.closest(`a`),r=t?.getAttribute(`href`);t&&r&&(e.preventDefault(),n(`${t.textContent??``} (${r})`))}return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,l.jsxs)(`footer`,{onClickCapture:i,style:{display:`grid`,gap:`var(--g-space-5)`,minWidth:0,paddingBlockStart:`var(--g-space-6)`,borderTop:`var(--g-border-width) solid var(--g-border)`,color:`var(--g-ink)`,fontSize:`var(--g-text-compact)`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-8)`},children:[(0,l.jsxs)(`div`,{style:{flex:`2 1 calc(var(--g-field-basis) * 2)`,minWidth:0,display:`grid`,gap:`var(--g-space-4)`,alignContent:`start`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`결시청`}),(0,l.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`결시 민원 포털은 결시청 시민소통과가 운영합니다.`})]}),(0,l.jsx)(`dl`,{"aria-label":`결시청 연락처`,style:{display:`grid`,gridTemplateColumns:`max-content minmax(0, 1fr)`,columnGap:`var(--g-space-4)`,rowGap:`var(--g-space-1)`,margin:0,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`,overflowWrap:`anywhere`},children:p.map(({term:e,value:t})=>(0,l.jsxs)(`div`,{style:{display:`contents`},children:[(0,l.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,l.jsx)(`dd`,{style:{margin:0},children:t})]},e))}),(0,l.jsx)(`nav`,{"aria-label":`이용 안내`,children:(0,l.jsx)(`ul`,{style:o,children:u.map(e=>(0,l.jsx)(`li`,{children:(0,l.jsx)(`a`,{href:e.href,style:a,children:e.label})},e.href))})})]}),(0,l.jsxs)(`nav`,{"aria-labelledby":e,style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,display:`grid`,gap:`var(--g-space-2)`,alignContent:`start`},children:[(0,l.jsx)(`h2`,{id:e,style:{margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-control)`},children:`관련 사이트`}),(0,l.jsx)(`ul`,{style:{...o,display:`grid`},children:d.map(e=>(0,l.jsx)(`li`,{children:(0,l.jsx)(`a`,{href:e.href,style:a,children:e.label})},e.href))})]})]}),(0,l.jsx)(r,{decorative:!0}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,columnGap:`var(--g-space-6)`},children:[(0,l.jsx)(`nav`,{"aria-label":`정책`,children:(0,l.jsx)(`ul`,{style:o,children:f.map(e=>(0,l.jsx)(`li`,{children:(0,l.jsx)(`a`,{href:e.href,style:{...a,color:e.emphasis?`var(--g-ink)`:`var(--g-muted)`,fontWeight:e.emphasis?`var(--g-weight-semibold)`:`var(--g-weight-regular)`},children:e.label})},e.href))})}),(0,l.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`© 2026 결시청`})]})]}),(0,l.jsxs)(`output`,{className:`catalog-readout`,"aria-live":`polite`,children:[`누른 링크: `,t||`없음`]})]})}var h={id:`site-footer`,title:`사이트 푸터`,koreanTitle:`사이트 푸터`,group:`blocks`,description:`공공 서비스 화면 맨 아래에 두는 푸터입니다. 운영 기관, 주소와 연락처, 이용 안내, 관련 사이트, 정책 링크, 저작권 순서로 읽힙니다. 개인정보 처리방침은 색만이 아니라 굵은 글씨로 다른 정책과 구분합니다. 좁은 화면에서는 같은 순서로 한 단씩 쌓입니다.`,demo:m,whenToUse:[`시청이나 구청 민원 포털 맨 아래에 운영 기관, 주소와 연락처, 이용 안내, 정책 링크를 정해진 순서로 둘 때 씁니다.`,`개인정보 처리방침을 다른 정책 링크보다 굵게 구분해야 하는 공공 서비스 화면에 씁니다.`],whenNot:[`화면 안의 구역 이동 링크 모음은 NavigationMenu를 씁니다.`,`경로를 단계별로 보여 줄 때는 Breadcrumb을 씁니다.`,`화면 위쪽에 띄우는 서비스 공지는 Announcement를 씁니다.`],aiNotes:[`이 블록은 패키지 컴포넌트가 아니라 Separator와 일반 링크 목록으로 짠 예시이므로 usage 코드를 가져다 기관 정보와 링크를 바꿔 씁니다.`,`연락처는 dl, 이용 안내와 관련 사이트는 이름 붙인 nav로 두어 보조 기술이 구역을 구분하게 합니다.`,`개인정보 처리방침은 색이 아니라 굵은 글씨로 구분하고, 좁은 화면에서는 같은 읽기 순서로 한 단씩 쌓입니다.`],usage:i(s),props:[{name:`Separator`,type:`'@gyeol/ui'`,description:`기관 정보와 정책 링크 사이의 장식용 구분선.`}]};export{h as doc};