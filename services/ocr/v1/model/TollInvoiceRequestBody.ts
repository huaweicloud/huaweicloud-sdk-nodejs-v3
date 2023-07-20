

export class TollInvoiceRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean;
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
    public withReturnTextLocation(returnTextLocation: boolean): TollInvoiceRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
}