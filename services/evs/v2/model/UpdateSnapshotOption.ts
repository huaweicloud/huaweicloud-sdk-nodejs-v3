

export class UpdateSnapshotOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateSnapshotOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateSnapshotOption {
        this['name'] = name;
        return this;
    }
}