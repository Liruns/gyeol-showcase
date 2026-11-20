import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./FormField-C1zIoWn7.js";import{r as a,t as o}from"./Avatar-BWpNARdL.js";import{t as s}from"./NativeSelect-BtM5htvY.js";import{t as c}from"./usage-source-BdQLyNT5.js";import{n as l}from"./values-DbzGm6xY.js";var u=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useId, useState, type CSSProperties} from 'react';\r
import {Avatar, AvatarFallback, Button, FormField, NativeSelect} from '@gyeol/ui';\r
\r
const roleNames: Record<string, string> = {member: '멤버', guest: '게스트'};\r
const muted: CSSProperties = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'};\r
const sectionTitle: CSSProperties = {margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'};\r
\r
function TeamInvitation() {\r
  const [email, setEmail] = useState('');\r
  const [role, setRole] = useState('member');\r
  const [error, setError] = useState('');\r
  const [notice, setNotice] = useState('');\r
  const [invitations, setInvitations] = useState([\r
    {email: 'jiwon@example.com', role: 'member'},\r
    {email: 'minsu@example.com', role: 'guest'},\r
  ]);\r
  const rolesId = useId();\r
  const pendingId = useId();\r
\r
  function invite() {\r
    const address = email.trim().toLowerCase();\r
    if (!isEmail(address)) {\r
      setError('올바른 이메일 주소를 입력해 주세요.');\r
      return;\r
    }\r
    if (invitations.some(item => item.email === address)) {\r
      setError('이미 초대한 이메일이에요.');\r
      return;\r
    }\r
    setInvitations(items => [...items, {email: address, role}]);\r
    setEmail('');\r
    setError('');\r
    setNotice(address + '에게 초대를 보냈어요.');\r
  }\r
\r
  return <section aria-label="팀 초대 관리" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', fontSize: 'var(--g-text-compact)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--g-space-2)'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>팀 초대</h2>\r
      <span style={muted}>멤버 8명</span>\r
    </header>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6)', alignItems: 'flex-start', minWidth: 0}}>\r
      <div style={{flex: '2 1 var(--g-listbox-max)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)'}}>\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3)', alignItems: 'flex-start'}}>\r
          <div style={{flex: '2 1 var(--g-field-basis)', minWidth: 0}}>\r
            <FormField label="동료 이메일" type="email" autoComplete="email" value={email} onChange={value => {setEmail(value); setError('');}} isInvalid={Boolean(error)} errorMessage={error} />\r
          </div>\r
          <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
            <NativeSelect label="팀 권한" value={role} onChange={setRole} options={[{value: 'member', label: '멤버'}, {value: 'guest', label: '게스트'}]} />\r
          </div>\r
        </div>\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3)', alignItems: 'center', justifyContent: 'space-between'}}>\r
          <span style={muted}>초대는 7일 뒤 만료돼요.</span>\r
          <Button onPress={invite}>초대 보내기</Button>\r
        </div>\r
        <p role="status" style={{...muted, overflowWrap: 'anywhere'}}>{notice}</p>\r
      </div>\r
\r
      <section aria-labelledby={rolesId} style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)'}}>\r
        <h3 id={rolesId} style={sectionTitle}>권한</h3>\r
        <dl style={{margin: 0, display: 'grid', gap: 'var(--g-space-3)'}}>\r
          <div>\r
            <dt style={{fontWeight: 'var(--g-weight-semibold)'}}>멤버</dt>\r
            <dd style={{...muted, marginBlockStart: 'var(--g-space-1)'}}>공개 프로젝트에 참여하고 작업을 만들어요.</dd>\r
          </div>\r
          <div>\r
            <dt style={{fontWeight: 'var(--g-weight-semibold)'}}>게스트</dt>\r
            <dd style={{...muted, marginBlockStart: 'var(--g-space-1)'}}>초대받은 프로젝트에만 참여해요.</dd>\r
          </div>\r
        </dl>\r
        <p style={muted}>관리자 권한은 기존 멤버에게만 줄 수 있어요.</p>\r
      </section>\r
    </div>\r
