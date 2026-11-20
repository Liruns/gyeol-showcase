import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-Cx46XDKr.js";import{r as i,t as ee}from"./Avatar-B-fe9U3w.js";import{t as a}from"./Badge-BQFvzJS_.js";import{t as o}from"./Switch-CaK53PCd.js";import{t as te}from"./VisuallyHidden-vNm_-Y48.js";import{t as s}from"./Dialog-DrUFVL2t.js";import{i as c,n as l,r as u,t as d}from"./Tabs-iOJc8ISf.js";import{t as f}from"./usage-source-BdQLyNT5.js";var p=`import {useEffect, useId, useRef, useState} from 'react';\r
import {Avatar, AvatarFallback, Badge, Button, Dialog, Switch, Tabs, TabsContent, TabsList, TabsTrigger, VisuallyHidden} from '@gyeol/ui';\r
\r
import {useSyncExternalStore} from 'react';\r
interface Notice {\r
  readonly id: string;\r
  /** The delivery id of the event that carried this notice; a repeated delivery of the same id is dropped. */\r
  readonly eventId: string;\r
  readonly name: string;\r
  readonly initials: string;\r
  readonly title: string;\r
  readonly detail: string;\r
  readonly project: string;\r
  readonly time: string;\r
  /** Someone is waiting on the reader: a review, an approval, an opinion. */\r
  readonly request: boolean;\r
}\r
\r
const initialNotices: readonly Notice[] = [\r
  {id: 'review', eventId: 'evt-2041', name: '이서준', initials: '서준', title: '모바일 결제 화면 3개의 디자인 검토를 요청했습니다', detail: '금요일 배포 전에 확인해 주세요.', project: '모바일 결제 개선', time: '10분 전', request: true},\r
  {id: 'comment', eventId: 'evt-2038', name: '김하늘', initials: '하늘', title: '온보딩 화면에 댓글을 남겼습니다', detail: '“첫 화면 안내 문구를 두 줄로 줄이면 어떨까요?”', project: '온보딩 개편', time: '32분 전', request: false},\r
  {id: 'approval', eventId: 'evt-2033', name: '박지우', initials: '지우', title: '11월 광고비 집행안 승인을 요청했습니다', detail: '집행 금액은 1,250,000원이고 승인 기한은 10월 31일입니다.', project: '가을 캠페인', time: '1시간 전', request: true},\r
  {id: 'mention', eventId: 'evt-2029', name: '정민재', initials: '민재', title: '회의록에서 나래 님을 언급했습니다', detail: '“@나래 다음 주 인터뷰 일정에 의견 부탁드립니다.”', project: '사용자 리서치', time: '3시간 전', request: true},\r
  {id: 'release', eventId: 'evt-2017', name: '배포 알림', initials: '배포', title: '버전 4.12 배포가 끝났습니다', detail: '수정 12건이 운영 환경에 반영되었습니다.', project: '제품 업데이트', time: '어제', request: false},\r
];\r
\r
type PushPermission = 'granted' | 'denied';\r
interface QuietHours {readonly enabled: boolean; readonly start: string; readonly end: string; readonly timeZone: string}\r
\r
/** Why the host refused a change: the server said no, or the request never got an answer. */\r
class NotificationHostError extends Error {\r
  constructor(readonly reason: 'rejected' | 'network') {super(reason);}\r
}\r
\r
/** The service behind the demo. Each user action reaches it as one callback; the demo itself sends no push and no email. */\r
interface NotificationHost {\r
  /** Stores the read state of these notices. Rejecting puts the previous state back on screen. */\r
  markRead(ids: readonly string[], read: boolean): Promise<unknown>;\r
  /** Turns workspace notifications on or off. The screen changes only after this resolves. */\r
  setEnabled(enabled: boolean): Promise<unknown>;\r
  /** Asks for browser push permission; called only from the 푸시 알림 켜기 button. */\r
  requestPushPermission(): Promise<PushPermission>;\r
  /** The quiet-hours preference. Delivery, time zone rules and urgent exceptions stay with the service. */\r
  setQuietHours(value: QuietHours): void;\r
  /** Notices the service pushes while the page is open; the demo drops a repeated \`eventId\`. */\r
  onEvent?(listener: (notice: Notice) => void): () => void;\r
}\r
\r
/** The catalog's host: it accepts every request at once and pushes no new notices. */\r
const catalogHost: NotificationHost = {\r
  markRead: () => Promise.resolve(),\r
  setEnabled: () => Promise.resolve(),\r
  requestPushPermission: () => Promise.resolve('granted'),\r
  setQuietHours: () => {},\r
};\r
\r
let currentHost = catalogHost;\r
const hostListeners = new Set<() => void>();\r
const subscribeHost = (listener: () => void) => {hostListeners.add(listener); return () => {hostListeners.delete(listener);};};\r
const readHost = () => currentHost;\r
\r
/** Puts another service behind every mounted demo, the way an application passes its own host. */\r
function setNotificationHost(host: NotificationHost) {\r
  currentHost = host;\r
  hostListeners.forEach(listener => listener());\r
}\r
\r
function useNotificationHost() {return useSyncExternalStore(subscribeHost, readHost);}
\r
const failure = (error: unknown) => error instanceof NotificationHostError && error.reason === 'network' ? '연결이 끊겨 응답을 받지 못했어요.' : '서버가 요청을 거절했어요.';\r
const muted = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'} as const;\r
const meta = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-body)'} as const;\r
const danger = {margin: 0, color: 'var(--g-danger)', fontSize: 'var(--g-text-small)', lineHeight: 'var(--g-leading-body)'} as const;\r
const sectionTitle = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'} as const;\r
const settingRow = {display: 'grid', gap: 'var(--g-space-2)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'} as const;\r
const settingHead = {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--g-space-2)'} as const;\r
const actions = {display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2)'} as const;\r
const emptyText = {all: '받은 알림이 없어요.', unread: '읽지 않은 알림이 없어요.', requests: '나에게 온 요청이 없어요.'} as const;\r
\r
function Demo() {\r
  const base = useId();\r
  const host = useNotificationHost();\r
  const [notices, setNotices] = useState<readonly Notice[]>(initialNotices);\r
  const [arrived, setArrived] = useState<readonly Notice[]>([]);\r
  const seen = useRef(new Set(initialNotices.map(notice => notice.eventId)));\r
  const [confirmed, setConfirmed] = useState<ReadonlySet<string>>(() => new Set(['release']));\r
  const [optimistic, setOptimistic] = useState<ReadonlyMap<string, boolean>>(() => new Map());\r
  const [readErrors, setReadErrors] = useState<ReadonlyMap<string, string>>(() => new Map());\r
  const [tab, setTab] = useState('all');\r
  const [keptUnread, setKeptUnread] = useState<ReadonlySet<string>>(() => new Set());\r
  const [focusId, setFocusId] = useState<string | null>(null);\r
  const [enabled, setEnabled] = useState(true);\r
  const [settingPending, setSettingPending] = useState(false);\r
  const [settingError, setSettingError] = useState('');\r
  const [push, setPush] = useState<'off' | 'asking' | 'on' | 'denied'>('off');\r
  const [quiet, setQuiet] = useState(false);\r
  const [notice, setNotice] = useState('');\r
\r
  const isRead = (id: string) => optimistic.get(id) ?? confirmed.has(id);\r
  const unread = notices.filter(item => !isRead(item.id));\r
\r
  useEffect(() => host.onEvent?.(event => {\r
    if (seen.current.has(event.eventId)) return;\r
    seen.current.add(event.eventId);\r
    setArrived(current => [event, ...current]);\r
  }), [host]);\r
\r
  useEffect(() => {\r
    if (focusId) document.getElementById(\`\${base}-\${focusId}\`)?.focus();\r
  }, [base, focusId]);\r
\r
  const without = <T,>(map: ReadonlyMap<string, T>, ids: readonly string[]) => new Map([...map].filter(([id]) => !ids.includes(id)));\r
\r
  /** Shows the new read state at once; the host's answer either keeps it or puts the previous state back. */\r
  const sendRead = (ids: readonly string[], read: boolean, subject: string) => {\r
    setOptimistic(current => new Map([...current, ...ids.map(id => [id, read] as const)]));\r
    setReadErrors(current => without(current, ids));\r
    host.markRead(ids, read).then(() => {\r
      setConfirmed(current => {const next = new Set(current); ids.forEach(id => read ? next.add(id) : next.delete(id)); return next;});\r
      setOptimistic(current => without(current, ids));\r
      setNotice(\`\${subject} \${read ? '읽음으로' : '안 읽음으로'} 표시했어요.\`);\r
    }, (error: unknown) => {\r
      const message = \`\${failure(error)} \${read ? '안 읽음' : '읽음'} 상태로 되돌렸어요.\`;\r
      setOptimistic(current => without(current, ids));\r
      setReadErrors(current => new Map([...current, ...ids.map(id => [id, message] as const)]));\r
      setNotice(\`\${subject} \${read ? '읽음으로' : '안 읽음으로'} 표시하지 못했어요. \${message}\`);\r
    });\r
  };\r
\r
  const sendSetting = (next: boolean) => {\r
    setSettingPending(true);\r
    setSettingError('');\r
    host.setEnabled(next).then(() => {\r
      setEnabled(next);\r
      setNotice(next ? '알림을 켰어요.' : '알림을 껐어요. 받은 알림은 그대로 남아요.');\r
    }, (error: unknown) => {\r
      setSettingError(\`\${failure(error)} 알림은 \${next ? '꺼진' : '켜진'} 그대로예요.\`);\r
    }).finally(() => setSettingPending(false));\r
  };\r
\r
  const askPush = () => {\r
    setPush('asking');\r
    host.requestPushPermission().then(result => {\r
      setPush(result === 'granted' ? 'on' : 'denied');\r
      setNotice(result === 'granted' ? '푸시 알림을 켰어요.' : '브라우저가 알림 권한을 허용하지 않았어요.');\r
    });\r
  };\r
\r
  const showArrived = () => {\r
    setNotices(current => [...arrived, ...current]);\r
    setFocusId(arrived[0]?.id ?? null);\r
    setArrived([]);\r
  };\r
\r
  const lists = {\r
    all: notices,\r
    // Notices read while this tab is open stay in place, so a row never jumps out from under focus.\r
    unread: notices.filter(item => !isRead(item.id) || keptUnread.has(item.id)),\r
    requests: notices.filter(item => item.request),\r
  } as const;\r
  const requestCount = notices.filter(item => item.request && !isRead(item.id)).length;\r
\r
  return <section aria-label="알림 센터" style={{display: 'grid', gap: 'var(--g-space-4)', color: 'var(--g-ink)', minWidth: 0, overflowWrap: 'anywhere'}}>\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-6) var(--g-space-8)', alignItems: 'flex-start', minWidth: 0}}>\r
      <section aria-labelledby={\`\${base}-inbox\`} style={{display: 'grid', gap: 'var(--g-space-3)', flex: '3 1 calc(var(--g-space-16) * 6)', minWidth: 0, maxWidth: '100%'}}>\r
        <div style={settingHead}>\r
          <div style={{...actions, columnGap: 'var(--g-space-3)'}}>\r
            <h2 id={\`\${base}-inbox\`} style={sectionTitle}>받은 알림</h2>\r
            {/* One fixed-height slot holds either the count or the arrivals button, so an arrival never pushes the list down. */}\r
            <div style={{display: 'flex', alignItems: 'center', minBlockSize: 'var(--g-target-min)'}}>\r
              {arrived.length > 0\r
                ? <Button variant="secondary" onPress={showArrived}>새 알림 {arrived.length}개 보기</Button>\r
                : <p style={muted}>읽지 않은 알림 {unread.length}개</p>}\r
            </div>\r
          </div>\r
          <Button variant="quiet" onPress={() => {\r
            const ids = unread.filter(item => !optimistic.has(item.id)).map(item => item.id);\r
            if (ids.length === 0) {setNotice('읽지 않은 알림이 없어요.'); return;}\r
            sendRead(ids, true, \`알림 \${ids.length}개를\`);\r
          }}>모두 읽음으로 표시</Button>\r
        </div>\r
        <Tabs value={tab} onValueChange={next => {\r
          if (next === 'unread') setKeptUnread(new Set(unread.map(item => item.id)));\r
          setTab(next);\r
        }}>\r
          <TabsList aria-label="알림 분류" variant="line" size="sm">\r
            <TabsTrigger value="all">전체</TabsTrigger>\r
            <TabsTrigger value="unread">안 읽음 {unread.length}</TabsTrigger>\r
            <TabsTrigger value="requests">나에게 온 요청 {requestCount}</TabsTrigger>\r
          </TabsList>\r
          {(['all', 'unread', 'requests'] as const).map(filter => <TabsContent key={filter} value={filter}>\r
            <div style={{display: 'grid'}}>\r
              {lists[filter].length === 0 && <p style={{...muted, paddingBlock: 'var(--g-space-4)'}}>{emptyText[filter]}</p>}\r
              {lists[filter].map((item, index) => {\r
                const read = isRead(item.id);\r
                const pending = optimistic.has(item.id);\r
                const error = readErrors.get(item.id);\r
                const titleId = \`\${base}-\${filter}-\${item.id}-title\`;\r
                const errorId = \`\${base}-\${filter}-\${item.id}-error\`;\r
                return <article key={item.id} id={filter === tab ? \`\${base}-\${item.id}\` : undefined} tabIndex={-1} aria-labelledby={titleId}\r
                  style={{display: 'flex', alignItems: 'flex-start', gap: 'var(--g-space-3)', paddingBlock: 'var(--g-space-2)', borderTop: index === 0 ? 'none' : 'var(--g-border-width) solid var(--g-border)', minWidth: 0}}>\r
                  <Avatar size="sm" style={{flexShrink: 0}}><AvatarFallback label={item.name}>{item.initials}</AvatarFallback></Avatar>\r
                  <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0, flex: 1}}>\r
                    <div style={{display: 'flex', alignItems: 'baseline', gap: 'var(--g-space-2)', minWidth: 0}}>\r
                      <p id={titleId} style={{margin: 0, flex: 1, minWidth: 0, fontWeight: read ? 'var(--g-weight-regular)' : 'var(--g-weight-medium)', lineHeight: 'var(--g-leading-body)'}}>\r
                        <span style={{fontWeight: 'var(--g-weight-medium)'}}>{item.name}</span> {item.title}\r
                      </p>\r
                      <span style={{...meta, flexShrink: 0}}>{item.time}</span>\r
                      {!read && <span style={{flexShrink: 0, alignSelf: 'center', width: 'var(--g-space-2)', height: 'var(--g-space-2)', borderRadius: 'var(--g-radius-pill)', background: 'var(--g-accent)'}}><VisuallyHidden>안 읽음</VisuallyHidden></span>}\r
                    </div>\r
                    <p style={{...meta, display: 'flex', flexWrap: 'wrap', columnGap: 'var(--g-space-2)'}}><span>{item.detail}</span><span>{item.project}</span></p>\r
                    {error && <p id={errorId} style={danger}>{error}</p>}\r
                  </div>\r
                  <Button variant="quiet" isPending={pending} aria-describedby={error ? \`\${titleId} \${errorId}\` : titleId} style={{flexShrink: 0, alignSelf: 'center'}}\r
                    onPress={() => sendRead([item.id], !read, \`\${item.name} 님의 알림을\`)}>\r
                    {(pending ? !optimistic.get(item.id) : read) ? '안 읽음으로 표시' : '읽음으로 표시'}\r
                  </Button>\r
                </article>;\r
              })}\r
            </div>\r
          </TabsContent>)}\r
        </Tabs>\r
      </section>\r
      <section aria-labelledby={\`\${base}-settings\`} style={{display: 'grid', gap: 'var(--g-space-4)', flex: '1 1 calc(var(--g-space-16) * 4)', minWidth: 0, maxWidth: '100%'}}>\r
        <h2 id={\`\${base}-settings\`} style={sectionTitle}>알림 설정</h2>\r
        <div role="group" aria-labelledby={\`\${base}-enabled\`} style={{...settingRow, paddingTop: 0, borderTop: 'none'}}>\r
          <div style={settingHead}><strong id={\`\${base}-enabled\`} style={{fontWeight: 'var(--g-weight-medium)'}}>새 알림 받기</strong><Badge state={enabled ? 'done' : 'idle'} label={enabled ? '켜짐' : '꺼짐'}/></div>\r
          <p style={muted}>끄면 댓글과 요청 알림이 오지 않아요.</p>\r
          {settingPending && <p style={muted}>{enabled ? '승인을 기다리는 중이에요. 승인되면 꺼져요.' : '승인을 기다리는 중이에요. 승인되면 켜져요.'}</p>}\r
          {settingError && <p role="alert" style={danger}>{settingError}</p>}\r
          <div style={actions}>\r
            {enabled\r
              ? <Dialog role="alertdialog" title="알림을 끌까요?" closeLabel="닫기" cancelLabel="취소" confirmLabel="끄기" onConfirm={() => sendSetting(false)}\r
                trigger={<Button variant="secondary" isPending={settingPending}>알림 끄기</Button>}>\r
                새 댓글과 요청 알림을 받지 않아요. 이미 받은 알림과 읽음 상태는 그대로예요.\r
              </Dialog>\r
              : <Button variant="secondary" isPending={settingPending} onPress={() => sendSetting(true)}>알림 켜기</Button>}\r
            {settingError && !settingPending && <Button variant="quiet" onPress={() => sendSetting(!enabled)}>다시 시도</Button>}\r
          </div>\r
        </div>\r
        <div role="group" aria-labelledby={\`\${base}-push\`} style={settingRow}>\r
          <div style={settingHead}><strong id={\`\${base}-push\`} style={{fontWeight: 'var(--g-weight-medium)'}}>이 브라우저의 푸시 알림</strong><Badge state={push === 'on' ? 'done' : push === 'denied' ? 'error' : 'idle'} label={push === 'on' ? '켜짐' : push === 'denied' ? '허용 안 됨' : '꺼짐'}/></div>\r
          {(push === 'off' || push === 'asking') && <p style={muted}>요청 알림을 브라우저 알림으로도 받아요.</p>}\r
          {push === 'denied' && <p role="alert" style={danger}>브라우저가 알림 권한을 허용하지 않았어요. 사이트 설정에서 허용한 뒤 다시 눌러 주세요.</p>}\r
          {push !== 'on' && <div style={actions}><Button variant="secondary" isPending={push === 'asking'} onPress={askPush}>푸시 알림 켜기</Button></div>}\r
        </div>\r
        <div style={settingRow}>\r
          <Switch isSelected={quiet} onChange={value => {\r
            setQuiet(value);\r
            host.setQuietHours({enabled: value, start: '22:00', end: '08:00', timeZone: 'Asia/Seoul'});\r
            setNotice(value ? '방해 금지 시간을 켰어요.' : '방해 금지 시간을 껐어요.');\r
          }} description="오후 10시부터 오전 8시까지 푸시를 보내지 않아요.">방해 금지 시간</Switch>\r
        </div>\r
      </section>\r
    </div>\r
    <p role="status" style={muted}>{notice}</p>\r
  </section>;\r
}`,m=e(t(),1),h=[{id:`review`,eventId:`evt-2041`,name:`이서준`,initials:`서준`,title:`모바일 결제 화면 3개의 디자인 검토를 요청했습니다`,detail:`금요일 배포 전에 확인해 주세요.`,project:`모바일 결제 개선`,time:`10분 전`,request:!0},{id:`comment`,eventId:`evt-2038`,name:`김하늘`,initials:`하늘`,title:`온보딩 화면에 댓글을 남겼습니다`,detail:`“첫 화면 안내 문구를 두 줄로 줄이면 어떨까요?”`,project:`온보딩 개편`,time:`32분 전`,request:!1},{id:`approval`,eventId:`evt-2033`,name:`박지우`,initials:`지우`,title:`11월 광고비 집행안 승인을 요청했습니다`,detail:`집행 금액은 1,250,000원이고 승인 기한은 10월 31일입니다.`,project:`가을 캠페인`,time:`1시간 전`,request:!0},{id:`mention`,eventId:`evt-2029`,name:`정민재`,initials:`민재`,title:`회의록에서 나래 님을 언급했습니다`,detail:`“@나래 다음 주 인터뷰 일정에 의견 부탁드립니다.”`,project:`사용자 리서치`,time:`3시간 전`,request:!0},{id:`release`,eventId:`evt-2017`,name:`배포 알림`,initials:`배포`,title:`버전 4.12 배포가 끝났습니다`,detail:`수정 12건이 운영 환경에 반영되었습니다.`,project:`제품 업데이트`,time:`어제`,request:!1}],g=class extends Error{reason;constructor(e){super(e),this.reason=e}},_={markRead:()=>Promise.resolve(),setEnabled:()=>Promise.resolve(),requestPushPermission:()=>Promise.resolve(`granted`),setQuietHours:()=>{}},v=new Set,y=e=>(v.add(e),()=>{v.delete(e)}),b=()=>_;function ne(){return(0,m.useSyncExternalStore)(y,b)}var x=n(),S=e=>e instanceof g&&e.reason===`network`?`연결이 끊겨 응답을 받지 못했어요.`:`서버가 요청을 거절했어요.`,C={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},w={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-body)`},T={margin:0,color:`var(--g-danger)`,fontSize:`var(--g-text-small)`,lineHeight:`var(--g-leading-body)`},E={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},D={display:`grid`,gap:`var(--g-space-2)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},O={display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,alignItems:`center`,gap:`var(--g-space-2)`},k={display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2)`},re={all:`받은 알림이 없어요.`,unread:`읽지 않은 알림이 없어요.`,requests:`나에게 온 요청이 없어요.`};function A(){let e=(0,m.useId)(),t=ne(),[n,f]=(0,m.useState)(h),[p,g]=(0,m.useState)([]),_=(0,m.useRef)(new Set(h.map(e=>e.eventId))),[v,y]=(0,m.useState)(()=>new Set([`release`])),[b,A]=(0,m.useState)(()=>new Map),[j,M]=(0,m.useState)(()=>new Map),[N,P]=(0,m.useState)(`all`),[F,I]=(0,m.useState)(()=>new Set),[L,R]=(0,m.useState)(null),[z,B]=(0,m.useState)(!0),[V,H]=(0,m.useState)(!1),[U,W]=(0,m.useState)(``),[G,K]=(0,m.useState)(`off`),[ie,ae]=(0,m.useState)(!1),[oe,q]=(0,m.useState)(``),J=e=>b.get(e)??v.has(e),Y=n.filter(e=>!J(e.id));(0,m.useEffect)(()=>t.onEvent?.(e=>{_.current.has(e.eventId)||(_.current.add(e.eventId),g(t=>[e,...t]))}),[t]),(0,m.useEffect)(()=>{L&&document.getElementById(`${e}-${L}`)?.focus()},[e,L]);let X=(e,t)=>new Map([...e].filter(([e])=>!t.includes(e))),Z=(e,n,r)=>{A(t=>new Map([...t,...e.map(e=>[e,n])])),M(t=>X(t,e)),t.markRead(e,n).then(()=>{y(t=>{let r=new Set(t);return e.forEach(e=>n?r.add(e):r.delete(e)),r}),A(t=>X(t,e)),q(`${r} ${n?`읽음으로`:`안 읽음으로`} 표시했어요.`)},t=>{let i=`${S(t)} ${n?`안 읽음`:`읽음`} 상태로 되돌렸어요.`;A(t=>X(t,e)),M(t=>new Map([...t,...e.map(e=>[e,i])])),q(`${r} ${n?`읽음으로`:`안 읽음으로`} 표시하지 못했어요. ${i}`)})},Q=e=>{H(!0),W(``),t.setEnabled(e).then(()=>{B(e),q(e?`알림을 켰어요.`:`알림을 껐어요. 받은 알림은 그대로 남아요.`)},t=>{W(`${S(t)} 알림은 ${e?`꺼진`:`켜진`} 그대로예요.`)}).finally(()=>H(!1))},se=()=>{K(`asking`),t.requestPushPermission().then(e=>{K(e===`granted`?`on`:`denied`),q(e===`granted`?`푸시 알림을 켰어요.`:`브라우저가 알림 권한을 허용하지 않았어요.`)})},ce=()=>{f(e=>[...p,...e]),R(p[0]?.id??null),g([])},$={all:n,unread:n.filter(e=>!J(e.id)||F.has(e.id)),requests:n.filter(e=>e.request)},le=n.filter(e=>e.request&&!J(e.id)).length;return(0,x.jsxs)(`section`,{"aria-label":`알림 센터`,style:{display:`grid`,gap:`var(--g-space-4)`,color:`var(--g-ink)`,minWidth:0,overflowWrap:`anywhere`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6) var(--g-space-8)`,alignItems:`flex-start`,minWidth:0},children:[(0,x.jsxs)(`section`,{"aria-labelledby":`${e}-inbox`,style:{display:`grid`,gap:`var(--g-space-3)`,flex:`3 1 calc(var(--g-space-16) * 6)`,minWidth:0,maxWidth:`100%`},children:[(0,x.jsxs)(`div`,{style:O,children:[(0,x.jsxs)(`div`,{style:{...k,columnGap:`var(--g-space-3)`},children:[(0,x.jsx)(`h2`,{id:`${e}-inbox`,style:E,children:`받은 알림`}),(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,minBlockSize:`var(--g-target-min)`},children:p.length>0?(0,x.jsxs)(r,{variant:`secondary`,onPress:ce,children:[`새 알림 `,p.length,`개 보기`]}):(0,x.jsxs)(`p`,{style:C,children:[`읽지 않은 알림 `,Y.length,`개`]})})]}),(0,x.jsx)(r,{variant:`quiet`,onPress:()=>{let e=Y.filter(e=>!b.has(e.id)).map(e=>e.id);e.length===0?q(`읽지 않은 알림이 없어요.`):Z(e,!0,`알림 ${e.length}개를`)},children:`모두 읽음으로 표시`})]}),(0,x.jsxs)(d,{value:N,onValueChange:e=>{e===`unread`&&I(new Set(Y.map(e=>e.id))),P(e)},children:[(0,x.jsxs)(u,{"aria-label":`알림 분류`,variant:`line`,size:`sm`,children:[(0,x.jsx)(c,{value:`all`,children:`전체`}),(0,x.jsxs)(c,{value:`unread`,children:[`안 읽음 `,Y.length]}),(0,x.jsxs)(c,{value:`requests`,children:[`나에게 온 요청 `,le]})]}),[`all`,`unread`,`requests`].map(t=>(0,x.jsx)(l,{value:t,children:(0,x.jsxs)(`div`,{style:{display:`grid`},children:[$[t].length===0&&(0,x.jsx)(`p`,{style:{...C,paddingBlock:`var(--g-space-4)`},children:re[t]}),$[t].map((n,a)=>{let o=J(n.id),s=b.has(n.id),c=j.get(n.id),l=`${e}-${t}-${n.id}-title`,u=`${e}-${t}-${n.id}-error`;return(0,x.jsxs)(`article`,{id:t===N?`${e}-${n.id}`:void 0,tabIndex:-1,"aria-labelledby":l,style:{display:`flex`,alignItems:`flex-start`,gap:`var(--g-space-3)`,paddingBlock:`var(--g-space-2)`,borderTop:a===0?`none`:`var(--g-border-width) solid var(--g-border)`,minWidth:0},children:[(0,x.jsx)(ee,{size:`sm`,style:{flexShrink:0},children:(0,x.jsx)(i,{label:n.name,children:n.initials})}),(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0,flex:1},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--g-space-2)`,minWidth:0},children:[(0,x.jsxs)(`p`,{id:l,style:{margin:0,flex:1,minWidth:0,fontWeight:o?`var(--g-weight-regular)`:`var(--g-weight-medium)`,lineHeight:`var(--g-leading-body)`},children:[(0,x.jsx)(`span`,{style:{fontWeight:`var(--g-weight-medium)`},children:n.name}),` `,n.title]}),(0,x.jsx)(`span`,{style:{...w,flexShrink:0},children:n.time}),!o&&(0,x.jsx)(`span`,{style:{flexShrink:0,alignSelf:`center`,width:`var(--g-space-2)`,height:`var(--g-space-2)`,borderRadius:`var(--g-radius-pill)`,background:`var(--g-accent)`},children:(0,x.jsx)(te,{children:`안 읽음`})})]}),(0,x.jsxs)(`p`,{style:{...w,display:`flex`,flexWrap:`wrap`,columnGap:`var(--g-space-2)`},children:[(0,x.jsx)(`span`,{children:n.detail}),(0,x.jsx)(`span`,{children:n.project})]}),c&&(0,x.jsx)(`p`,{id:u,style:T,children:c})]}),(0,x.jsx)(r,{variant:`quiet`,isPending:s,"aria-describedby":c?`${l} ${u}`:l,style:{flexShrink:0,alignSelf:`center`},onPress:()=>Z([n.id],!o,`${n.name} 님의 알림을`),children:(s?!b.get(n.id):o)?`안 읽음으로 표시`:`읽음으로 표시`})]},n.id)})]})},t))]})]}),(0,x.jsxs)(`section`,{"aria-labelledby":`${e}-settings`,style:{display:`grid`,gap:`var(--g-space-4)`,flex:`1 1 calc(var(--g-space-16) * 4)`,minWidth:0,maxWidth:`100%`},children:[(0,x.jsx)(`h2`,{id:`${e}-settings`,style:E,children:`알림 설정`}),(0,x.jsxs)(`div`,{role:`group`,"aria-labelledby":`${e}-enabled`,style:{...D,paddingTop:0,borderTop:`none`},children:[(0,x.jsxs)(`div`,{style:O,children:[(0,x.jsx)(`strong`,{id:`${e}-enabled`,style:{fontWeight:`var(--g-weight-medium)`},children:`새 알림 받기`}),(0,x.jsx)(a,{state:z?`done`:`idle`,label:z?`켜짐`:`꺼짐`})]}),(0,x.jsx)(`p`,{style:C,children:`끄면 댓글과 요청 알림이 오지 않아요.`}),V&&(0,x.jsx)(`p`,{style:C,children:z?`승인을 기다리는 중이에요. 승인되면 꺼져요.`:`승인을 기다리는 중이에요. 승인되면 켜져요.`}),U&&(0,x.jsx)(`p`,{role:`alert`,style:T,children:U}),(0,x.jsxs)(`div`,{style:k,children:[z?(0,x.jsx)(s,{role:`alertdialog`,title:`알림을 끌까요?`,closeLabel:`닫기`,cancelLabel:`취소`,confirmLabel:`끄기`,onConfirm:()=>Q(!1),trigger:(0,x.jsx)(r,{variant:`secondary`,isPending:V,children:`알림 끄기`}),children:`새 댓글과 요청 알림을 받지 않아요. 이미 받은 알림과 읽음 상태는 그대로예요.`}):(0,x.jsx)(r,{variant:`secondary`,isPending:V,onPress:()=>Q(!0),children:`알림 켜기`}),U&&!V&&(0,x.jsx)(r,{variant:`quiet`,onPress:()=>Q(!z),children:`다시 시도`})]})]}),(0,x.jsxs)(`div`,{role:`group`,"aria-labelledby":`${e}-push`,style:D,children:[(0,x.jsxs)(`div`,{style:O,children:[(0,x.jsx)(`strong`,{id:`${e}-push`,style:{fontWeight:`var(--g-weight-medium)`},children:`이 브라우저의 푸시 알림`}),(0,x.jsx)(a,{state:G===`on`?`done`:G===`denied`?`error`:`idle`,label:G===`on`?`켜짐`:G===`denied`?`허용 안 됨`:`꺼짐`})]}),(G===`off`||G===`asking`)&&(0,x.jsx)(`p`,{style:C,children:`요청 알림을 브라우저 알림으로도 받아요.`}),G===`denied`&&(0,x.jsx)(`p`,{role:`alert`,style:T,children:`브라우저가 알림 권한을 허용하지 않았어요. 사이트 설정에서 허용한 뒤 다시 눌러 주세요.`}),G!==`on`&&(0,x.jsx)(`div`,{style:k,children:(0,x.jsx)(r,{variant:`secondary`,isPending:G===`asking`,onPress:se,children:`푸시 알림 켜기`})})]}),(0,x.jsx)(`div`,{style:D,children:(0,x.jsx)(o,{isSelected:ie,onChange:e=>{ae(e),t.setQuietHours({enabled:e,start:`22:00`,end:`08:00`,timeZone:`Asia/Seoul`}),q(e?`방해 금지 시간을 켰어요.`:`방해 금지 시간을 껐어요.`)},description:`오후 10시부터 오전 8시까지 푸시를 보내지 않아요.`,children:`방해 금지 시간`})})]})]}),(0,x.jsx)(`p`,{role:`status`,style:C,children:oe})]})}var j={id:`notification-center`,title:`알림 센터`,koreanTitle:`알림 센터`,group:`blocks`,interactions:[`press`],description:`팀의 댓글과 요청을 모아 읽고, 알림 받기와 푸시, 방해 금지 시간을 정하는 알림 센터입니다.`,behavior:[`알림은 전체, 안 읽음, 나에게 온 요청 탭으로 나눕니다. 안 읽음 탭을 연 동안 읽은 알림은 탭을 다시 고를 때까지 그 자리에 남습니다.`,`알림 한 건은 두 줄 행입니다. 보낸 사람과 제목, 시각이 첫 줄에, 내용과 프로젝트가 둘째 줄에 놓이고 행 사이는 구분선 하나로 나눕니다.`,`읽지 않은 알림은 제목을 굵게 하고 끝에 강조색 점을 붙입니다. 점은 보조 기술에 안 읽음으로 읽힙니다.`,`읽음으로 표시는 새 상태를 바로 보여 주고, 서비스가 답할 때까지 버튼을 그 자리에 pending으로 둡니다. 서비스가 거절하면 원래 상태로 되돌리고 행 아래에 이유를 보여 주며, 초점과 스크롤 위치는 그대로입니다.`,`페이지를 연 동안 온 알림은 읽지 않은 개수 자리의 새 알림 N개 보기 버튼 뒤에서 기다리므로 목록과 초점을 움직이지 않습니다. 누르면 목록 맨 위에 넣고 첫 알림에 초점을 옮깁니다. 이미 받은 eventId는 다시 넣지 않습니다.`,`알림 끄기는 확인창을 거칩니다. 취소하면 아무 요청도 보내지 않고, 끄기를 누르면 서비스가 승인할 때까지 켜짐으로 남습니다. 거절되거나 응답이 없으면 켜짐을 유지하고 이유와 다시 시도를 보여 줍니다.`,`푸시 권한은 푸시 알림 켜기를 누를 때만 서비스에 묻고, 페이지에 들어올 때나 브라우저 권한 API로 직접 묻지 않습니다.`,`방해 금지 시간은 범위와 Asia/Seoul 시간대를 서비스에 넘깁니다. 실제 발송과 긴급 예외는 서비스가 정합니다.`,`카탈로그의 서비스는 모든 요청을 바로 승인하고 새 알림을 보내지 않습니다. 예제는 실제 푸시나 이메일을 보내지 않습니다.`],whenToUse:[`협업 도구에서 댓글과 요청 알림을 모아 읽음 처리하고 푸시와 방해 금지 시간을 정하게 할 때 씁니다.`,`읽음 표시나 알림 끄기를 서비스가 거절하면 원래 상태로 되돌려야 하는 설정 화면에 맞습니다.`],whenNot:[`저장한 직후 결과 한 줄을 알리는 데는 Toast를 씁니다.`,`서비스 전체 공지는 Announcement를 씁니다.`,`에이전트가 보낸 메시지를 목록과 본문으로 읽으려면 Inbox를 씁니다.`],aiNotes:[`이 페이지는 Tabs, Avatar, Badge, Button, Switch, Dialog를 조합한 블록입니다. 읽음과 푸시 요청은 서비스가 받아 승인이나 거절로 답하는 구조로 연결합니다.`,`알림 끄기 확인은 Dialog에 role을 alertdialog로 주고 confirmLabel과 onConfirm을 넘깁니다. 서비스가 거절하면 켜짐을 유지하고 이유를 보여 줍니다.`,`새로 온 알림은 목록을 움직이지 않고 버튼 뒤에 쌓으며, 이미 받은 eventId는 다시 넣지 않습니다.`],demo:A,usage:f(p),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`알림을 보낸 팀원의 아바타.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 대신 표시하는 한국어 이름.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`알림 받기와 푸시 알림의 켜짐, 꺼짐, 허용 안 됨 상태.`},{name:`Button`,type:`'@gyeol/ui'`,description:`읽음으로 표시, 새 알림 보기, 푸시 알림 켜기, 다시 시도. 서비스의 답을 기다리는 동안 pending으로 초점을 유지합니다.`},{name:`Dialog`,type:`'@gyeol/ui'`,description:`알림 끄기 전에 묻는 확인창. 취소하면 서비스에 아무 요청도 보내지 않습니다.`},{name:`Switch`,type:`'@gyeol/ui'`,description:`방해 금지 시간 설정.`},{name:`Tabs`,type:`'@gyeol/ui'`,description:`알림 분류 선택 상태.`},{name:`TabsList`,type:`'@gyeol/ui'`,description:`키보드로 이동하는 알림 분류 목록.`},{name:`TabsTrigger`,type:`'@gyeol/ui'`,description:`전체, 안 읽음, 나에게 온 요청 선택.`},{name:`TabsContent`,type:`'@gyeol/ui'`,description:`선택한 분류의 알림 목록.`},{name:`VisuallyHidden`,type:`'@gyeol/ui'`,description:`읽지 않은 알림의 강조색 점을 보조 기술에 안 읽음으로 읽어 줍니다.`}]};export{j as doc};