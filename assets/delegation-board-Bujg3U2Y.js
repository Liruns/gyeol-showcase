import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-BEXAs4nG.js";import{r as i,t as a}from"./Avatar-Cp8xQpsW.js";import{n as o}from"./Badge-BrfsGfws.js";import{a as s,n as c,o as l,r as u,t as d}from"./Card-DqgWC_d7.js";var f=e(t(),1),p=n(),m=[{id:`research-interviews`,title:`고객 인터뷰 인사이트 정리`,detail:`인터뷰 6건을 주제별로 묶고 다음 실험을 제안해 주세요.`,owner:`김서연`,team:`리서치`,due:`오늘 15:00`,stage:0},{id:`onboarding-copy`,title:`온보딩 안내 문구 검토`,detail:`첫 방문 사용자의 눈높이로 안내 문구를 다듬어 주세요.`,owner:`이도윤`,team:`콘텐츠`,due:`내일 11:00`,stage:0},{id:`mobile-signup`,title:`모바일 신청 흐름 개선`,detail:`입력 단계를 줄인 시안과 변경 이유를 함께 전달해 주세요.`,owner:`박지우`,team:`디자인`,due:`오늘 17:00`,stage:1},{id:`notification-settings`,title:`알림 수신 설정 점검`,detail:`설정 변경과 저장 결과가 일치하는지 확인해 주세요.`,owner:`정하준`,team:`개발`,due:`내일 14:00`,stage:1},{id:`weekly-report`,title:`주간 성과 보고서 검토`,detail:`핵심 지표와 다음 주 실행 항목을 확인해 주세요.`,owner:`최수빈`,team:`운영`,due:`오늘 16:00`,stage:2}],h=[`위임 대기`,`진행 중`,`검토 요청`,`완료`],g=[`위임하기`,`검토 요청`,`완료 승인`],_={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},v={display:`grid`,gap:`var(--g-space-4)`,minWidth:0},y={color:`var(--g-muted)`};function b(){let[e,t]=(0,f.useState)(m),n=e.filter(e=>e.stage===3).length;return(0,p.jsxs)(`section`,{"aria-label":`이번 주 업무 위임`,style:{...v,gap:`var(--g-space-6)`,color:`var(--g-ink)`},children:[(0,p.jsxs)(`header`,{style:{..._,justifyContent:`space-between`,alignItems:`baseline`},children:[(0,p.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`이번 주 업무 위임`}),(0,p.jsx)(`span`,{style:y,children:`10월 26일(월)`})]}),(0,p.jsxs)(`div`,{style:{...v,gap:`var(--g-space-3)`,paddingBlock:`var(--g-space-4)`,borderBlock:`var(--g-border-width) solid var(--g-border)`},children:[(0,p.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,p.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-medium)`},children:`이번 주 목표`}),(0,p.jsx)(`p`,{style:{...y,margin:0},children:`신청부터 첫 사용까지 거치는 단계 줄이기`})]}),(0,p.jsx)(o,{label:`업무 `+n+`/`+e.length+`건 완료`,value:n,maxValue:e.length})]}),(0,p.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6)`,alignItems:`stretch`},children:h.map((n,o)=>{let f=e.filter(e=>e.stage===o);return o===3&&f.length===0?null:(0,p.jsxs)(`section`,{"aria-label":n,style:{...v,flex:`1 1 var(--g-listbox-max)`,alignContent:`start`,gap:`var(--g-space-3)`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,p.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-body)`,fontWeight:`var(--g-weight-semibold)`,letterSpacing:`var(--g-tracking-heading)`},children:n}),(0,p.jsxs)(`span`,{style:{...y,fontVariantNumeric:`tabular-nums`},children:[f.length,(0,p.jsx)(`span`,{className:`g-visually-hidden`,children:`건`})]})]}),f.length===0&&(0,p.jsx)(`p`,{style:{...y,margin:0},children:`이 단계에 업무가 없어요.`}),f.map(e=>(0,p.jsxs)(d,{size:`sm`,style:{minWidth:0,overflowWrap:`anywhere`},children:[(0,p.jsxs)(s,{children:[(0,p.jsx)(`span`,{style:{...y,fontSize:`var(--g-text-caption)`},children:e.team}),(0,p.jsx)(l,{level:4,style:{fontSize:`var(--g-text-compact)`},children:e.title}),(0,p.jsx)(u,{children:e.detail})]}),(0,p.jsxs)(c,{style:{..._,justifyContent:`space-between`},children:[(0,p.jsxs)(`div`,{style:{..._,gap:`var(--g-space-2)`},children:[(0,p.jsx)(a,{size:`sm`,children:(0,p.jsx)(i,{label:e.owner,children:e.owner.slice(1)})}),(0,p.jsx)(`span`,{children:e.owner}),(0,p.jsx)(`span`,{style:{...y,fontSize:`var(--g-text-caption)`},children:e.due})]}),e.stage<3&&(0,p.jsx)(r,{variant:`secondary`,onPress:()=>t(t=>t.map(t=>t.id===e.id?{...t,stage:t.stage+1}:t)),"aria-label":e.title+` `+g[e.stage],children:g[e.stage]})]})]},e.id))]},n)})})]})}var x={id:`delegation-board`,title:`업무 위임 보드`,koreanTitle:`업무 위임 보드`,group:`blocks`,interactions:[`press`],description:`팀 업무를 단계별 열로 나누고 담당자와 기한을 함께 표시하는 화면입니다.`,demo:b,behavior:[`업무의 버튼은 업무를 다음 단계로 옮깁니다. 위임 대기에서는 위임하기, 진행 중에서는 검토 요청, 검토 요청에서는 완료 승인입니다.`,`버튼의 접근성 이름에는 업무 제목이 붙어 같은 이름의 버튼을 구분합니다.`,`완료 열은 완료한 업무가 생기면 나타납니다.`,`진행률은 완료한 업무 수를 전체 업무 수로 나눈 값입니다.`],whenToUse:[`팀 업무를 위임 대기, 진행 중, 검토 요청, 완료 단계로 나눠 담당자와 기한을 함께 점검할 때 씁니다.`,`단계 이동이 버튼 한 번으로 정해지는 승인 흐름을 짤 때 씁니다.`],whenNot:[`카드를 끌어 옮기는 보드는 KanbanBoard가 맞습니다.`,`단계 구분 없이 할 일만 쌓는 목록은 TaskList를 씁니다.`,`기간을 가로로 펼쳐 보는 일정은 GanttChart를 씁니다.`],aiNotes:[`가져다 쓸 컴포넌트는 없고 Avatar, Card, Button, Progress를 조합한 예시 블록입니다.`,`단계 이동 버튼의 접근성 이름에는 업무 제목이 붙어 같은 이름의 버튼을 구분합니다. 이 이름을 줄여 같은 문구로 만들지 않습니다.`,`진행률은 완료한 업무 수를 전체로 나눈 값이라 완료 열이 비어 있어도 Progress는 0으로 둡니다.`],usage:`import {useState} from 'react';
import {Avatar, AvatarFallback, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Progress} from '@gyeol/ui';

