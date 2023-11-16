

export class ListBridgeVersionsRequest {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ListBridgeVersionsRequest {
        this['type'] = type;
        return this;
    }
}