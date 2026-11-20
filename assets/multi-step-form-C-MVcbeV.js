import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r,Nt as i}from"./boot-BfDWwPwR.js";import{t as a}from"./FormField-C1zIoWn7.js";import{t as o}from"./NativeSelect-BtM5htvY.js";import{t as s}from"./VisuallyHidden-vPCthbec.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{n as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useEffect, useId, useRef, useState} from 'react';\r
import {Button, DirectionalIcon, FormField, NativeSelect, VisuallyHidden} from '@gyeol/ui';\r
\r
const steps = ['기본 정보', '팀 구성', '확인 및 시작'];\r
const initial = {name: '느린숲 디자인', email: 'seoyeon.kim@neurinsup.kr', size: '2~10명', purpose: '디자인 프로젝트'};\r
const stack = {display: 'grid', gap: 'var(--g-space-4)', minWidth: 0} as const;\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'} as const;\r
const pair = {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--g-space-1) var(--g-space-3)'} as const;\r
\r
function MultiStepForm() {\r
  const titleId = useId();\r
  const summaryId = useId();\r
  const [step, setStep] = useState(0);\r
  const [name, setName] = useState(initial.name);\r
  const [email, setEmail] = useState(initial.email);\r
  const [size, setSize] = useState(initial.size);\r
  const [purpose, setPurpose] = useState(initial.purpose);\r
  const [attempted, setAttempted] = useState(false);\r
  const [complete, setComplete] = useState(false);\r
  // The button that was pressed disappears when the form finishes or restarts, so focus moves to the new heading.\r
  const [moveFocus, setMoveFocus] = useState(false);\r
  const stepHeading = useRef<HTMLHeadingElement>(null);\r
  const validName = name.trim().length > 0;\r
  const validEmail = isEmail(email);\r
  const summary = [['워크스페이스 이름', name.trim() || '새 워크스페이스'], ['팀 인원', size], ['주요 업무', purpose]];\r
\r
  useEffect(() => {\r
    if (moveFocus) {stepHeading.current?.focus(); setMoveFocus(false);}\r
  }, [moveFocus]);\r
\r
  function next() {\r
    setAttempted(true);\r
    if (step === 0 && (!validName || !validEmail)) return;\r
    setAttempted(false);\r
    if (step === 2) {setComplete(true); setMoveFocus(true);}\r
    else setStep(step + 1);\r
  }\r
\r
  function restart() {\r
    setName(initial.name); setEmail(initial.email); setSize(initial.size); setPurpose(initial.purpose);\r
    setComplete(false); setStep(0); setMoveFocus(true);\r
  }\r
\r
  return <section aria-labelledby={titleId} style={{...stack, gap: 'var(--g-space-5)', color: 'var(--g-ink)'}}>\r
    <h2 id={titleId} style={{...heading, fontSize: 'var(--g-text-heading-2)'}}>워크스페이스 만들기</h2>\r
\r
    <ol aria-label="설정 단계" style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2) var(--g-space-5)'}}>\r
      {steps.map((label, index) => {\r
        const done = complete || index < step;\r
        const current = !complete && index === step;\r
        return <li key={label} aria-current={current ? 'step' : undefined} style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)', color: done || current ? 'var(--g-ink)' : 'var(--g-muted)', fontWeight: current ? 'var(--g-weight-medium)' : 'var(--g-weight-regular)'}}>\r
          <span aria-hidden="true" style={{display: 'grid', placeItems: 'center', flexShrink: 0, width: 'var(--g-space-6)', height: 'var(--g-space-6)', boxSizing: 'border-box', borderRadius: 'var(--g-radius-pill)', fontSize: 'var(--g-text-caption)', fontWeight: 'var(--g-weight-medium)',\r
            ...(current ? {background: 'var(--g-accent)', color: 'var(--g-accent-ink)'} : done ? {background: 'var(--g-soft)', color: 'var(--g-ink)'} : {border: 'var(--g-border-width) solid var(--g-border-control)', color: 'var(--g-muted)'})}}>\r
            {done ? <DirectionalIcon glyph="check"/> : index + 1}\r
          </span>\r
          <span>{label}{done && <VisuallyHidden>, 완료</VisuallyHidden>}</span>\r
        </li>;\r
      })}\r
    </ol>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--g-space-6) var(--g-space-8)', minWidth: 0}}>\r
      <div style={{...stack, flex: '1 1 calc(var(--g-space) * 70)', maxInlineSize: 'calc(var(--g-space) * 100)'}}>\r
        {complete\r
          ? <div role="status" style={stack}>\r
            <h3 ref={stepHeading} tabIndex={-1} style={heading}>'{name.trim()}' 워크스페이스를 만들었어요.</h3>\r
          </div>\r
          : <h3 ref={stepHeading} tabIndex={-1} aria-live="polite" style={heading}>{steps[step]}</h3>}\r
        {!complete && step === 0 && <div style={stack}>\r
          <FormField label="워크스페이스 이름" value={name} onChange={setName} isRequired isInvalid={attempted && !validName} errorMessage="워크스페이스 이름을 입력해 주세요." description="팀원 모두에게 보이는 이름이에요."/>\r
          <FormField label="업무용 이메일" type="email" autoComplete="email" value={email} onChange={setEmail} isRequired isInvalid={attempted && !validEmail} errorMessage="올바른 이메일 주소를 입력해 주세요." description="초대와 청구 알림을 받는 주소예요."/>\r
        </div>}\r
        {!complete && step === 1 && <div style={stack}>\r
          <NativeSelect label="팀 인원" value={size} onChange={setSize} options={['1명', '2~10명', '11~50명', '51명 이상'].map(value => ({value, label: value}))}/>\r
          <NativeSelect label="주요 업무" value={purpose} onChange={setPurpose} options={['디자인 프로젝트', '제품 개발', '콘텐츠 제작', '운영 및 관리'].map(value => ({value, label: value}))}/>\r
        </div>}\r
        {(complete || step === 2) && <dl style={{display: 'grid', gap: 'var(--g-space-2)', margin: 0, padding: 'var(--g-space-4)', background: 'var(--g-soft)', borderRadius: 'var(--g-radius-panel)', overflowWrap: 'anywhere'}}>\r
          {[['워크스페이스 이름', name], ['업무용 이메일', email], ['팀 인원', size], ['주요 업무', purpose]].map(([label, value]) => <div key={label} style={pair}>\r
            <dt style={{color: 'var(--g-muted)'}}>{label}</dt>\r
            <dd style={{margin: 0}}>{value}</dd>\r
          </div>)}\r
        </dl>}\r
        <footer style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--g-space-3)', borderTop: 'var(--g-border-width) solid var(--g-border)', paddingTop: 'var(--g-space-4)'}}>\r
          {complete\r
            ? <Button variant="secondary" onPress={restart}>처음부터 다시</Button>\r
            : <>\r
              <Button variant="quiet" isDisabled={step === 0} onPress={() => {setStep(step - 1); setAttempted(false);}}>이전 단계</Button>\r
              <Button onPress={next}>{step === 2 ? '워크스페이스 만들기' : '다음 단계'}</Button>\r
            </>}\r
        </footer>\r
      </div>\r
