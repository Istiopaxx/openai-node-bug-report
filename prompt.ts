export const chatGPTAPISecondQuery = `
위에서 제시한 레시피에 대한 글을 보고 아래의 요구사항을 모두 만족하면서, 예시로 적어둔 json 포맷으로 알려줘.

아래는 예시의 json 포맷이다.

JSON Format:
"""
{
  "name": "레시피 제목",
  "description": "레시피에 대한 설명을 요약하지 말고, 원문 그대로 포함한다.",
  "thumbnail": "레시피 대표 이미지 url",
  "ingredient_requirements": [
    { "name": "재료 이름1", "amount": "재료 양" },
    { "name": "재료 이름2", "amount": "재료 양" }
  ],
  "recipe_steps": [
    {
      "description": "조리법 단계에 대한 설명을 요약하거나 누락하지 않고 레시피 원문 그대로 포함해서 자세히 적는다.",
      "images": ["이미지 url1", "이미지 url2", "이미지 url3"],
      "ingredients": [
        { "name": "필요한 재료 이름1", "amount": "재료 양" },
        { "name": "필요한 재료 이름2", "amount": "재료 양" }
      ]
    },
    {
      "description": "조리법 단계에 대한 설명을 요약하거나 누락하지 않고 레시피 원문 그대로 포함해서 자세히 적는다.",
      "images": ["이미지 url1", "이미지 url2", "이미지 url3"],
      "ingredients": [
        { "name": "필요한 재료 이름1", "amount": "재료 양" },
        { "name": "필요한 재료 이름2", "amount": "재료 양" }
      ]
    }
  ]
}
"""

아래는 만족해야할 요구사항이다.


요구사항:
"""
1. 레시피 제목("name")은 레시피 글에서 해당하는 제목을 축약하지 말고 레시피 원문 그대로 포함해야 한다.
2. 레시피에 대한 한줄 설명("description")은 레시피 글에서 해당하는 레시피에 대한 설명을 축약하지 말고 레시피 원문 그대로 포함해야 한다.
3. 레시피에서 필요한 재료 목록("ingredient_requirements")은 레시피 원문에서 일반 재료와 양념장 재료, 그 외 재료 등등 모두를 합하여 포함해야 한다.
4. 각 조리법 단계("recipe_steps")의 조리법 설명("description")은 원래의 레시피 글에서 해당하는 조리법 단계의 설명을 최대한 자세하게 포함해야 한다.
5. 위의 레시피에 대한 글에서 조리법 단계("recipe_steps")에 여러 이미지 url이 있는 경우 json 포맷으로 바꿀 때 여러 이미지 url을 모두 같은 조리법 단계의 이미지 목록("images")에 포함해야 한다.
6. 조리법 단계("recipe_steps")의 이미지 목록("images")은 반드시 레시피 원문에 있는 이미지 url을 그대로 포함해야 하며, 순서를 유지해야 한다.
7. 각 조리법 단계("recipe_steps")의 필요한 재료 목록("ingredients")는 반드시 레시피 원문에서의 각 단계에서 필요한 재료를 양념장과 일반 재료를 모두 포함해야 한다.
8. 각 조리법 단계("recipe_steps")의 필요한 재료 목록("ingredients")는 정확히 그 단계에서 필요한 재료만 포함하며, 절대 빈 배열이어서는 안된다.
"""
`;

