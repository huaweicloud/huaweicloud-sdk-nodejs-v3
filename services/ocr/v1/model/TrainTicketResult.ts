

export class TrainTicketResult {
    private 'ticket_id'?: string;
    private 'check_port'?: string;
    private 'train_number'?: string;
    private 'departure_station'?: string;
    private 'destination_station'?: string;
    private 'departure_station_en'?: string;
    private 'destination_station_en'?: string;
    private 'departure_time'?: string;
    private 'seat_number'?: string;
    private 'ticket_price'?: string;
    private 'sale_method'?: string;
    private 'seat_category'?: string;
    private 'ticket_changing'?: string;
    private 'id_number'?: string;
    public name?: string;
    private 'log_id'?: string;
    private 'sale_location'?: string;
    private 'invoice_style'?: string;
    private 'issue_date'?: string;
    private 'discount_mark'?: string;
    private 'serial_number'?: string;
    private 'tax_amount'?: string;
    private 'tax_rate'?: string;
    private 'air_conditioning'?: string;
    private 'original_invoice_number'?: string;
    private 'unified_social_credit_code'?: string;
    private 'buyer_name'?: string;
    private 'total_amount_excluding_tax'?: string;
    private 'invoice_number'?: string;
    private 'seal_mark'?: boolean;
    public title?: string;
    public area?: string;
    private 'receipt_number'?: string;
    private 'amount_in_figures'?: string;
    private 'amount_in_words'?: string;
    public confidence?: object;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withTicketId(ticketId: string): TrainTicketResult {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withCheckPort(checkPort: string): TrainTicketResult {
        this['check_port'] = checkPort;
        return this;
    }
    public set checkPort(checkPort: string  | undefined) {
        this['check_port'] = checkPort;
    }
    public get checkPort(): string | undefined {
        return this['check_port'];
    }
    public withTrainNumber(trainNumber: string): TrainTicketResult {
        this['train_number'] = trainNumber;
        return this;
    }
    public set trainNumber(trainNumber: string  | undefined) {
        this['train_number'] = trainNumber;
    }
    public get trainNumber(): string | undefined {
        return this['train_number'];
    }
    public withDepartureStation(departureStation: string): TrainTicketResult {
        this['departure_station'] = departureStation;
        return this;
    }
    public set departureStation(departureStation: string  | undefined) {
        this['departure_station'] = departureStation;
    }
    public get departureStation(): string | undefined {
        return this['departure_station'];
    }
    public withDestinationStation(destinationStation: string): TrainTicketResult {
        this['destination_station'] = destinationStation;
        return this;
    }
    public set destinationStation(destinationStation: string  | undefined) {
        this['destination_station'] = destinationStation;
    }
    public get destinationStation(): string | undefined {
        return this['destination_station'];
    }
    public withDepartureStationEn(departureStationEn: string): TrainTicketResult {
        this['departure_station_en'] = departureStationEn;
        return this;
    }
    public set departureStationEn(departureStationEn: string  | undefined) {
        this['departure_station_en'] = departureStationEn;
    }
    public get departureStationEn(): string | undefined {
        return this['departure_station_en'];
    }
    public withDestinationStationEn(destinationStationEn: string): TrainTicketResult {
        this['destination_station_en'] = destinationStationEn;
        return this;
    }
    public set destinationStationEn(destinationStationEn: string  | undefined) {
        this['destination_station_en'] = destinationStationEn;
    }
    public get destinationStationEn(): string | undefined {
        return this['destination_station_en'];
    }
    public withDepartureTime(departureTime: string): TrainTicketResult {
        this['departure_time'] = departureTime;
        return this;
    }
    public set departureTime(departureTime: string  | undefined) {
        this['departure_time'] = departureTime;
    }
    public get departureTime(): string | undefined {
        return this['departure_time'];
    }
    public withSeatNumber(seatNumber: string): TrainTicketResult {
        this['seat_number'] = seatNumber;
        return this;
    }
    public set seatNumber(seatNumber: string  | undefined) {
        this['seat_number'] = seatNumber;
    }
    public get seatNumber(): string | undefined {
        return this['seat_number'];
    }
    public withTicketPrice(ticketPrice: string): TrainTicketResult {
        this['ticket_price'] = ticketPrice;
        return this;
    }
    public set ticketPrice(ticketPrice: string  | undefined) {
        this['ticket_price'] = ticketPrice;
    }
    public get ticketPrice(): string | undefined {
        return this['ticket_price'];
    }
    public withSaleMethod(saleMethod: string): TrainTicketResult {
        this['sale_method'] = saleMethod;
        return this;
    }
    public set saleMethod(saleMethod: string  | undefined) {
        this['sale_method'] = saleMethod;
    }
    public get saleMethod(): string | undefined {
        return this['sale_method'];
    }
    public withSeatCategory(seatCategory: string): TrainTicketResult {
        this['seat_category'] = seatCategory;
        return this;
    }
    public set seatCategory(seatCategory: string  | undefined) {
        this['seat_category'] = seatCategory;
    }
    public get seatCategory(): string | undefined {
        return this['seat_category'];
    }
    public withTicketChanging(ticketChanging: string): TrainTicketResult {
        this['ticket_changing'] = ticketChanging;
        return this;
    }
    public set ticketChanging(ticketChanging: string  | undefined) {
        this['ticket_changing'] = ticketChanging;
    }
    public get ticketChanging(): string | undefined {
        return this['ticket_changing'];
    }
    public withIdNumber(idNumber: string): TrainTicketResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withName(name: string): TrainTicketResult {
        this['name'] = name;
        return this;
    }
    public withLogId(logId: string): TrainTicketResult {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSaleLocation(saleLocation: string): TrainTicketResult {
        this['sale_location'] = saleLocation;
        return this;
    }
    public set saleLocation(saleLocation: string  | undefined) {
        this['sale_location'] = saleLocation;
    }
    public get saleLocation(): string | undefined {
        return this['sale_location'];
    }
    public withInvoiceStyle(invoiceStyle: string): TrainTicketResult {
        this['invoice_style'] = invoiceStyle;
        return this;
    }
    public set invoiceStyle(invoiceStyle: string  | undefined) {
        this['invoice_style'] = invoiceStyle;
    }
    public get invoiceStyle(): string | undefined {
        return this['invoice_style'];
    }
    public withIssueDate(issueDate: string): TrainTicketResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withDiscountMark(discountMark: string): TrainTicketResult {
        this['discount_mark'] = discountMark;
        return this;
    }
    public set discountMark(discountMark: string  | undefined) {
        this['discount_mark'] = discountMark;
    }
    public get discountMark(): string | undefined {
        return this['discount_mark'];
    }
    public withSerialNumber(serialNumber: string): TrainTicketResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withTaxAmount(taxAmount: string): TrainTicketResult {
        this['tax_amount'] = taxAmount;
        return this;
    }
    public set taxAmount(taxAmount: string  | undefined) {
        this['tax_amount'] = taxAmount;
    }
    public get taxAmount(): string | undefined {
        return this['tax_amount'];
    }
    public withTaxRate(taxRate: string): TrainTicketResult {
        this['tax_rate'] = taxRate;
        return this;
    }
    public set taxRate(taxRate: string  | undefined) {
        this['tax_rate'] = taxRate;
    }
    public get taxRate(): string | undefined {
        return this['tax_rate'];
    }
    public withAirConditioning(airConditioning: string): TrainTicketResult {
        this['air_conditioning'] = airConditioning;
        return this;
    }
    public set airConditioning(airConditioning: string  | undefined) {
        this['air_conditioning'] = airConditioning;
    }
    public get airConditioning(): string | undefined {
        return this['air_conditioning'];
    }
    public withOriginalInvoiceNumber(originalInvoiceNumber: string): TrainTicketResult {
        this['original_invoice_number'] = originalInvoiceNumber;
        return this;
    }
    public set originalInvoiceNumber(originalInvoiceNumber: string  | undefined) {
        this['original_invoice_number'] = originalInvoiceNumber;
    }
    public get originalInvoiceNumber(): string | undefined {
        return this['original_invoice_number'];
    }
    public withUnifiedSocialCreditCode(unifiedSocialCreditCode: string): TrainTicketResult {
        this['unified_social_credit_code'] = unifiedSocialCreditCode;
        return this;
    }
    public set unifiedSocialCreditCode(unifiedSocialCreditCode: string  | undefined) {
        this['unified_social_credit_code'] = unifiedSocialCreditCode;
    }
    public get unifiedSocialCreditCode(): string | undefined {
        return this['unified_social_credit_code'];
    }
    public withBuyerName(buyerName: string): TrainTicketResult {
        this['buyer_name'] = buyerName;
        return this;
    }
    public set buyerName(buyerName: string  | undefined) {
        this['buyer_name'] = buyerName;
    }
    public get buyerName(): string | undefined {
        return this['buyer_name'];
    }
    public withTotalAmountExcludingTax(totalAmountExcludingTax: string): TrainTicketResult {
        this['total_amount_excluding_tax'] = totalAmountExcludingTax;
        return this;
    }
    public set totalAmountExcludingTax(totalAmountExcludingTax: string  | undefined) {
        this['total_amount_excluding_tax'] = totalAmountExcludingTax;
    }
    public get totalAmountExcludingTax(): string | undefined {
        return this['total_amount_excluding_tax'];
    }
    public withInvoiceNumber(invoiceNumber: string): TrainTicketResult {
        this['invoice_number'] = invoiceNumber;
        return this;
    }
    public set invoiceNumber(invoiceNumber: string  | undefined) {
        this['invoice_number'] = invoiceNumber;
    }
    public get invoiceNumber(): string | undefined {
        return this['invoice_number'];
    }
    public withSealMark(sealMark: boolean): TrainTicketResult {
        this['seal_mark'] = sealMark;
        return this;
    }
    public set sealMark(sealMark: boolean  | undefined) {
        this['seal_mark'] = sealMark;
    }
    public get sealMark(): boolean | undefined {
        return this['seal_mark'];
    }
    public withTitle(title: string): TrainTicketResult {
        this['title'] = title;
        return this;
    }
    public withArea(area: string): TrainTicketResult {
        this['area'] = area;
        return this;
    }
    public withReceiptNumber(receiptNumber: string): TrainTicketResult {
        this['receipt_number'] = receiptNumber;
        return this;
    }
    public set receiptNumber(receiptNumber: string  | undefined) {
        this['receipt_number'] = receiptNumber;
    }
    public get receiptNumber(): string | undefined {
        return this['receipt_number'];
    }
    public withAmountInFigures(amountInFigures: string): TrainTicketResult {
        this['amount_in_figures'] = amountInFigures;
        return this;
    }
    public set amountInFigures(amountInFigures: string  | undefined) {
        this['amount_in_figures'] = amountInFigures;
    }
    public get amountInFigures(): string | undefined {
        return this['amount_in_figures'];
    }
    public withAmountInWords(amountInWords: string): TrainTicketResult {
        this['amount_in_words'] = amountInWords;
        return this;
    }
    public set amountInWords(amountInWords: string  | undefined) {
        this['amount_in_words'] = amountInWords;
    }
    public get amountInWords(): string | undefined {
        return this['amount_in_words'];
    }
    public withConfidence(confidence: object): TrainTicketResult {
        this['confidence'] = confidence;
        return this;
    }
    public withTextLocation(textLocation: object): TrainTicketResult {
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