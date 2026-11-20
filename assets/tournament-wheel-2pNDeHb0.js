import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./Badge-rwba6Qq3.js";import{t as a}from"./usage-source-BdQLyNT5.js";var o=`import {useId, useState} from 'react';\r
import {Badge, Button} from '@gyeol/ui';\r
\r
const teams = ['새벽 러너스', '북쪽 별', '파란 파도', '오후 네 시', '초록 궤도', '도시의 숲', '달빛 크루', '작은 거인'];\r
const matches = [{name: '1경기', time: '10:00'}, {name: '2경기', time: '10:30'}, {name: '3경기', time: '11:00'}, {name: '4경기', time: '11:30'}];\r
const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'} as const;\r
const cell = {padding: 'var(--g-space-2) var(--g-space-3)', borderBlockEnd: 'var(--g-border-width) solid var(--g-border)', textAlign: 'start', wordBreak: 'keep-all', overflowWrap: 'anywhere'} as const;\r
const head = {...cell, color: 'var(--g-muted)', fontWeight: 'var(--g-weight-medium)'} as const;\r
\r
function TournamentWheel() {\r
  const id = useId();\r
  const [drawn, setDrawn] = useState<string[]>([]);\r
  const remaining = teams.filter(team => !drawn.includes(team));\r
  const complete = remaining.length === 0;\r
  const last = drawn.at(-1);\r
  function draw() {\r
    if (remaining.length) setDrawn([...drawn, remaining[Math.floor(Math.random() * remaining.length)]!]);\r
  }\r
  return (\r
    <section aria-label="가을 커뮤니티 컵 대진 추첨" style={{display: 'grid', gap: 'var(--g-space-6)', color: 'var(--g-ink)', minWidth: 0}}>\r
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 'var(--g-space-3)'}}>\r
        <div style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
          <h2 className="catalog-block-title">가을 커뮤니티 컵</h2>\r
          <p style={{margin: 0, color: 'var(--g-muted)'}}>10월 31일, 한강 체육공원</p>\r
        </div>\r
        <Badge state={complete ? 'done' : 'idle'} label={complete ? '대진 완성' : '대진 추첨 중'}/>\r
      </header>\r
\r
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-8)', alignItems: 'start'}}>\r
        <section aria-labelledby={id + '-draw'} style={{flex: '1 1 var(--g-listbox-max)', minWidth: 0, display: 'grid', gap: 'var(--g-space-4)', alignContent: 'start'}}>\r
          <h3 id={id + '-draw'} style={heading}>팀 추첨</h3>\r
          <div style={{display: 'grid', gap: 'var(--g-space-2)'}}>\r
            <p id={id + '-left'} style={{margin: 0, color: 'var(--g-muted)', fontVariantNumeric: 'tabular-nums'}}>남은 팀 {remaining.length}</p>\r
            {complete\r
              ? <p style={{margin: 0}}>모든 팀을 대진표에 넣었어요.</p>\r
              : <ul aria-labelledby={id + '-left'} style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-1) var(--g-space-4)', margin: 0, padding: 0, listStyle: 'none'}}>\r
                {remaining.map(team => <li key={team}>{team}</li>)}\r
              </ul>}\r
          </div>\r
          <p role="status" aria-live="polite" aria-atomic="true" style={{margin: 0}}>\r
            {last ? <><span style={{color: 'var(--g-muted)'}}>최근 추첨:</span> <strong>{last}</strong></> : '아직 뽑은 팀이 없어요.'}\r
          </p>\r
          <div><Button onPress={draw} isDisabled={complete}>{complete ? '추첨 완료' : '팀 뽑기'}</Button></div>\r
        </section>\r
