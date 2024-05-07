1+1
// 2
1+"만원"
// '1만원'
1+'1'
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true && true
// true
true && false
// false
true || false
// true
!true
// false


//조건문 실습1
if(1+1 ===2){
    console.log("정답입니다")
}else{
    console.log("틀렸습니다")
}

//VM664:2 정답입니다
//undefined
if(true){
    console.log("정답입니다")
}else{
    console.log("틀렸습니다")
}

//VM679:2 정답입니다
//undefined
if(false){
    console.log("정답입니다")
}else{
    console.log("틀렸습니다")
}

//VM690:4 틀렸습니다

if(!false){
    console.log("정답입니다")
}else{
    console.log("틀렸습니다")
}

//VM714:2 정답입니다
//undefined
if(0){
    console.log("정답입니다")
}else{
    console.log("틀렸습니다")
}

//VM717:4 틀렸습니다


//조건문 실습2
const profile={
    name:"철수",
    age:12,
    school:"다람쥐초등학교"
}
// undefined
if(profile.age >= 20){
    console.log("성인입니다.")
}else if( profile.age >= 8 ){
    console.log("학생입니다.")
}else if(profile.age > 0){
    console.log("어린이입니다.")
} else{
    console.log("잘못입력하셨습니다")
}
// VM1257:4 학생입니다.