import { EipInfo } from './EipInfo';


export class AddEipAlarmWhitelistRequestBody {
    private 'eip_infos'?: Array<EipInfo>;
    private 'fw_instance_id'?: string;
    public constructor(fwInstanceId?: string) { 
        this['fw_instance_id'] = fwInstanceId;
    }
    public withEipInfos(eipInfos: Array<EipInfo>): AddEipAlarmWhitelistRequestBody {
        this['eip_infos'] = eipInfos;
        return this;
    }
    public set eipInfos(eipInfos: Array<EipInfo>  | undefined) {
        this['eip_infos'] = eipInfos;
    }
    public get eipInfos(): Array<EipInfo> | undefined {
        return this['eip_infos'];
    }
    public withFwInstanceId(fwInstanceId: string): AddEipAlarmWhitelistRequestBody {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}