import { BssParamForCreateVolume } from './BssParamForCreateVolume';
import { CreateVolumeOption } from './CreateVolumeOption';
import { CreateVolumeSchedulerHints } from './CreateVolumeSchedulerHints';


export class CreateVolumeRequestBody {
    public bssParam?: BssParamForCreateVolume;
    public volume: CreateVolumeOption;
    private 'server_id'?: string | undefined;
    private 'OS-SCH-HNT:scheduler_hints'?: CreateVolumeSchedulerHints | undefined;
    public constructor(volume?: any) { 
        this['volume'] = volume;
    }
    public withBssParam(bssParam: BssParamForCreateVolume): CreateVolumeRequestBody {
        this['bssParam'] = bssParam;
        return this;
    }
    public withVolume(volume: CreateVolumeOption): CreateVolumeRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withServerId(serverId: string): CreateVolumeRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withOSSCHHNTSchedulerHints(oSSCHHNTSchedulerHints: CreateVolumeSchedulerHints): CreateVolumeRequestBody {
        this['OS-SCH-HNT:scheduler_hints'] = oSSCHHNTSchedulerHints;
        return this;
    }
    public set oSSCHHNTSchedulerHints(oSSCHHNTSchedulerHints: CreateVolumeSchedulerHints | undefined) {
        this['OS-SCH-HNT:scheduler_hints'] = oSSCHHNTSchedulerHints;
    }
    public get oSSCHHNTSchedulerHints() {
        return this['OS-SCH-HNT:scheduler_hints'];
    }
}