import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./AreaChart-CeJLVZWz.js";import{t as i}from"./Badge-DamB5rRf.js";import{t as a}from"./BarListChart-DywzHgOa.js";import{t as o}from"./SegmentedControl-CpHy_AAW.js";import{t as s}from"./KpiCard-CGGze-sp.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{t as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useId, useState} from 'react';\r
import {AreaChart, Badge, BarListChart, KpiCard, SegmentedControl} from '@gyeol/ui';\r
\r
const periods = {\r
  week: {label: '최근 7일', compare: '지난 7일 대비', dates: '2026. 10. 19.~10. 25.', categories: ['월', '화', '수', '목', '금', '토', '일'], visits: [1200, 1420, 1380, 1640, 1820, 2080, 2260], visitors: 11800, orders: 486, revenue: 23640000, deltas: {visits: 0.126, orders: 0.142, conversion: 0.014, revenue: 0.167}, channels: [5240, 3180, 2160, 1220]},\r
  month: {label: '최근 4주', compare: '지난 4주 대비', dates: '2026. 9. 28.~10. 25.', categories: ['1주', '2주', '3주', '4주'], visits: [9200, 10160, 10840, 11800], visitors: 42000, orders: 1734, revenue: 84210000, deltas: {visits: 0.084, orders: 0.096, conversion: 0.011, revenue: 0.112}, channels: [18400, 11200, 8000, 4400]},\r
};\r
\r
function MetricsDashboard() {\r
  const [period, setPeriod] = useState('week');\r
  const data = period === 'month' ? periods.month : periods.week;\r
  const id = useId();\r
  return <section aria-labelledby={\`\${id}-title\`} style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 'var(--g-space-4)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
        <h2 id={\`\${id}-title\`} style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>방문 현황</h2>\r
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2)', fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>\r
          <span>{data.dates}</span>\r
          <Badge state="idle" label="예시"/>\r
        </div>\r
      </div>\r
      <SegmentedControl label="분석 기간" value={period} onChange={setPeriod} options={[{value: 'week', label: '최근 7일'}, {value: 'month', label: '최근 4주'}]}/>\r
    </header>\r
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 36)), 1fr))', alignItems: 'start', columnGap: 'var(--g-space-6)', rowGap: 'var(--g-space-5)'}}>\r
      <KpiCard label="총 방문 수" value={data.visitors} locale="ko-KR" unavailableLabel="집계 전" trend={{delta: data.deltas.visits, favorableDirection: 'up', description: data.compare}}/>\r
      <KpiCard label="구매 건수" value={data.orders} locale="ko-KR" unavailableLabel="집계 전" trend={{delta: data.deltas.orders, favorableDirection: 'up', description: data.compare}}/>\r
      <KpiCard label="구매 전환율" value={data.orders / data.visitors} locale="ko-KR" format={{style: 'percent', maximumFractionDigits: 1}} unavailableLabel="집계 전" trend={{delta: data.deltas.conversion, favorableDirection: 'up', description: data.compare}}/>\r
      <KpiCard label="총 매출(원)" value={data.revenue} locale="ko-KR" unavailableLabel="집계 전" trend={{delta: data.deltas.revenue, favorableDirection: 'up', description: data.compare}}/>\r
    </div>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 'var(--g-space-8)', paddingTop: 'var(--g-space-6)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
      <div style={{flex: '2 1 calc(var(--g-space) * 100)', minWidth: 0, maxWidth: '100%'}}>\r
        <AreaChart label="방문 추이" description={\`\${data.label} 방문 수\`} categories={data.categories} series={[{id: 'visits', label: '방문 수', values: data.visits}]} formatValue={value => \`\${integer.format(value)}회\`}/>\r
      </div>\r
      <section aria-labelledby={\`\${id}-referrers\`} style={{display: 'grid', alignContent: 'start', gap: 'var(--g-space-3)', flex: '1 1 calc(var(--g-space) * 60)', minWidth: 0, maxWidth: '100%'}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
          <h3 id={\`\${id}-referrers\`} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>유입 경로</h3>\r
          <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{data.label} 방문 수</p>\r
        </div>\r
        <BarListChart label="유입 경로별 방문 수" items={['자연 검색', '직접 방문', '소셜 미디어', '추천 링크'].map((label, index) => ({id: String(index), label, value: data.channels[index]!}))}/>\r
      </section>\r
    </div>\r
  </section>;\r
}`,d=e(t(),1),f=n(),p={week:{label:`최근 7일`,compare:`지난 7일 대비`,dates:`2026. 10. 19.~10. 25.`,categories:[`월`,`화`,`수`,`목`,`금`,`토`,`일`],visits:[1200,1420,1380,1640,1820,2080,2260],visitors:11800,orders:486,revenue:2364e4,deltas:{visits:.126,orders:.142,conversion:.014,revenue:.167},channels:[5240,3180,2160,1220]},month:{label:`최근 4주`,compare:`지난 4주 대비`,dates:`2026. 9. 28.~10. 25.`,categories:[`1주`,`2주`,`3주`,`4주`],visits:[9200,10160,10840,11800],visitors:42e3,orders:1734,revenue:8421e4,deltas:{visits:.084,orders:.096,conversion:.011,revenue:.112},channels:[18400,11200,8e3,4400]}};function m(){let[e,t]=(0,d.useState)(`week`),n=e===`month`?p.month:p.week,c=(0,d.useId)();return(0,f.jsxs)(`section`,{"aria-labelledby":`${c}-title`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`},children:[(0,f.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,justifyContent:`space-between`,gap:`var(--g-space-4)`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,f.jsx)(`h2`,{id:`${c}-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`방문 현황`}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2)`,fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:[(0,f.jsx)(`span`,{children:n.dates}),(0,f.jsx)(i,{state:`idle`,label:`예시`})]})]}),(0,f.jsx)(o,{label:`분석 기간`,value:e,onChange:t,options:[{value:`week`,label:`최근 7일`},{value:`month`,label:`최근 4주`}]})]}),(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 36)), 1fr))`,alignItems:`start`,columnGap:`var(--g-space-6)`,rowGap:`var(--g-space-5)`},children:[(0,f.jsx)(s,{label:`총 방문 수`,value:n.visitors,locale:`ko-KR`,unavailableLabel:`집계 전`,trend:{delta:n.deltas.visits,favorableDirection:`up`,description:n.compare}}),(0,f.jsx)(s,{label:`구매 건수`,value:n.orders,locale:`ko-KR`,unavailableLabel:`집계 전`,trend:{delta:n.deltas.orders,favorableDirection:`up`,description:n.compare}}),(0,f.jsx)(s,{label:`구매 전환율`,value:n.orders/n.visitors,locale:`ko-KR`,format:{style:`percent`,maximumFractionDigits:1},unavailableLabel:`집계 전`,trend:{delta:n.deltas.conversion,favorableDirection:`up`,description:n.compare}}),(0,f.jsx)(s,{label:`총 매출(원)`,value:n.revenue,locale:`ko-KR`,unavailableLabel:`집계 전`,trend:{delta:n.deltas.revenue,favorableDirection:`up`,description:n.compare}})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`start`,gap:`var(--g-space-8)`,paddingTop:`var(--g-space-6)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,f.jsx)(`div`,{style:{flex:`2 1 calc(var(--g-space) * 100)`,minWidth:0,maxWidth:`100%`},children:(0,f.jsx)(r,{label:`방문 추이`,description:`${n.label} 방문 수`,categories:n.categories,series:[{id:`visits`,label:`방문 수`,values:n.visits}],formatValue:e=>`${l.format(e)}회`})}),(0,f.jsxs)(`section`,{"aria-labelledby":`${c}-referrers`,style:{display:`grid`,alignContent:`start`,gap:`var(--g-space-3)`,flex:`1 1 calc(var(--g-space) * 60)`,minWidth:0,maxWidth:`100%`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,f.jsx)(`h3`,{id:`${c}-referrers`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`유입 경로`}),(0,f.jsxs)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[n.label,` 방문 수`]})]}),(0,f.jsx)(a,{label:`유입 경로별 방문 수`,items:[`자연 검색`,`직접 방문`,`소셜 미디어`,`추천 링크`].map((e,t)=>({id:String(t),label:e,value:n.channels[t]}))})]})]})]})}var h={id:`metrics-dashboard`,title:`서비스 성과 대시보드`,koreanTitle:`서비스 성과 대시보드`,group:`blocks`,interactions:[`select`,`hover`],description:`기간을 바꾸며 방문, 구매, 전환율, 매출과 방문 추이, 유입 경로를 보는 성과 대시보드입니다. 전환율은 구매 건수를 방문 수로 나눈 값이고, 방문 수는 재방문을 포함합니다.`,demo:m,behavior:[`분석 기간을 바꾸면 지표, 방문 추이, 유입 경로가 함께 바뀌고 증감은 바로 앞 같은 길이의 기간과 비교합니다.`,`방문 추이 그래프에 초점을 두면 방향키로 데이터 포인트를 하나씩 이동하며 값을 읽습니다.`,`증감의 좋고 나쁨은 부호와 색, 화면에 보이지 않는 평가 문구로 전달합니다.`,`모든 지표는 예시 데이터입니다.`],whenToUse:[`마케팅 팀이 기간을 바꿔 가며 방문, 구매, 전환율, 매출을 한 화면에서 점검하는 주간 리뷰에 씁니다.`,`지표와 추이, 유입 경로를 같은 기간으로 맞춰 읽어야 하는 보고 화면에 맞습니다.`],whenNot:[`지표 하나와 변화만 놓으려면 KpiCard를 씁니다.`,`숫자를 행으로 정확히 비교해야 하면 DataTable을 씁니다.`,`실시간으로 흘러드는 값은 RealtimeChart를 씁니다.`],aiNotes:[`이 페이지는 KpiCard, AreaChart, BarListChart, SegmentedControl을 조합한 블록이라 복사해 데이터에 맞게 고칩니다.`,`KpiCard에는 label, value, locale, unavailableLabel을 주고, 증감은 trend에 담아 바로 앞 같은 길이의 기간과 비교한 값을 넘깁니다.`,`기간은 SegmentedControl의 label과 options로 고르게 하고, 기간이 바뀔 때 지표와 그래프를 함께 다시 계산하는 일은 화면이 합니다.`],usage:c(u),props:[{name:`AreaChart`,type:`'@gyeol/ui'`,description:`선택한 기간의 방문 추이와 키보드 데이터 탐색.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`예시 데이터 표시.`},{name:`BarListChart`,type:`'@gyeol/ui'`,description:`유입 경로별 방문 수 순위.`},{name:`KpiCard`,type:`'@gyeol/ui'`,description:`방문, 구매, 전환율, 매출과 직전 같은 기간 대비 변화.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`최근 7일 또는 최근 4주로 전체 지표 전환.`}]};export{h as doc};