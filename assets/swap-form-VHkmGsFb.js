import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Mt as r,St as i}from"./boot-BmrkG5t5.js";import{t as a}from"./Alert-U_Nc0C0t.js";import{t as o}from"./NativeSelect-BptDWHZd.js";import{t as s}from"./Input-ncZ3HG3z.js";import{T as c}from"./catalog-DrkfWaGt.js";import{t as l}from"./usage-source-BdQLyNT5.js";var u=`import {useId, useState} from 'react';\r
import {Alert, Button, DirectionalIcon, IconButton, Input, NativeSelect} from '@gyeol/ui';\r
\r
const currencies = [{value: 'KRW', label: '대한민국 원 (KRW)'}, {value: 'USD', label: '미국 달러 (USD)'}, {value: 'EUR', label: '유로 (EUR)'}];\r
const rates: Record<string, number> = {KRW: 1, USD: 1380, EUR: 1500};\r
const format = (value: number) => value.toLocaleString('ko-KR', {maximumFractionDigits: 2});\r
// Quotes carry four significant digits, so 1 KRW still shows a nonzero USD rate; amounts use the rate as displayed.\r
const formatRate = (value: number) => value.toLocaleString('ko-KR', {maximumSignificantDigits: 4});\r
// The field keeps the typed digits and shows them with ko-KR grouping; anything that is not a plain number is shown as typed, so composition is never rewritten.\r
const groupDigits = (raw: string) => {\r
  if (!/^\\d*(\\.\\d*)?$/.test(raw)) return raw;\r
  const [whole = '', fraction] = raw.split('.');\r
  const grouped = whole.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\r
  return fraction === undefined ? grouped : \`\${grouped}.\${fraction}\`;\r
};\r
\r
function Demo() {\r
  const titleId = useId();\r
  const [from, setFrom] = useState('KRW');\r
  const [to, setTo] = useState('USD');\r
  const [amount, setAmount] = useState('1000000');\r
  const [confirmed, setConfirmed] = useState(false);\r
  const value = Number(amount);\r
  const valid = amount.trim() !== '' && Number.isFinite(value) && value > 0 && from !== to;\r
  const rate = Number((rates[from]! / rates[to]!).toPrecision(4));\r
  const received = valid ? value * rate * 0.999 : 0;\r
  const reset = () => setConfirmed(false);\r
\r
  return <section aria-labelledby={titleId} style={{display: 'grid', gap: 'var(--g-space-4)', width: '100%', minWidth: 0, maxWidth: 'var(--g-dialog-width)'}}>\r
    <h2 id={titleId} className="catalog-block-title">환전</h2>\r
    <NativeSelect label="보내는 통화" options={currencies} value={from} onChange={next => {setFrom(next); reset();}} />\r
    <Input label="보낼 금액" inputMode="decimal" value={groupDigits(amount)} onChange={next => {setAmount(next.replace(/,/g, '')); reset();}} end={from} isInvalid={amount !== '' && (!Number.isFinite(value) || value <= 0)} errorMessage="0보다 큰 숫자를 입력해 주세요." />\r
    <div>\r
      <IconButton aria-label="보내는 통화와 받는 통화 바꾸기" icon={<DirectionalIcon glyph="arrow-up-down" />} onPress={() => {setFrom(to); setTo(from); setAmount(valid ? String(Number((value * rate).toFixed(2))) : ''); reset();}} />\r
    </div>\r
    <NativeSelect label="받는 통화" options={currencies} value={to} onChange={next => {setTo(next); reset();}} />\r
    <Input label="예상 수령액" value={format(received)} isReadOnly end={to} description="수수료 0.1%를 뺀 금액이에요." />\r
    <dl style={{margin: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)', fontVariantNumeric: 'tabular-nums', display: 'grid', gap: 'var(--g-space-2)', color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>\r
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}><dt>예시 환율</dt><dd style={{margin: 0, color: 'var(--g-ink)', fontWeight: 'var(--g-weight-semibold)'}}>1 {from} = {formatRate(rate)} {to}</dd></div>\r
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}><dt>환전 수수료(0.1%)</dt><dd style={{margin: 0}}>{format(valid ? value * 0.001 : 0)} {from}</dd></div>\r
    </dl>\r
    {from === to && <Alert tone="warning">서로 다른 통화를 선택해 주세요.</Alert>}\r
    <Button isDisabled={!valid} onPress={() => setConfirmed(true)} style={{width: '100%'}}>환전 견적 확인</Button>\r
    {confirmed && <Alert tone="success">견적을 확인했어요. {format(value)} {from}를 {format(received)} {to}로 받아요.</Alert>}\r
  </section>;\r
}`,d=e(t(),1),f=n(),p=[{value:`KRW`,label:`대한민국 원 (KRW)`},{value:`USD`,label:`미국 달러 (USD)`},{value:`EUR`,label:`유로 (EUR)`}],m={KRW:1,USD:1380,EUR:1500},h=e=>e.toLocaleString(`ko-KR`,{maximumFractionDigits:2}),g=e=>e.toLocaleString(`ko-KR`,{maximumSignificantDigits:4}),_=e=>{if(!/^\d*(\.\d*)?$/.test(e))return e;let[t=``,n]=e.split(`.`),r=t.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return n===void 0?r:`${r}.${n}`};function v(){let e=(0,d.useId)(),[t,n]=(0,d.useState)(`KRW`),[l,u]=(0,d.useState)(`USD`),[v,y]=(0,d.useState)(`1000000`),[b,x]=(0,d.useState)(!1),S=Number(v),C=v.trim()!==``&&Number.isFinite(S)&&S>0&&t!==l,w=Number((m[t]/m[l]).toPrecision(4)),T=C?S*w*.999:0,E=()=>x(!1);return(0,f.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-4)`,width:`100%`,minWidth:0,maxWidth:`var(--g-dialog-width)`},children:[(0,f.jsx)(`h2`,{id:e,className:`catalog-block-title`,children:`환전`}),(0,f.jsx)(o,{label:`보내는 통화`,options:p,value:t,onChange:e=>{n(e),E()}}),(0,f.jsx)(s,{label:`보낼 금액`,inputMode:`decimal`,value:_(v),onChange:e=>{y(e.replace(/,/g,``)),E()},end:t,isInvalid:v!==``&&(!Number.isFinite(S)||S<=0),errorMessage:`0보다 큰 숫자를 입력해 주세요.`}),(0,f.jsx)(`div`,{children:(0,f.jsx)(c,{"aria-label":`보내는 통화와 받는 통화 바꾸기`,icon:(0,f.jsx)(r,{glyph:`arrow-up-down`}),onPress:()=>{n(l),u(t),y(C?String(Number((S*w).toFixed(2))):``),E()}})}),(0,f.jsx)(o,{label:`받는 통화`,options:p,value:l,onChange:e=>{u(e),E()}}),(0,f.jsx)(s,{label:`예상 수령액`,value:h(T),isReadOnly:!0,end:l,description:`수수료 0.1%를 뺀 금액이에요.`}),(0,f.jsxs)(`dl`,{style:{margin:0,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`,fontVariantNumeric:`tabular-nums`,display:`grid`,gap:`var(--g-space-2)`,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,f.jsx)(`dt`,{children:`예시 환율`}),(0,f.jsxs)(`dd`,{style:{margin:0,color:`var(--g-ink)`,fontWeight:`var(--g-weight-semibold)`},children:[`1 `,t,` = `,g(w),` `,l]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,f.jsx)(`dt`,{children:`환전 수수료(0.1%)`}),(0,f.jsxs)(`dd`,{style:{margin:0},children:[h(C?S*.001:0),` `,t]})]})]}),t===l&&(0,f.jsx)(a,{tone:`warning`,children:`서로 다른 통화를 선택해 주세요.`}),(0,f.jsx)(i,{isDisabled:!C,onPress:()=>x(!0),style:{width:`100%`},children:`환전 견적 확인`}),b&&(0,f.jsxs)(a,{tone:`success`,children:[`견적을 확인했어요. `,h(S),` `,t,`를 `,h(T),` `,l,`로 받아요.`]})]})}var y={id:`swap-form`,title:`통화 교환`,koreanTitle:`통화 교환`,group:`blocks`,interactions:[`type`,`select`,`press`],description:`보내는 통화와 받는 통화를 고르고 수수료를 뺀 예상 수령액을 확인하는 환전 폼입니다. 예시 환율은 고정값이고, 견적을 확인해도 실제 환전이나 출금은 일어나지 않습니다.`,demo:v,behavior:[`폼은 테두리 없이 놓인 화면의 흐름을 따르고, 필드는 한 열에 시작 정렬합니다.`,`보낼 금액은 입력한 숫자를 천 단위 쉼표로 묶어 보여 주고, 계산에는 쉼표를 뺀 값을 씁니다. 숫자가 아닌 글자는 그대로 두고 오류 문구를 표시합니다.`,`통화 바꾸기 버튼은 두 통화를 맞바꾸고, 보낼 금액을 지금 환율로 환산한 값으로 바꿉니다.`,`보내는 통화와 받는 통화가 같으면 경고를 띄우고 견적 확인 버튼을 비활성화합니다.`,`통화나 금액을 바꾸면 이전 견적 확인 알림은 사라집니다.`],whenToUse:[`원화를 달러로 바꾸듯 보내는 통화와 받는 통화를 고르고 수수료를 뺀 예상 수령액을 확인시킬 때 씁니다.`,`두 통화를 맞바꾸는 버튼으로 방향을 빠르게 뒤집는 환전 화면에 씁니다.`],whenNot:[`호가를 보고 가격과 수량을 정하는 주문 화면은 OrderBook과 SegmentedControl로 짠 trading-ticket 블록을 따릅니다.`,`금액 하나만 천 단위로 받으면 MoneyInput을 씁니다.`,`버튼 하나가 눌린 뒤 아이콘과 문구만 바뀌는 피드백은 ActionSwap을 씁니다.`],aiNotes:[`이 블록은 Alert, Button, DirectionalIcon, IconButton, Input, NativeSelect를 조합한 예시이므로 usage 코드를 가져다 환율과 견적 호출을 바꿔 씁니다.`,`금액은 쉼표를 뺀 값으로 계산하고, 보내는 통화와 받는 통화가 같으면 경고를 띄운 채 견적 확인 버튼을 isDisabled로 막습니다.`,`예시 환율은 고정값이고 견적을 확인해도 실제 환전이나 출금은 일어나지 않습니다. 실제 호출은 직접 연결합니다.`],usage:l(u),props:[{name:`Alert`,type:`'@gyeol/ui'`,description:`같은 통화를 골랐을 때의 경고와 견적 확인 결과.`},{name:`Button`,type:`'@gyeol/ui'`,description:`환전 견적 확인.`},{name:`DirectionalIcon`,type:`'@gyeol/ui'`,description:`통화 바꾸기 버튼의 위아래 화살표.`},{name:`IconButton`,type:`'@gyeol/ui'`,description:`보내는 통화와 받는 통화 바꾸기.`},{name:`Input`,type:`'@gyeol/ui'`,description:`금액 입력과 읽기 전용 예상 수령액.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`보내는 통화와 받는 통화 선택.`}]};export{y as doc};