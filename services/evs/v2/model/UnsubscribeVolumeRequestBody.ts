

export class UnsubscribeVolumeRequestBody {
    private 'volume_ids'?: Array<string>;
    public constructor(volumeIds?: Array<string>) { 
        this['volume_ids'] = volumeIds;
    }
    public withVolumeIds(volumeIds: Array<string>): UnsubscribeVolumeRequestBody {
        this['volume_ids'] = volumeIds;
        return this;
    }
    public set volumeIds(volumeIds: Array<string>  | undefined) {
        this['volume_ids'] = volumeIds;
    }
    public get volumeIds(): Array<string> | undefined {
        return this['volume_ids'];
    }
}