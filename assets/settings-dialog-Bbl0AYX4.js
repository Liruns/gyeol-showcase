import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-BEXAs4nG.js";import{t as i}from"./NativeSelect-BcSgoQnm.js";import{t as a}from"./Switch-RrZcw7XN.js";import{t as o}from"./FormField-p4HgGXul.js";import{t as s}from"./Dialog-_7WTQFLW.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {useState, type CSSProperties} from 'react';\r
import {Button, Dialog, FormField, NativeSelect, Switch} from '@gyeol/ui';\r
\r
const initialSettings = {name: '작은숲 디자인팀', language: 'ko', mentions: true, digest: false};\r
const row: CSSProperties = {display: 'grid', gridTemplateColumns: 'calc(var(--g-space) * 24) minmax(0, 1fr)', alignItems: 'center', columnGap: 'var(--g-space-4)', minHeight: 'calc(var(--g-target-min) + var(--g-space-2))', paddingBlock: 'var(--g-space-1)'};\r
const divided: CSSProperties = {...row, borderTop: 'var(--g-border-width) solid var(--g-border)'};\r
const term: CSSProperties = {color: 'var(--g-muted)'};\r
const value: CSSProperties = {margin: 0, minWidth: 0, overflowWrap: 'anywhere'};\r
const onOff = (on: boolean) => on ? '켜짐' : '꺼짐';\r
\r
export function SettingsDialog() {\r
  const [saved, setSaved] = useState(initialSettings);\r
  const [draft, setDraft] = useState(initialSettings);\r
  const [notice, setNotice] = useState('');\r
  const dirty = JSON.stringify(saved) !== JSON.stringify(draft);\r
\r
  return <section aria-labelledby="settings-dialog-title" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <h2 id="settings-dialog-title" style={{margin: 0, marginInlineEnd: 'auto', fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>워크스페이스 설정</h2>\r
      <p role="status" style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>{notice}</p>\r
    </header>\r
    <dl style={{margin: 0, display: 'grid', minWidth: 0}}>\r
      <div style={row}>\r
        <dt style={term}>이름</dt>\r
        <dd style={{...value, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
          <span style={{minWidth: 0}}>{saved.name}</span>\r
          <Dialog title="워크스페이스 설정" closeLabel="닫기" onOpenChange={open => {if (open) setDraft(saved);}} trigger={<Button variant="secondary">설정 변경</Button>}>\r
            {close => <div style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
              <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'}}>언어와 알림은 나에게만 적용돼요.</p>\r
              <section aria-label="기본 정보" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
                <FormField label="워크스페이스 이름" value={draft.name} onChange={name => setDraft({...draft, name})} maxLength={40} description="사이드바와 초대 메일에 표시돼요." />\r
                <NativeSelect label="표시 언어" value={draft.language} onChange={language => setDraft({...draft, language})} options={[{value: 'ko', label: '한국어'}, {value: 'en', label: 'English'}]} />\r
              </section>\r
              <section aria-labelledby="settings-dialog-notifications" style={{display: 'grid', gap: 'var(--g-space-4)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
                <h3 id="settings-dialog-notifications" style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)'}}>알림</h3>\r
                <Switch isSelected={draft.mentions} onChange={mentions => setDraft({...draft, mentions})} description="나를 멘션하거나 담당 작업에 댓글이 달리면 알려 줘요.">멘션 및 댓글 알림</Switch>\r
                <Switch isSelected={draft.digest} onChange={digest => setDraft({...draft, digest})} description="한 주의 진행 상황을 월요일 아침에 모아 받아요.">주간 요약 이메일</Switch>\r
              </section>\r
              <footer style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-3)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
                <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>{dirty ? '저장하지 않은 변경 사항이 있어요' : ''}</span>\r
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
                  <Button variant="quiet" onPress={close}>취소</Button>\r
                  <Button isDisabled={!dirty || !draft.name.trim()} onPress={() => {setSaved({...draft, name: draft.name.trim()}); setNotice('설정을 저장했어요.'); close();}}>변경 사항 저장</Button>\r
                </div>\r
              </footer>\r
            </div>}\r
          </Dialog>\r
        </dd>\r
      </div>\r
      <div style={divided}><dt style={term}>표시 언어</dt><dd style={value}>{saved.language === 'ko' ? '한국어' : 'English'}</dd></div>\r
      <div style={divided}><dt style={term}>멘션 알림</dt><dd style={value}>{onOff(saved.mentions)}</dd></div>\r
      <div style={divided}><dt style={term}>주간 요약</dt><dd style={value}>{onOff(saved.digest)}</dd></div>\r
    </dl>\r
  </section>;\r
}`,u=e(t(),1),d=n(),f={name:`작은숲 디자인팀`,language:`ko`,mentions:!0,digest:!1},p={display:`grid`,gridTemplateColumns:`calc(var(--g-space) * 24) minmax(0, 1fr)`,alignItems:`center`,columnGap:`var(--g-space-4)`,minHeight:`calc(var(--g-target-min) + var(--g-space-2))`,paddingBlock:`var(--g-space-1)`},m={...p,borderTop:`var(--g-border-width) solid var(--g-border)`},h={color:`var(--g-muted)`},g={margin:0,minWidth:0,overflowWrap:`anywhere`},_=e=>e?`켜짐`:`꺼짐`;function v(){let[e,t]=(0,u.useState)(f),[n,c]=(0,u.useState)(f),[l,v]=(0,u.useState)(``),y=JSON.stringify(e)!==JSON.stringify(n);return(0,d.jsxs)(`section`,{"aria-labelledby":`settings-dialog-title`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0},children:[(0,d.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},children:[(0,d.jsx)(`h2`,{id:`settings-dialog-title`,style:{margin:0,marginInlineEnd:`auto`,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`워크스페이스 설정`}),(0,d.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:l})]}),(0,d.jsxs)(`dl`,{style:{margin:0,display:`grid`,minWidth:0},children:[(0,d.jsxs)(`div`,{style:p,children:[(0,d.jsx)(`dt`,{style:h,children:`이름`}),(0,d.jsxs)(`dd`,{style:{...g,display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,d.jsx)(`span`,{style:{minWidth:0},children:e.name}),(0,d.jsx)(s,{title:`워크스페이스 설정`,closeLabel:`닫기`,onOpenChange:t=>{t&&c(e)},trigger:(0,d.jsx)(r,{variant:`secondary`,children:`설정 변경`}),children:e=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},children:`언어와 알림은 나에게만 적용돼요.`}),(0,d.jsxs)(`section`,{"aria-label":`기본 정보`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,d.jsx)(o,{label:`워크스페이스 이름`,value:n.name,onChange:e=>c({...n,name:e}),maxLength:40,description:`사이드바와 초대 메일에 표시돼요.`}),(0,d.jsx)(i,{label:`표시 언어`,value:n.language,onChange:e=>c({...n,language:e}),options:[{value:`ko`,label:`한국어`},{value:`en`,label:`English`}]})]}),(0,d.jsxs)(`section`,{"aria-labelledby":`settings-dialog-notifications`,style:{display:`grid`,gap:`var(--g-space-4)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,d.jsx)(`h3`,{id:`settings-dialog-notifications`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`},children:`알림`}),(0,d.jsx)(a,{isSelected:n.mentions,onChange:e=>c({...n,mentions:e}),description:`나를 멘션하거나 담당 작업에 댓글이 달리면 알려 줘요.`,children:`멘션 및 댓글 알림`}),(0,d.jsx)(a,{isSelected:n.digest,onChange:e=>c({...n,digest:e}),description:`한 주의 진행 상황을 월요일 아침에 모아 받아요.`,children:`주간 요약 이메일`})]}),(0,d.jsxs)(`footer`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-3)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,d.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:y?`저장하지 않은 변경 사항이 있어요`:``}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(r,{variant:`quiet`,onPress:e,children:`취소`}),(0,d.jsx)(r,{isDisabled:!y||!n.name.trim(),onPress:()=>{t({...n,name:n.name.trim()}),v(`설정을 저장했어요.`),e()},children:`변경 사항 저장`})]})]})]})})]})]}),(0,d.jsxs)(`div`,{style:m,children:[(0,d.jsx)(`dt`,{style:h,children:`표시 언어`}),(0,d.jsx)(`dd`,{style:g,children:e.language===`ko`?`한국어`:`English`})]}),(0,d.jsxs)(`div`,{style:m,children:[(0,d.jsx)(`dt`,{style:h,children:`멘션 알림`}),(0,d.jsx)(`dd`,{style:g,children:_(e.mentions)})]}),(0,d.jsxs)(`div`,{style:m,children:[(0,d.jsx)(`dt`,{style:h,children:`주간 요약`}),(0,d.jsx)(`dd`,{style:g,children:_(e.digest)})]})]})]})}var y={id:`settings-dialog`,title:`워크스페이스 설정 대화상자`,koreanTitle:`워크스페이스 설정 대화상자`,group:`blocks`,interactions:[`press`,`type`,`select`],description:`워크스페이스 이름, 표시 언어와 알림 설정을 요약해 보여 주고 대화상자에서 고치는 블록입니다.`,demo:v,behavior:[`설정 변경을 누르면 저장된 값으로 초안을 다시 채운 뒤 대화상자를 엽니다.`,`바뀐 값이 있으면 대화상자 바닥줄에 저장하지 않은 변경 사항이 있다고 표시하고, 없으면 비워 둡니다.`,`변경 사항 저장은 바뀐 값이 있고 이름이 비어 있지 않을 때만 켜집니다.`,`이름은 최대 40자까지 받고, 앞뒤 공백을 지워 저장합니다.`,`취소, 닫기 또는 Escape로 닫으면 초안을 버리고 요약은 그대로 둡니다.`,`저장하면 대화상자를 닫고 결과를 상태 메시지로 알립니다.`],whenToUse:[`워크스페이스 이름, 표시 언어, 알림 수신처럼 요약을 보여 주다가 설정 변경을 눌러 한 대화상자에서 고칠 때 씁니다.`,`저장하기 전까지 초안을 두고 취소하면 값이 그대로 남아야 하는 설정 화면에 씁니다.`],whenNot:[`되돌릴 수 없는 삭제를 확인할 때는 Dialog의 alertdialog 형태나 ConfirmPopover를 씁니다.`,`설정 하나만 바로 바꾸는 일은 Switch를 그 자리에 두고 대화상자를 거치지 않습니다.`,`여러 단계로 나뉜 긴 설정은 Sheet를 씁니다.`],aiNotes:[`이 블록은 Button, Dialog, FormField, NativeSelect, Switch를 조합한 예시이므로 usage 코드를 가져다 저장 호출을 바꿔 씁니다.`,`설정 변경을 열 때마다 저장된 값으로 초안을 다시 채우고, 닫으면 초안을 버립니다. 이 순서를 지켜야 취소가 값을 바꾸지 않습니다.`,`저장은 이름이 비어 있지 않고 바뀐 값이 있을 때만 켜고 결과는 상태 메시지로 알립니다. 이름은 40자까지 받고 앞뒤 공백은 지웁니다.`],usage:c(l),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`설정을 열고 변경을 취소하거나 저장합니다.`},{name:`Dialog`,type:`'@gyeol/ui'`,description:`설정 편집 영역의 포커스와 열림 상태를 관리합니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`워크스페이스 이름을 편집합니다.`},{name:`NativeSelect`,type:`'@gyeol/ui'`,description:`표시 언어를 선택합니다.`},{name:`Switch`,type:`'@gyeol/ui'`,description:`멘션 알림과 주간 요약 수신 여부를 전환합니다.`}]};export{v as SettingsDialog,y as doc};