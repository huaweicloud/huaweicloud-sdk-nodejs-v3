

export class VatInvoiceRequestBody {
    public image?: string;
    public url?: string;
    private 'advanced_mode'?: boolean;
    private 'return_text_location'?: boolean;
    private 'page_num'?: number;
    private 'ofd_to_image_mode'?: boolean;
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
    public set advancedMode(advancedMode: boolean  | undefined) {
        this['advanced_mode'] = advancedMode;
    }
    public get advancedMode(): boolean | undefined {
        return this['advanced_mode'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): VatInvoiceRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
    public withPageNum(pageNum: number): VatInvoiceRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withOfdToImageMode(ofdToImageMode: boolean): VatInvoiceRequestBody {
        this['ofd_to_image_mode'] = ofdToImageMode;
        return this;
    }
    public set ofdToImageMode(ofdToImageMode: boolean  | undefined) {
        this['ofd_to_image_mode'] = ofdToImageMode;
    }
    public get ofdToImageMode(): boolean | undefined {
        return this['ofd_to_image_mode'];
    }
}