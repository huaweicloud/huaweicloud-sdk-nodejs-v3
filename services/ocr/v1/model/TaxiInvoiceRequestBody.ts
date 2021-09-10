

export class TaxiInvoiceRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): TaxiInvoiceRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): TaxiInvoiceRequestBody {
        this['url'] = url;
        return this;
    }
}