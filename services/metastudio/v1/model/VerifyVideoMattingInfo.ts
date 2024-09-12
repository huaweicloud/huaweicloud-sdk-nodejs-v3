

export class VerifyVideoMattingInfo {
    public dx?: number;
    public dy?: number;
    public width?: number;
    public height?: number;
    public method?: VerifyVideoMattingInfoMethodEnum | string;
    public constructor() { 
    }
    public withDx(dx: number): VerifyVideoMattingInfo {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): VerifyVideoMattingInfo {
        this['dy'] = dy;
        return this;
    }
    public withWidth(width: number): VerifyVideoMattingInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VerifyVideoMattingInfo {
        this['height'] = height;
        return this;
    }
    public withMethod(method: VerifyVideoMattingInfoMethodEnum | string): VerifyVideoMattingInfo {
        this['method'] = method;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VerifyVideoMattingInfoMethodEnum {
    RESERVED = 'RESERVED',
    DELETE = 'DELETE',
    NO_DEGREEN = 'NO_DEGREEN'
}
