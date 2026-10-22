

export class ListSnapshotChainsRequest {
    public marker?: string;
    public limit?: number;
    public id?: string;
    private 'volume_id'?: string;
    public category?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListSnapshotChainsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListSnapshotChainsRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListSnapshotChainsRequest {
        this['id'] = id;
        return this;
    }
    public withVolumeId(volumeId: string): ListSnapshotChainsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withCategory(category: string): ListSnapshotChainsRequest {
        this['category'] = category;
        return this;
    }
}