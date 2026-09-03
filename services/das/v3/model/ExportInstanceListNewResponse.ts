import { ExportInstanceInfo } from './ExportInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportInstanceListNewResponse extends SdkResponse {
    public total?: number;
    private 'instance_infos'?: Array<ExportInstanceInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ExportInstanceListNewResponse {
        this['total'] = total;
        return this;
    }
    public withInstanceInfos(instanceInfos: Array<ExportInstanceInfo>): ExportInstanceListNewResponse {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<ExportInstanceInfo>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<ExportInstanceInfo> | undefined {
        return this['instance_infos'];
    }
}