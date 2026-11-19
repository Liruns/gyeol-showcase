import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{r,t as i}from"./Avatar-BW1BSs3_.js";import{t as a}from"./Badge-DamB5rRf.js";import{l as o,o as s,r as c,t as l}from"./Message-CzXO4-xz.js";import{t as u}from"./PromptInput-B8hJCzTD.js";import{t as d}from"./usage-source-BdQLyNT5.js";var f=`import {useState} from 'react';\r
import {Avatar, AvatarFallback, Badge, Message, MessageBubble, MessageContent, MessageHeader, PromptInput} from '@gyeol/ui';\r
\r
interface ChatMessage {\r
  readonly name: string;\r
  readonly role: string;\r
  readonly time: string;\r
  readonly text: string;\r
  readonly user: boolean;\r
  readonly plan?: readonly {readonly step: string; readonly task: string; readonly metric: string}[];\r
}\r
\r
const agents = [\r
  {name: '다온', role: '총괄', initial: '다'},\r
  {name: '서치', role: '리서치', initial: '서'},\r
  {name: '루미', role: '기획', initial: '루'},\r
];\r
const conversation: ChatMessage[] = [\r
  {name: '나', role: '요청', time: '오전 10:24', text: '신규 가입자 온보딩을 개선하려고 해요. 가입하고 7일 안에 첫 프로젝트를 완성하게 하는 안을 정리해 주세요.', user: true},\r
  {name: '다온', role: '총괄', time: '오전 10:24', text: '서치는 가입자가 멈추는 지점을, 루미는 첫 주 일정을 맡아 주세요. 두 의견이 모이면 제가 우선순위를 정할게요.', user: false},\r
  {name: '서치', role: '리서치', time: '오전 10:25', text: '인터뷰 12건 중 9건이 첫 화면에서 멈췄어요. 빈 프로젝트에서 무엇부터 할지 모르겠다는 답이 가장 많았어요. 샘플 프로젝트를 먼저 열어 두는 안을 제안해요.', user: false},\r
  {name: '루미', role: '기획', time: '오전 10:26', text: '샘플 프로젝트는 1일 차에 열고, 동료 초대는 3일 차에 안내하면 좋겠어요. 7일 차에는 그동안 만든 결과를 주간 요약으로 보내요.', user: false},\r
  {name: '다온', role: '총괄', time: '오전 10:27', text: '샘플 프로젝트로 첫 실험을 시작해요. 단계별 할 일과 지표를 표로 정리했어요.', user: false, plan: [\r
    {step: '1일 차', task: '샘플 프로젝트를 열어 둔 채로 시작', metric: '첫 결과물 완성률'},\r
    {step: '3일 차', task: '동료 초대 안내', metric: '초대 발송률'},\r
    {step: '7일 차', task: '주간 요약 메일 발송', metric: '7일 내 재방문율'},\r
  ]},\r
];\r
const cell = {padding: 'var(--g-space-2) var(--g-space-4) var(--g-space-2) 0', borderBottom: 'var(--g-border-width) solid var(--g-border)', textAlign: 'start', verticalAlign: 'top'} as const;\r
\r
function Demo() {\r
  const [messages, setMessages] = useState(conversation);\r
  return <section aria-label="멀티 에이전트 협업" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, overflowWrap: 'anywhere', color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>온보딩 개선 논의</h2>\r
        <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>오늘 오전 10:24</p>\r
      </div>\r
      <Badge state="done" label="검토 완료" />\r
    </header>\r
    <ul aria-label="참여 에이전트" style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-4) var(--g-space-8)', margin: 0, padding: 0, listStyle: 'none'}}>\r
      {agents.map(agent => <li key={agent.name} style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-3)', minWidth: 0}}>\r
        <Avatar size="sm"><AvatarFallback>{agent.initial}</AvatarFallback></Avatar>\r
        <div><strong style={{fontWeight: 'var(--g-weight-medium)'}}>{agent.name}</strong><div style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{agent.role}</div></div>\r
      </li>)}\r
    </ul>\r
    <div style={{display: 'grid', gap: 'var(--g-space-5)', minWidth: 0, paddingTop: 'var(--g-space-5)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
      <div role="log" aria-label="에이전트 협업 대화" aria-live="polite" style={{display: 'grid', gap: 'var(--g-space-5)', minWidth: 0}}>\r
        {messages.map((message, index) => <Message key={index} from={message.user ? 'user' : 'assistant'} style={{minWidth: 0}}>\r
          <MessageContent style={{minWidth: 0, maxWidth: '100%'}}>\r
            <MessageHeader><strong>{message.name}</strong><span>{message.role}</span><span>{message.time}</span></MessageHeader>\r
            <MessageBubble variant={message.user ? 'tint' : 'soft'}>{message.text}</MessageBubble>\r
            {message.plan && <table aria-label="첫 주 온보딩 실험안" style={{inlineSize: '100%', borderCollapse: 'collapse', fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-body)'}}>\r
              <thead><tr style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>\r
                <th scope="col" style={{...cell, fontWeight: 'var(--g-weight-medium)'}}>단계</th>\r
                <th scope="col" style={{...cell, fontWeight: 'var(--g-weight-medium)'}}>할 일</th>\r
                <th scope="col" style={{...cell, fontWeight: 'var(--g-weight-medium)'}}>지표</th>\r
              </tr></thead>\r
              <tbody>{message.plan.map(row => <tr key={row.step}>\r
                <th scope="row" style={{...cell, fontWeight: 'var(--g-weight-medium)', whiteSpace: 'nowrap'}}>{row.step}</th>\r
                <td style={cell}>{row.task}</td>\r
                <td style={cell}>{row.metric}</td>\r
              </tr>)}</tbody>\r
            </table>}\r
          </MessageContent>\r
        </Message>)}\r
      </div>\r
      <PromptInput label="팀에 보낼 메시지" placeholder="후속 요청 입력" sendLabel="메시지 보내기" minRows={2} maxRows={5}\r
        onSubmit={text => setMessages(current => [...current, {name: '나', role: '요청', time: '방금', text, user: true}, {name: '다온', role: '총괄', time: '방금', text: '후속 요청을 받았어요. 정리해서 다시 답할게요.', user: false}])} />\r
    </div>\r
  </section>;\r
}`,p=e(t(),1),m=n(),h=[{name:`다온`,role:`총괄`,initial:`다`},{name:`서치`,role:`리서치`,initial:`서`},{name:`루미`,role:`기획`,initial:`루`}],g=[{name:`나`,role:`요청`,time:`오전 10:24`,text:`신규 가입자 온보딩을 개선하려고 해요. 가입하고 7일 안에 첫 프로젝트를 완성하게 하는 안을 정리해 주세요.`,user:!0},{name:`다온`,role:`총괄`,time:`오전 10:24`,text:`서치는 가입자가 멈추는 지점을, 루미는 첫 주 일정을 맡아 주세요. 두 의견이 모이면 제가 우선순위를 정할게요.`,user:!1},{name:`서치`,role:`리서치`,time:`오전 10:25`,text:`인터뷰 12건 중 9건이 첫 화면에서 멈췄어요. 빈 프로젝트에서 무엇부터 할지 모르겠다는 답이 가장 많았어요. 샘플 프로젝트를 먼저 열어 두는 안을 제안해요.`,user:!1},{name:`루미`,role:`기획`,time:`오전 10:26`,text:`샘플 프로젝트는 1일 차에 열고, 동료 초대는 3일 차에 안내하면 좋겠어요. 7일 차에는 그동안 만든 결과를 주간 요약으로 보내요.`,user:!1},{name:`다온`,role:`총괄`,time:`오전 10:27`,text:`샘플 프로젝트로 첫 실험을 시작해요. 단계별 할 일과 지표를 표로 정리했어요.`,user:!1,plan:[{step:`1일 차`,task:`샘플 프로젝트를 열어 둔 채로 시작`,metric:`첫 결과물 완성률`},{step:`3일 차`,task:`동료 초대 안내`,metric:`초대 발송률`},{step:`7일 차`,task:`주간 요약 메일 발송`,metric:`7일 내 재방문율`}]}],_={padding:`var(--g-space-2) var(--g-space-4) var(--g-space-2) 0`,borderBottom:`var(--g-border-width) solid var(--g-border)`,textAlign:`start`,verticalAlign:`top`};function v(){let[e,t]=(0,p.useState)(g);return(0,m.jsxs)(`section`,{"aria-label":`멀티 에이전트 협업`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,overflowWrap:`anywhere`,color:`var(--g-ink)`},children:[(0,m.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,m.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`온보딩 개선 논의`}),(0,m.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`오늘 오전 10:24`})]}),(0,m.jsx)(a,{state:`done`,label:`검토 완료`})]}),(0,m.jsx)(`ul`,{"aria-label":`참여 에이전트`,style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-4) var(--g-space-8)`,margin:0,padding:0,listStyle:`none`},children:h.map(e=>(0,m.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,m.jsx)(i,{size:`sm`,children:(0,m.jsx)(r,{children:e.initial})}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{style:{fontWeight:`var(--g-weight-medium)`},children:e.name}),(0,m.jsx)(`div`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.role})]})]},e.name))}),(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-5)`,minWidth:0,paddingTop:`var(--g-space-5)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,m.jsx)(`div`,{role:`log`,"aria-label":`에이전트 협업 대화`,"aria-live":`polite`,style:{display:`grid`,gap:`var(--g-space-5)`,minWidth:0},children:e.map((e,t)=>(0,m.jsx)(l,{from:e.user?`user`:`assistant`,style:{minWidth:0},children:(0,m.jsxs)(s,{style:{minWidth:0,maxWidth:`100%`},children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(`strong`,{children:e.name}),(0,m.jsx)(`span`,{children:e.role}),(0,m.jsx)(`span`,{children:e.time})]}),(0,m.jsx)(c,{variant:e.user?`tint`:`soft`,children:e.text}),e.plan&&(0,m.jsxs)(`table`,{"aria-label":`첫 주 온보딩 실험안`,style:{inlineSize:`100%`,borderCollapse:`collapse`,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-body)`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[(0,m.jsx)(`th`,{scope:`col`,style:{..._,fontWeight:`var(--g-weight-medium)`},children:`단계`}),(0,m.jsx)(`th`,{scope:`col`,style:{..._,fontWeight:`var(--g-weight-medium)`},children:`할 일`}),(0,m.jsx)(`th`,{scope:`col`,style:{..._,fontWeight:`var(--g-weight-medium)`},children:`지표`})]})}),(0,m.jsx)(`tbody`,{children:e.plan.map(e=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{scope:`row`,style:{..._,fontWeight:`var(--g-weight-medium)`,whiteSpace:`nowrap`},children:e.step}),(0,m.jsx)(`td`,{style:_,children:e.task}),(0,m.jsx)(`td`,{style:_,children:e.metric})]},e.step))})]})]})},t))}),(0,m.jsx)(u,{label:`팀에 보낼 메시지`,placeholder:`후속 요청 입력`,sendLabel:`메시지 보내기`,minRows:2,maxRows:5,onSubmit:e=>t(t=>[...t,{name:`나`,role:`요청`,time:`방금`,text:e,user:!0},{name:`다온`,role:`총괄`,time:`방금`,text:`후속 요청을 받았어요. 정리해서 다시 답할게요.`,user:!1}])})]})]})}var y={id:`multi-agent-chat`,title:`멀티 에이전트 대화`,koreanTitle:`멀티 에이전트 대화`,group:`blocks`,interactions:[`type`,`press`],description:`총괄, 리서치, 기획 에이전트가 의견을 나누고 실행안을 표로 정리하는 협업 대화 화면입니다.`,demo:v,behavior:[`Enter로 보내고 Shift+Enter로 줄을 바꿉니다. 한글 조합 중 Enter는 보내지 않습니다.`,`대화 기록은 role="log" 영역이라 새 메시지를 화면 읽기 프로그램이 차례로 읽습니다.`,`최종 실행안은 말풍선 속 문장이 아니라 단계, 할 일, 지표 열을 가진 표로 대화 흐름에 놓입니다.`,`후속 요청을 보내면 총괄 에이전트의 고정된 답이 붙습니다. 대화는 모두 예시 데이터이고 외부로 보내지 않습니다.`],whenToUse:[`여러 에이전트가 역할을 나눠 의견을 내고 최종 실행안을 표로 정리하는 협업 화면에 씁니다.`,`어떤 에이전트가 말했는지 구분되어야 하는 대화에서 씁니다.`],whenNot:[`사용자와 어시스턴트 둘만 오가는 대화는 Chat이 맞습니다.`,`에이전트 사이의 작업 인계를 보여 주려면 AgentHandoff를 씁니다.`,`에이전트 연결 구조를 그림으로 보이면 AgentGraph를 씁니다.`],aiNotes:[`이 블록은 Avatar, Message, MessageBubble, PromptInput 등을 조합한 예시라 소스를 복사해 씁니다.`,`대화 기록은 role="log" 영역이어야 새 메시지가 순서대로 읽힙니다.`,`실행안은 말풍선 속 문장이 아니라 단계, 할 일, 지표 열을 가진 표로 흐름에 놓습니다. Enter 전송은 한글 조합 중에 막아야 합니다.`],usage:d(f),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`참여 에이전트의 프로필 영역.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`에이전트 이름의 첫 글자 표시.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`논의의 검토 완료 상태.`},{name:`Message`,type:`'@gyeol/ui'`,description:`사용자와 에이전트의 대화 방향.`},{name:`MessageBubble`,type:`'@gyeol/ui'`,description:`요청과 에이전트 의견의 말풍선.`},{name:`MessageContent`,type:`'@gyeol/ui'`,description:`메시지 본문, 실행안 표와 메타데이터의 배치.`},{name:`MessageHeader`,type:`'@gyeol/ui'`,description:`발화자 이름, 역할과 시각.`},{name:`PromptInput`,type:`'@gyeol/ui'`,description:`한글 조합을 지키는 후속 요청 입력과 전송.`}]};export{y as doc};