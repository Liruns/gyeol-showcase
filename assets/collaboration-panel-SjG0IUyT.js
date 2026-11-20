import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{i as r,r as i,t as a}from"./Avatar-BWpNARdL.js";import{n as o,t as s}from"./Badge-rwba6Qq3.js";import{t as c}from"./CommentThread-CmrducCk.js";import{t as l}from"./TaskList-BhUxE_sz.js";import{t as u}from"./comments-CqkEkH_h.js";var d=e(t(),1),f=n(),p=[{id:`research`,label:`사용자 인터뷰 정리`,status:`done`},{id:`flow`,label:`가입 흐름 시안 검토`,status:`in-progress`},{id:`copy`,label:`안내 문구 최종 확인`,status:`pending`}],m=[{id:`review`,author:`김서연`,dateTime:`2026-10-26T10:20:00+09:00`,timeLabel:`오늘 오전 10:20`,body:`가입 단계는 두 단계로 줄였어요. 필수 정보만 먼저 받고, 관심 분야는 가입 후에 선택하면 어떨까요?`,replies:[{id:`feedback`,author:`이지민`,dateTime:`2026-10-26T10:32:00+09:00`,timeLabel:`오늘 오전 10:32`,body:`좋아요. 인터뷰에서도 처음 입력할 정보가 많다는 의견이 있었어요. 안내 문구도 함께 맞춰 볼게요.`}]}];function h(){let[e,t]=(0,d.useState)(p),[n,h]=(0,d.useState)(m),g=(0,d.useId)(),_=e.filter(e=>e.status===`done`).length;function v(e,t){let n=new Date,r={id:crypto.randomUUID(),author:`나`,body:t,dateTime:n.toISOString(),timeLabel:n.toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})};h(t=>u(t,e,r))}return(0,f.jsxs)(`section`,{"aria-label":`가입 흐름 개선 협업 공간`,style:{display:`grid`,gap:`var(--g-space-6)`,color:`var(--g-ink)`,minWidth:0,overflowWrap:`anywhere`},children:[(0,f.jsxs)(`header`,{style:{display:`grid`,gap:`var(--g-space-3)`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2) var(--g-space-3)`},children:[(0,f.jsx)(`h2`,{style:{margin:0,fontSize:`var(--g-text-heading-3)`,lineHeight:`var(--g-leading-heading)`,letterSpacing:`var(--g-tracking-heading)`},children:`가입 흐름 개선`}),(0,f.jsx)(s,{state:`idle`,label:`검토 진행 중`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--g-space-2) var(--g-space-6)`,fontSize:`var(--g-text-small)`,color:`var(--g-muted)`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--g-space-2)`},children:[(0,f.jsx)(r,{label:`프로젝트 참여자: 이지민, 김서연, 박도윤`,children:[`이지민`,`김서연`,`박도윤`].map(e=>(0,f.jsx)(a,{size:`sm`,children:(0,f.jsx)(i,{label:e,children:e.slice(1)})},e))}),(0,f.jsx)(`span`,{children:`참여자 3명`})]}),(0,f.jsxs)(`span`,{children:[`검토 마감 `,(0,f.jsx)(`strong`,{style:{color:`var(--g-ink)`},children:`10월 30일`})]})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--g-space-6) var(--g-space-8)`,alignItems:`flex-start`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--g-space-4)`,flex:`1 1 var(--g-listbox-max)`,minWidth:0,maxWidth:`100%`},children:[(0,f.jsxs)(`section`,{"aria-labelledby":g,style:{display:`grid`,gap:`var(--g-space-2)`,paddingBlockEnd:`var(--g-space-4)`,borderBlockEnd:`var(--g-border-width) solid var(--g-border)`},children:[(0,f.jsx)(`h3`,{id:g,style:{margin:0,fontSize:`var(--g-text-compact)`,fontWeight:`var(--g-weight-semibold)`,lineHeight:`var(--g-leading-body)`},children:`이번 주 목표`}),(0,f.jsx)(`p`,{style:{margin:0,lineHeight:`var(--g-leading-body)`},children:`가입 필수 입력을 3개로 줄입니다.`}),(0,f.jsx)(o,{label:`작업 완료율`,value:e.length?_/e.length*100:0})]}),(0,f.jsx)(l,{label:`함께할 작업`,items:e,onChange:t})]}),(0,f.jsx)(`div`,{style:{flex:`2 1 var(--g-listbox-max)`,minWidth:0,maxWidth:`100%`},children:(0,f.jsx)(c,{label:`가입 단계 줄이기`,comments:n,onReply:v})})]})]})}var g={id:`collaboration-panel`,title:`팀 협업 패널`,koreanTitle:`팀 협업 패널`,group:`blocks`,interactions:[`press`,`type`],description:`프로젝트 목표와 참여자, 함께할 작업, 검토 대화를 한 화면에 모은 협업 공간입니다.`,demo:h,behavior:[`머리글과 목표는 카드 없이 흐름에 놓이고, 목표와 작업 목록 사이에 구분선 하나를 둡니다.`,`작업 상태를 바꾸면 완료된 작업 비율이 작업 완료율에 바로 반영됩니다.`,`답글을 등록하면 대화 목록에 바로 추가됩니다.`],whenToUse:[`프로젝트 목표, 참여자, 공동 작업 목록, 검토 대화를 한 화면에서 함께 볼 때 씁니다.`,`작업 상태를 바꾸면 완료율이 바로 달라지는 팀 현황 화면에 맞습니다.`],whenNot:[`댓글 스레드만 사이드 패널로 모아 진행 중과 해결됨으로 나눌 때는 CommentsPanel을 씁니다.`,`에이전트에게 맡길 작업만 순서대로 관리하는 화면이면 TaskList 하나로 충분합니다.`,`승인이나 반려를 받는 결재는 ApprovalCard를 씁니다.`],aiNotes:[`이 블록은 Avatar, AvatarGroup, Badge, CommentThread, Progress, TaskList를 조합한 예시이므로 usage 코드를 가져다 데이터 연결만 바꿉니다.`,`완료율은 작업 상태에서 계산해 Progress에 넘기고, 답글은 CommentThread의 onReply로 받아 comments를 갱신합니다.`,`참여자 아바타에는 접근 가능한 이름이 있어야 하므로 AvatarFallback에 이름을 넘깁니다.`],usage:`import {useState} from 'react';
import {Avatar, AvatarFallback, AvatarGroup, Badge, CommentThread, Progress, TaskList} from '@gyeol/ui';
import type {CommentThreadComment, TaskListItem} from '@gyeol/ui';

export function CollaborationPanel() {
  const [tasks, setTasks] = useState<readonly TaskListItem[]>([
    {id: 'research', label: '사용자 인터뷰 정리', status: 'done'},
    {id: 'flow', label: '가입 흐름 시안 검토', status: 'in-progress'},
    {id: 'copy', label: '안내 문구 최종 확인', status: 'pending'},
  ]);
  const [comments, setComments] = useState<readonly CommentThreadComment[]>([
    {id: 'review', author: '김서연', dateTime: '2026-10-26T10:20:00+09:00', timeLabel: '오늘 오전 10:20', body: '가입 단계는 두 단계로 줄였어요. 필수 정보만 먼저 받고, 관심 분야는 가입 후에 선택하면 어떨까요?'},
  ]);
  const completed = tasks.filter(task => task.status === 'done').length;
  function reply(parentId: string | null, body: string) {
    const now = new Date();
    const comment: CommentThreadComment = {id: crypto.randomUUID(), author: '나', body, dateTime: now.toISOString(), timeLabel: now.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit'})};
    function append(items: readonly CommentThreadComment[]): readonly CommentThreadComment[] {
      return items.map(item => item.id === parentId ? {...item, replies: [...(item.replies ?? []), comment]} : item.replies ? {...item, replies: append(item.replies)} : item);
    }
    setComments(current => parentId === null ? [...current, comment] : append(current));
  }
  return <section aria-label="가입 흐름 개선 협업 공간" style={{display: 'grid', gap: 'var(--g-space-6)'}}>
    <header style={{display: 'grid', gap: 'var(--g-space-3)'}}>
      <h2 style={{margin: 0, fontSize: 'var(--g-text-heading-3)'}}>가입 흐름 개선</h2>
      <Badge state="idle" label="검토 진행 중" />
      <AvatarGroup label="프로젝트 참여자: 이지민, 김서연, 박도윤">
        {['이지민', '김서연', '박도윤'].map(name => <Avatar key={name} size="sm"><AvatarFallback label={name}>{name.slice(1)}</AvatarFallback></Avatar>)}
      </AvatarGroup>
      <span>참여자 3명</span>
      <span>검토 마감 <strong>10월 30일</strong></span>
    </header>
    <section style={{display: 'grid', gap: 'var(--g-space-2)', paddingBlockEnd: 'var(--g-space-4)', borderBlockEnd: 'var(--g-border-width) solid var(--g-border)'}}>
      <h3 style={{margin: 0, fontSize: 'var(--g-text-compact)'}}>이번 주 목표</h3>
      <p style={{margin: 0}}>가입 필수 입력을 3개로 줄입니다.</p>
      <Progress label="작업 완료율" value={tasks.length ? completed / tasks.length * 100 : 0} />
    </section>
    <TaskList label="함께할 작업" items={tasks} onChange={setTasks} />
    <CommentThread label="가입 단계 줄이기" comments={comments} onReply={reply} />
  </section>;
}`,props:[{name:`Avatar`,type:`'@gyeol/ui'`,description:`프로젝트 참여자의 아바타 컨테이너.`},{name:`AvatarFallback`,type:`'@gyeol/ui'`,description:`사진 대신 표시하는 참여자 이름과 접근 가능한 이름.`},{name:`AvatarGroup`,type:`'@gyeol/ui'`,description:`함께 작업하는 참여자 묶음.`},{name:`Badge`,type:`'@gyeol/ui'`,description:`현재 프로젝트의 검토 상태.`},{name:`CommentThread`,type:`'@gyeol/ui'`,description:`답글 작성과 해결 상태 변경이 되는 검토 대화.`},{name:`Progress`,type:`'@gyeol/ui'`,description:`완료된 작업 비율.`},{name:`TaskList`,type:`'@gyeol/ui'`,description:`상태 변경, 추가, 삭제, 순서 이동이 되는 공동 작업 목록.`}]};export{g as doc};