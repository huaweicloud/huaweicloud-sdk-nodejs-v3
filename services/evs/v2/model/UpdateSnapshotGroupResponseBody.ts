

export class UpdateSnapshotGroupResponseBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateSnapshotGroupResponseBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSnapshotGroupResponseBody {
        this['description'] = description;
        return this;
    }
}