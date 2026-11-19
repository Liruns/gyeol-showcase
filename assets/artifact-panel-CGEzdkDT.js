import{t as e}from"./jsx-runtime-Wy9s6hX0.js";import{t}from"./AttachmentList-bbWRGS5X.js";import{t as n}from"./Badge-BrfsGfws.js";import{i as r,n as i,r as a,t as o}from"./Tabs-CvWuh0pC.js";import{l as s}from"./catalog-NHrqBXF-.js";import{t as c}from"./usage-source-BdQLyNT5.js";var l=`import {AttachmentList, Badge, CodeBlock, Tabs, TabsContent, TabsList, TabsTrigger} from '@gyeol/ui';\r
\r
function Demo() {\r
  const heading = {margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'};\r
  const muted = {margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'};\r
  return <section aria-label="산출물 패널" style={{display: 'grid', gap: 'var(--g-space-6)', minWidth: 0, width: '100%', color: 'var(--g-ink)'}}>\r
    <header style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--g-space-3)'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)', letterSpacing: 'var(--g-tracking-heading)'}}>가을 산책 프로그램 기획안</h2>\r
      <Badge state="done" label="모든 변경 사항 저장됨" />\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-8)', alignItems: 'flex-start'}}>\r
      <div style={{flex: '3 1 60%', minWidth: 0, maxWidth: '100%'}}>\r
        <Tabs defaultValue="preview">\r
          <TabsList aria-label="산출물 보기" variant="line" size="sm">\r
            <TabsTrigger value="preview">미리보기</TabsTrigger>\r
            <TabsTrigger value="source">원문</TabsTrigger>\r
            <TabsTrigger value="history">변경 기록</TabsTrigger>\r
          </TabsList>\r
          <TabsContent value="preview">\r
            <article aria-label="프로그램 제안서" style={{display: 'grid', gap: 'var(--g-space-5)', paddingTop: 'var(--g-space-5)', minWidth: 0, overflowWrap: 'anywhere', lineHeight: 'var(--g-leading-body)'}}>\r
              <h3 style={heading}>동네를 새롭게 발견하는 시간</h3>\r
              <p style={{margin: 0}}>익숙한 골목을 천천히 걸으며 계절의 변화를 기록합니다. 주민과 함께 만드는 작은 산책 프로그램입니다.</p>\r
              <section aria-label="프로그램 개요">\r
                <h4 style={{...heading, fontSize: 'var(--g-text-body)', marginBottom: 'var(--g-space-2)'}}>프로그램 개요</h4>\r
                <p style={{margin: 0, color: 'var(--g-muted)'}}>11월 매주 토요일 오전 10시, 마을 도서관에서 출발합니다. 회차별 12명이 함께하며 산책과 기록에 90분을 사용합니다.</p>\r
              </section>\r
              <section aria-label="진행 순서">\r
                <h4 style={{...heading, fontSize: 'var(--g-text-body)', marginBottom: 'var(--g-space-2)'}}>진행 순서</h4>\r
                <ol style={{margin: 0, paddingInlineStart: 'var(--g-space-5)', color: 'var(--g-muted)'}}>\r
                  <li>오늘의 관찰 주제와 안전 수칙 나누기</li>\r
                  <li>골목을 걸으며 마음에 드는 장면 기록하기</li>\r
                  <li>따뜻한 차와 함께 각자의 발견 나누기</li>\r
                </ol>\r
              </section>\r
              <section aria-label="이번 버전의 핵심" style={{paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
                <strong>이번 버전의 핵심</strong>\r
                <p style={{margin: 'var(--g-space-2) 0 0'}}>참가 인원을 12명으로 조정하고, 우천 시 도서관 실내 기록 모임으로 전환합니다.</p>\r
              </section>\r
            </article>\r
          </TabsContent>\r
          <TabsContent value="source">\r
            <div style={{paddingTop: 'var(--g-space-5)'}}>\r
              <CodeBlock filename="가을-산책-기획안.md" language="text" wrap code={'# 가을 산책 프로그램\\n\\n- 일정: 11월 매주 토요일 오전 10시\\n- 집결: 마을 도서관\\n- 정원: 회차별 12명\\n- 소요 시간: 90분\\n\\n## 진행 순서\\n1. 관찰 주제와 안전 수칙 안내\\n2. 골목 산책과 장면 기록\\n3. 차와 함께 발견 나누기\\n\\n우천 시 도서관 실내 기록 모임으로 전환합니다.'} labels={{copy: '원문 복사', copied: '복사됨', copyFailed: '복사 실패', ready: '저장 완료', writing: '작성 중'}} />\r
            </div>\r
          </TabsContent>\r
          <TabsContent value="history">\r
            <section aria-label="버전 기록" style={{display: 'grid', gap: 'var(--g-space-4)', paddingTop: 'var(--g-space-5)'}}>\r
              <h3 style={heading}>버전 기록</h3>\r
              <ol style={{display: 'grid', gap: 'var(--g-space-4)', listStyle: 'none', padding: 0, margin: 0, lineHeight: 'var(--g-leading-body)'}}>\r
                {([['버전 3', '2026-11-02T14:32', '오늘 오후 2:32', '정원 조정 및 우천 시 운영 방안 추가'], ['버전 2', '2026-11-02T11:08', '오늘 오전 11:08', '진행 순서와 회차별 소요 시간 구체화'], ['버전 1', '2026-11-01T16:45', '어제 오후 4:45', '프로그램 목표와 첫 기획안 작성']] as const).map(([version, stamp, time, change]) => <li key={version} style={{display: 'grid', gap: 'var(--g-space-1)'}}>\r
                  <span style={{display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--g-space-2)'}}><strong>{version}</strong><time dateTime={stamp} style={muted}>{time}</time></span>\r
                  <span>{change}</span>\r
                </li>)}\r
              </ol>\r
            </section>\r
          </TabsContent>\r
        </Tabs>\r
      </div>\r
      <aside aria-label="산출물 정보" style={{flex: '1 1 25%', minWidth: 'min(100%, calc(var(--g-space) * 48))', maxWidth: '100%', display: 'grid', gap: 'var(--g-space-6)'}}>\r
        <section aria-label="문서 정보" style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
          <h3 style={heading}>문서 정보</h3>\r
          <dl style={{display: 'grid', gap: 'var(--g-space-3)', margin: 0, padding: 'var(--g-space-4)', background: 'var(--g-soft)', borderRadius: 'var(--g-radius-panel)', fontSize: 'var(--g-text-small)'}}>\r
            {([['작성자', '김하늘'], ['마지막 수정', '오늘 오후 2:32'], ['현재 버전', '버전 3'], ['공유 범위', '프로젝트 멤버']] as const).map(([label, value]) => <div key={label} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--g-space-2)'}}><dt style={{color: 'var(--g-muted)'}}>{label}</dt><dd style={{margin: 0}}>{value}</dd></div>)}\r
          </dl>\r
        </section>\r
        <section aria-label="참고 자료" style={{display: 'grid', gap: 'var(--g-space-3)'}}>\r
          <header style={{display: 'grid', gap: 'var(--g-space-1)'}}><h3 style={heading}>참고 자료</h3><p style={muted}>기획에 사용한 자료 2개</p></header>\r
          <AttachmentList label="기획 참고 자료" items={[{id: 'route', name: '산책-동선.pdf', size: 245760}, {id: 'notes', name: '주민-인터뷰.txt', size: 8192}]} />\r
        </section>\r
      </aside>\r
    </div>\r
  </section>;\r
}`,u=e();function d(){let e={margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},c={margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-small)`};return(0,u.jsxs)(`section`,{"aria-label":`산출물 패널`,style:{display:`grid`,gap:`var(--g-space-6)`,minWidth:0,width:`100%`,color:`var(--g-ink)`},children:[(0,u.jsxs)(`header`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`가을 산책 프로그램 기획안`}),(0,u.jsx)(n,{state:`done`,label:`모든 변경 사항 저장됨`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-8)`,alignItems:`flex-start`},children:[(0,u.jsx)(`div`,{style:{flex:`3 1 60%`,minWidth:0,maxWidth:`100%`},children:(0,u.jsxs)(o,{defaultValue:`preview`,children:[(0,u.jsxs)(a,{"aria-label":`산출물 보기`,variant:`line`,size:`sm`,children:[(0,u.jsx)(r,{value:`preview`,children:`미리보기`}),(0,u.jsx)(r,{value:`source`,children:`원문`}),(0,u.jsx)(r,{value:`history`,children:`변경 기록`})]}),(0,u.jsx)(i,{value:`preview`,children:(0,u.jsxs)(`article`,{"aria-label":`프로그램 제안서`,style:{display:`grid`,gap:`var(--g-space-5)`,paddingTop:`var(--g-space-5)`,minWidth:0,overflowWrap:`anywhere`,lineHeight:`var(--g-leading-body)`},children:[(0,u.jsx)(`h3`,{style:e,children:`동네를 새롭게 발견하는 시간`}),(0,u.jsx)(`p`,{style:{margin:0},children:`익숙한 골목을 천천히 걸으며 계절의 변화를 기록합니다. 주민과 함께 만드는 작은 산책 프로그램입니다.`}),(0,u.jsxs)(`section`,{"aria-label":`프로그램 개요`,children:[(0,u.jsx)(`h4`,{style:{...e,fontSize:`var(--g-text-body)`,marginBottom:`var(--g-space-2)`},children:`프로그램 개요`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`},children:`11월 매주 토요일 오전 10시, 마을 도서관에서 출발합니다. 회차별 12명이 함께하며 산책과 기록에 90분을 사용합니다.`})]}),(0,u.jsxs)(`section`,{"aria-label":`진행 순서`,children:[(0,u.jsx)(`h4`,{style:{...e,fontSize:`var(--g-text-body)`,marginBottom:`var(--g-space-2)`},children:`진행 순서`}),(0,u.jsxs)(`ol`,{style:{margin:0,paddingInlineStart:`var(--g-space-5)`,color:`var(--g-muted)`},children:[(0,u.jsx)(`li`,{children:`오늘의 관찰 주제와 안전 수칙 나누기`}),(0,u.jsx)(`li`,{children:`골목을 걸으며 마음에 드는 장면 기록하기`}),(0,u.jsx)(`li`,{children:`따뜻한 차와 함께 각자의 발견 나누기`})]})]}),(0,u.jsxs)(`section`,{"aria-label":`이번 버전의 핵심`,style:{paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,u.jsx)(`strong`,{children:`이번 버전의 핵심`}),(0,u.jsx)(`p`,{style:{margin:`var(--g-space-2) 0 0`},children:`참가 인원을 12명으로 조정하고, 우천 시 도서관 실내 기록 모임으로 전환합니다.`})]})]})}),(0,u.jsx)(i,{value:`source`,children:(0,u.jsx)(`div`,{style:{paddingTop:`var(--g-space-5)`},children:(0,u.jsx)(s,{filename:`가을-산책-기획안.md`,language:`text`,wrap:!0,code:`# 가을 산책 프로그램

- 일정: 11월 매주 토요일 오전 10시
- 집결: 마을 도서관
- 정원: 회차별 12명
- 소요 시간: 90분

## 진행 순서
1. 관찰 주제와 안전 수칙 안내
2. 골목 산책과 장면 기록
3. 차와 함께 발견 나누기

우천 시 도서관 실내 기록 모임으로 전환합니다.`,labels:{copy:`원문 복사`,copied:`복사됨`,copyFailed:`복사 실패`,ready:`저장 완료`,writing:`작성 중`}})})}),(0,u.jsx)(i,{value:`history`,children:(0,u.jsxs)(`section`,{"aria-label":`버전 기록`,style:{display:`grid`,gap:`var(--g-space-4)`,paddingTop:`var(--g-space-5)`},children:[(0,u.jsx)(`h3`,{style:e,children:`버전 기록`}),(0,u.jsx)(`ol`,{style:{display:`grid`,gap:`var(--g-space-4)`,listStyle:`none`,padding:0,margin:0,lineHeight:`var(--g-leading-body)`},children:[[`버전 3`,`2026-11-02T14:32`,`오늘 오후 2:32`,`정원 조정 및 우천 시 운영 방안 추가`],[`버전 2`,`2026-11-02T11:08`,`오늘 오전 11:08`,`진행 순서와 회차별 소요 시간 구체화`],[`버전 1`,`2026-11-01T16:45`,`어제 오후 4:45`,`프로그램 목표와 첫 기획안 작성`]].map(([e,t,n,r])=>(0,u.jsxs)(`li`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsxs)(`span`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`baseline`,gap:`var(--g-space-2)`},children:[(0,u.jsx)(`strong`,{children:e}),(0,u.jsx)(`time`,{dateTime:t,style:c,children:n})]}),(0,u.jsx)(`span`,{children:r})]},e))})]})})]})}),(0,u.jsxs)(`aside`,{"aria-label":`산출물 정보`,style:{flex:`1 1 25%`,minWidth:`min(100%, calc(var(--g-space) * 48))`,maxWidth:`100%`,display:`grid`,gap:`var(--g-space-6)`},children:[(0,u.jsxs)(`section`,{"aria-label":`문서 정보`,style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(`h3`,{style:e,children:`문서 정보`}),(0,u.jsx)(`dl`,{style:{display:`grid`,gap:`var(--g-space-3)`,margin:0,padding:`var(--g-space-4)`,background:`var(--g-soft)`,borderRadius:`var(--g-radius-panel)`,fontSize:`var(--g-text-small)`},children:[[`작성자`,`김하늘`],[`마지막 수정`,`오늘 오후 2:32`],[`현재 버전`,`버전 3`],[`공유 범위`,`프로젝트 멤버`]].map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,justifyContent:`space-between`,gap:`var(--g-space-2)`},children:[(0,u.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,u.jsx)(`dd`,{style:{margin:0},children:t})]},e))})]}),(0,u.jsxs)(`section`,{"aria-label":`참고 자료`,style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,u.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-1)`},children:[(0,u.jsx)(`h3`,{style:e,children:`참고 자료`}),(0,u.jsx)(`p`,{style:c,children:`기획에 사용한 자료 2개`})]}),(0,u.jsx)(t,{label:`기획 참고 자료`,items:[{id:`route`,name:`산책-동선.pdf`,size:245760},{id:`notes`,name:`주민-인터뷰.txt`,size:8192}]})]})]})]})]})}var f={id:`artifact-panel`,title:`산출물 패널`,koreanTitle:`산출물 패널`,group:`blocks`,interactions:[`press`],description:`기획안 미리보기, 복사 가능한 원문, 변경 기록과 참고 자료를 한곳에 모은 산출물 검토 화면입니다.`,demo:d,usage:c(l),whenToUse:[`에이전트가 만든 기획안을 미리보기, 마크다운 원문, 변경 기록으로 나눠 검토할 때 씁니다.`,`산출물에 쓴 참고 파일과 크기를 문서 옆에서 함께 확인시켜야 하는 화면에 맞습니다.`],whenNot:[`두 버전의 차이를 줄 단위로 보여 주려면 DiffViewer를 씁니다.`,`코드나 설정 한 덩어리를 복사하게 하는 정도면 CodeBlock만 씁니다.`,`파일을 올리고 받는 것이 목적이면 Dropzone을 씁니다.`],aiNotes:[`이 블록은 Tabs, TabsList, TabsTrigger, TabsContent로 보기를 나누고 CodeBlock, AttachmentList, Badge를 조합한 예시입니다.`,`원문은 줄바꿈되는 CodeBlock으로 보여 복사를 맡기고, 참고 파일은 AttachmentList에 넘깁니다.`],props:[{name:`AttachmentList`,type:`'@gyeol/ui'`,description:`산출물에 사용한 참고 파일과 크기 표시`},{name:`Badge`,type:`'@gyeol/ui'`,description:`문서 저장 상태 안내`},{name:`CodeBlock`,type:`'@gyeol/ui'`,description:`줄바꿈되는 마크다운 원문과 복사 기능`},{name:`Tabs`,type:`'@gyeol/ui'`,description:`미리보기, 원문, 변경 기록 선택 상태`},{name:`TabsContent`,type:`'@gyeol/ui'`,description:`선택한 보기의 문서 내용`},{name:`TabsList`,type:`'@gyeol/ui'`,description:`키보드로 탐색 가능한 보기 목록`},{name:`TabsTrigger`,type:`'@gyeol/ui'`,description:`각 문서 보기 전환`}]};export{f as doc};