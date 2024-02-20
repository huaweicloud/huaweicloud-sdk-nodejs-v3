

export class PreviewStatusReason {
    public code?: PreviewStatusReasonCodeEnum | string;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withCode(code: PreviewStatusReasonCodeEnum | string): PreviewStatusReason {
        this['code'] = code;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreviewStatusReasonCodeEnum {
    INTERNAL_ERROR = 'internal_error',
    INVALID_CONFIGURATION = 'invalid_configuration'
}
