

export class MvsInvoiceRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): MvsInvoiceRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): MvsInvoiceRequestBody {
        this['url'] = url;
        return this;
    }
}