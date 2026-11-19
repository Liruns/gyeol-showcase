import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-D-YxLYeO.js";import{r as i,t as a}from"./Avatar-BW1BSs3_.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./Card-Dztz7Yyx.js";import{t as f}from"./SearchInput-CCQl7WIy.js";import{u as p}from"./catalog-BaNsP87z.js";import{t as m}from"./usage-source-BdQLyNT5.js";import{n as h,t as g}from"./sample-media-Bp-56olh.js";var _=`const photoIds = {street: 'photo-1449824913935-59a10b8d2000', desk: 'photo-1449247709967-d4461a6a6103'} as const;\r
const imageUrl = (image: string, size: readonly [number, number]) => \`https://images.unsplash.com/\${image}?auto=format&fit=crop&w=\${size[0]}&q=\${size[1]}\`;
import {useRef, useState} from 'react';\r
import {Avatar, AvatarFallback, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Chip, SearchInput} from '@gyeol/ui';\r
\r
interface Reference {\r
  readonly id: string;\r
  readonly title: string;\r
  readonly category: '공간' | '타이포' | '오브제';\r
  readonly author: string;\r
  readonly initials: string;\r
  readonly note: string;\r
  readonly photo?: {readonly image: string; readonly alt: string};\r
}\r
\r
const references: readonly Reference[] = [\r
  {id: 'lounge', title: '라운지 창가 좌석 배치', category: '공간', author: '이서연', initials: '서연', note: '창가 6석, 좌석마다 콘센트 1개. 좌석 예약 화면의 사진 후보.', photo: {image: photoIds.desk, alt: '창가와 가구가 놓인 밝은 실내 공간'}},\r
  {id: 'leading', title: '본문 행간 1.5 시안', category: '타이포', author: '김도윤', initials: '도윤', note: '14px 본문, 자간 0. 모바일 390px 캡처.'},\r
  {id: 'nameplate', title: '회의실 명패 소재 비교', category: '오브제', author: '박지우', initials: '지우', note: '아크릴 3T와 자작나무 합판. 합판은 각인 깊이 0.5mm부터 글자가 또렷하다.'},\r
  {id: 'numerals', title: '안내 문구 숫자 표기', category: '타이포', author: '최다은', initials: '다은', note: '시간은 14:00, 기간은 11월 5일~7일. 물결표 앞뒤는 띄우지 않는다.'},\r
  {id: 'street', title: '사옥 앞 도로 촬영본', category: '공간', author: '정하늘', initials: '하늘', note: '오전 10시, 도로 가운데에서 남쪽을 보고 촬영. 앱 첫 화면 배경 후보.', photo: {image: photoIds.street, alt: '고층 건물 사이로 이어지는 넓은 도로'}},\r
  {id: 'lighting', title: '회의실 조명 색온도', category: '오브제', author: '한유진', initials: '유진', note: '4000K 기준. 화상 회의에서 얼굴색이 누렇게 뜨지 않는 값.'},\r
];\r
\r
\r
export function MasonryGrid() {\r
  const [query, setQuery] = useState('');\r
  const [category, setCategory] = useState('전체');\r
  const [savedOnly, setSavedOnly] = useState(false);\r
  const [saved, setSaved] = useState<string[]>(['lounge']);\r
  const searchRef = useRef<HTMLDivElement>(null);\r
  const visible = references.filter(item =>\r
    (category === '전체' || item.category === category) &&\r
    (!savedOnly || saved.includes(item.id)) &&\r
    (item.title + item.note + item.author).normalize('NFC').includes(query.trim().normalize('NFC')),\r
  );\r
  const reset = () => {\r
    setQuery(''); setCategory('전체'); setSavedOnly(false);\r
    searchRef.current?.querySelector('input')?.focus();\r
  };\r
  return <section aria-label="레퍼런스 보드" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>레퍼런스 보드</h2>\r
      <Button variant={savedOnly ? 'primary' : 'secondary'} aria-pressed={savedOnly} onPress={() => setSavedOnly(!savedOnly)}>저장한 항목 {saved.length}개</Button>\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: 'var(--g-space-4)'}}>\r
      <div ref={searchRef} style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}><SearchInput label="레퍼런스 검색" placeholder="제목, 메모, 작성자" value={query} onChange={setQuery}/></div>\r
      <div role="group" aria-label="분야" style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
        {['전체', '공간', '타이포', '오브제'].map(value => <Chip key={value} isSelectable isSelected={category === value} onSelectionChange={() => setCategory(value)}>{value}</Chip>)}\r
      </div>\r
    </div>\r
    <p role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', margin: 0}}>레퍼런스 {visible.length}개</p>\r
    {visible.length > 0 ? <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-4)', alignItems: 'flex-start'}}>\r
      {[0, 1, 2].map(column => <div key={column} style={{display: 'grid', gap: 'var(--g-space-4)', flex: '1 1 calc(var(--g-field-basis) + var(--g-space-10))', minWidth: 0}}>\r
        {visible.filter((_, index) => index % 3 === column).map(item => <Card key={item.id} style={item.photo ? {overflow: 'hidden', paddingBlockStart: 0, minWidth: 0} : {minWidth: 0}}>\r
          {item.photo && <CardContent style={{padding: 0}}>\r
            <img src={imageUrl(item.photo.image, [800, 80])} alt={item.photo.alt} loading="lazy" style={{display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover'}}/>\r
          </CardContent>}\r
          <CardHeader>\r
            <CardTitle>{item.title}</CardTitle>\r
            <CardDescription>{item.note}</CardDescription>\r
          </CardHeader>\r
          <CardFooter style={{justifyContent: 'space-between'}}>\r
            <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-2)', fontSize: 'var(--g-text-small)'}}><Avatar size="sm"><AvatarFallback label={item.author}>{item.initials}</AvatarFallback></Avatar>{item.author}</div>\r
            <Button variant="quiet" aria-label={item.title + (saved.includes(item.id) ? ' 저장 취소' : ' 저장')} aria-pressed={saved.includes(item.id)} onPress={() => setSaved(current => current.includes(item.id) ? current.filter(id => id !== item.id) : [...current, item.id])}>{saved.includes(item.id) ? '저장됨' : '저장'}</Button>\r
          </CardFooter>\r
        </Card>)}\r
      </div>)}\r
    </div> : <div style={{display: 'grid', justifyItems: 'start', gap: 'var(--g-space-3)', paddingBlock: 'var(--g-space-4)'}}>\r
      <p style={{margin: 0}}>검색 결과가 없어요.</p>\r
      <Button variant="secondary" onPress={reset}>필터 초기화</Button>\r
    </div>}\r
  </section>;\r
}`,v=e(t(),1),y=n(),b=[{id:`lounge`,title:`라운지 창가 좌석 배치`,category:`공간`,author:`이서연`,initials:`서연`,note:`창가 6석, 좌석마다 콘센트 1개. 좌석 예약 화면의 사진 후보.`,photo:{image:h.desk,alt:`창가와 가구가 놓인 밝은 실내 공간`}},{id:`leading`,title:`본문 행간 1.5 시안`,category:`타이포`,author:`김도윤`,initials:`도윤`,note:`14px 본문, 자간 0. 모바일 390px 캡처.`},{id:`nameplate`,title:`회의실 명패 소재 비교`,category:`오브제`,author:`박지우`,initials:`지우`,note:`아크릴 3T와 자작나무 합판. 합판은 각인 깊이 0.5mm부터 글자가 또렷하다.`},{id:`numerals`,title:`안내 문구 숫자 표기`,category:`타이포`,author:`최다은`,initials:`다은`,note:`시간은 14:00, 기간은 11월 5일~7일. 물결표 앞뒤는 띄우지 않는다.`},{id:`street`,title:`사옥 앞 도로 촬영본`,category:`공간`,author:`정하늘`,initials:`하늘`,note:`오전 10시, 도로 가운데에서 남쪽을 보고 촬영. 앱 첫 화면 배경 후보.`,photo:{image:h.street,alt:`고층 건물 사이로 이어지는 넓은 도로`}},{id:`lighting`,title:`회의실 조명 색온도`,category:`오브제`,author:`한유진`,initials:`유진`,note:`4000K 기준. 화상 회의에서 얼굴색이 누렇게 뜨지 않는 값.`}];function x(){let[e,t]=(0,v.useState)(``),[n,m]=(0,v.useState)(`전체`),[h,_]=(0,v.useState)(!1),[x,S]=(0,v.useState)([`lounge`]),C=(0,v.useRef)(null),w=b.filter(t=>(n===`전체`||t.category===n)&&(!h||x.includes(t.id))&&(t.title+t.note+t.author).normalize(`NFC`).includes(e.trim().normalize(`NFC`)));return(0,y.jsxs)(`section`,{"aria-label":`레퍼런스 보드`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0},children:[(0,y.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,y.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`레퍼런스 보드`}),(0,y.jsxs)(r,{variant:h?`primary`:`secondary`,"aria-pressed":h,onPress:()=>_(!h),children:[`저장한 항목 `,x.length,`개`]})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,gap:`var(--g-space-4)`},children:[(0,y.jsx)(`div`,{ref:C,style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:(0,y.jsx)(f,{label:`레퍼런스 검색`,placeholder:`제목, 메모, 작성자`,value:e,onChange:t})}),(0,y.jsx)(`div`,{role:`group`,"aria-label":`분야`,style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[`전체`,`공간`,`타이포`,`오브제`].map(e=>(0,y.jsx)(p,{isSelectable:!0,isSelected:n===e,onSelectionChange:()=>m(e),children:e},e))})]}),(0,y.jsxs)(`p`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,margin:0},children:[`레퍼런스 `,w.length,`개`]}),w.length>0?(0,y.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-4)`,alignItems:`flex-start`},children:[0,1,2].map(e=>(0,y.jsx)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,flex:`1 1 calc(var(--g-field-basis) + var(--g-space-10))`,minWidth:0},children:w.filter((t,n)=>n%3===e).map(e=>(0,y.jsxs)(d,{style:e.photo?{overflow:`hidden`,paddingBlockStart:0,minWidth:0}:{minWidth:0},children:[e.photo&&(0,y.jsx)(c,{style:{padding:0},children:(0,y.jsx)(`img`,{src:g(e.photo.image,[800,80]),alt:e.photo.alt,loading:`lazy`,style:{display:`block`,width:`100%`,aspectRatio:`4 / 3`,objectFit:`cover`}})}),(0,y.jsxs)(o,{children:[(0,y.jsx)(l,{children:e.title}),(0,y.jsx)(u,{children:e.note})]}),(0,y.jsxs)(s,{style:{justifyContent:`space-between`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`,fontSize:`var(--g-text-small)`},children:[(0,y.jsx)(a,{size:`sm`,children:(0,y.jsx)(i,{label:e.author,children:e.initials})}),e.author]}),(0,y.jsx)(r,{variant:`quiet`,"aria-label":e.title+(x.includes(e.id)?` 저장 취소`:` 저장`),"aria-pressed":x.includes(e.id),onPress:()=>S(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id]),children:x.includes(e.id)?`저장됨`:`저장`})]})]},e.id))},e))}):(0,y.jsxs)(`div`,{style:{display:`grid`,justifyItems:`start`,gap:`var(--g-space-3)`,paddingBlock:`var(--g-space-4)`},children:[(0,y.jsx)(`p`,{style:{margin:0},children:`검색 결과가 없어요.`}),(0,y.jsx)(r,{variant:`secondary`,onPress:()=>{t(``),m(`전체`),_(!1),C.current?.querySelector(`input`)?.focus()},children:`필터 초기화`})]})]})}var S={id:`masonry-grid`,title:`레퍼런스 보드`,koreanTitle:`레퍼런스 보드`,group:`blocks`,interactions:[`press`,`type`,`select`],description:`높이가 다른 카드를 세 열로 쌓은 디자인 레퍼런스 보드입니다. 사진이 있는 카드와 메모만 있는 카드가 섞여도 각 카드는 내용만큼만 높아집니다.`,demo:x,behavior:[`검색은 제목, 메모, 작성자를 NFC로 정규화해 비교하므로 조합형으로 입력한 한글도 찾습니다.`,`분야 칩, 저장한 항목 버튼, 검색어는 함께 적용되고 남은 개수를 상태 메시지로 알립니다.`,`결과가 없을 때 필터 초기화를 누르면 검색어, 분야, 저장 필터를 모두 지우고 포커스를 검색 칸으로 옮깁니다.`,`좁은 화면에서는 세 열이 한 열로 쌓이며, 카드는 열 순서대로 이어집니다.`],whenToUse:[`디자인 레퍼런스처럼 사진이 있는 카드와 메모만 있는 카드가 섞인 모음을 높이에 맞춰 쌓아 보여 줄 때 씁니다.`,`분야와 저장 여부로 거르고 제목, 메모, 작성자를 검색하는 스크랩 보드에 맞습니다.`],whenNot:[`같은 크기의 사진을 격자로 나열하면 PhotoGrid를 씁니다.`,`행 단위로 정보를 읽는 목록은 ListItem을 씁니다.`,`열마다 값을 비교하는 데이터는 DataTable을 씁니다.`],aiNotes:[`props 없이 Avatar, Button, Card, Chip, SearchInput을 조합한 블록이므로 usage의 소스를 복사해 레퍼런스 데이터를 바꿉니다.`,`검색어, 분야 칩, 저장한 항목 필터는 함께 적용되고 남은 개수를 상태 메시지로 알립니다. 결과가 없을 때 필터 초기화가 세 조건을 모두 지우고 검색 칸으로 포커스를 옮기도록 유지합니다.`,`각 카드는 저장할 수 있는 독립된 대상이라 Card의 테두리를 씁니다. 다른 화면에서 목록 전체를 감싸지 않습니다.`],usage:m(_),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`작성자의 프로필을 표시합니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 대신 작성자 이름을 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`저장, 저장한 항목 필터, 필터 초기화를 맡습니다.`},{name:`Card`,type:`'@gyeol/ui'`,description:`레퍼런스 하나를 묶습니다. 저장할 수 있는 독립된 대상이라 테두리를 둡니다.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`사진이 있는 레퍼런스의 사진 영역입니다.`},{name:`CardDescription`,type:`'@gyeol/ui'`,description:`레퍼런스 메모입니다.`},{name:`CardFooter`,type:`'@gyeol/ui'`,description:`작성자와 저장 버튼입니다.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`제목과 메모를 묶습니다.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`레퍼런스 제목입니다.`},{name:`Chip`,type:`'@gyeol/ui'`,description:`분야를 하나 고르는 필터입니다.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`제목, 메모, 작성자를 검색합니다.`}]};export{x as MasonryGrid,S as doc};