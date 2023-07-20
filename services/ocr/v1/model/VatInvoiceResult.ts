import { ItemList } from './ItemList';


export class VatInvoiceResult {
    public title?: string;
    public type?: string;
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
    public confidence?: object;
    private 'text_location'?: object;
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
}