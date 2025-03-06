package org.example.kioback.controller;

import org.example.kioback.entity.Menu;
import org.example.kioback.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/menus/{storeId}")
    public List<Menu> getMenus(@PathVariable Long storeId) {
        List<Menu> menus = menuService.getMenusByStoreId(storeId);

        if (menus.isEmpty()) {
            System.out.println("No menus found for storeId: " + storeId);  // 빈 리스트일 경우 로그 출력
        }

        return menus;
    }
}
