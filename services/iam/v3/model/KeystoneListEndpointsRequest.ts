

export class KeystoneListEndpointsRequest {
    private 'interface'?: KeystoneListEndpointsRequestInterfaceEnum | string;
    private 'service_id'?: string;
    public constructor() { 
    }
    public withInterface(_interface: KeystoneListEndpointsRequestInterfaceEnum | string): KeystoneListEndpointsRequest {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: KeystoneListEndpointsRequestInterfaceEnum | string  | undefined) {
        this['interface'] = _interface;
    }
    public get _interface(): KeystoneListEndpointsRequestInterfaceEnum | string | undefined {
        return this['interface'];
    }
    public withServiceId(serviceId: string): KeystoneListEndpointsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeystoneListEndpointsRequestInterfaceEnum {
    PUBLIC = 'public',
    INTERNAL = 'internal',
    ADMIN = 'admin'
}
