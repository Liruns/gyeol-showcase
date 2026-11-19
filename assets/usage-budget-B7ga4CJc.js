import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Badge-CvQ-tQ6E.js";import{t as i}from"./Switch-D0bySrca.js";import{t as a}from"./UsageLimitCard-wSprH9Nh.js";import{t as o}from"./UsageMeter-CxnbywFa.js";import{t as s}from"./usage-source-BdQLyNT5.js";var c=`import {useId} from 'react';\r
import {Badge, Switch, UsageLimitCard, UsageMeter} from '@gyeol/ui';\r
\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'} as const;\r
const rule = 'var(--g-border-width) solid var(--g-border)';\r
\r
function UsageBudget() {\r
  const id = useId();\r
  return <section aria-label="워크스페이스 사용량 및 예산" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h2 className="catalog-block-title">사용량과 예산</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)'}}>결 스튜디오 워크스페이스, 2026년 10월 1일부터 31일까지(한국 표준시)</p>\r
      </div>\r
      <Badge state="done" label="예산 내 사용 중" />\r
    </header>\r
\r
    <section aria-labelledby={id + '-spend'} style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h3 id={id + '-spend'} style={heading}>이번 달 사용 금액</h3>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>10월 26일 기준, 부가세 별도</p>\r
      </div>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-3)', fontVariantNumeric: 'tabular-nums'}}>\r
        <strong style={{fontSize: 'var(--g-text-heading-1)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'}}>₩342,000</strong>\r
        <span style={{color: 'var(--g-muted)'}}>월 예산 ₩500,000</span>\r
      </div>\r
      <UsageMeter label="월 예산 사용률" value={342000} max={500000} valueText="68.4%" description="₩158,000 남음" thresholds={[{value: 400000, label: '예산 80% 도달', tone: 'warning'}, {value: 500000, label: '예산 소진', tone: 'danger'}]} />\r
      <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3) var(--g-space-8)', margin: 0}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
          <dt style={{color: 'var(--g-muted)'}}>월말 예상 금액(일평균 기준)</dt>\r
          <dd style={{margin: 0, fontWeight: 'var(--g-weight-semibold)', fontVariantNumeric: 'tabular-nums'}}>₩407,800</dd>\r
        </div>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
          <dt style={{color: 'var(--g-muted)'}}>예상 잔여 예산</dt>\r
          <dd style={{margin: 0, fontWeight: 'var(--g-weight-semibold)', color: 'var(--g-favorable)', fontVariantNumeric: 'tabular-nums'}}>₩92,200</dd>\r
        </div>\r
      </dl>\r
    </section>\r
\r
    <ul aria-label="리소스별 한도" style={{display: 'grid', margin: 0, padding: 0, listStyle: 'none', minWidth: 0}}>\r
      <li style={{paddingBlock: 'var(--g-space-4)', borderBlockStart: rule}}><UsageLimitCard label="모델 요청" used={68400} limit={100000} unit="회" resetLabel="11월 1일 00:00 KST에 초기화" /></li>\r
      <li style={{paddingBlock: 'var(--g-space-4)', borderBlockStart: rule}}><UsageLimitCard label="파일 저장 공간" used={42} limit={50} unit="GB" warningLabel="84% 사용 중이에요. 오래된 파일을 지우면 공간이 늘어나요." /></li>\r
      <li style={{paddingBlock: 'var(--g-space-4)', borderBlockStart: rule}}><UsageLimitCard label="자동화 실행" used={1260} limit={5000} unit="회" resetLabel="11월 1일 00:00 KST에 초기화" /></li>\r
    </ul>\r
