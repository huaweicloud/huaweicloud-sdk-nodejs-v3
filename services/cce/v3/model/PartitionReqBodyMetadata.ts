

export class PartitionReqBodyMetadata {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): PartitionReqBodyMetadata {
        this['name'] = name;
        return this;
    }
}