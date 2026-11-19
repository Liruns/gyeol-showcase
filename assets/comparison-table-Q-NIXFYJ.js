import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-DjMJDlCG.js";import{t as i}from"./SegmentedControl-BJSxMiJF.js";var a=e(t(),1),o=n(),s=[{name:`시작`,summary:`3명까지 무료`,monthly:0,yearly:0,features:[`3명`,`3개`,`2GB`,`7일`,`커뮤니티`]},{name:`팀`,summary:`20명까지 쓰는 팀`,monthly:18e3,yearly:14400,features:[`20명`,`제한 없음`,`100GB`,`1년`,`이메일 우선 응답`]},{name:`조직`,summary:`인원 제한 없는 조직`,monthly:36e3,yearly:28800,features:[`제한 없음`,`제한 없음`,`1TB`,`전체 기간`,`전담 온보딩`]}],c=[`참여 인원`,`프로젝트`,`저장 공간`,`활동 기록 보관`,`고객 지원`],l={padding:`var(--g-space-2) var(--g-space-3)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`,textAlign:`start`,verticalAlign:`top`},u={...l,paddingInlineStart:0,color:`var(--g-muted)`,fontWeight:`var(--g-weight-regular)`,overflowWrap:`normal`};function d(){let e=(0,a.useId)(),[t,n]=(0,a.useState)(`yearly`),[d,f]=(0,a.useState)(`시작`),p=e=>e===d?{background:`var(--g-soft)`}:void 0;return(0,o.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-4)`,width:`100%`,minWidth:0,color:`var(--g-ink)`,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-body)`},children:[(0,o.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`end`,gap:`var(--g-space-3)`},children:[(0,o.jsx)(`h2`,{id:e,style:{margin:0,fontSize:`var(--g-text-heading-3)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`요금제`}),(0,o.jsx)(i,{label:`결제 주기`,value:t,onChange:n,options:[{value:`monthly`,label:`월간 결제`},{value:`yearly`,label:`연간 결제(20% 할인)`}]})]}),(0,o.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontVariantNumeric:`tabular-nums`,wordBreak:`keep-all`},children:[(0,o.jsx)(`caption`,{className:`g-visually-hidden`,children:`요금제별 월 요금과 기능`}),(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{style:{...u,borderBlockStart:0}}),s.map(e=>(0,o.jsxs)(`th`,{scope:`col`,style:{...l,borderBlockStart:0,...p(e.name)},children:[(0,o.jsxs)(`span`,{style:{display:`block`,fontWeight:`var(--g-weight-semibold)`},children:[e.name,d===e.name&&(0,o.jsx)(`span`,{className:`g-visually-hidden`,children:`, 선택함`})]}),(0,o.jsx)(`span`,{style:{display:`block`,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontWeight:`var(--g-weight-regular)`},children:e.summary})]},e.name))]})}),(0,o.jsxs)(`tbody`,{children:[(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{scope:`row`,style:u,children:`월 요금`}),s.map(e=>(0,o.jsxs)(`td`,{style:{...l,...p(e.name)},children:[(0,o.jsxs)(`span`,{style:{display:`block`,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`},children:[(t===`yearly`?e.yearly:e.monthly).toLocaleString(`ko-KR`),`원`]}),(0,o.jsx)(`span`,{style:{display:`block`,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:e.monthly===0?`기한 없이 무료`:t===`yearly`?`워크스페이스당, 1년 치 한 번에 결제`:`워크스페이스당, 매월 결제`}),(0,o.jsx)(`div`,{style:{paddingBlockStart:`var(--g-space-2)`},children:(0,o.jsx)(r,{variant:`secondary`,style:{whiteSpace:`nowrap`},"aria-label":`${e.name} 요금제 ${d===e.name?`선택함`:`선택`}`,isDisabled:d===e.name,onPress:()=>f(e.name),children:d===e.name?`선택함`:`선택`})})]},e.name))]}),c.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{scope:`row`,style:u,children:e}),s.map(e=>(0,o.jsx)(`td`,{style:{...l,...p(e.name)},children:e.features[t]},e.name))]},e))]})]}),(0,o.jsxs)(`footer`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-3)`,fontSize:`var(--g-text-small)`},children:[(0,o.jsxs)(`span`,{role:`status`,children:[`선택한 요금제: `,(0,o.jsx)(`strong`,{children:d}),`, `,t===`yearly`?`연간 결제`:`월간 결제`]}),(0,o.jsx)(`span`,{style:{color:`var(--g-muted)`},children:`부가세 별도예요. 요금제는 언제든 바꿀 수 있어요.`})]})]})}var f={id:`comparison-table`,title:`요금제 비교`,koreanTitle:`요금제 비교`,group:`blocks`,interactions:[`select`,`press`],description:`요금제별 월 요금과 기능을 한 표에서 비교하고, 결제 주기와 요금제를 고르는 화면입니다.`,demo:d,behavior:[`요금제는 열, 기능은 행인 표입니다. 기능 이름은 행 머리글로 한 번만 나오고, 칸에는 값만 들어갑니다.`,`결제 주기를 바꾸면 월 요금과 결제 안내가 바뀌고, 표 아래 상태 줄이 선택한 요금제와 결제 주기를 알립니다.`,`선택한 요금제는 열 전체의 바탕색과 비활성 선택함 버튼으로 표시하고, 열 머리글에는 화면에 보이지 않는 선택함을 덧붙입니다.`,`좁은 화면에서도 표 구조를 유지하고, 긴 값은 칸 안에서 줄을 바꿉니다.`],whenToUse:[`구독 요금제를 월 요금과 기능으로 나란히 비교하고 결제 주기를 고르게 하는 요금 안내 화면에서 씁니다.`,`팀 도구의 플랜 변경 화면에서 어떤 플랜이 어떤 한도를 갖는지 행 단위로 대조할 때 맞습니다.`],whenNot:[`이미 가입한 구독의 청구 내역은 BillingCard를 씁니다.`,`월간과 연간 전환만 필요하면 BillingToggle을 씁니다.`,`요금제 하나를 카드로 소개하는 자리는 PlanCard를 씁니다.`],aiNotes:[`props 없이 Button과 SegmentedControl을 조합한 블록이므로 usage의 소스를 복사해 요금제와 기능 행을 바꿉니다.`,`기능 이름은 행 머리글로 한 번만 두고 칸에는 값만 넣습니다. 선택한 요금제는 열 바탕색, 비활성 선택함 버튼, 열 머리글의 숨은 텍스트를 함께 유지해 색만으로 알리지 않습니다.`,`연간 결제 20% 할인과 요금 숫자는 예시 값이므로 서비스의 실제 요금으로 교체합니다.`],usage:`import {useId, useState} from 'react';
import {Button, SegmentedControl} from '@gyeol/ui';