\r
    <section aria-labelledby={id + '-alerts'} style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, paddingBlockStart: 'var(--g-space-6)', borderBlockStart: rule}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h3 id={id + '-alerts'} style={heading}>예산 알림</h3>\r
        <p style={{margin: 0, color: 'var(--g-muted)'}}>워크스페이스 관리자에게 이메일로 알려요.</p>\r
      </div>\r
      <div style={{display: 'grid', gap: 'var(--g-space-3)', justifyItems: 'start'}}>\r
        <Switch defaultSelected>80%(₩400,000) 도달 시 알림</Switch>\r
        <Switch defaultSelected>예산 소진 시 알림</Switch>\r
      </div>\r
      <p style={{margin: 0, color: 'var(--g-muted)'}}>예산을 넘어도 사용은 멈추지 않아요.</p>\r
    </section>\r
  </section>;\r
}`,l=e(t(),1),u=n(),d={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},f=`var(--g-border-width) solid var(--g-border)`;function p(){let e=(0,l.useId)();return(0,u.jsxs)(`section`,{"aria-label":`워크스페이스 사용량 및 예산`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,u.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`start`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsx)(`h2`,{className:`catalog-block-title`,children:`사용량과 예산`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`결 스튜디오 워크스페이스, 2026년 10월 1일부터 31일까지(한국 표준시)`})]}),(0,u.jsx)(r,{state:`done`,label:`예산 내 사용 중`})]}),(0,u.jsxs)(`section`,{"aria-labelledby":e+`-spend`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsx)(`h3`,{id:e+`-spend`,style:d,children:`이번 달 사용 금액`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`10월 26일 기준, 부가세 별도`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-3)`,fontVariantNumeric:`tabular-nums`},children:[(0,u.jsx)(`strong`,{style:{fontSize:`var(--g-text-heading-1)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`},children:`₩342,000`}),(0,u.jsx)(`span`,{style:{color:`var(--g-muted)`},children:`월 예산 ₩500,000`})]}),(0,u.jsx)(o,{label:`월 예산 사용률`,value:342e3,max:5e5,valueText:`68.4%`,description:`₩158,000 남음`,thresholds:[{value:4e5,label:`예산 80% 도달`,tone:`warning`},{value:5e5,label:`예산 소진`,tone:`danger`}]}),(0,u.jsxs)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3) var(--g-space-8)`,margin:0},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,u.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`월말 예상 금액(일평균 기준)`}),(0,u.jsx)(`dd`,{style:{margin:0,fontWeight:`var(--g-weight-semibold)`,fontVariantNumeric:`tabular-nums`},children:`₩407,800`})]}),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,u.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`예상 잔여 예산`}),(0,u.jsx)(`dd`,{style:{margin:0,fontWeight:`var(--g-weight-semibold)`,color:`var(--g-favorable)`,fontVariantNumeric:`tabular-nums`},children:`₩92,200`})]})]})]}),(0,u.jsxs)(`ul`,{"aria-label":`리소스별 한도`,style:{display:`grid`,margin:0,padding:0,listStyle:`none`,minWidth:0},children:[(0,u.jsx)(`li`,{style:{paddingBlock:`var(--g-space-4)`,borderBlockStart:f},children:(0,u.jsx)(a,{label:`모델 요청`,used:68400,limit:1e5,unit:`회`,resetLabel:`11월 1일 00:00 KST에 초기화`})}),(0,u.jsx)(`li`,{style:{paddingBlock:`var(--g-space-4)`,borderBlockStart:f},children:(0,u.jsx)(a,{label:`파일 저장 공간`,used:42,limit:50,unit:`GB`,warningLabel:`84% 사용 중이에요. 오래된 파일을 지우면 공간이 늘어나요.`})}),(0,u.jsx)(`li`,{style:{paddingBlock:`var(--g-space-4)`,borderBlockStart:f},children:(0,u.jsx)(a,{label:`자동화 실행`,used:1260,limit:5e3,unit:`회`,resetLabel:`11월 1일 00:00 KST에 초기화`})})]}),(0,u.jsxs)(`section`,{"aria-labelledby":e+`-alerts`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0,paddingBlockStart:`var(--g-space-6)`,borderBlockStart:f},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsx)(`h3`,{id:e+`-alerts`,style:d,children:`예산 알림`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`워크스페이스 관리자에게 이메일로 알려요.`})]}),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-3)`,justifyItems:`start`},children:[(0,u.jsx)(i,{defaultSelected:!0,children:`80%(₩400,000) 도달 시 알림`}),(0,u.jsx)(i,{defaultSelected:!0,children:`예산 소진 시 알림`})]}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`예산을 넘어도 사용은 멈추지 않아요.`})]})]})}var m={id:`usage-budget`,title:`사용량과 예산`,koreanTitle:`사용량과 예산`,group:`blocks`,interactions:[`press`],description:`월 사용 금액, 월말 예상 지출, 리소스별 한도와 예산 알림을 한 화면에 모은 워크스페이스 화면입니다.`,demo:p,behavior:[`월말 예상 금액은 10월 26일까지의 일평균 사용량을 31일에 곱한 예상치이며, 실제 청구 금액과 다를 수 있습니다.`,`월 예산 사용률은 ₩400,000(80%)에 닿으면 경고, ₩500,000에 닿으면 위험 상태로 바뀌고 도달한 기준을 문구로 함께 표시합니다.`,`리소스 사용량이 한도의 80% 이상이면 막대 색과 경고 문구로 알립니다. 파일 저장 공간은 매월 초기화되지 않습니다.`,`알림 스위치는 이 예시에서 저장하지 않고 화면 안에서만 켜고 끕니다.`],whenToUse:[`워크스페이스 관리자가 월 사용 금액, 월말 예상 지출, 리소스별 한도를 한 화면에서 점검할 때 씁니다.`,`예산의 80%와 한도에 닿으면 경고로 바뀌어야 하는 비용 관리 화면에 맞습니다.`],whenNot:[`구독 요금의 청구 내역은 BillingCard를 씁니다.`,`모델 호출 비용을 입력값으로 계산해 보려면 LlmCostCalculator를 씁니다.`,`지표 하나만 크게 보이는 요약은 KpiCard를 씁니다.`],aiNotes:[`props 없이 Badge, UsageMeter, UsageLimitCard, Switch를 조합한 블록이므로 usage의 소스를 복사해 금액과 한도를 바꿉니다.`,`월말 예상 금액은 일평균 사용량을 월 일수에 곱한 예상치입니다. 실제 청구 금액으로 표기하지 않습니다.`,`예시의 알림 스위치는 저장하지 않으므로 예산 알림 설정을 보관하는 일은 호출하는 쪽이 붙입니다. 경고와 위험 기준 금액도 예시 값입니다.`],usage:s(c),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`현재 예산 상태를 표시합니다.`},{name:`UsageMeter`,type:`'@gyeol/ui'`,description:`월 예산 대비 사용률과 경고 기준을 표시합니다.`},{name:`UsageLimitCard`,type:`'@gyeol/ui'`,description:`리소스별 사용량과 한도, 초기화 시점을 한 줄씩 표시합니다.`},{name:`Switch`,type:`'@gyeol/ui'`,description:`예산 도달 알림을 켜거나 끕니다.`}]};export{m as doc};