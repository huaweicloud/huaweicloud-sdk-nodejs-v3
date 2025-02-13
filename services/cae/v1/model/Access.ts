

export class Access {
    public address?: string;
    public type?: AccessTypeEnum | string;
    public constructor() { 
    }
    public withAddress(address: string): Access {
        this['address'] = address;
        return this;
    }
    public withType(type: AccessTypeEnum | string): Access {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessTypeEnum {
    LOADBALANCER = 'LoadBalancer',
    INGRESS = 'Ingress'
}
