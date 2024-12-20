package com.example.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "SalesOrderHeader")
public class SalesOrderHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int salesOrderId;

    @Column(name = "RevisionNumber", nullable = false)
    private byte revisionNumber;

    @Column(name = "OrderDate", nullable = false)
    private Date orderDate;

    @Column(name = "DueDate", nullable = false)
    private Date dueDate;

    @Column(name = "ShipDate")
    private Date shipDate;

    @Column(name = "Status", nullable = false)
    private byte status;

    @Column(name = "OnlineOrderFlag", nullable = false)
    private boolean onlineOrderFlag;

    @Column(name = "SalesOrderNumber", nullable = false)
    private String salesOrderNumber;

    @Column(name = "PurchaseOrderNumber")
    private String purchaseOrderNumber;

    @Column(name = "AccountNumber")
    private String accountNumber;

    @Column(name = "CustomerID", nullable = false)
    private int customerId;

    @Column(name = "ShipToAddressID")
    private Integer shipToAddressId;

    @Column(name = "BillToAddressID")
    private Integer billToAddressId;

    @Column(name = "ShipMethod", nullable = false)
    private String shipMethod;

    @Column(name = "CreditCardApprovalCode")
    private String creditCardApprovalCode;

    @Column(name = "SubTotal", nullable = false)
    private BigDecimal subTotal;

    @Column(name = "TaxAmt", nullable = false)
    private BigDecimal taxAmt;

    @Column(name = "Freight", nullable = false)
    private BigDecimal freight;

    @Column(name = "TotalDue", nullable = false)
    private BigDecimal totalDue;

    @Column(name = "Comment")
    private String comment;

    @Column(name = "rowguid", nullable = false)
    private UUID rowguid;

    @Column(name = "ModifiedDate", nullable = false)
    private Date modifiedDate;

    // Getters and Setters

    public int getSalesOrderId() {
        return salesOrderId;
    }

    public void setSalesOrderId(int salesOrderId) {
        this.salesOrderId = salesOrderId;
    }

    public byte getRevisionNumber() {
        return revisionNumber;
    }

    public void setRevisionNumber(byte revisionNumber) {
        this.revisionNumber = revisionNumber;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getShipDate() {
        return shipDate;
    }

    public void setShipDate(Date shipDate) {
        this.shipDate = shipDate;
    }

    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
    }

    public boolean isOnlineOrderFlag() {
        return onlineOrderFlag;
    }

    public void setOnlineOrderFlag(boolean onlineOrderFlag) {
        this.onlineOrderFlag = onlineOrderFlag;
    }

    public String getSalesOrderNumber() {
        return salesOrderNumber;
    }

    public void setSalesOrderNumber(String salesOrderNumber) {
        this.salesOrderNumber = salesOrderNumber;
    }

    public String getPurchaseOrderNumber() {
        return purchaseOrderNumber;
    }

    public void setPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public Integer getShipToAddressId() {
        return shipToAddressId;
    }

    public void setShipToAddressId(Integer shipToAddressId) {
        this.shipToAddressId = shipToAddressId;
    }

    public Integer getBillToAddressId() {
        return billToAddressId;
    }

    public void setBillToAddressId(Integer billToAddressId) {
        this.billToAddressId = billToAddressId;
    }

    public String getShipMethod() {
        return shipMethod;
    }

    public void setShipMethod(String shipMethod) {
        this.shipMethod = shipMethod;
    }

    public String getCreditCardApprovalCode() {
        return creditCardApprovalCode;
    }

    public void setCreditCardApprovalCode(String creditCardApprovalCode) {
        this.creditCardApprovalCode = creditCardApprovalCode;
    }

    public BigDecimal getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(BigDecimal subTotal) {
        this.subTotal = subTotal;
    }

    public BigDecimal getTaxAmt() {
        return taxAmt;
    }

    public void setTaxAmt(BigDecimal taxAmt) {
        this.taxAmt = taxAmt;
    }

    public BigDecimal getFreight() {
        return freight;
    }

    public void setFreight(BigDecimal freight) {
        this.freight = freight;
    }

    public BigDecimal getTotalDue() {
        return totalDue;
    }

    public void setTotalDue(BigDecimal totalDue) {
        this.totalDue = totalDue;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public UUID getRowguid() {
        return rowguid;
    }

    public void setRowguid(UUID rowguid) {
        this.rowguid = rowguid;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
}
