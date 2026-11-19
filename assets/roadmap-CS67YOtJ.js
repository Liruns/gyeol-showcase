import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{r,t as i}from"./Avatar-BW1BSs3_.js";import{n as a,t as o}from"./Badge-DamB5rRf.js";import{t as s}from"./SegmentedControl-CpHy_AAW.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useId, useState} from 'react';\r
import {Avatar, AvatarFallback, Badge, Progress, SegmentedControl} from '@gyeol/ui';\r
\r
const releases = [\r
  {id: 'invite', month: '10월', title: '초대 링크 합류', scope: '링크로 팀에 합류, 첫 프로젝트 시작 가이드', state: 'done', status: '출시 완료', date: '10월 15일 출시', progress: 100, owner: '김하늘', team: '경험 디자인'},\r
  {id: 'progress', month: '11월', title: '프로젝트 진행 현황', scope: '프로젝트별 진행률, 담당자와 마감일 알림', state: 'idle', status: '개발 중', date: '11월 20일 목표', progress: 64, owner: '이서준', team: '협업 도구'},\r
  {id: 'report', month: '12월', title: '월간 활동 리포트', scope: '월간 활동 요약, 보고서 내보내기', state: 'idle', status: '설계 중', date: '12월 18일 목표', progress: 24, owner: '박지우', team: '데이터 경험'},\r
] as const;\r
\r
const meta = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'} as const;\r
const cell = {padding: 'calc(var(--g-space-1) * 1.5) var(--g-space-3)', borderTop: 'var(--g-border-width) solid var(--g-border)', verticalAlign: 'top', textAlign: 'start'} as const;\r
const head = {...meta, padding: 'var(--g-space-2) var(--g-space-3)', fontWeight: 'var(--g-weight-medium)', textAlign: 'start'} as const;\r
\r
function Roadmap() {\r
  const planId = useId();\r
  const [view, setView] = useState('all');\r
  const visible = releases.filter(release => view === 'all' || release.state !== 'done');\r
  return <section aria-label="제품 로드맵" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--g-space-2) var(--g-space-4)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>2026년 4분기 로드맵</h2>\r
        <p style={meta}>10월 26일 업데이트</p>\r
      </div>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)', maxWidth: '32rem'}}>\r
        <Progress label="분기 목표 달성률" value={63} />\r
        <p style={meta}>마일스톤 3개 중 1개 출시</p>\r
      </div>\r
    </header>\r
