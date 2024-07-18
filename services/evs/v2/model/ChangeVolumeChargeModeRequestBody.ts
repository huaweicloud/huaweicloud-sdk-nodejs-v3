import { BssParam2 } from './BssParam2';


export class ChangeVolumeChargeModeRequestBody {
    private 'volume_ids'?: Array<string>;
    private 'server_id'?: string;
    private 'bss_param'?: BssParam2;
    public constructor(volumeIds?: Array<string>) { 
        this['volume_ids'] = volumeIds;
    }
    public withVolumeIds(volumeIds: Array<string>): ChangeVolumeChargeModeRequestBody {
        this['volume_ids'] = volumeIds;
        return this;
    }
    public set volumeIds(volumeIds: Array<string>  | undefined) {
        this['volume_ids'] = volumeIds;
    }
    public get volumeIds(): Array<string> | undefined {
        return this['volume_ids'];
    }
    public withServerId(serverId: string): ChangeVolumeChargeModeRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBssParam(bssParam: BssParam2): ChangeVolumeChargeModeRequestBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam2  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssParam2 | undefined {
        return this['bss_param'];
    }
}