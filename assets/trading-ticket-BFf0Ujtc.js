import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./FormField-C1zIoWn7.js";import{t as a}from"./SegmentedControl-Cb3OQ3el.js";import{t as o}from"./Card-B7jf_mi8.js";import{t as s}from"./OrderBook-C2jld7T7.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useState} from 'react';\r
import {Button, Card, FormField, OrderBook, SegmentedControl} from '@gyeol/ui';\r
\r
const row = {display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-2)'} as const;\r
\r
function TradingTicket() {\r
  const [side, setSide] = useState('buy');\r
  const [kind, setKind] = useState('limit');\r
  const [price, setPrice] = useState('72800');\r
  const [quantity, setQuantity] = useState('10');\r
  const [receipt, setReceipt] = useState('');\r
  const unitPrice = kind === 'market' ? 72800 : Number(price);\r
  const count = Number(quantity);\r
  const valid = Number.isSafeInteger(unitPrice) && unitPrice > 0 && Number.isSafeInteger(count) && count > 0;\r
  const total = valid ? unitPrice * count : 0;\r
  const fee = Math.floor(total * 0.00015);\r
  const available = side === 'buy' ? total + fee <= 2500000 : count <= 24;\r
  const money = (value: number) => value.toLocaleString('ko-KR') + '원';\r
  const action = side === 'buy' ? '매수' : '매도';\r
  const error = !valid ? '가격과 수량은 1 이상의 정수로 입력해 주세요.' : side === 'buy' ? '주문 가능 금액 2,500,000원을 넘었어요.' : '매도 가능 수량 24주를 넘었어요.';\r
\r
  return <section aria-label="한빛전자 주식 주문" style={{display: 'grid', gap: 'var(--g-space-5)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <h2 className="catalog-block-title">한빛전자 <span style={{fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-regular)', letterSpacing: 'normal', color: 'var(--g-muted)'}}>024680</span></h2>\r
      <span style={{color: 'var(--g-muted)', fontVariantNumeric: 'tabular-nums'}}>정규장 09:00~15:30</span>\r
    </header>\r
\r
    <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-3)', fontVariantNumeric: 'tabular-nums'}}>\r
        <strong style={{fontSize: 'var(--g-text-heading-1)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'}}>72,800원</strong>\r
        <span><span style={{color: 'var(--g-unfavorable)', fontWeight: 'var(--g-weight-semibold)'}}>+1,200원 (+1.68%)</span> <span style={{color: 'var(--g-muted)'}}>전일 대비</span></span>\r
      </div>\r
      <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', fontVariantNumeric: 'tabular-nums'}}>전일 71,600원, 거래량 1,284,530주, 14:32:08 기준</p>\r
    </div>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: 'var(--g-space-6)', minWidth: 0}}>\r
      <div style={{flex: '1 1 0', minWidth: 'min(100%, calc(var(--g-space) * 65))', boxSizing: 'border-box'}}>\r
        <OrderBook label="호가" locale="ko-KR"\r
          asks={[{price: 72900, quantity: 840}, {price: 73000, quantity: 1250}, {price: 73100, quantity: 620}]}\r
          bids={[{price: 72800, quantity: 1120}, {price: 72700, quantity: 760}, {price: 72600, quantity: 1540}]}\r
          labels={{price: '가격 (원)', quantity: '잔량 (주)', total: '누적 (주)'}} />\r
      </div>\r
