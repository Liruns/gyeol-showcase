import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Badge-Dmz41dgS.js";import{t as i}from"./DataTable-3HYUw3et.js";import{t as a}from"./usage-source-BdQLyNT5.js";var o=`import {useId} from 'react';\r
import {Badge, DataTable} from '@gyeol/ui';\r
\r
const events = [\r
  {id: 'AUD-1048', time: '2026-10-26 14:32:08', actor: '김서연', action: '멤버 권한 변경', resource: '운영팀 / 박지훈', category: '권한', result: '성공', detail: '뷰어 → 편집자', ip: '192.0.2.24'},\r
  {id: 'AUD-1047', time: '2026-10-26 14:28:41', actor: '이도윤', action: '보고서 다운로드', resource: '10월 이용 현황', category: '데이터', result: '성공', detail: 'CSV 128개 항목', ip: '192.0.2.36'},\r
  {id: 'AUD-1046', time: '2026-10-26 14:21:05', actor: '박지훈', action: '보안 설정 변경', resource: '워크스페이스 보안', category: '보안', result: '차단', detail: '관리자 권한 필요', ip: '192.0.2.18'},\r
  {id: 'AUD-1045', time: '2026-10-26 13:56:12', actor: '김서연', action: '멤버 초대', resource: '정하은 / 디자인팀', category: '권한', result: '성공', detail: '뷰어로 초대', ip: '192.0.2.24'},\r
  {id: 'AUD-1044', time: '2026-10-26 13:40:33', actor: '이도윤', action: '문서 삭제', resource: '보관함 / 이전 운영 지침', category: '데이터', result: '성공', detail: '휴지통으로 이동', ip: '192.0.2.36'},\r
  {id: 'AUD-1043', time: '2026-10-26 13:15:02', actor: '정하은', action: '로그인', resource: '웹 워크스페이스', category: '보안', result: '성공', detail: '2단계 인증 완료', ip: '192.0.2.52'},\r
];\r
\r
const metrics = [\r
  {label: '기록된 활동', value: '6건'},\r
  {label: '활동한 멤버', value: '4명'},\r
  {label: '차단된 요청', value: '1건'},\r
];\r
\r
const muted = {color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'} as const;\r
\r
function AuditTrail() {\r
  const historyId = useId();\r
  return <section aria-label="워크스페이스 감사 기록" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header>\r
      <h2 style={{margin: '0 0 var(--g-space-1)', fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>감사 기록</h2>\r
      <p style={{margin: 0, ...muted}}><time dateTime="2026-10-26">2026. 10. 26.</time> 13:00~15:00 KST</p>\r
    </header>\r
\r
    <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-4) var(--g-space-6)', margin: 0}}>\r
      {metrics.map(item => <div key={item.label} style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <dt style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{item.label}</dt>\r
        <dd style={{margin: 0, fontSize: 'var(--g-text-heading-2)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', fontVariantNumeric: 'tabular-nums'}}>{item.value}</dd>\r
      </div>)}\r
    </dl>\r
\r
    <section aria-labelledby={historyId} style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <h3 id={historyId} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)'}}>활동 내역</h3>\r
      <div style={{minWidth: 0}}>\r
        <DataTable\r
          label="워크스페이스 활동 내역"\r
          rows={events}\r
          rowKey={row => row.id}\r
          searchText={row => [row.id, row.actor, row.action, row.resource, row.ip].join(' ')}\r
          searchLabel="멤버, 활동, 대상 또는 IP 검색"\r
          locale="ko-KR"\r
          columns={[\r
            {id: 'time', header: '발생 시각(KST)', sortValue: row => row.time, cell: row => <div><time dateTime={row.time.replace(' ', 'T') + '+09:00'}>{row.time.slice(11)}</time><div style={muted}>{row.id}</div></div>},\r
            {id: 'actor', header: '수행자', sortValue: row => row.actor, cell: row => <div>{row.actor}<div style={muted}>{row.ip}</div></div>},\r
            {id: 'action', header: '활동 / 대상', cell: row => <div><strong style={{fontWeight: 'var(--g-weight-medium)'}}>{row.action}</strong><div>{row.resource}</div><div style={muted}>{row.detail}</div></div>},\r
            {id: 'result', header: '결과', cell: row => <Badge state={row.result === '성공' ? 'done' : 'error'} label={row.result} />},\r
          ]}\r
          filter={{label: '활동 유형', options: [{id: '권한', label: '권한 관리'}, {id: '데이터', label: '데이터 변경'}, {id: '보안', label: '보안'}], matches: (row, category) => row.category === category}}\r
          allLabel="모든 활동"\r
          resetLabel="필터 초기화"\r
          emptyText="조건에 맞는 기록이 없어요."\r
          resultLabel={count => '전체 6건 중 ' + count + '건 표시'}\r
        />\r
      </div>\r
    </section>\r
    <p style={{margin: 0, ...muted}}>감사 기록은 수정할 수 없고 90일간 보관해요.</p>\r
  </section>;\r
}`,s=e(t(),1),c=n(),l=[{id:`AUD-1048`,time:`2026-10-26 14:32:08`,actor:`김서연`,action:`멤버 권한 변경`,resource:`운영팀 / 박지훈`,category:`권한`,result:`성공`,detail:`뷰어 → 편집자`,ip:`192.0.2.24`},{id:`AUD-1047`,time:`2026-10-26 14:28:41`,actor:`이도윤`,action:`보고서 다운로드`,resource:`10월 이용 현황`,category:`데이터`,result:`성공`,detail:`CSV 128개 항목`,ip:`192.0.2.36`},{id:`AUD-1046`,time:`2026-10-26 14:21:05`,actor:`박지훈`,action:`보안 설정 변경`,resource:`워크스페이스 보안`,category:`보안`,result:`차단`,detail:`관리자 권한 필요`,ip:`192.0.2.18`},{id:`AUD-1045`,time:`2026-10-26 13:56:12`,actor:`김서연`,action:`멤버 초대`,resource:`정하은 / 디자인팀`,category:`권한`,result:`성공`,detail:`뷰어로 초대`,ip:`192.0.2.24`},{id:`AUD-1044`,time:`2026-10-26 13:40:33`,actor:`이도윤`,action:`문서 삭제`,resource:`보관함 / 이전 운영 지침`,category:`데이터`,result:`성공`,detail:`휴지통으로 이동`,ip:`192.0.2.36`},{id:`AUD-1043`,time:`2026-10-26 13:15:02`,actor:`정하은`,action:`로그인`,resource:`웹 워크스페이스`,category:`보안`,result:`성공`,detail:`2단계 인증 완료`,ip:`192.0.2.52`}],u=[{label:`기록된 활동`,value:`6건`},{label:`활동한 멤버`,value:`4명`},{label:`차단된 요청`,value:`1건`}],d={color:`var(--g-muted)`,fontSize:`var(--g-text-small)`};function f(){let e=(0,s.useId)();return(0,c.jsxs)(`section`,{"aria-label":`워크스페이스 감사 기록`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`},children:[(0,c.jsxs)(`header`,{children:[(0,c.jsx)(`h2`,{style:{margin:`0 0 var(--g-space-1)`,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`감사 기록`}),(0,c.jsxs)(`p`,{style:{margin:0,...d},children:[(0,c.jsx)(`time`,{dateTime:`2026-10-26`,children:`2026. 10. 26.`}),` 13:00~15:00 KST`]})]}),(0,c.jsx)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-4) var(--g-space-6)`,margin:0},children:u.map(e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,c.jsx)(`dt`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.label}),(0,c.jsx)(`dd`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,fontVariantNumeric:`tabular-nums`},children:e.value})]},e.label))}),(0,c.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,c.jsx)(`h3`,{id:e,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`},children:`활동 내역`}),(0,c.jsx)(`div`,{style:{minWidth:0},children:(0,c.jsx)(i,{label:`워크스페이스 활동 내역`,rows:l,rowKey:e=>e.id,searchText:e=>[e.id,e.actor,e.action,e.resource,e.ip].join(` `),searchLabel:`멤버, 활동, 대상 또는 IP 검색`,locale:`ko-KR`,columns:[{id:`time`,header:`발생 시각(KST)`,sortValue:e=>e.time,cell:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`time`,{dateTime:e.time.replace(` `,`T`)+`+09:00`,children:e.time.slice(11)}),(0,c.jsx)(`div`,{style:d,children:e.id})]})},{id:`actor`,header:`수행자`,sortValue:e=>e.actor,cell:e=>(0,c.jsxs)(`div`,{children:[e.actor,(0,c.jsx)(`div`,{style:d,children:e.ip})]})},{id:`action`,header:`활동 / 대상`,cell:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-medium)`},children:e.action}),(0,c.jsx)(`div`,{children:e.resource}),(0,c.jsx)(`div`,{style:d,children:e.detail})]})},{id:`result`,header:`결과`,cell:e=>(0,c.jsx)(r,{state:e.result===`성공`?`done`:`error`,label:e.result})}],filter:{label:`활동 유형`,options:[{id:`권한`,label:`권한 관리`},{id:`데이터`,label:`데이터 변경`},{id:`보안`,label:`보안`}],matches:(e,t)=>e.category===t},allLabel:`모든 활동`,resetLabel:`필터 초기화`,emptyText:`조건에 맞는 기록이 없어요.`,resultLabel:e=>`전체 6건 중 `+e+`건 표시`})})]}),(0,c.jsx)(`p`,{style:{margin:0,...d},children:`감사 기록은 수정할 수 없고 90일간 보관해요.`})]})}var p={id:`audit-trail`,title:`감사 기록`,koreanTitle:`감사 기록`,group:`blocks`,interactions:[`type`,`press`],description:`멤버의 권한 변경, 데이터 작업, 보안 이벤트를 검색하고 유형별로 확인하는 워크스페이스 감사 화면입니다. 예시의 이름과 IP 주소는 가상입니다.`,demo:f,usage:a(o),whenToUse:[`멤버의 권한 변경과 데이터 작업, 보안 이벤트를 시각순으로 검색해 추적해야 할 때 씁니다.`,`사고 조사에서 수행자와 유형으로 좁히고 요청이 성공했는지 차단됐는지 대조하는 관리자 화면에 맞습니다.`],whenNot:[`한 건의 처리 이력을 세로로 따라 읽게 하려면 Timeline을 씁니다.`,`변경 전후 값만 요약하면 ChangeSummary를 씁니다.`],aiNotes:[`이 블록은 DataTable과 Badge를 조합한 예시이고, 검색과 유형 필터, 시각과 수행자 정렬은 DataTable에서 구성합니다.`,`예시의 이름과 IP 주소는 가상입니다. 실제 기록을 넣을 때 개인정보를 어디까지 보일지는 호출자가 정해야 합니다.`],props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`각 요청의 성공 또는 차단 결과를 표시합니다.`},{name:`DataTable`,type:`'@gyeol/ui'`,description:`감사 이벤트를 검색하고 유형으로 거르며 시각과 수행자 기준으로 정렬합니다.`}]};export{p as doc};