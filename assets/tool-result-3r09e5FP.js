import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{n as r,t as i}from"./ToolResult-CzabhRnP.js";import{t as a}from"./SegmentedControl-DTMmujVB.js";import{t as o}from"./workbench-D9WqlYE5.js";var s=e(t(),1),c=n(),l={pending:``,running:`$ bun test
bun test v1.3.1

src/format/amount.test.ts:
(pass) formatAmount > adds thousands separators [0.21ms]`,success:`$ bun test
 42 pass
 0 fail
Ran 42 tests across 7 files. [1.84s]`,error:`$ bun test
(fail) formatAmount > wraps negatives in parentheses [0.38ms]
  Expected: "(1,200)"
  Received: "-1,200"

 41 pass
 1 fail
Ran 42 tests across 7 files. [1.91s]`};function u(){let[e,t]=(0,s.useState)(`running`);return(0,c.jsx)(o,{controls:(0,c.jsx)(a,{label:`실행 상태`,value:e,onChange:e=>t(e),options:[{value:`pending`,label:`대기 중`},{value:`running`,label:`실행 중`},{value:`success`,label:`성공`},{value:`error`,label:`실패`}]}),children:(0,c.jsx)(i,{tool:`bash`,title:`단위 테스트 실행`,kind:`terminal`,status:e,onRetry:()=>t(`pending`),...e===`pending`?{}:{copyText:l[e]},children:e!==`pending`&&(0,c.jsx)(r,{language:`text`,children:l[e]})})})}var d={id:`tool-result`,title:`ToolResult`,koreanTitle:`도구 실행 결과`,group:`ai`,interactions:[`press`],description:`실행 상태와 접을 수 있는 출력, 실패 후 재시도를 표시합니다.`,demo:u,signature:`실행이 끝나면 출력이 접힌 채 나타나고, 실패하면 다시 시도를 누릅니다.`,behavior:[`테두리와 바탕 없이 메시지 흐름에 놓이고, 출력 영역만 옅은 바탕으로 구분합니다.`,`제목 버튼은 Enter와 Space로 출력을 펼치고 접습니다.`,`실행 중에는 새 출력을 따라 아래로 스크롤하고, 사용자가 위로 스크롤하면 따라가기를 멈춥니다.`,`성공하면 출력을 접고, 실패하면 펼친 채로 다시 실행 버튼을 보여 줍니다. 이 예시에서 다시 실행하면 대기 중으로 돌아갑니다.`,`pending은 실행을 기다리는 별도 상태입니다. 도는 아이콘이 없고 aria-busy도 걸지 않으며, 기본 문구는 대기 중입니다.`,`공통 상태어 complete는 success와 같게 표시합니다.`,`복사 결과는 버튼 이름과 상태 영역으로 알립니다. 다른 문구가 필요하면 labels로 바꿉니다.`,`움직임 줄이기를 설정하면 실행 중 아이콘이 멈추고 상태 문구는 그대로 남습니다.`],whenToUse:[`에이전트가 호출한 도구의 실행 상태와 출력을 대화 흐름 안에 접어서 보여 줄 때 씁니다.`,`실패한 실행에 다시 실행 버튼을 붙여야 하는 작업 로그에 맞습니다.`],whenNot:[`사람의 승인이 필요한 작업이면 ApprovalCard를 씁니다.`,`출력이 코드뿐이면 CodeBlock을 씁니다.`,`단계별 추론 과정을 보여 주려면 ReasoningTrace를 씁니다.`],aiNotes:[`tool과 title을 넘기고, 출력은 children에 둡니다. 상태는 status로 알리며 pending, success, complete 같은 값을 받습니다.`,`open을 쥐면 제어 모드이므로 onOpenChange에서 갱신하고, 시작 상태만 정하려면 defaultOpen을 씁니다. 성공하면 출력이 접힙니다.`,`다시 실행은 onRetry로, 복사는 copyText와 onCopy로 연결하고, 출력 높이는 maxHeight로 제한합니다.`],usage:`import {ToolResult, ToolResultOutput} from '@gyeol/ui';

<ToolResult tool="bash" title="단위 테스트 실행" kind="terminal" status={status} onRetry={runTests} copyText={output}>
  <ToolResultOutput language="text">{output}</ToolResultOutput>
</ToolResult>`,props:[{name:`tool`,type:`ReactNode`,description:`실행한 도구`},{name:`title`,type:`ReactNode`,description:`실행 제목`},{name:`status`,type:`ToolResultStatus | WorkStatus`,defaultValue:`'running'`,description:`실행 상태. running, success, error, cancelled와 공통 상태어 pending, complete를 받습니다.`},{name:`kind`,type:`'custom' | 'terminal' | 'request'`,defaultValue:`'custom'`,description:`제목 앞 아이콘의 종류`},{name:`copyText`,type:`string`,description:`복사 버튼이 클립보드에 넣을 출력`},{name:`labels`,type:`Partial<ToolResultLabels>`,description:`복사, 재시도, 상태 문구. status.pending은 선택입니다. 기본값은 실행 중, 성공, 실패, 취소됨, 대기 중, 출력 복사 같은 한국어입니다.`},{name:`onRetry`,type:`() => void`,description:`재시도 콜백`}]};export{d as doc};