\r
    <section aria-labelledby={planId} style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 'var(--g-space-3) var(--g-space-4)'}}>\r
        <div style={{minWidth: 0}}>\r
          <h3 id={planId} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-body)', letterSpacing: 'var(--g-tracking-heading)'}}>출시 계획</h3>\r
          <p aria-live="polite" style={meta}>마일스톤 {visible.length}개</p>\r
        </div>\r
        <SegmentedControl label="계획 보기" value={view} onChange={setView} options={[{value: 'all', label: '전체'}, {value: 'upcoming', label: '출시 예정'}]} />\r
      </div>\r
      {/* Five columns do not fit a phone; the table keeps its columns and scrolls inside this labelled, focusable region. */}\r
      <div role="region" aria-label="출시 계획 표" tabIndex={0} style={{overflowX: 'auto', minWidth: 0}}>\r
        <table style={{inlineSize: '100%', minInlineSize: 'calc(var(--g-space) * 150)', borderCollapse: 'collapse', fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-body)'}}>\r
          <thead>\r
            <tr><th scope="col" style={head}>월</th><th scope="col" style={head}>마일스톤</th><th scope="col" style={head}>상태</th><th scope="col" style={{...head, textAlign: 'end'}}>준비 현황</th><th scope="col" style={head}>담당자</th></tr>\r
          </thead>\r
          <tbody>\r
            {visible.map(release => <tr key={release.id}>\r
              <th scope="row" style={{...cell, fontWeight: 'var(--g-weight-semibold)', whiteSpace: 'nowrap'}}>{release.month}</th>\r
              <td style={cell}><span style={{fontWeight: 'var(--g-weight-medium)'}}>{release.title}</span><p style={meta}>{release.scope}</p></td>\r
              <td style={{...cell, whiteSpace: 'nowrap'}}><Badge state={release.state} label={release.status} /><p style={meta}>{release.date}</p></td>\r
              <td style={{...cell, textAlign: 'end', fontVariantNumeric: 'tabular-nums'}}>{release.progress}%</td>\r
              <td style={cell}>\r
                <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
                  <Avatar size="sm"><AvatarFallback label={release.owner}>{release.owner.slice(0, 1)}</AvatarFallback></Avatar>\r
                  <div style={{minWidth: 0}}><span>{release.owner}</span><p style={meta}>{release.team}</p></div>\r
                </div>\r
              </td>\r
            </tr>)}\r
          </tbody>\r
        </table>\r
      </div>\r
    </section>\r
  </section>;\r
}`,u=e(t(),1),d=n(),f=[{id:`invite`,month:`10월`,title:`초대 링크 합류`,scope:`링크로 팀에 합류, 첫 프로젝트 시작 가이드`,state:`done`,status:`출시 완료`,date:`10월 15일 출시`,progress:100,owner:`김하늘`,team:`경험 디자인`},{id:`progress`,month:`11월`,title:`프로젝트 진행 현황`,scope:`프로젝트별 진행률, 담당자와 마감일 알림`,state:`idle`,status:`개발 중`,date:`11월 20일 목표`,progress:64,owner:`이서준`,team:`협업 도구`},{id:`report`,month:`12월`,title:`월간 활동 리포트`,scope:`월간 활동 요약, 보고서 내보내기`,state:`idle`,status:`설계 중`,date:`12월 18일 목표`,progress:24,owner:`박지우`,team:`데이터 경험`}],p={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-body)`},m={padding:`calc(var(--g-space-1) * 1.5) var(--g-space-3)`,borderTop:`var(--g-border-width) solid var(--g-border)`,verticalAlign:`top`,textAlign:`start`},h={...p,padding:`var(--g-space-2) var(--g-space-3)`,fontWeight:`var(--g-weight-medium)`,textAlign:`start`};function g(){let e=(0,u.useId)(),[t,n]=(0,u.useState)(`all`),c=f.filter(e=>t===`all`||e.state!==`done`);return(0,d.jsxs)(`section`,{"aria-label":`제품 로드맵`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,minWidth:0},children:[(0,d.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`baseline`,gap:`var(--g-space-2) var(--g-space-4)`},children:[(0,d.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`2026년 4분기 로드맵`}),(0,d.jsx)(`p`,{style:p,children:`10월 26일 업데이트`})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,maxWidth:`32rem`},children:[(0,d.jsx)(a,{label:`분기 목표 달성률`,value:63}),(0,d.jsx)(`p`,{style:p,children:`마일스톤 3개 중 1개 출시`})]})]}),(0,d.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`end`,gap:`var(--g-space-3) var(--g-space-4)`},children:[(0,d.jsxs)(`div`,{style:{minWidth:0},children:[(0,d.jsx)(`h3`,{id:e,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-body)`,letterSpacing:`var(--g-tracking-heading)`},children:`출시 계획`}),(0,d.jsxs)(`p`,{"aria-live":`polite`,style:p,children:[`마일스톤 `,c.length,`개`]})]}),(0,d.jsx)(s,{label:`계획 보기`,value:t,onChange:n,options:[{value:`all`,label:`전체`},{value:`upcoming`,label:`출시 예정`}]})]}),(0,d.jsx)(`div`,{role:`region`,"aria-label":`출시 계획 표`,tabIndex:0,style:{overflowX:`auto`,minWidth:0},children:(0,d.jsxs)(`table`,{style:{inlineSize:`100%`,minInlineSize:`calc(var(--g-space) * 150)`,borderCollapse:`collapse`,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-body)`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{scope:`col`,style:h,children:`월`}),(0,d.jsx)(`th`,{scope:`col`,style:h,children:`마일스톤`}),(0,d.jsx)(`th`,{scope:`col`,style:h,children:`상태`}),(0,d.jsx)(`th`,{scope:`col`,style:{...h,textAlign:`end`},children:`준비 현황`}),(0,d.jsx)(`th`,{scope:`col`,style:h,children:`담당자`})]})}),(0,d.jsx)(`tbody`,{children:c.map(e=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{scope:`row`,style:{...m,fontWeight:`var(--g-weight-semibold)`,whiteSpace:`nowrap`},children:e.month}),(0,d.jsxs)(`td`,{style:m,children:[(0,d.jsx)(`span`,{style:{fontWeight:`var(--g-weight-medium)`},children:e.title}),(0,d.jsx)(`p`,{style:p,children:e.scope})]}),(0,d.jsxs)(`td`,{style:{...m,whiteSpace:`nowrap`},children:[(0,d.jsx)(o,{state:e.state,label:e.status}),(0,d.jsx)(`p`,{style:p,children:e.date})]}),(0,d.jsxs)(`td`,{style:{...m,textAlign:`end`,fontVariantNumeric:`tabular-nums`},children:[e.progress,`%`]}),(0,d.jsx)(`td`,{style:m,children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(i,{size:`sm`,children:(0,d.jsx)(r,{label:e.owner,children:e.owner.slice(0,1)})}),(0,d.jsxs)(`div`,{style:{minWidth:0},children:[(0,d.jsx)(`span`,{children:e.owner}),(0,d.jsx)(`p`,{style:p,children:e.team})]})]})})]},e.id))})]})})]})]})}var _={id:`roadmap`,title:`제품 로드맵`,koreanTitle:`제품 로드맵`,group:`blocks`,interactions:[`select`],description:`분기 목표 달성률과 월별 출시 계획, 담당자, 준비 현황을 한 화면에 모은 제품 로드맵입니다.`,demo:g,behavior:[`테두리나 배경 없이 놓인 화면의 흐름을 따르고, 마일스톤 행은 1px 구분선으로만 나눕니다.`,`계획 보기에서 출시 예정을 고르면 출시 완료 행을 숨기고, 남은 마일스톤 개수를 aria-live로 알립니다.`,`좁은 화면에서는 표가 열을 유지한 채 가로로 스크롤됩니다. 스크롤 영역은 이름이 있고 키보드 초점을 받습니다.`,`준비 현황은 오른쪽 정렬된 고정폭 숫자로 적습니다.`],whenToUse:[`제품 회의에서 분기 목표 달성률과 월별 출시 계획, 담당자, 준비 현황을 한 화면에 모아 볼 때 씁니다.`,`전체 계획과 출시 예정만 걸러 남은 마일스톤을 확인하는 화면에 맞습니다.`],whenNot:[`날짜 축 위에 기간 막대를 그리려면 GanttChart를 씁니다.`,`작업을 상태별 열로 옮기며 관리하려면 KanbanBoard를 씁니다.`,`프로젝트 하나를 요약하는 카드는 ProjectCard를 씁니다.`],aiNotes:[`props 없이 Progress, SegmentedControl, Badge, Avatar, AvatarFallback을 조합한 블록이므로 usage의 소스를 복사해 목표와 마일스톤 데이터를 바꿉니다.`,`출시 예정 필터는 남은 마일스톤 개수를 aria-live로 알립니다. 필터나 행을 바꿔도 이 알림을 남깁니다.`,`좁은 화면에서 표가 가로로 스크롤되므로 스크롤 영역의 이름과 키보드 초점을 유지합니다. 준비 현황은 오른쪽 정렬된 고정폭 숫자로 적습니다.`],usage:c(l),props:[{name:`Progress`,type:`'@gyeol/ui'`,description:`분기 목표 달성률.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`전체 계획과 출시 예정 계획 필터.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`마일스톤의 출시 상태.`},{name:`Avatar`,type:`'@gyeol/ui'`,description:`마일스톤 담당자 아바타.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 없이 담당자 이름과 이니셜 표시.`}]};export{_ as doc};