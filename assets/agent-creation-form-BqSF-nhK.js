import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-BmrkG5t5.js";import{t as i}from"./Textarea-DZvnDJI0.js";import{t as a}from"./FormField-DZ08pVf8.js";import{t as o}from"./Alert-U_Nc0C0t.js";import{t as s}from"./NativeSelect-BptDWHZd.js";import{t as c}from"./Badge-VW0oBW64.js";import{t as l}from"./Switch-DLOeY7sZ.js";import{t as u}from"./Form-B8jHBMs_.js";import{t as d}from"./usage-source-BdQLyNT5.js";import{i as f,t as p}from"./styles-C6lJXrWT.js";var m=`import type {CSSProperties} from 'react';\r
const listReset: CSSProperties = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-4)', margin: 0, padding: 0, listStyle: 'none'};\r
const listLink: CSSProperties = {display: 'inline-flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)'};\r
const region = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'} as const;
import {useState} from 'react';\r
import {Alert, Badge, Button, Form, FormField, NativeSelect, Switch, Textarea} from '@gyeol/ui';\r
\r
function AgentCreationForm() {\r
  const [name, setName] = useState('리서치 파트너');\r
  const [instructions, setInstructions] = useState('질문의 핵심을 먼저 정리하고, 확인 가능한 자료를 바탕으로 답변해 주세요. 확실하지 않은 내용은 구분하고 마지막에 다음 행동을 제안해 주세요.');\r
  const [model, setModel] = useState('balanced');\r
  const [approval, setApproval] = useState(true);\r
  const [attempted, setAttempted] = useState(false);\r
  const [created, setCreated] = useState('');\r
  const invalidName = !name.trim();\r
  const invalidInstructions = !instructions.trim();\r
  const pair = {display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'space-between', gap: 'var(--g-space-2)'};\r
\r
  return <section aria-labelledby="agent-form-title" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <h2 id="agent-form-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>새 에이전트</h2>\r
    <Form aria-label="에이전트 설정" submitLabel="에이전트 만들기" onSubmit={() => {\r
      setAttempted(true);\r
      setCreated(invalidName || invalidInstructions ? '' : name.trim());\r
    }}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', columnGap: 'var(--g-space-8)', rowGap: 'var(--g-space-6)', alignItems: 'flex-start'}}>\r
        <div style={{flex: '2 1 calc(var(--g-space) * 88)', minWidth: 0, display: 'grid', gap: 'var(--g-space-6)'}}>\r
          <section aria-labelledby="agent-form-basics" style={region}>\r
            <h3 id="agent-form-basics" style={heading}>기본 정보</h3>\r
            <FormField label="에이전트 이름" name="agentName" value={name} onChange={setName} isRequired maxLength={40} isInvalid={attempted && invalidName} errorMessage="에이전트 이름을 입력해 주세요." />\r
            <Textarea label="역할과 지침" name="instructions" value={instructions} onChange={setInstructions} rows={5} isRequired isInvalid={attempted && invalidInstructions} errorMessage="에이전트가 할 일을 입력해 주세요." description="목표, 답변 형식, 지켜야 할 원칙을 구체적으로 적어 주세요." />\r
          </section>\r
          <section aria-labelledby="agent-form-mode" style={region}>\r
            <h3 id="agent-form-mode" style={heading}>작업 방식</h3>\r
            <NativeSelect label="모델 유형" name="model" value={model} onChange={setModel} options={[{value: 'balanced', label: '균형형: 일상적인 작업'}, {value: 'reasoning', label: '추론형: 복잡한 분석'}, {value: 'fast', label: '빠른 응답형: 짧은 작업'}]} description="만든 뒤에도 모델 유형을 바꿀 수 있어요." />\r
            <Switch isSelected={approval} onChange={setApproval} description="외부로 정보를 보내거나 자료를 수정하기 전에 확인을 요청해요. 처음에는 켜 두는 것을 권장해요.">중요한 작업은 내 승인 후 실행</Switch>\r
          </section>\r
        </div>\r
        <aside aria-label="설정 미리보기" style={{flex: '1 1 calc(var(--g-space) * 60)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', padding: 'var(--g-space-4)', borderRadius: 'var(--g-radius-panel)', background: 'var(--g-soft)', fontSize: 'var(--g-text-compact)'}}>\r
          <h3 style={{...heading, fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-body)', overflowWrap: 'anywhere'}}>{name.trim() || '새 에이전트'}</h3>\r
          <div><Badge state="done" label="나만 접근 가능" /></div>\r
          <p style={{margin: 0, color: 'var(--g-muted)', lineHeight: 'var(--g-leading-body)', overflowWrap: 'anywhere', whiteSpace: 'pre-wrap'}}>{instructions.trim() || '지침 없음'}</p>\r
          <dl style={{display: 'grid', gap: 'var(--g-space-2)', margin: 0}}>\r
            <div style={pair}><dt style={{color: 'var(--g-muted)'}}>모델</dt><dd style={{margin: 0}}>{model === 'balanced' ? '균형형' : model === 'reasoning' ? '추론형' : '빠른 응답형'}</dd></div>\r
            <div style={pair}><dt style={{color: 'var(--g-muted)'}}>실행 승인</dt><dd style={{margin: 0}}>{approval ? '승인 필요' : '자동 실행'}</dd></div>\r
          </dl>\r
          <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'}}>개인 공간에 만들어져요. 팀 공유와 도구 연결은 만든 뒤에 설정해요.</p>\r
        </aside>\r
      </div>\r
      <div style={{marginTop: 'var(--g-space-4)'}}>\r
        <Button variant="quiet" onPress={() => {setName(''); setInstructions(''); setModel('balanced'); setApproval(true); setAttempted(false); setCreated('');}}>입력 초기화</Button>\r
      </div>\r
      {created && <Alert tone="success">'{created}' 에이전트를 만들었어요.</Alert>}\r
    </Form>\r
  </section>;\r
}`,h=e(t(),1),g=n();function _(){let[e,t]=(0,h.useState)(`리서치 파트너`),[n,d]=(0,h.useState)(`질문의 핵심을 먼저 정리하고, 확인 가능한 자료를 바탕으로 답변해 주세요. 확실하지 않은 내용은 구분하고 마지막에 다음 행동을 제안해 주세요.`),[m,_]=(0,h.useState)(`balanced`),[v,y]=(0,h.useState)(!0),[b,x]=(0,h.useState)(!1),[S,C]=(0,h.useState)(``),w=!e.trim(),T=!n.trim(),E={display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-2)`};return(0,g.jsxs)(`section`,{"aria-labelledby":`agent-form-title`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,color:`var(--g-ink)`},children:[(0,g.jsx)(`h2`,{id:`agent-form-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`새 에이전트`}),(0,g.jsxs)(u,{"aria-label":`에이전트 설정`,submitLabel:`에이전트 만들기`,onSubmit:()=>{x(!0),C(w||T?``:e.trim())},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,columnGap:`var(--g-space-8)`,rowGap:`var(--g-space-6)`,alignItems:`flex-start`},children:[(0,g.jsxs)(`div`,{style:{flex:`2 1 calc(var(--g-space) * 88)`,minWidth:0,display:`grid`,gap:`var(--g-space-6)`},children:[(0,g.jsxs)(`section`,{"aria-labelledby":`agent-form-basics`,style:f,children:[(0,g.jsx)(`h3`,{id:`agent-form-basics`,style:p,children:`기본 정보`}),(0,g.jsx)(a,{label:`에이전트 이름`,name:`agentName`,value:e,onChange:t,isRequired:!0,maxLength:40,isInvalid:b&&w,errorMessage:`에이전트 이름을 입력해 주세요.`}),(0,g.jsx)(i,{label:`역할과 지침`,name:`instructions`,value:n,onChange:d,rows:5,isRequired:!0,isInvalid:b&&T,errorMessage:`에이전트가 할 일을 입력해 주세요.`,description:`목표, 답변 형식, 지켜야 할 원칙을 구체적으로 적어 주세요.`})]}),(0,g.jsxs)(`section`,{"aria-labelledby":`agent-form-mode`,style:f,children:[(0,g.jsx)(`h3`,{id:`agent-form-mode`,style:p,children:`작업 방식`}),(0,g.jsx)(s,{label:`모델 유형`,name:`model`,value:m,onChange:_,options:[{value:`balanced`,label:`균형형: 일상적인 작업`},{value:`reasoning`,label:`추론형: 복잡한 분석`},{value:`fast`,label:`빠른 응답형: 짧은 작업`}],description:`만든 뒤에도 모델 유형을 바꿀 수 있어요.`}),(0,g.jsx)(l,{isSelected:v,onChange:y,description:`외부로 정보를 보내거나 자료를 수정하기 전에 확인을 요청해요. 처음에는 켜 두는 것을 권장해요.`,children:`중요한 작업은 내 승인 후 실행`})]})]}),(0,g.jsxs)(`aside`,{"aria-label":`설정 미리보기`,style:{flex:`1 1 calc(var(--g-space) * 60)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,padding:`var(--g-space-4)`,borderRadius:`var(--g-radius-panel)`,background:`var(--g-soft)`,fontSize:`var(--g-text-compact)`},children:[(0,g.jsx)(`h3`,{style:{...p,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-body)`,overflowWrap:`anywhere`},children:e.trim()||`새 에이전트`}),(0,g.jsx)(`div`,{children:(0,g.jsx)(c,{state:`done`,label:`나만 접근 가능`})}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,lineHeight:`var(--g-leading-body)`,overflowWrap:`anywhere`,whiteSpace:`pre-wrap`},children:n.trim()||`지침 없음`}),(0,g.jsxs)(`dl`,{style:{display:`grid`,gap:`var(--g-space-2)`,margin:0},children:[(0,g.jsxs)(`div`,{style:E,children:[(0,g.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`모델`}),(0,g.jsx)(`dd`,{style:{margin:0},children:m===`balanced`?`균형형`:m===`reasoning`?`추론형`:`빠른 응답형`})]}),(0,g.jsxs)(`div`,{style:E,children:[(0,g.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`실행 승인`}),(0,g.jsx)(`dd`,{style:{margin:0},children:v?`승인 필요`:`자동 실행`})]})]}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-body)`},children:`개인 공간에 만들어져요. 팀 공유와 도구 연결은 만든 뒤에 설정해요.`})]})]}),(0,g.jsx)(`div`,{style:{marginTop:`var(--g-space-4)`},children:(0,g.jsx)(r,{variant:`quiet`,onPress:()=>{t(``),d(``),_(`balanced`),y(!0),x(!1),C(``)},children:`입력 초기화`})}),S&&(0,g.jsxs)(o,{tone:`success`,children:[`'`,S,`' 에이전트를 만들었어요.`]})]})]})}var v={id:`agent-creation-form`,title:`에이전트 만들기`,koreanTitle:`에이전트 생성 폼`,group:`blocks`,interactions:[`type`,`select`,`press`],description:`이름과 역할, 모델, 실행 권한을 설정하고 요약을 확인하며 개인 에이전트를 만드는 화면입니다. 예시는 외부 서비스에 연결하지 않고, 만든 에이전트를 저장하지 않습니다.`,demo:_,behavior:[`블록은 테두리나 배경을 그리지 않고, 설정 영역은 위쪽 구분선과 제목으로만 나눕니다. 요약만 옅은 배경의 인셋으로 둡니다.`,`요약은 입력과 동시에 바뀌고, 지침이 비어 있으면 "지침 없음"을 표시합니다.`,`필수 항목 오류는 제출을 시도한 뒤에만 표시합니다.`,`한글 조합 중에 누른 Enter로는 제출하지 않습니다.`,`입력 초기화는 이름과 지침을 비우고 모델과 승인 설정을 기본값으로 되돌리며 오류와 결과 알림을 지웁니다.`],whenToUse:[`이름, 역할, 모델, 승인 권한을 한 화면에서 정하고 요약을 보며 에이전트를 만들 때 씁니다.`,`입력과 동시에 요약이 바뀌어야 해서, 만들기 전에 접근 범위를 확인시키려는 설정 화면에 맞습니다.`],whenNot:[`여러 단계로 나뉜 긴 설정이면 Questionnaire나 StepIndicator로 단계를 나눕니다.`,`이미 만든 에이전트의 연결 서비스를 바꾸는 화면은 IntegrationSettings가 맞습니다.`,`필드가 둘 이하인 간단한 입력은 Form과 FormField만 씁니다.`],aiNotes:[`Form과 FormField를 조합한 블록이라 패키지 컴포넌트가 아니고, 예시 소스를 복사해 자기 화면에 맞춥니다.`,`필수 오류는 제출을 시도한 뒤에만 보여야 하니 오류 상태를 입력 시점이 아닌 제출 시점에 켭니다.`,`Form은 한글 조합 중의 Enter 제출을 막으므로 Enter 제출을 따로 구현하지 않습니다.`],usage:d(m),props:[{name:`Alert`,type:`'@gyeol/ui'`,description:`생성 결과를 알립니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`에이전트의 접근 범위를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`입력한 설정을 초기화합니다.`},{name:`Form`,type:`'@gyeol/ui'`,description:`한글 조합 중 제출을 막고 생성 동작을 처리합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`필수 에이전트 이름을 입력합니다.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`에이전트의 모델 유형을 선택합니다.`},{name:`Switch`,type:`'@gyeol/ui'`,description:`중요 작업의 사전 승인 여부를 설정합니다.`},{name:`Textarea`,type:`'@gyeol/ui'`,description:`에이전트의 역할과 행동 지침을 입력합니다.`}]};export{v as doc};