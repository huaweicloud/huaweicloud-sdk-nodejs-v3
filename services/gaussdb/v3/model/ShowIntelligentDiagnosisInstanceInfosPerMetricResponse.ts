import { InstanceInfoForDiagnosis } from './InstanceInfoForDiagnosis';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIntelligentDiagnosisInstanceInfosPerMetricResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'instance_infos'?: Array<InstanceInfoForDiagnosis>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowIntelligentDiagnosisInstanceInfosPerMetricResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstanceInfos(instanceInfos: Array<InstanceInfoForDiagnosis>): ShowIntelligentDiagnosisInstanceInfosPerMetricResponse {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<InstanceInfoForDiagnosis>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<InstanceInfoForDiagnosis> | undefined {
        return this['instance_infos'];
    }
}