const plans = [
  {name: '시작', summary: '3명까지 무료', monthly: 0, yearly: 0, features: ['3명', '3개', '2GB', '7일', '커뮤니티']},
  {name: '팀', summary: '20명까지 쓰는 팀', monthly: 18000, yearly: 14400, features: ['20명', '제한 없음', '100GB', '1년', '이메일 우선 응답']},
  {name: '조직', summary: '인원 제한 없는 조직', monthly: 36000, yearly: 28800, features: ['제한 없음', '제한 없음', '1TB', '전체 기간', '전담 온보딩']},
] as const;
const featureRows = ['참여 인원', '프로젝트', '저장 공간', '활동 기록 보관', '고객 지원'];
const cell = {padding: 'var(--g-space-2) var(--g-space-3)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)', textAlign: 'start', verticalAlign: 'top'} as const;
const rowHeader = {...cell, paddingInlineStart: 0, color: 'var(--g-muted)', fontWeight: 'var(--g-weight-regular)', overflowWrap: 'normal'} as const;

export function ComparisonTable() {
  const titleId = useId();
  const [billing, setBilling] = useState('yearly');
  const [selected, setSelected] = useState('시작');
  // The chosen plan is marked on its whole column: a neutral fill, a disabled 선택함 button and hidden text in the header.
  const column = (name: string) => name === selected ? {background: 'var(--g-soft)'} : undefined;
  return (
    <section aria-labelledby={titleId} style={{display: 'grid', gap: 'var(--g-space-4)', width: '100%', minWidth: 0, color: 'var(--g-ink)', fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-body)'}}>
      <header style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 'var(--g-space-3)'}}>
        <h2 id={titleId} style={{margin: 0, fontSize: 'var(--g-text-heading-3)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>요금제</h2>
        <SegmentedControl label="결제 주기" value={billing} onChange={setBilling} options={[{value: 'monthly', label: '월간 결제'}, {value: 'yearly', label: '연간 결제(20% 할인)'}]} />
      </header>
      <table style={{width: '100%', borderCollapse: 'collapse', fontVariantNumeric: 'tabular-nums', wordBreak: 'keep-all'}}>
        <caption className="g-visually-hidden">요금제별 월 요금과 기능</caption>
        <thead>
          <tr>
            <td style={{...rowHeader, borderBlockStart: 0}} />
            {plans.map(plan => (
              <th key={plan.name} scope="col" style={{...cell, borderBlockStart: 0, ...column(plan.name)}}>
                <span style={{display: 'block', fontWeight: 'var(--g-weight-semibold)'}}>{plan.name}{selected === plan.name && <span className="g-visually-hidden">, 선택함</span>}</span>
                <span style={{display: 'block', color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontWeight: 'var(--g-weight-regular)'}}>{plan.summary}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={rowHeader}>월 요금</th>
            {plans.map(plan => (
              <td key={plan.name} style={{...cell, ...column(plan.name)}}>
                <span style={{display: 'block', fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)'}}>{(billing === 'yearly' ? plan.yearly : plan.monthly).toLocaleString('ko-KR')}원</span>
                <span style={{display: 'block', color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>{plan.monthly === 0 ? '기한 없이 무료' : billing === 'yearly' ? '워크스페이스당, 1년 치 한 번에 결제' : '워크스페이스당, 매월 결제'}</span>
                <div style={{paddingBlockStart: 'var(--g-space-2)'}}>
                  <Button variant="secondary" style={{whiteSpace: 'nowrap'}} aria-label={\`\${plan.name} 요금제 \${selected === plan.name ? '선택함' : '선택'}\`} isDisabled={selected === plan.name} onPress={() => setSelected(plan.name)}>{selected === plan.name ? '선택함' : '선택'}</Button>
                </div>
              </td>
            ))}
          </tr>
          {featureRows.map((label, index) => (
            <tr key={label}>
              <th scope="row" style={rowHeader}>{label}</th>
              {plans.map(plan => <td key={plan.name} style={{...cell, ...column(plan.name)}}>{plan.features[index]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <footer style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--g-space-3)', fontSize: 'var(--g-text-small)'}}>
        <span role="status">선택한 요금제: <strong>{selected}</strong>, {billing === 'yearly' ? '연간 결제' : '월간 결제'}</span>
        <span style={{color: 'var(--g-muted)'}}>부가세 별도예요. 요금제는 언제든 바꿀 수 있어요.</span>
      </footer>
    </section>
  );
}`,props:[{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`월간 또는 연간 결제를 고릅니다. 연간 할인율은 선택지 이름에 붙습니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`요금제를 고릅니다. 선택한 요금제의 버튼은 선택함으로 바뀌고 비활성화됩니다.`}]};export{f as doc};