const initialTasks = [
  {id: 'research-interviews', title: '고객 인터뷰 인사이트 정리', detail: '인터뷰 6건을 주제별로 묶고 다음 실험을 제안해 주세요.', owner: '김서연', team: '리서치', due: '오늘 15:00', stage: 0},
  {id: 'onboarding-copy', title: '온보딩 안내 문구 검토', detail: '첫 방문 사용자의 눈높이로 안내 문구를 다듬어 주세요.', owner: '이도윤', team: '콘텐츠', due: '내일 11:00', stage: 0},
  {id: 'mobile-signup', title: '모바일 신청 흐름 개선', detail: '입력 단계를 줄인 시안과 변경 이유를 함께 전달해 주세요.', owner: '박지우', team: '디자인', due: '오늘 17:00', stage: 1},
  {id: 'notification-settings', title: '알림 수신 설정 점검', detail: '설정 변경과 저장 결과가 일치하는지 확인해 주세요.', owner: '정하준', team: '개발', due: '내일 14:00', stage: 1},
  {id: 'weekly-report', title: '주간 성과 보고서 검토', detail: '핵심 지표와 다음 주 실행 항목을 확인해 주세요.', owner: '최수빈', team: '운영', due: '오늘 16:00', stage: 2},
];
const stages = ['위임 대기', '진행 중', '검토 요청', '완료'];
const actions = ['위임하기', '검토 요청', '완료 승인'];
const row = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'} as const;
const stack = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0} as const;
const muted = {color: 'var(--g-muted)'} as const;

