import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r,s as i}from"./boot-Cx46XDKr.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./Card-DPX2bTfu.js";import{t as d}from"./Chip-B2TV9d46.js";import{t as f}from"./SearchInput-ZQqk5MAw.js";import{t as p}from"./Lightbox-CA1dWxEH.js";import{t as m}from"./usage-source-BdQLyNT5.js";import{n as h,t as g}from"./sample-media-Bp-56olh.js";var _=`const photoIds = {street: 'photo-1449824913935-59a10b8d2000', desk: 'photo-1449247709967-d4461a6a6103'} as const;\r
const imageUrl = (image: string, size: readonly [number, number]) => \`https://images.unsplash.com/\${image}?auto=format&fit=crop&w=\${size[0]}&q=\${size[1]}\`;
import {useRef, useState} from 'react';\r
import {Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Chip, EmptyState, Lightbox, SearchInput} from '@gyeol/ui';\r
\r
const photos = [\r
  {id: 'lake', title: '호수 보트 투어', category: '자연', place: '이탈리아 돌로미티', date: '2026-10-21', image: 'photo-1476514525535-07fb3b4ae5f1', alt: '나무 보트 앞으로 펼쳐진 청록색 호수와 바위산'},\r
  {id: 'forest', title: '숲길 산책', category: '자연', place: '제주 사려니숲길', date: '2026-10-20', image: 'photo-1441974231531-c6227db76b6e', alt: '햇빛이 드는 숲 사이로 난 흙길'},\r
  {id: 'valley', title: '계곡 전망대', category: '자연', place: '캐나다 유콘', date: '2026-10-18', image: 'photo-1464822759023-fed622ff2c3b', alt: '침엽수 너머로 눈 덮인 산맥과 강이 보이는 계곡'},\r
  {id: 'city', title: '맨해튼 거리', category: '도시', place: '미국 뉴욕', date: '2026-10-16', image: photoIds.street, alt: '고층 건물 사이로 노란 택시가 오가는 큰길'},\r
  {id: 'desk', title: '작업실 책상', category: '공간', place: '서울 성수동', date: '2026-10-15', image: photoIds.desk, alt: '흰 벽 앞에 놓인 흰 책상과 의자'},\r
  {id: 'desert', title: '모뉴먼트 밸리', category: '자연', place: '미국 애리조나', date: '2026-10-12', image: 'photo-1509316785289-025f5b846b35', alt: '붉은 바위산이 솟은 사막 평원'},\r
];\r
\r
const fullDate = (iso: string) => iso.split('-').map(Number).join('. ') + '.';\r
const monthDay = (iso: string) => {const [, month, day] = iso.split('-').map(Number); return \`\${month}월 \${day}일\`;};\r
const wrap = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'} as const;\r
\r
function ImageGallery() {\r
  const [query, setQuery] = useState('');\r
  const [category, setCategory] = useState('전체');\r
  const [saved, setSaved] = useState<string[]>(['forest']);\r
  const [onlySaved, setOnlySaved] = useState(false);\r
  const searchRef = useRef<HTMLDivElement>(null);\r
  const visible = photos.filter(photo => (category === '전체' || photo.category === category)\r
    && (!onlySaved || saved.includes(photo.id))\r
    && \`\${photo.title} \${photo.place} \${photo.category}\`.normalize('NFC').includes(query.trim().normalize('NFC')));\r
  const items = visible.map(photo => ({src: imageUrl(photo.image, [1000, 85]), alt: photo.alt, caption: \`\${photo.title}, \${photo.place}\`}));\r
  const scope = onlySaved ? '저장한 사진' : category === '전체' ? '사진' : category;\r
  const latest = visible.reduce((last, photo) => photo.date > last ? photo.date : last, '');\r
\r
  return <section aria-label="여행 이미지 보관함" style={{display: 'grid', gap: 'var(--g-space-5)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header style={{...wrap, justifyContent: 'space-between'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>이미지 보관함</h2>\r
      <Button variant="secondary" aria-pressed={onlySaved} onPress={() => setOnlySaved(value => !value)}>\r
        {onlySaved ? '전체 사진 보기' : \`저장한 사진 \${saved.length}\`}\r
      </Button>\r
    </header>\r
    <div style={{...wrap, alignItems: 'flex-end', justifyContent: 'space-between'}}>\r
      <div ref={searchRef} style={{flex: '1 1 40%', minWidth: 0}}>\r
        <SearchInput label="보관함 검색" placeholder="제목, 장소, 분류로 검색" value={query} onChange={setQuery}/>\r
      </div>\r
      <div role="group" aria-label="사진 분류" style={wrap}>\r
        {['전체', '자연', '도시', '공간'].map(value => <Chip key={value} isSelectable isSelected={category === value} onSelectionChange={() => setCategory(value)}>{value}</Chip>)}\r
      </div>\r
    </div>\r
    <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>\r
      {scope} {visible.length}장{latest ? \`, 마지막 추가 \${monthDay(latest)}\` : ''}\r
    </span>\r
    {visible.length ? <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 56)), 1fr))', gap: 'var(--g-space-4)'}}>\r
      {visible.map((photo, index) => <Card key={photo.id} size="sm" style={{minWidth: 0, overflow: 'hidden', paddingBlockStart: 0}}>\r
        <CardContent style={{padding: 0}}>\r
          <Lightbox title="이미지 보관함" items={items} defaultIndex={index} closeLabel="닫기" previousLabel="이전 사진" nextLabel="다음 사진"\r
            trigger={<Button variant="quiet" aria-label={\`\${photo.title} 크게 보기\`} style={{display: 'block', width: '100%', padding: 0, border: 0, borderRadius: 0, overflow: 'hidden'}}>\r
              <img src={imageUrl(photo.image, [1000, 85])} alt={photo.alt} loading="lazy" style={{display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover'}}/>\r
            </Button>}/>\r
        </CardContent>\r
        <CardHeader>\r
          <CardTitle>{photo.title}</CardTitle>\r
          <CardDescription style={{fontSize: 'var(--g-text-caption)'}}>{photo.place}</CardDescription>\r
        </CardHeader>\r
        <CardFooter style={{...wrap, justifyContent: 'space-between'}}>\r
          <time dateTime={photo.date} style={{fontSize: 'var(--g-text-caption)', color: 'var(--g-muted)'}}>{fullDate(photo.date)}</time>\r
          <Button variant="quiet" aria-label={\`\${photo.title} 저장\`} aria-pressed={saved.includes(photo.id)} onPress={() => setSaved(current => current.includes(photo.id) ? current.filter(id => id !== photo.id) : [...current, photo.id])}>\r
            {saved.includes(photo.id) ? '저장됨' : '저장'}\r
          </Button>\r
        </CardFooter>\r
      </Card>)}\r
    </div> : <EmptyState variant="search" title="검색 결과가 없어요." actionLabel="필터 초기화" actionVariant="secondary" onAction={() => {setQuery(''); setCategory('전체'); setOnlySaved(false); searchRef.current?.querySelector('input')?.focus();}}/>}\r
  </section>;\r
}`,v=e(t(),1),y=n(),b=[{id:`lake`,title:`호수 보트 투어`,category:`자연`,place:`이탈리아 돌로미티`,date:`2026-10-21`,image:`photo-1476514525535-07fb3b4ae5f1`,alt:`나무 보트 앞으로 펼쳐진 청록색 호수와 바위산`},{id:`forest`,title:`숲길 산책`,category:`자연`,place:`제주 사려니숲길`,date:`2026-10-20`,image:`photo-1441974231531-c6227db76b6e`,alt:`햇빛이 드는 숲 사이로 난 흙길`},{id:`valley`,title:`계곡 전망대`,category:`자연`,place:`캐나다 유콘`,date:`2026-10-18`,image:`photo-1464822759023-fed622ff2c3b`,alt:`침엽수 너머로 눈 덮인 산맥과 강이 보이는 계곡`},{id:`city`,title:`맨해튼 거리`,category:`도시`,place:`미국 뉴욕`,date:`2026-10-16`,image:h.street,alt:`고층 건물 사이로 노란 택시가 오가는 큰길`},{id:`desk`,title:`작업실 책상`,category:`공간`,place:`서울 성수동`,date:`2026-10-15`,image:h.desk,alt:`흰 벽 앞에 놓인 흰 책상과 의자`},{id:`desert`,title:`모뉴먼트 밸리`,category:`자연`,place:`미국 애리조나`,date:`2026-10-12`,image:`photo-1509316785289-025f5b846b35`,alt:`붉은 바위산이 솟은 사막 평원`}],x=e=>e.split(`-`).map(Number).join(`. `)+`.`,S=e=>{let[,t,n]=e.split(`-`).map(Number);return`${t}월 ${n}일`},C={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`};function w(){let[e,t]=(0,v.useState)(``),[n,m]=(0,v.useState)(`전체`),[h,_]=(0,v.useState)([`forest`]),[w,T]=(0,v.useState)(!1),E=(0,v.useRef)(null),D=b.filter(t=>(n===`전체`||t.category===n)&&(!w||h.includes(t.id))&&`${t.title} ${t.place} ${t.category}`.normalize(`NFC`).includes(e.trim().normalize(`NFC`))),O=D.map(e=>({src:g(e.image,[1e3,85]),alt:e.alt,caption:`${e.title}, ${e.place}`})),k=w?`저장한 사진`:n===`전체`?`사진`:n,A=D.reduce((e,t)=>t.date>e?t.date:e,``);return(0,y.jsxs)(`section`,{"aria-label":`여행 이미지 보관함`,style:{display:`grid`,gap:`var(--g-space-5)`,minWidth:0,color:`var(--g-ink)`},children:[(0,y.jsxs)(`header`,{style:{...C,justifyContent:`space-between`},children:[(0,y.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`이미지 보관함`}),(0,y.jsx)(r,{variant:`secondary`,"aria-pressed":w,onPress:()=>T(e=>!e),children:w?`전체 사진 보기`:`저장한 사진 ${h.length}`})]}),(0,y.jsxs)(`div`,{style:{...C,alignItems:`flex-end`,justifyContent:`space-between`},children:[(0,y.jsx)(`div`,{ref:E,style:{flex:`1 1 40%`,minWidth:0},children:(0,y.jsx)(f,{label:`보관함 검색`,placeholder:`제목, 장소, 분류로 검색`,value:e,onChange:t})}),(0,y.jsx)(`div`,{role:`group`,"aria-label":`사진 분류`,style:C,children:[`전체`,`자연`,`도시`,`공간`].map(e=>(0,y.jsx)(d,{isSelectable:!0,isSelected:n===e,onSelectionChange:()=>m(e),children:e},e))})]}),(0,y.jsxs)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:[k,` `,D.length,`장`,A?`, 마지막 추가 ${S(A)}`:``]}),D.length?(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(min(100%, calc(var(--g-space) * 56)), 1fr))`,gap:`var(--g-space-4)`},children:D.map((e,t)=>(0,y.jsxs)(u,{size:`sm`,style:{minWidth:0,overflow:`hidden`,paddingBlockStart:0},children:[(0,y.jsx)(s,{style:{padding:0},children:(0,y.jsx)(p,{title:`이미지 보관함`,items:O,defaultIndex:t,closeLabel:`닫기`,previousLabel:`이전 사진`,nextLabel:`다음 사진`,trigger:(0,y.jsx)(r,{variant:`quiet`,"aria-label":`${e.title} 크게 보기`,style:{display:`block`,width:`100%`,padding:0,border:0,borderRadius:0,overflow:`hidden`},children:(0,y.jsx)(`img`,{src:g(e.image,[1e3,85]),alt:e.alt,loading:`lazy`,style:{display:`block`,width:`100%`,aspectRatio:`4 / 3`,objectFit:`cover`}})})})}),(0,y.jsxs)(a,{children:[(0,y.jsx)(c,{children:e.title}),(0,y.jsx)(l,{style:{fontSize:`var(--g-text-caption)`},children:e.place})]}),(0,y.jsxs)(o,{style:{...C,justifyContent:`space-between`},children:[(0,y.jsx)(`time`,{dateTime:e.date,style:{fontSize:`var(--g-text-caption)`,color:`var(--g-muted)`},children:x(e.date)}),(0,y.jsx)(r,{variant:`quiet`,"aria-label":`${e.title} 저장`,"aria-pressed":h.includes(e.id),onPress:()=>_(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id]),children:h.includes(e.id)?`저장됨`:`저장`})]})]},e.id))}):(0,y.jsx)(i,{variant:`search`,title:`검색 결과가 없어요.`,actionLabel:`필터 초기화`,actionVariant:`secondary`,onAction:()=>{t(``),m(`전체`),T(!1),E.current?.querySelector(`input`)?.focus()}})]})}var T={id:`image-gallery`,title:`이미지 보관함`,koreanTitle:`이미지 보관함`,group:`blocks`,interactions:[`press`,`type`],description:`검색과 분류, 사진 저장, 큰 이미지 미리보기를 조합한 여행 사진 보관함입니다.`,demo:w,behavior:[`분류, 저장한 사진, 검색어를 함께 적용하고, 검색어와 사진 정보는 NFC로 맞춘 뒤 비교합니다.`,`상태 줄은 지금 보이는 사진 수와 그중 가장 최근 기록일을 읽어 줍니다.`,`사진을 누르면 Lightbox가 그 사진부터 열리고, 지금 보이는 사진 사이에서만 이전과 다음으로 이동합니다.`,`결과가 없으면 필터 초기화가 검색어, 분류, 저장한 사진 보기를 모두 되돌리고 초점을 검색창으로 옮깁니다.`,`저장 표시는 이 화면을 보는 동안만 유지합니다.`],whenToUse:[`여행 사진이나 현장 사진을 분류와 검색어로 좁혀 보고 마음에 드는 사진을 저장해 둘 때 씁니다.`,`사진을 누르면 큰 이미지로 열어 이전과 다음 사진으로 넘겨 봐야 하는 보관함에 씁니다.`],whenNot:[`사진 한 장만 확대해 볼 때는 ImageViewer를 씁니다.`,`한 번에 하나씩 넘겨 보는 배너는 Carousel을 씁니다.`,`사진을 올리고 자르는 화면은 AvatarUpload나 AvatarCropper를 씁니다.`],aiNotes:[`이 블록은 Card, Chip, SearchInput, EmptyState, Lightbox를 조합한 예시이므로 usage 코드를 가져다 사진 데이터와 저장 호출을 바꿔 씁니다.`,`분류, 저장한 사진, 검색어는 함께 적용되고 Lightbox는 지금 보이는 사진 사이에서만 이동하니 items를 필터링한 결과로 넘깁니다.`,`저장 표시는 화면 상태로만 유지됩니다. 서버에 남기려면 저장 동작을 직접 연결합니다.`],usage:m(_),props:[{name:`Button`,type:`'@gyeol/ui'`,description:`저장한 사진 필터, 개별 사진 저장 및 미리보기 열기.`},{name:`Card`,type:`'@gyeol/ui'`,description:`사진 한 장의 미리보기와 기록을 담는 카드.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`사진 미리보기 영역.`},{name:`CardDescription`,type:`'@gyeol/ui'`,description:`사진을 찍은 장소.`},{name:`CardFooter`,type:`'@gyeol/ui'`,description:`기록일과 저장 동작.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`사진 제목과 장소 묶음.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`사진 제목.`},{name:`Chip`,type:`'@gyeol/ui'`,description:`사진 분류 선택.`},{name:`EmptyState`,type:`'@gyeol/ui'`,description:`결과가 없을 때 필터를 초기화하는 안내.`},{name:`Lightbox`,type:`'@gyeol/ui'`,description:`선택한 사진의 큰 이미지와 이전, 다음 사진 탐색.`},{name:`SearchInput`,type:`'@gyeol/ui'`,description:`제목, 장소, 분류로 사진 검색.`}]};export{T as doc};