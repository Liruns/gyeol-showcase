import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r,s as i}from"./boot-BmrkG5t5.js";import{t as a}from"./SegmentedControl-YcNYzJX6.js";import{t as o}from"./SearchInput-BrPg9EFJ.js";import{t as s}from"./usage-source-BdQLyNT5.js";import{a as c}from"./values-DbzGm6xY.js";var l=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {useRef, useState} from 'react';\r
import {Button, EmptyState, SearchInput, SegmentedControl} from '@gyeol/ui';\r
\r
const conversations = [\r
  {id: 'launch', group: '오늘', title: '가을 캠페인 소개 문구', summary: '따뜻한 톤으로 다듬은 캠페인 카피와 채널별 메시지', category: '글쓰기', date: '10월 26일', time: '오전 10:42', count: 12, question: '가을 캠페인에 어울리는 짧은 소개 문구를 써 줘.', answer: '일상에 작은 여유를 더하는 계절. 이번 가을에는 나에게 맞는 속도로 새로운 취향을 만나 보세요.'},\r
  {id: 'research', group: '오늘', title: '인터뷰 메모 정리', summary: '사용자 인터뷰 5건에서 반복된 의견 정리', category: '리서치', date: '10월 26일', time: '오전 9:15', count: 8, question: '인터뷰 메모에서 반복되는 의견을 묶어 줘.', answer: '처음 시작할 때의 안내, 검색 결과의 정확도, 작업을 이어가는 흐름이 공통 주제였어요. 다음 인터뷰에서는 단계마다 어디서 막혔는지 물어보면 좋겠어요.'},\r
  {id: 'meeting', group: '어제', title: '10월 4주차 주간 회의 정리', summary: '주간 회의의 결정 사항과 담당자별 다음 할 일', category: '업무', date: '10월 25일', time: '오후 4:30', count: 6, question: '회의 내용을 다음 할 일 중심으로 정리해 줘.', answer: '기획안은 수요일까지 보완하고 디자인 검토는 목요일에 해요. 담당자는 검토 전에 질문을 미리 공유해 주세요.'},\r
  {id: 'weekend', group: '지난 7일', title: '비 오는 날 반나절 코스', summary: '실내 전시와 동네 서점으로 채운 반나절 산책 코스', category: '일상', date: '10월 23일', time: '오후 7:08', count: 10, question: '비 오는 날에도 즐길 수 있는 반나절 코스를 추천해 줘.', answer: '오전에는 작은 전시를 보고 가까운 서점에서 책을 골라 보세요. 오후에는 창가 자리가 있는 카페에서 쉬는 일정이 좋겠어요.'},\r
];\r
\r
const caption = {color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'} as const;\r
\r
function ChatHistory() {\r
  const [query, setQuery] = useState('');\r
  const [view, setView] = useState('all');\r
  const [saved, setSaved] = useState(['launch']);\r
  const [selected, setSelected] = useState<string | null>(null);\r
  const search = useRef<HTMLDivElement>(null);\r
  const savedOnly = view === 'saved';\r
  const needle = normalizeKorean(query.trim());\r
  const filtered = conversations.filter(item => (!savedOnly || saved.includes(item.id)) && normalizeKorean(\`\${item.title} \${item.summary} \${item.category}\`).includes(needle));\r
  const current = conversations.find(item => item.id === selected);\r
  // The empty state's button unmounts with it, so focus goes back to the search field.\r
  const focusSearch = () => search.current?.querySelector('input')?.focus();\r
\r
  return <section aria-label="대화 보관함" style={{display: 'grid', gap: 'var(--g-space-6)', width: '100%', minWidth: 0, color: 'var(--g-ink)', overflowWrap: 'anywhere'}}>\r
    <div style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>대화 보관함</h2>\r
      <div ref={search} style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
        <SearchInput label="대화 검색" placeholder="제목, 내용 또는 주제로 검색" value={query} onChange={setQuery} clearLabel="대화 검색어 지우기" />\r
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
          <SegmentedControl label="대화 보기" value={view} onChange={setView} options={[{value: 'all', label: \`전체 \${conversations.length}\`}, {value: 'saved', label: \`저장 \${saved.length}\`}]} />\r
          <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontVariantNumeric: 'tabular-nums'}}>대화 {filtered.length}개</span>\r
        </div>\r
      </div>\r
    </div>\r
    {filtered.length === 0 && (needle\r
      ? <EmptyState variant="search" title="검색어와 일치하는 대화가 없어요." actionLabel="검색어 지우기" actionVariant="secondary" onAction={() => {setQuery(''); focusSearch();}} />\r
      : <EmptyState variant="archive" title="저장한 대화가 없어요." actionLabel="전체 대화 보기" actionVariant="secondary" onAction={() => {setView('all'); focusSearch();}} />)}\r
    {['오늘', '어제', '지난 7일'].map(group => {\r
      const items = filtered.filter(item => item.group === group);\r
      return items.length > 0 && <section key={group} aria-label={group} style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
        <h3 style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontWeight: 'var(--g-weight-medium)'}}>{group}</h3>\r
        <ul style={{margin: 0, padding: 0, listStyle: 'none', minWidth: 0}}>\r
          {items.map(item => <li key={item.id} style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'var(--g-space-4)', rowGap: 'var(--g-space-2)', paddingBlock: 'var(--g-space-3)', borderBlockEnd: 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
            <div style={{flex: '1 1 18rem', minWidth: 0, display: 'grid', gap: 'var(--g-space-1)'}}>\r
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 'var(--g-space-2)'}}>\r
                <h4 style={{margin: 0, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-body)'}}>{item.title}</h4>\r
                <span style={caption}>{item.category}</span>\r
              </div>\r
              <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-compact)', lineHeight: 'var(--g-leading-body)'}}>{item.summary}</p>\r
            </div>\r
            <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-4)', marginInlineStart: 'auto'}}>\r
              <div style={{display: 'flex', gap: 'var(--g-space-2)'}}>\r
                <Button variant="quiet" aria-label={\`\${item.title} 저장\`} aria-pressed={saved.includes(item.id)} onPress={() => setSaved(previous => previous.includes(item.id) ? previous.filter(id => id !== item.id) : [...previous, item.id])}>{saved.includes(item.id) ? '저장됨' : '저장'}</Button>\r
                <Button variant="secondary" aria-expanded={selected === item.id} onPress={() => setSelected(selected === item.id ? null : item.id)}>{selected === item.id ? '닫기' : '대화 보기'}</Button>\r
              </div>\r
              <div style={{...caption, display: 'grid', justifyItems: 'end', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'}}>\r
                <span>{group === '지난 7일' ? \`\${item.date} \${item.time}\` : item.time}</span>\r
                <span>메시지 {item.count}개</span>\r
              </div>\r
            </div>\r
            {current?.id === item.id && <section aria-label={\`\${current.title} 대화 미리보기\`} style={{flexBasis: '100%', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', paddingTop: 'var(--g-space-3)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
              <div><strong style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', fontWeight: 'var(--g-weight-medium)'}}>나</strong><p style={{margin: 'var(--g-space-1) 0 0', lineHeight: 'var(--g-leading-body)'}}>{current.question}</p></div>\r
              <div><strong style={{fontSize: 'var(--g-text-small)'}}>도우미</strong><p style={{margin: 'var(--g-space-1) 0 0', lineHeight: 'var(--g-leading-body)'}}>{current.answer}</p></div>\r
            </section>}\r
          </li>)}\r
        </ul>\r
      </section>;\r
    })}\r
  </section>;\r
}`,u=e(t(),1),d=n(),f=[{id:`launch`,group:`오늘`,title:`가을 캠페인 소개 문구`,summary:`따뜻한 톤으로 다듬은 캠페인 카피와 채널별 메시지`,category:`글쓰기`,date:`10월 26일`,time:`오전 10:42`,count:12,question:`가을 캠페인에 어울리는 짧은 소개 문구를 써 줘.`,answer:`일상에 작은 여유를 더하는 계절. 이번 가을에는 나에게 맞는 속도로 새로운 취향을 만나 보세요.`},{id:`research`,group:`오늘`,title:`인터뷰 메모 정리`,summary:`사용자 인터뷰 5건에서 반복된 의견 정리`,category:`리서치`,date:`10월 26일`,time:`오전 9:15`,count:8,question:`인터뷰 메모에서 반복되는 의견을 묶어 줘.`,answer:`처음 시작할 때의 안내, 검색 결과의 정확도, 작업을 이어가는 흐름이 공통 주제였어요. 다음 인터뷰에서는 단계마다 어디서 막혔는지 물어보면 좋겠어요.`},{id:`meeting`,group:`어제`,title:`10월 4주차 주간 회의 정리`,summary:`주간 회의의 결정 사항과 담당자별 다음 할 일`,category:`업무`,date:`10월 25일`,time:`오후 4:30`,count:6,question:`회의 내용을 다음 할 일 중심으로 정리해 줘.`,answer:`기획안은 수요일까지 보완하고 디자인 검토는 목요일에 해요. 담당자는 검토 전에 질문을 미리 공유해 주세요.`},{id:`weekend`,group:`지난 7일`,title:`비 오는 날 반나절 코스`,summary:`실내 전시와 동네 서점으로 채운 반나절 산책 코스`,category:`일상`,date:`10월 23일`,time:`오후 7:08`,count:10,question:`비 오는 날에도 즐길 수 있는 반나절 코스를 추천해 줘.`,answer:`오전에는 작은 전시를 보고 가까운 서점에서 책을 골라 보세요. 오후에는 창가 자리가 있는 카페에서 쉬는 일정이 좋겠어요.`}],p={color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`};function m(){let[e,t]=(0,u.useState)(``),[n,s]=(0,u.useState)(`all`),[l,m]=(0,u.useState)([`launch`]),[h,g]=(0,u.useState)(null),_=(0,u.useRef)(null),v=n===`saved`,y=c(e.trim()),b=f.filter(e=>(!v||l.includes(e.id))&&c(`${e.title} ${e.summary} ${e.category}`).includes(y)),x=f.find(e=>e.id===h),S=()=>_.current?.querySelector(`input`)?.focus();return(0,d.jsxs)(`section`,{"aria-label":`대화 보관함`,style:{display:`grid`,gap:`var(--g-space-6)`,width:`100%`,minWidth:0,color:`var(--g-ink)`,overflowWrap:`anywhere`},children:[(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,d.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`대화 보관함`}),(0,d.jsxs)(`div`,{ref:_,style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsx)(o,{label:`대화 검색`,placeholder:`제목, 내용 또는 주제로 검색`,value:e,onChange:t,clearLabel:`대화 검색어 지우기`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,d.jsx)(a,{label:`대화 보기`,value:n,onChange:s,options:[{value:`all`,label:`전체 ${f.length}`},{value:`saved`,label:`저장 ${l.length}`}]}),(0,d.jsxs)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontVariantNumeric:`tabular-nums`},children:[`대화 `,b.length,`개`]})]})]})]}),b.length===0&&(y?(0,d.jsx)(i,{variant:`search`,title:`검색어와 일치하는 대화가 없어요.`,actionLabel:`검색어 지우기`,actionVariant:`secondary`,onAction:()=>{t(``),S()}}):(0,d.jsx)(i,{variant:`archive`,title:`저장한 대화가 없어요.`,actionLabel:`전체 대화 보기`,actionVariant:`secondary`,onAction:()=>{s(`all`),S()}})),[`오늘`,`어제`,`지난 7일`].map(e=>{let t=b.filter(t=>t.group===e);return t.length>0&&(0,d.jsxs)(`section`,{"aria-label":e,style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,d.jsx)(`h3`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontWeight:`var(--g-weight-medium)`},children:e}),(0,d.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`,minWidth:0},children:t.map(t=>(0,d.jsxs)(`li`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,columnGap:`var(--g-space-4)`,rowGap:`var(--g-space-2)`,paddingBlock:`var(--g-space-3)`,borderBlockEnd:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,d.jsxs)(`div`,{style:{flex:`1 1 18rem`,minWidth:0,display:`grid`,gap:`var(--g-space-1)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,columnGap:`var(--g-space-2)`},children:[(0,d.jsx)(`h4`,{style:{margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-body)`},children:t.title}),(0,d.jsx)(`span`,{style:p,children:t.category})]}),(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-compact)`,lineHeight:`var(--g-leading-body)`},children:t.summary})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-4)`,marginInlineStart:`auto`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(r,{variant:`quiet`,"aria-label":`${t.title} 저장`,"aria-pressed":l.includes(t.id),onPress:()=>m(e=>e.includes(t.id)?e.filter(e=>e!==t.id):[...e,t.id]),children:l.includes(t.id)?`저장됨`:`저장`}),(0,d.jsx)(r,{variant:`secondary`,"aria-expanded":h===t.id,onPress:()=>g(h===t.id?null:t.id),children:h===t.id?`닫기`:`대화 보기`})]}),(0,d.jsxs)(`div`,{style:{...p,display:`grid`,justifyItems:`end`,fontVariantNumeric:`tabular-nums`,whiteSpace:`nowrap`},children:[(0,d.jsx)(`span`,{children:e===`지난 7일`?`${t.date} ${t.time}`:t.time}),(0,d.jsxs)(`span`,{children:[`메시지 `,t.count,`개`]})]})]}),x?.id===t.id&&(0,d.jsxs)(`section`,{"aria-label":`${x.title} 대화 미리보기`,style:{flexBasis:`100%`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,paddingTop:`var(--g-space-3)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,fontWeight:`var(--g-weight-medium)`},children:`나`}),(0,d.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`,lineHeight:`var(--g-leading-body)`},children:x.question})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{style:{fontSize:`var(--g-text-small)`},children:`도우미`}),(0,d.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`,lineHeight:`var(--g-leading-body)`},children:x.answer})]})]})]},t.id))})]},e)})]})}var h={id:`chat-history`,title:`대화 기록`,koreanTitle:`대화 기록`,group:`blocks`,interactions:[`press`,`type`,`select`],description:`날짜별로 묶은 지난 대화 목록입니다. 제목과 요약으로 찾고, 저장한 대화만 따로 봅니다.`,demo:m,behavior:[`목록은 오늘, 어제, 지난 7일로 묶고, 대화가 없는 묶음은 그리지 않습니다. 대화마다 카드 없이 한 줄씩 구분선으로 나눕니다.`,`검색은 제목, 요약, 주제를 NFC로 정규화해 비교하므로 조합 방식이 다른 한글도 같은 글자로 찾습니다.`,`대화 수는 role="status"로 알려, 검색어를 바꿀 때마다 보조 기술이 결과 수를 읽습니다.`,`저장 버튼은 aria-pressed로 저장 여부를, 대화 보기 버튼은 aria-expanded로 미리보기 펼침을 알립니다.`,`결과가 없을 때 검색어 지우기나 전체 대화 보기를 누르면 버튼이 사라지므로 포커스를 검색창으로 옮깁니다.`],whenToUse:[`지난 AI 대화를 오늘, 어제, 지난 7일로 묶어 훑고 제목과 요약으로 찾아 다시 열 때 씁니다.`,`저장한 대화만 따로 모아 보는 보관 화면이 필요할 때 씁니다.`],whenNot:[`지금 진행 중인 대화 화면은 Chat이 맡습니다.`,`대화 옆에 늘 붙여 두는 목록은 AssistantSidebar가 맞습니다.`,`대화가 아닌 일반 기록을 정렬하며 훑을 때는 DataTable을 씁니다.`],aiNotes:[`가져다 쓸 ChatHistory 컴포넌트는 없고 SearchInput, SegmentedControl, Button, EmptyState를 조합한 예시 블록입니다.`,`결과 수는 role="status"로 알려야 검색어를 바꿀 때마다 보조 기술이 결과 수를 읽습니다.`,`결과 없음 화면의 되돌리기 버튼을 누르면 버튼이 사라지므로 포커스를 검색창으로 옮깁니다. 저장 버튼은 aria-pressed, 미리보기 버튼은 aria-expanded로 상태를 알립니다.`],usage:s(l),props:[{name:`SearchInput`,type:`'@gyeol/ui'`,description:`제목, 요약, 주제 검색`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`전체 대화와 저장한 대화 전환`},{name:`Button`,type:`'@gyeol/ui'`,description:`대화 저장 전환과 미리보기 펼치기`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`검색 결과 없음, 저장한 대화 없음과 복귀 동작`}]};export{h as doc};