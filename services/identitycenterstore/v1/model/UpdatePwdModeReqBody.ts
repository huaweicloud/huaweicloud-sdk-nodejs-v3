

export class UpdatePwdModeReqBody {
    public mode?: UpdatePwdModeReqBodyModeEnum | string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: UpdatePwdModeReqBodyModeEnum | string): UpdatePwdModeReqBody {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePwdModeReqBodyModeEnum {
    OTP = 'OTP',
    EMAIL = 'EMAIL'
}
