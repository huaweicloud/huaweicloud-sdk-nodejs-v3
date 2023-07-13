

export class MvsInvoiceRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean | undefined;
    private 'return_confidence'?: boolean | undefined;
    public type?: string;
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
    public withReturnTextLocation(returnTextLocation: boolean): MvsInvoiceRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
    public withReturnConfidence(returnConfidence: boolean): MvsInvoiceRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence() {
        return this['return_confidence'];
    }
    public withType(type: string): MvsInvoiceRequestBody {
        this['type'] = type;
        return this;
    }
}