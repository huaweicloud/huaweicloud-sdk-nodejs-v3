

export class DiskSnapshotInfo {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): DiskSnapshotInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DiskSnapshotInfo {
        this['description'] = description;
        return this;
    }
}