\r
    <section aria-labelledby={pendingId} style={{display: 'grid', gap: 'var(--g-space-2)', paddingBlockStart: 'var(--g-space-4)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
      <h3 id={pendingId} style={sectionTitle}>대기 중인 초대 <span style={{color: 'var(--g-muted)', fontWeight: 'var(--g-weight-regular)'}}>{invitations.length}</span></h3>\r
      {invitations.length === 0 ? <p style={muted}>대기 중인 초대가 없어요.</p> : <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>\r
        {invitations.map(item => <li key={item.email} style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)', minHeight: 'var(--g-space-10)', paddingBlock: 'var(--g-space-1)', borderBlockEnd: 'var(--g-border-width) solid var(--g-border)'}}>\r
          <Avatar size="sm"><AvatarFallback label={item.email}>{item.email.slice(0, 1).toUpperCase()}</AvatarFallback></Avatar>\r
          <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
            <p style={{margin: 0, overflowWrap: 'anywhere', fontWeight: 'var(--g-weight-medium)'}}>{item.email}</p>\r
            <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{roleNames[item.role]}</span>\r
          </div>\r
          <Button variant="quiet" aria-label={item.email + ' 초대 취소'} onPress={() => {setInvitations(items => items.filter(invitation => invitation.email !== item.email)); setNotice(item.email + ' 초대를 취소했어요.');}}>초대 취소</Button>\r
        </li>)}\r
      </ul>}\r
    </section>\r
  </section>;\r
}`,d=e(t(),1),f=n(),p={member:`멤버`,guest:`게스트`},m={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},h={margin:0,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`};function g(){let[e,t]=(0,d.useState)(``),[n,c]=(0,d.useState)(`member`),[u,g]=(0,d.useState)(``),[_,v]=(0,d.useState)(``),[y,b]=(0,d.useState)([{email:`jiwon@example.com`,role:`member`},{email:`minsu@example.com`,role:`guest`}]),x=(0,d.useId)(),S=(0,d.useId)();function C(){let r=e.trim().toLowerCase();l(r)?y.some(e=>e.email===r)?g(`이미 초대한 이메일이에요.`):(b(e=>[...e,{email:r,role:n}]),t(``),g(``),v(r+`에게 초대를 보냈어요.`)):g(`올바른 이메일 주소를 입력해 주세요.`)}return(0,f.jsxs)(`section`,{"aria-label":`팀 초대 관리`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,fontSize:`var(--g-text-compact)`,minWidth:0},children:[(0,f.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,justifyContent:`space-between`,gap:`var(--g-space-2)`},children:[(0,f.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`팀 초대`}),(0,f.jsx)(`span`,{style:m,children:`멤버 8명`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6)`,alignItems:`flex-start`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{flex:`2 1 var(--g-listbox-max)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3)`,alignItems:`flex-start`},children:[(0,f.jsx)(`div`,{style:{flex:`2 1 var(--g-field-basis)`,minWidth:0},children:(0,f.jsx)(i,{label:`동료 이메일`,type:`email`,autoComplete:`email`,value:e,onChange:e=>{t(e),g(``)},isInvalid:!!u,errorMessage:u})}),(0,f.jsx)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:(0,f.jsx)(s,{label:`팀 권한`,value:n,onChange:c,options:[{value:`member`,label:`멤버`},{value:`guest`,label:`게스트`}]})})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3)`,alignItems:`center`,justifyContent:`space-between`},children:[(0,f.jsx)(`span`,{style:m,children:`초대는 7일 뒤 만료돼요.`}),(0,f.jsx)(r,{onPress:C,children:`초대 보내기`})]}),(0,f.jsx)(`p`,{role:`status`,style:{...m,overflowWrap:`anywhere`},children:_})]}),(0,f.jsxs)(`section`,{"aria-labelledby":x,style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsx)(`h3`,{id:x,style:h,children:`권한`}),(0,f.jsxs)(`dl`,{style:{margin:0,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`dt`,{style:{fontWeight:`var(--g-weight-semibold)`},children:`멤버`}),(0,f.jsx)(`dd`,{style:{...m,marginBlockStart:`var(--g-space-1)`},children:`공개 프로젝트에 참여하고 작업을 만들어요.`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`dt`,{style:{fontWeight:`var(--g-weight-semibold)`},children:`게스트`}),(0,f.jsx)(`dd`,{style:{...m,marginBlockStart:`var(--g-space-1)`},children:`초대받은 프로젝트에만 참여해요.`})]})]}),(0,f.jsx)(`p`,{style:m,children:`관리자 권한은 기존 멤버에게만 줄 수 있어요.`})]})]}),(0,f.jsxs)(`section`,{"aria-labelledby":S,style:{display:`grid`,gap:`var(--g-space-2)`,paddingBlockStart:`var(--g-space-4)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,f.jsxs)(`h3`,{id:S,style:h,children:[`대기 중인 초대 `,(0,f.jsx)(`span`,{style:{color:`var(--g-muted)`,fontWeight:`var(--g-weight-regular)`},children:y.length})]}),y.length===0?(0,f.jsx)(`p`,{style:m,children:`대기 중인 초대가 없어요.`}):(0,f.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:y.map(e=>(0,f.jsxs)(`li`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`,minHeight:`var(--g-space-10)`,paddingBlock:`var(--g-space-1)`,borderBlockEnd:`var(--g-border-width) solid var(--g-border)`},children:[(0,f.jsx)(o,{size:`sm`,children:(0,f.jsx)(a,{label:e.email,children:e.email.slice(0,1).toUpperCase()})}),(0,f.jsxs)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:[(0,f.jsx)(`p`,{style:{margin:0,overflowWrap:`anywhere`,fontWeight:`var(--g-weight-medium)`},children:e.email}),(0,f.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:p[e.role]})]}),(0,f.jsx)(r,{variant:`quiet`,"aria-label":e.email+` 초대 취소`,onPress:()=>{b(t=>t.filter(t=>t.email!==e.email)),v(e.email+` 초대를 취소했어요.`)},children:`초대 취소`})]},e.email))})]})]})}var _={id:`team-invitation`,title:`팀 초대`,koreanTitle:`팀 초대`,group:`blocks`,interactions:[`type`,`select`,`press`],description:`동료의 이메일과 권한을 지정하고 대기 중인 초대를 관리하는 팀 초대 화면입니다. 데모에서는 이메일을 보내지 않습니다.`,demo:g,usage:c(u),whenToUse:[`동료의 이메일과 권한을 지정해 팀에 초대하고 대기 중인 초대를 관리할 때 씁니다.`,`이메일 형식과 중복을 입력 직후 필드 아래에서 알려야 하는 초대 화면에 맞습니다.`],whenNot:[`링크나 공유 경로를 골라 내보내는 화면은 ShareSheet를 씁니다.`,`이메일 여러 개를 한 번에 붙여 넣는 입력은 TagInput을 씁니다.`],aiNotes:[`이 블록은 Avatar, AvatarFallback, Button, FormField, NativeSelect를 조합한 예시입니다.`,`이메일 입력의 형식 오류와 중복 오류는 FormField로 필드 아래에 둡니다. 대기 중 초대의 아바타에는 이메일 첫 글자를 씁니다.`,`데모는 이메일을 보내지 않습니다. 실제 발송과 권한 저장은 호출자가 붙입니다.`],props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`대기 중인 초대의 프로필을 표시합니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`프로필 이미지 대신 이메일 첫 글자를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`초대를 보내고 대기 중인 초대를 취소합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`동료 이메일을 입력하고 형식과 중복 오류를 필드 아래에 표시합니다.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`초대할 동료의 팀 권한을 고릅니다.`}]};export{_ as doc};