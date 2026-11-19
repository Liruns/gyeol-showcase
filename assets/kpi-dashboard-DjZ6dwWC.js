import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{t}from"./AreaChart-CJV6UeDi.js";import{t as n}from"./Badge-BrfsGfws.js";import{t as r}from"./BarListChart-BX32jy2I.js";import{t as i}from"./KpiCard-kSY2e0ug.js";import{t as a}from"./usage-source-BdQLyNT5.js";import{t as o}from"./values-DbzGm6xY.js";var s=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {AreaChart, Badge, BarListChart, KpiCard} from '@gyeol/ui';\r
\r
/** Two pairs that sit side by side when there is room and stack otherwise, so four metrics read 4 or 2 by 2, never 3 plus 1. */\r
const metricPairs = {display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 76)), 1fr))', gap: 'var(--g-space-5) var(--g-space-8)', minWidth: 0} as const;\r
const metricPair = {display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--g-space-5) var(--g-space-8)', alignItems: 'start', minWidth: 0} as const;\r
\r
function KpiDashboard() {\r
  return <section aria-labelledby="kpi-dashboard-title" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h2 id="kpi-dashboard-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>10월 성과</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>2026. 10. 1.~10. 25., 이전 25일과 비교</p>\r
      </div>\r
      <Badge state="done" label="10월 26일 집계 완료" />\r
    </header>\r
\r
    <div style={metricPairs}>\r
      <div style={metricPair}>\r
        <KpiCard label="누적 매출" value={48600000} locale="ko-KR" format={{style: 'currency', currency: 'KRW', maximumFractionDigits: 0}} unavailableLabel="집계 중" trend={{delta: 0.184, favorableDirection: 'up', description: '이전 25일 대비'}} />\r
        <KpiCard label="결제 고객 (명)" value={1248} locale="ko-KR" unavailableLabel="집계 중" trend={{delta: 0.126, favorableDirection: 'up', description: '이전 25일 대비'}} />\r
      </div>\r
      <div style={metricPair}>\r
        <KpiCard label="구매 전환율" value={0.0386} locale="ko-KR" format={{style: 'percent', maximumFractionDigits: 2}} unavailableLabel="집계 중" trend={{delta: 0.072, favorableDirection: 'up', description: '이전 25일 대비'}} />\r
        <KpiCard label="환불률" value={0.012} locale="ko-KR" format={{style: 'percent', maximumFractionDigits: 1}} unavailableLabel="집계 중" trend={{delta: -0.143, favorableDirection: 'down', description: '이전 25일 대비'}} />\r
      </div>\r
    </div>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--g-space-6) var(--g-space-8)', paddingTop: 'var(--g-space-6)', borderTop: 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
      <div style={{flex: '2 1 calc(var(--g-space) * 100)', minWidth: 0, maxWidth: '100%'}}>\r
        <AreaChart label="매출 추이 (만 원)"\r
          categories={['1~5일', '6~10일', '11~15일', '16~20일', '21~25일']}\r
          series={[{id: 'current', label: '이번 기간', values: [760, 870, 940, 1050, 1240]}, {id: 'previous', label: '이전 기간', values: [680, 740, 810, 890, 985]}]}\r
          formatValue={value => integer.format(value)} />\r
      </div>\r
      <section aria-labelledby="kpi-dashboard-channels" style={{flex: '1 1 calc(var(--g-space) * 64)', minWidth: 0, maxWidth: '100%', display: 'grid', gap: 'var(--g-space-3)'}}>\r
        <h3 id="kpi-dashboard-channels" style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>유입 채널별 결제 고객 (명)</h3>\r
        <BarListChart label="유입 채널별 결제 고객 수" locale="ko-KR" items={[{id: 'search', label: '자연 검색', value: 486}, {id: 'direct', label: '직접 방문', value: 312}, {id: 'social', label: '소셜 채널', value: 268}, {id: 'referral', label: '추천 링크', value: 182}]} />\r
      </section>\r
    </div>\r