\r
      <Card style={{flex: '1 1 0', minWidth: 'min(100%, calc(var(--g-space) * 65))', padding: 'var(--g-space-4)', boxSizing: 'border-box', display: 'grid', alignContent: 'start', gap: 'var(--g-space-4)'}}>\r
        <h3 style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>주문하기</h3>\r
        <SegmentedControl label="주문 방향" value={side} onChange={value => {setSide(value); setReceipt('');}}\r
          options={[{value: 'buy', label: '매수'}, {value: 'sell', label: '매도'}]} />\r
        <SegmentedControl label="주문 유형" value={kind} onChange={value => {setKind(value); setReceipt('');}}\r
          options={[{value: 'limit', label: '지정가'}, {value: 'market', label: '시장가'}]} />\r
        {kind === 'limit' ? <FormField label="주문 가격 (원)" value={price} onChange={value => {setPrice(value); setReceipt('');}} />\r
          : <p style={{margin: 0, color: 'var(--g-muted)'}}>시장가는 체결될 때 가격이 달라질 수 있어요. 아래 금액은 현재가로 계산했어요.</p>}\r
        <FormField label="주문 수량 (주)" value={quantity} onChange={value => {setQuantity(value); setReceipt('');}}\r
          description={side === 'buy' ? '주문 가능 금액 2,500,000원' : '매도 가능 수량 24주'}\r
          isInvalid={!valid || !available} errorMessage={error} />\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
          {[1, 5, 10].map(value => <Button key={value} variant="secondary" onPress={() => {setQuantity(String(value)); setReceipt('');}}>{value}주</Button>)}\r
        </div>\r
        <dl style={{display: 'grid', gap: 'var(--g-space-2)', margin: 0, paddingBlockStart: 'var(--g-space-3)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)', fontVariantNumeric: 'tabular-nums'}}>\r
          <div style={row}><dt>주문 금액</dt><dd style={{margin: 0}}>{money(total)}</dd></div>\r
          <div style={{...row, color: 'var(--g-muted)'}}><dt>예상 수수료 (0.015%)</dt><dd style={{margin: 0}}>{money(fee)}</dd></div>\r
          <div style={{...row, fontWeight: 'var(--g-weight-semibold)'}}><dt>예상 {side === 'buy' ? '결제' : '수령'} 금액</dt><dd style={{margin: 0}}>{money(side === 'buy' ? total + fee : total - fee)}</dd></div>\r
        </dl>\r
        <Button isDisabled={!valid || !available} onPress={() => setReceipt('한빛전자 ' + count.toLocaleString('ko-KR') + '주 ' + action + ' 주문을 접수했어요.')}>\r
          {valid ? count.toLocaleString('ko-KR') : 0}주 {action}\r
        </Button>\r
        <p role="status" style={{margin: 0, overflowWrap: 'anywhere'}}>{receipt}</p>\r
      </Card>\r
    </div>\r
  </section>;\r
}`,u=e(t(),1),d=n(),f={display:`flex`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-2)`};function p(){let[e,t]=(0,u.useState)(`buy`),[n,c]=(0,u.useState)(`limit`),[l,p]=(0,u.useState)(`72800`),[m,h]=(0,u.useState)(`10`),[g,_]=(0,u.useState)(``),v=n===`market`?72800:Number(l),y=Number(m),b=Number.isSafeInteger(v)&&v>0&&Number.isSafeInteger(y)&&y>0,x=b?v*y:0,S=Math.floor(x*15e-5),C=e===`buy`?x+S<=25e5:y<=24,w=e=>e.toLocaleString(`ko-KR`)+`원`,T=e===`buy`?`매수`:`매도`;return(0,d.jsxs)(`section`,{"aria-label":`한빛전자 주식 주문`,style:{display:`grid`,gap:`var(--g-space-5)`,color:`var(--g-ink)`,minWidth:0},children:[(0,d.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,d.jsxs)(`h2`,{className:`catalog-block-title`,children:[`한빛전자 `,(0,d.jsx)(`span`,{style:{fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-regular)`,letterSpacing:`normal`,color:`var(--g-muted)`},children:`024680`})]}),(0,d.jsx)(`span`,{style:{color:`var(--g-muted)`,fontVariantNumeric:`tabular-nums`},children:`정규장 09:00~15:30`})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-3)`,fontVariantNumeric:`tabular-nums`},children:[(0,d.jsx)(`strong`,{style:{fontSize:`var(--g-text-heading-1)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`},children:`72,800원`}),(0,d.jsxs)(`span`,{children:[(0,d.jsx)(`span`,{style:{color:`var(--g-unfavorable)`,fontWeight:`var(--g-weight-semibold)`},children:`+1,200원 (+1.68%)`}),` `,(0,d.jsx)(`span`,{style:{color:`var(--g-muted)`},children:`전일 대비`})]})]}),(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,fontVariantNumeric:`tabular-nums`},children:`전일 71,600원, 거래량 1,284,530주, 14:32:08 기준`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`start`,gap:`var(--g-space-6)`,minWidth:0},children:[(0,d.jsx)(`div`,{style:{flex:`1 1 0`,minWidth:`min(100%, calc(var(--g-space) * 65))`,boxSizing:`border-box`},children:(0,d.jsx)(s,{label:`호가`,locale:`ko-KR`,asks:[{price:72900,quantity:840},{price:73e3,quantity:1250},{price:73100,quantity:620}],bids:[{price:72800,quantity:1120},{price:72700,quantity:760},{price:72600,quantity:1540}],labels:{price:`가격 (원)`,quantity:`잔량 (주)`,total:`누적 (주)`}})}),(0,d.jsxs)(o,{style:{flex:`1 1 0`,minWidth:`min(100%, calc(var(--g-space) * 65))`,padding:`var(--g-space-4)`,boxSizing:`border-box`,display:`grid`,alignContent:`start`,gap:`var(--g-space-4)`},children:[(0,d.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`주문하기`}),(0,d.jsx)(a,{label:`주문 방향`,value:e,onChange:e=>{t(e),_(``)},options:[{value:`buy`,label:`매수`},{value:`sell`,label:`매도`}]}),(0,d.jsx)(a,{label:`주문 유형`,value:n,onChange:e=>{c(e),_(``)},options:[{value:`limit`,label:`지정가`},{value:`market`,label:`시장가`}]}),n===`limit`?(0,d.jsx)(i,{label:`주문 가격 (원)`,value:l,onChange:e=>{p(e),_(``)}}):(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`시장가는 체결될 때 가격이 달라질 수 있어요. 아래 금액은 현재가로 계산했어요.`}),(0,d.jsx)(i,{label:`주문 수량 (주)`,value:m,onChange:e=>{h(e),_(``)},description:e===`buy`?`주문 가능 금액 2,500,000원`:`매도 가능 수량 24주`,isInvalid:!b||!C,errorMessage:b?e===`buy`?`주문 가능 금액 2,500,000원을 넘었어요.`:`매도 가능 수량 24주를 넘었어요.`:`가격과 수량은 1 이상의 정수로 입력해 주세요.`}),(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[1,5,10].map(e=>(0,d.jsxs)(r,{variant:`secondary`,onPress:()=>{h(String(e)),_(``)},children:[e,`주`]},e))}),(0,d.jsxs)(`dl`,{style:{display:`grid`,gap:`var(--g-space-2)`,margin:0,paddingBlockStart:`var(--g-space-3)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`,fontVariantNumeric:`tabular-nums`},children:[(0,d.jsxs)(`div`,{style:f,children:[(0,d.jsx)(`dt`,{children:`주문 금액`}),(0,d.jsx)(`dd`,{style:{margin:0},children:w(x)})]}),(0,d.jsxs)(`div`,{style:{...f,color:`var(--g-muted)`},children:[(0,d.jsx)(`dt`,{children:`예상 수수료 (0.015%)`}),(0,d.jsx)(`dd`,{style:{margin:0},children:w(S)})]}),(0,d.jsxs)(`div`,{style:{...f,fontWeight:`var(--g-weight-semibold)`},children:[(0,d.jsxs)(`dt`,{children:[`예상 `,e===`buy`?`결제`:`수령`,` 금액`]}),(0,d.jsx)(`dd`,{style:{margin:0},children:w(e===`buy`?x+S:x-S)})]})]}),(0,d.jsxs)(r,{isDisabled:!b||!C,onPress:()=>_(`한빛전자 `+y.toLocaleString(`ko-KR`)+`주 `+T+` 주문을 접수했어요.`),children:[b?y.toLocaleString(`ko-KR`):0,`주 `,T]}),(0,d.jsx)(`p`,{role:`status`,style:{margin:0,overflowWrap:`anywhere`},children:g})]})]})]})}var m={id:`trading-ticket`,title:`주식 주문`,koreanTitle:`주식 주문`,group:`blocks`,interactions:[`type`,`select`,`press`],description:`호가를 보면서 매수·매도 방향, 주문 유형, 가격과 수량을 정하는 국내주식 주문 화면입니다. 시세와 호가는 예시 데이터이고, 주문은 실제로 체결되지 않으며 매도 제세금은 계산에 넣지 않습니다.`,demo:p,behavior:[`시세와 호가는 14:32:08 기준으로 고정된 예시이며 자동으로 갱신되지 않습니다. 호가 단위는 100원입니다.`,`시장가를 고르면 가격 입력을 숨기고 현재가 72,800원으로 예상 금액을 계산합니다.`,`예상 수수료는 주문 금액의 0.015%이며 원 단위 미만은 버립니다.`,`매수는 수수료를 더한 금액이 주문 가능 금액 2,500,000원 이하일 때, 매도는 수량이 보유 수량 24주 이하일 때만 주문 버튼이 켜지고, 넘으면 수량 필드가 넘은 한도를 알립니다.`,`접수 문구는 status 영역이 읽고, 방향이나 유형, 가격, 수량을 바꾸면 지웁니다.`],whenToUse:[`호가를 보면서 매수와 매도 방향, 지정가와 시장가, 가격과 수량을 정해 주문을 접수받을 때 씁니다.`,`주문 가능 금액이나 보유 수량을 넘으면 수량 필드에서 한도를 알려야 하는 주문 화면에 씁니다.`],whenNot:[`환율로 예상 수령액을 계산하는 환전 화면은 NativeSelect와 Input으로 짠 swap-form 블록을 따릅니다.`,`호가만 읽혀 주는 화면은 OrderBook을 씁니다.`,`가격 흐름을 그려 보이는 화면은 MarketChart나 CandlestickChart를 씁니다.`],aiNotes:[`이 블록은 Button, Card, FormField, OrderBook, SegmentedControl을 조합한 예시이므로 usage 코드를 가져다 시세와 주문 호출을 바꿔 씁니다.`,`시세와 호가는 고정된 예시이고 주문은 체결되지 않으며 매도 제세금은 계산하지 않습니다. 실제 서비스에서는 직접 연결합니다.`,`매수는 수수료를 더한 금액이 주문 가능 금액 이하일 때, 매도는 수량이 보유 수량 이하일 때만 주문 버튼을 켜고 접수 문구는 상태 영역으로 알립니다.`],usage:c(l),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`빠른 수량 선택과 유효한 주문 접수.`},{name:`Card`,type:`'@gyeol/ui'`,description:`호가 옆에서 독립적으로 조작하는 주문표 하나를 감쌉니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`주문 가격과 수량 입력 및 한도 초과 오류.`},{name:`OrderBook`,type:`'@gyeol/ui'`,description:`매도·매수 호가, 잔량 및 누적 수량 표시.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`매수·매도 방향과 지정가·시장가 선택.`}]};export{m as doc};