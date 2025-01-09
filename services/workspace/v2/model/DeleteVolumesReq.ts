

export class DeleteVolumesReq {
    private 'volume_ids'?: Array<string>;
    public constructor() { 
    }
    public withVolumeIds(volumeIds: Array<string>): DeleteVolumesReq {
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