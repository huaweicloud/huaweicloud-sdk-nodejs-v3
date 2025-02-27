import { BelongItemList } from './BelongItemList';
import { ItemList } from './ItemList';
import { PassengerTravelItemList } from './PassengerTravelItemList';


export class VatInvoiceResult {
    public title?: string;
    public type?: string;
    private 'invoice_tag'?: string;
    private 'sum_amount'?: string;
    private 'sum_tax'?: string;
    private 'serial_number'?: string;
    public attribution?: string;
    private 'supervision_seal'?: Array<string>;
    public code?: string;
    private 'print_code'?: string;
    private 'machine_number'?: string;
    private 'print_number'?: string;
    private 'check_code'?: string;
    private 'number'?: string;
    private 'issue_date'?: string;
    private 'encryption_block'?: string;
    private 'buyer_name'?: string;
    private 'buyer_id'?: string;
    private 'buyer_address'?: string;
    private 'buyer_bank'?: string;
    private 'seller_name'?: string;
    private 'seller_id'?: string;
    private 'seller_address'?: string;
    private 'seller_bank'?: string;
    private 'subtotal_amount'?: string;
    private 'subtotal_tax'?: string;
    public total?: string;
    private 'total_in_words'?: string;
    public remarks?: string;
    public receiver?: string;
    public reviewer?: string;
    public issuer?: string;
    private 'seller_seal'?: Array<string>;
    private 'item_list'?: Array<ItemList>;
    public province?: string;
    public city?: string;
    public confidence?: object;
    private 'text_location'?: object;
    private 'belong_buyer_name'?: string;
    private 'belong_seller_name'?: string;
    private 'belong_vat_code'?: string;
    private 'belong_number'?: string;
    private 'belong_pages'?: string;
    private 'belong_current_page'?: string;
    private 'belong_remarks'?: string;
    private 'belong_issue_date'?: string;
    private 'sales_mark'?: boolean;
    private 'belong_sum_amount'?: string;
    private 'belong_sum_tax'?: string;
    private 'belong_subtotal_amount'?: string;
    private 'belong_subtotal_tax'?: string;
    private 'belong_discount_amount'?: string;
    private 'belong_discount_tax'?: string;
    private 'belong_item_list'?: Array<BelongItemList>;
    private 'passenger_travel_item_list'?: Array<PassengerTravelItemList>;
    public constructor() { 
    }
    public withTitle(title: string): VatInvoiceResult {
        this['title'] = title;
        return this;
    }
    public withType(type: string): VatInvoiceResult {
        this['type'] = type;
        return this;
    }
    public withInvoiceTag(invoiceTag: string): VatInvoiceResult {
        this['invoice_tag'] = invoiceTag;
        return this;
    }
    public set invoiceTag(invoiceTag: string  | undefined) {
        this['invoice_tag'] = invoiceTag;
    }
    public get invoiceTag(): string | undefined {
        return this['invoice_tag'];
    }
    public withSumAmount(sumAmount: string): VatInvoiceResult {
        this['sum_amount'] = sumAmount;
        return this;
    }
    public set sumAmount(sumAmount: string  | undefined) {
        this['sum_amount'] = sumAmount;
    }
    public get sumAmount(): string | undefined {
        return this['sum_amount'];
    }
    public withSumTax(sumTax: string): VatInvoiceResult {
        this['sum_tax'] = sumTax;
        return this;
    }
    public set sumTax(sumTax: string  | undefined) {
        this['sum_tax'] = sumTax;
    }
    public get sumTax(): string | undefined {
        return this['sum_tax'];
    }
    public withSerialNumber(serialNumber: string): VatInvoiceResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withAttribution(attribution: string): VatInvoiceResult {
        this['attribution'] = attribution;
        return this;
    }
    public withSupervisionSeal(supervisionSeal: Array<string>): VatInvoiceResult {
        this['supervision_seal'] = supervisionSeal;
        return this;
    }
    public set supervisionSeal(supervisionSeal: Array<string>  | undefined) {
        this['supervision_seal'] = supervisionSeal;
    }
    public get supervisionSeal(): Array<string> | undefined {
        return this['supervision_seal'];
    }
    public withCode(code: string): VatInvoiceResult {
        this['code'] = code;
        return this;
    }
    public withPrintCode(printCode: string): VatInvoiceResult {
        this['print_code'] = printCode;
        return this;
    }
    public set printCode(printCode: string  | undefined) {
        this['print_code'] = printCode;
    }
    public get printCode(): string | undefined {
        return this['print_code'];
    }
    public withMachineNumber(machineNumber: string): VatInvoiceResult {
        this['machine_number'] = machineNumber;
        return this;
    }
    public set machineNumber(machineNumber: string  | undefined) {
        this['machine_number'] = machineNumber;
    }
    public get machineNumber(): string | undefined {
        return this['machine_number'];
    }
    public withPrintNumber(printNumber: string): VatInvoiceResult {
        this['print_number'] = printNumber;
        return this;
    }
    public set printNumber(printNumber: string  | undefined) {
        this['print_number'] = printNumber;
    }
    public get printNumber(): string | undefined {
        return this['print_number'];
    }
    public withCheckCode(checkCode: string): VatInvoiceResult {
        this['check_code'] = checkCode;
        return this;
    }
    public set checkCode(checkCode: string  | undefined) {
        this['check_code'] = checkCode;
    }
    public get checkCode(): string | undefined {
        return this['check_code'];
    }
    public withModelNumber(modelNumber: string): VatInvoiceResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssueDate(issueDate: string): VatInvoiceResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withEncryptionBlock(encryptionBlock: string): VatInvoiceResult {
        this['encryption_block'] = encryptionBlock;
        return this;
    }
    public set encryptionBlock(encryptionBlock: string  | undefined) {
        this['encryption_block'] = encryptionBlock;
    }
    public get encryptionBlock(): string | undefined {
        return this['encryption_block'];
    }
    public withBuyerName(buyerName: string): VatInvoiceResult {
        this['buyer_name'] = buyerName;
        return this;
    }
    public set buyerName(buyerName: string  | undefined) {
        this['buyer_name'] = buyerName;
    }
    public get buyerName(): string | undefined {
        return this['buyer_name'];
    }
    public withBuyerId(buyerId: string): VatInvoiceResult {
        this['buyer_id'] = buyerId;
        return this;
    }
    public set buyerId(buyerId: string  | undefined) {
        this['buyer_id'] = buyerId;
    }
    public get buyerId(): string | undefined {
        return this['buyer_id'];
    }
    public withBuyerAddress(buyerAddress: string): VatInvoiceResult {
        this['buyer_address'] = buyerAddress;
        return this;
    }
    public set buyerAddress(buyerAddress: string  | undefined) {
        this['buyer_address'] = buyerAddress;
    }
    public get buyerAddress(): string | undefined {
        return this['buyer_address'];
    }
    public withBuyerBank(buyerBank: string): VatInvoiceResult {
        this['buyer_bank'] = buyerBank;
        return this;
    }
    public set buyerBank(buyerBank: string  | undefined) {
        this['buyer_bank'] = buyerBank;
    }
    public get buyerBank(): string | undefined {
        return this['buyer_bank'];
    }
    public withSellerName(sellerName: string): VatInvoiceResult {
        this['seller_name'] = sellerName;
        return this;
    }
    public set sellerName(sellerName: string  | undefined) {
        this['seller_name'] = sellerName;
    }
    public get sellerName(): string | undefined {
        return this['seller_name'];
    }
    public withSellerId(sellerId: string): VatInvoiceResult {
        this['seller_id'] = sellerId;
        return this;
    }
    public set sellerId(sellerId: string  | undefined) {
        this['seller_id'] = sellerId;
    }
    public get sellerId(): string | undefined {
        return this['seller_id'];
    }
    public withSellerAddress(sellerAddress: string): VatInvoiceResult {
        this['seller_address'] = sellerAddress;
        return this;
    }
    public set sellerAddress(sellerAddress: string  | undefined) {
        this['seller_address'] = sellerAddress;
    }
    public get sellerAddress(): string | undefined {
        return this['seller_address'];
    }
    public withSellerBank(sellerBank: string): VatInvoiceResult {
        this['seller_bank'] = sellerBank;
        return this;
    }
    public set sellerBank(sellerBank: string  | undefined) {
        this['seller_bank'] = sellerBank;
    }
    public get sellerBank(): string | undefined {
        return this['seller_bank'];
    }
    public withSubtotalAmount(subtotalAmount: string): VatInvoiceResult {
        this['subtotal_amount'] = subtotalAmount;
        return this;
    }
    public set subtotalAmount(subtotalAmount: string  | undefined) {
        this['subtotal_amount'] = subtotalAmount;
    }
    public get subtotalAmount(): string | undefined {
        return this['subtotal_amount'];
    }
    public withSubtotalTax(subtotalTax: string): VatInvoiceResult {
        this['subtotal_tax'] = subtotalTax;
        return this;
    }
    public set subtotalTax(subtotalTax: string  | undefined) {
        this['subtotal_tax'] = subtotalTax;
    }
    public get subtotalTax(): string | undefined {
        return this['subtotal_tax'];
    }
    public withTotal(total: string): VatInvoiceResult {
        this['total'] = total;
        return this;
    }
    public withTotalInWords(totalInWords: string): VatInvoiceResult {
        this['total_in_words'] = totalInWords;
        return this;
    }
    public set totalInWords(totalInWords: string  | undefined) {
        this['total_in_words'] = totalInWords;
    }
    public get totalInWords(): string | undefined {
        return this['total_in_words'];
    }
    public withRemarks(remarks: string): VatInvoiceResult {
        this['remarks'] = remarks;
        return this;
    }
    public withReceiver(receiver: string): VatInvoiceResult {
        this['receiver'] = receiver;
        return this;
    }
    public withReviewer(reviewer: string): VatInvoiceResult {
        this['reviewer'] = reviewer;
        return this;
    }
    public withIssuer(issuer: string): VatInvoiceResult {
        this['issuer'] = issuer;
        return this;
    }
    public withSellerSeal(sellerSeal: Array<string>): VatInvoiceResult {
        this['seller_seal'] = sellerSeal;
        return this;
    }
    public set sellerSeal(sellerSeal: Array<string>  | undefined) {
        this['seller_seal'] = sellerSeal;
    }
    public get sellerSeal(): Array<string> | undefined {
        return this['seller_seal'];
    }
    public withItemList(itemList: Array<ItemList>): VatInvoiceResult {
        this['item_list'] = itemList;
        return this;
    }
    public set itemList(itemList: Array<ItemList>  | undefined) {
        this['item_list'] = itemList;
    }
    public get itemList(): Array<ItemList> | undefined {
        return this['item_list'];
    }
    public withProvince(province: string): VatInvoiceResult {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): VatInvoiceResult {
        this['city'] = city;
        return this;
    }
    public withConfidence(confidence: object): VatInvoiceResult {
        this['confidence'] = confidence;
        return this;
    }
    public withTextLocation(textLocation: object): VatInvoiceResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withBelongBuyerName(belongBuyerName: string): VatInvoiceResult {
        this['belong_buyer_name'] = belongBuyerName;
        return this;
    }
    public set belongBuyerName(belongBuyerName: string  | undefined) {
        this['belong_buyer_name'] = belongBuyerName;
    }
    public get belongBuyerName(): string | undefined {
        return this['belong_buyer_name'];
    }
    public withBelongSellerName(belongSellerName: string): VatInvoiceResult {
        this['belong_seller_name'] = belongSellerName;
        return this;
    }
    public set belongSellerName(belongSellerName: string  | undefined) {
        this['belong_seller_name'] = belongSellerName;
    }
    public get belongSellerName(): string | undefined {
        return this['belong_seller_name'];
    }
    public withBelongVatCode(belongVatCode: string): VatInvoiceResult {
        this['belong_vat_code'] = belongVatCode;
        return this;
    }
    public set belongVatCode(belongVatCode: string  | undefined) {
        this['belong_vat_code'] = belongVatCode;
    }
    public get belongVatCode(): string | undefined {
        return this['belong_vat_code'];
    }
    public withBelongNumber(belongNumber: string): VatInvoiceResult {
        this['belong_number'] = belongNumber;
        return this;
    }
    public set belongNumber(belongNumber: string  | undefined) {
        this['belong_number'] = belongNumber;
    }
    public get belongNumber(): string | undefined {
        return this['belong_number'];
    }
    public withBelongPages(belongPages: string): VatInvoiceResult {
        this['belong_pages'] = belongPages;
        return this;
    }
    public set belongPages(belongPages: string  | undefined) {
        this['belong_pages'] = belongPages;
    }
    public get belongPages(): string | undefined {
        return this['belong_pages'];
    }
    public withBelongCurrentPage(belongCurrentPage: string): VatInvoiceResult {
        this['belong_current_page'] = belongCurrentPage;
        return this;
    }
    public set belongCurrentPage(belongCurrentPage: string  | undefined) {
        this['belong_current_page'] = belongCurrentPage;
    }
    public get belongCurrentPage(): string | undefined {
        return this['belong_current_page'];
    }
    public withBelongRemarks(belongRemarks: string): VatInvoiceResult {
        this['belong_remarks'] = belongRemarks;
        return this;
    }
    public set belongRemarks(belongRemarks: string  | undefined) {
        this['belong_remarks'] = belongRemarks;
    }
    public get belongRemarks(): string | undefined {
        return this['belong_remarks'];
    }
    public withBelongIssueDate(belongIssueDate: string): VatInvoiceResult {
        this['belong_issue_date'] = belongIssueDate;
        return this;
    }
    public set belongIssueDate(belongIssueDate: string  | undefined) {
        this['belong_issue_date'] = belongIssueDate;
    }
    public get belongIssueDate(): string | undefined {
        return this['belong_issue_date'];
    }
    public withSalesMark(salesMark: boolean): VatInvoiceResult {
        this['sales_mark'] = salesMark;
        return this;
    }
    public set salesMark(salesMark: boolean  | undefined) {
        this['sales_mark'] = salesMark;
    }
    public get salesMark(): boolean | undefined {
        return this['sales_mark'];
    }
    public withBelongSumAmount(belongSumAmount: string): VatInvoiceResult {
        this['belong_sum_amount'] = belongSumAmount;
        return this;
    }
    public set belongSumAmount(belongSumAmount: string  | undefined) {
        this['belong_sum_amount'] = belongSumAmount;
    }
    public get belongSumAmount(): string | undefined {
        return this['belong_sum_amount'];
    }
    public withBelongSumTax(belongSumTax: string): VatInvoiceResult {
        this['belong_sum_tax'] = belongSumTax;
        return this;
    }
    public set belongSumTax(belongSumTax: string  | undefined) {
        this['belong_sum_tax'] = belongSumTax;
    }
    public get belongSumTax(): string | undefined {
        return this['belong_sum_tax'];
    }
    public withBelongSubtotalAmount(belongSubtotalAmount: string): VatInvoiceResult {
        this['belong_subtotal_amount'] = belongSubtotalAmount;
        return this;
    }
    public set belongSubtotalAmount(belongSubtotalAmount: string  | undefined) {
        this['belong_subtotal_amount'] = belongSubtotalAmount;
    }
    public get belongSubtotalAmount(): string | undefined {
        return this['belong_subtotal_amount'];
    }
    public withBelongSubtotalTax(belongSubtotalTax: string): VatInvoiceResult {
        this['belong_subtotal_tax'] = belongSubtotalTax;
        return this;
    }
    public set belongSubtotalTax(belongSubtotalTax: string  | undefined) {
        this['belong_subtotal_tax'] = belongSubtotalTax;
    }
    public get belongSubtotalTax(): string | undefined {
        return this['belong_subtotal_tax'];
    }
    public withBelongDiscountAmount(belongDiscountAmount: string): VatInvoiceResult {
        this['belong_discount_amount'] = belongDiscountAmount;
        return this;
    }
    public set belongDiscountAmount(belongDiscountAmount: string  | undefined) {
        this['belong_discount_amount'] = belongDiscountAmount;
    }
    public get belongDiscountAmount(): string | undefined {
        return this['belong_discount_amount'];
    }
    public withBelongDiscountTax(belongDiscountTax: string): VatInvoiceResult {
        this['belong_discount_tax'] = belongDiscountTax;
        return this;
    }
    public set belongDiscountTax(belongDiscountTax: string  | undefined) {
        this['belong_discount_tax'] = belongDiscountTax;
    }
    public get belongDiscountTax(): string | undefined {
        return this['belong_discount_tax'];
    }
    public withBelongItemList(belongItemList: Array<BelongItemList>): VatInvoiceResult {
        this['belong_item_list'] = belongItemList;
        return this;
    }
    public set belongItemList(belongItemList: Array<BelongItemList>  | undefined) {
        this['belong_item_list'] = belongItemList;
    }
    public get belongItemList(): Array<BelongItemList> | undefined {
        return this['belong_item_list'];
    }
    public withPassengerTravelItemList(passengerTravelItemList: Array<PassengerTravelItemList>): VatInvoiceResult {
        this['passenger_travel_item_list'] = passengerTravelItemList;
        return this;
    }
    public set passengerTravelItemList(passengerTravelItemList: Array<PassengerTravelItemList>  | undefined) {
        this['passenger_travel_item_list'] = passengerTravelItemList;
    }
    public get passengerTravelItemList(): Array<PassengerTravelItemList> | undefined {
        return this['passenger_travel_item_list'];
    }
}