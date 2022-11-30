

export class InstanceReplicationDimensionsInfo {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): InstanceReplicationDimensionsInfo {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): InstanceReplicationDimensionsInfo {
        this['value'] = value;
        return this;
    }
}