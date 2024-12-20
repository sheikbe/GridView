package com.example.controller;

import com.example.model.SalesOrderDetail;
import com.example.model.SalesOrderHeader;
import com.example.service.SalesOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class GridViewController {

    @Autowired
    private SalesOrderService salesOrderService;

    @GetMapping("/")
    public String viewHomePage(Model model) {
        List<SalesOrderHeader> listSalesOrderHeaders = salesOrderService.getAllSalesOrderHeaders();
        model.addAttribute("listSalesOrderHeaders", listSalesOrderHeaders);
        return "default";
    }

    @GetMapping("/editOrders")
    public String viewEditOrdersPage(Model model) {
        List<SalesOrderDetail> listSalesOrderDetails = salesOrderService.getAllSalesOrderDetails();
        model.addAttribute("listSalesOrderDetails", listSalesOrderDetails);
        return "editOrders";
    }

    @PostMapping("/saveOrder")
    public String saveOrder(@RequestParam("salesOrderId") int salesOrderId,
                            @RequestParam("orderQty") short orderQty,
                            @RequestParam("productId") int productId,
                            @RequestParam("unitPrice") double unitPrice) {
        SalesOrderDetail salesOrderDetail = new SalesOrderDetail();
        salesOrderDetail.setSalesOrderId(salesOrderId);
        salesOrderDetail.setOrderQty(orderQty);
        salesOrderDetail.setProductId(productId);
        salesOrderDetail.setUnitPrice(unitPrice);
        salesOrderService.saveSalesOrderDetail(salesOrderDetail);
        return "redirect:/editOrders";
    }

    @GetMapping("/rowCommand1")
    public String viewRowCommand1Page(Model model) {
        List<SalesOrderHeader> listSalesOrderHeaders = salesOrderService.getAllSalesOrderHeaders();
        model.addAttribute("listSalesOrderHeaders", listSalesOrderHeaders);
        return "rowCommand1";
    }

    @GetMapping("/rowCommand2")
    public String viewRowCommand2Page(Model model) {
        List<SalesOrderHeader> listSalesOrderHeaders = salesOrderService.getAllSalesOrderHeaders();
        model.addAttribute("listSalesOrderHeaders", listSalesOrderHeaders);
        return "rowCommand2";
    }

    @GetMapping("/rowDataBound")
    public String viewRowDataBoundPage(Model model) {
        List<SalesOrderHeader> listSalesOrderHeaders = salesOrderService.getAllSalesOrderHeaders();
        model.addAttribute("listSalesOrderHeaders", listSalesOrderHeaders);
        return "rowDataBound";
    }
}
