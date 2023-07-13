

export class DetachServerVolumeRequest {
    private 'server_id': string | undefined;
    private 'volume_id': string | undefined;
    private 'delete_flag'?: DetachServerVolumeRequestDeleteFlagEnum | undefined;
    public constructor(serverId?: any, volumeId?: any) { 
        this['server_id'] = serverId;
        this['volume_id'] = volumeId;
    }
    public withServerId(serverId: string): DetachServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): DetachServerVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withDeleteFlag(deleteFlag: DetachServerVolumeRequestDeleteFlagEnum): DetachServerVolumeRequest {
        this['delete_flag'] = deleteFlag;
        return this;
    }
    public set deleteFlag(deleteFlag: DetachServerVolumeRequestDeleteFlagEnum | undefined) {
        this['delete_flag'] = deleteFlag;
    }
    public get deleteFlag() {
        return this['delete_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DetachServerVolumeRequestDeleteFlagEnum {
    E_0 = '0',
    E_1 = '1'
}
