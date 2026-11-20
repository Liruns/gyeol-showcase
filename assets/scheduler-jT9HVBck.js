import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Et as r}from"./boot-D6j0Rd6o.js";import{t as i}from"./FormField-C_PFh4RR.js";import{t as a}from"./SegmentedControl-BM__PifE.js";import{t as o}from"./Dialog-KPZZ5HQP.js";import{i as s}from"./SectionNavigation-CFpPvL-g.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useRef, useState, type CSSProperties} from 'react';\r
import {Button, Dialog, FormField, Input, SegmentedControl} from '@gyeol/ui';\r
\r
const stack: CSSProperties = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0};\r
const caption: CSSProperties = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'};\r
const days = ['26', '27', '28', '29', '30'];\r
const weekdays = ['월', '화', '수', '목', '금'];\r
const filters = [{value: 'all', label: '전체'}, {value: 'team', label: '팀 일정'}, {value: 'focus', label: '집중 시간'}];\r
const initialEvents = [\r
  {id: 1, day: '26', time: '09:30', duration: '30분', title: '주간 우선순위 정리', place: '회의실 A', people: '이서연, 박지훈, 최수빈, 김나래', category: 'team'},\r
  {id: 2, day: '26', time: '11:00', duration: '60분', title: '예약 흐름 디자인 리뷰', place: '온라인', people: '이서연, 김나래', category: 'team'},\r
  {id: 3, day: '26', time: '14:00', duration: '90분', title: '화면 설계 정리', place: '개인 일정', people: '', category: 'focus'},\r
  {id: 4, day: '27', time: '10:00', duration: '60분', title: '사용자 인터뷰 준비', place: '회의실 B', people: '최수빈, 김나래', category: 'team'},\r
  {id: 5, day: '28', time: '14:00', duration: '90분', title: '결제 화면 프로토타입', place: '개인 일정', people: '', category: 'focus'},\r
  {id: 6, day: '29', time: '11:00', duration: '30분', title: '개발 진행 상황 공유', place: '온라인', people: '박지훈, 최수빈, 김나래', category: 'team'},\r
  {id: 7, day: '29', time: '16:00', duration: '60분', title: '주간 회고', place: '회의실 A', people: '이서연, 박지훈, 최수빈, 김나래', category: 'team'},\r
];\r
\r
export function SchedulerBlock() {\r
  const [day, setDay] = useState('26');\r
  const [filter, setFilter] = useState('all');\r
  const [events, setEvents] = useState(initialEvents);\r
  const [title, setTitle] = useState('');\r
  const [time, setTime] = useState('10:00');\r
  const [open, setOpen] = useState(false);\r
  const [notice, setNotice] = useState('');\r
  const addButton = useRef<HTMLButtonElement>(null);\r
  const visible = events.filter(event => event.day === day && (filter === 'all' || event.category === filter)).sort((a, b) => a.time.localeCompare(b.time));\r
  const filterLabel = filters.find(option => option.value === filter)?.label ?? '';\r
  return <section aria-labelledby="scheduler-title" style={{...stack, color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <h2 id="scheduler-title" style={{margin: 0, marginInlineEnd: 'auto', fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>팀 일정</h2>\r
      <p role="status" style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>{notice}</p>\r
      <Dialog title={'10월 ' + day + '일 일정 추가'} closeLabel="닫기" isOpen={open} onOpenChange={setOpen} trigger={<Button ref={addButton}>일정 추가</Button>}>\r
        {close => <div style={stack}>\r
          <Input label="일정 제목" value={title} onChange={setTitle} placeholder="예: 결제 화면 리뷰" isRequired />\r
          <FormField label="시작 시간" type="time" value={time} onChange={setTime} isRequired />\r
          <Button isDisabled={!title.trim() || !time} onPress={() => {\r
            const name = title.trim();\r
            setEvents(current => [...current, {id: Math.max(...current.map(event => event.id)) + 1, day, time, duration: '30분', title: name, place: '장소 미정', people: '', category: 'team'}]);\r
            setFilter('all');\r
            setNotice('10월 ' + day + "일에 '" + name + "' 일정을 추가했어요.");\r
            setTitle('');\r
            close();\r
          }}>추가</Button>\r
        </div>}\r
      </Dialog>\r
    </header>\r
    <div style={{display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
      <p id="scheduler-month" style={caption}>2026년 10월</p>\r
      <div role="group" aria-labelledby="scheduler-month" style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
        {days.map((date, index) => {\r
          const count = events.filter(event => event.day === date).length;\r
          const selected = day === date;\r
          return <Button key={date} variant="secondary" aria-pressed={selected} aria-label={weekdays[index] + ' ' + date + '일, 일정 ' + count + '개'} onPress={() => setDay(date)}\r
            style={selected ? {background: 'var(--g-soft)', borderColor: 'var(--g-border-control)', fontWeight: 'var(--g-weight-selected)'} : {}}>\r
            <span style={{fontVariantNumeric: 'tabular-nums'}}>{weekdays[index]} {date}</span>\r
            <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', fontWeight: 'var(--g-weight-regular)', fontVariantNumeric: 'tabular-nums'}}>{count}</span>\r
          </Button>;\r
        })}\r
      </div>\r
    </div>\r
    <section aria-labelledby="scheduler-day" style={{...stack, gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: 'var(--g-space-3)'}}>\r
        <h3 id="scheduler-day" style={{margin: 0, marginInlineEnd: 'auto', fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)'}}>10월 {day}일 {weekdays[days.indexOf(day)]}요일</h3>\r
        <p role="status" style={caption}>{filter === 'all' ? '' : filterLabel + ' ' + visible.length + '개'}</p>\r
        <SegmentedControl label="일정 종류" value={filter} onChange={setFilter} options={filters} />\r
      </div>\r
      {visible.length === 0 ? <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
        <p style={{margin: 0}}>{filter === 'all' ? '이날은 일정이 없어요.' : '이날은 ' + filterLabel + '이 없어요.'}</p>\r
        <Button variant="secondary" onPress={() => {addButton.current?.focus(); setOpen(true);}}>일정 추가</Button>\r
      </div> : <ol style={{listStyle: 'none', margin: 0, padding: 0, display: 'grid', minWidth: 0}}>\r
        {visible.map(event => <li key={event.id} style={{display: 'grid', gridTemplateColumns: 'calc(var(--g-space) * 20) minmax(0, 1fr)', alignItems: 'baseline', columnGap: 'var(--g-space-4)', paddingBlock: 'var(--g-space-3)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
          <p style={{margin: 0, fontVariantNumeric: 'tabular-nums'}}><strong>{event.time}</strong> <span style={caption}>{event.duration}</span></p>\r
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', columnGap: 'var(--g-space-4)', rowGap: 'var(--g-space-1)', minWidth: 0, overflowWrap: 'anywhere'}}>\r
            <div style={{flex: '1 1 calc(var(--g-space) * 40)', minWidth: 0, display: 'grid', gap: 'var(--g-space-1)'}}>\r
              <h4 style={{margin: 0, fontSize: 'var(--g-text-body)', fontWeight: 'var(--g-weight-medium)'}}>{event.title}</h4>\r
              <p style={caption}>{event.place}</p>\r
            </div>\r
            <p style={caption}>{event.category === 'team' ? event.people : filter === 'all' ? '집중 시간' : ''}</p>\r
          </div>\r
        </li>)}\r
      </ol>}\r
    </section>\r
  </section>;\r
}`,u=e(t(),1),d=n(),f={display:`grid`,gap:`var(--g-space-4)`,minWidth:0},p={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},m=[`26`,`27`,`28`,`29`,`30`],h=[`월`,`화`,`수`,`목`,`금`],g=[{value:`all`,label:`전체`},{value:`team`,label:`팀 일정`},{value:`focus`,label:`집중 시간`}],_=[{id:1,day:`26`,time:`09:30`,duration:`30분`,title:`주간 우선순위 정리`,place:`회의실 A`,people:`이서연, 박지훈, 최수빈, 김나래`,category:`team`},{id:2,day:`26`,time:`11:00`,duration:`60분`,title:`예약 흐름 디자인 리뷰`,place:`온라인`,people:`이서연, 김나래`,category:`team`},{id:3,day:`26`,time:`14:00`,duration:`90분`,title:`화면 설계 정리`,place:`개인 일정`,people:``,category:`focus`},{id:4,day:`27`,time:`10:00`,duration:`60분`,title:`사용자 인터뷰 준비`,place:`회의실 B`,people:`최수빈, 김나래`,category:`team`},{id:5,day:`28`,time:`14:00`,duration:`90분`,title:`결제 화면 프로토타입`,place:`개인 일정`,people:``,category:`focus`},{id:6,day:`29`,time:`11:00`,duration:`30분`,title:`개발 진행 상황 공유`,place:`온라인`,people:`박지훈, 최수빈, 김나래`,category:`team`},{id:7,day:`29`,time:`16:00`,duration:`60분`,title:`주간 회고`,place:`회의실 A`,people:`이서연, 박지훈, 최수빈, 김나래`,category:`team`}];function v(){let[e,t]=(0,u.useState)(`26`),[n,c]=(0,u.useState)(`all`),[l,v]=(0,u.useState)(_),[y,b]=(0,u.useState)(``),[x,S]=(0,u.useState)(`10:00`),[C,w]=(0,u.useState)(!1),[T,E]=(0,u.useState)(``),D=(0,u.useRef)(null),O=l.filter(t=>t.day===e&&(n===`all`||t.category===n)).sort((e,t)=>e.time.localeCompare(t.time)),k=g.find(e=>e.value===n)?.label??``;return(0,d.jsxs)(`section`,{"aria-labelledby":`scheduler-title`,style:{...f,color:`var(--g-ink)`},children:[(0,d.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,d.jsx)(`h2`,{id:`scheduler-title`,style:{margin:0,marginInlineEnd:`auto`,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`팀 일정`}),(0,d.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:T}),(0,d.jsx)(o,{title:`10월 `+e+`일 일정 추가`,closeLabel:`닫기`,isOpen:C,onOpenChange:w,trigger:(0,d.jsx)(r,{ref:D,children:`일정 추가`}),children:t=>(0,d.jsxs)(`div`,{style:f,children:[(0,d.jsx)(s,{label:`일정 제목`,value:y,onChange:b,placeholder:`예: 결제 화면 리뷰`,isRequired:!0}),(0,d.jsx)(i,{label:`시작 시간`,type:`time`,value:x,onChange:S,isRequired:!0}),(0,d.jsx)(r,{isDisabled:!y.trim()||!x,onPress:()=>{let n=y.trim();v(t=>[...t,{id:Math.max(...t.map(e=>e.id))+1,day:e,time:x,duration:`30분`,title:n,place:`장소 미정`,people:``,category:`team`}]),c(`all`),E(`10월 `+e+`일에 '`+n+`' 일정을 추가했어요.`),b(``),t()},children:`추가`})]})})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`,minWidth:0},children:[(0,d.jsx)(`p`,{id:`scheduler-month`,style:p,children:`2026년 10월`}),(0,d.jsx)(`div`,{role:`group`,"aria-labelledby":`scheduler-month`,style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:m.map((n,i)=>{let a=l.filter(e=>e.day===n).length,o=e===n;return(0,d.jsxs)(r,{variant:`secondary`,"aria-pressed":o,"aria-label":h[i]+` `+n+`일, 일정 `+a+`개`,onPress:()=>t(n),style:o?{background:`var(--g-soft)`,borderColor:`var(--g-border-control)`,fontWeight:`var(--g-weight-selected)`}:{},children:[(0,d.jsxs)(`span`,{style:{fontVariantNumeric:`tabular-nums`},children:[h[i],` `,n]}),(0,d.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,fontWeight:`var(--g-weight-regular)`,fontVariantNumeric:`tabular-nums`},children:a})]},n)})})]}),(0,d.jsxs)(`section`,{"aria-labelledby":`scheduler-day`,style:{...f,gap:`var(--g-space-3)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,gap:`var(--g-space-3)`},children:[(0,d.jsxs)(`h3`,{id:`scheduler-day`,style:{margin:0,marginInlineEnd:`auto`,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`},children:[`10월 `,e,`일 `,h[m.indexOf(e)],`요일`]}),(0,d.jsx)(`p`,{role:`status`,style:p,children:n===`all`?``:k+` `+O.length+`개`}),(0,d.jsx)(a,{label:`일정 종류`,value:n,onChange:c,options:g})]}),O.length===0?(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,d.jsx)(`p`,{style:{margin:0},children:n===`all`?`이날은 일정이 없어요.`:`이날은 `+k+`이 없어요.`}),(0,d.jsx)(r,{variant:`secondary`,onPress:()=>{D.current?.focus(),w(!0)},children:`일정 추가`})]}):(0,d.jsx)(`ol`,{style:{listStyle:`none`,margin:0,padding:0,display:`grid`,minWidth:0},children:O.map(e=>(0,d.jsxs)(`li`,{style:{display:`grid`,gridTemplateColumns:`calc(var(--g-space) * 20) minmax(0, 1fr)`,alignItems:`baseline`,columnGap:`var(--g-space-4)`,paddingBlock:`var(--g-space-3)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,d.jsxs)(`p`,{style:{margin:0,fontVariantNumeric:`tabular-nums`},children:[(0,d.jsx)(`strong`,{children:e.time}),` `,(0,d.jsx)(`span`,{style:p,children:e.duration})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,justifyContent:`space-between`,columnGap:`var(--g-space-4)`,rowGap:`var(--g-space-1)`,minWidth:0,overflowWrap:`anywhere`},children:[(0,d.jsxs)(`div`,{style:{flex:`1 1 calc(var(--g-space) * 40)`,minWidth:0,display:`grid`,gap:`var(--g-space-1)`},children:[(0,d.jsx)(`h4`,{style:{margin:0,fontSize:`var(--g-text-body)`,fontWeight:`var(--g-weight-medium)`},children:e.title}),(0,d.jsx)(`p`,{style:p,children:e.place})]}),(0,d.jsx)(`p`,{style:p,children:e.category===`team`?e.people:n===`all`?`집중 시간`:``})]})]},e.id))})]})]})}var y={id:`scheduler`,title:`팀 일정 관리`,koreanTitle:`팀 일정 관리`,group:`blocks`,interactions:[`press`,`type`,`select`],description:`주간 날짜를 고르면 그날 일정을 시간순으로 보여 주고, 새 일정은 대화상자에서 추가하는 블록입니다.`,demo:v,behavior:[`날짜 버튼은 aria-pressed로 선택 상태를 알리고, 접근 가능한 이름에 요일, 날짜와 그날 일정 수를 담습니다.`,`일정은 시작 시간순으로 정렬합니다.`,`일정 종류를 거르면 남은 일정 수를 상태 메시지로 알리고, 전체 보기에서는 수를 따로 표시하지 않습니다.`,`빈 날의 일정 추가 버튼은 머리글의 일정 추가와 같은 대화상자를 열고, 대화상자를 닫으면 포커스가 머리글의 일정 추가 버튼으로 돌아갑니다.`,`제목과 시작 시간을 모두 입력해야 추가 버튼이 켜집니다.`,`일정을 추가하면 필터를 전체로 되돌리고 추가한 날짜와 제목을 상태 메시지로 알립니다.`,`시간은 한국 표준시(KST) 기준입니다.`],whenToUse:[`주간 날짜 줄에서 날짜를 고르면 그날 일정을 시간순으로 훑고 새 일정을 추가할 때 씁니다.`,`팀 일정과 집중 시간처럼 종류별로 일정을 걸러 보는 화면에 씁니다.`],whenNot:[`한 달 전체에서 날짜나 기간을 고르는 일은 Calendar를 씁니다.`,`날짜별 활동량을 색으로 보여 줄 때는 CalendarHeatmap을 씁니다.`,`날짜와 시간을 필드 하나에 받을 때는 DateTimePicker를 씁니다.`],aiNotes:[`이 블록은 Button, Dialog, FormField, Input, SegmentedControl을 조합한 예시이므로 usage 코드를 가져다 일정 데이터와 저장 호출을 바꿔 씁니다.`,`날짜 버튼은 aria-pressed로 선택을 알리고 접근 가능한 이름에 요일, 날짜, 그날 일정 수를 담습니다. 이 규칙을 유지합니다.`,`제목과 시작 시간이 모두 있어야 추가 버튼이 켜지고, 시간은 한국 표준시 기준으로 계산합니다.`],usage:c(l),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`날짜를 고르고, 일정 추가 대화상자를 열고, 새 일정을 추가합니다.`},{name:`Dialog`,type:`'@gyeol/ui'`,description:`일정 추가 양식의 포커스와 열림 상태를 관리합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`시작 시간을 입력합니다.`},{name:`Input`,type:`'@gyeol/ui'`,description:`일정 제목을 입력합니다.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`전체, 팀 일정, 집중 시간 중 하나로 일정을 거릅니다.`}]};export{v as SchedulerBlock,y as doc};