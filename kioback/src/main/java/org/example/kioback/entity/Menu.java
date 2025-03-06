package org.example.kioback.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String menu;
    private String description;
    private Double price;
    private String imagefile;
    private String menuName;

    @Column(name = "store_id")
    private Long storeId;
}
