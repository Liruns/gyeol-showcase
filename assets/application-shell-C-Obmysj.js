import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BeI4_wN4.js";import{r as i,t as a}from"./Avatar-Cq8zREtD.js";import{n as o}from"./Badge-0pdlwniF.js";import{a as s,n as c,o as l,r as u,t as d}from"./Card-zVT-IwO2.js";import{t as f}from"./usage-source-BdQLyNT5.js";var p=`import {useState} from 'react';\r
import {Avatar, AvatarFallback, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Progress} from '@gyeol/ui';\r
\r
const sections = ['홈', '프로젝트', '팀 소식'] as const;\r
const metrics = [['진행 중인 프로젝트', '2개'], ['이번 주 마감', '1개'], ['팀원', '8명']] as const;\r
const projects = [\r
  {name: '가을 서비스 개편', detail: '결제와 정산 화면 6개 개편', owner: '서연', value: 72, date: '10월 30일'},\r
  {name: '고객 안내 개선', detail: '첫 방문 안내 문구 정리', owner: '지호', value: 45, date: '11월 6일'},\r
];\r
\r
function ApplicationShell() {\r
  const [section, setSection] = useState<string>('홈');\r
  const [reviewed, setReviewed] = useState(false);\r
  return <div style={{color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-3)', paddingBlock: 'var(--g-space-3)', borderBottom: 'var(--g-border-width) solid var(--g-border)'}}>\r
      <Avatar size="sm"><AvatarFallback label="모아 팀 워크스페이스">모</AvatarFallback></Avatar>\r
      <div><strong>모아 워크스페이스</strong><div style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>제품팀</div></div>\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', columnGap: 'var(--g-space-8)', minWidth: 0}}>\r
      <aside style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, paddingBlock: 'var(--g-space-4)'}}>\r
        <nav aria-label="워크스페이스 메뉴">\r
          <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'grid'}}>\r
            {sections.map(item => {\r
              const isCurrent = section === item;\r
              return <li key={item}>\r
                <Button variant="quiet" {...(isCurrent ? {'aria-current': 'page' as const} : {})} onPress={() => setSection(item)}\r
                  style={{width: '100%', justifyContent: 'flex-start', color: isCurrent ? 'var(--g-accent)' : 'var(--g-ink)', fontWeight: isCurrent ? 'var(--g-weight-selected)' : 'var(--g-weight-regular)'}}>{item}</Button>\r
              </li>;\r
            })}\r
          </ul>\r
        </nav>\r
        <div style={{marginTop: 'var(--g-space-6)', display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
          <Avatar size="sm"><AvatarFallback label="김서연">서연</AvatarFallback></Avatar>\r
          <div><strong style={{fontSize: 'var(--g-text-compact)'}}>김서연</strong><div style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>제품 디자이너</div></div>\r
        </div>\r
      </aside>\r
      <section aria-label={section} style={{flex: '4 1 calc(var(--g-field-basis) * 2)', minWidth: 0, paddingBlock: 'var(--g-space-4)', display: 'grid', alignContent: 'start', gap: 'var(--g-space-6)'}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
          <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>{section}</h2>\r
          <time dateTime="2026-10-26" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>10월 26일 월요일</time>\r
        </div>\r
        {section !== '팀 소식' && <>\r
          <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3) var(--g-space-8)', margin: 0}}>\r
            {metrics.map(([label, value]) => <div key={label} style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
              <dt style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{label}</dt>\r
              <dd style={{margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', fontVariantNumeric: 'tabular-nums'}}>{value}</dd>\r
            </div>)}\r
          </dl>\r
          <div style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>\r
              <h3 style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>진행 중인 프로젝트</h3>\r
              <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>이번 달</span>\r
            </div>\r
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3)'}}>\r
              {projects.map(project => <Card key={project.name} style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
                <CardHeader><CardDescription>{project.date} 마감</CardDescription><CardTitle>{project.name}</CardTitle></CardHeader>\r
                <CardContent style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
                  <p style={{margin: 0, color: 'var(--g-muted)'}}>{project.detail}</p>\r
                  <Progress label="프로젝트 진행률" value={project.value} />\r
                  <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
                    <Avatar size="sm"><AvatarFallback label={\`담당자 \${project.owner}\`}>{project.owner}</AvatarFallback></Avatar>\r
                    <span>담당 {project.owner}</span>\r
                  </div>\r
                </CardContent>\r
              </Card>)}\r
            </div>\r
          </div>\r
        </>}\r
        {section !== '프로젝트' && <Card>\r
          <CardHeader><CardDescription>오늘 오전 9:30</CardDescription><CardTitle>금요일 오후 2시 개편안 리뷰</CardTitle></CardHeader>\r
          <CardContent style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
            <p style={{margin: 0}}>각자 맡은 화면의 진행 상황을 목요일까지 정리해 주세요.</p>\r
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
              <Button variant="secondary" onPress={() => setReviewed(!reviewed)}>{reviewed ? '확인 취소' : '확인'}</Button>\r
              <span role="status" style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>{reviewed ? '7명 확인' : '6명 확인'}</span>\r
            </div>\r
          </CardContent>\r
        </Card>}\r
      </section>\r
    </div>\r
  </div>;\r
}`,m=e(t(),1),h=n(),g=[`홈`,`프로젝트`,`팀 소식`],_=[[`진행 중인 프로젝트`,`2개`],[`이번 주 마감`,`1개`],[`팀원`,`8명`]],v=[{name:`가을 서비스 개편`,detail:`결제와 정산 화면 6개 개편`,owner:`서연`,value:72,date:`10월 30일`},{name:`고객 안내 개선`,detail:`첫 방문 안내 문구 정리`,owner:`지호`,value:45,date:`11월 6일`}];function y(){let[e,t]=(0,m.useState)(`홈`),[n,f]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{style:{color:`var(--g-ink)`,minWidth:0},children:[(0,h.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-3)`,paddingBlock:`var(--g-space-3)`,borderBottom:`var(--g-border-width) solid var(--g-border)`},children:[(0,h.jsx)(a,{size:`sm`,children:(0,h.jsx)(i,{label:`모아 팀 워크스페이스`,children:`모`})}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:`모아 워크스페이스`}),(0,h.jsx)(`div`,{style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:`제품팀`})]})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,columnGap:`var(--g-space-8)`,minWidth:0},children:[(0,h.jsxs)(`aside`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,paddingBlock:`var(--g-space-4)`},children:[(0,h.jsx)(`nav`,{"aria-label":`워크스페이스 메뉴`,children:(0,h.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`,display:`grid`},children:g.map(n=>{let i=e===n;return(0,h.jsx)(`li`,{children:(0,h.jsx)(r,{variant:`quiet`,...i?{"aria-current":`page`}:{},onPress:()=>t(n),style:{width:`100%`,justifyContent:`flex-start`,color:i?`var(--g-accent)`:`var(--g-ink)`,fontWeight:i?`var(--g-weight-selected)`:`var(--g-weight-regular)`},children:n})},n)})})}),(0,h.jsxs)(`div`,{style:{marginTop:`var(--g-space-6)`,display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,h.jsx)(a,{size:`sm`,children:(0,h.jsx)(i,{label:`김서연`,children:`서연`})}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{style:{fontSize:`var(--g-text-compact)`},children:`김서연`}),(0,h.jsx)(`div`,{style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:`제품 디자이너`})]})]})]}),(0,h.jsxs)(`section`,{"aria-label":e,style:{flex:`4 1 calc(var(--g-field-basis) * 2)`,minWidth:0,paddingBlock:`var(--g-space-4)`,display:`grid`,alignContent:`start`,gap:`var(--g-space-6)`},children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,h.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:e}),(0,h.jsx)(`time`,{dateTime:`2026-10-26`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`10월 26일 월요일`})]}),e!==`팀 소식`&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3) var(--g-space-8)`,margin:0},children:_.map(([e,t])=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,h.jsx)(`dt`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e}),(0,h.jsx)(`dd`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`,fontVariantNumeric:`tabular-nums`},children:t})]},e))}),(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,h.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`진행 중인 프로젝트`}),(0,h.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`이번 달`})]}),(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3)`},children:v.map(e=>(0,h.jsxs)(d,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:[(0,h.jsxs)(s,{children:[(0,h.jsxs)(u,{children:[e.date,` 마감`]}),(0,h.jsx)(l,{children:e.name})]}),(0,h.jsxs)(c,{style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,h.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:e.detail}),(0,h.jsx)(o,{label:`프로젝트 진행률`,value:e.value}),(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,h.jsx)(a,{size:`sm`,children:(0,h.jsx)(i,{label:`담당자 ${e.owner}`,children:e.owner})}),(0,h.jsxs)(`span`,{children:[`담당 `,e.owner]})]})]})]},e.name))})]})]}),e!==`프로젝트`&&(0,h.jsxs)(d,{children:[(0,h.jsxs)(s,{children:[(0,h.jsx)(u,{children:`오늘 오전 9:30`}),(0,h.jsx)(l,{children:`금요일 오후 2시 개편안 리뷰`})]}),(0,h.jsxs)(c,{style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,h.jsx)(`p`,{style:{margin:0},children:`각자 맡은 화면의 진행 상황을 목요일까지 정리해 주세요.`}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,h.jsx)(r,{variant:`secondary`,onPress:()=>f(!n),children:n?`확인 취소`:`확인`}),(0,h.jsx)(`span`,{role:`status`,style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:n?`7명 확인`:`6명 확인`})]})]})]})]})]})]})}var b={id:`application-shell`,title:`팀 워크스페이스`,koreanTitle:`팀 워크스페이스`,group:`blocks`,interactions:[`press`],description:`홈, 프로젝트, 팀 소식을 메뉴로 오가는 팀 워크스페이스 화면입니다.`,demo:y,behavior:[`메뉴는 nav 안의 목록입니다. 지금 보고 있는 화면의 항목은 강조 색과 굵기로 표시하고 aria-current="page"를 붙입니다.`,`메뉴 항목을 누르면 본문 제목과 내용이 그 화면으로 바뀝니다. 홈은 지표, 진행 중인 프로젝트와 팀 소식을 함께 보여 줍니다.`,`넓은 화면에서는 메뉴가 본문 옆에 서고, 좁은 화면에서는 본문 위로 올라갑니다.`,`팀 소식의 확인 버튼은 누르면 확인 취소로 바뀌고, 확인한 인원 수는 role="status"로 보조 기술에 알립니다.`],whenToUse:[`메뉴로 홈, 프로젝트, 팀 소식 같은 화면을 오가는 사내 협업 도구의 첫 화면을 짤 때 참고합니다.`,`진행 중인 프로젝트의 진행률과 마감, 담당자, 공지를 한 화면에서 훑어야 하는 팀 대시보드에 맞습니다.`],whenNot:[`메뉴 항목이 많아 접고 펼쳐야 하는 앱 전체 내비게이션은 Sidebar를 씁니다.`,`모바일 하단 이동은 TabBar를 씁니다.`,`한 문서 안의 구역 이동은 SectionNavigation이 맞습니다.`],aiNotes:[`이 페이지에는 가져다 쓸 ApplicationShell 컴포넌트가 없습니다. Avatar, Button, Card, Progress를 조합한 예시 블록이므로 필요한 만큼 가져와 화면에 맞게 조립합니다.`,`현재 화면의 메뉴 항목에는 aria-current="page"를 직접 붙이고, 메뉴를 감싸는 nav에는 aria-label을 줍니다.`,`확인 인원처럼 눌러서 바뀌는 수치는 role="status"로 알려 보조 기술이 변경을 읽게 합니다.`],usage:f(p),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`워크스페이스와 팀원의 아바타 컨테이너.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 없이 표시하는 한국어 이름과 접근 가능한 설명.`},{name:`Button`,type:`'@gyeol/ui'`,description:`메뉴 항목과 팀 소식 확인.`},{name:`Card`,type:`'@gyeol/ui'`,description:`프로젝트 하나, 팀 소식 하나를 감싸는 틀.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`진행률, 담당자와 소식 본문.`},{name:`CardDescription`,type:`'@gyeol/ui'`,description:`마감일과 소식 작성 시각.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`각 카드의 제목과 보조 설명 배치.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`프로젝트 이름과 소식 제목.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`레이블과 백분율을 포함한 프로젝트 진행률.`}]};export{b as doc};