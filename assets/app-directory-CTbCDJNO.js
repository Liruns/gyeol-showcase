import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r,s as i}from"./boot-Cx46XDKr.js";import{t as a}from"./SegmentedControl-DTMmujVB.js";import{t as o}from"./SearchInput-ZQqk5MAw.js";import{t as s}from"./usage-source-BdQLyNT5.js";import{a as c}from"./values-DbzGm6xY.js";var l=`const normalizeKorean = (text: string) => text.normalize('NFC').toLocaleLowerCase('ko-KR');\r
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
import {Button, EmptyState, SearchInput, SegmentedControl} from '@gyeol/ui';\r
\r
const apps = [\r
  {id: 'notes', name: '팀 노트', mark: '노', category: '협업', description: '회의록과 아이디어 공동 편집'},\r
  {id: 'schedule', name: '함께 일정', mark: '일', category: '협업', description: '팀 공유 일정과 회의 예약'},\r
  {id: 'files', name: '파일 보관함', mark: '함', category: '생산성', description: '프로젝트 파일 공유와 버전 관리'},\r
  {id: 'tasks', name: '오늘 할 일', mark: '할', category: '생산성', description: '할 일과 마감 알림'},\r
  {id: 'insight', name: '데이터 렌즈', mark: '데', category: '분석', description: '업무 데이터 대시보드와 주간 보고서'},\r
  {id: 'pulse', name: '팀 온도', mark: '온', category: '분석', description: '익명 설문과 참여 분석'},\r
];\r
const categories = ['전체', '협업', '생산성', '분석', '연결됨'];\r
\r
function AppDirectory() {\r
  const [query, setQuery] = useState('');\r
  const [category, setCategory] = useState('전체');\r
  const [connected, setConnected] = useState(['notes', 'schedule']);\r
  const [notice, setNotice] = useState('');\r
  const visible = apps.filter(app =>\r
    (category === '전체' || (category === '연결됨' ? connected.includes(app.id) : app.category === category)) &&\r
    normalizeKorean(\`\${app.name} \${app.category} \${app.description}\`).includes(normalizeKorean(query.trim())));\r
  return <section aria-label="워크스페이스 앱 디렉터리" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>앱 디렉터리</h2>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: 'var(--g-space-3)', minWidth: 0}}>\r
      <div style={{flex: '1 1 calc(var(--g-field-basis) * 1.5)', minWidth: 0}}>\r
        <SearchInput label="앱 검색" value={query} onChange={setQuery} placeholder="예: 회의록, 일정" clearLabel="앱 검색어 지우기"/>\r
      </div>\r
      <div style={{minWidth: 0, maxWidth: '100%'}}>\r
        <SegmentedControl label="앱 분류" value={category} onChange={setCategory}\r
          options={categories.map(item => ({value: item, label: item === '연결됨' ? \`연결됨 \${connected.length}\` : item}))}/>\r
      </div>\r
    </div>\r
    <div style={{display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--g-space-2)'}}>\r
        <h3 style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>{category === '전체' ? '모든 앱' : category === '연결됨' ? '연결된 앱' : \`\${category} 앱\`}</h3>\r
        <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>앱 {visible.length}개</span>\r
      </div>\r
      {visible.length > 0\r
        ? <ul style={{margin: 0, padding: 0, listStyle: 'none', minWidth: 0}}>\r
          {visible.map((app, index) => {\r
            const isConnected = connected.includes(app.id);\r
            return <li key={app.id} style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-3)', minHeight: 'calc(var(--g-space) * 14)', paddingBlock: 'var(--g-space-2)', borderBlockStart: index === 0 ? 'none' : 'var(--g-border-width) solid var(--g-border)'}}>\r
              <span aria-hidden="true" style={{display: 'grid', placeItems: 'center', flex: 'none', width: 'var(--g-space-8)', height: 'var(--g-space-8)', borderRadius: 'var(--g-radius-small)', background: 'var(--g-soft)', fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)'}}>{app.mark}</span>\r
              <div style={{flex: 1, minWidth: 0}}>\r
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 'var(--g-space-2)'}}>\r
                  <strong style={{fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)'}}>{app.name}</strong>\r
                  <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{app.category}</span>\r
                </div>\r
                <p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'}}>{app.description}</p>\r
              </div>\r
              <Button variant={isConnected ? 'quiet' : 'secondary'} aria-label={\`\${app.name} \${isConnected ? '연결 해제' : '앱 연결'}\`} style={{flex: 'none'}} onPress={() => {\r
                setConnected(current => isConnected ? current.filter(id => id !== app.id) : [...current, app.id]);\r
                setNotice(\`\${app.name} \${isConnected ? '연결을 해제했어요.' : '앱을 연결했어요.'}\`);\r
              }}>{isConnected ? '연결 해제' : '앱 연결'}</Button>\r
            </li>;\r
          })}\r
        </ul>\r
        : <EmptyState variant="search" headingLevel={4} title="조건에 맞는 앱이 없어요." actionLabel="모든 앱 보기" actionVariant="secondary" onAction={() => {setQuery(''); setCategory('전체');}}/>}\r
    </div>\r
    <p role="status" style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'}}>{notice}</p>\r
  </section>;\r
}`,u=e(t(),1),d=n(),f=[{id:`notes`,name:`팀 노트`,mark:`노`,category:`협업`,description:`회의록과 아이디어 공동 편집`},{id:`schedule`,name:`함께 일정`,mark:`일`,category:`협업`,description:`팀 공유 일정과 회의 예약`},{id:`files`,name:`파일 보관함`,mark:`함`,category:`생산성`,description:`프로젝트 파일 공유와 버전 관리`},{id:`tasks`,name:`오늘 할 일`,mark:`할`,category:`생산성`,description:`할 일과 마감 알림`},{id:`insight`,name:`데이터 렌즈`,mark:`데`,category:`분석`,description:`업무 데이터 대시보드와 주간 보고서`},{id:`pulse`,name:`팀 온도`,mark:`온`,category:`분석`,description:`익명 설문과 참여 분석`}],p=[`전체`,`협업`,`생산성`,`분석`,`연결됨`];function m(){let[e,t]=(0,u.useState)(``),[n,s]=(0,u.useState)(`전체`),[l,m]=(0,u.useState)([`notes`,`schedule`]),[h,g]=(0,u.useState)(``),_=f.filter(t=>(n===`전체`||(n===`연결됨`?l.includes(t.id):t.category===n))&&c(`${t.name} ${t.category} ${t.description}`).includes(c(e.trim())));return(0,d.jsxs)(`section`,{"aria-label":`워크스페이스 앱 디렉터리`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0},children:[(0,d.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`앱 디렉터리`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,d.jsx)(`div`,{style:{flex:`1 1 calc(var(--g-field-basis) * 1.5)`,minWidth:0},children:(0,d.jsx)(o,{label:`앱 검색`,value:e,onChange:t,placeholder:`예: 회의록, 일정`,clearLabel:`앱 검색어 지우기`})}),(0,d.jsx)(`div`,{style:{minWidth:0,maxWidth:`100%`},children:(0,d.jsx)(a,{label:`앱 분류`,value:n,onChange:s,options:p.map(e=>({value:e,label:e===`연결됨`?`연결됨 ${l.length}`:e}))})})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`,minWidth:0},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,d.jsx)(`h3`,{style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:n===`전체`?`모든 앱`:n===`연결됨`?`연결된 앱`:`${n} 앱`}),(0,d.jsxs)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:[`앱 `,_.length,`개`]})]}),_.length>0?(0,d.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`,minWidth:0},children:_.map((e,t)=>{let n=l.includes(e.id);return(0,d.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-3)`,minHeight:`calc(var(--g-space) * 14)`,paddingBlock:`var(--g-space-2)`,borderBlockStart:t===0?`none`:`var(--g-border-width) solid var(--g-border)`},children:[(0,d.jsx)(`span`,{"aria-hidden":`true`,style:{display:`grid`,placeItems:`center`,flex:`none`,width:`var(--g-space-8)`,height:`var(--g-space-8)`,borderRadius:`var(--g-radius-small)`,background:`var(--g-soft)`,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`},children:e.mark}),(0,d.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,columnGap:`var(--g-space-2)`},children:[(0,d.jsx)(`strong`,{style:{fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`},children:e.name}),(0,d.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:e.category})]}),(0,d.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-body)`},children:e.description})]}),(0,d.jsx)(r,{variant:n?`quiet`:`secondary`,"aria-label":`${e.name} ${n?`연결 해제`:`앱 연결`}`,style:{flex:`none`},onPress:()=>{m(t=>n?t.filter(t=>t!==e.id):[...t,e.id]),g(`${e.name} ${n?`연결을 해제했어요.`:`앱을 연결했어요.`}`)},children:n?`연결 해제`:`앱 연결`})]},e.id)})}):(0,d.jsx)(i,{variant:`search`,headingLevel:4,title:`조건에 맞는 앱이 없어요.`,actionLabel:`모든 앱 보기`,actionVariant:`secondary`,onAction:()=>{t(``),s(`전체`)}})]}),(0,d.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-body)`},children:h})]})}var h={id:`app-directory`,title:`앱 디렉터리`,koreanTitle:`앱 디렉터리`,group:`blocks`,interactions:[`type`,`select`,`press`],description:`앱을 검색하고 분류별로 찾아 워크스페이스에 연결하거나 연결을 해제하는 화면입니다.`,demo:m,behavior:[`검색어는 앱 이름, 분류, 설명에서 찾습니다. 한글은 NFC로 맞춘 뒤 대소문자를 구분하지 않고 비교합니다.`,`분류는 하나만 고릅니다. 연결됨은 지금 연결된 앱만 보여 주고, 연결 수가 바뀌면 그 라벨의 숫자도 바뀝니다.`,`앱 한 개는 한 행입니다. 연결하지 않은 앱에는 앱 연결, 연결한 앱에는 연결 해제가 있고, 행 사이는 구분선 하나로 나눕니다.`,`연결과 해제 결과는 목록 아래 상태 문구로, 보이는 앱 개수는 목록 제목 옆 상태 문구로 보조 기술에 알립니다.`,`조건에 맞는 앱이 없으면 빈 상태가 나오고, 모든 앱 보기가 검색어와 분류를 함께 처음으로 돌립니다.`,`연결 상태는 화면 상태로만 유지하고, 새로 고치면 처음 상태로 돌아갑니다.`],whenToUse:[`워크스페이스에 연결할 앱을 이름이나 분류로 찾아 연결하고 해제하는 설정 화면에서 씁니다.`,`연결된 앱만 모아 지금 무엇이 붙어 있는지 점검할 때도 맞습니다.`],whenNot:[`앱 하나의 인증 정보와 권한을 입력하는 단계는 ConnectorSetup을 씁니다.`,`연동 서비스 중 하나만 고르는 단계는 IntegrationPicker를 씁니다.`,`이미 연결한 연동의 세부 설정은 IntegrationSettings를 씁니다.`],aiNotes:[`props 없이 Button, SearchInput, SegmentedControl, EmptyState를 조합한 블록이므로 usage의 소스를 복사해 앱 목록을 바꿉니다.`,`연결 상태는 화면 상태로만 유지하고 새로 고치면 처음으로 돌아갑니다. 저장은 호출하는 쪽에서 붙입니다.`,`연결과 해제 결과, 보이는 앱 개수는 상태 문구로 보조 기술에 알리므로 목록을 바꿔도 이 문구를 남깁니다.`],usage:s(l),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`앱 연결과 연결 해제.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`앱 이름, 분류, 설명 검색과 검색어 지우기.`},{name:`SegmentedControl`,type:`'@gyeol/ui'`,description:`앱 분류와 연결된 앱 보기.`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`검색 결과가 없을 때의 문장과 모든 앱 보기.`}]};export{h as doc};