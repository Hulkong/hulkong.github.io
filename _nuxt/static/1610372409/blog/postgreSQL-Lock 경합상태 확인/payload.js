__NUXT_JSONP__("/blog/postgreSQL-Lock 경합상태 확인", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{article:{slug:"postgreSQL-Lock 경합상태 확인",description:S,title:S,renderimg:"\u002Fblog\u002FpostgreSQL_512.png",img:"\u002Fblog\u002Flandscape_1920.jpg",alt:S,author:{name:"Hulkong",bio:"",img:"\u002Fblog\u002F333x213px-kyh.png"},tags:[L,ah],toc:[{id:ag,depth:B,text:af},{id:ae,depth:B,text:$},{id:_,depth:B,text:Z},{id:Y,depth:B,text:X}],body:{type:"root",children:[{type:b,tag:G,props:{id:ag},children:[{type:b,tag:s,props:{href:"#block%EB%90%9C-sql-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EC%A1%B0%ED%9A%8C",ariaHidden:u,tabIndex:x},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:af}]},{type:a,value:i},{type:b,tag:A,props:{className:[J]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pid         "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" blocked_pid"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"usename  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" blocked_user"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n       blocking_locks"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pid        "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" blocking_pid"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"usename "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" blocking_user"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"query    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" blocked_statement"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"query   "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" current_statement_in_blocking_process\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pg_locks blocked_locks\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pg_stat_activity blocked_activity\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:"     blocked_activity"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pg_locks blocking_locks\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:"     blocking_locks"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"locktype "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"locktype\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"database"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"distinct"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"DATABASE"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"relation "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"relation\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"page "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"page\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"tuple "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"tuple\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"virtualxid "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"virtualxid\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"transactionid "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"transactionid\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"classid "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"classid\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"objid "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"objid\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"objsubid "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"objsubid\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"!="}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"pg_stat_activity blocking_activity\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:"     blocking_activity"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:" blocking_locks"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"WHERE"}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"granted"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:G,props:{id:ae},children:[{type:b,tag:s,props:{href:"#lock-%EC%A0%84%EC%B2%B4-%EB%AA%A9%EB%A1%9D-%EC%A1%B0%ED%9A%8C",ariaHidden:u,tabIndex:x},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:$}]},{type:a,value:i},{type:b,tag:A,props:{className:[J]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:" relation :: regclass"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" granted"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" pid"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"*"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" pg_locks"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:G,props:{id:_},children:[{type:b,tag:s,props:{href:"#lock-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%A1%B0%ED%9A%8C",ariaHidden:u,tabIndex:x},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:Z}]},{type:a,value:i},{type:b,tag:A,props:{className:[J]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:" t"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"relname"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"l"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"locktype"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"page"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"virtualtransaction"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"granted\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"from"}]},{type:a,value:" pg_locks l"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:" pg_stat_all_tables t\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"where"}]},{type:a,value:" l"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"relation"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:"t"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"relid "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"order"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"by"}]},{type:a,value:" relation "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"asc"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:G,props:{id:Y},children:[{type:b,tag:s,props:{href:"#lock-%EC%82%AD%EC%A0%9C",ariaHidden:u,tabIndex:x},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:X}]},{type:a,value:i},{type:b,tag:A,props:{className:[J]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:a,value:" pg_cancel_backend"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:"h1",props:{id:ad},children:[{type:b,tag:s,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:u,tabIndex:x},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:ad}]},{type:a,value:i},{type:b,tag:"ul",props:{},children:[{type:a,value:i},{type:b,tag:M,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Famericanopeople.tistory.com\u002F293",rel:[K,R,N],target:U},children:[{type:a,value:"복세편살"}]}]},{type:a,value:i},{type:b,tag:M,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Ffoco85.tistory.com\u002F288",rel:[K,R,N],target:U},children:[{type:a,value:"래채'sTory"}]}]},{type:a,value:i},{type:b,tag:M,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Fmedium.com\u002F29cm\u002Fdb-postgresql-lock-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-57d37ebe057",rel:[K,R,N],target:U},children:[{type:a,value:"chrisjune\r\n"}]}]},{type:a,value:i}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002FpostgreSQL-Lock 경합상태 확인",extension:".md",createdAt:"2021-01-03T13:24:41.543Z",updatedAt:"2021-01-10T17:27:57.416Z"},tags:{postgreSQL:{slug:L,name:L},"web development":{slug:"web_development",name:ah}},prev:{slug:"docker-Gitlab-Runner",title:"docker container Gitlab과 docker container Gitlab-runner 연동"},next:{slug:"postgreSQL-이중화-pgpool",title:"postgreSQL 이중화-pgpool"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","keyword",".","operator","\n"," ",",","FROM","NOT","    blocking_locks","AND","IS","   blocked_locks","DISTINCT","a","AS","true","icon","icon-link",-1," blocked_locks","=","div",2,"pre","language-sql","line-numbers","code","h2","   pg_catalog",";","nuxt-content-highlight","nofollow","postgreSQL","li","noreferrer","JOIN","ON","pid ","noopener","postgreSQL Lock 경합상태 확인","pid\n","_blank","\n       blocking_activity","SELECT","Lock 삭제","lock-삭제","Lock 테이블 조회","lock-테이블-조회","Lock 전체 목록 조회","\n       blocked_activity","select","pid","출처","lock-전체-목록-조회","block된 SQL 프로세스 조회","block된-sql-프로세스-조회","web development","mode")));