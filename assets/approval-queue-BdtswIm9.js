import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-BEXAs4nG.js";import{t as i}from"./ApprovalCard-Cg_Z1y8A.js";import{t as a}from"./SegmentedControl-DkGCA-Sk.js";import{t as o}from"./EmptyState-DW0WbMDq.js";import{t as s}from"./workbench-B0sSwYY3.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useState} from 'react';\r
import {ApprovalCard, Button, EmptyState, SegmentedControl} from '@gyeol/ui';\r
import {Workbench} from '../catalog/doc-kit/workbench.js';\r
\r
const requests = [\r
  {id: 'expense', title: '가을 캠페인 촬영 비용', summary: '신규 캠페인에 쓸 제품 사진 촬영과 보정 비용이에요. 브랜드팀 김서연이 오늘 09:10에 요청했어요.', parameters: [{name: '요청 금액', value: '1,250,000원'}, {name: '사용 예산', value: '4분기 브랜드 마케팅'}, {name: '검토 기한', value: '오늘 18:00'}]},\r
  {id: 'access', title: '프로젝트 자료실 접근 권한', summary: '새로 합류한 팀원이 온보딩 동안 볼 제품 자료 열람 권한이에요. 제품팀 이도윤이 오늘 08:45에 요청했어요.', parameters: [{name: '권한 범위', value: '제품 자료실, 읽기 전용'}, {name: '사용 기간', value: '11월 2일 ~ 12월 1일'}, {name: '검토 기한', value: '내일 18:00'}]},\r
  {id: 'purchase', title: '사용자 인터뷰 참여 사례비', summary: '서비스 개선 인터뷰 참여자 8명에게 줄 사례비예요. 리서치팀 박지우가 어제 16:30에 요청했어요.', parameters: [{name: '요청 금액', value: '400,000원 (8명)'}, {name: '사용 예산', value: '4분기 사용자 리서치'}, {name: '검토 기한', value: '11월 4일 18:00'}]},\r
];\r
\r
function ApprovalQueue() {\r
  const [decisions, setDecisions] = useState<Record<string, 'pending' | 'approved' | 'denied'>>({});\r
  const [view, setView] = useState('pending');\r
  const [notice, setNotice] = useState('');\r
  const pending = requests.filter(request => !decisions[request.id]).length;\r
  const visible = requests.filter(request => view === 'pending' ? !decisions[request.id] : !!decisions[request.id]);\r
  const counts = [['승인 대기', pending], ['오늘 마감', decisions.expense ? 0 : 1], ['처리', requests.length - pending]] as const;\r
  const hairline = 'var(--g-border-width) solid var(--g-border)';\r
\r
  return <section aria-label="내 승인 대기함" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0, overflowWrap: 'anywhere'}}>\r
    <header style={{display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', letterSpacing: 'var(--g-tracking-heading)'}}>승인 대기 요청</h2>\r
      <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-1) var(--g-space-6)', margin: 0}}>\r
        {counts.map(([label, value]) => <div key={label} style={{display: 'flex', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>\r
          <dt style={{color: 'var(--g-muted)'}}>{label}</dt>\r
          <dd style={{margin: 0, fontSize: 'var(--g-text-heading-3)', fontWeight: 'var(--g-weight-semibold)', fontVariantNumeric: 'tabular-nums'}}>{value}<span style={{marginInlineStart: 'var(--g-space-1)', color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-regular)'}}>건</span></dd>\r
        </div>)}\r
      </dl>\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <SegmentedControl label="요청 보기" value={view} onChange={setView} options={[{value: 'pending', label: '대기 중'}, {value: 'processed', label: '처리 완료'}]} />\r
      <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>검토 기한순, {visible.length}건</span>\r
    </div>\r
    <div style={{display: 'grid', minWidth: 0, borderBlockEnd: visible.length ? hairline : undefined}}>\r
      {visible.map(request => <div key={request.id} style={{paddingBlock: 'var(--g-space-4)', borderBlockStart: hairline, minWidth: 0}}>\r
        <ApprovalCard title={request.title} summary={request.summary} parameters={request.parameters}\r
          status={decisions[request.id] ?? 'pending'}\r
          onStatusChange={status => {\r
            setDecisions(current => ({...current, [request.id]: status}));\r
            setNotice(request.title + (status === 'approved' ? ' 요청을 승인했어요.' : ' 요청을 반려했어요.'));\r
          }} denyLabel="반려" reasonLabel="반려 사유 (선택)" pendingLabel="검토 대기" approvedLabel="승인함" deniedLabel="반려함" />\r
      </div>)}\r
      {visible.length === 0 && <EmptyState variant="inbox" title={view === 'pending' ? '대기 중인 요청이 없어요' : '처리한 요청이 없어요'} actionLabel={view === 'pending' ? '처리 내역 보기' : '대기 요청 보기'} onAction={() => setView(view === 'pending' ? 'processed' : 'pending')} />}\r
    </div>\r
    <p role="status" style={{margin: 0, color: 'var(--g-muted)'}}>{notice}</p>\r
  </section>;\r
}\r
\r
function Demo() {\r
  const [round, setRound] = useState(0);\r
  return <Workbench controls={<Button variant="secondary" onPress={() => setRound(value => value + 1)}>예제 초기화</Button>}>\r
    <ApprovalQueue key={round} />\r
  </Workbench>;\r
}`,u=e(t(),1),d=n(),f=[{id:`expense`,title:`가을 캠페인 촬영 비용`,summary:`신규 캠페인에 쓸 제품 사진 촬영과 보정 비용이에요. 브랜드팀 김서연이 오늘 09:10에 요청했어요.`,parameters:[{name:`요청 금액`,value:`1,250,000원`},{name:`사용 예산`,value:`4분기 브랜드 마케팅`},{name:`검토 기한`,value:`오늘 18:00`}]},{id:`access`,title:`프로젝트 자료실 접근 권한`,summary:`새로 합류한 팀원이 온보딩 동안 볼 제품 자료 열람 권한이에요. 제품팀 이도윤이 오늘 08:45에 요청했어요.`,parameters:[{name:`권한 범위`,value:`제품 자료실, 읽기 전용`},{name:`사용 기간`,value:`11월 2일 ~ 12월 1일`},{name:`검토 기한`,value:`내일 18:00`}]},{id:`purchase`,title:`사용자 인터뷰 참여 사례비`,summary:`서비스 개선 인터뷰 참여자 8명에게 줄 사례비예요. 리서치팀 박지우가 어제 16:30에 요청했어요.`,parameters:[{name:`요청 금액`,value:`400,000원 (8명)`},{name:`사용 예산`,value:`4분기 사용자 리서치`},{name:`검토 기한`,value:`11월 4일 18:00`}]}];function p(){let[e,t]=(0,u.useState)({}),[n,r]=(0,u.useState)(`pending`),[s,c]=(0,u.useState)(``),l=f.filter(t=>!e[t.id]).length,p=f.filter(t=>n===`pending`?!e[t.id]:!!e[t.id]),m=[[`승인 대기`,l],[`오늘 마감`,+!e.expense],[`처리`,f.length-l]],h=`var(--g-border-width) solid var(--g-border)`;return(0,d.jsxs)(`section`,{"aria-label":`내 승인 대기함`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0,overflowWrap:`anywhere`},children:[(0,d.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-2)`,minWidth:0},children:[(0,d.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,letterSpacing:`var(--g-tracking-heading)`},children:`승인 대기 요청`}),(0,d.jsx)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-1) var(--g-space-6)`,margin:0},children:m.map(([e,t])=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,d.jsxs)(`dd`,{style:{margin:0,fontSize:`var(--g-text-heading-3)`,fontWeight:`var(--g-weight-semibold)`,fontVariantNumeric:`tabular-nums`},children:[t,(0,d.jsx)(`span`,{style:{marginInlineStart:`var(--g-space-1)`,color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-regular)`},children:`건`})]})]},e))})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,justifyContent:`space-between`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsx)(a,{label:`요청 보기`,value:n,onChange:r,options:[{value:`pending`,label:`대기 중`},{value:`processed`,label:`처리 완료`}]}),(0,d.jsxs)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[`검토 기한순, `,p.length,`건`]})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,minWidth:0,borderBlockEnd:p.length?h:void 0},children:[p.map(n=>(0,d.jsx)(`div`,{style:{paddingBlock:`var(--g-space-4)`,borderBlockStart:h,minWidth:0},children:(0,d.jsx)(i,{title:n.title,summary:n.summary,parameters:n.parameters,status:e[n.id]??`pending`,onStatusChange:e=>{t(t=>({...t,[n.id]:e})),c(n.title+(e===`approved`?` 요청을 승인했어요.`:` 요청을 반려했어요.`))},denyLabel:`반려`,reasonLabel:`반려 사유 (선택)`,pendingLabel:`검토 대기`,approvedLabel:`승인함`,deniedLabel:`반려함`})},n.id)),p.length===0&&(0,d.jsx)(o,{variant:`inbox`,title:n===`pending`?`대기 중인 요청이 없어요`:`처리한 요청이 없어요`,actionLabel:n===`pending`?`처리 내역 보기`:`대기 요청 보기`,onAction:()=>r(n===`pending`?`processed`:`pending`)})]}),(0,d.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`},children:s})]})}function m(){let[e,t]=(0,u.useState)(0);return(0,d.jsx)(s,{controls:(0,d.jsx)(r,{variant:`secondary`,onPress:()=>t(e=>e+1),children:`예제 초기화`}),children:(0,d.jsx)(p,{},e)})}var h={id:`approval-queue`,title:`승인 대기함`,koreanTitle:`승인 대기함`,group:`blocks`,interactions:[`press`,`select`],description:`비용과 권한 요청을 검토 기한순으로 보고 요청마다 승인하거나 사유를 적어 반려하는 결재 화면입니다.`,demo:m,behavior:[`요청은 구분선으로 나눈 행으로 놓이고, 각 행은 ApprovalCard 하나입니다.`,`결정한 요청은 대기 중 보기에서 빠져 처리 완료 보기로 옮겨지고, 목록 아래 상태 문구가 결과를 알립니다.`,`승인 대기, 오늘 마감, 처리 건수는 결정할 때마다 다시 셉니다.`,`보기에 요청이 없으면 다른 보기로 옮겨 가는 버튼을 보여 줍니다.`],whenToUse:[`비용 지출과 권한 요청을 검토 기한이 가까운 순으로 훑으며 요청마다 승인할 때 씁니다.`,`반려할 때 사유를 남겨야 하는 결재 업무에서 대기 중인 요청과 처리 완료 내역을 나눠 볼 때 씁니다.`],whenNot:[`요청 하나를 카드 한 장으로 단독 처리하는 화면이면 ApprovalCard를 그대로 씁니다.`,`승인 전에 에이전트가 요청하는 권한 범위를 확인받을 때는 PermissionRequest를 씁니다.`,`단일 알림을 읽고 넘기는 용도라면 Alert와 Toast가 맞습니다.`],aiNotes:[`행은 ApprovalCard 하나씩이고 대기 중과 처리 완료 보기는 SegmentedControl로 전환하며, 빈 보기는 EmptyState로 다른 보기로 가는 버튼을 둡니다.`,`결정한 요청은 대기 중 보기에서 빠지고 처리 완료 보기로 옮겨지므로 서버 상태와 맞추는 일은 호출하는 쪽이 맡습니다.`,`승인 대기, 오늘 마감, 처리 건수는 결정할 때마다 다시 세어 화면에 보여 줍니다.`],usage:c(l),props:[{name:`ApprovalCard`,type:`'@gyeol/ui'`,description:`요청 내용과 검토 기한을 보여 주고 승인이나 사유를 적은 반려를 받습니다.`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`보기가 비었을 때 다른 보기로 안내합니다.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`대기 요청과 처리 완료 내역을 전환합니다.`}]};export{h as doc};