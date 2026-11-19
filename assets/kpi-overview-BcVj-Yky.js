import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./AreaChart-CeJLVZWz.js";import{n as i}from"./Badge-DamB5rRf.js";import{t as a}from"./BarListChart-DywzHgOa.js";import{t as o}from"./SegmentedControl-CpHy_AAW.js";import{t as s}from"./KpiCard-CGGze-sp.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{t as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useState} from 'react';\r
import {AreaChart, BarListChart, KpiCard, Progress, SegmentedControl} from '@gyeol/ui';\r
\r
const periods = [\r
  {value: 'week', label: '최근 7일'},\r
  {value: 'month', label: '최근 30일'},\r
];\r
const reports = {\r
  week: {\r
    range: '2026. 10. 20.~10. 26.',\r
    revenue: 12840000, orders: 428, conversion: 0.036,\r
    categories: ['10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26'],\r
    current: [142, 168, 156, 189, 205, 178, 246],\r
    previous: [130, 145, 151, 160, 172, 164, 220],\r
    channels: [{id: 'direct', label: '직접 방문', value: 184}, {id: 'search', label: '검색', value: 136}, {id: 'social', label: '소셜', value: 72}, {id: 'email', label: '이메일', value: 36}],\r
    revenueDelta: 0.124, orderDelta: 0.087, conversionDelta: 0.059,\r
  },\r
  month: {\r
    range: '2026. 9. 27.~10. 26.',\r
    revenue: 48600000, orders: 1620, conversion: 0.034,\r
    categories: ['9/27~10/1', '10/2~6', '10/7~11', '10/12~16', '10/17~21', '10/22~26'],\r
    current: [620, 710, 760, 830, 920, 1020],\r
    previous: [580, 640, 690, 750, 810, 850],\r
    channels: [{id: 'direct', label: '직접 방문', value: 680}, {id: 'search', label: '검색', value: 510}, {id: 'social', label: '소셜', value: 290}, {id: 'email', label: '이메일', value: 140}],\r
    revenueDelta: 0.125, orderDelta: 0.08, conversionDelta: -0.0286,\r
  },\r
};\r
const sectionHeading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'} as const;\r
const divided = {paddingTop: 'var(--g-space-6)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
\r
function KpiOverview() {\r
  const [period, setPeriod] = useState('week');\r
  const report = period === 'month' ? reports.month : reports.week;\r
  const comparison = period === 'month' ? '이전 30일 대비' : '이전 7일 대비';\r
\r
  return <section aria-labelledby="kpi-overview-title" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h2 id="kpi-overview-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>매출 현황</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{report.range}, 느린숲 온라인 스토어</p>\r
      </div>\r
      <SegmentedControl label="조회 기간" options={periods} value={period} onChange={setPeriod}/>\r
    </header>\r
\r
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 52)), 1fr))', gap: 'var(--g-space-5) var(--g-space-8)', alignItems: 'start'}}>\r
      <KpiCard label="총매출" value={report.revenue} locale="ko-KR" format={{style: 'currency', currency: 'KRW', maximumFractionDigits: 0}} unavailableLabel="집계 중" trend={{delta: report.revenueDelta, favorableDirection: 'up', description: comparison}}/>\r
      <KpiCard label="결제 완료 주문 (건)" value={report.orders} locale="ko-KR" unavailableLabel="집계 중" trend={{delta: report.orderDelta, favorableDirection: 'up', description: comparison}}/>\r
      <KpiCard label="구매 전환율" value={report.conversion} locale="ko-KR" format={{style: 'percent', maximumFractionDigits: 1}} unavailableLabel="집계 중" trend={{delta: report.conversionDelta, favorableDirection: 'up', description: comparison}}/>\r
    </div>\r
