

export class TollInvoiceResult {
    public code?: string;
    private 'number'?: string | undefined;
    public entry?: string;
    public exit?: string;
    public amount?: string;
    public cashier?: string;
    private 'vehicle_type'?: string | undefined;
    public date?: string;
    public time?: string;
    public confidence?: object;
    private 'text_location'?: object | undefined;
    public constructor() { 
    }
    public withCode(code: string): TollInvoiceResult {
        this['code'] = code;
        return this;
    }
    public withModelNumber(modelNumber: string): TollInvoiceResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withEntry(entry: string): TollInvoiceResult {
        this['entry'] = entry;
        return this;
    }
    public withExit(exit: string): TollInvoiceResult {
        this['exit'] = exit;
        return this;
    }
    public withAmount(amount: string): TollInvoiceResult {
        this['amount'] = amount;
        return this;
    }
    public withCashier(cashier: string): TollInvoiceResult {
        this['cashier'] = cashier;
        return this;
    }
    public withVehicleType(vehicleType: string): TollInvoiceResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType() {
        return this['vehicle_type'];
    }
    public withDate(date: string): TollInvoiceResult {
        this['date'] = date;
        return this;
    }
    public withTime(time: string): TollInvoiceResult {
        this['time'] = time;
        return this;
    }
    public withConfidence(confidence: object): TollInvoiceResult {
        this['confidence'] = confidence;
        return this;
    }
    public withTextLocation(textLocation: object): TollInvoiceResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation() {
        return this['text_location'];
    }
}