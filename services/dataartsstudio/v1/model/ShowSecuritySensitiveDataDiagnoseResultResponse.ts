import { ClassificationResult } from './ClassificationResult';
import { DataMaskingResult } from './DataMaskingResult';
import { IdentificationRuleResult } from './IdentificationRuleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecuritySensitiveDataDiagnoseResultResponse extends SdkResponse {
    private 'task_id'?: string;
    public scanning?: boolean;
    private 'check_time'?: number;
    public classification?: ClassificationResult;
    public rule?: IdentificationRuleResult;
    public masking?: DataMaskingResult;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withScanning(scanning: boolean): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['scanning'] = scanning;
        return this;
    }
    public withCheckTime(checkTime: number): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['check_time'] = checkTime;
        return this;
    }
    public set checkTime(checkTime: number  | undefined) {
        this['check_time'] = checkTime;
    }
    public get checkTime(): number | undefined {
        return this['check_time'];
    }
    public withClassification(classification: ClassificationResult): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['classification'] = classification;
        return this;
    }
    public withRule(rule: IdentificationRuleResult): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['rule'] = rule;
        return this;
    }
    public withMasking(masking: DataMaskingResult): ShowSecuritySensitiveDataDiagnoseResultResponse {
        this['masking'] = masking;
        return this;
    }
}