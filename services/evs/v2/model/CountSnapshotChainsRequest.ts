

export class CountSnapshotChainsRequest {
    private 'volume_id'?: string;
    private 'availability_zone'?: string;
    public category?: string;
    public id?: string;
    public constructor() { 
    }
    public withVolumeId(volumeId: string): CountSnapshotChainsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CountSnapshotChainsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withCategory(category: string): CountSnapshotChainsRequest {
        this['category'] = category;
        return this;
    }
    public withId(id: string): CountSnapshotChainsRequest {
        this['id'] = id;
        return this;
    }
}