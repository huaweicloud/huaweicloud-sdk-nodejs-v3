

export class RollbackSnapshotOption {
    public name?: string;
    private 'volume_id': string | undefined;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withName(name: string): RollbackSnapshotOption {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): RollbackSnapshotOption {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}