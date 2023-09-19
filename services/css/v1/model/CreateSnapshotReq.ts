

export class CreateSnapshotReq {
    public name?: string;
    public description?: string;
    public indices?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSnapshotReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSnapshotReq {
        this['description'] = description;
        return this;
    }
    public withIndices(indices: string): CreateSnapshotReq {
        this['indices'] = indices;
        return this;
    }
}