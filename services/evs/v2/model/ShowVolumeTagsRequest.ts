

export class ShowVolumeTagsRequest {
    private 'volume_id': string | undefined;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): ShowVolumeTagsRequest {
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