export const chatGPTAPIFirstQuery = `
아래 글은 레시피에 대한 글이다. 

Text:
"""
본문 제목

닭볶음탕 레시피, 배달 전문점 느낌으로 닭도리탕 만드는 법

카테고리 없음 [/category]

by 누구나 따라 하기 쉽게 집밥 레시피 2021. 8. 30. 15:56


본문

[https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAzxML%2FbtrdCywrebB%2FXrypi2QQpKi436ObP1ZNd1%2Fimg.png]

좋아요 -
댓글달기 32

728x90

반응형


 오늘은 한국인이 즐겨먹는 닭요리, 바로 닭볶음탕 레시피를 가져왔다. 국물요리와 반찬 사이의 요리로 닭볶음탕 하나만 있어도 다른 반찬 하나
없이도 한끼 식사를 뚝딱 해결 가능할정도로 닭을 좋아하는 한국인이라면 호불호없이 애정하는 메뉴라고 할 수 있다. 최근 닭볶음탕 배달 전문점이
많이 생길 정도로 인기가 많은 메뉴인데, 오늘은 닭볶음탕 배달 전문점으로 유명한 곳의 비법 레시피를 소개해보겠다.



> 재료

2인분 기준

(계량 : 밥 숟가락, 종이컵)

조리도구 : 강판 필요

닭 : 1마리

소금 : 2숟가락

설탕 : 5숟가락

순후추 : 조금

우유 : 400ml

대파 : 2대

감자 : 2개

양파 : 1개

당근 : 1/4개

식용유 : 2숟가락

고춧가루 : 3숟가락

다진마늘 : 2숟가락

진간장 : 1/2컵

물 : 2컵

고추장 : 1숟가락

된장 : 1/2숟가락

소고기 다시다 : 1/2숟가락

청양고추 : 1개





[재료 준비]

1. 손질된 닭 한 마리를 흐르는 물에 깨끗하게 씻어 남아있는 불순물을 모두 씻어낸다. 닭의 크기는 10호~12호가 가장 적당하다.



[https://blog.kakaocdn.net/dn/chqldI/btrdBrqLC5u/4dVxeQMzZNzn3uXeMwVDz0/img.png]깨끗이
세척된 닭



2. 소금 2숟가락, 설탕 2숟가락, 후추를 조금 뿌려 밑간을 한 후 닭이 잠길정도로 우유를 붓고(약 400ml) 2시간정도 재워둔다.



[https://blog.kakaocdn.net/dn/lV1a8/btrdwTIiHaO/rj5eVNR3volkJuSdUWiXOk/img.png]소금
2숟가락
[https://blog.kakaocdn.net/dn/bXhG0C/btrdCzIRgoH/GYAMVn1jLRaAV1opks3U5K/img.png]설탕
2숟가락
[https://blog.kakaocdn.net/dn/dpzpZx/btrduU1PnEU/ZjL7uhNqyRGurwflegjKM0/img.png]우유
400ml
[https://blog.kakaocdn.net/dn/XtxiT/btrdC5AL9Pr/VOZeSmK1TvjgafLZUl20uK/img.png]순후추
조금



3. 대파 2대를 5~7cm 간격으로 큼직하게 썰어 준비한다.



[https://blog.kakaocdn.net/dn/ynt9b/btrdtKZtPM6/CsjPZNwa4sr0XT8oNSamok/img.png]대파
2대
[https://blog.kakaocdn.net/dn/cSiStH/btrdCyiQ34T/AC0hpyddD45DGX5LdifSb0/img.png]



4. 감자 1개를 먹기 좋은 크기로 깍뚝썰기한다.



[https://blog.kakaocdn.net/dn/bjwIEQ/btrdylkfxgE/FfB623qUwprWVjHcqUkFV0/img.png]감자
1개



5. 당근 1/4개를 먹기 좋은 크기로 썰어 준비한다.



[https://blog.kakaocdn.net/dn/bVu5bT/btrdDyioswD/4r6XjWdEQrKOIEED548DhK/img.png]당근
1/4개



6. 양파 1개를 먹기 먹기 좋은 적당한 크기로 썰어 준비한다.



[https://blog.kakaocdn.net/dn/cfidK8/btrdzOmgTeY/MvkhT1MutHQs8fZ7wyXHW1/img.png]양파
1개
[https://blog.kakaocdn.net/dn/bd3QsF/btrdtLD1mhL/8f8EHUyzQpem6lmzgNCYGk/img.png]손질된
채소의 모습



7. 손질된 감자 1개를 강판에 갈아 준비한다.



[https://blog.kakaocdn.net/dn/P4W72/btrdyj7P8ES/cKH5m7HEJJrGpvqsmtrUKK/img.png]강판
[https://blog.kakaocdn.net/dn/3KtKi/btrdwTVRRH0/GAhF1cKKqWMlUMSAuD5g80/img.png]
[https://blog.kakaocdn.net/dn/d9gQmy/btrdzO0Pbmo/PnkKIQ5v0tcicADvZ0hvFk/img.png]잘
갈린 감자의 모습



8. 청양고추 1개를 작게 썰어 준비한다.



[조리 과정]

1. 냄비에 식용유 2~3숟가락, 고춧가루 3숟가락, 다진마늘 1숟가락을 넣고 약불로 잘 볶아준다.

고춧가루를 식용유에 볶아주는 과정은 요리 초심자에게는 생각보다 어려울 수 있는데, 관건은 불조절이라고 할 만큼 최대한 약불로 타지 않게 천천히
볶아주는 것이 중요하다. 혹시 불조절에 실패해서 고춧가루가 조금이라도 탈 것 같으면 바로 물 반컵을 넣어서 타는 것을 막아주어야 한다.



[https://blog.kakaocdn.net/dn/cjdLWW/btrdDxRjZ9S/JsHEBMq7Q6ktk44u09s2ek/img.png]식용유
2숟가락
[https://blog.kakaocdn.net/dn/bW6l7L/btrdwTuQjgx/ugC6LnPoUTvuYuHedLuD70/img.png]고춧가루
3숟가락
[https://blog.kakaocdn.net/dn/DkhYx/btrdBp0MAUV/ihXHlsuR9NCqPTGUnrzRo1/img.png]다진마늘
1숟가락
[https://blog.kakaocdn.net/dn/bmMBqJ/btrdzONflua/iklRu2CkHhll04iQlqraz0/img.png]약불로
볶아주는 모습



2. 5~7cm정도로 큼직하게 썰은 대파 2대를 넣고 약불에서 천천히 볶아준다.



[https://blog.kakaocdn.net/dn/bo8Lw7/btrdC5OiscZ/30s9UkNlYG0etjW3BP13a1/img.png]대파
2대
[https://blog.kakaocdn.net/dn/llPM0/btrdyjGPvf2/UkCRSnlSuaviGJkpyLXCU1/img.png]잘
볶아진 모습



3. 우유에 2시간정도 재워둔 닭을 깨끗하게 물에 씻고 물기를 제거한 후 넣어준다. 닭의 겉면이 익을 때 따지 잘 섞어가며 볶아준다.



[https://blog.kakaocdn.net/dn/dhFAOJ/btrdCzB6ksQ/3yJIachkCaSpv7prapFRiK/img.png]닭
한마리
[https://blog.kakaocdn.net/dn/IYbPh/btrdr3EYBDa/Rw17lPI6eX83PkLG0qK1wk/img.png]겉면이
익은 모습



4. 닭의 겉면이 익으면 간장 1/2컵과 설탕 3숟가락을 넣고 약불에서 2~3분 끓여준다. 자연스러운 단맛을 원하면 설탕의 양을 기호에 따라
1~2숟가락으로 줄여도 좋다. 그 대신 단맛과 감칠맛을 내는 양파 1개를 감자를 강판에 갈 때 같이 갈아서 넣어주면 된다.



[https://blog.kakaocdn.net/dn/nVAkh/btrdtJ7hLxb/kD4RJxKk3qRKQBxvX1Yff1/img.png]간장
1/2컵
[https://blog.kakaocdn.net/dn/ERO1h/btrdBpT1wJn/gjufiEZyvKdUvK25bshNdK/img.png]설탕
3숟가락
[https://blog.kakaocdn.net/dn/bwsjOM/btrdwSCFMwu/UeQK1JtTJ6MKmVFf7KBA9k/img.png]간장
1/2컵과 설탕 3숟가락



5. 물 2컵을 넣은 후 썰어둔 감자 1개와 당근 1/4개를 넣어준다.



[https://blog.kakaocdn.net/dn/O8XEJ/btrdr3roVbv/7aHcVhFzLjllJXCzBtkgPk/img.png]물
2컵
[https://blog.kakaocdn.net/dn/dbSDur/btrdDwSpzqV/z1hiaXZrQrdtzbdqRurGN1/img.png]감자
1개와 당근 1/4개



6. 고추장 1숟가락과 된장 1/2숟가락을 넣고 국물에 잘 풀어준 후 20분간 중불에서 잘 끓여준다.



[https://blog.kakaocdn.net/dn/xMIvD/btrdDxRklrn/ocKDaQlCGbVLf6y0IzXcAk/img.png]고추장
1숟가락
[https://blog.kakaocdn.net/dn/VbqbM/btrdr3Stg3M/G8sAZhoWr4vrFBGzVs9LI0/img.png]된장
1/2숟가락
[https://blog.kakaocdn.net/dn/tbIQz/btrdDyJs4ED/B0Xku3U4710aHoo6oSI7B1/img.png]20분간
끓여준 모습



7. 썰어둔 양파 1개와 소고기 다시다 1/2숟가락을 넣어준다.

소고기 다시다 대신 치킨 스톡을 넣어주어도 원조 레시피와 유사하게 만들 수 있지만 집에 치킨스톡이 없으면 소고기 다시다로도 충분히 대체
가능하다. 참고로 닭과 소고기 다시다의 조합은 예상 외로 매우 좋으므로 각종 닭요리에 소량씩 넣어주면 더욱 맛있게 만들 수 있다.



[https://blog.kakaocdn.net/dn/ew8HCL/btrdC42Vavq/ehNDrYkOd4sBlK9s5lgA00/img.png]양파
1개
[https://blog.kakaocdn.net/dn/bApEbB/btrdzOGyDw5/HschaSBwjYDP0GHI3TFKj1/img.png]소고기
다시다 1/2숟가락



8. 강판에 갈아 준비해둔 감자 1개를 국물에 넣고 잘 섞어준다.

감자를 갈아서 넣는 레시피가 다소 생소하게 느껴질 수도 있는데, 보통 닭볶음탕의 국물은 완성되자마자 바로 먹었을 때도 물론 맛있지만 몇 번 더
끓여준 다음 다음날쯤 먹는 닭볶음탕의 국물이 더욱 진하고 걸쭉하게 느껴질 경우가 있을 것이다. 그 이유는 닭 육수가 더욱 우러나와서 그런 것
뿐만 아니라 시간이 지나면서 감자가 흐물흐물하게 풀리면서 나오게 되는 진한 맛인데, 감자의 전분 성분으로 국물이 더욱 걸쭉해지는 현상이
발생한다. 진하고 걸쭉한 닭볶음탕의 국물은 닭과 각종채소와 함께 잘 어우러져 밥과 비벼먹었을 때 상상 이상의 맛있는 맛을 자랑한다. 갓 만든
닭볶음탕에서 더욱 걸쭉한 국물을 맛보고 싶다면 감자 한 개를 갈아서 국물에 넣어주면 오랫동안 푹 끓려준 그 맛을 느낄 수 있을 것이다.



[https://blog.kakaocdn.net/dn/dz6wzf/btrdwS3KTEA/6vQyofGO3JliACbxe1Fbe1/img.png]강판에
갈은 감자
[https://blog.kakaocdn.net/dn/x9Ue4/btrdtKd5a5c/z1V91rqsml1bK516LrF0ck/img.png]잘
섞어준 모습



9. 불을 끄고 다진마늘 1숟가락과 썰어둔 청양고추 1개를 넣고 잘 섞어주며 마무리한다. 한식 요리에서 다진마늘은 요리 중간과정에 넣어 국물에서
충분히 익히는 레시피를 사용하는데, 불을 끄자 마자 다진마늘 1숟가락을 넣고 잘 섞어주면 닭볶음탕의 남아있는 뜨거운 열기로 마늘을 익혀주면서
국물을 떠서 먹었을 때 마늘 고유의 풍미가 더욱 살아나는 효과가 있다.

( tip : 라면을 끓일 때도 다진 마늘 반 숟가락을 불을 끄고 넣어주면 마치 라멘을 먹는 것처럼 국물에서 마늘의 알싸하고 깊은 향이
살아난다.)



[https://blog.kakaocdn.net/dn/bHXd1y/btrdC4PpYTu/US1SWQwOY0wpJTMu0C0Hi1/img.png]다진마늘
1숟가락
[https://blog.kakaocdn.net/dn/bm8zSm/btrdCzISdQa/SZnFHMfKcs7yJL2SvTr0l0/img.png]청양고추
1개
[https://blog.kakaocdn.net/dn/AzxML/btrdCywrebB/Xrypi2QQpKi436ObP1ZNd1/img.png]완성된
닭볶음탕



 밥 한공기 담아 닭볶음탕 올려서 쓱쓱 비벼먹으면 가장 든든하고 맛있는 한끼가 될 것이다. 오늘 소개한 닭볶음탕 레시피는 우리에게는 지극히
평범한 메뉴이지만 그 맛은 결코 평범하지 않을 것을 자신한다.





728x90

반응형

좋아요877
공유하기
페이스북으로 공유카카오스토리로 공유트위터로 공유URL 복사
게시글 관리

구독하기Chef Kim의 뚝딱 레시피
응원하기

"""

답변은 필요없고, 다음 질문을 받아줘.
`;