\r
    <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>취소된 주문은 매출과 결제 고객에서 제외해요.</p>\r
  </section>;\r
}`,c=e(),l={display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 76)), 1fr))`,gap:`var(--g-space-5) var(--g-space-8)`,minWidth:0},u={display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:`var(--g-space-5) var(--g-space-8)`,alignItems:`start`,minWidth:0};function d(){return(0,c.jsxs)(`section`,{"aria-labelledby":`kpi-dashboard-title`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,minWidth:0},children:[(0,c.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,c.jsx)(`h2`,{id:`kpi-dashboard-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`10월 성과`}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`2026. 10. 1.~10. 25., 이전 25일과 비교`})]}),(0,c.jsx)(n,{state:`done`,label:`10월 26일 집계 완료`})]}),(0,c.jsxs)(`div`,{style:l,children:[(0,c.jsxs)(`div`,{style:u,children:[(0,c.jsx)(i,{label:`누적 매출`,value:486e5,locale:`ko-KR`,format:{style:`currency`,currency:`KRW`,maximumFractionDigits:0},unavailableLabel:`집계 중`,trend:{delta:.184,favorableDirection:`up`,description:`이전 25일 대비`}}),(0,c.jsx)(i,{label:`결제 고객 (명)`,value:1248,locale:`ko-KR`,unavailableLabel:`집계 중`,trend:{delta:.126,favorableDirection:`up`,description:`이전 25일 대비`}})]}),(0,c.jsxs)(`div`,{style:u,children:[(0,c.jsx)(i,{label:`구매 전환율`,value:.0386,locale:`ko-KR`,format:{style:`percent`,maximumFractionDigits:2},unavailableLabel:`집계 중`,trend:{delta:.072,favorableDirection:`up`,description:`이전 25일 대비`}}),(0,c.jsx)(i,{label:`환불률`,value:.012,locale:`ko-KR`,format:{style:`percent`,maximumFractionDigits:1},unavailableLabel:`집계 중`,trend:{delta:-.143,favorableDirection:`down`,description:`이전 25일 대비`}})]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`var(--g-space-6) var(--g-space-8)`,paddingTop:`var(--g-space-6)`,borderTop:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,c.jsx)(`div`,{style:{flex:`2 1 calc(var(--g-space) * 100)`,minWidth:0,maxWidth:`100%`},children:(0,c.jsx)(t,{label:`매출 추이 (만 원)`,categories:[`1~5일`,`6~10일`,`11~15일`,`16~20일`,`21~25일`],series:[{id:`current`,label:`이번 기간`,values:[760,870,940,1050,1240]},{id:`previous`,label:`이전 기간`,values:[680,740,810,890,985]}],formatValue:e=>o.format(e)})}),(0,c.jsxs)(`section`,{"aria-labelledby":`kpi-dashboard-channels`,style:{flex:`1 1 calc(var(--g-space) * 64)`,minWidth:0,maxWidth:`100%`,display:`grid`,gap:`var(--g-space-3)`},children:[(0,c.jsx)(`h3`,{id:`kpi-dashboard-channels`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`유입 채널별 결제 고객 (명)`}),(0,c.jsx)(r,{label:`유입 채널별 결제 고객 수`,locale:`ko-KR`,items:[{id:`search`,label:`자연 검색`,value:486},{id:`direct`,label:`직접 방문`,value:312},{id:`social`,label:`소셜 채널`,value:268},{id:`referral`,label:`추천 링크`,value:182}]})]})]}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`취소된 주문은 매출과 결제 고객에서 제외해요.`})]})}var f={id:`kpi-dashboard`,title:`핵심 성과 대시보드`,koreanTitle:`핵심 성과 대시보드`,group:`blocks`,description:`매출, 결제 고객, 전환율, 환불률 네 지표에 매출 추이와 유입 채널 순위를 붙인 대시보드입니다. 수치는 모두 예시 데이터입니다.`,demo:d,behavior:[`네 지표는 테두리 없이 한 줄에 놓이고, 폭이 좁으면 두 개씩 두 줄로 나뉩니다. 한 지표만 다음 줄에 남지 않습니다.`,`변화율은 이전 25일 값에 대한 상대 비율입니다. 전환율 3.86%의 +7.2%는 퍼센트포인트가 아니라 이전 값보다 7.2% 높다는 뜻입니다.`,`증감이 좋은지 나쁜지는 부호와 색으로 보이고, 화면 낭독기는 비교 기간 뒤에 개선 또는 악화를 읽습니다.`,`매출 추이 차트는 Tab으로 구간에 들어간 뒤 왼쪽, 오른쪽 방향키와 Home, End로 구간을 옮기고 Esc로 툴팁을 닫습니다.`],whenToUse:[`매출, 결제 고객, 전환율처럼 핵심 지표 몇 개와 추이를 한 화면에서 훑는 운영 대시보드에 씁니다.`,`지표 옆에 유입 채널 순위를 붙여 원인을 바로 찾게 하는 주간 보고 화면에 씁니다.`],whenNot:[`지표 하나만 단독으로 보여 줄 때는 KpiCard를 씁니다.`,`시간 흐름 하나를 자세히 파고드는 화면은 LineChart가 맞습니다.`,`항목 비교만 보이는 화면은 BarListChart를 씁니다.`],aiNotes:[`이 블록은 KpiCard, Badge, AreaChart, BarListChart를 조합한 예시라 소스를 복사해 데이터를 바꿉니다.`,`변화율은 이전 값에 대한 상대 비율이므로 퍼센트포인트와 헷갈리지 않게 비교 기간 문구를 함께 적습니다.`,`수치는 예시 데이터입니다. 실제 값으로 바꿀 때 개선과 악화의 방향을 지표마다 따로 정해야 합니다.`],usage:a(s),props:[{name:`KpiCard`,type:`'@gyeol/ui'`,description:`네 지표와 이전 25일 대비 변화율을 표시합니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`집계를 마친 날짜를 표시합니다.`},{name:`AreaChart`,type:`'@gyeol/ui'`,description:`이번 기간과 이전 기간의 매출을 5일 단위로 비교합니다.`},{name:`BarListChart`,type:`'@gyeol/ui'`,description:`결제 고객의 유입 채널을 고객 수 순서로 보여줍니다.`}]};export{f as doc};