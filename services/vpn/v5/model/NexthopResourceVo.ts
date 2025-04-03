

export class NexthopResourceVo {
    public id?: string;
    public type?: NexthopResourceVoTypeEnum | string;
    public constructor() { 
    }
    public withId(id: string): NexthopResourceVo {
        this['id'] = id;
        return this;
    }
    public withType(type: NexthopResourceVoTypeEnum | string): NexthopResourceVo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NexthopResourceVoTypeEnum {
    VPN_CONNECTION = 'vpn_connection',
    VPN_GATEWAY = 'vpn_gateway',
    ER = 'er'
}
