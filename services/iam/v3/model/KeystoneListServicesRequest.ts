

export class KeystoneListServicesRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): KeystoneListServicesRequest {
        this['type'] = type;
        return this;
    }
}