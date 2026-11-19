import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{t}from"./Badge-DamB5rRf.js";import{t as n}from"./DataTable-VGGyxtJL.js";import{t as r}from"./usage-source-BdQLyNT5.js";import{r as i}from"./values-DbzGm6xY.js";var a=`import {Badge, DataTable} from '@gyeol/ui';\r
\r
const orders = [\r
  {id: 'ORD-1026', customer: '김서연', item: '데스크 정리 세트', amount: 68000, status: '배송 준비', date: '2026-10-26'},\r
  {id: 'ORD-1025', customer: '박지훈', item: '원목 모니터 받침대', amount: 89000, status: '배송 중', date: '2026-10-26'},\r
  {id: 'ORD-1024', customer: '이수빈', item: '패브릭 수납 바구니', amount: 32000, status: '배송 완료', date: '2026-10-25'},\r
  {id: 'ORD-1023', customer: '최도윤', item: '데스크 정리 세트', amount: 68000, status: '배송 준비', date: '2026-10-25'},\r
  {id: 'ORD-1022', customer: '정하은', item: '세라믹 펜 트레이', amount: 24000, status: '배송 완료', date: '2026-10-24'},\r
  {id: 'ORD-1021', customer: '윤민준', item: '원목 모니터 받침대', amount: 89000, status: '배송 중', date: '2026-10-24'},\r
];\r
\r
/** ISO date to the Korean form, 2026-10-26 to 2026. 10. 26. */\r
const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
\r
const summary = [\r
  {label: '전체 주문', value: orders.length + '건'},\r
  {label: '배송 준비', value: orders.filter(order => order.status === '배송 준비').length + '건'},\r
  {label: '결제 금액', value: orders.reduce((sum, order) => sum + order.amount, 0).toLocaleString('ko-KR') + '원'},\r
];\r
\r
function DataTableSection() {\r
  return (\r
    <section aria-label="주문 관리" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, width: '100%', color: 'var(--g-ink)'}}>\r
      <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>주문 관리</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)'}}>10월 24일~26일</p>\r
      </header>\r
\r
      <dl style={{display: 'flex', flexWrap: 'wrap', columnGap: 'var(--g-space-8)', rowGap: 'var(--g-space-4)', margin: 0}}>\r
        {summary.map(metric => <div key={metric.label}>\r
          <dt style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-help)'}}>{metric.label}</dt>\r
          <dd style={{margin: 'var(--g-space-1) 0 0', fontSize: 'var(--g-text-heading-2)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', fontVariantNumeric: 'tabular-nums'}}>{metric.value}</dd>\r
        </div>)}\r
      </dl>\r
\r
      <div style={{minWidth: 0, paddingTop: 'var(--g-space-6)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
        <DataTable\r
          label="최근 3일 주문 목록"\r
          rows={orders}\r
          rowKey={order => order.id}\r
          searchText={order => \`\${order.id} \${order.customer} \${order.item}\`}\r
          searchLabel="주문 번호, 고객명, 상품명 검색"\r
          locale="ko-KR"\r
          columns={[\r
            {id: 'id', header: '주문 번호', cell: order => <span style={{fontFamily: 'var(--g-font-mono)', fontSize: 'var(--g-text-small)'}}>{order.id}</span>, sortValue: order => order.id},\r
            {id: 'customer', header: '고객 / 상품', cell: order => <div><strong style={{fontWeight: 'var(--g-weight-medium)'}}>{order.customer}</strong><div style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', marginTop: 'var(--g-space-1)'}}>{order.item}</div></div>, sortValue: order => order.customer},\r
            {id: 'amount', header: '결제 금액(원, 부가세 포함)', align: 'end', cell: order => order.amount.toLocaleString('ko-KR'), sortValue: order => order.amount},\r
            {id: 'status', header: '배송 상태', cell: order => <Badge state={order.status === '배송 완료' ? 'done' : 'idle'} label={order.status} />},\r
            {id: 'date', header: '주문일', cell: order => <time dateTime={order.date} style={{whiteSpace: 'nowrap'}}>{koreanDate(order.date)}</time>, sortValue: order => order.date},\r
          ]}\r
          filter={{label: '배송 상태', options: ['배송 준비', '배송 중', '배송 완료'].map(status => ({id: status, label: status})), matches: (order, status) => order.status === status}}\r
          allLabel="모든 배송 상태"\r
          resetLabel="조건 초기화"\r
          emptyText="조건에 맞는 주문이 없어요."\r
          resultLabel={count => \`전체 \${orders.length}건 중 \${count}건 표시\`}\r
        />\r
      </div>\r
    </section>\r
  );\r
}`,o=e(),s=[{id:`ORD-1026`,customer:`김서연`,item:`데스크 정리 세트`,amount:68e3,status:`배송 준비`,date:`2026-10-26`},{id:`ORD-1025`,customer:`박지훈`,item:`원목 모니터 받침대`,amount:89e3,status:`배송 중`,date:`2026-10-26`},{id:`ORD-1024`,customer:`이수빈`,item:`패브릭 수납 바구니`,amount:32e3,status:`배송 완료`,date:`2026-10-25`},{id:`ORD-1023`,customer:`최도윤`,item:`데스크 정리 세트`,amount:68e3,status:`배송 준비`,date:`2026-10-25`},{id:`ORD-1022`,customer:`정하은`,item:`세라믹 펜 트레이`,amount:24e3,status:`배송 완료`,date:`2026-10-24`},{id:`ORD-1021`,customer:`윤민준`,item:`원목 모니터 받침대`,amount:89e3,status:`배송 중`,date:`2026-10-24`}],c=[{label:`전체 주문`,value:s.length+`건`},{label:`배송 준비`,value:s.filter(e=>e.status===`배송 준비`).length+`건`},{label:`결제 금액`,value:s.reduce((e,t)=>e+t.amount,0).toLocaleString(`ko-KR`)+`원`}];function l(){return(0,o.jsxs)(`section`,{"aria-label":`주문 관리`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,width:`100%`,color:`var(--g-ink)`},children:[(0,o.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,o.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`주문 관리`}),(0,o.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`},children:`10월 24일~26일`})]}),(0,o.jsx)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,columnGap:`var(--g-space-8)`,rowGap:`var(--g-space-4)`,margin:0},children:c.map(e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`dt`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-help)`},children:e.label}),(0,o.jsx)(`dd`,{style:{margin:`var(--g-space-1) 0 0`,fontSize:`var(--g-text-heading-2)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,fontVariantNumeric:`tabular-nums`},children:e.value})]},e.label))}),(0,o.jsx)(`div`,{style:{minWidth:0,paddingTop:`var(--g-space-6)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:(0,o.jsx)(n,{label:`최근 3일 주문 목록`,rows:s,rowKey:e=>e.id,searchText:e=>`${e.id} ${e.customer} ${e.item}`,searchLabel:`주문 번호, 고객명, 상품명 검색`,locale:`ko-KR`,columns:[{id:`id`,header:`주문 번호`,cell:e=>(0,o.jsx)(`span`,{style:{fontFamily:`var(--g-font-mono)`,fontSize:`var(--g-text-small)`},children:e.id}),sortValue:e=>e.id},{id:`customer`,header:`고객 / 상품`,cell:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-medium)`},children:e.customer}),(0,o.jsx)(`div`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,marginTop:`var(--g-space-1)`},children:e.item})]}),sortValue:e=>e.customer},{id:`amount`,header:`결제 금액(원, 부가세 포함)`,align:`end`,cell:e=>e.amount.toLocaleString(`ko-KR`),sortValue:e=>e.amount},{id:`status`,header:`배송 상태`,cell:e=>(0,o.jsx)(t,{state:e.status===`배송 완료`?`done`:`idle`,label:e.status})},{id:`date`,header:`주문일`,cell:e=>(0,o.jsx)(`time`,{dateTime:e.date,style:{whiteSpace:`nowrap`},children:i(e.date)}),sortValue:e=>e.date}],filter:{label:`배송 상태`,options:[`배송 준비`,`배송 중`,`배송 완료`].map(e=>({id:e,label:e})),matches:(e,t)=>e.status===t},allLabel:`모든 배송 상태`,resetLabel:`조건 초기화`,emptyText:`조건에 맞는 주문이 없어요.`,resultLabel:e=>`전체 ${s.length}건 중 ${e}건 표시`})})]})}var u={id:`data-table-section`,title:`주문 관리 섹션`,koreanTitle:`주문 관리 섹션`,group:`blocks`,interactions:[`type`,`press`],description:`주문 요약 수치와 검색, 배송 상태 필터, 정렬이 되는 표를 묶은 스토어 운영 화면입니다.`,demo:l,behavior:[`상단 요약은 검색어와 배송 상태 필터와 관계없이 조회 기간의 전체 주문을 집계합니다.`,`주문일은 2026. 10. 26. 형식으로 표시하고, 정렬은 ISO 날짜 값으로 합니다.`,`결제 금액은 부가세를 포함한 원화 금액이며, 단위는 열 제목에 한 번만 적습니다.`],whenToUse:[`스토어 운영 화면에서 주문 요약 수치와 배송 상태별 주문 표를 함께 볼 때 씁니다.`,`주문번호나 고객 이름으로 검색하고 배송 상태로 걸러 열 정렬까지 하는 주문 관리 화면에 맞습니다.`],whenNot:[`요약 없이 표 하나만 필요하면 DataTable을 직접 씁니다.`,`셀을 직접 편집하는 표는 DataGrid를 씁니다.`,`상하위 관계가 있는 행은 TreeTable을 씁니다.`],aiNotes:[`props 없이 Badge와 DataTable을 조합한 블록이므로 usage의 소스를 복사해 주문 데이터와 열을 바꿉니다.`,`상단 요약은 검색어와 배송 상태 필터에 영향받지 않고 조회 기간 전체를 집계합니다. 필터 결과로 요약을 바꾸려면 구조를 따로 고칩니다.`,`날짜는 화면에는 2026. 10. 26. 형식으로 쓰고 정렬은 ISO 날짜 값으로 합니다. 금액 단위는 열 제목에 한 번만 적습니다.`],usage:r(a),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`각 주문의 배송 상태를 표시합니다.`},{name:`DataTable`,type:`'@gyeol/ui'`,description:`주문 검색, 배송 상태 필터, 열 정렬, 결과 수 안내를 맡습니다.`}]};export{u as doc};