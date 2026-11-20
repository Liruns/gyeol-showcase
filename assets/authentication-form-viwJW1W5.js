import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Et as r}from"./boot-D6j0Rd6o.js";import{t as i}from"./Checkbox-DsDj4zzy.js";import{t as a}from"./FormField-C_PFh4RR.js";import{n as o,t as s}from"./Card-C7zlTfJL.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{n as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useState} from 'react';\r
import {Button, Card, CardContent, Checkbox, FormField} from '@gyeol/ui';\r
\r
function AuthenticationForm() {\r
  const [email, setEmail] = useState('');\r
  const [password, setPassword] = useState('');\r
  const [showPassword, setShowPassword] = useState(false);\r
  const [attempted, setAttempted] = useState(false);\r
  const [message, setMessage] = useState('');\r
  const emailInvalid = !isEmail(email.trim());\r
  const passwordInvalid = password.length < 8;\r
\r
  return <section aria-label="계정 로그인" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <strong>한빛상사 워크스페이스</strong>\r
    <Card style={{width: '100%', maxWidth: 'var(--g-dialog-width)', boxSizing: 'border-box', minWidth: 0}}>\r
      <CardContent style={{display: 'grid', gap: 'var(--g-space-4)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>로그인</h2>\r
        <form noValidate aria-label="이메일로 로그인" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}} onSubmit={event => {\r
          event.preventDefault();\r
          setAttempted(true);\r
          setMessage(emailInvalid || passwordInvalid ? '' : '로그인했어요.');\r
        }} onKeyDownCapture={event => {\r
          if (event.key === 'Enter' && (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229)) event.preventDefault();\r
        }}>\r
          <FormField label="업무용 이메일" name="email" type="email" autoComplete="username" isRequired value={email} onChange={value => {setEmail(value); setMessage('');}} isInvalid={attempted && emailInvalid} errorMessage="올바른 이메일 주소를 입력해 주세요." description="초대받은 이메일 주소로 로그인해 주세요." />\r
          <FormField label="비밀번호" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" isRequired value={password} onChange={value => {setPassword(value); setMessage('');}} isInvalid={attempted && passwordInvalid} errorMessage="비밀번호를 8자 이상 입력해 주세요." />\r
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
            <Checkbox name="rememberEmail" description="공용 기기에서는 해제해 주세요.">이메일 기억하기</Checkbox>\r
            <Checkbox isSelected={showPassword} onChange={setShowPassword}>비밀번호 표시</Checkbox>\r
          </div>\r
          <Button type="submit" style={{width: '100%'}}>로그인</Button>\r
          <p role="status" style={{margin: 0, color: 'var(--g-ink)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)', overflowWrap: 'anywhere'}}>{message}</p>\r
        </form>\r
        <aside style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--g-space-2)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'}}>\r
          <p style={{margin: 0, color: 'var(--g-muted)'}}>계정이 없으면 팀 관리자에게 초대를 요청해 주세요.</p>\r
          <a href="/account/password-reset" onClick={event => event.preventDefault()}>비밀번호 재설정</a>\r
        </aside>\r
      </CardContent>\r
    </Card>\r
  </section>;\r
}`,d=e(t(),1),f=n();function p(){let[e,t]=(0,d.useState)(``),[n,c]=(0,d.useState)(``),[u,p]=(0,d.useState)(!1),[m,h]=(0,d.useState)(!1),[g,_]=(0,d.useState)(``),v=!l(e.trim()),y=n.length<8;return(0,f.jsxs)(`section`,{"aria-label":`계정 로그인`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0},children:[(0,f.jsx)(`strong`,{children:`한빛상사 워크스페이스`}),(0,f.jsx)(s,{style:{width:`100%`,maxWidth:`var(--g-dialog-width)`,boxSizing:`border-box`,minWidth:0},children:(0,f.jsxs)(o,{style:{display:`grid`,gap:`var(--g-space-4)`},children:[(0,f.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`로그인`}),(0,f.jsxs)(`form`,{noValidate:!0,"aria-label":`이메일로 로그인`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},onSubmit:e=>{e.preventDefault(),h(!0),_(v||y?``:`로그인했어요.`)},onKeyDownCapture:e=>{e.key===`Enter`&&(e.nativeEvent.isComposing||e.nativeEvent.keyCode===229)&&e.preventDefault()},children:[(0,f.jsx)(a,{label:`업무용 이메일`,name:`email`,type:`email`,autoComplete:`username`,isRequired:!0,value:e,onChange:e=>{t(e),_(``)},isInvalid:m&&v,errorMessage:`올바른 이메일 주소를 입력해 주세요.`,description:`초대받은 이메일 주소로 로그인해 주세요.`}),(0,f.jsx)(a,{label:`비밀번호`,name:`password`,type:u?`text`:`password`,autoComplete:`current-password`,isRequired:!0,value:n,onChange:e=>{c(e),_(``)},isInvalid:m&&y,errorMessage:`비밀번호를 8자 이상 입력해 주세요.`}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`start`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,f.jsx)(i,{name:`rememberEmail`,description:`공용 기기에서는 해제해 주세요.`,children:`이메일 기억하기`}),(0,f.jsx)(i,{isSelected:u,onChange:p,children:`비밀번호 표시`})]}),(0,f.jsx)(r,{type:`submit`,style:{width:`100%`},children:`로그인`}),(0,f.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-ink)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`,overflowWrap:`anywhere`},children:g})]}),(0,f.jsxs)(`aside`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-2)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},children:[(0,f.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`계정이 없으면 팀 관리자에게 초대를 요청해 주세요.`}),(0,f.jsx)(`a`,{href:`/account/password-reset`,onClick:e=>e.preventDefault(),children:`비밀번호 재설정`})]})]})})]})}var m={id:`authentication-form`,title:`로그인 화면`,koreanTitle:`로그인 화면`,group:`blocks`,interactions:[`type`,`press`],description:`업무용 이메일과 비밀번호로 로그인하는 블록입니다. 입력 검증, 비밀번호 표시, 이메일 기억하기가 있습니다.`,demo:p,behavior:[`제출할 때 이메일 형식과 비밀번호 길이(8자 이상)를 확인하고, 틀린 필드 아래에 오류를 표시합니다.`,`한글을 조합하는 중에 누른 Enter로는 폼을 제출하지 않습니다.`,`입력을 고치면 이전 제출 결과 문구를 지웁니다.`,`비밀번호 표시를 켜면 비밀번호 입력이 일반 텍스트 입력으로 바뀝니다.`,`카탈로그 예시는 실제로 로그인하지 않고, 비밀번호 재설정 링크도 이동하지 않습니다.`],whenToUse:[`업무용 도구의 첫 화면에서 이메일과 비밀번호로 로그인할 때 씁니다.`,`다음 방문을 위해 이메일 기억하기를 두고, 틀린 필드 아래에 오류를 바로 보여 줄 때 맞습니다.`],whenNot:[`이메일로 받은 6자리 인증 번호를 입력받는 단계는 OtpInput을 씁니다.`,`가입 중 비밀번호 강도를 알려 주려면 PasswordStrength를 함께 씁니다.`,`필드가 하나뿐인 간단한 입력은 Form과 FormField로 직접 구성합니다.`],aiNotes:[`props 없이 Card, FormField, Checkbox, Button을 조합한 블록이므로 usage의 소스를 복사해 씁니다.`,`카탈로그 예시는 실제로 로그인하지 않고 비밀번호 재설정 링크도 이동하지 않습니다. 제출 처리와 링크는 호출하는 쪽에서 연결합니다.`,`8자 이상 비밀번호와 이메일 형식 확인은 예시의 규칙이므로 서비스 정책에 맞게 고칩니다.`],usage:c(u),props:[{name:`Card / CardContent`,type:`'@gyeol/ui'`,description:`로그인 입력 영역을 담는 카드와 그 본문.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`레이블과 오류 안내가 연결된 이메일 및 비밀번호 입력.`},{name:`Checkbox`,type:`'@gyeol/ui'`,description:`이메일 기억하기 선택과 비밀번호 표시 전환.`},{name:`Button`,type:`'@gyeol/ui'`,description:`로그인 폼을 제출합니다.`}]};export{m as doc};