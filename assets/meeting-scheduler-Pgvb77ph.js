import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r,X as i,Z as a}from"./boot-BeI4_wN4.js";import{t as o}from"./FormField-CldEEvTp.js";import{r as s,t as c}from"./Avatar-Cq8zREtD.js";import{t as l}from"./Badge-0pdlwniF.js";import{t as u}from"./SegmentedControl-CGykecJd.js";import{t as d}from"./Calendar-MgLilgLV.js";import{a as f,n as p,o as m,t as h}from"./Card-zVT-IwO2.js";import{t as g}from"./usage-source-BdQLyNT5.js";var _=`import {Fragment, useState} from 'react';\r
import {Avatar, AvatarFallback, Badge, Button, Calendar, Card, CardContent, CardHeader, CardTitle, FormField, RadioGroup, RadioGroupItem, SegmentedControl} from '@gyeol/ui';\r
\r
const times = ['10:00', '10:30', '11:00', '14:00', '14:30', '15:00'];\r
const attendees = [['김지우', '제품 기획, 진행'], ['이서연', '프로덕트 디자인'], ['박도윤', '프론트엔드 개발']] as const;\r
\r
/** Start time plus the meeting length: '14:00' and 30 minutes give '14:30'. */\r
function endTime(start: string, minutes: number) {\r
  const [hours = 0, mins = 0] = start.split(':').map(Number);\r
  const total = hours * 60 + mins + minutes;\r
  return \`\${String(Math.floor(total / 60)).padStart(2, '0')}:\${String(total % 60).padStart(2, '0')}\`;\r
}\r
\r
function Demo() {\r
  const [date, setDate] = useState('');\r
  const [time, setTime] = useState('14:00');\r
  const [duration, setDuration] = useState('30');\r
  const [title, setTitle] = useState('다음 분기 제품 방향 논의');\r
  const [confirmed, setConfirmed] = useState(false);\r
  const summary = [['날짜', date || '달력에서 골라 주세요'], ['시간', \`\${time}~\${endTime(time, Number(duration))}\`], ['장소', '7층 회의실 B']] as const;\r
\r
  return <section aria-label="팀 미팅 예약" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', width: '100%', minWidth: 0}}>\r
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-3)'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>미팅 일정 잡기</h2>\r
      <Badge state="done" label="참석자 3명 일정 확인 완료"/>\r
    </header>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6)', alignItems: 'start', minWidth: 0}}>\r
      <section aria-label="날짜와 시간" style={{flex: '2 1 calc(var(--g-space) * 100)', minWidth: 0, display: 'grid', gap: 'var(--g-space-4)', alignContent: 'start'}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
          <h3 style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>날짜와 시간</h3>\r
          <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>서울 표준시(UTC+09:00) 기준</p>\r
        </div>\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6)', alignItems: 'start'}}>\r
          <div style={{flex: '1 1 calc(var(--g-space) * 64)', minWidth: 0}}>\r
            <Calendar label="미팅 날짜" locale="ko-KR" onChange={value => {setDate(\`\${value.month}월 \${value.day}일\`); setConfirmed(false);}}/>\r
          </div>\r
          <div style={{display: 'grid', gap: 'var(--g-space-4)', flex: '1 1 calc(var(--g-space) * 48)', minWidth: 0}}>\r
            <SegmentedControl label="미팅 길이" value={duration} onChange={value => {setDuration(value); setConfirmed(false);}} options={[{value: '30', label: '30분'}, {value: '60', label: '60분'}]}/>\r
            <RadioGroup label="시작 시간" description="앞뒤 일정과 15분 이상 떨어진 시간만 보여요." orientation="horizontal" value={time} onChange={value => {setTime(value); setConfirmed(false);}}>\r
              {times.map(slot => <RadioGroupItem key={slot} value={slot}><span style={{fontVariantNumeric: 'tabular-nums'}}>{slot}</span></RadioGroupItem>)}\r
            </RadioGroup>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <Card style={{flex: '1 1 calc(var(--g-space) * 64)', minWidth: 0}}>\r
        <CardHeader><CardTitle>예약 내용</CardTitle></CardHeader>\r
        <CardContent style={{display: 'grid', gap: 'var(--g-space-4)'}}>\r
          <FormField label="미팅 주제" value={title} onChange={value => {setTitle(value); setConfirmed(false);}} isRequired/>\r
          <div style={{display: 'grid', gap: 'var(--g-space-2)'}}>\r
            <h3 style={{margin: 0, fontSize: 'var(--g-text-small)', fontWeight: 'var(--g-weight-medium)'}}>참석자</h3>\r
            {attendees.map(([name, role]) => <div key={name} style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
              <Avatar size="sm"><AvatarFallback label={name}>{name.slice(1)}</AvatarFallback></Avatar>\r
              <div style={{minWidth: 0}}><div style={{fontWeight: 'var(--g-weight-medium)'}}>{name}</div><div style={{fontSize: 'var(--g-text-small)', color: 'var(--g-muted)'}}>{role}</div></div>\r
            </div>)}\r
          </div>\r
          <dl style={{margin: 0, padding: 'var(--g-space-3)', background: 'var(--g-soft)', borderRadius: 'var(--g-radius-control)', display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', gap: 'var(--g-space-2) var(--g-space-4)', overflowWrap: 'anywhere'}}>\r
            {summary.map(([term, value]) => <Fragment key={term}>\r
              <dt style={{color: 'var(--g-muted)'}}>{term}</dt>\r
              <dd style={{margin: 0, fontVariantNumeric: 'tabular-nums'}}>{value}</dd>\r
            </Fragment>)}\r
          </dl>\r
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
            <Button isDisabled={!date || !title.trim() || confirmed} onPress={() => setConfirmed(true)}>예약</Button>\r
            <p role="status" style={{margin: 0, fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'}}>{confirmed ? \`예약했어요. \${date} \${time}, \${duration}분\` : ''}</p>\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </div>\r
  </section>;\r
}`,v=e(t(),1),y=n(),b=[`10:00`,`10:30`,`11:00`,`14:00`,`14:30`,`15:00`],x=[[`김지우`,`제품 기획, 진행`],[`이서연`,`프로덕트 디자인`],[`박도윤`,`프론트엔드 개발`]];function S(e,t){let[n=0,r=0]=e.split(`:`).map(Number),i=n*60+r+t;return`${String(Math.floor(i/60)).padStart(2,`0`)}:${String(i%60).padStart(2,`0`)}`}function C(){let[e,t]=(0,v.useState)(``),[n,g]=(0,v.useState)(`14:00`),[_,C]=(0,v.useState)(`30`),[w,T]=(0,v.useState)(`다음 분기 제품 방향 논의`),[E,D]=(0,v.useState)(!1),O=[[`날짜`,e||`달력에서 골라 주세요`],[`시간`,`${n}~${S(n,Number(_))}`],[`장소`,`7층 회의실 B`]];return(0,y.jsxs)(`section`,{"aria-label":`팀 미팅 예약`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,width:`100%`,minWidth:0},children:[(0,y.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-3)`},children:[(0,y.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`미팅 일정 잡기`}),(0,y.jsx)(l,{state:`done`,label:`참석자 3명 일정 확인 완료`})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6)`,alignItems:`start`,minWidth:0},children:[(0,y.jsxs)(`section`,{"aria-label":`날짜와 시간`,style:{flex:`2 1 calc(var(--g-space) * 100)`,minWidth:0,display:`grid`,gap:`var(--g-space-4)`,alignContent:`start`},children:[(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,y.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`날짜와 시간`}),(0,y.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`서울 표준시(UTC+09:00) 기준`})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6)`,alignItems:`start`},children:[(0,y.jsx)(`div`,{style:{flex:`1 1 calc(var(--g-space) * 64)`,minWidth:0},children:(0,y.jsx)(d,{label:`미팅 날짜`,locale:`ko-KR`,onChange:e=>{t(`${e.month}월 ${e.day}일`),D(!1)}})}),(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,flex:`1 1 calc(var(--g-space) * 48)`,minWidth:0},children:[(0,y.jsx)(u,{label:`미팅 길이`,value:_,onChange:e=>{C(e),D(!1)},options:[{value:`30`,label:`30분`},{value:`60`,label:`60분`}]}),(0,y.jsx)(i,{label:`시작 시간`,description:`앞뒤 일정과 15분 이상 떨어진 시간만 보여요.`,orientation:`horizontal`,value:n,onChange:e=>{g(e),D(!1)},children:b.map(e=>(0,y.jsx)(a,{value:e,children:(0,y.jsx)(`span`,{style:{fontVariantNumeric:`tabular-nums`},children:e})},e))})]})]})]}),(0,y.jsxs)(h,{style:{flex:`1 1 calc(var(--g-space) * 64)`,minWidth:0},children:[(0,y.jsx)(f,{children:(0,y.jsx)(m,{children:`예약 내용`})}),(0,y.jsxs)(p,{style:{display:`grid`,gap:`var(--g-space-4)`},children:[(0,y.jsx)(o,{label:`미팅 주제`,value:w,onChange:e=>{T(e),D(!1)},isRequired:!0}),(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`},children:[(0,y.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-small)`,fontWeight:`var(--g-weight-medium)`},children:`참석자`}),x.map(([e,t])=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,y.jsx)(c,{size:`sm`,children:(0,y.jsx)(s,{label:e,children:e.slice(1)})}),(0,y.jsxs)(`div`,{style:{minWidth:0},children:[(0,y.jsx)(`div`,{style:{fontWeight:`var(--g-weight-medium)`},children:e}),(0,y.jsx)(`div`,{style:{fontSize:`var(--g-text-small)`,color:`var(--g-muted)`},children:t})]})]},e))]}),(0,y.jsx)(`dl`,{style:{margin:0,padding:`var(--g-space-3)`,background:`var(--g-soft)`,borderRadius:`var(--g-radius-control)`,display:`grid`,gridTemplateColumns:`auto minmax(0, 1fr)`,gap:`var(--g-space-2) var(--g-space-4)`,overflowWrap:`anywhere`},children:O.map(([e,t])=>(0,y.jsxs)(v.Fragment,{children:[(0,y.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,y.jsx)(`dd`,{style:{margin:0,fontVariantNumeric:`tabular-nums`},children:t})]},e))}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,y.jsx)(r,{isDisabled:!e||!w.trim()||E,onPress:()=>D(!0),children:`예약`}),(0,y.jsx)(`p`,{role:`status`,style:{margin:0,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},children:E?`예약했어요. ${e} ${n}, ${_}분`:``})]})]})]})]})]})}var w={id:`meeting-scheduler`,title:`미팅 일정 예약`,koreanTitle:`미팅 일정 예약`,group:`blocks`,interactions:[`select`,`press`],description:`날짜와 시작 시간, 미팅 길이를 고르고 참석자와 예약 내용을 확인하는 팀 미팅 예약 화면입니다. 예시의 예약 버튼은 화면 상태만 바꾸며 초대나 알림은 보내지 않습니다.`,demo:C,behavior:[`시작 시간은 라디오 그룹이라 Tab으로 한 번 들어가고 화살표 키로 시간을 바꿉니다.`,`날짜, 시작 시간, 길이, 주제 중 하나를 바꾸면 확정이 풀리고 예약 버튼이 다시 켜집니다.`,`예약 결과는 버튼 옆 상태 메시지로 알리며, 확정 전에는 비워 둡니다.`],whenToUse:[`날짜와 시작 시간, 미팅 길이를 고르고 참석자와 예약 내용을 확인한 뒤 예약할 때 씁니다. 팀 미팅 예약 화면이 대표적입니다.`,`시간대를 라디오로 고르고 바뀐 조건에 따라 확정이 풀려야 하는 예약 흐름에 씁니다.`],whenNot:[`날짜 하나만 고르는 입력은 DatePicker가 맞습니다.`,`날짜와 시각을 한 필드로 받으려면 DateTimePicker를 씁니다.`,`여러 사람의 일정을 칸으로 펼쳐 보는 화면은 Planner를 씁니다.`],aiNotes:[`가져다 쓸 컴포넌트가 아니라 Calendar, RadioGroup, SegmentedControl, FormField를 조합한 예시 블록입니다. 예약 버튼은 화면 상태만 바꾸고 초대나 알림을 보내지 않으니 실제 연동은 호출하는 쪽이 붙입니다.`,`날짜, 시작 시간, 길이, 주제 중 하나가 바뀌면 확정이 풀리도록 상태를 묶어 두고 예약 결과는 role 상태 메시지로 알립니다.`,`시작 시간은 RadioGroup이라 Tab 한 번에 들어가고 화살표로 바꿉니다. 시간마다 Tab 정지점을 만들지 않습니다.`],usage:g(_),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`참석자의 아바타를 표시합니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 대신 참석자의 이름을 표시합니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`참석자 일정 확인 상태를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`예약을 확정합니다.`},{name:`Calendar`,type:`'@gyeol/ui'`,description:`한국어 달력에서 미팅 날짜를 고릅니다.`},{name:`Card`,type:`'@gyeol/ui'`,description:`예약 내용 요약을 묶습니다.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`주제, 참석자, 요약과 예약 버튼을 배치합니다.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`카드 제목을 둡니다.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`예약 내용 제목을 표시합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`레이블이 연결된 미팅 주제 입력란입니다.`},{name:`RadioGroup`,type:`'@gyeol/ui'`,description:`예약 가능한 시작 시간 중 하나를 고릅니다.`},{name:`RadioGroupItem`,type:`'@gyeol/ui'`,description:`시작 시간 하나입니다.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`30분 또는 60분 미팅 길이를 고릅니다.`}]};export{w as doc};