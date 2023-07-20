

export class DetachServerVolumeRequest {
    private 'server_id'?: string;
    private 'volume_id'?: string;
    private 'delete_flag'?: DetachServerVolumeRequestDeleteFlagEnum | string;
    public constructor(serverId?: string, volumeId?: string) { 
        this['server_id'] = serverId;
        this['volume_id'] = volumeId;
    }
    public withServerId(serverId: string): DetachServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): DetachServerVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withDeleteFlag(deleteFlag: DetachServerVolumeRequestDeleteFlagEnum | string): DetachServerVolumeRequest {
        this['delete_flag'] = deleteFlag;
        return this;
    }
    public set deleteFlag(deleteFlag: DetachServerVolumeRequestDeleteFlagEnum | string  | undefined) {
        this['delete_flag'] = deleteFlag;
    }
    public get deleteFlag(): DetachServerVolumeRequestDeleteFlagEnum | string | undefined {
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
