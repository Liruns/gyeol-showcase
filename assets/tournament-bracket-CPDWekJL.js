import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./Badge-rwba6Qq3.js";import{t as a}from"./Card-B7jf_mi8.js";import{t as o}from"./usage-source-BdQLyNT5.js";var s=`import {useState} from 'react';\r
import {Badge, Button, Card} from '@gyeol/ui';\r
\r
const rounds = [\r
  {name: '8강', date: '10월 24일', status: '종료', matches: [\r
    {id: 'q1', teams: ['한강 러너스', '서초 유나이티드'], scores: ['3', '1'], winner: 0, time: '10:00'},\r
    {id: 'q2', teams: ['성수 웨이브', '마포 크루'], scores: ['2', '0'], winner: 0, time: '11:00'},\r
    {id: 'q3', teams: ['북서울 FC', '송파 블루'], scores: ['1', '2'], winner: 1, time: '13:00'},\r
    {id: 'q4', teams: ['연남 애슬레틱', '관악 그린'], scores: ['4', '2'], winner: 0, time: '14:00'},\r
  ]},\r
  {name: '준결승', date: '10월 25일', status: '종료', matches: [\r
    {id: 's1', teams: ['한강 러너스', '성수 웨이브'], scores: ['2', '1'], winner: 0, time: '13:00'},\r
    {id: 's2', teams: ['송파 블루', '연남 애슬레틱'], scores: ['0', '2'], winner: 1, time: '15:00'},\r
  ]},\r
  {name: '결승', date: '10월 26일', status: '오늘', matches: [\r
    {id: 'final', teams: ['한강 러너스', '연남 애슬레틱'], scores: ['-', '-'], winner: -1, time: '18:00'},\r
  ]},\r
];\r
\r
const caption = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'} as const;\r
\r
function TournamentBracket() {\r
  const [selected, setSelected] = useState('final');\r
  const [reminder, setReminder] = useState(false);\r
  const round = rounds.find(item => item.matches.some(entry => entry.id === selected))!;\r
  const match = round.matches.find(item => item.id === selected)!;\r
\r
  return (\r
    <section aria-label="가을 풋살컵 대진표" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', minWidth: 0}}>\r
      <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-4)'}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
          <h2 className="catalog-block-title">가을 풋살컵</h2>\r
          <p style={{margin: 0, color: 'var(--g-muted)'}}>10월 24일부터 26일까지, 서울숲 풋살장, 8개 팀</p>\r
        </div>\r
        <Badge state="idle" label="오늘 결승"/>\r
      </header>\r
\r
      <section aria-labelledby="bracket-title" style={{display: 'grid', gap: 'var(--g-space-4)'}}>\r
        <h3 id="bracket-title" style={{margin: 0, fontSize: 'var(--g-text-heading-4)', letterSpacing: 'var(--g-tracking-heading)'}}>토너먼트 대진표</h3>\r
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-5)', alignItems: 'stretch'}}>\r
          {rounds.map(item => (\r
            <section key={item.name} aria-label={item.name} style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--g-space-3)'}}>\r
              <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-2)', borderBottom: 'var(--g-border-width) solid var(--g-border)', paddingBottom: 'var(--g-space-2)'}}>\r
                <h4 style={{margin: 0, fontSize: 'var(--g-text-body)'}}>{item.name}</h4>\r
                <span style={{...caption, display: 'flex', gap: 'var(--g-space-2)'}}><span>{item.date}</span><span>{item.status}</span></span>\r
              </div>\r
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: 'var(--g-space-3)'}}>\r
                {item.matches.map(entry => (\r
                  <Card key={entry.id} size="sm" variant="outline" style={{padding: 0, minWidth: 0, borderColor: selected === entry.id ? 'var(--g-accent)' : 'var(--g-border)'}}>\r
                    <button type="button" aria-pressed={selected === entry.id} aria-label={entry.teams.join(' 대 ')} aria-describedby={\`\${entry.id}-score\`} onClick={() => setSelected(entry.id)}\r
                      style={{display: 'grid', gap: 'var(--g-space-2)', padding: 'var(--g-space-3)', margin: 0, border: 0, borderRadius: 'inherit', background: 'transparent', color: 'inherit', font: 'inherit', textAlign: 'start', cursor: 'pointer'}}>\r
                      <span id={\`\${entry.id}-score\`} style={{display: 'grid', gap: 'var(--g-space-2)'}}>\r
                        <span style={caption}>{entry.time}</span>\r
                        {entry.teams.map((team, index) => (\r
                          <span key={team} style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--g-space-2)', color: entry.winner === index ? 'var(--g-ink)' : 'var(--g-muted)', fontWeight: entry.winner === index ? 'var(--g-weight-selected)' : 'var(--g-weight-regular)'}}>\r
                            <span style={{overflowWrap: 'anywhere'}}>{team}{entry.winner === index && <span className="g-visually-hidden"> 승리</span>}</span>\r
                            <span style={{fontVariantNumeric: 'tabular-nums', fontWeight: 'var(--g-weight-semibold)', textAlign: 'end'}}>{entry.scores[index]}</span>\r
                          </span>\r
                        ))}\r
                      </span>\r
                    </button>\r
                  </Card>\r
                ))}\r
              </div>\r
            </section>\r
          ))}\r
        </div>\r
      </section>\r
\r
      <section aria-labelledby="match-title" aria-live="polite" style={{display: 'grid', gap: 'var(--g-space-3)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
          <h3 id="match-title" style={{margin: 0, fontSize: 'var(--g-text-heading-4)', letterSpacing: 'var(--g-tracking-heading)', overflowWrap: 'anywhere'}}>{round.name}, {match.teams.join(' 대 ')}</h3>\r
          {match.id === 'final'\r
            ? <Button variant="secondary" aria-pressed={reminder} onPress={() => setReminder(value => !value)}>{reminder ? '결승 알림 설정됨' : '결승 알림 받기'}</Button>\r
            : <Badge state="done" label="결과 확정"/>}\r
        </div>\r
        <dl style={{display: 'grid', gridTemplateColumns: 'max-content minmax(0, 1fr)', gap: 'var(--g-space-1) var(--g-space-4)', margin: 0}}>\r
          <dt style={{color: 'var(--g-muted)'}}>장소</dt><dd style={{margin: 0}}>서울숲 풋살장 A구장</dd>\r
          <dt style={{color: 'var(--g-muted)'}}>시간</dt><dd style={{margin: 0}}>{round.date} {match.time}</dd>\r
          <dt style={{color: 'var(--g-muted)'}}>경기 방식</dt><dd style={{margin: 0}}>전후반 각 20분</dd>\r
          {match.id !== 'final' && <><dt style={{color: 'var(--g-muted)'}}>최종 스코어</dt><dd style={{margin: 0, fontVariantNumeric: 'tabular-nums'}}>{match.scores.join(' : ')}</dd></>}\r
        </dl>\r
        {match.id === 'final' && <p style={{margin: 0, color: 'var(--g-muted)'}}>관람은 무료예요. 경기 시작 10분 전까지 입장해 주세요.</p>}\r
        {match.id === 'final' && <p role="status" style={{margin: 0, color: 'var(--g-muted)'}}>{reminder ? '결승 30분 전에 알려 드려요.' : ''}</p>}\r
      </section>\r
      <footer style={caption}>단판 승부이고, 무승부는 승부차기로 가려요. 날씨에 따라 경기 시간이 바뀔 수 있어요.</footer>\r
    </section>\r
  );\r
}`,c=e(t(),1),l=n(),u=[{name:`8강`,date:`10월 24일`,status:`종료`,matches:[{id:`q1`,teams:[`한강 러너스`,`서초 유나이티드`],scores:[`3`,`1`],winner:0,time:`10:00`},{id:`q2`,teams:[`성수 웨이브`,`마포 크루`],scores:[`2`,`0`],winner:0,time:`11:00`},{id:`q3`,teams:[`북서울 FC`,`송파 블루`],scores:[`1`,`2`],winner:1,time:`13:00`},{id:`q4`,teams:[`연남 애슬레틱`,`관악 그린`],scores:[`4`,`2`],winner:0,time:`14:00`}]},{name:`준결승`,date:`10월 25일`,status:`종료`,matches:[{id:`s1`,teams:[`한강 러너스`,`성수 웨이브`],scores:[`2`,`1`],winner:0,time:`13:00`},{id:`s2`,teams:[`송파 블루`,`연남 애슬레틱`],scores:[`0`,`2`],winner:1,time:`15:00`}]},{name:`결승`,date:`10월 26일`,status:`오늘`,matches:[{id:`final`,teams:[`한강 러너스`,`연남 애슬레틱`],scores:[`-`,`-`],winner:-1,time:`18:00`}]}],d={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`};function f(){let[e,t]=(0,c.useState)(`final`),[n,o]=(0,c.useState)(!1),s=u.find(t=>t.matches.some(t=>t.id===e)),f=s.matches.find(t=>t.id===e);return(0,l.jsxs)(`section`,{"aria-label":`가을 풋살컵 대진표`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,minWidth:0},children:[(0,l.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-4)`},children:[(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,l.jsx)(`h2`,{className:`catalog-block-title`,children:`가을 풋살컵`}),(0,l.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`10월 24일부터 26일까지, 서울숲 풋살장, 8개 팀`})]}),(0,l.jsx)(i,{state:`idle`,label:`오늘 결승`})]}),(0,l.jsxs)(`section`,{"aria-labelledby":`bracket-title`,style:{display:`grid`,gap:`var(--g-space-4)`},children:[(0,l.jsx)(`h3`,{id:`bracket-title`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,letterSpacing:`var(--g-tracking-heading)`},children:`토너먼트 대진표`}),(0,l.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-5)`,alignItems:`stretch`},children:u.map(n=>(0,l.jsxs)(`section`,{"aria-label":n.name,style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,display:`flex`,flexDirection:`column`,gap:`var(--g-space-3)`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-2)`,borderBottom:`var(--g-border-width) solid var(--g-border)`,paddingBottom:`var(--g-space-2)`},children:[(0,l.jsx)(`h4`,{style:{margin:0,fontSize:`var(--g-text-body)`},children:n.name}),(0,l.jsxs)(`span`,{style:{...d,display:`flex`,gap:`var(--g-space-2)`},children:[(0,l.jsx)(`span`,{children:n.date}),(0,l.jsx)(`span`,{children:n.status})]})]}),(0,l.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,gap:`var(--g-space-3)`},children:n.matches.map(n=>(0,l.jsx)(a,{size:`sm`,variant:`outline`,style:{padding:0,minWidth:0,borderColor:e===n.id?`var(--g-accent)`:`var(--g-border)`},children:(0,l.jsx)(`button`,{type:`button`,"aria-pressed":e===n.id,"aria-label":n.teams.join(` 대 `),"aria-describedby":`${n.id}-score`,onClick:()=>t(n.id),style:{display:`grid`,gap:`var(--g-space-2)`,padding:`var(--g-space-3)`,margin:0,border:0,borderRadius:`inherit`,background:`transparent`,color:`inherit`,font:`inherit`,textAlign:`start`,cursor:`pointer`},children:(0,l.jsxs)(`span`,{id:`${n.id}-score`,style:{display:`grid`,gap:`var(--g-space-2)`},children:[(0,l.jsx)(`span`,{style:d,children:n.time}),n.teams.map((e,t)=>(0,l.jsxs)(`span`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,gap:`var(--g-space-2)`,color:n.winner===t?`var(--g-ink)`:`var(--g-muted)`,fontWeight:n.winner===t?`var(--g-weight-selected)`:`var(--g-weight-regular)`},children:[(0,l.jsxs)(`span`,{style:{overflowWrap:`anywhere`},children:[e,n.winner===t&&(0,l.jsx)(`span`,{className:`g-visually-hidden`,children:` 승리`})]}),(0,l.jsx)(`span`,{style:{fontVariantNumeric:`tabular-nums`,fontWeight:`var(--g-weight-semibold)`,textAlign:`end`},children:n.scores[t]})]},e))]})})},n.id))})]},n.name))})]}),(0,l.jsxs)(`section`,{"aria-labelledby":`match-title`,"aria-live":`polite`,style:{display:`grid`,gap:`var(--g-space-3)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,l.jsxs)(`h3`,{id:`match-title`,style:{margin:0,fontSize:`var(--g-text-heading-4)`,letterSpacing:`var(--g-tracking-heading)`,overflowWrap:`anywhere`},children:[s.name,`, `,f.teams.join(` 대 `)]}),f.id===`final`?(0,l.jsx)(r,{variant:`secondary`,"aria-pressed":n,onPress:()=>o(e=>!e),children:n?`결승 알림 설정됨`:`결승 알림 받기`}):(0,l.jsx)(i,{state:`done`,label:`결과 확정`})]}),(0,l.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`max-content minmax(0, 1fr)`,gap:`var(--g-space-1) var(--g-space-4)`,margin:0},children:[(0,l.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`장소`}),(0,l.jsx)(`dd`,{style:{margin:0},children:`서울숲 풋살장 A구장`}),(0,l.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`시간`}),(0,l.jsxs)(`dd`,{style:{margin:0},children:[s.date,` `,f.time]}),(0,l.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`경기 방식`}),(0,l.jsx)(`dd`,{style:{margin:0},children:`전후반 각 20분`}),f.id!==`final`&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:`최종 스코어`}),(0,l.jsx)(`dd`,{style:{margin:0,fontVariantNumeric:`tabular-nums`},children:f.scores.join(` : `)})]})]}),f.id===`final`&&(0,l.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`관람은 무료예요. 경기 시작 10분 전까지 입장해 주세요.`}),f.id===`final`&&(0,l.jsx)(`p`,{role:`status`,style:{margin:0,color:`var(--g-muted)`},children:n?`결승 30분 전에 알려 드려요.`:``})]}),(0,l.jsx)(`footer`,{style:d,children:`단판 승부이고, 무승부는 승부차기로 가려요. 날씨에 따라 경기 시간이 바뀔 수 있어요.`})]})}var p={id:`tournament-bracket`,title:`풋살 토너먼트 대진표`,koreanTitle:`풋살 토너먼트 대진표`,group:`blocks`,interactions:[`press`],description:`8강부터 결승까지의 진출 흐름과 경기 결과, 선택한 경기의 상세 정보를 보여 주는 대회 화면입니다. 결승 알림은 예시 화면에서만 설정되고 실제로 전송되지 않습니다.`,demo:f,behavior:[`경기 카드 전체가 하나의 버튼이고, 선택한 경기는 aria-pressed와 강조 테두리로 표시합니다.`,`경기 카드의 이름은 두 팀이고, 시간과 점수, 승리 팀은 설명으로 읽힙니다.`,`경기를 고르면 대진표 아래 상세 영역이 바뀌고 정중한 상태 영역으로 알립니다.`],usage:o(s),whenToUse:[`8강부터 결승까지의 진출 흐름과 경기 결과를 한 화면에서 보고 경기를 골라 상세를 읽을 때 씁니다.`,`대회 일정과 결과를 공유하는 풋살 같은 생활체육 화면에 맞습니다.`],whenNot:[`팀이나 선수의 점수 순위는 Leaderboard를 씁니다.`,`경기가 아닌 사건을 날짜순으로 보여 주려면 Timeline을 씁니다.`],aiNotes:[`이 블록은 Badge, Button, Card를 조합한 예시입니다.`,`경기 카드 전체가 버튼이고 선택은 aria-pressed로 알립니다. 접근 가능한 이름은 두 팀이고 시간, 점수, 승리 팀은 설명으로 읽힙니다.`,`결승 알림은 예시 화면에서만 설정되고 전송되지 않습니다. 실제 알림은 호출자가 붙입니다.`],props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`결승 당일과 결과 확정 상태를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`예시 결승 알림을 켜고 끕니다.`},{name:`Card`,type:`'@gyeol/ui'`,description:`경기 하나를 선택할 수 있는 대상으로 묶습니다.`}]};export{p as doc};