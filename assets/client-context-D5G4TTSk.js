import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{r as t,t as n}from"./Avatar-Cq8zREtD.js";import{n as r,t as i}from"./Badge-0pdlwniF.js";import{t as a}from"./Chip-7Jtv2U0G.js";import{i as o,n as s,r as c,t as l}from"./Tabs-D7Jj2t8B.js";import{t as u}from"./usage-source-BdQLyNT5.js";var d=`import {Avatar, AvatarFallback, Badge, Chip, Progress, Tabs, TabsContent, TabsList, TabsTrigger} from '@gyeol/ui';\r
import type {CSSProperties} from 'react';\r
\r
const sectionTitle: CSSProperties = {margin: 0, fontSize: 'var(--g-text-compact)', fontWeight: 'var(--g-weight-semibold)', lineHeight: 'var(--g-leading-body)'};\r
const muted: CSSProperties = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'};\r
const prose: CSSProperties = {margin: 0, lineHeight: 'var(--g-leading-body)'};\r
\r
function ClientContext() {\r
  return <section aria-label="고객 컨텍스트" style={{display: 'grid', gap: 'var(--g-space-4)', minWidth: 0, color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-3) var(--g-space-4)'}}>\r
      <Avatar size="lg"><AvatarFallback label="온유생활">온유</AvatarFallback></Avatar>\r
      <div style={{flex: '1 1 var(--g-field-basis)', minWidth: 0}}>\r
        <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-3)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>온유생활</h2>\r
        <p style={{margin: 'var(--g-space-1) 0 0', color: 'var(--g-muted)'}}>생활용품 브랜드, 2026년 3월부터 협업</p>\r
      </div>\r
      <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2)'}}>\r
        <Chip>브랜드 리뉴얼</Chip><Chip>핵심 고객</Chip><Badge state="done" label="협업 중" /><Badge state="done" label="오늘 오전 9:30 업데이트" />\r
      </div>\r
    </header>\r
    <Tabs defaultValue="brief">\r
      <TabsList aria-label="고객 정보 보기" variant="line">\r
        <TabsTrigger value="brief">고객 브리프</TabsTrigger>\r
        <TabsTrigger value="activity">최근 소통</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="brief">\r
        <div style={{display: 'grid', gap: 'var(--g-space-4)', paddingBlockStart: 'var(--g-space-4)'}}>\r
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-4) var(--g-space-8)'}}>\r
            <section style={{flex: '2 1 var(--g-listbox-max)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)'}}>\r
              <h3 style={sectionTitle}>함께 풀고 있는 과제</h3>\r
              <p style={prose}>제품 중심의 쇼핑 경험을 생활 이야기 중심으로 바꾸고 있습니다. 첫 방문 고객도 소재와 제작 방식을 이해하고 자신에게 맞는 제품을 고르게 하는 것이 목표입니다.</p>\r
              <Progress label="브랜드 리뉴얼 진행률" value={65} />\r
              <dl style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2) var(--g-space-6)', margin: 0}}>\r
                <div><dt style={muted}>현재 단계</dt><dd style={{margin: 0, fontWeight: 'var(--g-weight-semibold)'}}>핵심 화면 디자인</dd></div>\r
                <div><dt style={muted}>다음 마일스톤</dt><dd style={{margin: 0, fontWeight: 'var(--g-weight-semibold)'}}>10월 30일 시안 확정</dd></div>\r
              </dl>\r
            </section>\r
            <section style={{flex: '1 1 var(--g-field-basis)', minWidth: 0, display: 'grid', gap: 'var(--g-space-3)', alignContent: 'start'}}>\r
              <h3 style={sectionTitle}>주요 담당자</h3>\r
              <div style={{display: 'flex', gap: 'var(--g-space-3)', alignItems: 'center'}}>\r
                <Avatar><AvatarFallback label="김서연">서연</AvatarFallback></Avatar>\r
                <div><strong>김서연</strong><p style={muted}>브랜드 총괄, 최종 결정권자</p></div>\r
              </div>\r
              <p style={prose}>명확한 근거와 비교 시안을 선호합니다. 피드백은 화요일에 모아 전달하며, 일정 변경은 미리 공유해 주세요.</p>\r
            </section>\r
          </div>\r
          <section style={{display: 'grid', gap: 'var(--g-space-2)', paddingBlockStart: 'var(--g-space-4)', borderBlockStart: 'var(--g-border-width) solid var(--g-border)'}}>\r
            <h3 style={sectionTitle}>다음 미팅 준비</h3>\r
            <p style={muted}>10월 27일(화) 오후 2:00 디자인 검토</p>\r
            <ul style={{margin: 0, paddingInlineStart: 'var(--g-space-5)', display: 'grid', gap: 'var(--g-space-1)', lineHeight: 'var(--g-leading-body)'}}><li>제품 상세 시안 2종</li><li>모바일 구매 흐름</li><li>촬영 일정 확인</li></ul>\r
            <p style={prose}>지난 미팅에서 “여백은 충분히, 설명은 간결하게”를 합의했습니다. 새 시안에서도 이 기준을 유지하고, 소재 정보의 가독성을 먼저 확인합니다.</p>\r
          </section>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="activity">\r
        <ol style={{margin: 0, padding: 'var(--g-space-4) 0 0', listStyle: 'none', display: 'grid', gap: 'var(--g-space-4)'}}>\r
          <li><p style={muted}>10월 23일</p><strong>디자인 피드백</strong><p style={prose}>김서연 총괄이 차분한 색상 방향을 승인했습니다. 제품 사진은 자연광 촬영본으로 교체합니다.</p></li>\r
          <li><p style={muted}>10월 21일</p><strong>범위 확정</strong><p style={prose}>첫 공개 범위를 홈, 제품 목록, 제품 상세로 확정했습니다. 회원 혜택 페이지는 다음 단계에서 진행합니다.</p></li>\r
          <li><p style={muted}>10월 19일</p><strong>킥오프</strong><p style={prose}>제품의 소재와 제작 과정을 쉽게 전달하는 것을 핵심 목표로 정했습니다.</p></li>\r
        </ol>\r
      </TabsContent>\r
    </Tabs>\r
  </section>;\r
}`,f=e(),p={margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-body)`},m={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},h={margin:0,lineHeight:`var(--g-leading-body)`};function g(){return(0,f.jsxs)(`section`,{"aria-label":`고객 컨텍스트`,style:{display:`grid`,gap:`var(--g-space-4)`,minWidth:0,color:`var(--g-ink)`},children:[(0,f.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-3) var(--g-space-4)`},children:[(0,f.jsx)(n,{size:`lg`,children:(0,f.jsx)(t,{label:`온유생활`,children:`온유`})}),(0,f.jsxs)(`div`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0},children:[(0,f.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-3)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`온유생활`}),(0,f.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`,color:`var(--g-muted)`},children:`생활용품 브랜드, 2026년 3월부터 협업`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,f.jsx)(a,{children:`브랜드 리뉴얼`}),(0,f.jsx)(a,{children:`핵심 고객`}),(0,f.jsx)(i,{state:`done`,label:`협업 중`}),(0,f.jsx)(i,{state:`done`,label:`오늘 오전 9:30 업데이트`})]})]}),(0,f.jsxs)(l,{defaultValue:`brief`,children:[(0,f.jsxs)(c,{"aria-label":`고객 정보 보기`,variant:`line`,children:[(0,f.jsx)(o,{value:`brief`,children:`고객 브리프`}),(0,f.jsx)(o,{value:`activity`,children:`최근 소통`})]}),(0,f.jsx)(s,{value:`brief`,children:(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,paddingBlockStart:`var(--g-space-4)`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-4) var(--g-space-8)`},children:[(0,f.jsxs)(`section`,{style:{flex:`2 1 var(--g-listbox-max)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsx)(`h3`,{style:p,children:`함께 풀고 있는 과제`}),(0,f.jsx)(`p`,{style:h,children:`제품 중심의 쇼핑 경험을 생활 이야기 중심으로 바꾸고 있습니다. 첫 방문 고객도 소재와 제작 방식을 이해하고 자신에게 맞는 제품을 고르게 하는 것이 목표입니다.`}),(0,f.jsx)(r,{label:`브랜드 리뉴얼 진행률`,value:65}),(0,f.jsxs)(`dl`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2) var(--g-space-6)`,margin:0},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`dt`,{style:m,children:`현재 단계`}),(0,f.jsx)(`dd`,{style:{margin:0,fontWeight:`var(--g-weight-semibold)`},children:`핵심 화면 디자인`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`dt`,{style:m,children:`다음 마일스톤`}),(0,f.jsx)(`dd`,{style:{margin:0,fontWeight:`var(--g-weight-semibold)`},children:`10월 30일 시안 확정`})]})]})]}),(0,f.jsxs)(`section`,{style:{flex:`1 1 var(--g-field-basis)`,minWidth:0,display:`grid`,gap:`var(--g-space-3)`,alignContent:`start`},children:[(0,f.jsx)(`h3`,{style:p,children:`주요 담당자`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`var(--g-space-3)`,alignItems:`center`},children:[(0,f.jsx)(n,{children:(0,f.jsx)(t,{label:`김서연`,children:`서연`})}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:`김서연`}),(0,f.jsx)(`p`,{style:m,children:`브랜드 총괄, 최종 결정권자`})]})]}),(0,f.jsx)(`p`,{style:h,children:`명확한 근거와 비교 시안을 선호합니다. 피드백은 화요일에 모아 전달하며, 일정 변경은 미리 공유해 주세요.`})]})]}),(0,f.jsxs)(`section`,{style:{display:`grid`,gap:`var(--g-space-2)`,paddingBlockStart:`var(--g-space-4)`,borderBlockStart:`var(--g-border-width) solid var(--g-border)`},children:[(0,f.jsx)(`h3`,{style:p,children:`다음 미팅 준비`}),(0,f.jsx)(`p`,{style:m,children:`10월 27일(화) 오후 2:00 디자인 검토`}),(0,f.jsxs)(`ul`,{style:{margin:0,paddingInlineStart:`var(--g-space-5)`,display:`grid`,gap:`var(--g-space-1)`,lineHeight:`var(--g-leading-body)`},children:[(0,f.jsx)(`li`,{children:`제품 상세 시안 2종`}),(0,f.jsx)(`li`,{children:`모바일 구매 흐름`}),(0,f.jsx)(`li`,{children:`촬영 일정 확인`})]}),(0,f.jsx)(`p`,{style:h,children:`지난 미팅에서 “여백은 충분히, 설명은 간결하게”를 합의했습니다. 새 시안에서도 이 기준을 유지하고, 소재 정보의 가독성을 먼저 확인합니다.`})]})]})}),(0,f.jsx)(s,{value:`activity`,children:(0,f.jsxs)(`ol`,{style:{margin:0,padding:`var(--g-space-4) 0 0`,listStyle:`none`,display:`grid`,gap:`var(--g-space-4)`},children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`p`,{style:m,children:`10월 23일`}),(0,f.jsx)(`strong`,{children:`디자인 피드백`}),(0,f.jsx)(`p`,{style:h,children:`김서연 총괄이 차분한 색상 방향을 승인했습니다. 제품 사진은 자연광 촬영본으로 교체합니다.`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`p`,{style:m,children:`10월 21일`}),(0,f.jsx)(`strong`,{children:`범위 확정`}),(0,f.jsx)(`p`,{style:h,children:`첫 공개 범위를 홈, 제품 목록, 제품 상세로 확정했습니다. 회원 혜택 페이지는 다음 단계에서 진행합니다.`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`p`,{style:m,children:`10월 19일`}),(0,f.jsx)(`strong`,{children:`킥오프`}),(0,f.jsx)(`p`,{style:h,children:`제품의 소재와 제작 과정을 쉽게 전달하는 것을 핵심 목표로 정했습니다.`})]})]})})]})]})}var _={id:`client-context`,title:`고객 맥락`,koreanTitle:`고객 맥락`,group:`blocks`,interactions:[`press`],description:`고객의 목표, 담당자, 프로젝트 진행 상황과 최근 소통을 한곳에서 확인하는 고객 브리프입니다.`,demo:g,behavior:[`고객 브리프의 각 구역은 카드 없이 제목과 간격으로 나뉘고, 다음 미팅 준비 앞에만 구분선 하나를 둡니다. 블록 바깥 테두리는 이 블록을 놓는 화면이 정합니다.`],whenToUse:[`고객 미팅 전에 목표, 담당자, 프로젝트 진행 상황, 최근 소통을 한 화면에서 훑을 때 씁니다. 대행사나 영업팀의 고객 상세 화면이 대표적입니다.`,`고객 브리프와 소통 기록을 탭으로 나눠 오가야 하는 화면에 씁니다.`],whenNot:[`고객 여러 곳을 한꺼번에 비교하는 화면은 DataTable을 씁니다.`,`소통 기록을 주고받는 스레드는 CommentThread가 맞습니다.`,`진행률 하나만 보여 줄 때는 Progress로 충분합니다.`],aiNotes:[`가져다 쓸 컴포넌트는 없고 Avatar, Badge, Chip, Progress, Tabs를 조합한 예시 블록입니다. 탭은 TabsList, TabsTrigger, TabsContent를 짝으로 맞춰야 합니다.`,`Progress에는 어떤 진행률인지 알리는 레이블을 붙입니다.`,`블록 바깥 테두리와 배경은 이 블록을 놓는 화면이 정하므로 블록 안에 카드를 겹쳐 두르지 않습니다.`],usage:u(d),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`고객사와 담당자의 프로필 영역.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`이미지 없이 고객사와 담당자의 이름 표시.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`협업 상태와 정보 업데이트 시각.`},{name:`Chip`,type:`'@gyeol/ui'`,description:`고객 분류.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`브랜드 리뉴얼 진행률.`},{name:`Tabs`,type:`'@gyeol/ui'`,description:`고객 브리프와 소통 기록 전환.`},{name:`TabsContent`,type:`'@gyeol/ui'`,description:`선택한 고객 정보 패널.`},{name:`TabsList`,type:`'@gyeol/ui'`,description:`고객 정보 탐색 탭 목록.`},{name:`TabsTrigger`,type:`'@gyeol/ui'`,description:`고객 브리프와 최근 소통을 바꾸는 탭입니다.`}]};export{_ as doc};