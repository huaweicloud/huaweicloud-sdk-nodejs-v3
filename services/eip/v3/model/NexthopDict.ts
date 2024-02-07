

export class NexthopDict {
    private 'ip_address'?: string;
    public mode?: NexthopDictModeEnum | string;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): NexthopDict {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withMode(mode: NexthopDictModeEnum | string): NexthopDict {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NexthopDictModeEnum {
    ACTIVE = 'ACTIVE',
    STANDBY = 'STANDBY'
}
