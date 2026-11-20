import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{Ct as r}from"./boot-BfDWwPwR.js";import{t as i}from"./Badge-rwba6Qq3.js";import{t as a}from"./PromptInput-BxWJNKNv.js";import{t as o}from"./ContextMeter-CaVAfrMS.js";import{t as s}from"./usage-source-BdQLyNT5.js";var c=`import {useId, useState} from 'react';\r
import {Badge, Button, ContextMeter, PromptInput} from '@gyeol/ui';\r
\r
function Demo() {\r
  const sourcesId = useId();\r
  const [draft, setDraft] = useState('인터뷰 내용을 바탕으로 다음 실험의 우선순위를 정리해 줘.');\r
  const [request, setRequest] = useState('신규 고객 인터뷰 8건에서 반복되는 문제를 정리해 줘.');\r
  const [saved, setSaved] = useState(false);\r
  return <section aria-label="AI 리서치 작업 공간" style={{display: 'grid', gap: 'var(--g-space-5)', color: 'var(--g-ink)', minWidth: 0, wordBreak: 'keep-all', overflowWrap: 'anywhere'}}>\r
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--g-space-3)'}}>\r
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-2)', lineHeight: 'var(--g-leading-heading)'}}>신규 고객 인터뷰 리서치</h2>\r
      <Badge state="done" label="내부 자료 연결됨"/>\r
    </header>\r
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--g-space-6)', minWidth: 0}}>\r
      <div style={{flex: '2 1 calc(var(--g-space) * 80)', minWidth: 0, display: 'grid', gap: 'var(--g-space-4)'}}>\r
        <div>\r
          <strong style={{fontSize: 'var(--g-text-caption)', fontWeight: 'var(--g-weight-medium)', color: 'var(--g-muted)'}}>나의 요청</strong>\r
          <p style={{margin: 'var(--g-space-1) 0 0'}}>{request}</p>\r
        </div>\r
        <article aria-label="리서치 도우미의 요약" style={{display: 'grid', gap: 'var(--g-space-3)', paddingTop: 'var(--g-space-4)', borderTop: 'var(--g-border-width) solid var(--g-border)'}}>\r
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--g-space-2)'}}><strong>리서치 도우미</strong><Badge state="done" label="자료 2개 검토 완료"/></div>\r
          <p style={{margin: 0}}>가장 큰 장벽은 기능 부족보다 첫 설정의 복잡함이었습니다. 다음 실험에서는 고객이 처음 가치를 느끼기까지의 단계를 줄여 보길 권합니다.</p>\r
          <div>\r
            <strong>우선 실험: 첫 설정 간소화</strong>\r
            <p style={{margin: 'var(--g-space-1) 0 0'}}>필수 입력을 줄인 시작 화면을 기존 화면과 비교하고, 첫 작업 완료율을 확인하세요. 인터뷰에서 반복된 초기 이탈 문제부터 검증하세요.</p>\r
          </div>\r
          <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>근거: 고객 인터뷰 요약, 제품 탐색 메모</span>\r
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--g-space-2)'}}>\r
            <Button variant="secondary" onPress={() => setDraft('첫 설정 간소화 실험의 가설과 성공 지표를 정리해 줘.')}>실험 계획 이어 쓰기</Button>\r
            <Button variant="quiet" onPress={() => setSaved(value => !value)}>{saved ? '저장 취소' : '요약 저장'}</Button>\r
          </div>\r
          <span role="status" style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>{saved ? '요약을 저장했어요.' : ''}</span>\r
        </article>\r
        <PromptInput label="리서치 도우미에게 요청" description="Enter로 보내고 Shift+Enter로 줄을 바꿔요." placeholder="메시지 입력" value={draft} onValueChange={setDraft} onSubmit={text => {setRequest(text); setSaved(false);}} models={[{value: 'research', label: '리서치 모드'}, {value: 'writing', label: '작성 모드'}]} modelLabel="작업 모드" sendLabel="요청 보내기"/>\r
      </div>\r
      <aside aria-label="작업 자료와 사용량" style={{flex: '1 1 calc(var(--g-space) * 64)', minWidth: 0, display: 'grid', gap: 'var(--g-space-6)'}}>\r
        <section aria-labelledby={sourcesId} style={{display: 'grid', gap: 'var(--g-space-3)', justifyItems: 'start'}}>\r
          <h3 id={sourcesId} style={{margin: 0, fontSize: 'var(--g-text-heading-4)', lineHeight: 'var(--g-leading-heading)'}}>자료</h3>\r
          <ul style={{display: 'grid', gap: 'var(--g-space-3)', margin: 0, padding: 0, listStyle: 'none'}}>\r
            <li><strong>고객 인터뷰 요약</strong><p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>인터뷰 8건, 오늘 수정</p></li>\r
            <li><strong>제품 탐색 메모</strong><p style={{margin: 0, color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)'}}>가설과 관찰, 어제 수정</p></li>\r
          </ul>\r
          <Button variant="secondary" onPress={() => setDraft('연결된 자료별로 핵심 내용을 요약해 줘.')}>자료별 요약 요청</Button>\r
        </section>\r
        <ContextMeter label="대화 컨텍스트" tokens={{system: 800, messages: 2400, files: 4800}} limit={32000}/>\r
      </aside>\r
    </div>\r
  </section>;\r
}`,l=e(t(),1),u=n();function d(){let e=(0,l.useId)(),[t,n]=(0,l.useState)(`인터뷰 내용을 바탕으로 다음 실험의 우선순위를 정리해 줘.`),[s,c]=(0,l.useState)(`신규 고객 인터뷰 8건에서 반복되는 문제를 정리해 줘.`),[d,f]=(0,l.useState)(!1);return(0,u.jsxs)(`section`,{"aria-label":`AI 리서치 작업 공간`,style:{display:`grid`,gap:`var(--g-space-5)`,color:`var(--g-ink)`,minWidth:0,wordBreak:`keep-all`,overflowWrap:`anywhere`},children:[(0,u.jsxs)(`header`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:`var(--g-space-3)`},children:[(0,u.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-2)`,lineHeight:`var(--g-leading-heading)`},children:`신규 고객 인터뷰 리서치`}),(0,u.jsx)(i,{state:`done`,label:`내부 자료 연결됨`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`var(--g-space-6)`,minWidth:0},children:[(0,u.jsxs)(`div`,{style:{flex:`2 1 calc(var(--g-space) * 80)`,minWidth:0,display:`grid`,gap:`var(--g-space-4)`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{style:{fontSize:`var(--g-text-caption)`,fontWeight:`var(--g-weight-medium)`,color:`var(--g-muted)`},children:`나의 요청`}),(0,u.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`},children:s})]}),(0,u.jsxs)(`article`,{"aria-label":`리서치 도우미의 요약`,style:{display:`grid`,gap:`var(--g-space-3)`,paddingTop:`var(--g-space-4)`,borderTop:`var(--g-border-width) solid var(--g-border)`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,u.jsx)(`strong`,{children:`리서치 도우미`}),(0,u.jsx)(i,{state:`done`,label:`자료 2개 검토 완료`})]}),(0,u.jsx)(`p`,{style:{margin:0},children:`가장 큰 장벽은 기능 부족보다 첫 설정의 복잡함이었습니다. 다음 실험에서는 고객이 처음 가치를 느끼기까지의 단계를 줄여 보길 권합니다.`}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:`우선 실험: 첫 설정 간소화`}),(0,u.jsx)(`p`,{style:{margin:`var(--g-space-1) 0 0`},children:`필수 입력을 줄인 시작 화면을 기존 화면과 비교하고, 첫 작업 완료율을 확인하세요. 인터뷰에서 반복된 초기 이탈 문제부터 검증하세요.`})]}),(0,u.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`근거: 고객 인터뷰 요약, 제품 탐색 메모`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-2)`},children:[(0,u.jsx)(r,{variant:`secondary`,onPress:()=>n(`첫 설정 간소화 실험의 가설과 성공 지표를 정리해 줘.`),children:`실험 계획 이어 쓰기`}),(0,u.jsx)(r,{variant:`quiet`,onPress:()=>f(e=>!e),children:d?`저장 취소`:`요약 저장`})]}),(0,u.jsx)(`span`,{role:`status`,style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:d?`요약을 저장했어요.`:``})]}),(0,u.jsx)(a,{label:`리서치 도우미에게 요청`,description:`Enter로 보내고 Shift+Enter로 줄을 바꿔요.`,placeholder:`메시지 입력`,value:t,onValueChange:n,onSubmit:e=>{c(e),f(!1)},models:[{value:`research`,label:`리서치 모드`},{value:`writing`,label:`작성 모드`}],modelLabel:`작업 모드`,sendLabel:`요청 보내기`})]}),(0,u.jsxs)(`aside`,{"aria-label":`작업 자료와 사용량`,style:{flex:`1 1 calc(var(--g-space) * 64)`,minWidth:0,display:`grid`,gap:`var(--g-space-6)`},children:[(0,u.jsxs)(`section`,{"aria-labelledby":e,style:{display:`grid`,gap:`var(--g-space-3)`,justifyItems:`start`},children:[(0,u.jsx)(`h3`,{id:e,style:{margin:0,fontSize:`var(--g-text-heading-4)`,lineHeight:`var(--g-leading-heading)`},children:`자료`}),(0,u.jsxs)(`ul`,{style:{display:`grid`,gap:`var(--g-space-3)`,margin:0,padding:0,listStyle:`none`},children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`고객 인터뷰 요약`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`인터뷰 8건, 오늘 수정`})]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`제품 탐색 메모`}),(0,u.jsx)(`p`,{style:{margin:0,color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`},children:`가설과 관찰, 어제 수정`})]})]}),(0,u.jsx)(r,{variant:`secondary`,onPress:()=>n(`연결된 자료별로 핵심 내용을 요약해 줘.`),children:`자료별 요약 요청`})]}),(0,u.jsx)(o,{label:`대화 컨텍스트`,tokens:{system:800,messages:2400,files:4800},limit:32e3})]})]})]})}var f={id:`ai-workspace`,title:`AI 작업 공간`,koreanTitle:`AI 작업 공간`,group:`blocks`,interactions:[`type`,`press`],description:`고객 인터뷰 자료를 옆에 두고 리서치 도우미와 대화하며, 요약을 저장하고 다음 실험을 준비하는 화면입니다.`,demo:d,behavior:[`요청과 답변은 테두리 없이 화면 흐름에 놓이고, 답변 위의 구분선 하나로 요청과 나눕니다.`,`요청 입력에서 Enter는 전송하고 Shift+Enter는 줄을 바꿉니다. 한글 조합 중의 Enter는 전송하지 않습니다.`,`보낸 요청은 "나의 요청" 자리를 바꾸고 요약의 저장 상태를 해제합니다. 답변은 고정된 예시 응답입니다.`,`요약 저장은 저장과 저장 취소를 오가며, 저장했을 때만 상태 문장을 알립니다.`,`좁은 화면에서는 자료와 컨텍스트 사용량이 대화 아래로 내려갑니다.`],whenToUse:[`고객 인터뷰 같은 자료를 옆에 두고 도우미에게 요청해 요약을 받는 리서치 화면을 만들 때 씁니다.`,`받은 요약을 저장하고 다음 실험을 묻는 요청으로 이어 쓰는 흐름이 한 화면에 있어야 하는 업무에 맞습니다.`],whenNot:[`자료 없이 대화만 오가는 화면이면 Chat을 씁니다.`,`질문 하나를 받아 보내는 입력창만 필요하면 PromptInput을 씁니다.`,`컨텍스트 사용량만 따로 보여 주려면 ContextMeter를 씁니다.`],aiNotes:[`이 페이지는 하나의 컴포넌트가 아니라 PromptInput, ContextMeter, Badge, Button을 조합한 블록이므로 복사해 서비스에 맞게 고칩니다.`,`PromptInput은 value와 onValueChange로 초안을 쥐고, onSubmit이 보낸 글을 받습니다. 요청을 보내면 요약의 저장 상태를 해제하는 일은 화면이 합니다.`,`답변은 고정된 예시입니다. 실제 연결에서는 대기, 실패, 근거 표시를 호출자가 붙입니다.`],usage:s(c),props:[{name:`Badge`,type:`'@gyeol/ui'`,description:`자료 연결과 검토 완료 상태를 표시합니다.`},{name:`Button`,type:`'@gyeol/ui'`,description:`후속 요청을 작성하거나 요약의 저장 상태를 전환합니다.`},{name:`ContextMeter`,type:`'@gyeol/ui'`,description:`자료와 메시지의 컨텍스트 사용량을 표시합니다.`},{name:`PromptInput`,type:`'@gyeol/ui'`,description:`요청 입력과 작업 모드 선택입니다. 한글 조합 중의 Enter는 전송하지 않습니다.`}]};export{f as doc};