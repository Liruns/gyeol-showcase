import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Q as r,Z as i}from"./boot-CJQNp_iX.js";import{t as a}from"./Button-BEXAs4nG.js";import{t as o}from"./Badge-BrfsGfws.js";import{a as s,i as c,n as l,o as u,t as d}from"./Card-DqgWC_d7.js";import{t as f}from"./LineChart-DEMExZ9b.js";import{t as p}from"./usage-source-BdQLyNT5.js";var m=`import {useState, type CSSProperties} from 'react';\r
import {Radio, RadioGroup} from 'react-aria-components/RadioGroup';\r
import {Badge, Button, Card, CardContent, CardFooter, CardHeader, CardTitle, LineChart} from '@gyeol/ui';\r
\r
const stocks = [\r
  {name: '한빛반도체', code: '012340', previousClose: 76600, prices: [77000, 77100, 76900, 77800, 77400, 78400]},\r
  {name: '푸른에너지', code: '045670', previousClose: 41900, prices: [42000, 42100, 41800, 42200, 42400, 42600]},\r
  {name: '새봄모빌리티', code: '089010', previousClose: 154800, prices: [155000, 154200, 154600, 154100, 153700, 153500]},\r
];\r
const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:30'];\r
const won = new Intl.NumberFormat('ko-KR');\r
const signed = new Intl.NumberFormat('ko-KR', {minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'exceptZero'});\r
/** Change from the previous close in percent, rounded to the 0.01% a quote shows. */\r
const changeFrom = (previousClose: number, price: number) => Math.round((price / previousClose - 1) * 10000) / 100;\r
const percent = (value: number) => \`\${signed.format(value)}%\`;\r
const last = (prices: readonly number[]) => prices[prices.length - 1]!;\r
\r
/** A stock row is the selector: the radio ring, weight and soft fill mark the selected row; price changes stay neutral ink with their sign. */\r
const row = ({isSelected, isFocusVisible}: {readonly isSelected: boolean; readonly isFocusVisible: boolean}): CSSProperties => ({\r
  display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-1) var(--g-space-3)',\r
  minBlockSize: 'max(var(--g-space-10), var(--g-target-min))', paddingInline: 'var(--g-space-2)', paddingBlock: 'var(--g-space-2)',\r
  borderTop: 'var(--g-border-width) solid var(--g-border)', background: isSelected ? 'var(--g-soft)' : 'transparent', cursor: 'pointer',\r
  outline: isFocusVisible ? 'var(--g-focus-width) solid var(--g-focus)' : 'none', outlineOffset: 'calc(var(--g-focus-width) * -1)',\r
});\r
const ring = (isSelected: boolean, isHovered: boolean): CSSProperties => ({\r
  flex: 'none', boxSizing: 'border-box', inlineSize: 'var(--g-space-4)', blockSize: 'var(--g-space-4)', borderRadius: 'var(--g-radius-pill)', background: 'var(--g-surface)',\r
  border: isSelected ? 'calc(var(--g-space-1) + var(--g-border-width)) solid var(--g-accent)' : \`var(--g-border-width) solid \${isHovered ? 'var(--g-muted)' : 'var(--g-border-control)'}\`,\r
});\r
\r
function MarketCard() {\r
  const [selected, setSelected] = useState(stocks[0]!.code);\r
  const [saved, setSaved] = useState<readonly string[]>([]);\r
  const stock = stocks.find(item => item.code === selected) ?? stocks[0]!;\r
  const price = last(stock.prices);\r
  return <section aria-labelledby="market-card-title" style={{display: 'grid', gap: 'var(--g-space-5)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h2 id="market-card-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>국내 주식</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>10월 26일 15:30 장 마감</p>\r
      </div>\r
      <Badge state="idle" label="예시 시세"/>\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--g-space-6)', minWidth: 0}}>\r
      <Card style={{flex: '2 1 calc(var(--g-space) * 96)', minWidth: 0}}>\r
        <CardHeader>\r
          <CardTitle>{stock.name} <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', fontWeight: 'var(--g-weight-regular)', letterSpacing: 'normal'}}>{stock.code}</span></CardTitle>\r
        </CardHeader>\r
        <CardContent style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
          <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
            <p style={{margin: 0, fontSize: 'var(--g-text-heading-1)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', fontVariantNumeric: 'tabular-nums'}}>{won.format(price)}원</p>\r
            <p style={{margin: 0, fontSize: 'var(--g-text-compact)'}}><span style={{fontVariantNumeric: 'tabular-nums'}}>{percent(changeFrom(stock.previousClose, price))}</span> <span style={{color: 'var(--g-muted)'}}>전일 대비</span></p>\r
          </div>\r
          <LineChart key={stock.code} label="전일 종가 대비 장중 흐름" categories={times} xAxisLabel="거래 시간" yAxisLabel="등락률" series={[{id: stock.code, label: stock.name, values: stock.prices.map(value => changeFrom(stock.previousClose, value))}]} formatValue={percent}/>\r
        </CardContent>\r
        <CardFooter>\r
          <Button variant="secondary" aria-pressed={saved.includes(stock.code)} onPress={() => setSaved(previous => previous.includes(stock.code) ? previous.filter(code => code !== stock.code) : [...previous, stock.code])}>{saved.includes(stock.code) ? '관심 종목 해제' : '관심 종목 담기'}</Button>\r
        </CardFooter>\r
      </Card>\r
      <section aria-labelledby="market-card-list" style={{flex: '1 1 calc(var(--g-space) * 76)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', alignContent: 'start'}}>\r
        <h3 id="market-card-list" style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>종목 시세</h3>\r
        <RadioGroup aria-labelledby="market-card-list" value={selected} onChange={setSelected} style={{display: 'grid', fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-control)'}}>\r
          {stocks.map(item => <Radio key={item.code} value={item.code} style={row}>\r
            {({isSelected, isHovered}) => <>\r
              <span aria-hidden="true" style={ring(isSelected, isHovered)}/>\r
              <span style={{flex: '1 1 auto', minWidth: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>\r
                <span style={{fontWeight: isSelected ? 'var(--g-weight-selected)' : 'var(--g-weight-regular)'}}>{item.name}</span>{' '}\r
                <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{item.code}</span>\r
              </span>{' '}\r
              <span style={{marginInlineStart: 'auto', display: 'flex', alignItems: 'baseline', gap: 'var(--g-space-3)', fontVariantNumeric: 'tabular-nums'}}>\r
                <span>{won.format(last(item.prices))}원</span>{' '}\r
                <span>{percent(changeFrom(item.previousClose, last(item.prices)))}</span>\r
              </span>\r
            </>}\r
          </Radio>)}\r
        </RadioGroup>\r
        <p role="status" style={{margin: 0, fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>내 관심 종목 {saved.length}개</p>\r
      </section>\r
    </div>\r
  </section>;\r
}`,h=e(t(),1),g=n(),_=[{name:`한빛반도체`,code:`012340`,previousClose:76600,prices:[77e3,77100,76900,77800,77400,78400]},{name:`푸른에너지`,code:`045670`,previousClose:41900,prices:[42e3,42100,41800,42200,42400,42600]},{name:`새봄모빌리티`,code:`089010`,previousClose:154800,prices:[155e3,154200,154600,154100,153700,153500]}],v=[`09:00`,`10:00`,`11:00`,`13:00`,`14:00`,`15:30`],y=new Intl.NumberFormat(`ko-KR`),b=new Intl.NumberFormat(`ko-KR`,{minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:`exceptZero`}),x=(e,t)=>Math.round((t/e-1)*1e4)/100,S=e=>`${b.format(e)}%`,C=e=>e[e.length-1],w=({isSelected:e,isFocusVisible:t})=>({display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-1) var(--g-space-3)`,minBlockSize:`max(var(--g-space-10), var(--g-target-min))`,paddingInline:`var(--g-space-2)`,paddingBlock:`var(--g-space-2)`,borderTop:`var(--g-border-width) solid var(--g-border)`,background:e?`var(--g-soft)`:`transparent`,cursor:`pointer`,outline:t?`var(--g-focus-width) solid var(--g-focus)`:`none`,outlineOffset:`calc(var(--g-focus-width) * -1)`}),T=(e,t)=>({flex:`none`,boxSizing:`border-box`,inlineSize:`var(--g-space-4)`,blockSize:`var(--g-space-4)`,borderRadius:`var(--g-radius-pill)`,background:`var(--g-surface)`,border:e?`calc(var(--g-space-1) + var(--g-border-width)) solid var(--g-accent)`:`var(--g-border-width) solid ${t?`var(--g-muted)`:`var(--g-border-control)`}`});function E(){let[e,t]=(0,h.useState)(_[0].code),[n,p]=(0,h.useState)([]),m=_.find(t=>t.code===e)??_[0],b=C(m.prices);return(0,g.jsxs)(`section`,{"aria-labelledby":`market-card-title`,style:{display:`grid`,gap:`var(--g-space-5)`,color:`var(--g-ink)`,minWidth:0},children:[(0,g.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,g.jsx)(`h2`,{id:`market-card-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`국내 주식`}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`10월 26일 15:30 장 마감`})]}),(0,g.jsx)(o,{state:`idle`,label:`예시 시세`})]}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`var(--g-space-6)`,minWidth:0},children:[(0,g.jsxs)(d,{style:{flex:`2 1 calc(var(--g-space) * 96)`,minWidth:0},children:[(0,g.jsx)(s,{children:(0,g.jsxs)(u,{children:[m.name,` `,(0,g.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,fontWeight:`var(--g-weight-regular)`,letterSpacing:`normal`},children:m.code})]})}),(0,g.jsxs)(l,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,g.jsxs)(`p`,{style:{margin:0,fontSize:`var(--g-text-heading-1)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,fontVariantNumeric:`tabular-nums`},children:[y.format(b),`원`]}),(0,g.jsxs)(`p`,{style:{margin:0,fontSize:`var(--g-text-compact)`},children:[(0,g.jsx)(`span`,{style:{fontVariantNumeric:`tabular-nums`},children:S(x(m.previousClose,b))}),` `,(0,g.jsx)(`span`,{style:{color:`var(--g-muted)`},children:`전일 대비`})]})]}),(0,g.jsx)(f,{label:`전일 종가 대비 장중 흐름`,categories:v,xAxisLabel:`거래 시간`,yAxisLabel:`등락률`,series:[{id:m.code,label:m.name,values:m.prices.map(e=>x(m.previousClose,e))}],formatValue:S},m.code)]}),(0,g.jsx)(c,{children:(0,g.jsx)(a,{variant:`secondary`,"aria-pressed":n.includes(m.code),onPress:()=>p(e=>e.includes(m.code)?e.filter(e=>e!==m.code):[...e,m.code]),children:n.includes(m.code)?`관심 종목 해제`:`관심 종목 담기`})})]}),(0,g.jsxs)(`section`,{"aria-labelledby":`market-card-list`,style:{flex:`1 1 calc(var(--g-space) * 76)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,alignContent:`start`},children:[(0,g.jsx)(`h3`,{id:`market-card-list`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`종목 시세`}),(0,g.jsx)(i,{"aria-labelledby":`market-card-list`,value:e,onChange:t,style:{display:`grid`,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-control)`},children:_.map(e=>(0,g.jsx)(r,{value:e.code,style:w,children:({isSelected:t,isHovered:n})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{"aria-hidden":`true`,style:T(t,n)}),(0,g.jsxs)(`span`,{style:{flex:`1 1 auto`,minWidth:0,display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,g.jsx)(`span`,{style:{fontWeight:t?`var(--g-weight-selected)`:`var(--g-weight-regular)`},children:e.name}),` `,(0,g.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.code})]}),` `,(0,g.jsxs)(`span`,{style:{marginInlineStart:`auto`,display:`flex`,alignItems:`baseline`,gap:`var(--g-space-3)`,fontVariantNumeric:`tabular-nums`},children:[(0,g.jsxs)(`span`,{children:[y.format(C(e.prices)),`원`]}),` `,(0,g.jsx)(`span`,{children:S(x(e.previousClose,C(e.prices)))})]})]})},e.code))}),(0,g.jsxs)(`p`,{role:`status`,style:{margin:0,fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:[`내 관심 종목 `,n.length,`개`]})]})]})]})}var D={id:`market-card`,title:`오늘의 시장`,koreanTitle:`오늘의 시장`,group:`blocks`,interactions:[`select`,`hover`],description:`종목별 시세와 장중 등락률을 살펴보고 관심 종목을 담는 국내 주식 화면입니다. 가상의 종목과 시세로 만든 예시이며 투자 판단을 위한 정보가 아닙니다.`,demo:E,behavior:[`종목 시세 목록이 곧 선택기입니다. 라디오 그룹이라 Tab으로 선택된 행에 들어가고 위아래 방향키로 종목을 바꿉니다.`,`선택한 행의 이름에 가격과 등락률이 함께 있어, 종목을 바꾸면 화면 낭독기가 새 시세를 읽습니다.`,`차트는 전일 종가를 0으로 둔 등락률이라 가격 폭이 좁아도 흐름이 보입니다. 점은 Tab으로 들어간 뒤 방향키로 옮깁니다.`,`오르고 내림은 부호로 표시하고 색을 쓰지 않습니다. 국내 시장의 빨강과 파랑 관례가 좋음과 나쁨 색과 반대로 읽히기 때문입니다.`],whenToUse:[`종목별 시세와 등락률을 훑어보고 관심 종목을 담는 증권 화면에 씁니다.`,`시세 목록을 선택기로 겸해 고른 종목의 차트를 옆에 바로 보여 줄 때 씁니다.`],whenNot:[`종목 하나의 가격 변화만 요약하면 KpiCard가 맞습니다.`,`호가와 체결을 겹쳐 보는 화면은 OrderBook을 씁니다.`,`봉차트가 필요한 시세 분석은 CandlestickChart를 씁니다.`],aiNotes:[`이 블록은 RadioGroup, Radio, Card, LineChart를 조합한 예시라 소스를 복사해 시세 데이터를 바꿉니다.`,`국내 시장의 빨강과 파랑 관례가 좋음과 나쁨 색과 겹치므로 오르내림은 색 대신 부호로 알립니다.`,`선택한 행의 이름에 가격과 등락률이 들어가야 화면 낭독기가 종목을 바꿀 때 새 시세를 읽습니다.`],usage:p(m),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`예시 시세임을 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`선택한 종목을 관심 목록에 담거나 해제합니다.`},{name:`Card`,type:`'@gyeol/ui'`,description:`선택한 종목 하나를 담는 틀입니다. 선택이 바뀌면 내용이 통째로 바뀌는 단위라 테두리를 유지합니다.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`종목 이름과 코드를 묶습니다.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`선택한 종목 이름과 코드를 표시합니다.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`가격, 등락률, 장중 차트를 배치합니다.`},{name:`CardFooter`,type:`'@gyeol/ui'`,description:`관심 종목 버튼을 담습니다.`},{name:`LineChart`,type:`'@gyeol/ui'`,description:`선택한 종목의 전일 종가 대비 장중 등락률을 표시합니다.`},{name:`RadioGroup, Radio`,type:`'react-aria-components'`,description:`종목 시세 목록의 각 행을 선택기로 만듭니다.`}]};export{D as doc};