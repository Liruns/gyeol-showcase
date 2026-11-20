import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./AgentGraph-CEhp7efd.js";import{t as a}from"./Textarea-CgzY3-Q2.js";import{t as o}from"./FormField-C1zIoWn7.js";import{t as s}from"./Badge-rwba6Qq3.js";import{t as c}from"./Switch-D8fH9Cd6.js";import{t as l}from"./usage-source-BdQLyNT5.js";import{i as u,t as d}from"./styles-C6lJXrWT.js";var f=`import type {CSSProperties} from 'react';\r
const listReset: CSSProperties = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-4)', margin: 0, padding: 0, listStyle: 'none'};\r
const listLink: CSSProperties = {display: 'inline-flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)'};\r
const region = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'} as const;
import {useState} from 'react';\r
import {AgentGraph, Badge, Button, FormField, Switch, Textarea} from '@gyeol/ui';\r
\r
function AgentBuilder() {\r
  const [name, setName] = useState('고객 문의 도우미');\r
  const [instructions, setInstructions] = useState('고객의 질문을 먼저 이해하고, 연결된 도움말에서 근거를 찾아 간결하게 답변하세요. 확실하지 않은 내용은 담당자에게 연결하세요.');\r
  const [approval, setApproval] = useState(true);\r
  const [saved, setSaved] = useState(false);\r
  const [tested, setTested] = useState(false);\r
  const edit = () => {setSaved(false); setTested(false);};\r
  const row = {display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: 'var(--g-space-3)'};\r
\r
  return <section aria-labelledby="agent-builder-title" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <h2 id="agent-builder-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>새 에이전트</h2>\r
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))', columnGap: 'var(--g-space-8)', rowGap: 'var(--g-space-6)', alignItems: 'start'}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0}}>\r
        <section aria-labelledby="agent-builder-role" style={region}>\r
          <h3 id="agent-builder-role" style={heading}>역할과 지침</h3>\r
          <FormField label="에이전트 이름" value={name} onChange={value => {setName(value); edit();}}/>\r
          <Textarea label="작업 지침" rows={5} value={instructions} onChange={value => {setInstructions(value); edit();}} description="목표, 답변 방식, 담당자에게 넘길 조건을 구체적으로 적어 주세요."/>\r
        </section>\r
        <section aria-labelledby="agent-builder-knowledge" style={region}>\r
          <h3 id="agent-builder-knowledge" style={heading}>지식과 실행 권한</h3>\r
          <div style={{...row, justifyContent: 'space-between'}}><div><strong>고객 지원 도움말</strong><p style={{marginBlock: 'var(--g-space-1) 0', color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>배송, 교환, 반품 안내 문서 12개</p></div><Badge state="done" label="연결됨"/></div>\r
          <Switch isSelected={approval} onChange={value => {setApproval(value); edit();}} description="고객에게 보내기 전에 담당자가 검토해요.">답변 전 담당자 승인</Switch>\r
        </section>\r
      </div>\r
      <section aria-labelledby="agent-builder-preview" style={region}>\r
        <h3 id="agent-builder-preview" style={heading}>시험 실행</h3>\r
        <div style={{inlineSize: '100%', maxInlineSize: 'calc(var(--g-space) * 48)', justifySelf: 'start'}}><AgentGraph label="문의 응답 작업 흐름" nodes={[\r
          {id: 'question', label: '고객 질문 이해', status: tested ? 'complete' : 'idle', statusLabel: tested ? '확인 완료' : '입력 대기', x: 96, y: 56},\r
          {id: 'search', label: '도움말 검색', status: tested ? 'complete' : 'idle', statusLabel: tested ? '근거 확인 완료' : '문서 12개 연결', x: 96, y: 184},\r
          {id: 'answer', label: approval ? '담당자 검토' : '답변 작성', status: tested ? 'complete' : 'idle', statusLabel: tested ? '샘플 실행 완료' : approval ? '승인 후 전송' : '자동 응답', x: 96, y: 312},\r
        ]} edges={[{id: 'understand', source: 'question', target: 'search'}, {id: 'respond', source: 'search', target: 'answer'}]}/></div>\r
        <div style={{display: 'grid', gap: 'var(--g-space-2)', justifyItems: 'start'}}>\r
          <strong>테스트 질문</strong>\r
          <p style={{margin: 0, color: 'var(--g-muted)'}}>주문한 상품의 배송 상황은 어디에서 확인하나요?</p>\r
        </div>\r
        <div style={{justifySelf: 'start'}}><Button variant="secondary" isDisabled={!name.trim() || !instructions.trim()} onPress={() => setTested(true)}>샘플 실행</Button></div>\r
        <p role="status" style={{margin: 0, lineHeight: 'var(--g-leading-body)'}}>{tested ? \`샘플 답변: 주문 내역에서 배송 조회를 선택해 주세요. \${approval ? '담당자 승인을 기다려요.' : '자동 응답 초안을 만들었어요.'}\` : ''}</p>\r
      </section>\r
    </div>\r
    <footer style={row}>\r
      <Button isDisabled={!name.trim() || !instructions.trim() || saved} onPress={() => setSaved(true)}>초안 저장</Button>\r
      <span role="status" style={{color: 'var(--g-muted)'}}>{saved ? '초안을 저장했어요.' : ''}</span>\r
    </footer>\r
  </section>;\r
}`,p=e(t(),1),m=n();function h(){let[e,t]=(0,p.useState)(`고객 문의 도우미`),[n,l]=(0,p.useState)(`고객의 질문을 먼저 이해하고, 연결된 도움말에서 근거를 찾아 간결하게 답변하세요. 확실하지 않은 내용은 담당자에게 연결하세요.`),[f,h]=(0,p.useState)(!0),[g,_]=(0,p.useState)(!1),[v,y]=(0,p.useState)(!1),b=()=>{_(!1),y(!1)},x={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`};return(0,m.jsxs)(`section`,{"aria-labelledby":`agent-builder-title`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,m.jsx)(`h2`,{id:`agent-builder-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`새 에이전트`}),(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`,columnGap:`var(--g-space-8)`,rowGap:`var(--g-space-6)`,alignItems:`start`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0},children:[(0,m.jsxs)(`section`,{"aria-labelledby":`agent-builder-role`,style:u,children:[(0,m.jsx)(`h3`,{id:`agent-builder-role`,style:d,children:`역할과 지침`}),(0,m.jsx)(o,{label:`에이전트 이름`,value:e,onChange:e=>{t(e),b()}}),(0,m.jsx)(a,{label:`작업 지침`,rows:5,value:n,onChange:e=>{l(e),b()},description:`목표, 답변 방식, 담당자에게 넘길 조건을 구체적으로 적어 주세요.`})]}),(0,m.jsxs)(`section`,{"aria-labelledby":`agent-builder-knowledge`,style:u,children:[(0,m.jsx)(`h3`,{id:`agent-builder-knowledge`,style:d,children:`지식과 실행 권한`}),(0,m.jsxs)(`div`,{style:{...x,justifyContent:`space-between`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:`고객 지원 도움말`}),(0,m.jsx)(`p`,{style:{marginBlock:`var(--g-space-1) 0`,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`배송, 교환, 반품 안내 문서 12개`})]}),(0,m.jsx)(s,{state:`done`,label:`연결됨`})]}),(0,m.jsx)(c,{isSelected:f,onChange:e=>{h(e),b()},description:`고객에게 보내기 전에 담당자가 검토해요.`,children:`답변 전 담당자 승인`})]})]}),(0,m.jsxs)(`section`,{"aria-labelledby":`agent-builder-preview`,style:u,children:[(0,m.jsx)(`h3`,{id:`agent-builder-preview`,style:d,children:`시험 실행`}),(0,m.jsx)(`div`,{style:{inlineSize:`100%`,maxInlineSize:`calc(var(--g-space) * 48)`,justifySelf:`start`},children:(0,m.jsx)(i,{label:`문의 응답 작업 흐름`,nodes:[{id:`question`,label:`고객 질문 이해`,status:v?`complete`:`idle`,statusLabel:v?`확인 완료`:`입력 대기`,x:96,y:56},{id:`search`,label:`도움말 검색`,status:v?`complete`:`idle`,statusLabel:v?`근거 확인 완료`:`문서 12개 연결`,x:96,y:184},{id:`answer`,label:f?`담당자 검토`:`답변 작성`,status:v?`complete`:`idle`,statusLabel:v?`샘플 실행 완료`:f?`승인 후 전송`:`자동 응답`,x:96,y:312}],edges:[{id:`understand`,source:`question`,target:`search`},{id:`respond`,source:`search`,target:`answer`}]})}),(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`,justifyItems:`start`},children:[(0,m.jsx)(`strong`,{children:`테스트 질문`}),(0,m.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`주문한 상품의 배송 상황은 어디에서 확인하나요?`})]}),(0,m.jsx)(`div`,{style:{justifySelf:`start`},children:(0,m.jsx)(r,{variant:`secondary`,isDisabled:!e.trim()||!n.trim(),onPress:()=>y(!0),children:`샘플 실행`})}),(0,m.jsx)(`p`,{role:`status`,style:{margin:0,lineHeight:`var(--g-leading-body)`},children:v?`샘플 답변: 주문 내역에서 배송 조회를 선택해 주세요. ${f?`담당자 승인을 기다려요.`:`자동 응답 초안을 만들었어요.`}`:``})]})]}),(0,m.jsxs)(`footer`,{style:x,children:[(0,m.jsx)(r,{isDisabled:!e.trim()||!n.trim()||g,onPress:()=>_(!0),children:`초안 저장`}),(0,m.jsx)(`span`,{role:`status`,style:{color:`var(--g-muted)`},children:g?`초안을 저장했어요.`:``})]})]})}var g={id:`agent-builder`,title:`에이전트 빌더`,koreanTitle:`에이전트 빌더`,group:`blocks`,interactions:[`press`,`type`],description:`역할과 작업 지침, 지식 연결, 승인 권한을 설정하고 샘플 실행으로 흐름을 확인하는 에이전트 제작 화면입니다. 예시는 샘플 문서만 쓰고 외부 서비스에 연결하지 않으며, 초안은 이 화면 안에서만 유지됩니다.`,demo:h,behavior:[`블록은 테두리나 배경을 그리지 않고, 설정 영역은 위쪽 구분선과 제목으로만 나눕니다.`,`이름이나 작업 지침이 비어 있으면 샘플 실행과 초안 저장이 비활성화됩니다.`,`이름, 지침, 승인 설정을 바꾸면 저장 상태와 샘플 실행 결과가 초기화됩니다.`,`승인 스위치를 켜면 실행 흐름의 마지막 단계가 담당자 검토로 바뀝니다.`,`샘플 답변과 저장 결과는 항상 렌더링된 상태 영역(role="status")으로 알립니다.`,`초안 저장 버튼은 이름을 유지한 채 다음 수정 전까지 비활성화됩니다.`],whenToUse:[`고객 문의 도우미처럼 에이전트의 역할, 작업 지침, 답변 전 승인 권한을 한 화면에서 정할 때 씁니다.`,`저장하기 전에 샘플 질문으로 실행 흐름을 확인시켜야 하는 에이전트 설정 화면에 맞습니다.`],whenNot:[`에이전트를 실제로 실행하고 승인 대기와 취소를 관리할 때는 useAgentRun을 씁니다.`,`작업이 한 에이전트에서 다른 에이전트나 사람에게 넘어가는 지점을 기록할 때는 AgentHandoff를 씁니다.`,`이름 하나와 켜고 끄는 설정만 있는 단순한 폼은 FormField와 Switch를 직접 놓습니다.`],aiNotes:[`이 블록은 패키지 컴포넌트가 아니라 AgentGraph, FormField, Textarea, Switch, Badge, Button을 조합한 예시이므로 usage 코드를 가져다 상태 연결을 바꿔 씁니다.`,`이름이나 지침이 비면 샘플 실행과 저장 버튼에 isDisabled를 주고, 값을 바꿀 때마다 저장 상태와 샘플 실행 결과를 초기화합니다.`,`샘플 답변과 저장 결과는 화면에 보이는 상태 영역에 렌더링해야 보조 기술이 읽습니다.`],usage:l(f),props:[{name:`AgentGraph`,type:`'@gyeol/ui'`,description:`질문 이해, 지식 검색, 답변 검토의 실행 흐름과 샘플 상태를 표시합니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`샘플 지식의 연결 상태를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`샘플 실행과 화면 내 초안 저장을 수행합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`에이전트 이름을 편집합니다.`},{name:`Switch`,type:`'@gyeol/ui'`,description:`답변 전 담당자 승인 여부를 설정합니다.`},{name:`Textarea`,type:`'@gyeol/ui'`,description:`에이전트 작업 지침을 여러 줄로 편집합니다.`}]};export{g as doc};