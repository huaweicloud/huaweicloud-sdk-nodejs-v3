

export class ImageWisedesignColorfilterResponseResult {
    private 'result_base64'?: string | undefined;
    public constructor() { 
    }
    public withResultBase64(resultBase64: string): ImageWisedesignColorfilterResponseResult {
        this['result_base64'] = resultBase64;
        return this;
    }
    public set resultBase64(resultBase64: string | undefined) {
        this['result_base64'] = resultBase64;
    }
    public get resultBase64() {
        return this['result_base64'];
    }
}