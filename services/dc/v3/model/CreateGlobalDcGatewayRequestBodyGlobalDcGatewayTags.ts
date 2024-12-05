

export class CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags {
        this['value'] = value;
        return this;
    }
}