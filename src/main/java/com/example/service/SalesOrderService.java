package com.example.service;

import com.example.model.SalesOrderDetail;
import com.example.model.SalesOrderHeader;
import com.example.repository.SalesOrderDetailRepository;
import com.example.repository.SalesOrderHeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesOrderService {

    @Autowired
    private SalesOrderDetailRepository salesOrderDetailRepository;

    @Autowired
    private SalesOrderHeaderRepository salesOrderHeaderRepository;

    public List<SalesOrderHeader> getAllSalesOrderHeaders() {
        return salesOrderHeaderRepository.findAll();
    }

    public List<SalesOrderDetail> getAllSalesOrderDetails() {
        return salesOrderDetailRepository.findAll();
    }

    public void saveSalesOrderDetail(SalesOrderDetail salesOrderDetail) {
        salesOrderDetailRepository.save(salesOrderDetail);
    }
}
