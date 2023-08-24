import { CheckRuleCheckCaseResponseInfo } from './CheckRuleCheckCaseResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCheckRuleDetailResponse extends SdkResponse {
    public description?: string;
    public reference?: string;
    public audit?: string;
    public remediation?: string;
    private 'check_info_list'?: Array<CheckRuleCheckCaseResponseInfo>;
    public constructor() { 
        super();
    }
    public withDescription(description: string): ShowCheckRuleDetailResponse {
        this['description'] = description;
        return this;
    }
    public withReference(reference: string): ShowCheckRuleDetailResponse {
        this['reference'] = reference;
        return this;
    }
    public withAudit(audit: string): ShowCheckRuleDetailResponse {
        this['audit'] = audit;
        return this;
    }
    public withRemediation(remediation: string): ShowCheckRuleDetailResponse {
        this['remediation'] = remediation;
        return this;
    }
    public withCheckInfoList(checkInfoList: Array<CheckRuleCheckCaseResponseInfo>): ShowCheckRuleDetailResponse {
        this['check_info_list'] = checkInfoList;
        return this;
    }
    public set checkInfoList(checkInfoList: Array<CheckRuleCheckCaseResponseInfo>  | undefined) {
        this['check_info_list'] = checkInfoList;
    }
    public get checkInfoList(): Array<CheckRuleCheckCaseResponseInfo> | undefined {
        return this['check_info_list'];
    }
}