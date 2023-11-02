import { DiagnosisInfo } from './DiagnosisInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIntelligentDiagnosisAbnormalCountOfInstancesResponse extends SdkResponse {
    private 'diagnosis_info'?: Array<DiagnosisInfo>;
    public constructor() { 
        super();
    }
    public withDiagnosisInfo(diagnosisInfo: Array<DiagnosisInfo>): ShowIntelligentDiagnosisAbnormalCountOfInstancesResponse {
        this['diagnosis_info'] = diagnosisInfo;
        return this;
    }
    public set diagnosisInfo(diagnosisInfo: Array<DiagnosisInfo>  | undefined) {
        this['diagnosis_info'] = diagnosisInfo;
    }
    public get diagnosisInfo(): Array<DiagnosisInfo> | undefined {
        return this['diagnosis_info'];
    }
}