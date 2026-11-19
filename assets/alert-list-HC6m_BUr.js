import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-DjMJDlCG.js";import{t as i}from"./Alert-DqJsPeK2.js";import{t as a}from"./Badge-CvQ-tQ6E.js";import{t as o}from"./SegmentedControl-BJSxMiJF.js";import{t as s}from"./EmptyState-9DzIi6i2.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useState} from 'react';\r
import {Alert, Badge, Button, EmptyState, SegmentedControl} from '@gyeol/ui';\r
\r
const alerts = [\r
  {id: 'review', tone: 'warning', category: '검토 요청', title: '공유 문서의 검토 기한이 오늘까지예요', description: '김서연 님이 보낸 11월 운영 계획을 확인해 주세요. 의견은 오늘 오후 6시까지 모아요.', time: '10분 전', dateTime: '2026-10-26T10:20:00+09:00', unread: true},\r
  {id: 'comment', tone: 'info', category: '새 댓글', title: '이도윤 님이 회원 안내 문서에 의견을 남겼어요', description: '“처음 방문하는 분들을 위한 안내를 첫 화면에 추가하면 어떨까요?”', time: '32분 전', dateTime: '2026-10-26T09:58:00+09:00', unread: true},\r
  {id: 'export', tone: 'success', category: '작업 완료', title: '10월 활동 보고서가 준비됐어요', description: '10월 1일부터 25일까지의 활동을 정리했어요. 팀과 공유하기 전에 내용을 확인해 주세요.', time: '1시간 전', dateTime: '2026-10-26T09:30:00+09:00', unread: true},\r
  {id: 'invite', tone: 'neutral', category: '팀 소식', title: '박지우 님이 운영팀에 합류했어요', description: '정산 운영을 맡아요.', time: '어제', dateTime: '2026-10-25T15:00:00+09:00', unread: false},\r
] as const;\r
\r
function AlertList() {\r
  const [filter, setFilter] = useState('all');\r
  const [readIds, setReadIds] = useState<string[]>([]);\r
  const isUnread = (item: typeof alerts[number]) => item.unread && !readIds.includes(item.id);\r
  const unreadCount = alerts.filter(isUnread).length;\r
  const visible = alerts.filter(item => filter === 'all' || isUnread(item));\r
\r
  return <section aria-label="알림" style={{width: '100%', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>알림</h2>\r
        <Badge state={unreadCount ? 'idle' : 'done'} label={\`읽지 않음 \${unreadCount}\`} />\r
      </div>\r
      <Button variant="secondary" isDisabled={unreadCount === 0} onPress={() => setReadIds(alerts.map(item => item.id))}>모두 읽음으로 표시</Button>\r
    </header>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <SegmentedControl label="알림 보기" value={filter} onChange={setFilter} options={[{value: 'all', label: '전체'}, {value: 'unread', label: '읽지 않음'}]} />\r
      <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>알림 {visible.length}개</span>\r
    </div>\r
\r
    {visible.length > 0\r
      ? <ul style={{margin: 0, padding: 0, listStyle: 'none', minWidth: 0}}>\r
        {visible.map((item, index) => <li key={item.id} style={{paddingBlock: 'var(--g-space-3)', borderBlockStart: index === 0 ? 'none' : 'var(--g-border-width) solid var(--g-border)'}}>\r
          <Alert tone={item.tone} role="group" aria-label={item.title} style={{minWidth: 0}}>\r
            <Alert.Icon />\r
            <div style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'start', columnGap: 'var(--g-space-3)'}}>\r
              <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
                <Alert.Title>{item.title}</Alert.Title>\r
                <Alert.Description>{item.description}</Alert.Description>\r
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-2)', color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>\r
                  <span>{item.category}</span>\r
                  <time dateTime={item.dateTime}>{item.time}</time>\r
                  {isUnread(item) && <strong style={{color: 'var(--g-ink)', fontWeight: 'var(--g-weight-medium)'}}>새 알림</strong>}\r
                </div>\r
              </div>\r
              <Button className="catalog-subordinate-action" variant="quiet" isDisabled={!isUnread(item)} aria-label={\`\${item.title} 읽음으로 표시\`} style={{marginBlock: 'calc((1lh - var(--g-target-min)) / 2)'}}\r
                onPress={() => setReadIds(ids => [...ids, item.id])}>{isUnread(item) ? '읽음으로 표시' : '읽음'}</Button>\r
            </div>\r
          </Alert>\r
        </li>)}\r
      </ul>\r
      : <EmptyState variant="inbox" title="읽지 않은 알림이 없어요." actionLabel="전체 알림 보기" actionVariant="secondary" onAction={() => setFilter('all')} />}\r
  </section>;\r
}`,u=e(t(),1),d=n(),f=[{id:`review`,tone:`warning`,category:`검토 요청`,title:`공유 문서의 검토 기한이 오늘까지예요`,description:`김서연 님이 보낸 11월 운영 계획을 확인해 주세요. 의견은 오늘 오후 6시까지 모아요.`,time:`10분 전`,dateTime:`2026-10-26T10:20:00+09:00`,unread:!0},{id:`comment`,tone:`info`,category:`새 댓글`,title:`이도윤 님이 회원 안내 문서에 의견을 남겼어요`,description:`“처음 방문하는 분들을 위한 안내를 첫 화면에 추가하면 어떨까요?”`,time:`32분 전`,dateTime:`2026-10-26T09:58:00+09:00`,unread:!0},{id:`export`,tone:`success`,category:`작업 완료`,title:`10월 활동 보고서가 준비됐어요`,description:`10월 1일부터 25일까지의 활동을 정리했어요. 팀과 공유하기 전에 내용을 확인해 주세요.`,time:`1시간 전`,dateTime:`2026-10-26T09:30:00+09:00`,unread:!0},{id:`invite`,tone:`neutral`,category:`팀 소식`,title:`박지우 님이 운영팀에 합류했어요`,description:`정산 운영을 맡아요.`,time:`어제`,dateTime:`2026-10-25T15:00:00+09:00`,unread:!1}];function p(){let[e,t]=(0,u.useState)(`all`),[n,c]=(0,u.useState)([]),l=e=>e.unread&&!n.includes(e.id),p=f.filter(l).length,m=f.filter(t=>e===`all`||l(t));return(0,d.jsxs)(`section`,{"aria-label":`알림`,style:{width:`100%`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,color:`var(--g-ink)`},children:[(0,d.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`알림`}),(0,d.jsx)(a,{state:p?`idle`:`done`,label:`읽지 않음 ${p}`})]}),(0,d.jsx)(r,{variant:`secondary`,isDisabled:p===0,onPress:()=>c(f.map(e=>e.id)),children:`모두 읽음으로 표시`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,justifyContent:`space-between`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsx)(o,{label:`알림 보기`,value:e,onChange:t,options:[{value:`all`,label:`전체`},{value:`unread`,label:`읽지 않음`}]}),(0,d.jsxs)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[`알림 `,m.length,`개`]})]}),m.length>0?(0,d.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`,minWidth:0},children:m.map((e,t)=>(0,d.jsx)(`li`,{style:{paddingBlock:`var(--g-space-3)`,borderBlockStart:t===0?`none`:`var(--g-border-width) solid var(--g-border)`},children:(0,d.jsxs)(i,{tone:e.tone,role:`group`,"aria-label":e.title,style:{minWidth:0},children:[(0,d.jsx)(i.Icon,{}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) auto`,alignItems:`start`,columnGap:`var(--g-space-3)`},children:[(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,d.jsx)(i.Title,{children:e.title}),(0,d.jsx)(i.Description,{children:e.description}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,columnGap:`var(--g-space-2)`,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[(0,d.jsx)(`span`,{children:e.category}),(0,d.jsx)(`time`,{dateTime:e.dateTime,children:e.time}),l(e)&&(0,d.jsx)(`strong`,{style:{color:`var(--g-ink)`,fontWeight:`var(--g-weight-medium)`},children:`새 알림`})]})]}),(0,d.jsx)(r,{className:`catalog-subordinate-action`,variant:`quiet`,isDisabled:!l(e),"aria-label":`${e.title} 읽음으로 표시`,style:{marginBlock:`calc((1lh - var(--g-target-min)) / 2)`},onPress:()=>c(t=>[...t,e.id]),children:l(e)?`읽음으로 표시`:`읽음`})]})]})},e.id))}):(0,d.jsx)(s,{variant:`inbox`,title:`읽지 않은 알림이 없어요.`,actionLabel:`전체 알림 보기`,actionVariant:`secondary`,onAction:()=>t(`all`)})]})}var m={id:`alert-list`,title:`알림 목록`,koreanTitle:`알림 목록`,group:`blocks`,interactions:[`press`,`select`],description:`검토 요청, 댓글, 작업 완료 소식을 모아 읽고 전체 또는 읽지 않은 알림을 확인하는 팀 알림 화면입니다.`,demo:p,behavior:[`알림 하나는 한 행입니다. 상태 아이콘, 제목, 내용, 분류와 시각 순서로 놓이고 행 사이는 구분선 하나로 나눕니다.`,`읽음으로 표시를 누르면 그 알림의 새 알림 표시가 사라지고, 버튼은 읽음으로 바뀌어 비활성화됩니다.`,`읽지 않음 보기에서 마지막 알림을 읽으면 빈 상태가 나오고, 전체 알림 보기로 전체 목록에 돌아갑니다.`,`필터 옆 알림 개수는 role="status"라서 개수가 바뀔 때 보조 기술이 읽습니다.`,`읽음 상태는 화면 상태로만 유지하고, 새로 고치면 처음 상태로 돌아갑니다.`],whenToUse:[`검토 요청, 댓글, 작업 완료 소식을 모아 두고 읽지 않은 것만 골라 볼 때 씁니다.`,`알림을 하나씩 읽음으로 표시하거나 한꺼번에 읽음 처리해야 하는 팀 알림함 화면에 맞습니다.`],whenNot:[`저장했어요처럼 방금 한 동작의 결과는 목록에 쌓지 말고 Toast로 잠깐 알립니다.`,`폼 제출이 실패해 고칠 항목을 모아 보여 줄 때는 ErrorSummary를 씁니다.`,`알림 하나를 화면 위쪽에 띄우는 서비스 공지는 Announcement를 씁니다.`],aiNotes:[`행은 Alert와 Alert.Icon, Alert.Title, Alert.Description으로 만들고 전체와 읽지 않음 전환은 SegmentedControl이 맡습니다.`,`읽음 상태는 화면 상태로만 유지되므로 서버에 저장하려면 읽음 처리 호출을 직접 연결합니다.`,`알림 개수는 상태 영역에 렌더링해야 개수가 바뀔 때 보조 기술이 읽습니다.`],usage:c(l),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`읽지 않은 알림 개수와 모두 확인한 상태.`},{name:`Button`,type:`'@gyeol/ui'`,description:`알림 하나 또는 전체를 읽음으로 표시.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`전체 알림과 읽지 않은 알림 필터.`},{name:`Alert`,type:`'@gyeol/ui'`,description:`알림 한 행. 틀 없이 목록 행 안에 놓입니다.`},{name:`Alert.Icon`,type:`'@gyeol/ui'`,description:`알림 종류를 나타내는 16px 상태 아이콘.`},{name:`Alert.Title`,type:`'@gyeol/ui'`,description:`각 알림의 제목.`},{name:`Alert.Description`,type:`'@gyeol/ui'`,description:`알림 내용.`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`읽지 않은 알림이 없을 때의 문장과 전체 알림 보기.`}]};export{m as doc};