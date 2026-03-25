/*
	DML ( Data Manipulation Languafe )
    - 테이블에 저장된 데이터를 다루는 언어
	- INSERT(추가), SELECT(조회), UPDATE(수정), DELETE(삭제)
*/
-- INSERT : 테이블에 새로운 행을 추가 | INSERT INTO 테이블명 VALUES(값, 값, ...);
INSERT INTO users VALUES('1', 'user01', 'user01@google.com', '1234');

-- 에러 : 컬럼 수가 맞지 않아서 | 테이블명(컬럼명, 컬럼명, ...) 기재
INSERT INTO users(name, email, password)
VALUES('user01', 'user02@google.com', '1234');

-- 컬렴명 순서는 상관없음 (컬럼명 순서 == 값 순서)
INSERT INTO users(email, password, name)
VALUES('user03@google.com', '1234', 'user01');

-- 레시피 한 개 추가
-- user_id : 1, name : 모히또, image : 모히또.jpg, description : 상큼하고, 청량한 쿠바식 칵테일
INSERT INTO recipes(user_id, name, image, description)
VALUES('1', '모히또', '모히또.jpg', '상큼하고, 청량한 쿠바식 칵테일');

SELECT * FROM recipes;

-- 레시피 name이 모히또인 레코드 1개 조회
SELECT * FROM recipes WHERE name = '모히또';


-- SELECT : 테이블에 저장된 데이터 조회
/*
	SELECT 컬럼명, 컬럼명, ...
    FORM 테이블명;
    WHERE 조건;
*/
-- * : 전체 컬럼명 조회
SELECT * FROM users;

-- 필요한 컬럼명만 조회
SELECT email, password FROM users;

-- 이름이 'user01'인 사람들의 name, email을 조회
SELECT name, email FROM users WHERE name = 'user01';

-- id가 1인 사람의 email, password 조희
SELECT email, password FROM users WHERE id = 1;

-- UPDATE : 테이블에 저장된 데이터를 수정
/*
	UPDATE 테이블명
    SET 컬럼명 = 변경값
    WHERE 조건; < 얘 안 넣으면 전부 수정 당함
*/
-- users 테이블에서 id가 3인 사람의 password를 pass01로 변경
UPDATE users SET password = 'pass01' WHERE id = 3;

-- recipes 테이블에서 name이 모히또인 레시피를
-- name : 네그로니, description : 진의 드라이함, 스위트 베르무트..로 수정

UPDATE recipes SET name = '네그로니', image = '네그로니.jpg', description = '진의 드라이함, 스위트 베르무트..' WHERE name = '모히또';

SELECT * FROM recipes;

-- DELETE : 테이블에 저장된 데이터를 삭제
/*
	DELETE FROM 테이블명
    WHERE 조건;
*/
-- recipies 테이블에서 name이 네그로니인 데이터 삭제
DELETE FROM recipes WHERE name = '네그로니';

-- users 테이블에 있는 데이터 전부 삭제
DELETE FROM users; -- 조건이 없으면 해당 테이블에 있는 모든 데이터 삭제
TRUNCATE TABLE users; -- 전체 데이터를 한 번에 삭제 (초기화, FK 걸려있을 경우 실행 X)

SELECT * FROM users;