\r
    <div style={{...divided, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--g-space-6) var(--g-space-8)'}}>\r
      <div style={{flex: '2 1 calc(var(--g-space) * 96)', minWidth: 0, maxWidth: '100%'}}>\r
        <AreaChart label="매출 추이 (만 원)" categories={report.categories} series={[{id: 'current', label: '선택 기간', values: report.current}, {id: 'previous', label: '이전 기간', values: report.previous}]} formatValue={value => integer.format(value)}/>\r
      </div>\r
      <section aria-labelledby="kpi-overview-channels" style={{flex: '1 1 calc(var(--g-space) * 64)', minWidth: 0, maxWidth: '100%', display: 'grid', gap: 'var(--g-space-3)'}}>\r
        <h3 id="kpi-overview-channels" style={sectionHeading}>유입 채널별 주문 (건)</h3>\r
        <BarListChart label="유입 채널별 결제 완료 주문 수" items={report.channels}/>\r
      </section>\r
    </div>\r
\r
    <section aria-labelledby="kpi-overview-goal" style={{...divided, display: 'grid', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h3 id="kpi-overview-goal" style={sectionHeading}>10월 매출 목표</h3>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>10월 1~26일 누적, 조회 기간과 별도</p>\r
      </div>\r
      <p style={{margin: 0, fontSize: 'var(--g-text-heading-3)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', fontVariantNumeric: 'tabular-nums'}}>4,320만 원 <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-regular)'}}>/ 5,000만 원</span></p>\r
      <Progress label="10월 목표 달성률" value={86.4}/>\r
      <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)'}}>남은 5일, 하루 평균 136만 원이면 목표에 닿아요.</p>\r
    </section>\r
    <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>2026. 10. 26. 09:00 집계, 취소와 환불 제외</p>\r
  </section>;\r
}`,d=e(t(),1),f=n(),p=[{value:`week`,label:`최근 7일`},{value:`month`,label:`최근 30일`}],m={week:{range:`2026. 10. 20.~10. 26.`,revenue:1284e4,orders:428,conversion:.036,categories:[`10/20`,`10/21`,`10/22`,`10/23`,`10/24`,`10/25`,`10/26`],current:[142,168,156,189,205,178,246],previous:[130,145,151,160,172,164,220],channels:[{id:`direct`,label:`직접 방문`,value:184},{id:`search`,label:`검색`,value:136},{id:`social`,label:`소셜`,value:72},{id:`email`,label:`이메일`,value:36}],revenueDelta:.124,orderDelta:.087,conversionDelta:.059},month:{range:`2026. 9. 27.~10. 26.`,revenue:486e5,orders:1620,conversion:.034,categories:[`9/27~10/1`,`10/2~6`,`10/7~11`,`10/12~16`,`10/17~21`,`10/22~26`],current:[620,710,760,830,920,1020],previous:[580,640,690,750,810,850],channels:[{id:`direct`,label:`직접 방문`,value:680},{id:`search`,label:`검색`,value:510},{id:`social`,label:`소셜`,value:290},{id:`email`,label:`이메일`,value:140}],revenueDelta:.125,orderDelta:.08,conversionDelta:-.0286}},h={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},g={paddingTop:`var(--g-space-6)`,borderTop:`var(--g-border-width) solid var(--g-border)`};function _(){let[e,t]=(0,d.useState)(`week`),n=e===`month`?m.month:m.week,c=e===`month`?`이전 30일 대비`:`이전 7일 대비`;return(0,f.jsxs)(`section`,{"aria-labelledby":`kpi-overview-title`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`},children:[(0,f.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,f.jsx)(`h2`,{id:`kpi-overview-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`매출 현황`}),(0,f.jsxs)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[n.range,`, 느린숲 온라인 스토어`]})]}),(0,f.jsx)(o,{label:`조회 기간`,options:p,value:e,onChange:t})]}),(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 52)), 1fr))`,gap:`var(--g-space-5) var(--g-space-8)`,alignItems:`start`},children:[(0,f.jsx)(s,{label:`총매출`,value:n.revenue,locale:`ko-KR`,format:{style:`currency`,currency:`KRW`,maximumFractionDigits:0},unavailableLabel:`집계 중`,trend:{delta:n.revenueDelta,favorableDirection:`up`,description:c}}),(0,f.jsx)(s,{label:`결제 완료 주문 (건)`,value:n.orders,locale:`ko-KR`,unavailableLabel:`집계 중`,trend:{delta:n.orderDelta,favorableDirection:`up`,description:c}}),(0,f.jsx)(s,{label:`구매 전환율`,value:n.conversion,locale:`ko-KR`,format:{style:`percent`,maximumFractionDigits:1},unavailableLabel:`집계 중`,trend:{delta:n.conversionDelta,favorableDirection:`up`,description:c}})]}),(0,f.jsxs)(`div`,{style:{...g,display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`var(--g-space-6) var(--g-space-8)`},children:[(0,f.jsx)(`div`,{style:{flex:`2 1 calc(var(--g-space) * 96)`,minWidth:0,maxWidth:`100%`},children:(0,f.jsx)(r,{label:`매출 추이 (만 원)`,categories:n.categories,series:[{id:`current`,label:`선택 기간`,values:n.current},{id:`previous`,label:`이전 기간`,values:n.previous}],formatValue:e=>l.format(e)})}),(0,f.jsxs)(`section`,{"aria-labelledby":`kpi-overview-channels`,style:{flex:`1 1 calc(var(--g-space) * 64)`,minWidth:0,maxWidth:`100%`,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsx)(`h3`,{id:`kpi-overview-channels`,style:h,children:`유입 채널별 주문 (건)`}),(0,f.jsx)(a,{label:`유입 채널별 결제 완료 주문 수`,items:n.channels})]})]}),(0,f.jsxs)(`section`,{"aria-labelledby":`kpi-overview-goal`,style:{...g,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,f.jsx)(`h3`,{id:`kpi-overview-goal`,style:h,children:`10월 매출 목표`}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`10월 1~26일 누적, 조회 기간과 별도`})]}),(0,f.jsxs)(`p`,{style:{margin:0,fontSize:`var(--g-text-heading-3)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,fontVariantNumeric:`tabular-nums`},children:[`4,320만 원 `,(0,f.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-regular)`},children:`/ 5,000만 원`})]}),(0,f.jsx)(i,{label:`10월 목표 달성률`,value:86.4}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`},children:`남은 5일, 하루 평균 136만 원이면 목표에 닿아요.`})]}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`2026. 10. 26. 09:00 집계, 취소와 환불 제외`})]})}var v={id:`kpi-overview`,title:`핵심 성과 개요`,koreanTitle:`핵심 성과 개요`,group:`blocks`,interactions:[`select`],description:`매출, 주문, 전환율에 채널별 주문 순위와 월간 매출 목표를 더한 성과 대시보드입니다. 수치는 모두 예시 데이터입니다.`,demo:_,behavior:[`조회 기간을 바꾸면 지표, 비교 기간 문구, 매출 추이와 채널 순위가 함께 바뀝니다.`,`월간 매출 목표는 10월 1일부터의 누적이라 조회 기간을 바꿔도 그대로입니다.`,`매출 추이 차트는 Tab으로 구간에 들어간 뒤 왼쪽, 오른쪽 방향키와 Home, End로 구간별 매출을 읽고 Esc로 툴팁을 닫습니다.`],usage:c(u),whenToUse:[`매출, 주문, 전환율을 조회 기간별로 이전 기간과 비교해 보는 운영 대시보드 첫 화면에 씁니다.`,`월간 매출 목표 달성률을 지표 옆에 두고 채널별 주문 순위를 함께 읽는 화면에 맞습니다.`],whenNot:[`지표 하나만 보여 주면 KpiCard를 씁니다.`,`매출 추이 차트 하나만 필요하면 AreaChart를 씁니다.`],aiNotes:[`이 블록은 SegmentedControl, KpiCard, AreaChart, BarListChart, Progress를 조합한 예시입니다.`,`조회 기간이 바뀌면 지표, 비교 기간 문구, 추이와 순위가 함께 바뀌어야 합니다. 월간 목표는 누적이라 기간과 무관하게 둡니다.`,`수치는 모두 예시 데이터이므로 실제 값은 호출자가 넘기고, 비교 기간 문구를 지표마다 붙입니다.`],props:[{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`최근 7일과 30일 조회 기간 전환.`},{name:`KpiCard`,type:`'@gyeol/ui'`,description:`매출, 주문, 전환율과 이전 기간 대비 증감률.`},{name:`AreaChart`,type:`'@gyeol/ui'`,description:`선택 기간과 이전 기간의 매출 흐름 비교.`},{name:`BarListChart`,type:`'@gyeol/ui'`,description:`유입 채널별 결제 완료 주문 순위.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`10월 매출 목표 달성률 86.4%.`}]};export{v as doc};