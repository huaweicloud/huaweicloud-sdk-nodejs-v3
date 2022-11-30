

export class TollInvoiceRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): TollInvoiceRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): TollInvoiceRequestBody {
        this['url'] = url;
        return this;
    }
}