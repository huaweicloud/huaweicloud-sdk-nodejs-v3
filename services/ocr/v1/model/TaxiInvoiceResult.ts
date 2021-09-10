

export class TaxiInvoiceResult {
    public location?: string;
    public code?: string;
    private 'number'?: string | undefined;
    private 'phone_number'?: string | undefined;
    public company?: string;
    private 'taxi_number'?: string | undefined;
    private 'certificate_number'?: string | undefined;
    private 'identification_number'?: string | undefined;
    public date?: string;
    private 'boarding_time'?: string | undefined;
    private 'alighting_time'?: string | undefined;
    public time?: string;
    private 'unit_price'?: string | undefined;
    public distance?: string;
    private 'waiting_time'?: string | undefined;
    public fare?: string;
    private 'fuel_oil_surcharge'?: string | undefined;
    private 'call_service_surcharge'?: string | undefined;
    public total?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withLocation(location: string): TaxiInvoiceResult {
        this['location'] = location;
        return this;
    }
    public withCode(code: string): TaxiInvoiceResult {
        this['code'] = code;
        return this;
    }
    public withModelNumber(modelNumber: string): TaxiInvoiceResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withPhoneNumber(phoneNumber: string): TaxiInvoiceResult {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber() {
        return this['phone_number'];
    }
    public withCompany(company: string): TaxiInvoiceResult {
        this['company'] = company;
        return this;
    }
    public withTaxiNumber(taxiNumber: string): TaxiInvoiceResult {
        this['taxi_number'] = taxiNumber;
        return this;
    }
    public set taxiNumber(taxiNumber: string | undefined) {
        this['taxi_number'] = taxiNumber;
    }
    public get taxiNumber() {
        return this['taxi_number'];
    }
    public withCertificateNumber(certificateNumber: string): TaxiInvoiceResult {
        this['certificate_number'] = certificateNumber;
        return this;
    }
    public set certificateNumber(certificateNumber: string | undefined) {
        this['certificate_number'] = certificateNumber;
    }
    public get certificateNumber() {
        return this['certificate_number'];
    }
    public withIdentificationNumber(identificationNumber: string): TaxiInvoiceResult {
        this['identification_number'] = identificationNumber;
        return this;
    }
    public set identificationNumber(identificationNumber: string | undefined) {
        this['identification_number'] = identificationNumber;
    }
    public get identificationNumber() {
        return this['identification_number'];
    }
    public withDate(date: string): TaxiInvoiceResult {
        this['date'] = date;
        return this;
    }
    public withBoardingTime(boardingTime: string): TaxiInvoiceResult {
        this['boarding_time'] = boardingTime;
        return this;
    }
    public set boardingTime(boardingTime: string | undefined) {
        this['boarding_time'] = boardingTime;
    }
    public get boardingTime() {
        return this['boarding_time'];
    }
    public withAlightingTime(alightingTime: string): TaxiInvoiceResult {
        this['alighting_time'] = alightingTime;
        return this;
    }
    public set alightingTime(alightingTime: string | undefined) {
        this['alighting_time'] = alightingTime;
    }
    public get alightingTime() {
        return this['alighting_time'];
    }
    public withTime(time: string): TaxiInvoiceResult {
        this['time'] = time;
        return this;
    }
    public withUnitPrice(unitPrice: string): TaxiInvoiceResult {
        this['unit_price'] = unitPrice;
        return this;
    }
    public set unitPrice(unitPrice: string | undefined) {
        this['unit_price'] = unitPrice;
    }
    public get unitPrice() {
        return this['unit_price'];
    }
    public withDistance(distance: string): TaxiInvoiceResult {
        this['distance'] = distance;
        return this;
    }
    public withWaitingTime(waitingTime: string): TaxiInvoiceResult {
        this['waiting_time'] = waitingTime;
        return this;
    }
    public set waitingTime(waitingTime: string | undefined) {
        this['waiting_time'] = waitingTime;
    }
    public get waitingTime() {
        return this['waiting_time'];
    }
    public withFare(fare: string): TaxiInvoiceResult {
        this['fare'] = fare;
        return this;
    }
    public withFuelOilSurcharge(fuelOilSurcharge: string): TaxiInvoiceResult {
        this['fuel_oil_surcharge'] = fuelOilSurcharge;
        return this;
    }
    public set fuelOilSurcharge(fuelOilSurcharge: string | undefined) {
        this['fuel_oil_surcharge'] = fuelOilSurcharge;
    }
    public get fuelOilSurcharge() {
        return this['fuel_oil_surcharge'];
    }
    public withCallServiceSurcharge(callServiceSurcharge: string): TaxiInvoiceResult {
        this['call_service_surcharge'] = callServiceSurcharge;
        return this;
    }
    public set callServiceSurcharge(callServiceSurcharge: string | undefined) {
        this['call_service_surcharge'] = callServiceSurcharge;
    }
    public get callServiceSurcharge() {
        return this['call_service_surcharge'];
    }
    public withTotal(total: string): TaxiInvoiceResult {
        this['total'] = total;
        return this;
    }
    public withConfidence(confidence: object): TaxiInvoiceResult {
        this['confidence'] = confidence;
        return this;
    }
}