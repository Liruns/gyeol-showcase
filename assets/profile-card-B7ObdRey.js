import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{St as r}from"./boot-D-YxLYeO.js";import{n as i,r as a,t as o}from"./Avatar-BW1BSs3_.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Card-Dztz7Yyx.js";import{t as p}from"./Dialog-BmBiCMKN.js";import{t as m}from"./Separator-iI59zboq.js";import{t as h}from"./usage-source-BdQLyNT5.js";var g=`import {Fragment, useState} from 'react';\r
import {Avatar, AvatarBadge, AvatarFallback, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, Separator} from '@gyeol/ui';\r
\r
function Demo() {\r
  const [following, setFollowing] = useState(false);\r
  return (\r
    <Card style={{width: '100%', maxWidth: 'calc(var(--g-space) * 140)', minWidth: 0}}>\r
      <CardHeader>\r
        <div style={{display: 'flex', alignItems: 'center', gap: 'var(--g-space-3)', minWidth: 0}}>\r
          <Avatar size="lg">\r
            <AvatarFallback label="김서윤">서윤</AvatarFallback>\r
            <AvatarBadge status="online" label="현재 접속 중" />\r
          </Avatar>\r
          <div style={{display: 'grid', gap: 'var(--g-space-1)', minWidth: 0}}>\r
            <CardTitle>김서윤</CardTitle>\r
            <CardDescription>결제팀 프로덕트 디자이너</CardDescription>\r
            <span style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-caption)', lineHeight: 'var(--g-leading-help)'}}>새 협업 제안을 받고 있어요</span>\r
          </div>\r
        </div>\r
      </CardHeader>\r
      <CardContent style={{display: 'grid', gap: 'var(--g-space-3)', minWidth: 0}}>\r
        <p style={{margin: 0}}>결제와 정산 화면을 맡고 있어요. 지금은 판매자 정산 리포트를 다시 설계하고 있어요.</p>\r
        <Separator />\r
        <dl style={{display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', gap: 'var(--g-space-2) var(--g-space-4)', margin: 0}}>\r
          {[['전문 분야', '사용자 리서치, 디자인 시스템, 접근성'], ['근무지', '서울, 원격 가능'], ['참여 프로젝트', '12개']].map(([label, value]) => (\r
            <Fragment key={label}>\r
              <dt style={{color: 'var(--g-muted)'}}>{label}</dt>\r
              <dd style={{margin: 0, fontVariantNumeric: 'tabular-nums'}}>{value}</dd>\r
            </Fragment>\r
          ))}\r
        </dl>\r
      </CardContent>\r
      <CardFooter>\r
        <Button variant={following ? 'secondary' : 'primary'} aria-pressed={following} onPress={() => setFollowing(value => !value)}>{following ? '팔로잉' : '팔로우'}</Button>\r
        <Dialog title="김서윤 님 연락처" closeLabel="닫기" trigger={<Button variant="secondary">연락처 보기</Button>}>\r
          <p style={{overflowWrap: 'anywhere', fontWeight: 'var(--g-weight-medium)'}}>seoyun@example.com</p>\r
          <p style={{color: 'var(--g-muted)', fontSize: 'var(--g-text-small)'}}>평일 오전 10시부터 오후 6시까지 답해요.</p>\r
        </Dialog>\r
      </CardFooter>\r
    </Card>\r
  );\r
}`,_=e(t(),1),v=n();function y(){let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(f,{style:{width:`100%`,maxWidth:`calc(var(--g-space) * 140)`,minWidth:0},children:[(0,v.jsx)(s,{children:(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,v.jsxs)(o,{size:`lg`,children:[(0,v.jsx)(a,{label:`김서윤`,children:`서윤`}),(0,v.jsx)(i,{status:`online`,label:`현재 접속 중`})]}),(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-1)`,minWidth:0},children:[(0,v.jsx)(u,{children:`김서윤`}),(0,v.jsx)(d,{children:`결제팀 프로덕트 디자이너`}),(0,v.jsx)(`span`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-caption)`,lineHeight:`var(--g-leading-help)`},children:`새 협업 제안을 받고 있어요`})]})]})}),(0,v.jsxs)(l,{style:{display:`grid`,gap:`var(--g-space-3)`,minWidth:0},children:[(0,v.jsx)(`p`,{style:{margin:0},children:`결제와 정산 화면을 맡고 있어요. 지금은 판매자 정산 리포트를 다시 설계하고 있어요.`}),(0,v.jsx)(m,{}),(0,v.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto minmax(0, 1fr)`,gap:`var(--g-space-2) var(--g-space-4)`,margin:0},children:[[`전문 분야`,`사용자 리서치, 디자인 시스템, 접근성`],[`근무지`,`서울, 원격 가능`],[`참여 프로젝트`,`12개`]].map(([e,t])=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(`dt`,{style:{color:`var(--g-muted)`},children:e}),(0,v.jsx)(`dd`,{style:{margin:0,fontVariantNumeric:`tabular-nums`},children:t})]},e))})]}),(0,v.jsxs)(c,{children:[(0,v.jsx)(r,{variant:e?`secondary`:`primary`,"aria-pressed":e,onPress:()=>t(e=>!e),children:e?`팔로잉`:`팔로우`}),(0,v.jsxs)(p,{title:`김서윤 님 연락처`,closeLabel:`닫기`,trigger:(0,v.jsx)(r,{variant:`secondary`,children:`연락처 보기`}),children:[(0,v.jsx)(`p`,{style:{overflowWrap:`anywhere`,fontWeight:`var(--g-weight-medium)`},children:`seoyun@example.com`}),(0,v.jsx)(`p`,{style:{color:`var(--g-muted)`,fontSize:`var(--g-text-small)`},children:`평일 오전 10시부터 오후 6시까지 답해요.`})]})]})]})}var b={id:`profile-card`,title:`동료 프로필 카드`,koreanTitle:`동료 프로필 카드`,group:`blocks`,interactions:[`press`],description:`소개와 전문 분야, 근무지를 모은 동료 프로필입니다. 팔로우 상태를 바꾸고 연락처는 대화상자로 엽니다.`,demo:y,whenToUse:[`동료의 소개, 전문 분야, 근무지를 모아 두고 팔로우나 연락처 열기 같은 동작을 붙일 때 씁니다.`,`디렉터리나 팀 소개 화면에서 사람 한 명을 독립된 대상으로 보여 줄 때 씁니다.`],whenNot:[`동료 이름만 아바타와 함께 한 줄로 보여 줄 때는 Avatar를 씁니다.`,`로그인한 본인의 계정 메뉴는 ProfileMenu가 맞습니다.`,`여러 동료를 비교하는 화면은 DataTable을 씁니다.`],aiNotes:[`가져다 쓸 ProfileCard 컴포넌트는 없고 Avatar, Card, Button, Dialog, Separator를 조합한 예시 블록입니다. 프로필은 독립된 대상이라 Card의 테두리를 그대로 둡니다.`,`연락처는 Dialog로 열고 열었던 버튼으로 포커스가 돌아가게 합니다. 접속 상태는 AvatarBadge로 보이게 하되 색에만 의존하지 말고 문구도 함께 둡니다.`,`CardFooter의 동작은 좁은 화면에서 줄이 바뀝니다. 버튼 이름은 줄여 쓰지 않습니다.`],usage:h(g),props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`이름 옆에 두는 48px 프로필 아바타.`},{name:`AvatarBadge`,type:`'@gyeol/ui'`,description:`현재 접속 상태.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 없이 이름으로 표시하는 프로필.`},{name:`Button`,type:`'@gyeol/ui'`,description:`팔로우 전환 및 연락처 열기.`},{name:`Card`,type:`'@gyeol/ui'`,description:`동료 한 명을 감싸는 카드. 프로필은 독립된 대상이라 테두리를 둡니다.`},{name:`CardContent`,type:`'@gyeol/ui'`,description:`소개와 전문 분야, 근무지, 참여 프로젝트.`},{name:`CardDescription`,type:`'@gyeol/ui'`,description:`직무와 소속 팀.`},{name:`CardFooter`,type:`'@gyeol/ui'`,description:`좁은 화면에서 줄바꿈되는 동작 영역.`},{name:`CardHeader`,type:`'@gyeol/ui'`,description:`아바타 옆에 이름, 직무, 협업 여부를 두는 머리말.`},{name:`CardTitle`,type:`'@gyeol/ui'`,description:`동료 이름을 표시하는 제목.`},{name:`Dialog`,type:`'@gyeol/ui'`,description:`이메일과 응답 시간을 보여 주는 대화상자.`},{name:`Separator`,type:`'@gyeol/ui'`,description:`소개와 세부 정보를 나누는 구분선.`}]};export{b as doc};