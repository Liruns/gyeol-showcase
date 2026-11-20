import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BeI4_wN4.js";import{t as i}from"./Textarea-CvWaFdQF.js";import{r as a,t as o}from"./Avatar-Cq8zREtD.js";import{t as s}from"./Meter-CWPfDgdJ.js";import{n as c,t as l}from"./Badge-0pdlwniF.js";import{t as u}from"./ImageThumbnail-BZKmz-JM.js";import{t as d}from"./Lightbox-DQwcnOTI.js";import{t as f}from"./usage-source-BdQLyNT5.js";import{n as p,r as m,t as h}from"./review-source-DC6vojkW.js";var g=`import {useId, useLayoutEffect, useRef, useState} from 'react';\r
import {Avatar, AvatarFallback, Badge, Button, ImageThumbnail, Lightbox, Meter, Progress, Textarea} from '@gyeol/ui';\r
\r
import {useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type RefObject} from 'react';\r
import {Button, VideoPlayer} from '@gyeol/ui';\r
import type {VideoPlayerCaption} from '@gyeol/ui';\r
interface ReviewPhoto {\r
  readonly type: 'photo';\r
  readonly src: string;\r
  readonly alt: string;\r
}\r
\r
interface ReviewClip {\r
  readonly type: 'video';\r
  readonly src: string;\r
  readonly poster: string;\r
  readonly label: string;\r
  readonly captions: readonly VideoPlayerCaption[];\r
}\r
\r
/** One review as the review server sends it. */\r
interface ServerReview {\r
  readonly id: string;\r
  readonly name: string;\r
  readonly initials: string;\r
  readonly product: string;\r
  readonly date: string;\r
  /** Whole stars from 1 to 5. */\r
  readonly rating: number;\r
  readonly title: string;\r
  readonly text: string;\r
  readonly media: readonly (ReviewPhoto | ReviewClip)[];\r
  /** Set by the order server only when it matched the review to a paid order. Anything other than \`true\` shows no purchase mark. */\r
  readonly purchaseVerified?: boolean;\r
}\r
\r
interface ReviewSource {\r
  readonly read: () => readonly ServerReview[];\r
  readonly subscribe: (listener: () => void) => () => void;\r
}\r
\r
const media = (name: string) => \`review-media/\${name}\`;\r
const photo = (name: string, alt: string): ReviewPhoto => ({type: 'photo', src: media(\`\${name}.svg\`), alt});\r
const clip = (name: string, label: string): ReviewClip => ({\r
  type: 'video', src: media(\`\${name}.mp4\`), poster: media(\`\${name}-poster.jpg\`), label,\r
  captions: [{src: media(\`\${name}.ko.vtt\`), srcLang: 'ko', label: '한국어'}],\r
});\r
\r
const sampleReviews: readonly ServerReview[] = [\r
  {id: 'r1', name: '김서연', initials: '서연', product: '데일리 머그, 크림', date: '10월 30일 10:24', rating: 5, title: '매일 손이 가는 컵이에요', text: '손잡이가 편하고 크기도 딱 좋아요. 아침마다 커피를 이 컵에 마셔요. 포장도 꼼꼼해서 선물용으로 하나 더 주문하려고요.', media: [photo('mug-desk', '책상 위에 놓인 크림색 머그'), photo('mug-hand', '손잡이를 잡은 손과 머그')], purchaseVerified: true},\r
  {id: 'r2', name: '이도윤', initials: '도윤', product: '리넨 테이블 매트, 오트', date: '10월 30일 09:18', rating: 4, title: '식탁 분위기가 달라졌어요', text: '자연스러운 질감이 마음에 들어요. 세탁 방법을 조금 더 자세히 안내해 주시면 좋겠어요.', media: [], purchaseVerified: true},\r
  {id: 'r3', name: '박지우', initials: '지우', product: '우드 트레이, 내추럴', date: '10월 29일 16:42', rating: 5, title: '기대했던 것보다 더 예뻐요', text: '마감이 매끄럽고 가벼워서 쓰기 편해요. 손잡이 홈이 깊어서 컵 두 개를 올려도 흔들리지 않아요.', media: [photo('tray-top', '컵과 접시를 올린 우드 트레이를 위에서 본 모습'), clip('tray', '박지우님의 우드 트레이 영상')]},\r
  {id: 'r4', name: '최민준', initials: '민준', product: '데일리 머그, 크림', date: '10월 27일 21:05', rating: 3, title: '색은 좋은데 조금 무거워요', text: '사진보다 색이 차분해서 좋아요. 다만 물을 가득 채우면 한 손으로 들기에 조금 무겁습니다.', media: [photo('mug-shelf', '선반에 나란히 놓인 머그 세 개')], purchaseVerified: true},\r
  {id: 'r5', name: '정하은', initials: '하은', product: '리넨 테이블 매트, 오트', date: '10월 25일 13:30', rating: 2, title: '세탁 후 줄었어요', text: '찬물에 손빨래했는데 가로가 2cm쯤 줄었어요. 처음 크기를 원하면 세탁에 신경 써야 할 것 같아요.', media: []},\r
  {id: 'r6', name: '강예준', initials: '예준', product: '리넨 테이블 매트, 오트', date: '10월 22일 19:47', rating: 4, title: '원목 식탁에 잘 어울려요', text: '색이 튀지 않아서 어떤 그릇과도 잘 맞아요. 세탁하고 나니 가장자리가 조금 말렸지만 다림질하면 펴집니다.', media: [clip('mat', '강예준님의 리넨 테이블 매트 영상')], purchaseVerified: true},\r
  {id: 'r7', name: '윤서아', initials: '서아', product: '데일리 머그, 크림', date: '10월 18일 08:12', rating: 5, title: '용량이 넉넉해요', text: '350ml를 채워도 입구까지 여유가 있어서 들고 다닐 때 넘치지 않아요. 전자레인지에도 문제없었어요.', media: [clip('mug', '윤서아님의 데일리 머그 영상')], purchaseVerified: true},\r
  {id: 'r8', name: '임도현', initials: '도현', product: '리넨 테이블 매트, 오트', date: '10월 12일 11:56', rating: 1, title: '실밥이 풀려 있었어요', text: '받았을 때 한쪽 모서리 실밥이 풀려 있었어요. 교환을 신청했으니 처리 결과를 알려 주세요.', media: [photo('mat-table', '식탁에 깔린 리넨 매트와 접시')], purchaseVerified: true},\r
  {id: 'r9', name: '한지민', initials: '지민', product: '우드 트레이, 내추럴', date: '10월 5일 17:20', rating: 4, title: '선물 받고 잘 쓰고 있어요', text: '친구에게 선물로 받았어요. 크기가 적당해서 소파 옆 협탁에 두고 리모컨과 컵을 올려 둡니다.', media: [photo('tray-side', '협탁 위 우드 트레이를 옆에서 본 모습')]},\r
];\r
\r
let currentSource: ReviewSource = {read: () => sampleReviews, subscribe: () => () => {}};\r
const sourceListeners = new Set<() => void>();\r
const subscribeSource = (listener: () => void) => {sourceListeners.add(listener); return () => {sourceListeners.delete(listener);};};\r
const readSource = () => currentSource;\r
\r
/** Puts another review server behind every mounted demo, the way an application passes its own source. */\r
function setReviewSource(source: ReviewSource) {\r
  currentSource = source;\r
  sourceListeners.forEach(listener => listener());\r
}\r
\r
function useReviews(): readonly ServerReview[] {\r
  const source = useSyncExternalStore(subscribeSource, readSource);\r
  return useSyncExternalStore(source.subscribe, source.read);\r
}\r
\r
/** Pauses every video inside \`ref\` once less than half of it is on screen or the page is hidden. It never starts playback. */\r
function usePauseWhenHidden(ref: RefObject<HTMLElement | null>) {\r
  useEffect(() => {\r
    const root = ref.current;\r
    if (!root) return;\r
    const pause = () => root.querySelectorAll('video').forEach(video => {if (!video.paused) video.pause();});\r
    const observer = new IntersectionObserver(entries => {if (entries.some(entry => entry.intersectionRatio < 0.5)) pause();}, {threshold: [0, 0.5]});\r
    observer.observe(root);\r
    const onVisibility = () => {if (document.visibilityState === 'hidden') pause();};\r
    document.addEventListener('visibilitychange', onVisibility);\r
    return () => {observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility);};\r
  }, [ref]);\r
}\r
\r
const muted = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'} as const;\r
\r
/** The package VideoPlayer with the review rules: no autoplay, paused off screen, and a way back when the file fails. */\r
function ReviewVideo({clip, className}: {readonly clip: ReviewClip; readonly className?: string}) {\r
  const box = useRef<HTMLDivElement>(null);\r
  const [attempt, setAttempt] = useState(0);\r
  const [failed, setFailed] = useState(false);\r
  usePauseWhenHidden(box);\r
  useLayoutEffect(() => {\r
    const root = box.current;\r
    if (!root) return;\r
    const fail = (event: Event) => {if (event.target instanceof HTMLVideoElement) setFailed(true);};\r
    root.addEventListener('error', fail, true);\r
    // A retry moves focus to the new player, since the retry button leaves with the failure.\r
    if (attempt > 0) root.querySelector<HTMLElement>('.g-video-player')?.focus();\r
    return () => root.removeEventListener('error', fail, true);\r
  }, [attempt]);\r
  return <div ref={box} style={{display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
    <VideoPlayer key={attempt} {...(className === undefined ? {} : {className})} src={clip.src} poster={clip.poster} label={clip.label} captions={clip.captions}/>\r
    {failed && <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3)'}}>\r
      <p style={muted}>영상을 불러오지 못했어요. 연결을 확인하고 다시 불러와 주세요.</p>\r
      <Button variant="secondary" onPress={() => {setFailed(false); setAttempt(value => value + 1);}}>영상 다시 불러오기</Button>\r
    </div>}\r
  </div>;\r
}\r
\r
/** A thumbnail that opens the review's photos in a Lightbox; when the file fails, the same frame says so instead. */
\r
function PhotoButton({review, photos, index}: {readonly review: ServerReview; readonly photos: readonly ReviewPhoto[]; readonly index: number}) {\r
  const frame = useRef<HTMLSpanElement>(null);\r
  const [failed, setFailed] = useState(false);\r
  useLayoutEffect(() => {\r
    const root = frame.current;\r
    if (!root) return;\r
    const image = root.querySelector('img');\r
    if (image?.complete && image.naturalWidth === 0) setFailed(true);\r
    const fail = () => setFailed(true);\r
    root.addEventListener('error', fail, true);\r
    return () => root.removeEventListener('error', fail, true);\r
  }, []);\r
  const size = 'calc(var(--g-space-16) * 1.5)';\r
  return <Lightbox title={\`\${review.name}님의 사진\`} defaultIndex={index}\r
    items={photos.map((item, position) => ({src: item.src, alt: item.alt, caption: item.alt, transitionId: \`\${review.id}-photo-\${position}\`}))}\r
    closeLabel="사진 닫기" previousLabel="이전 사진" nextLabel="다음 사진"\r
    trigger={<Button variant="quiet" aria-label={\`사진 \${index + 1} 크게 보기\`} style={{padding: 0, minWidth: 0}}>\r
      <span ref={frame} style={{display: 'grid', inlineSize: size, aspectRatio: '4 / 3', placeItems: 'center', ['--g-image-thumbnail-size' as string]: size}}>\r
        {failed ? <span style={{...muted, padding: 'var(--g-space-2)', textAlign: 'center'}}>사진을 불러오지 못했어요</span>\r
          : <ImageThumbnail src={photos[index]!.src} alt="" transitionId={\`\${review.id}-photo-\${index}\`}/>}\r
      </span>\r
    </Button>}/>;\r
}\r
\r
type RatingFilter = 'all' | 'high' | 'low';\r
type MediaFilter = 'all' | 'photo' | 'video';\r
type ReplyFilter = 'all' | 'waiting' | 'done';\r
/** [value, visible text, full name]. The full name repeats the group so a screen reader or a test hears "별점 4점 이상", not "4점 이상". */\r
type FilterOption<T> = readonly [T, string, string];\r
const ratingFilters: readonly FilterOption<RatingFilter>[] = [['all', '전체', '모든 별점'], ['high', '4점 이상', '별점 4점 이상'], ['low', '3점 이하', '별점 3점 이하']];\r
const mediaFilters: readonly FilterOption<MediaFilter>[] = [['all', '전체', '모든 후기'], ['photo', '사진', '사진 후기만'], ['video', '동영상', '동영상 후기만']];\r
const replyFilters: readonly FilterOption<ReplyFilter>[] = [['all', '전체', '모든 답변 상태'], ['waiting', '대기', '답변 대기'], ['done', '완료', '답변 완료']];\r
const scores = [5, 4, 3, 2, 1] as const;\r
const has = (review: ServerReview, type: 'photo' | 'video') => review.media.some(item => item.type === type);\r
\r
function ReviewCenter() {\r
  const reviews = useReviews();\r
  const distributionId = useId();\r
  const listId = useId();\r
  const [selected, setSelected] = useState('r1');\r
  const [rating, setRating] = useState<RatingFilter>('all');\r
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>('all');\r
  const [reply, setReply] = useState<ReplyFilter>('all');\r
  const [drafts, setDrafts] = useState<Record<string, string>>({});\r
  const [replies, setReplies] = useState<Record<string, string>>({});\r
  // The distribution covers every filter except the star filter, so its counts add up to the stated base.\r
  const scope = reviews.filter(item => (mediaFilter === 'all' || has(item, mediaFilter))\r
    && (reply === 'all' || (reply === 'waiting' ? !replies[item.id] : Boolean(replies[item.id]))));\r
  const visible = scope.filter(item => rating === 'all' || (rating === 'high' ? item.rating >= 4 : item.rating <= 3));\r
  const scopeName = \`\${reply === 'all' ? '' : \`\${replyFilters.find(([id]) => id === reply)![2]} \`}\${mediaFilter === 'photo' ? '사진 후기' : mediaFilter === 'video' ? '동영상 후기' : reply === 'all' ? '전체 후기' : '후기'}\`;\r
  const result = rating === 'all' ? \`\${scopeName} \${scope.length}개\` : \`\${scopeName} \${scope.length}개 중 \${ratingFilters.find(([id]) => id === rating)![2]} \${visible.length}개\`;\r
  const average = scope.length ? (scope.reduce((sum, item) => sum + item.rating, 0) / scope.length).toFixed(1) : null;\r
  const review = visible.find(item => item.id === selected) ?? visible[0];\r
  const draft = review ? drafts[review.id] ?? '' : '';\r
  const answered = scope.filter(item => replies[item.id]).length;\r
  const replyState = (id: string) => replies[id] ? '답변 완료' : '답변 대기';\r
  const row = {display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', gap: 'var(--g-space-3)'};\r
  const rule = 'var(--g-border-width) solid var(--g-border)';\r
  const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-body)', letterSpacing: 'var(--g-tracking-heading)'};\r
  // Each group spans the filter grid and adopts its columns, so the three labels share one max-content column.\r
  const filterGroup = <T extends string>(label: string, options: readonly FilterOption<T>[], value: T, onChange: (next: T) => void) =>\r
    <div role="group" aria-label={\`\${label} 필터\`} style={{gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'subgrid', alignItems: 'center'}}>\r
      <span style={{...muted, fontSize: 'var(--g-text-compact)'}} aria-hidden="true">{label}</span>\r
      <div style={{...row, gap: 'var(--g-space-1)'}}>\r
        {options.map(([id, text, name]) => <Button key={id} variant="quiet" aria-pressed={value === id} aria-label={name} onPress={() => onChange(id)}\r
          {...(value === id ? {style: {background: 'var(--g-soft)', fontWeight: 'var(--g-weight-selected)'}} : {})}>{text}</Button>)}\r
      </div>\r
    </div>;\r
  const photos = review?.media.filter((item): item is ReviewPhoto => item.type === 'photo') ?? [];\r
  const video = review?.media.find((item): item is ReviewClip => item.type === 'video');\r
  return <section aria-label="고객 리뷰 센터" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', overflowWrap: 'anywhere', minWidth: 0}}>\r
    <header style={{...row, justifyContent: 'space-between', alignItems: 'baseline'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>리뷰 센터</h2>\r
      <p style={muted}>10월 1일~31일</p>\r
    </header>\r
    <section aria-labelledby={distributionId} style={{...row, alignItems: 'flex-start', gap: 'var(--g-space-4) var(--g-space-8)', paddingBottom: 'var(--g-space-4)', borderBottom: rule}}>\r
      <div style={{flex: '0 1 10rem', display: 'grid', gap: 'var(--g-space-1)'}}>\r
        <h3 id={distributionId} style={heading}>별점 분포</h3>\r
        {average\r
          ? <p style={muted}>평균 <strong style={{color: 'var(--g-ink)', fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', fontVariantNumeric: 'tabular-nums'}}>{average}</strong> / 5</p>\r
          : <p style={{margin: 0, fontWeight: 'var(--g-weight-semibold)'}}>평점 없음</p>}\r
        <p style={muted}>{scopeName} {scope.length}개 기준</p>\r
      </div>\r
      {scope.length > 0 && <div style={{flex: '1 1 16rem', display: 'grid', gap: 'var(--g-space-2)', minWidth: 0}}>\r
        {scores.map(score => {\r
          const count = scope.filter(item => item.rating === score).length;\r
          return <Meter key={score} label={\`\${score}점\`} value={count} maxValue={scope.length} valueLabel={\`\${count}개, \${Math.round(count / scope.length * 100)}%\`}/>;\r
        })}\r
      </div>}\r
      {/* Reply progress shares the distribution's base, so an empty base has no bar to divide by. */}\r
      {scope.length > 0 && <div style={{flex: '1 1 12rem', display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
        <Progress label="답변 현황" value={answered} maxValue={scope.length} />\r
        <p style={muted}>{scope.length}개 중 {answered}개에 답변했어요.</p>\r
      </div>}\r
    </section>\r
    {/* One rule splits list and detail. It sits in the column gap beside the detail and becomes the rule above it once the\r
        detail wraps under the list; the clip hides whichever side has no neighbour, and its padding keeps focus rings visible. */}\r
    <div style={{overflow: 'clip', padding: 'var(--g-space-1)', margin: 'calc(var(--g-space-1) * -1)'}}>\r
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6)'}}>\r
        <section aria-labelledby={listId} style={{flex: '1 1 18rem', minWidth: 0, display: 'grid', alignContent: 'start', gap: 'var(--g-space-3)'}}>\r
          <h3 id={listId} style={heading}>도착한 리뷰</h3>\r
          <div style={{display: 'grid', gridTemplateColumns: 'max-content minmax(0, 1fr)', gap: 'var(--g-space-1) var(--g-space-3)'}}>\r
            {filterGroup('별점', ratingFilters, rating, setRating)}\r
            {filterGroup('미디어', mediaFilters, mediaFilter, setMediaFilter)}\r
            {filterGroup('답변', replyFilters, reply, setReply)}\r
          </div>\r
          <p role="status" style={muted}>{result}</p>\r
          <ul style={{display: 'grid', gap: 'var(--g-space-1)', listStyle: 'none', margin: 0, padding: 0}}>\r
            {visible.map(item => {\r
              const photoCount = item.media.filter(entry => entry.type === 'photo').length;\r
              const attachments = [photoCount ? \`사진 \${photoCount}장\` : '', has(item, 'video') ? '동영상' : ''].filter(Boolean).join(', ');\r
              const metaId = \`\${listId}-\${item.id}\`;\r
              const current = review?.id === item.id;\r
              // The whole row is the button; the one-line meta is painted over its reserved bottom padding and read as its description.\r
              return <li key={item.id} style={{display: 'grid', minWidth: 0}}>\r
                <Button variant="quiet" aria-pressed={current} aria-describedby={metaId} onPress={() => setSelected(item.id)} style={{\r
                  gridArea: '1 / 1', inlineSize: '100%', minBlockSize: 'calc(var(--g-space) * 14)', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'start',\r
                  padding: 'var(--g-space-2) var(--g-space-3) calc(var(--g-space-2) + var(--g-text-caption) * var(--g-leading-body))',\r
                  background: current ? 'var(--g-soft)' : undefined,\r
                }}>{item.title}</Button>\r
                <p id={metaId} aria-hidden="true" style={{...muted, gridArea: '1 / 1', alignSelf: 'end', position: 'relative', padding: '0 var(--g-space-3) var(--g-space-2)', pointerEvents: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>\r
                  {item.name}, {item.date.split(' ').slice(0, 2).join(' ')}, 별점 {item.rating}점{attachments && \`, \${attachments}\`}{replies[item.id] ? ', 답변 완료' : ''}\r
                </p>\r
              </li>;\r
            })}\r
            {visible.length === 0 && <li style={{color: 'var(--g-muted)'}}>{reviews.length ? '조건에 맞는 리뷰가 없어요.' : '아직 도착한 리뷰가 없어요.'}</li>}\r
          </ul>\r
        </section>\r
        <section aria-label="리뷰 상세" style={{\r
          flex: '2 1 22rem', minWidth: 0, alignSelf: 'stretch',\r
          marginInlineStart: 'calc(var(--g-space-3) * -1)', paddingInlineStart: 'var(--g-space-3)', borderInlineStart: rule,\r
          marginBlockStart: 'calc(var(--g-space-3) * -1)', paddingBlockStart: 'var(--g-space-3)', borderBlockStart: rule,\r
        }}>\r
          {review ? <div style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0}}>\r
            <div style={row}>\r
              <Avatar><AvatarFallback label={review.name}>{review.initials}</AvatarFallback></Avatar>\r
              <div style={{minWidth: 0}}><strong>{review.name}</strong><p style={muted}>{review.date}</p></div>\r
              {/* Only the order server's own field marks a purchase; a missing or non-boolean value shows nothing. */}\r
              {review.purchaseVerified === true && <Badge state="done" label="구매 확인" />}\r
              <span style={{marginInlineStart: 'auto'}}><Badge state={replies[review.id] ? 'done' : 'idle'} label={replyState(review.id)} /></span>\r
            </div>\r
            <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
              <p style={muted}>{review.product}, 별점 {review.rating} / 5</p>\r
              <h3 style={heading}>{review.title}</h3>\r
              <p style={{margin: 0, lineHeight: 'var(--g-leading-body)'}}>{review.text}</p>\r
            </div>\r
            {photos.length > 0 && <div role="group" aria-label="첨부 사진" style={{...row, gap: 'var(--g-space-2)'}}>\r
              {photos.map((item, index) => <PhotoButton key={\`\${review.id}-\${item.src}\`} review={review} photos={photos} index={index}/>)}\r
            </div>}\r
            {video && <div style={{maxWidth: '36rem'}}><ReviewVideo key={review.id} clip={video}/></div>}\r
            <div style={{borderTop: rule, paddingTop: 'var(--g-space-4)'}}>\r
              {replies[review.id] ? <div role="status" style={{display: 'grid', gap: 'var(--g-space-2)'}}>\r
                <p style={muted}>답변을 등록했어요.</p>\r
                <p style={{margin: 0, whiteSpace: 'pre-wrap', lineHeight: 'var(--g-leading-body)'}}>{replies[review.id]}</p>\r
              </div> : <div style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
                <Textarea label="판매자 답변" value={draft} onChange={value => setDrafts({...drafts, [review.id]: value})} rows={4} maxLength={500} description="답변은 고객에게 공개돼요. 연락처나 주소는 적지 마세요." />\r
                <div style={{...row, justifyContent: 'space-between'}}>\r
                  <Button variant="secondary" onPress={() => setDrafts({...drafts, [review.id]: \`\${review.name}님, 후기 남겨 주셔서 감사합니다. 말씀해 주신 내용은 팀과 함께 보겠습니다.\`})}>감사 인사 불러오기</Button>\r
                  <Button isDisabled={!draft.trim() || Array.from(draft).length > 500} onPress={() => setReplies({...replies, [review.id]: draft.trim()})}>답변 등록</Button>\r
                </div>\r
              </div>}\r
            </div>\r
          </div> : <p style={{...muted, fontSize: 'var(--g-text-compact)'}}>표시할 리뷰가 없어요.</p>}\r
        </section>\r
      </div>\r
    </div>\r
  </section>;\r
}`,_=e(t(),1),v=n();function y({review:e,photos:t,index:n}){let i=(0,_.useRef)(null),[a,o]=(0,_.useState)(!1);(0,_.useLayoutEffect)(()=>{let e=i.current;if(!e)return;let t=e.querySelector(`img`);t?.complete&&t.naturalWidth===0&&o(!0);let n=()=>o(!0);return e.addEventListener(`error`,n,!0),()=>e.removeEventListener(`error`,n,!0)},[]);let s=`calc(var(--g-space-16) * 1.5)`;return(0,v.jsx)(d,{title:`${e.name}님의 사진`,defaultIndex:n,items:t.map((t,n)=>({src:t.src,alt:t.alt,caption:t.alt,transitionId:`${e.id}-photo-${n}`})),closeLabel:`사진 닫기`,previousLabel:`이전 사진`,nextLabel:`다음 사진`,trigger:(0,v.jsx)(r,{variant:`quiet`,"aria-label":`사진 ${n+1} 크게 보기`,style:{padding:0,minWidth:0},children:(0,v.jsx)(`span`,{ref:i,style:{display:`grid`,inlineSize:s,aspectRatio:`4 / 3`,placeItems:`center`,"--g-image-thumbnail-size":s},children:a?(0,v.jsx)(`span`,{style:{...p,padding:`var(--g-space-2)`,textAlign:`center`},children:`사진을 불러오지 못했어요`}):(0,v.jsx)(u,{src:t[n].src,alt:``,transitionId:`${e.id}-photo-${n}`})})})})}var b=[[`all`,`전체`,`모든 별점`],[`high`,`4점 이상`,`별점 4점 이상`],[`low`,`3점 이하`,`별점 3점 이하`]],x=[[`all`,`전체`,`모든 후기`],[`photo`,`사진`,`사진 후기만`],[`video`,`동영상`,`동영상 후기만`]],S=[[`all`,`전체`,`모든 답변 상태`],[`waiting`,`대기`,`답변 대기`],[`done`,`완료`,`답변 완료`]],C=[5,4,3,2,1],w=(e,t)=>e.media.some(e=>e.type===t);function T(){let e=m(),t=(0,_.useId)(),n=(0,_.useId)(),[u,d]=(0,_.useState)(`r1`),[f,g]=(0,_.useState)(`all`),[T,E]=(0,_.useState)(`all`),[D,O]=(0,_.useState)(`all`),[k,A]=(0,_.useState)({}),[j,M]=(0,_.useState)({}),N=e.filter(e=>(T===`all`||w(e,T))&&(D===`all`||(D===`waiting`?!j[e.id]:!!j[e.id]))),P=N.filter(e=>f===`all`||(f===`high`?e.rating>=4:e.rating<=3)),F=`${D===`all`?``:`${S.find(([e])=>e===D)[2]} `}${T===`photo`?`사진 후기`:T===`video`?`동영상 후기`:D===`all`?`전체 후기`:`후기`}`,I=f===`all`?`${F} ${N.length}개`:`${F} ${N.length}개 중 ${b.find(([e])=>e===f)[2]} ${P.length}개`,L=N.length?(N.reduce((e,t)=>e+t.rating,0)/N.length).toFixed(1):null,R=P.find(e=>e.id===u)??P[0],z=R?k[R.id]??``:``,B=N.filter(e=>j[e.id]).length,V=e=>j[e]?`답변 완료`:`답변 대기`,H={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3)`},U=`var(--g-border-width) solid var(--g-border)`,W={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-body)`,letterSpacing:`var(--g-tracking-heading)`},G=(e,t,n,i)=>(0,v.jsxs)(`div`,{role:`group`,"aria-label":`${e} 필터`,style:{gridColumn:`1 / -1`,display:`grid`,gridTemplateColumns:`subgrid`,alignItems:`center`},children:[(0,v.jsx)(`span`,{style:{...p,fontSize:`var(--g-text-compact)`},"aria-hidden":`true`,children:e}),(0,v.jsx)(`div`,{style:{...H,gap:`var(--g-space-1)`},children:t.map(([e,t,a])=>(0,v.jsx)(r,{variant:`quiet`,"aria-pressed":n===e,"aria-label":a,onPress:()=>i(e),...n===e?{style:{background:`var(--g-soft)`,fontWeight:`var(--g-weight-selected)`}}:{},children:t},e))})]}),K=R?.media.filter(e=>e.type===`photo`)??[],q=R?.media.find(e=>e.type===`video`);return(0,v.jsxs)(`section`,{"aria-label":`고객 리뷰 센터`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,overflowWrap:`anywhere`,minWidth:0},children:[(0,v.jsxs)(`header`,{style:{...H,justifyContent:`space-between`,alignItems:`baseline`},children:[(0,v.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`리뷰 센터`}),(0,v.jsx)(`p`,{style:p,children:`10월 1일~31일`})]}),(0,v.jsxs)(`section`,{"aria-labelledby":t,style:{...H,alignItems:`flex-start`,gap:`var(--g-space-4) var(--g-space-8)`,paddingBottom:`var(--g-space-4)`,borderBottom:U},children:[(0,v.jsxs)(`div`,{style:{flex:`0 1 10rem`,display:`grid`,gap:`var(--g-space-1)`},children:[(0,v.jsx)(`h3`,{id:t,style:W,children:`별점 분포`}),L?(0,v.jsxs)(`p`,{style:p,children:[`평균 `,(0,v.jsx)(`strong`,{style:{color:`var(--g-ink)`,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,fontVariantNumeric:`tabular-nums`},children:L}),` / 5`]}):(0,v.jsx)(`p`,{style:{margin:0,fontWeight:`var(--g-weight-semibold)`},children:`평점 없음`}),(0,v.jsxs)(`p`,{style:p,children:[F,` `,N.length,`개 기준`]})]}),N.length>0&&(0,v.jsx)(`div`,{style:{flex:`1 1 16rem`,display:`grid`,gap:`var(--g-space-2)`,minWidth:0},children:C.map(e=>{let t=N.filter(t=>t.rating===e).length;return(0,v.jsx)(s,{label:`${e}점`,value:t,maxValue:N.length,valueLabel:`${t}개, ${Math.round(t/N.length*100)}%`},e)})}),N.length>0&&(0,v.jsxs)(`div`,{style:{flex:`1 1 12rem`,display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,v.jsx)(c,{label:`답변 현황`,value:B,maxValue:N.length}),(0,v.jsxs)(`p`,{style:p,children:[N.length,`개 중 `,B,`개에 답변했어요.`]})]})]}),(0,v.jsx)(`div`,{style:{overflow:`clip`,padding:`var(--g-space-1)`,margin:`calc(var(--g-space-1) * -1)`},children:(0,v.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6)`},children:[(0,v.jsxs)(`section`,{"aria-labelledby":n,style:{flex:`1 1 18rem`,minWidth:0,display:`grid`,alignContent:`start`,gap:`var(--g-space-3)`},children:[(0,v.jsx)(`h3`,{id:n,style:W,children:`도착한 리뷰`}),(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`max-content minmax(0, 1fr)`,gap:`var(--g-space-1) var(--g-space-3)`},children:[G(`별점`,b,f,g),G(`미디어`,x,T,E),G(`답변`,S,D,O)]}),(0,v.jsx)(`p`,{role:`status`,style:p,children:I}),(0,v.jsxs)(`ul`,{style:{display:`grid`,gap:`var(--g-space-1)`,listStyle:`none`,margin:0,padding:0},children:[P.map(e=>{let t=e.media.filter(e=>e.type===`photo`).length,i=[t?`사진 ${t}장`:``,w(e,`video`)?`동영상`:``].filter(Boolean).join(`, `),a=`${n}-${e.id}`,o=R?.id===e.id;return(0,v.jsxs)(`li`,{style:{display:`grid`,minWidth:0},children:[(0,v.jsx)(r,{variant:`quiet`,"aria-pressed":o,"aria-describedby":a,onPress:()=>d(e.id),style:{gridArea:`1 / 1`,inlineSize:`100%`,minBlockSize:`calc(var(--g-space) * 14)`,justifyContent:`flex-start`,alignItems:`flex-start`,textAlign:`start`,padding:`var(--g-space-2) var(--g-space-3) calc(var(--g-space-2) + var(--g-text-caption) * var(--g-leading-body))`,background:o?`var(--g-soft)`:void 0},children:e.title}),(0,v.jsxs)(`p`,{id:a,"aria-hidden":`true`,style:{...p,gridArea:`1 / 1`,alignSelf:`end`,position:`relative`,padding:`0 var(--g-space-3) var(--g-space-2)`,pointerEvents:`none`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:[e.name,`, `,e.date.split(` `).slice(0,2).join(` `),`, 별점 `,e.rating,`점`,i&&`, ${i}`,j[e.id]?`, 답변 완료`:``]})]},e.id)}),P.length===0&&(0,v.jsx)(`li`,{style:{color:`var(--g-muted)`},children:e.length?`조건에 맞는 리뷰가 없어요.`:`아직 도착한 리뷰가 없어요.`})]})]}),(0,v.jsx)(`section`,{"aria-label":`리뷰 상세`,style:{flex:`2 1 22rem`,minWidth:0,alignSelf:`stretch`,marginInlineStart:`calc(var(--g-space-3) * -1)`,paddingInlineStart:`var(--g-space-3)`,borderInlineStart:U,marginBlockStart:`calc(var(--g-space-3) * -1)`,paddingBlockStart:`var(--g-space-3)`,borderBlockStart:U},children:R?(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0},children:[(0,v.jsxs)(`div`,{style:H,children:[(0,v.jsx)(o,{children:(0,v.jsx)(a,{label:R.name,children:R.initials})}),(0,v.jsxs)(`div`,{style:{minWidth:0},children:[(0,v.jsx)(`strong`,{children:R.name}),(0,v.jsx)(`p`,{style:p,children:R.date})]}),R.purchaseVerified===!0&&(0,v.jsx)(l,{state:`done`,label:`구매 확인`}),(0,v.jsx)(`span`,{style:{marginInlineStart:`auto`},children:(0,v.jsx)(l,{state:j[R.id]?`done`:`idle`,label:V(R.id)})})]}),(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,v.jsxs)(`p`,{style:p,children:[R.product,`, 별점 `,R.rating,` / 5`]}),(0,v.jsx)(`h3`,{style:W,children:R.title}),(0,v.jsx)(`p`,{style:{margin:0,lineHeight:`var(--g-leading-body)`},children:R.text})]}),K.length>0&&(0,v.jsx)(`div`,{role:`group`,"aria-label":`첨부 사진`,style:{...H,gap:`var(--g-space-2)`},children:K.map((e,t)=>(0,v.jsx)(y,{review:R,photos:K,index:t},`${R.id}-${e.src}`))}),q&&(0,v.jsx)(`div`,{style:{maxWidth:`36rem`},children:(0,v.jsx)(h,{clip:q},R.id)}),(0,v.jsx)(`div`,{style:{borderTop:U,paddingTop:`var(--g-space-4)`},children:j[R.id]?(0,v.jsxs)(`div`,{role:`status`,style:{display:`grid`,gap:`var(--g-space-2)`},children:[(0,v.jsx)(`p`,{style:p,children:`답변을 등록했어요.`}),(0,v.jsx)(`p`,{style:{margin:0,whiteSpace:`pre-wrap`,lineHeight:`var(--g-leading-body)`},children:j[R.id]})]}):(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,v.jsx)(i,{label:`판매자 답변`,value:z,onChange:e=>A({...k,[R.id]:e}),rows:4,maxLength:500,description:`답변은 고객에게 공개돼요. 연락처나 주소는 적지 마세요.`}),(0,v.jsxs)(`div`,{style:{...H,justifyContent:`space-between`},children:[(0,v.jsx)(r,{variant:`secondary`,onPress:()=>A({...k,[R.id]:`${R.name}님, 후기 남겨 주셔서 감사합니다. 말씀해 주신 내용은 팀과 함께 보겠습니다.`}),children:`감사 인사 불러오기`}),(0,v.jsx)(r,{isDisabled:!z.trim()||Array.from(z).length>500,onPress:()=>M({...j,[R.id]:z.trim()}),children:`답변 등록`})]})]})})]}):(0,v.jsx)(`p`,{style:{...p,fontSize:`var(--g-text-compact)`},children:`표시할 리뷰가 없어요.`})})]})})]})}var E={id:`review-center`,title:`리뷰 센터`,koreanTitle:`리뷰 센터`,group:`blocks`,interactions:[`press`,`type`],description:`별점 분포, 사진과 동영상 후기, 필터와 판매자 답변 입력을 한 화면에 둔 고객 리뷰 업무 블록입니다.`,demo:T,behavior:[`평균과 분포는 받은 후기로 계산합니다. 별점 필터를 뺀 나머지 필터가 기준이 되고, 그 기준 개수를 분포 아래에 적습니다.`,`별점, 미디어, 답변 필터는 함께 적용되고, 목록 위 상태 줄이 기준 개수와 결과 개수를 읽어 줍니다. 필터 버튼은 aria-pressed로 선택 상태를 알립니다.`,`목록의 한 행 전체가 리뷰를 여는 버튼이고, 작성자와 날짜, 별점, 첨부, 답변 상태 줄은 그 버튼의 설명으로 연결됩니다.`,`답변 현황은 분포와 같은 기준으로 셉니다. 후기가 없거나 기준이 0개이면 평균, 분포, 답변 현황을 그리지 않습니다.`,`구매 확인 표시는 주문 서버가 보낸 purchaseVerified가 정확히 true일 때만 나옵니다.`,`사진은 Lightbox로 크게 열리고, 닫으면 누른 썸네일로 초점이 돌아갑니다. 파일을 불러오지 못하면 같은 자리에 안내를 둡니다.`,`동영상은 자동 재생하지 않고, 화면에서 절반 넘게 벗어나거나 페이지가 숨겨지면 멈춥니다. 불러오지 못하면 다시 불러오기 버튼을 두고, 누르면 새 플레이어로 초점을 옮깁니다.`],whenToUse:[`별점 분포, 사진과 동영상 후기, 판매자 답변을 한 화면에서 처리하는 쇼핑몰 운영 화면에 씁니다.`,`답변하지 못한 후기부터 필터로 골라 답변을 달아야 하는 고객 응대 업무에 씁니다.`],whenNot:[`후기를 작성하는 입력만 필요하면 Rating과 Textarea를 씁니다.`,`평점 하나를 요약해 보여 주면 KpiCard가 맞습니다.`,`여러 사용자의 댓글 스레드는 CommentsPanel을 씁니다.`],aiNotes:[`이 블록은 Meter, Progress, Lightbox, VideoPlayer, Textarea 등을 조합한 예시라 소스를 복사해 후기 데이터를 연결합니다.`,`구매 확인 표시는 주문 서버의 purchaseVerified가 정확히 true일 때만 나오도록 서버 값을 그대로 넘깁니다.`,`동영상은 자동 재생하지 않고, 사진은 Lightbox로 열고 닫을 때 썸네일로 포커스를 돌려야 합니다.`],usage:f(g),props:[{name:`Meter`,type:`'@gyeol/ui'`,description:`점수별 후기 수를 기준 개수에 대한 비율로 표시합니다.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`기준 개수 중 답변을 등록한 리뷰 수를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`필터, 리뷰 선택, 감사 문구 불러오기와 답변 등록을 실행합니다.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`답변 상태와 서버가 확인한 구매를 표시합니다.`},{name:`Lightbox`,type:`'@gyeol/ui'`,description:`후기 사진을 크게 엽니다.`},{name:`ImageThumbnail`,type:`'@gyeol/ui'`,description:`4:3 크기를 미리 잡은 사진 썸네일입니다.`},{name:`VideoPlayer`,type:`'@gyeol/ui'`,description:`동영상 후기를 재생합니다.`},{name:`Avatar`,type:`'@gyeol/ui'`,description:`리뷰 작성자의 프로필 영역입니다.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 없이 작성자의 이름을 표시합니다.`},{name:`Textarea`,type:`'@gyeol/ui'`,description:`500자 제한이 있는 답변 입력란입니다.`}]};export{E as doc};