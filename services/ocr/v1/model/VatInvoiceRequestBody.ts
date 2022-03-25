

export class VatInvoiceRequestBody {
    public image?: string;
    public url?: string;
    private 'advanced_mode'?: boolean | undefined;
    private 'return_text_location'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): VatInvoiceRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): VatInvoiceRequestBody {
        this['url'] = url;
        return this;
    }
    public withAdvancedMode(advancedMode: boolean): VatInvoiceRequestBody {
        this['advanced_mode'] = advancedMode;
        return this;
    }
    public set advancedMode(advancedMode: boolean | undefined) {
        this['advanced_mode'] = advancedMode;
    }
    public get advancedMode() {
        return this['advanced_mode'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): VatInvoiceRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
}