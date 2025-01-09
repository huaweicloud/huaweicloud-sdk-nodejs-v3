

export class AccessConfigReq {
    private 'access_mode'?: AccessConfigReqAccessModeEnum | string;
    private 'dedicated_cidrs'?: string;
    public constructor(accessMode?: string) { 
        this['access_mode'] = accessMode;
    }
    public withAccessMode(accessMode: AccessConfigReqAccessModeEnum | string): AccessConfigReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: AccessConfigReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): AccessConfigReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withDedicatedCidrs(dedicatedCidrs: string): AccessConfigReq {
        this['dedicated_cidrs'] = dedicatedCidrs;
        return this;
    }
    public set dedicatedCidrs(dedicatedCidrs: string  | undefined) {
        this['dedicated_cidrs'] = dedicatedCidrs;
    }
    public get dedicatedCidrs(): string | undefined {
        return this['dedicated_cidrs'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
