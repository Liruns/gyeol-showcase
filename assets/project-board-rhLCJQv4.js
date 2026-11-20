import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BeI4_wN4.js";import{t as i}from"./FormField-CldEEvTp.js";import{i as a,r as o,t as s}from"./Avatar-Cq8zREtD.js";import{t as c}from"./SearchInput-DGHkWMHC.js";import{t as l}from"./Dialog-BjLkSIMn.js";import{t as u}from"./KanbanBoard-CFY2MlYl.js";import{t as d}from"./usage-source-BdQLyNT5.js";import{a as f}from"./values-DbzGm6xY.js";var p=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {Avatar, AvatarFallback, AvatarGroup, Button, Dialog, FormField, KanbanBoard, SearchInput, type KanbanBoardCard} from '@gyeol/ui';\r
\r
const columns = [\r
  {id: 'planned', title: '시작 전'},\r
  {id: 'active', title: '진행 중'},\r
  {id: 'review', title: '검토 중'},\r
  {id: 'done', title: '완료'},\r
];\r
\r
const initialCards: readonly KanbanBoardCard[] = [\r
  {id: 'task-1', columnId: 'planned', title: '첫 방문 안내 문구 정리', description: '김하늘, 10월 30일 마감'},\r
  {id: 'task-2', columnId: 'planned', title: '사용자 인터뷰 질문 준비', description: '박지우, 10월 29일 마감'},\r
  {id: 'task-3', columnId: 'active', title: '모바일 탐색 화면 개선', description: '이서연, 10월 28일 마감'},\r
  {id: 'task-4', columnId: 'active', title: '알림 설정 연결', description: '정민준, 10월 29일 마감'},\r
  {id: 'task-5', columnId: 'review', title: '가입 흐름 접근성 점검', description: '김하늘, 10월 27일 마감'},\r
  {id: 'task-6', columnId: 'done', title: '프로젝트 시작 회의', description: '팀 전체, 10월 26일 완료'},\r
  {id: 'task-7', columnId: 'done', title: '화면별 개선 항목 수집', description: '박지우, 10월 26일 완료'},\r
];\r
\r
const team = ['김하늘', '박지우', '이서연', '정민준'];\r
const muted = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'} as const;\r
\r
function ProjectBoard() {\r
  const [cards, setCards] = useState(initialCards);\r
  const [query, setQuery] = useState('');\r
  const [title, setTitle] = useState('');\r
  const [isOpen, setIsOpen] = useState(false);\r
  const search = normalizeKorean(query.trim());\r
  const visibleCards = cards.filter(card => normalizeKorean(\`\${card.title} \${card.description}\`).includes(search));\r
  const completed = cards.filter(card => card.columnId === 'done').length;\r
\r
  return <section aria-labelledby="project-board-title" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box', color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <header style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
        <p style={muted}>제품팀 / 온보딩 개선</p>\r
        <h2 id="project-board-title" style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)'}}>온보딩 개선 스프린트</h2>\r
        <p style={muted}>10월 26일~30일</p>\r
      </div>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-4)', minWidth: 0}}>\r
        <strong style={{fontSize: 'var(--g-text-compact)', fontVariantNumeric: 'tabular-nums'}}>업무 {cards.length}개 중 {completed}개 완료 ({Math.round(completed / cards.length * 100)}%)</strong>\r
        <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
          <span style={muted}>팀원</span>\r
          <AvatarGroup label={\`팀원 \${team.length}명\`}>\r
            {team.map((name, index) => <Avatar key={name} size="sm" style={{marginInlineStart: index ? 'calc(var(--g-space-1) * -1)' : undefined}}><AvatarFallback label={name}>{name.slice(1)}</AvatarFallback></Avatar>)}\r
          </AvatarGroup>\r
        </div>\r
      </div>\r
    </header>\r
\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-4)', alignItems: 'end', justifyContent: 'space-between'}}>\r
      <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
        <SearchInput label="보드 검색" value={query} onChange={setQuery} placeholder="예: 김하늘" />\r
      </div>\r
      <Dialog title="업무 추가" closeLabel="닫기" isOpen={isOpen} onOpenChange={setIsOpen} trigger={<Button onPress={() => setTitle('')}>업무 추가</Button>}>\r
        {close => <div style={{display: 'grid', gap: 'var(--g-space-4)'}}>\r
          <FormField label="업무 이름" value={title} onChange={setTitle} isRequired description="시작 전 열에 추가돼요." />\r
          <Button isDisabled={!title.trim()} onPress={() => {\r
            setCards(current => [...current, {id: \`task-\${current.length + 1}\`, columnId: 'planned', title: title.trim(), description: '담당자와 마감일 미정'}]);\r
            setQuery('');\r
            close();\r
          }}>추가</Button>\r
        </div>}\r
      </Dialog>\r
    </div>\r
\r
    <KanbanBoard label="온보딩 개선 업무 보드" columns={columns} cards={visibleCards}\r
      onCardsChange={next => setCards(current => {\r
        const visible = new Set(visibleCards.map(card => card.id));\r
        let index = 0;\r
        return current.map(card => visible.has(card.id) ? next[index++]! : card);\r
      })}\r
      moveLabel="상태 변경" emptyText={query ? '검색 결과가 없어요.' : '아직 업무가 없어요.'} />\r
    <p role="status" style={muted}>업무 {visibleCards.length}개 표시</p>\r
  </section>;\r
}`,m=e(t(),1),h=n(),g=[{id:`planned`,title:`시작 전`},{id:`active`,title:`진행 중`},{id:`review`,title:`검토 중`},{id:`done`,title:`완료`}],_=[{id:`task-1`,columnId:`planned`,title:`첫 방문 안내 문구 정리`,description:`김하늘, 10월 30일 마감`},{id:`task-2`,columnId:`planned`,title:`사용자 인터뷰 질문 준비`,description:`박지우, 10월 29일 마감`},{id:`task-3`,columnId:`active`,title:`모바일 탐색 화면 개선`,description:`이서연, 10월 28일 마감`},{id:`task-4`,columnId:`active`,title:`알림 설정 연결`,description:`정민준, 10월 29일 마감`},{id:`task-5`,columnId:`review`,title:`가입 흐름 접근성 점검`,description:`김하늘, 10월 27일 마감`},{id:`task-6`,columnId:`done`,title:`프로젝트 시작 회의`,description:`팀 전체, 10월 26일 완료`},{id:`task-7`,columnId:`done`,title:`화면별 개선 항목 수집`,description:`박지우, 10월 26일 완료`}],v=[`김하늘`,`박지우`,`이서연`,`정민준`],y={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`};function b(){let[e,t]=(0,m.useState)(_),[n,d]=(0,m.useState)(``),[p,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!1),C=f(n.trim()),w=e.filter(e=>f(`${e.title} ${e.description}`).includes(C)),T=e.filter(e=>e.columnId===`done`).length;return(0,h.jsxs)(`section`,{"aria-labelledby":`project-board-title`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,maxWidth:`100%`,boxSizing:`border-box`,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,h.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,h.jsx)(`p`,{style:y,children:`제품팀 / 온보딩 개선`}),(0,h.jsx)(`h2`,{id:`project-board-title`,style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`},children:`온보딩 개선 스프린트`}),(0,h.jsx)(`p`,{style:y,children:`10월 26일~30일`})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,h.jsxs)(`strong`,{style:{fontSize:`var(--g-text-compact)`,fontVariantNumeric:`tabular-nums`},children:[`업무 `,e.length,`개 중 `,T,`개 완료 (`,Math.round(T/e.length*100),`%)`]}),(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,h.jsx)(`span`,{style:y,children:`팀원`}),(0,h.jsx)(a,{label:`팀원 ${v.length}명`,children:v.map((e,t)=>(0,h.jsx)(s,{size:`sm`,style:{marginInlineStart:t?`calc(var(--g-space-1) * -1)`:void 0},children:(0,h.jsx)(o,{label:e,children:e.slice(1)})},e))})]})]})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-4)`,alignItems:`end`,justifyContent:`space-between`},children:[(0,h.jsx)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:(0,h.jsx)(c,{label:`보드 검색`,value:n,onChange:d,placeholder:`예: 김하늘`})}),(0,h.jsx)(l,{title:`업무 추가`,closeLabel:`닫기`,isOpen:x,onOpenChange:S,trigger:(0,h.jsx)(r,{onPress:()=>b(``),children:`업무 추가`}),children:e=>(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`},children:[(0,h.jsx)(i,{label:`업무 이름`,value:p,onChange:b,isRequired:!0,description:`시작 전 열에 추가돼요.`}),(0,h.jsx)(r,{isDisabled:!p.trim(),onPress:()=>{t(e=>[...e,{id:`task-${e.length+1}`,columnId:`planned`,title:p.trim(),description:`담당자와 마감일 미정`}]),d(``),e()},children:`추가`})]})})]}),(0,h.jsx)(u,{label:`온보딩 개선 업무 보드`,columns:g,cards:w,onCardsChange:e=>t(t=>{let n=new Set(w.map(e=>e.id)),r=0;return t.map(t=>n.has(t.id)?e[r++]:t)}),moveLabel:`상태 변경`,emptyText:n?`검색 결과가 없어요.`:`아직 업무가 없어요.`}),(0,h.jsxs)(`p`,{role:`status`,style:y,children:[`업무 `,w.length,`개 표시`]})]})}var x={id:`project-board`,title:`프로젝트 보드`,koreanTitle:`프로젝트 보드`,group:`blocks`,interactions:[`drag`,`press`,`type`],description:`한 스프린트의 업무를 상태별 열로 나눠 보여 주는 화면입니다. 업무를 검색하고, 추가하고, 다른 열로 옮깁니다.`,demo:b,behavior:[`블록은 자체 배경, 테두리, 모서리 없이 화면의 흐름에 놓입니다. 진행 현황과 팀원도 틀 없이 제목 아래 한 줄에 둡니다.`,`카드는 손잡이로 끌어 순서를 바꾸거나 다른 열에 놓습니다. 상태 변경 버튼에서는 키보드로 열과 위치를 고릅니다.`,`검색은 업무 이름과 담당자를 부분 일치로 찾고, 결과 수는 보드 아래 상태 줄로 알립니다.`,`업무 추가 대화상자는 이름이 비어 있으면 추가 버튼을 막고, 새 업무를 시작 전 열에 넣은 뒤 검색어를 지웁니다.`,`이 예시의 이동과 추가는 페이지 안 상태에만 남고, 새로 고치면 처음 상태로 돌아갑니다.`],usage:d(p),whenToUse:[`한 스프린트의 업무를 상태별 열로 나눠 이름이나 담당자로 검색하고 열 사이로 옮길 때 씁니다.`,`팀원 현황과 진행 현황을 제목 아래 한 줄로 두는 프로젝트 화면에 맞습니다.`],whenNot:[`일정을 기간 막대로 계획하려면 GanttChart를 씁니다.`,`열 구분 없이 체크하는 할 일 목록은 TaskList를 씁니다.`,`한 목록 안에서 순서만 바꾸면 SortableList를 씁니다.`],aiNotes:[`KanbanBoard를 중심으로 Avatar, AvatarFallback, AvatarGroup, Button, Dialog, FormField, SearchInput을 조합한 예시입니다.`,`카드는 손잡이로 끌어 옮기고, 키보드는 상태 변경 버튼으로 열과 위치를 고릅니다. 두 방법을 모두 남깁니다.`,`예시의 이동과 추가는 페이지 안 상태에만 남고 새로 고치면 처음으로 돌아갑니다. 저장은 호출자가 붙입니다.`],props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`팀원 한 명의 아바타입니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진이 없을 때 이름 글자와 접근 가능한 이름을 보여 줍니다.`},{name:`AvatarGroup`,type:`'@gyeol/ui'`,description:`스프린트 팀원 모음입니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`업무 추가 대화상자를 열고, 대화상자 안에서 업무를 추가합니다.`},{name:`Dialog`,type:`'@gyeol/ui'`,description:`업무 이름을 받는 대화상자입니다.`},{name:`FormField`,type:`'@gyeol/ui'`,description:`새 업무 이름 입력입니다.`},{name:`KanbanBoard`,type:`'@gyeol/ui'`,description:`상태별 열과 카드 이동입니다.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`업무 이름과 담당자 검색입니다.`}]};export{x as doc};