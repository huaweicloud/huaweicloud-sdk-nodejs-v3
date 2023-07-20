

export class QuotaInvoiceResult {
    private 'number'?: string;
    public code?: string;
    public location?: string;
    public amount?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): QuotaInvoiceResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withCode(code: string): QuotaInvoiceResult {
        this['code'] = code;
        return this;
    }
    public withLocation(location: string): QuotaInvoiceResult {
        this['location'] = location;
        return this;
    }
    public withAmount(amount: string): QuotaInvoiceResult {
        this['amount'] = amount;
        return this;
    }
    public withConfidence(confidence: object): QuotaInvoiceResult {
        this['confidence'] = confidence;
        return this;
    }
}