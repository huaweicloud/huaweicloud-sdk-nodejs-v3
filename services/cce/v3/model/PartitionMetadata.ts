

export class PartitionMetadata {
    public name?: string;
    public creationTimestamp?: string;
    public constructor() { 
    }
    public withName(name: string): PartitionMetadata {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PartitionMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}