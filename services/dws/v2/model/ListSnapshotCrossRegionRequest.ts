

export class ListSnapshotCrossRegionRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListSnapshotCrossRegionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSnapshotCrossRegionRequest {
        this['limit'] = limit;
        return this;
    }
}