\r
      {!complete && step < 2 && <section aria-labelledby={summaryId} style={{...stack, gap: 'var(--g-space-2)', flex: '0 1 calc(var(--g-space) * 60)', overflowWrap: 'anywhere'}}>\r
        <h3 id={summaryId} style={{...heading, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-medium)', letterSpacing: 'normal'}}>입력한 내용</h3>\r
        <dl style={{display: 'grid', gap: 'var(--g-space-2)', margin: 0}}>\r
          {summary.map(([label, value]) => <div key={label} style={pair}>\r
            <dt style={{color: 'var(--g-muted)'}}>{label}</dt>\r
            <dd style={{margin: 0}}>{value}</dd>\r
          </div>)}\r
        </dl>\r
      </section>}\r
    </div>\r
  </section>;\r
}`,d=e(t(),1),f=n(),p=[`기본 정보`,`팀 구성`,`확인 및 시작`],m={name:`느린숲 디자인`,email:`seoyeon.kim@neurinsup.kr`,size:`2~10명`,purpose:`디자인 프로젝트`},h={display:`grid`,gap:`var(--g-space-4)`,minWidth:0},g={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},_={display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-1) var(--g-space-3)`};function v(){let e=(0,d.useId)(),t=(0,d.useId)(),[n,c]=(0,d.useState)(0),[u,v]=(0,d.useState)(m.name),[y,b]=(0,d.useState)(m.email),[x,S]=(0,d.useState)(m.size),[C,w]=(0,d.useState)(m.purpose),[T,E]=(0,d.useState)(!1),[D,O]=(0,d.useState)(!1),[k,A]=(0,d.useState)(!1),j=(0,d.useRef)(null),M=u.trim().length>0,N=l(y),P=[[`워크스페이스 이름`,u.trim()||`새 워크스페이스`],[`팀 인원`,x],[`주요 업무`,C]];(0,d.useEffect)(()=>{k&&(j.current?.focus(),A(!1))},[k]);function F(){E(!0),(n!==0||M&&N)&&(E(!1),n===2?(O(!0),A(!0)):c(n+1))}function I(){v(m.name),b(m.email),S(m.size),w(m.purpose),O(!1),c(0),A(!0)}return(0,f.jsxs)(`section`,{"aria-labelledby":e,style:{...h,gap:`var(--g-space-5)`,color:`var(--g-ink)`},children:[(0,f.jsx)(`h2`,{id:e,style:{...g,fontSize:`var(--g-text-heading-2)`},children:`워크스페이스 만들기`}),(0,f.jsx)(`ol`,{"aria-label":`설정 단계`,style:{listStyle:`none`,padding:0,margin:0,display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2) var(--g-space-5)`},children:p.map((e,t)=>{let r=D||t<n,a=!D&&t===n;return(0,f.jsxs)(`li`,{"aria-current":a?`step`:void 0,style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`,color:r||a?`var(--g-ink)`:`var(--g-muted)`,fontWeight:a?`var(--g-weight-medium)`:`var(--g-weight-regular)`},children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,style:{display:`grid`,placeItems:`center`,flexShrink:0,width:`var(--g-space-6)`,height:`var(--g-space-6)`,boxSizing:`border-box`,borderRadius:`var(--g-radius-pill)`,fontSize:`var(--g-text-caption)`,fontWeight:`var(--g-weight-medium)`,...a?{background:`var(--g-accent)`,color:`var(--g-accent-ink)`}:r?{background:`var(--g-soft)`,color:`var(--g-ink)`}:{border:`var(--g-border-width) solid var(--g-border-control)`,color:`var(--g-muted)`}},children:r?(0,f.jsx)(i,{glyph:`check`}):t+1}),(0,f.jsxs)(`span`,{children:[e,r&&(0,f.jsx)(s,{children:`, 완료`})]})]},e)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`var(--g-space-6) var(--g-space-8)`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{...h,flex:`1 1 calc(var(--g-space) * 70)`,maxInlineSize:`calc(var(--g-space) * 100)`},children:[D?(0,f.jsx)(`div`,{role:`status`,style:h,children:(0,f.jsxs)(`h3`,{ref:j,tabIndex:-1,style:g,children:[`'`,u.trim(),`' 워크스페이스를 만들었어요.`]})}):(0,f.jsx)(`h3`,{ref:j,tabIndex:-1,"aria-live":`polite`,style:g,children:p[n]}),!D&&n===0&&(0,f.jsxs)(`div`,{style:h,children:[(0,f.jsx)(a,{label:`워크스페이스 이름`,value:u,onChange:v,isRequired:!0,isInvalid:T&&!M,errorMessage:`워크스페이스 이름을 입력해 주세요.`,description:`팀원 모두에게 보이는 이름이에요.`}),(0,f.jsx)(a,{label:`업무용 이메일`,type:`email`,autoComplete:`email`,value:y,onChange:b,isRequired:!0,isInvalid:T&&!N,errorMessage:`올바른 이메일 주소를 입력해 주세요.`,description:`초대와 청구 알림을 받는 주소예요.`})]}),!D&&n===1&&(0,f.jsxs)(`div`,{style:h,children:[(0,f.jsx)(o,{label:`팀 인원`,value:x,onChange:S,options:[`1명`,`2~10명`,`11~50명`,`51명 이상`].map(e=>({value:e,label:e}))}),(0,f.jsx)(o,{label:`주요 업무`,value:C,onChange:w,options:[`디자인 프로젝트`,`제품 개발`,`콘텐츠 제작`,`운영 및 관리`].map(e=>({value:e,label:e}))})]}),(D||n===2)&&(0,f.jsx)(`dl`,{style:{display:`grid`,gap:`var(--g-space-2)`,margin:0,padding:`var(--g-space-4)`,background:`var(--g-soft)`,borderRadius:`var(--g-radius-panel)`,overflowWrap:`anywhere`},children:[[`워크스페이스 이름`,u],[`업무용 이메일`,y],[`팀 인원`,x],[`주요 업무`,C]].map(([e,t])=>(0,f.jsxs)(`div`,{style:_,children:[(0,f.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,f.jsx)(`dd`,{style:{margin:0},children:t})]},e))}),(0,f.jsx)(`footer`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-3)`,borderTop:`var(--g-border-width) solid var(--g-border)`,paddingTop:`var(--g-space-4)`},children:D?(0,f.jsx)(r,{variant:`secondary`,onPress:I,children:`처음부터 다시`}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{variant:`quiet`,isDisabled:n===0,onPress:()=>{c(n-1),E(!1)},children:`이전 단계`}),(0,f.jsx)(r,{onPress:F,children:n===2?`워크스페이스 만들기`:`다음 단계`})]})})]}),!D&&n<2&&(0,f.jsxs)(`section`,{"aria-labelledby":t,style:{...h,gap:`var(--g-space-2)`,flex:`0 1 calc(var(--g-space) * 60)`,overflowWrap:`anywhere`},children:[(0,f.jsx)(`h3`,{id:t,style:{...g,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-medium)`,letterSpacing:`normal`},children:`입력한 내용`}),(0,f.jsx)(`dl`,{style:{display:`grid`,gap:`var(--g-space-2)`,margin:0},children:P.map(([e,t])=>(0,f.jsxs)(`div`,{style:_,children:[(0,f.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,f.jsx)(`dd`,{style:{margin:0},children:t})]},e))})]})]})]})}var y={id:`multi-step-form`,title:`단계별 시작하기`,koreanTitle:`단계별 워크스페이스 생성`,group:`blocks`,interactions:[`press`,`type`,`select`],description:`기본 정보, 팀 구성, 확인 세 단계로 워크스페이스를 만드는 폼입니다.`,behavior:[`단계 목록은 순서 있는 목록이고, 현재 단계에 aria-current="step"을 붙입니다. 현재 단계 번호만 강조색으로 칠하고, 끝난 단계는 번호 자리에 체크 표시를 그려 보조 기술에 완료로 읽힙니다.`,`다음 단계를 누를 때 이름이 비었거나 이메일 형식이 맞지 않으면 그 필드 아래에 오류를 보여 주고 단계를 넘기지 않습니다.`,`이전 단계로 돌아가도 입력한 값은 그대로 남습니다.`,`처음 두 단계에서는 폼 옆에 워크스페이스 이름, 팀 인원, 주요 업무를 바로 요약합니다. 확인 단계와 완료 화면은 이메일까지 용어와 값 쌍으로 다시 보여 줍니다.`,`워크스페이스 만들기가 생성 확인이며 따로 동의 항목을 두지 않습니다. 완료되면 결과 제목으로, 처음부터 다시를 누르면 입력값을 처음 값으로 돌리고 첫 단계 제목으로 초점을 옮깁니다.`,`예제는 계정을 만들거나 이메일을 보내지 않습니다.`],demo:v,usage:c(u),whenToUse:[`기본 정보, 팀 구성, 확인처럼 세 단계로 나눠 워크스페이스를 만드는 가입 흐름에 씁니다.`,`이전 단계로 돌아가도 입력값이 남아야 하고 단계마다 검증이 필요한 긴 폼에 맞습니다.`],whenNot:[`한 화면에서 끝나는 짧은 입력은 Form을 씁니다.`,`단계 상태만 표시하고 내용은 다른 곳에 두면 StepIndicator를 씁니다.`],aiNotes:[`이 블록은 Button, DirectionalIcon, FormField, NativeSelect, VisuallyHidden을 조합한 예시입니다.`,`현재 단계에는 aria-current=step을 붙이고, 끝난 단계는 체크 표시와 보조 기술용 완료 표시로 알립니다. 이름이 비었거나 이메일 형식이 틀리면 다음 단계로 넘기지 않습니다.`,`예시는 계정을 만들거나 이메일을 보내지 않습니다. 실제 생성은 호출자가 마지막 단계에서 붙입니다.`],props:[{name:`Button`,type:`'@gyeol/ui'`,description:`이전, 다음 단계로 이동하고 마지막 단계에서 워크스페이스를 만듭니다.`},{name:`DirectionalIcon`,type:`'@gyeol/ui'`,description:`끝난 단계의 번호 자리에 체크 표시를 그립니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`워크스페이스 이름과 이메일을 입력하고 필수 입력 오류를 보여 줍니다.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`팀 인원과 주요 업무를 고릅니다.`},{name:`VisuallyHidden`,type:`'@gyeol/ui'`,description:`끝난 단계에 보조 기술용 완료 표시를 붙입니다.`}]};export{y as doc};