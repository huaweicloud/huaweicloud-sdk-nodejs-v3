

export class KeystoneListEndpointsRequest {
    private 'interface'?: KeystoneListEndpointsRequestInterfaceEnum | undefined;
    private 'service_id'?: string | undefined;
    public constructor() { 
    }
    public withInterface(_interface: KeystoneListEndpointsRequestInterfaceEnum): KeystoneListEndpointsRequest {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: KeystoneListEndpointsRequestInterfaceEnum | undefined) {
        this['interface'] = _interface;
    }
    public get _interface() {
        return this['interface'];
    }
    public withServiceId(serviceId: string): KeystoneListEndpointsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
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
