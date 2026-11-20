import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-Cx46XDKr.js";import{t as i}from"./VoiceActivityIndicator-Bx5gIqYk.js";import{t as a}from"./usage-source-BdQLyNT5.js";var o=`import {useId, useState} from 'react';\r
import {Button, VoiceActivityIndicator} from '@gyeol/ui';\r
\r
const transcript = [\r
  {speaker: '나', time: '00:12', text: '오늘 해야 할 일이 많아서 어디서부터 시작해야 할지 모르겠어요.'},\r
  {speaker: '대화 도우미', time: '00:18', text: '마음이 조금 복잡하셨겠어요. 지금 가장 신경 쓰이는 일 하나만 함께 골라 볼까요?'},\r
];\r
\r
function VoiceConversation() {\r
  const [muted, setMuted] = useState(false);\r
  const [ended, setEnded] = useState(false);\r
  const [showTranscript, setShowTranscript] = useState(true);\r
  const id = useId();\r
  return (\r
    <section aria-labelledby={\`\${id}-title\`} style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, color: 'var(--g-ink)'}}>\r
      <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
        <h2 id={\`\${id}-title\`} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'}}>음성 대화</h2>\r
        <VoiceActivityIndicator state={ended || muted ? 'idle' : 'listening'} amplitude={0.65} label={ended ? '대화 종료' : muted ? '마이크 꺼짐' : '듣는 중'} />\r
      </header>\r
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
        <Button variant="secondary" isDisabled={ended} aria-pressed={muted} onPress={() => setMuted(!muted)}>{muted ? '마이크 켜기' : '마이크 끄기'}</Button>\r
        <Button variant={ended ? 'primary' : 'danger'} onPress={() => {setEnded(!ended); setMuted(false);}}>{ended ? '새 대화 시작' : '대화 마치기'}</Button>\r
      </div>\r
      <section aria-labelledby={\`\${id}-log\`} style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0, paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
          <h3 id={\`\${id}-log\`} style={{margin: 0, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-heading)'}}>대화 기록</h3>\r
          <Button variant="quiet" aria-expanded={showTranscript} onPress={() => setShowTranscript(!showTranscript)}>{showTranscript ? '기록 접기' : '기록 펼치기'}</Button>\r
        </div>\r
        {showTranscript && <>\r
          <ol style={{listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'var(--g-space-3)', overflowWrap: 'anywhere', wordBreak: 'keep-all'}}>\r
            {transcript.map(line => (\r
              <li key={line.time}>\r
                <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{line.speaker} {line.time}</p>\r
                <p style={{margin: 0, fontSize: 'var(--g-text-body)', lineHeight: 'var(--g-leading-body)'}}>{line.text}</p>\r
              </li>\r
            ))}\r
          </ol>\r
          {ended && <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)'}}>대화가 끝났어요.</p>}\r
        </>}\r
      </section>\r
    </section>\r
  );\r
}`,s=e(t(),1),c=n(),l=[{speaker:`나`,time:`00:12`,text:`오늘 해야 할 일이 많아서 어디서부터 시작해야 할지 모르겠어요.`},{speaker:`대화 도우미`,time:`00:18`,text:`마음이 조금 복잡하셨겠어요. 지금 가장 신경 쓰이는 일 하나만 함께 골라 볼까요?`}];function u(){let[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[o,u]=(0,s.useState)(!0),d=(0,s.useId)();return(0,c.jsxs)(`section`,{"aria-labelledby":`${d}-title`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0,color:`var(--g-ink)`},children:[(0,c.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,c.jsx)(`h2`,{id:`${d}-title`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`},children:`음성 대화`}),(0,c.jsx)(i,{state:n||e?`idle`:`listening`,amplitude:.65,label:n?`대화 종료`:e?`마이크 꺼짐`:`듣는 중`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,c.jsx)(r,{variant:`secondary`,isDisabled:n,"aria-pressed":e,onPress:()=>t(!e),children:e?`마이크 켜기`:`마이크 끄기`}),(0,c.jsx)(r,{variant:n?`primary`:`danger`,onPress:()=>{a(!n),t(!1)},children:n?`새 대화 시작`:`대화 마치기`})]}),(0,c.jsxs)(`section`,{"aria-labelledby":`${d}-log`,style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,c.jsx)(`h3`,{id:`${d}-log`,style:{margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-heading)`},children:`대화 기록`}),(0,c.jsx)(r,{variant:`quiet`,"aria-expanded":o,onPress:()=>u(!o),children:o?`기록 접기`:`기록 펼치기`})]}),o&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`ol`,{style:{listStyle:`none`,margin:0,padding:0,display:`grid`,gap:`var(--g-space-3)`,overflowWrap:`anywhere`,wordBreak:`keep-all`},children:l.map(e=>(0,c.jsxs)(`li`,{children:[(0,c.jsxs)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[e.speaker,` `,e.time]}),(0,c.jsx)(`p`,{style:{margin:0,fontSize:`var(--g-text-body)`,lineHeight:`var(--g-leading-body)`},children:e.text})]},e.time))}),n&&(0,c.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`},children:`대화가 끝났어요.`})]})]})]})}var d={id:`voice-conversation`,title:`음성 대화`,koreanTitle:`음성 대화`,group:`blocks`,interactions:[`press`],description:`음성 상태, 마이크 제어, 대화 기록을 한 화면에 둔 음성 대화 예시입니다. 실제 녹음 없이 상태만 바뀝니다.`,demo:u,behavior:[`상태 표시는 role="status"로 듣는 중, 마이크 꺼짐, 대화 종료를 알립니다. 마이크를 끄거나 대화를 마치면 원이 작아지고 흐린 색으로 바뀝니다.`,`마이크 끄기 버튼은 aria-pressed로 꺼짐 상태를 알리고, 대화가 끝나면 비활성화됩니다.`,`기록 접기 버튼은 aria-expanded로 대화 기록의 펼침 상태를 알립니다.`],whenToUse:[`음성 상담이나 음성 비서처럼 말로 대화하는 화면에서 듣는 중 상태, 마이크 제어, 대화 기록을 한 곳에 둘 때 씁니다.`,`마이크를 끄거나 대화를 마치는 상태를 낭독기에도 알려야 하는 화면에 맞습니다.`],whenNot:[`문장 하나를 받아쓰는 입력은 DictationButton을 씁니다.`,`녹음된 음성 메모를 재생하려면 VoiceNote를 씁니다.`,`글로 주고받는 대화는 Chat을 씁니다.`],aiNotes:[`props 없이 Button과 VoiceActivityIndicator를 조합한 블록이므로 usage의 소스를 복사해 씁니다. 예시는 실제 녹음 없이 상태만 바뀝니다.`,`실제 마이크 권한과 음성 연결은 호출하는 쪽이 붙입니다. 상태 표시의 role=status, 마이크 끄기 버튼의 aria-pressed, 기록 접기 버튼의 aria-expanded는 그대로 유지합니다.`,`마이크를 끄거나 대화를 마치면 원이 작아지고 흐려지는 동작이 상태를 함께 알립니다. 대화가 끝나면 마이크 끄기 버튼은 비활성화됩니다.`],usage:a(o),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`마이크 전환, 대화 종료와 재시작, 기록 접기를 제어합니다.`},{name:`VoiceActivityIndicator`,type:`'@gyeol/ui'`,description:`듣는 중과 대기 상태를 원과 상태 문구로 표시합니다.`}]};export{d as doc};