

export class UpdateAuthModeRequestBody {
    public mode?: UpdateAuthModeRequestBodyModeEnum | string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: UpdateAuthModeRequestBodyModeEnum | string): UpdateAuthModeRequestBody {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAuthModeRequestBodyModeEnum {
    STRICT = 'strict',
    LOOSE = 'loose'
}
