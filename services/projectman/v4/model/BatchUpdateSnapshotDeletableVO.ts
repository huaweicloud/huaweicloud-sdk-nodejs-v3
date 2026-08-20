

export class BatchUpdateSnapshotDeletableVO {
    public ids?: Array<string>;
    public deletable?: boolean;
    public constructor(ids?: Array<string>, deletable?: boolean) { 
        this['ids'] = ids;
        this['deletable'] = deletable;
    }
    public withIds(ids: Array<string>): BatchUpdateSnapshotDeletableVO {
        this['ids'] = ids;
        return this;
    }
    public withDeletable(deletable: boolean): BatchUpdateSnapshotDeletableVO {
        this['deletable'] = deletable;
        return this;
    }
}