export function DelegationBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const completed = tasks.filter(task => task.stage === 3).length;
  return <section aria-label="이번 주 업무 위임" style={{...stack, gap: 'var(--g-space-6)', color: 'var(--g-ink)'}}>
    <header style={{...row, justifyContent: 'space-between', alignItems: 'baseline'}}>
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>이번 주 업무 위임</h2>
      <span style={muted}>10월 26일(월)</span>
    </header>
    <div style={{...stack, gap: 'var(--g-space-3)', paddingBlock: 'var(--g-space-4)', borderBlock: 'var(--g-border-width) solid var(--g-border)'}}>
      <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>
        <strong style={{fontWeight: 'var(--g-weight-medium)'}}>이번 주 목표</strong>
        <p style={{...muted, margin: 0}}>신청부터 첫 사용까지 거치는 단계 줄이기</p>
      </div>
      <Progress label={'업무 ' + completed + '/' + tasks.length + '건 완료'} value={completed} maxValue={tasks.length}/>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6)', alignItems: 'stretch'}}>
      {stages.map((stage, index) => {
        const items = tasks.filter(task => task.stage === index);
        if (index === 3 && items.length === 0) return null;
        return <section key={stage} aria-label={stage} style={{...stack, flex: '1 1 var(--g-listbox-max)', alignContent: 'start', gap: 'var(--g-space-3)'}}>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>
            <h3 style={{margin: 0, fontSize: 'var(--g-text-body)', fontWeight: 'var(--g-weight-semibold)', letterSpacing: 'var(--g-tracking-heading)'}}>{stage}</h3>
            <span style={{...muted, fontVariantNumeric: 'tabular-nums'}}>{items.length}<span className="g-visually-hidden">건</span></span>
          </div>
          {items.length === 0 && <p style={{...muted, margin: 0}}>이 단계에 업무가 없어요.</p>}
          {items.map(task => <Card key={task.id} size="sm" style={{minWidth: 0, overflowWrap: 'anywhere'}}>
            <CardHeader>
              <span style={{...muted, fontSize: 'var(--g-text-caption)'}}>{task.team}</span>
              <CardTitle level={4} style={{fontSize: 'var(--g-text-compact)'}}>{task.title}</CardTitle>
              <CardDescription>{task.detail}</CardDescription>
            </CardHeader>
            <CardContent style={{...row, justifyContent: 'space-between'}}>
              <div style={{...row, gap: 'var(--g-space-2)'}}>
                <Avatar size="sm"><AvatarFallback label={task.owner}>{task.owner.slice(1)}</AvatarFallback></Avatar>
                <span>{task.owner}</span>
                <span style={{...muted, fontSize: 'var(--g-text-caption)'}}>{task.due}</span>
              </div>
              {task.stage < 3 && <Button variant="secondary" onPress={() => setTasks(current => current.map(item => item.id === task.id ? {...item, stage: item.stage + 1} : item))} aria-label={task.title + ' ' + actions[task.stage]}>
                {actions[task.stage]}
              </Button>}
            </CardContent>
          </Card>)}
        </section>;
      })}
    </div>
  </section>;
}`,props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`업무 담당자의 프로필 영역입니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 없이 담당자 이름을 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`위임, 검토 요청과 완료 승인을 실행합니다.`},{name:`Card`,type:`'@gyeol/ui'`,description:`위임한 업무 하나를 담습니다.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`담당자, 기한과 다음 단계 버튼을 한 줄에 배치합니다.`},{name:`CardDescription`,type:`'@gyeol/ui'`,description:`요청 내용을 표시합니다.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`담당 팀, 업무 제목과 요청 내용을 묶습니다.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`업무 제목을 표시합니다.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`완료한 업무 수와 비율을 표시합니다.`}]};export{x as doc};