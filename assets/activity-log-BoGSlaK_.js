import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{s as r}from"./boot-BeI4_wN4.js";import{r as i,t as a}from"./Avatar-Cq8zREtD.js";import{t as o}from"./SearchInput-DGHkWMHC.js";import{t as s}from"./FilterChips-Bc_VWYCu.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{a as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
const matchesKorean = (text: string, query: string) => normalizeKorean(text).includes(normalizeKorean(query));\r
const koreanDate = (iso: string) => iso.split('-').join('. ') + '.';\r
const isEmail = (value: string) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);\r
const scalarValue = (value: number | readonly number[], fallback: number) => typeof value === 'number' ? value : value[0] ?? fallback;\r
function particle(word: string, pair: readonly [string, string]) {\r
 const code = word.charCodeAt(word.length - 1) - 0xac00;\r
 return code >= 0 && code < 11172 && code % 28 !== 0 ? pair[0] : pair[1];\r
}\r
const koreanNumber = new Intl.NumberFormat('ko-KR');\r
const integer = new Intl.NumberFormat('ko-KR', {maximumFractionDigits: 0});\r
const tones = [{value: 'accent', label: '강조'}, {value: 'warm', label: '따뜻함'}, {value: 'spectrum', label: '스펙트럼'}] as const;\r
type Tone = typeof tones[number]['value'];\r
function optionValue<const T extends string>(value: string, options: readonly {readonly value: T}[]): T | undefined {\r
 return options.find(option => option.value === value)?.value;\r
}
import {useEffect, useRef, useState} from 'react';\r
import {Avatar, AvatarFallback, EmptyState, FilterChips, SearchInput} from '@gyeol/ui';\r
\r
const days = [\r
  {key: '2026-10-26', label: '10월 26일 (오늘)'},\r
  {key: '2026-10-25', label: '10월 25일 (어제)'},\r
];\r
\r
const activities = [\r
  {id: 'a1', day: '2026-10-26', time: '14:32', name: '김서연', initials: '서연', category: 'project', title: '가을 캠페인 기획서 수정', detail: '브랜드 캠페인 / 기획서 v3, 일정과 예산 항목 업데이트'},\r
  {id: 'a2', day: '2026-10-26', time: '13:48', name: '박지훈', initials: '지훈', category: 'team', title: '이수빈 님 작업 공간 초대', detail: '운영팀 / 편집자 권한, 초대 수락 완료'},\r
  {id: 'a3', day: '2026-10-26', time: '11:06', name: '이수빈', initials: '수빈', category: 'project', title: '랜딩 페이지 디자인 검토 완료', detail: '웹사이트 개선 / 디자인 검토, 다음 단계는 개발 전달'},\r
  {id: 'a4', day: '2026-10-26', time: '09:15', name: '김서연', initials: '서연', category: 'security', title: '2단계 인증 필수로 변경', detail: '보안 / 모든 멤버에게 적용'},\r
  {id: 'a5', day: '2026-10-25', time: '17:42', name: '정민재', initials: '민재', category: 'project', title: '고객 인터뷰 요약 공유', detail: '사용자 리서치 / 인터뷰 요약, 팀 전체에 공유'},\r
  {id: 'a6', day: '2026-10-25', time: '16:20', name: '박지훈', initials: '지훈', category: 'team', title: '운영팀 멤버 권한 변경', detail: '멤버 관리 / 정민재 님을 편집자로 변경'},\r
];\r
\r
const metrics = [\r
  {label: '최근 2일 활동', value: '6건'},\r
  {label: '참여 멤버', value: '4명'},\r
  {label: '보안 변경', value: '1건'},\r
];\r
\r
function ActivityLog() {\r
  const [query, setQuery] = useState('');\r
  const [categories, setCategories] = useState<readonly string[]>([]);\r
  const root = useRef<HTMLElement>(null);\r
  // 전체 활동 보기 unmounts its own button, so focus moves to the search field after the list comes back.\r
  const focusSearch = useRef(false);\r
  useEffect(() => {\r
    if (!focusSearch.current) return;\r
    focusSearch.current = false;\r
    root.current?.querySelector<HTMLInputElement>('input[type="search"]')?.focus();\r
  });\r
  const visible = activities.filter(item =>\r
    (!categories.length || categories.includes(item.category)) &&\r
    normalizeKorean(\`\${item.name} \${item.title} \${item.detail}\`).includes(normalizeKorean(query.trim())));\r
  const showAll = () => { focusSearch.current = true; setQuery(''); setCategories([]); };\r
\r
  return <section ref={root} aria-label="팀 활동 기록" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
    <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', letterSpacing: 'var(--g-tracking-heading)'}}>활동 기록</h2>\r
\r
    <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2) var(--g-space-6)', margin: 0}}>\r
      {metrics.map(metric => <div key={metric.label} style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <dt style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{metric.label}</dt>\r
        <dd style={{margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', fontVariantNumeric: 'tabular-nums'}}>{metric.value}</dd>\r
      </div>)}\r
    </dl>\r
\r
    <div style={{minWidth: 0, display: 'grid', gap: 'var(--g-space-3)'}}>\r
      <SearchInput label="활동 검색" placeholder="멤버 이름이나 변경 내용 검색" value={query} onChange={setQuery} clearLabel="활동 검색어 지우기" />\r
      <FilterChips label="활동 유형" options={[{id: 'project', label: '프로젝트'}, {id: 'team', label: '멤버 관리'}, {id: 'security', label: '보안'}]} value={categories} onChange={setCategories} clearLabel="유형 초기화" />\r
      <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontVariantNumeric: 'tabular-nums'}}>검색 결과 {visible.length}건</span>\r
    </div>\r
\r
    {days.map(day => {\r
      const events = visible.filter(item => item.day === day.key);\r
      if (!events.length) return null;\r
      return <section key={day.key} aria-label={day.label} style={{minWidth: 0}}>\r
        <h3 style={{margin: '0 0 var(--g-space-2)', fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)'}}>{day.label}</h3>\r
        <ol style={{listStyle: 'none', margin: 0, padding: 0}}>\r
          {events.map(item => <li key={item.id} style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--g-space-3)', padding: 'var(--g-space-3) 0', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
            <Avatar size="sm"><AvatarFallback label={item.name}>{item.initials}</AvatarFallback></Avatar>\r
            <div style={{flex: 1, minWidth: 0, overflowWrap: 'anywhere'}}>\r
              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--g-space-1) var(--g-space-3)'}}>\r
                <p style={{margin: 0, fontSize: 'var(--g-text-compact)'}}><strong style={{fontWeight: 'var(--g-weight-semibold)'}}>{item.name}</strong> {item.title}</p>\r
                <time dateTime={\`\${item.day}T\${item.time}+09:00\`} style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', fontVariantNumeric: 'tabular-nums'}}>{item.time}</time>\r
              </div>\r
              <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{item.detail}</p>\r
            </div>\r
          </li>)}\r
        </ol>\r
      </section>;\r
    })}\r
    {!visible.length && <EmptyState variant="search" title="일치하는 활동이 없어요." actionLabel="전체 활동 보기" actionVariant="secondary" onAction={showAll} />}\r
    <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>시간은 한국 표준시(KST) 기준이에요.</p>\r
  </section>;\r
}`,d=e(t(),1),f=n(),p=[{key:`2026-10-26`,label:`10월 26일 (오늘)`},{key:`2026-10-25`,label:`10월 25일 (어제)`}],m=[{id:`a1`,day:`2026-10-26`,time:`14:32`,name:`김서연`,initials:`서연`,category:`project`,title:`가을 캠페인 기획서 수정`,detail:`브랜드 캠페인 / 기획서 v3, 일정과 예산 항목 업데이트`},{id:`a2`,day:`2026-10-26`,time:`13:48`,name:`박지훈`,initials:`지훈`,category:`team`,title:`이수빈 님 작업 공간 초대`,detail:`운영팀 / 편집자 권한, 초대 수락 완료`},{id:`a3`,day:`2026-10-26`,time:`11:06`,name:`이수빈`,initials:`수빈`,category:`project`,title:`랜딩 페이지 디자인 검토 완료`,detail:`웹사이트 개선 / 디자인 검토, 다음 단계는 개발 전달`},{id:`a4`,day:`2026-10-26`,time:`09:15`,name:`김서연`,initials:`서연`,category:`security`,title:`2단계 인증 필수로 변경`,detail:`보안 / 모든 멤버에게 적용`},{id:`a5`,day:`2026-10-25`,time:`17:42`,name:`정민재`,initials:`민재`,category:`project`,title:`고객 인터뷰 요약 공유`,detail:`사용자 리서치 / 인터뷰 요약, 팀 전체에 공유`},{id:`a6`,day:`2026-10-25`,time:`16:20`,name:`박지훈`,initials:`지훈`,category:`team`,title:`운영팀 멤버 권한 변경`,detail:`멤버 관리 / 정민재 님을 편집자로 변경`}],h=[{label:`최근 2일 활동`,value:`6건`},{label:`참여 멤버`,value:`4명`},{label:`보안 변경`,value:`1건`}];function g(){let[e,t]=(0,d.useState)(``),[n,c]=(0,d.useState)([]),u=(0,d.useRef)(null),g=(0,d.useRef)(!1);(0,d.useEffect)(()=>{g.current&&(g.current=!1,u.current?.querySelector(`input[type="search"]`)?.focus())});let _=m.filter(t=>(!n.length||n.includes(t.category))&&l(`${t.name} ${t.title} ${t.detail}`).includes(l(e.trim())));return(0,f.jsxs)(`section`,{ref:u,"aria-label":`팀 활동 기록`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,f.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,letterSpacing:`var(--g-tracking-heading)`},children:`활동 기록`}),(0,f.jsx)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2) var(--g-space-6)`,margin:0},children:h.map(e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,f.jsx)(`dt`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.label}),(0,f.jsx)(`dd`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`,fontVariantNumeric:`tabular-nums`},children:e.value})]},e.label))}),(0,f.jsxs)(`div`,{style:{minWidth:0,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsx)(o,{label:`활동 검색`,placeholder:`멤버 이름이나 변경 내용 검색`,value:e,onChange:t,clearLabel:`활동 검색어 지우기`}),(0,f.jsx)(s,{label:`활동 유형`,options:[{id:`project`,label:`프로젝트`},{id:`team`,label:`멤버 관리`},{id:`security`,label:`보안`}],value:n,onChange:c,clearLabel:`유형 초기화`}),(0,f.jsxs)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontVariantNumeric:`tabular-nums`},children:[`검색 결과 `,_.length,`건`]})]}),p.map(e=>{let t=_.filter(t=>t.day===e.key);return t.length?(0,f.jsxs)(`section`,{"aria-label":e.label,style:{minWidth:0},children:[(0,f.jsx)(`h3`,{style:{margin:`0 0 var(--g-space-2)`,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`},children:e.label}),(0,f.jsx)(`ol`,{style:{listStyle:`none`,margin:0,padding:0},children:t.map(e=>(0,f.jsxs)(`li`,{style:{display:`flex`,alignItems:`flex-start`,gap:`var(--g-space-3)`,padding:`var(--g-space-3) 0`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,f.jsx)(a,{size:`sm`,children:(0,f.jsx)(i,{label:e.name,children:e.initials})}),(0,f.jsxs)(`div`,{style:{flex:1,minWidth:0,overflowWrap:`anywhere`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`baseline`,gap:`var(--g-space-1) var(--g-space-3)`},children:[(0,f.jsxs)(`p`,{style:{margin:0,fontSize:`var(--g-text-compact)`},children:[(0,f.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-semibold)`},children:e.name}),` `,e.title]}),(0,f.jsx)(`time`,{dateTime:`${e.day}T${e.time}+09:00`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,fontVariantNumeric:`tabular-nums`},children:e.time})]}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.detail})]})]},e.id))})]},e.key):null}),!_.length&&(0,f.jsx)(r,{variant:`search`,title:`일치하는 활동이 없어요.`,actionLabel:`전체 활동 보기`,actionVariant:`secondary`,onAction:()=>{g.current=!0,t(``),c([])}}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`시간은 한국 표준시(KST) 기준이에요.`})]})}var _={id:`activity-log`,title:`활동 기록`,koreanTitle:`활동 기록`,group:`blocks`,interactions:[`type`,`select`],description:`멤버의 문서 수정, 초대, 보안 변경을 날짜별로 모아 검색하고 유형별로 살펴보는 팀 활동 기록 화면입니다.`,demo:g,behavior:[`테두리와 배경 없이 놓인 화면의 흐름을 따르고, 활동 행은 구분선으로만 나눕니다.`,`검색은 멤버 이름, 활동, 세부 내용을 NFC로 정규화하고 대소문자를 구분하지 않고 찾습니다. 입력할 때마다 목록을 다시 거릅니다.`,`활동 유형은 여러 개를 함께 고르고, 유형 초기화로 모두 해제합니다. 검색어는 검색 필드의 지우기 버튼으로 지웁니다.`,`결과 건수는 status 영역으로 알립니다. 결과가 없으면 전체 활동 보기 버튼이 검색어와 유형을 모두 지우고 검색 필드로 포커스를 옮깁니다.`],whenToUse:[`팀 관리 화면에서 문서 수정, 초대, 보안 변경을 날짜별로 훑어볼 때 씁니다.`,`특정 멤버나 활동 유형만 골라 누가 무엇을 바꿨는지 확인하는 감사 화면에 맞습니다.`],whenNot:[`한 문서에 달린 댓글 대화를 이어 보려면 CommentThread를 씁니다.`,`두 버전의 내용 차이를 줄 단위로 비교하려면 DiffViewer를 씁니다.`,`열마다 정렬해야 하는 대량 기록은 DataTable을 씁니다.`],aiNotes:[`props 없이 SearchInput, FilterChips, Avatar, EmptyState를 조합한 블록이므로 usage의 소스를 복사해 활동 데이터만 바꿉니다.`,`결과 건수는 status 영역으로 알리므로 목록 구조를 바꿀 때 이 영역을 지우지 않습니다.`,`결과가 없을 때 EmptyState의 전체 활동 보기 버튼이 검색어와 유형을 함께 지우도록 유지합니다.`],usage:c(u),props:[{name:`SearchInput`,type:`'@gyeol/ui'`,description:`멤버 이름과 활동 내용 검색`},{name:`FilterChips`,type:`'@gyeol/ui'`,description:`프로젝트, 멤버 관리, 보안 유형 복수 선택`},{name:`Avatar`,type:`'@gyeol/ui'`,description:`활동한 멤버의 아바타`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`프로필 사진 없이 멤버 이름 표시`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`검색 결과가 없을 때의 안내와 전체 활동 보기 버튼`}]};export{_ as doc};