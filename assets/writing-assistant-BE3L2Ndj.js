import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Et as r}from"./boot-D6j0Rd6o.js";import{t as i}from"./Textarea-Bl8vslcw.js";import{t as a}from"./NativeSelect-BA7wAt6X.js";import{t as o}from"./Badge-Dmz41dgS.js";import{t as s}from"./usage-source-BdQLyNT5.js";var c=`import {useId, useState} from 'react';\r
import {Badge, Button, NativeSelect, Textarea} from '@gyeol/ui';\r
\r
const initialDraft = '작은 기록이 만드는 일상의 변화\\n\\n바쁜 하루를 보내다 보면 나를 돌아볼 시간이 부족합니다. 매일 기록을 하는 것은 일상의 변화를 발견하는 데 도움을 줄 수 있습니다.\\n\\n거창한 계획이 필요한 것은 아닙니다. 오늘 기억하고 싶은 장면 하나, 고마웠던 순간 하나를 적어 보세요. 짧은 문장이라도 꾸준히 모이면 나만의 이야기가 됩니다.\\n\\n지금 바로 첫 번째 기록을 시작해 보시는 것은 어떨까요?';\r
const suggestions = [\r
  {id: 'clarity', title: '문장을 더 간결하게', reason: '불필요한 표현을 덜어 핵심을 바로 전달해요.', before: '매일 기록을 하는 것은 일상의 변화를 발견하는 데 도움을 줄 수 있습니다.', friendly: '매일 기록하면 일상의 작은 변화를 발견할 수 있어요.', formal: '매일 기록하면 일상의 작은 변화를 발견할 수 있습니다.'},\r
  {id: 'ending', title: '마지막 문장을 짧게', reason: '긴 질문 대신 짧고 분명한 문장으로 마무리해요.', before: '지금 바로 첫 번째 기록을 시작해 보시는 것은 어떨까요?', friendly: '오늘의 첫 기록을 함께 시작해 볼까요?', formal: '오늘의 첫 기록을 시작해 보세요.'},\r
] as const;\r
type Suggestion = typeof suggestions[number];\r
\r
const muted = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'} as const;\r
\r
function SuggestionItem({item, draft, replacement, onApply}: {item: Suggestion; draft: string; replacement: string; onApply: () => void}) {\r
  const reasonId = useId();\r
  const applicable = draft.includes(item.before);\r
  const applied = !applicable && (draft.includes(item.friendly) || draft.includes(item.formal));\r
  return <article style={{display: 'grid', gap: 'var(--g-space-2)', paddingBlockStart: 'var(--g-space-4)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
    <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
      <h4 style={{margin: 0, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-body)'}}>{item.title}</h4>\r
      <p style={muted}>{item.reason}</p>\r
    </div>\r
    <dl style={{display: 'grid', gap: 'var(--g-space-2)', margin: 0, lineHeight: 'var(--g-leading-body)'}}>\r
      <div><dt style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>원문</dt><dd style={{margin: 0, color: 'var(--g-muted)'}}>{item.before}</dd></div>\r
      <div><dt style={{fontSize: 'var(--g-text-small)', fontWeight: 'var(--g-weight-medium)'}}>제안</dt><dd style={{margin: 0}}>{replacement}</dd></div>\r
    </dl>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <Button variant="secondary" aria-label={\`\${item.title} 제안 적용\`} {...(applicable ? {} : {'aria-describedby': reasonId})} isDisabled={!applicable} onPress={onApply}>적용</Button>\r
      {!applicable && <p id={reasonId} style={muted}>{applied ? '적용했어요.' : '원문이 바뀌어 적용할 수 없어요.'}</p>}\r
    </div>\r
  </article>;\r
}\r
\r
function WritingAssistant() {\r
  const [draft, setDraft] = useState(initialDraft);\r
  const [tone, setTone] = useState('friendly');\r
  const [notice, setNotice] = useState('');\r
  const suggestionsId = useId();\r
  const remaining = suggestions.filter(item => draft.includes(item.before));\r
  const replacement = (item: Suggestion) => tone === 'friendly' ? item.friendly : item.formal;\r
\r
  return <section aria-label="뉴스레터 초안 다듬기" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-3)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>뉴스레터 초안 다듬기</h2>\r
\r
    <div style={{display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
      <Textarea label="본문" value={draft} onChange={setDraft} rows={8} maxRows={24} />\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
        <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontVariantNumeric: 'tabular-nums'}}>{Array.from(draft).length}자</span>\r
        <Button variant="quiet" isDisabled={draft === initialDraft} onPress={() => {setDraft(initialDraft); setNotice('초안을 원래대로 되돌렸어요.');}}>원래대로</Button>\r
      </div>\r
    </div>\r
\r
    <aside aria-labelledby={suggestionsId} style={{display: 'grid', gap: 'var(--g-space-4)', paddingBlockStart: 'var(--g-space-4)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
      <h3 id={suggestionsId} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)'}}>문장 다듬기</h3>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
        <NativeSelect label="말투" value={tone} onChange={setTone} options={[{value: 'friendly', label: '친근하게'}, {value: 'formal', label: '정중하게'}]} />\r
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
          <Badge state={remaining.length ? 'idle' : 'done'} label={remaining.length ? \`적용 가능한 제안 \${remaining.length}개\` : '남은 제안 없음'} />\r
          <Button variant="secondary" isDisabled={!remaining.length} onPress={() => {\r
            setDraft(current => remaining.reduce((text, item) => text.replace(item.before, replacement(item)), current));\r
            setNotice(\`제안 \${remaining.length}개를 모두 적용했어요.\`);\r
          }}>모두 적용</Button>\r
        </div>\r
      </div>\r
      {suggestions.map(item => <SuggestionItem key={item.id} item={item} draft={draft} replacement={replacement(item)} onApply={() => {\r
        setDraft(current => current.replace(item.before, replacement(item)));\r
        setNotice(\`'\${item.title}' 제안을 적용했어요.\`);\r
      }} />)}\r
    </aside>\r
\r
    <p role="status" style={muted}>{notice}</p>\r
  </section>;\r
}`,l=e(t(),1),u=n(),d=`작은 기록이 만드는 일상의 변화

바쁜 하루를 보내다 보면 나를 돌아볼 시간이 부족합니다. 매일 기록을 하는 것은 일상의 변화를 발견하는 데 도움을 줄 수 있습니다.

거창한 계획이 필요한 것은 아닙니다. 오늘 기억하고 싶은 장면 하나, 고마웠던 순간 하나를 적어 보세요. 짧은 문장이라도 꾸준히 모이면 나만의 이야기가 됩니다.

지금 바로 첫 번째 기록을 시작해 보시는 것은 어떨까요?`,f=[{id:`clarity`,title:`문장을 더 간결하게`,reason:`불필요한 표현을 덜어 핵심을 바로 전달해요.`,before:`매일 기록을 하는 것은 일상의 변화를 발견하는 데 도움을 줄 수 있습니다.`,friendly:`매일 기록하면 일상의 작은 변화를 발견할 수 있어요.`,formal:`매일 기록하면 일상의 작은 변화를 발견할 수 있습니다.`},{id:`ending`,title:`마지막 문장을 짧게`,reason:`긴 질문 대신 짧고 분명한 문장으로 마무리해요.`,before:`지금 바로 첫 번째 기록을 시작해 보시는 것은 어떨까요?`,friendly:`오늘의 첫 기록을 함께 시작해 볼까요?`,formal:`오늘의 첫 기록을 시작해 보세요.`}],p={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`};function m({item:e,draft:t,replacement:n,onApply:i}){let a=(0,l.useId)(),o=t.includes(e.before),s=!o&&(t.includes(e.friendly)||t.includes(e.formal));return(0,u.jsxs)(`article`,{style:{display:`grid`,gap:`var(--g-space-2)`,paddingBlockStart:`var(--g-space-4)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsx)(`h4`,{style:{margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-body)`},children:e.title}),(0,u.jsx)(`p`,{style:p,children:e.reason})]}),(0,u.jsxs)(`dl`,{style:{display:`grid`,gap:`var(--g-space-2)`,margin:0,lineHeight:`var(--g-leading-body)`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`dt`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`원문`}),(0,u.jsx)(`dd`,{style:{margin:0,color:`var(--g-muted)`},children:e.before})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`dt`,{style:{fontSize:`var(--g-text-small)`,fontWeight:`var(--g-weight-medium)`},children:`제안`}),(0,u.jsx)(`dd`,{style:{margin:0},children:n})]})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(r,{variant:`secondary`,"aria-label":`${e.title} 제안 적용`,...o?{}:{"aria-describedby":a},isDisabled:!o,onPress:i,children:`적용`}),!o&&(0,u.jsx)(`p`,{id:a,style:p,children:s?`적용했어요.`:`원문이 바뀌어 적용할 수 없어요.`})]})]})}function h(){let[e,t]=(0,l.useState)(d),[n,s]=(0,l.useState)(`friendly`),[c,h]=(0,l.useState)(``),g=(0,l.useId)(),_=f.filter(t=>e.includes(t.before)),v=e=>n===`friendly`?e.friendly:e.formal;return(0,u.jsxs)(`section`,{"aria-label":`뉴스레터 초안 다듬기`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,u.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-3)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`뉴스레터 초안 다듬기`}),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`,minWidth:0},children:[(0,u.jsx)(i,{label:`본문`,value:e,onChange:t,rows:8,maxRows:24}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,u.jsxs)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontVariantNumeric:`tabular-nums`},children:[Array.from(e).length,`자`]}),(0,u.jsx)(r,{variant:`quiet`,isDisabled:e===d,onPress:()=>{t(d),h(`초안을 원래대로 되돌렸어요.`)},children:`원래대로`})]})]}),(0,u.jsxs)(`aside`,{"aria-labelledby":g,style:{display:`grid`,gap:`var(--g-space-4)`,paddingBlockStart:`var(--g-space-4)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,u.jsx)(`h3`,{id:g,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`},children:`문장 다듬기`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(a,{label:`말투`,value:n,onChange:s,options:[{value:`friendly`,label:`친근하게`},{value:`formal`,label:`정중하게`}]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(o,{state:_.length?`idle`:`done`,label:_.length?`적용 가능한 제안 ${_.length}개`:`남은 제안 없음`}),(0,u.jsx)(r,{variant:`secondary`,isDisabled:!_.length,onPress:()=>{t(e=>_.reduce((e,t)=>e.replace(t.before,v(t)),e)),h(`제안 ${_.length}개를 모두 적용했어요.`)},children:`모두 적용`})]})]}),f.map(n=>(0,u.jsx)(m,{item:n,draft:e,replacement:v(n),onApply:()=>{t(e=>e.replace(n.before,v(n))),h(`'${n.title}' 제안을 적용했어요.`)}},n.id))]}),(0,u.jsx)(`p`,{role:`status`,style:p,children:c})]})}var g={id:`writing-assistant`,title:`글쓰기 도우미`,koreanTitle:`글쓰기 도우미`,group:`blocks`,interactions:[`type`,`press`,`select`],description:`뉴스레터 초안 아래에 말투별 문장 제안을 두고, 원문과 비교해 고른 제안만 본문에 적용하는 화면입니다.`,behavior:[`편집기와 제안 영역은 외곽 프레임 없이 흐름에 놓이고, 두 영역 사이에는 구분선 하나만 둡니다.`,`제안은 원문 문장이 본문에 그대로 남아 있을 때만 적용합니다. 원문을 고치면 그 제안의 적용 버튼이 비활성화되고 옆에 이유가 표시됩니다.`,`말투를 바꾸면 아직 적용하지 않은 제안의 수정안이 바뀝니다. 이미 적용한 문장은 그대로 둡니다.`,`모두 적용은 원문이 남아 있는 제안만 본문에 반영합니다.`,`적용, 모두 적용, 원래대로의 결과는 버튼 옆이 아닌 상태 영역 한 곳으로 알립니다.`,`글자 수는 공백과 줄바꿈을 포함해 셉니다.`,`네트워크 요청 없이 미리 정해 둔 예제 제안으로 동작합니다.`],demo:h,whenToUse:[`뉴스레터 초안 아래에 말투별 문장 제안을 두고 원문과 비교해 고른 제안만 본문에 적용할 때 씁니다.`,`친근하게와 정중하게 같은 말투를 바꿔 가며 수정안을 확인하는 글쓰기 화면에 맞습니다.`],whenNot:[`굵게나 목록 같은 서식을 넣는 편집은 RichTextEditor를 씁니다.`,`입력하는 동안 뒤이을 문장을 바로 제안하려면 InlineSuggestion을 씁니다.`,`두 버전의 차이를 줄 단위로 비교하려면 DiffViewer를 씁니다.`],aiNotes:[`props 없이 Textarea, NativeSelect, Badge, Button을 조합한 블록이므로 usage의 소스를 복사해 씁니다. 제안은 네트워크 요청 없는 예제이므로 실제 제안 생성은 호출하는 쪽이 붙입니다.`,`제안은 원문 문장이 본문에 그대로 있을 때만 적용됩니다. 원문을 고치면 적용 버튼이 비활성화되고 이유가 표시되는 동작을 유지합니다.`,`적용, 모두 적용, 원래대로의 결과는 상태 영역 한 곳으로 알립니다. 버튼 옆에 따로 결과 문구를 두지 않습니다.`],usage:s(c),props:[{name:`Textarea`,type:`'@gyeol/ui'`,description:`초안 본문을 편집하고 적용된 문장을 보여 줍니다.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`제안의 말투를 친근하게와 정중하게 중에서 고릅니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`아직 적용할 수 있는 제안 수를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`개별 적용, 모두 적용, 원래대로를 실행합니다.`}]};export{g as doc};