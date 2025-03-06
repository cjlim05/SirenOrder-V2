package org.example.kioback.service;

import org.example.kioback.entity.Menu;
import org.example.kioback.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    // 모든 메뉴를 가져오는 메서드로 변경
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    public List<Menu> getMenusByStoreId(Long storeId) {
        System.out.println("Fetching menus for storeId: " + storeId);
        return menuRepository.findByStoreId(storeId);  // storeId에 맞는 메뉴를 반환
    }
}
