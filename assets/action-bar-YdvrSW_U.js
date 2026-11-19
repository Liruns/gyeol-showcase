import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-D-YxLYeO.js";import{t as i}from"./Checkbox-Co4HHMjC.js";import{t as a}from"./Badge-DamB5rRf.js";import{t as o}from"./usage-source-BdQLyNT5.js";var s=`import {useState} from 'react';\r
import {Badge, Button, Checkbox} from '@gyeol/ui';\r
\r
const initialItems = [\r
  {id: 'walk', title: '가을을 여는 동네 산책', category: '주간 소식', author: '김서연', date: '2026-10-26', dateLabel: '10월 26일', approved: false},\r
  {id: 'studio', title: '작은 작업실의 새로운 시작', category: '인터뷰', author: '이도윤', date: '2026-10-27', dateLabel: '10월 27일', approved: false},\r
  {id: 'picks', title: '이번 주에 만나는 다섯 가지 취향', category: '큐레이션', author: '박지우', date: '2026-10-28', dateLabel: '10월 28일', approved: false},\r
];\r
\r
function ActionBarBlock() {\r
  const [items, setItems] = useState(initialItems);\r
  const [selected, setSelected] = useState<string[]>(['walk', 'studio']);\r
  const [notice, setNotice] = useState('');\r
  const allSelected = selected.length === items.length;\r
\r
  function applyAction(approved: boolean) {\r
    setItems(current => current.map(item => selected.includes(item.id) ? {...item, approved} : item));\r
    setNotice(\`\${selected.length}개 콘텐츠를 \${approved ? '발행 승인했어요' : '검토 대기로 되돌렸어요'}.\`);\r
    setSelected([]);\r
  }\r
\r
  return (\r
    <section aria-label="콘텐츠 일괄 작업" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
      <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', letterSpacing: 'var(--g-tracking-heading)'}}>발행 검토</h2>\r
        <Badge state="idle" label={\`검토 대기 \${items.filter(item => !item.approved).length}개\`} />\r
      </header>\r
\r
      <div style={{display: 'grid', minWidth: 0}}>\r
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)', paddingBottom: 'var(--g-space-3)'}}>\r
          <Checkbox isSelected={allSelected} isIndeterminate={selected.length > 0 && !allSelected} onChange={checked => setSelected(checked ? items.map(item => item.id) : [])}>전체 선택</Checkbox>\r
          <span style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)', fontVariantNumeric: 'tabular-nums'}}>이번 주 발행 예정 {items.length}개</span>\r
        </div>\r
\r
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>\r
          {items.map(item => (\r
            <li key={item.id} style={{padding: 'var(--g-space-3) 0', borderTop: 'var(--g-border-width) solid var(--g-border)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)', minWidth: 0}}>\r
              <Checkbox aria-label={\`\${item.title} 선택\`} isSelected={selected.includes(item.id)} onChange={checked => setSelected(current => checked ? [...current, item.id] : current.filter(id => id !== item.id))} />\r
              <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, overflowWrap: 'anywhere'}}>\r
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>\r
                  <h3 style={{margin: 0, fontSize: 'var(--g-text-body)', fontWeight: 'var(--g-weight-semibold)'}}>{item.title}</h3>\r
                  <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{item.category}</span>\r
                </div>\r
                <p style={{margin: 0, fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>{item.author}, <time dateTime={item.date}>{item.dateLabel}</time> 발행 예정</p>\r
              </div>\r
              <Badge state={item.approved ? 'done' : 'idle'} label={item.approved ? '발행 승인' : '검토 대기'} />\r
            </li>\r
          ))}\r
        </ul>\r
\r
        <div role="group" aria-label="선택한 콘텐츠 작업" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)', paddingTop: 'var(--g-space-3)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
            <strong style={{fontWeight: 'var(--g-weight-medium)', fontVariantNumeric: 'tabular-nums'}}>{selected.length}개 선택됨</strong>\r
            <Button variant="quiet" isDisabled={selected.length === 0} onPress={() => setSelected([])}>선택 해제</Button>\r
          </div>\r
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
            <Button variant="secondary" isDisabled={selected.length === 0} onPress={() => applyAction(false)}>검토 대기로</Button>\r
            <Button isDisabled={selected.length === 0} onPress={() => applyAction(true)}>발행 승인</Button>\r
          </div>\r
        </div>\r
      </div>\r
      <p role="status" style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>{notice}</p>\r
    </section>\r
  );\r
}`,c=e(t(),1),l=n(),u=[{id:`walk`,title:`가을을 여는 동네 산책`,category:`주간 소식`,author:`김서연`,date:`2026-10-26`,dateLabel:`10월 26일`,approved:!1},{id:`studio`,title:`작은 작업실의 새로운 시작`,category:`인터뷰`,author:`이도윤`,date:`2026-10-27`,dateLabel:`10월 27일`,approved:!1},{id:`picks`,title:`이번 주에 만나는 다섯 가지 취향`,category:`큐레이션`,author:`박지우`,date:`2026-10-28`,dateLabel:`10월 28일`,approved:!1}];function d(){let[e,t]=(0,c.useState)(u),[n,o]=(0,c.useState)([`walk`,`studio`]),[s,d]=(0,c.useState)(``),f=n.length===e.length;function p(e){t(t=>t.map(t=>n.includes(t.id)?{...t,approved:e}:t)),d(`${n.length}개 콘텐츠를 ${e?`발행 승인했어요`:`검토 대기로 되돌렸어요`}.`),o([])}return(0,l.jsxs)(`section`,{"aria-label":`콘텐츠 일괄 작업`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,l.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,l.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,letterSpacing:`var(--g-tracking-heading)`},children:`발행 검토`}),(0,l.jsx)(a,{state:`idle`,label:`검토 대기 ${e.filter(e=>!e.approved).length}개`})]}),(0,l.jsxs)(`div`,{style:{display:`grid`,minWidth:0},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`,paddingBottom:`var(--g-space-3)`},children:[(0,l.jsx)(i,{isSelected:f,isIndeterminate:n.length>0&&!f,onChange:t=>o(t?e.map(e=>e.id):[]),children:`전체 선택`}),(0,l.jsxs)(`span`,{style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`,fontVariantNumeric:`tabular-nums`},children:[`이번 주 발행 예정 `,e.length,`개`]})]}),(0,l.jsx)(`ul`,{style:{listStyle:`none`,margin:0,padding:0},children:e.map(e=>(0,l.jsxs)(`li`,{style:{padding:`var(--g-space-3) 0`,borderTop:`var(--g-border-width) solid var(--g-border)`,display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,l.jsx)(i,{"aria-label":`${e.title} 선택`,isSelected:n.includes(e.id),onChange:t=>o(n=>t?[...n,e.id]:n.filter(t=>t!==e.id))}),(0,l.jsxs)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,overflowWrap:`anywhere`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,l.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-body)`,fontWeight:`var(--g-weight-semibold)`},children:e.title}),(0,l.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.category})]}),(0,l.jsxs)(`p`,{style:{margin:0,fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:[e.author,`, `,(0,l.jsx)(`time`,{dateTime:e.date,children:e.dateLabel}),` 발행 예정`]})]}),(0,l.jsx)(a,{state:e.approved?`done`:`idle`,label:e.approved?`발행 승인`:`검토 대기`})]},e.id))}),(0,l.jsxs)(`div`,{role:`group`,"aria-label":`선택한 콘텐츠 작업`,style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`,paddingTop:`var(--g-space-3)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,l.jsxs)(`strong`,{style:{fontWeight:`var(--g-weight-medium)`,fontVariantNumeric:`tabular-nums`},children:[n.length,`개 선택됨`]}),(0,l.jsx)(r,{variant:`quiet`,isDisabled:n.length===0,onPress:()=>o([]),children:`선택 해제`})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,l.jsx)(r,{variant:`secondary`,isDisabled:n.length===0,onPress:()=>p(!1),children:`검토 대기로`}),(0,l.jsx)(r,{isDisabled:n.length===0,onPress:()=>p(!0),children:`발행 승인`})]})]})]}),(0,l.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:s})]})}var f={id:`action-bar`,title:`콘텐츠 일괄 작업`,koreanTitle:`콘텐츠 일괄 작업`,group:`blocks`,interactions:[`press`,`select`],description:`발행 예정 콘텐츠를 골라 한 번에 발행 승인하거나 검토 대기로 되돌리는 편집 화면입니다.`,demo:d,behavior:[`테두리와 배경 없이 놓인 화면의 흐름을 따르고, 목록 행과 작업 줄은 구분선으로만 나눕니다.`,`전체 선택은 일부만 고르면 부분 선택 상태가 되고, 누르면 모든 행을 고르거나 모두 해제합니다.`,`고른 콘텐츠가 없으면 선택 해제, 검토 대기로, 발행 승인 버튼이 모두 비활성입니다.`,`작업을 실행하면 버튼과 같은 말로 결과를 status 영역에 알리고 선택을 해제합니다. 작업 전에는 이 영역이 비어 있습니다.`],whenToUse:[`여러 건을 골라 한 번에 승인하거나 되돌리는 검토 화면에 씁니다. 발행 예정 콘텐츠를 모아 승인하는 편집 화면이 그 예입니다.`,`고른 건수가 바뀔 때마다 작업 버튼의 활성 여부가 따라가야 하는 목록 위에서 씁니다.`],whenNot:[`건마다 다른 작업을 해야 하면 각 행에 Button이나 DropdownMenu를 두는 편이 맞습니다.`,`한두 건만 다루는 화면에서는 선택 줄이 거추장스러우니 Button을 행 안에 바로 둡니다.`,`고른 항목이 다른 영역의 상세를 바꾸는 구성이면 Tabs나 SplitView를 씁니다.`],aiNotes:[`행마다 Checkbox를 두고 전체 선택은 isSelected와 isIndeterminate를 함께 계산해 넘깁니다.`,`행 Checkbox에는 보이는 글이 없으므로 aria-label로 제목을 붙입니다.`,`작업 결과는 role="status" 영역에 적어야 보조 기술이 읽습니다. 선택이 없으면 작업 버튼에 isDisabled를 줍니다.`],usage:o(s),props:[{name:`Checkbox`,type:`'@gyeol/ui'`,description:`행 선택과 전체 선택. 일부만 고르면 부분 선택 상태입니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`검토 대기와 발행 승인 상태`},{name:`Button`,type:`'@gyeol/ui'`,description:`선택 해제, 검토 대기로, 발행 승인`}]};export{f as doc};