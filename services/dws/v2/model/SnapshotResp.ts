

export class SnapshotResp {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SnapshotResp {
        this['id'] = id;
        return this;
    }
}