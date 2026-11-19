import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{t as r}from"./Button-DjMJDlCG.js";import{n as i}from"./Badge-CvQ-tQ6E.js";import{t as a}from"./SearchInput-Dd3aAzAW.js";import{t as o}from"./KanbanBoard-B4RywEIx.js";import{t as s}from"./usage-source-BdQLyNT5.js";import{a as c}from"./values-DbzGm6xY.js";var l=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useId, useState} from 'react';\r
import {Button, KanbanBoard, Progress, SearchInput} from '@gyeol/ui';\r
import type {KanbanBoardCard} from '@gyeol/ui';\r
\r
const columns = [\r
  {id: 'planned', title: '시작 전'},\r
  {id: 'active', title: '진행 중'},\r
  {id: 'done', title: '완료'},\r
];\r
\r
const initialCards: readonly KanbanBoardCard[] = [\r
  {id: 'task-1', columnId: 'planned', title: '첫 방문 안내 문구 정리', description: '김하늘, 10월 29일 마감'},\r
  {id: 'task-2', columnId: 'planned', title: '고객 인터뷰 질문 준비', description: '이서준, 10월 30일 마감'},\r
  {id: 'task-3', columnId: 'active', title: '모바일 신청 흐름 개선', description: '박지우, 10월 28일 마감'},\r
  {id: 'task-4', columnId: 'active', title: '알림 설정 접근성 점검', description: '최도윤, 10월 29일 마감'},\r
  {id: 'task-5', columnId: 'done', title: '사용성 테스트 결과 공유', description: '김하늘, 10월 26일 완료'},\r
  {id: 'task-6', columnId: 'done', title: '공통 오류 메시지 통일', description: '이서준, 10월 25일 완료'},\r
];\r
const ideas = ['결제 실패 안내 문구 수정', '회원가입 약관 동의 단계 축소', '배송지 입력 자동 완성 개선', '환불 신청 화면 문구 정리'];\r
\r
function Demo() {\r
  const titleId = useId();\r
  const [cards, setCards] = useState(initialCards);\r
  const [query, setQuery] = useState('');\r
  const completed = cards.filter(card => card.columnId === 'done').length;\r
  const normalizedQuery = normalizeKorean(query.trim());\r
  const visibleCards = cards.filter(card => normalizeKorean(\`\${card.title} \${card.description ?? ''}\`).includes(normalizedQuery));\r
\r
  return <section aria-labelledby={titleId} style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <header style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
      <h2 id={titleId} className="catalog-block-title">서비스 개선 업무</h2>\r
      <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>10월 26일부터 30일까지 이번 주에 끝낼 일</p>\r
    </header>\r
    <Progress label="스프린트 완료율" value={completed} maxValue={cards.length} />\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-3)', alignItems: 'end'}}>\r
      <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
        <SearchInput label="업무 검색" placeholder="업무명 또는 담당자 검색" value={query} onChange={setQuery} />\r
      </div>\r
      <Button onPress={() => {\r
        setCards(current => [...current, {id: \`task-\${current.length + 1}\`, columnId: 'planned', title: ideas[(current.length - initialCards.length) % ideas.length]!, description: '담당자 미정'}]);\r
        setQuery('');\r
      }}>아이디어 추가</Button>\r
    </div>\r
    <KanbanBoard label="주간 서비스 개선 업무" columns={columns} cards={visibleCards}\r
      onCardsChange={next => setCards(current => {\r
        const visible = new Set(visibleCards.map(card => card.id));\r
        let index = 0;\r
        return current.map(card => visible.has(card.id) ? next[index++]! : card);\r
      })}\r
      moveLabel="상태 변경" emptyText="검색어와 맞는 업무가 없어요." />\r
  </section>;\r
}`,u=e(t(),1),d=n(),f=[{id:`planned`,title:`시작 전`},{id:`active`,title:`진행 중`},{id:`done`,title:`완료`}],p=[{id:`task-1`,columnId:`planned`,title:`첫 방문 안내 문구 정리`,description:`김하늘, 10월 29일 마감`},{id:`task-2`,columnId:`planned`,title:`고객 인터뷰 질문 준비`,description:`이서준, 10월 30일 마감`},{id:`task-3`,columnId:`active`,title:`모바일 신청 흐름 개선`,description:`박지우, 10월 28일 마감`},{id:`task-4`,columnId:`active`,title:`알림 설정 접근성 점검`,description:`최도윤, 10월 29일 마감`},{id:`task-5`,columnId:`done`,title:`사용성 테스트 결과 공유`,description:`김하늘, 10월 26일 완료`},{id:`task-6`,columnId:`done`,title:`공통 오류 메시지 통일`,description:`이서준, 10월 25일 완료`}],m=[`결제 실패 안내 문구 수정`,`회원가입 약관 동의 단계 축소`,`배송지 입력 자동 완성 개선`,`환불 신청 화면 문구 정리`];function h(){let e=(0,u.useId)(),[t,n]=(0,u.useState)(p),[s,l]=(0,u.useState)(``),h=t.filter(e=>e.columnId===`done`).length,g=c(s.trim()),_=t.filter(e=>c(`${e.title} ${e.description??``}`).includes(g));return(0,d.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,d.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,d.jsx)(`h2`,{id:e,className:`catalog-block-title`,children:`서비스 개선 업무`}),(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`10월 26일부터 30일까지 이번 주에 끝낼 일`})]}),(0,d.jsx)(i,{label:`스프린트 완료율`,value:h,maxValue:t.length}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-3)`,alignItems:`end`},children:[(0,d.jsx)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:(0,d.jsx)(a,{label:`업무 검색`,placeholder:`업무명 또는 담당자 검색`,value:s,onChange:l})}),(0,d.jsx)(r,{onPress:()=>{n(e=>[...e,{id:`task-${e.length+1}`,columnId:`planned`,title:m[(e.length-p.length)%m.length],description:`담당자 미정`}]),l(``)},children:`아이디어 추가`})]}),(0,d.jsx)(o,{label:`주간 서비스 개선 업무`,columns:f,cards:_,onCardsChange:e=>n(t=>{let n=new Set(_.map(e=>e.id)),r=0;return t.map(t=>n.has(t.id)?e[r++]:t)}),moveLabel:`상태 변경`,emptyText:`검색어와 맞는 업무가 없어요.`})]})}var g={id:`task-board`,title:`팀 업무 보드`,koreanTitle:`팀 업무 보드`,group:`blocks`,interactions:[`drag`,`press`,`type`],description:`주간 스프린트 업무를 검색하고 진행 상태를 바꾸며 완료율을 확인하는 업무 보드입니다. 카드를 옮기거나 추가한 내용은 이 미리보기 안에서만 유지됩니다.`,demo:h,behavior:[`보드는 테두리 없이 놓인 화면의 흐름을 따르고, 제목, 완료율, 검색, 열 순서로 쌓입니다.`,`손잡이로 카드를 끌어 순서를 바꾸거나 다른 열에 놓습니다. 상태 변경 버튼에서는 열과 위치를 고르고, 이동 후 포커스는 옮긴 카드로 돌아갑니다.`,`검색은 업무명과 담당자를 대소문자와 한글 정규화(NFC) 차이 없이 찾고, 맞는 카드가 없는 열에는 빈 문구를 표시합니다.`,`검색 중에 카드를 옮겨도 검색에서 가려진 카드는 그대로 남습니다.`,`아이디어 추가는 시작 전 열 끝에 담당자 미정 카드를 붙이고 검색어를 비웁니다.`,`완료율은 완료 열의 카드 수를 전체 카드 수로 나눈 값입니다.`],whenToUse:[`스프린트 업무를 열 사이로 옮기며 진행 상태와 완료율을 함께 확인하는 팀 보드에 씁니다.`,`업무명이나 담당자로 검색하면서도 보드 순서를 유지해야 하는 화면에 맞습니다.`],whenNot:[`단순한 체크 목록이면 TaskList를 씁니다.`,`일정을 시간 눈금 위에 배치하려면 Planner를 씁니다.`,`작업 기간을 막대로 비교하려면 GanttChart를 씁니다.`],aiNotes:[`이 페이지는 KanbanBoard, SearchInput, Progress, Button을 조합한 블록입니다. KanbanBoard에는 label, columns, cards, onCardsChange를 주고, 상태 변경 버튼 문구는 moveLabel로 정합니다.`,`검색으로 가려진 카드는 onCardsChange가 돌려준 목록에 섞이지 않으므로, 보이는 카드만 갱신한 뒤 원래 목록과 합칩니다.`,`완료율은 Progress에 value와 maxValue로 넘겨 계산해 보입니다.`],usage:s(l),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`시작 전 열에 개선 아이디어 추가.`},{name:`KanbanBoard`,type:`'@gyeol/ui'`,description:`업무의 세 단계 분류와 드래그 및 키보드 상태 변경.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`전체 업무 대비 완료 업무 비율 표시.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`업무명과 담당자로 업무 검색.`}]};export{g as doc};