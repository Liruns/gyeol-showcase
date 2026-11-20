import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Checkbox-ISBy2HXX.js";import{t as i}from"./Alert-D8KDLr-u.js";import{t as a}from"./Form-C_qhnZjA.js";import{t as o}from"./Input-ZffEpcx2.js";import{t as s}from"./usage-source-BdQLyNT5.js";import{n as c}from"./values-DbzGm6xY.js";var l=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {Alert, Checkbox, Form, Input} from '@gyeol/ui';\r
\r
export function SignupForm() {\r
  const [name, setName] = useState('');\r
  const [email, setEmail] = useState('');\r
  const [password, setPassword] = useState('');\r
  const [terms, setTerms] = useState(false);\r
  const [attempted, setAttempted] = useState(false);\r
  const [complete, setComplete] = useState(false);\r
  const validEmail = isEmail(email);\r
  const passwordError = password.length < 8 ? '8자 이상 입력해 주세요.' : !/[a-zA-Z]/.test(password) ? '영문을 한 자 이상 넣어 주세요.' : !/[0-9]/.test(password) ? '숫자를 한 자 이상 넣어 주세요.' : '';\r
  const validPassword = !passwordError;\r
\r
  return <section aria-labelledby="signup-block-title" style={{display: 'grid', gap: 'var(--g-space-4)', maxWidth: 'calc(var(--g-space) * 100)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <h2 id="signup-block-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>계정 만들기</h2>\r
    {complete ? <Alert tone="success">가입했어요.</Alert> : <Form aria-label="회원가입 정보" submitLabel="가입하기" onSubmit={() => {\r
      setAttempted(true);\r
      if (name.trim() && validEmail && validPassword && terms) {\r
        setPassword('');\r
        setComplete(true);\r
      }\r
    }}>\r
      <Input label="이름" name="name" value={name} onChange={setName} autoComplete="name" placeholder="김하늘" isRequired isInvalid={attempted && !name.trim()} errorMessage="이름을 입력해 주세요." />\r
      <Input label="이메일" name="email" value={email} onChange={setEmail} type="email" autoComplete="email" placeholder="hello@example.com" isRequired isInvalid={attempted && !validEmail} errorMessage="올바른 이메일 주소를 입력해 주세요." />\r
      <Input label="비밀번호" name="password" value={password} onChange={setPassword} type="password" autoComplete="new-password" description="영문과 숫자를 포함해 8자 이상 입력해 주세요." revealLabels={{show: '비밀번호 표시', hide: '비밀번호 숨기기'}} isRequired isInvalid={attempted && !validPassword} errorMessage={passwordError} />\r
      <div style={{display: 'grid', gap: 'var(--g-space-2)', borderTop: 'var(--g-border-width) solid var(--g-border)', paddingTop: 'var(--g-space-4)'}}>\r
        <Checkbox name="terms" isSelected={terms} onChange={setTerms} isRequired isInvalid={attempted && !terms} errorMessage="가입하려면 이용약관에 동의해 주세요.">[필수] 이용약관 및 개인정보 수집에 동의해요</Checkbox>\r
        <Checkbox name="news" description="선택하지 않아도 서비스를 이용할 수 있어요.">[선택] 새로운 기능과 소식을 받아볼게요</Checkbox>\r
      </div>\r
    </Form>}\r
  </section>;\r
}`,u=e(t(),1),d=n();function f(){let[e,t]=(0,u.useState)(``),[n,s]=(0,u.useState)(``),[l,f]=(0,u.useState)(``),[p,m]=(0,u.useState)(!1),[h,g]=(0,u.useState)(!1),[_,v]=(0,u.useState)(!1),y=c(n),b=l.length<8?`8자 이상 입력해 주세요.`:/[a-zA-Z]/.test(l)?/[0-9]/.test(l)?``:`숫자를 한 자 이상 넣어 주세요.`:`영문을 한 자 이상 넣어 주세요.`,x=!b;return(0,d.jsxs)(`section`,{"aria-labelledby":`signup-block-title`,style:{display:`grid`,gap:`var(--g-space-4)`,maxWidth:`calc(var(--g-space) * 100)`,minWidth:0,color:`var(--g-ink)`},children:[(0,d.jsx)(`h2`,{id:`signup-block-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`계정 만들기`}),_?(0,d.jsx)(i,{tone:`success`,children:`가입했어요.`}):(0,d.jsxs)(a,{"aria-label":`회원가입 정보`,submitLabel:`가입하기`,onSubmit:()=>{g(!0),e.trim()&&y&&x&&p&&(f(``),v(!0))},children:[(0,d.jsx)(o,{label:`이름`,name:`name`,value:e,onChange:t,autoComplete:`name`,placeholder:`김하늘`,isRequired:!0,isInvalid:h&&!e.trim(),errorMessage:`이름을 입력해 주세요.`}),(0,d.jsx)(o,{label:`이메일`,name:`email`,value:n,onChange:s,type:`email`,autoComplete:`email`,placeholder:`hello@example.com`,isRequired:!0,isInvalid:h&&!y,errorMessage:`올바른 이메일 주소를 입력해 주세요.`}),(0,d.jsx)(o,{label:`비밀번호`,name:`password`,value:l,onChange:f,type:`password`,autoComplete:`new-password`,description:`영문과 숫자를 포함해 8자 이상 입력해 주세요.`,revealLabels:{show:`비밀번호 표시`,hide:`비밀번호 숨기기`},isRequired:!0,isInvalid:h&&!x,errorMessage:b}),(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`,borderTop:`var(--g-border-width) solid var(--g-border)`,paddingTop:`var(--g-space-4)`},children:[(0,d.jsx)(r,{name:`terms`,isSelected:p,onChange:m,isRequired:!0,isInvalid:h&&!p,errorMessage:`가입하려면 이용약관에 동의해 주세요.`,children:`[필수] 이용약관 및 개인정보 수집에 동의해요`}),(0,d.jsx)(r,{name:`news`,description:`선택하지 않아도 서비스를 이용할 수 있어요.`,children:`[선택] 새로운 기능과 소식을 받아볼게요`})]})]})]})}var p={id:`signup-form`,title:`회원가입 화면`,koreanTitle:`회원가입 화면`,group:`blocks`,interactions:[`type`,`press`],description:`이름, 이메일, 비밀번호와 약관 동의를 받아 검증하는 회원가입 양식입니다.`,demo:f,behavior:[`처음 제출한 뒤부터 이름, 이메일 형식, 영문과 숫자를 포함한 8자 이상 비밀번호와 필수 약관 동의를 검사하고, 통과하지 못한 필드 옆에 오류를 표시합니다.`,`비밀번호 오류는 길이, 영문, 숫자 순서로 아직 채우지 못한 조건 하나를 알립니다.`,`한글 조합 중 누른 Enter는 양식을 제출하지 않습니다.`,`가입하면 비밀번호 값을 지우고 양식 자리에 완료 알림을 표시합니다.`,`이 예시는 입력한 정보를 저장하거나 전송하지 않습니다.`],whenToUse:[`이름, 이메일, 비밀번호와 필수 약관 동의를 받는 회원가입 화면에 씁니다.`,`처음 제출한 뒤부터 필드 옆에 오류를 보여야 하는 짧은 가입 폼에 맞습니다.`],whenNot:[`약관이 여러 개이고 전체 동의가 필요하면 ConsentGroup을 씁니다.`,`비밀번호 강도를 보여 주려면 PasswordStrength를 더합니다.`,`가입이 아닌 일반 신청서는 Form을 씁니다.`],aiNotes:[`이 페이지는 Form, Input, Checkbox, Alert를 조합한 블록이라 복사해 서비스에 맞게 고칩니다. Form에는 submitLabel과 onSubmit을 줍니다.`,`비밀번호 Input은 type을 password로, autoComplete를 new-password로 두고 revealLabels를 줍니다. 오류는 제출을 시도한 뒤에만 isInvalid와 errorMessage로 보입니다.`,`이 예시는 입력을 저장하거나 보내지 않습니다. 서버 연결과 비밀번호 비우기는 호출자가 합니다.`],usage:s(l),props:[{name:`Alert`,type:`'@gyeol/ui'`,description:`가입 완료를 알립니다.`},{name:`Checkbox`,type:`'@gyeol/ui'`,description:`필수 약관 동의와 선택 소식 수신을 받습니다.`},{name:`Form`,type:`'@gyeol/ui'`,description:`한글 조합 중 제출을 막고 가입 동작을 연결합니다.`},{name:`Input`,type:`'@gyeol/ui'`,description:`이름, 이메일과 표시 전환이 되는 비밀번호를 입력합니다.`}]};export{f as SignupForm,p as doc};