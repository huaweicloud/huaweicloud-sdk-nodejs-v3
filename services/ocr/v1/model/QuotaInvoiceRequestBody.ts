

export class QuotaInvoiceRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): QuotaInvoiceRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): QuotaInvoiceRequestBody {
        this['url'] = url;
        return this;
    }
}