

export class SrCreateInstanceRspInstanceEngine {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): SrCreateInstanceRspInstanceEngine {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): SrCreateInstanceRspInstanceEngine {
        this['version'] = version;
        return this;
    }
}