\r
        <section aria-labelledby={id + '-bracket'} style={{flex: '1 1 var(--g-listbox-max)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', alignContent: 'start'}}>\r
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--g-space-3)', flexWrap: 'wrap'}}>\r
            <h3 id={id + '-bracket'} style={heading}>8강 대진표</h3>\r
            <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', fontVariantNumeric: 'tabular-nums'}}>{drawn.length} / 8팀 배정</span>\r
          </div>\r
          <table aria-labelledby={id + '-bracket'} style={{borderCollapse: 'collapse', width: '100%', fontSize: 'var(--g-text-compact)'}}>\r
            <thead><tr>\r
              <th scope="col" style={head}>경기</th>\r
              <th scope="col" style={head}>시각</th>\r
              <th scope="col" colSpan={2} style={head}>대진</th>\r
            </tr></thead>\r
            <tbody>{matches.map((match, index) => <tr key={match.name}>\r
              <th scope="row" style={{...cell, fontWeight: 'var(--g-weight-regular)'}}>{match.name}</th>\r
              <td style={{...cell, fontVariantNumeric: 'tabular-nums'}}>{match.time}</td>\r
              {[0, 1].map(slot => {\r
                const team = drawn[index * 2 + slot];\r
                return <td key={slot} style={{...cell, color: team ? 'var(--g-ink)' : 'var(--g-muted)'}}>{team ?? '추첨 대기'}</td>;\r
              })}\r
            </tr>)}</tbody>\r
          </table>\r
          <div><Button variant="secondary" isDisabled={!drawn.length} onPress={() => setDrawn([])}>대진 초기화</Button></div>\r
        </section>\r
      </div>\r
    </section>\r
  );\r
}`,s=e(t(),1),c=n(),l=[`새벽 러너스`,`북쪽 별`,`파란 파도`,`오후 네 시`,`초록 궤도`,`도시의 숲`,`달빛 크루`,`작은 거인`],u=[{name:`1경기`,time:`10:00`},{name:`2경기`,time:`10:30`},{name:`3경기`,time:`11:00`},{name:`4경기`,time:`11:30`}],d={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},f={padding:`var(--g-space-2) var(--g-space-3)`,borderBlockEnd:`var(--g-border-width) solid var(--g-border)`,textAlign:`start`,wordBreak:`keep-all`,overflowWrap:`anywhere`},p={...f,color:`var(--g-muted)`,fontWeight:`var(--g-weight-medium)`};function m(){let e=(0,s.useId)(),[t,n]=(0,s.useState)([]),a=l.filter(e=>!t.includes(e)),o=a.length===0,m=t.at(-1);function h(){a.length&&n([...t,a[Math.floor(Math.random()*a.length)]])}return(0,c.jsxs)(`section`,{"aria-label":`가을 커뮤니티 컵 대진 추첨`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,minWidth:0},children:[(0,c.jsxs)(`header`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`start`,flexWrap:`wrap`,gap:`var(--g-space-3)`},children:[(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,c.jsx)(`h2`,{className:`catalog-block-title`,children:`가을 커뮤니티 컵`}),(0,c.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`10월 31일, 한강 체육공원`})]}),(0,c.jsx)(i,{state:o?`done`:`idle`,label:o?`대진 완성`:`대진 추첨 중`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-8)`,alignItems:`start`},children:[(0,c.jsxs)(`section`,{"aria-labelledby":e+`-draw`,style:{flex:`1 1 var(--g-listbox-max)`,minWidth:0,display:`grid`,gap:`var(--g-space-4)`,alignContent:`start`},children:[(0,c.jsx)(`h3`,{id:e+`-draw`,style:d,children:`팀 추첨`}),(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-2)`},children:[(0,c.jsxs)(`p`,{id:e+`-left`,style:{margin:0,color:`var(--g-muted)`,fontVariantNumeric:`tabular-nums`},children:[`남은 팀 `,a.length]}),o?(0,c.jsx)(`p`,{style:{margin:0},children:`모든 팀을 대진표에 넣었어요.`}):(0,c.jsx)(`ul`,{"aria-labelledby":e+`-left`,style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-1) var(--g-space-4)`,margin:0,padding:0,listStyle:`none`},children:a.map(e=>(0,c.jsx)(`li`,{children:e},e))})]}),(0,c.jsx)(`p`,{role:`status`,"aria-live":`polite`,"aria-atomic":`true`,style:{margin:0},children:m?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{style:{color:`var(--g-muted)`},children:`최근 추첨:`}),` `,(0,c.jsx)(`strong`,{children:m})]}):`아직 뽑은 팀이 없어요.`}),(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{onPress:h,isDisabled:o,children:o?`추첨 완료`:`팀 뽑기`})})]}),(0,c.jsxs)(`section`,{"aria-labelledby":e+`-bracket`,style:{flex:`1 1 var(--g-listbox-max)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,alignContent:`start`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`baseline`,gap:`var(--g-space-3)`,flexWrap:`wrap`},children:[(0,c.jsx)(`h3`,{id:e+`-bracket`,style:d,children:`8강 대진표`}),(0,c.jsxs)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,fontVariantNumeric:`tabular-nums`},children:[t.length,` / 8팀 배정`]})]}),(0,c.jsxs)(`table`,{"aria-labelledby":e+`-bracket`,style:{borderCollapse:`collapse`,width:`100%`,fontSize:`var(--g-text-compact)`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`col`,style:p,children:`경기`}),(0,c.jsx)(`th`,{scope:`col`,style:p,children:`시각`}),(0,c.jsx)(`th`,{scope:`col`,colSpan:2,style:p,children:`대진`})]})}),(0,c.jsx)(`tbody`,{children:u.map((e,n)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,style:{...f,fontWeight:`var(--g-weight-regular)`},children:e.name}),(0,c.jsx)(`td`,{style:{...f,fontVariantNumeric:`tabular-nums`},children:e.time}),[0,1].map(e=>{let r=t[n*2+e];return(0,c.jsx)(`td`,{style:{...f,color:r?`var(--g-ink)`:`var(--g-muted)`},children:r??`추첨 대기`},e)})]},e.name))})]}),(0,c.jsx)(`div`,{children:(0,c.jsx)(r,{variant:`secondary`,isDisabled:!t.length,onPress:()=>n([]),children:`대진 초기화`})})]})]})]})}var h={id:`tournament-wheel`,title:`토너먼트 추첨`,koreanTitle:`토너먼트 추첨`,group:`blocks`,interactions:[`press`],description:`8개 팀을 한 팀씩 뽑아 8강 대진표에 배정하는 대회 운영 화면입니다.`,demo:m,behavior:[`남은 팀마다 같은 확률로 한 팀을 뽑고, 뽑힌 팀은 남은 팀 목록에서 빠져 다시 나오지 않습니다.`,`뽑은 순서대로 1경기부터 두 팀씩 배정합니다.`,`최근 추첨 결과는 polite 라이브 영역이 읽고, 여덟 팀을 모두 뽑으면 팀 뽑기 버튼이 추첨 완료로 바뀌며 비활성화됩니다.`,`대진 초기화는 배정을 모두 비우고 여덟 팀을 다시 남은 팀으로 돌립니다. 뽑은 팀이 없으면 비활성화됩니다.`],whenToUse:[`사내 대회에서 8개 팀을 한 팀씩 공개 추첨해 8강 대진표에 배정할 때 씁니다.`,`뽑은 팀이 다시 나오지 않아야 하고 대진을 처음부터 다시 돌릴 수 있어야 하는 운영 화면에 맞습니다.`],whenNot:[`경품이나 상품을 돌려서 뽑는 이벤트는 PrizeWheel을 씁니다.`,`경기가 끝난 뒤의 순위는 Leaderboard를 씁니다.`,`팀 정보를 표로 정리하는 화면은 DataTable을 씁니다.`],aiNotes:[`props 없이 Badge와 Button을 조합한 블록이므로 usage의 소스를 복사해 팀 목록과 대진 구조를 바꿉니다. 예시는 여덟 팀과 8강으로 고정되어 있어 팀 수를 바꾸면 대진도 함께 고칩니다.`,`최근 추첨 결과는 polite 라이브 영역이 읽으므로 화면을 바꿔도 이 영역을 남깁니다.`,`추첨은 예시 코드 안에서만 일어납니다. 결과를 저장하거나 공개하는 일은 호출하는 쪽에서 붙입니다.`],usage:a(o),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`추첨 진행 중과 대진 완성 상태.`},{name:`Button`,type:`'@gyeol/ui'`,description:`중복 없는 팀 뽑기와 전체 대진 초기화.`}]};export{h as doc};