

export class DetachDevServerVolumeRequest {
    public id?: string;
    private 'volume_id'?: string;
    public constructor(id?: string, volumeId?: string) { 
        this['id'] = id;
        this['volume_id'] = volumeId;
    }
    public withId(id: string): DetachDevServerVolumeRequest {
        this['id'] = id;
        return this;
    }
    public withVolumeId(volumeId: string): DetachDevServerVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}