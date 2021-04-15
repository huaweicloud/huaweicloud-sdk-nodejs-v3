

export class CreateSnapshotOption {
    private 'volume_id': string | undefined;
    public force?: boolean;
    public metadata?: { [key: string]: string; };
    public description?: string;
    public name?: string;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): CreateSnapshotOption {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withForce(force: boolean): CreateSnapshotOption {
        this['force'] = force;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): CreateSnapshotOption {
        this['metadata'] = metadata;
        return this;
    }
    public withDescription(description: string): CreateSnapshotOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateSnapshotOption {
        this['name'] = name;
        return this;
    }
}