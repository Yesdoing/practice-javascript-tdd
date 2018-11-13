## Stack 이란?
- 스택(stack)은 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조(LIFO - Last In First Out)으로 되어 있다. 
- LIFO 구조는 나중에 넣은 값이 먼저 나오는 것을 말한다.
- 자료를 넣는 것을 push
- 자료를 꺼내는 것을 pop
- 이때 꺼내지는 자료는 가장 최근에 보관한 자료부터 나온다. 

### Stack Example
- push: a - b - c
- pop: c - b - a
![img](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/391px-Data_stack.svg.png)

### 구현 요구사항
- S를 스택, x를 데이터 요소(element)라고 할 때,
- S.top(): 스택의 가장 윗 데이터를 넘겨준다.만약에 비었다면 이 연산은 정의불가 상태다.
- S.pop(): 스택의 가장 윗 데이터의 값을 넘겨주고 해당 데이터를 삭제한다. 스택이 비었다면 연산 정의불가 상태.
- S.push(): 스택의 가장 윗 데이터로 top이 가리키는 자리 위에(top = top + 1) 메모리를 생성, x데이터를 넣는다.
- S.empty(): 스택이 비었다면 참을 주고,그렇지 않다면 거짓이 된다.