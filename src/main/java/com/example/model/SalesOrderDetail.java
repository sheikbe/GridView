package com.example.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "SalesOrderDetail")
public class SalesOrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int salesOrderDetailId;

    @ManyToOne
    @JoinColumn(name = "SalesOrderID", nullable = false)
    private SalesOrderHeader salesOrderHeader;

    @Column(name = "OrderQty", nullable = false)
    private short orderQty;

    @Column(name = "ProductID", nullable = false)
    private int productId;

    @Column(name = "UnitPrice", nullable = false)
    private BigDecimal unitPrice;

    @Column(name = "UnitPriceDiscount", nullable = false)
    private BigDecimal unitPriceDiscount;

    @Column(name = "LineTotal", nullable = false)
    private BigDecimal lineTotal;

    @Column(name = "rowguid", nullable = false)
    private UUID rowguid;

    @Column(name = "ModifiedDate", nullable = false)
    private java.sql.Timestamp modifiedDate;

    // Getters and Setters

    public int getSalesOrderDetailId() {
        return salesOrderDetailId;
    }

    public void setSalesOrderDetailId(int salesOrderDetailId) {
        this.salesOrderDetailId = salesOrderDetailId;
    }

    public SalesOrderHeader getSalesOrderHeader() {
        return salesOrderHeader;
    }

    public void setSalesOrderHeader(SalesOrderHeader salesOrderHeader) {
        this.salesOrderHeader = salesOrderHeader;
    }

    public short getOrderQty() {
        return orderQty;
    }

    public void setOrderQty(short orderQty) {
        this.orderQty = orderQty;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public BigDecimal getUnitPriceDiscount() {
        return unitPriceDiscount;
    }

    public void setUnitPriceDiscount(BigDecimal unitPriceDiscount) {
        this.unitPriceDiscount = unitPriceDiscount;
    }

    public BigDecimal getLineTotal() {
        return lineTotal;
    }

    public void setLineTotal(BigDecimal lineTotal) {
        this.lineTotal = lineTotal;
    }

    public UUID getRowguid() {
        return rowguid;
    }

    public void setRowguid(UUID rowguid) {
        this.rowguid = rowguid;
    }

    public java.sql.Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(java.sql.Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
}
