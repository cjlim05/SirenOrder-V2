<<<<<<< HEAD
package org.example.kioback.entity; // 패키지 선언
=======
package org.example.kioback.entity; // 패키지 선언 추가
>>>>>>> 6a8db427 (first commit)

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
<<<<<<< HEAD
@Table(name = "users") // 테이블 이름 매핑
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT 매핑
    @Column(name = "user_id")
    private Long userId; // 사용자 고유 ID

    private String email; // 이메일

    @Column(name = "phone_number")
    private String phoneNumber; // 전화번호

    private String username; // 사용자 이름

    private String password; // 비밀번호


}


=======
@Table(name = "user")
public class User {

    @Id

    @Column(name = "tableNumber")
    private String tableNumber; // 테이블 번호
    @Column(name = "password")
    private String password;    // 비밀번호
}

>>>>>>> 6a8db427 (first commit)
// entity는 디비 테이블과 ""매핑"", 데이터베이스 테이블 구조를 자바객체로 변환하는 역할
