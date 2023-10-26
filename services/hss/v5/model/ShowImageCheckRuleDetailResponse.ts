import { ImageCheckRuleCheckCaseResponseInfo } from './ImageCheckRuleCheckCaseResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageCheckRuleDetailResponse extends SdkResponse {
    public description?: string;
    public reference?: string;
    public audit?: string;
    public remediation?: string;
    private 'check_info_list'?: Array<ImageCheckRuleCheckCaseResponseInfo>;
    public constructor() { 
        super();
    }
    public withDescription(description: string): ShowImageCheckRuleDetailResponse {
        this['description'] = description;
        return this;
    }
    public withReference(reference: string): ShowImageCheckRuleDetailResponse {
        this['reference'] = reference;
        return this;
    }
    public withAudit(audit: string): ShowImageCheckRuleDetailResponse {
        this['audit'] = audit;
        return this;
    }
    public withRemediation(remediation: string): ShowImageCheckRuleDetailResponse {
        this['remediation'] = remediation;
        return this;
    }
    public withCheckInfoList(checkInfoList: Array<ImageCheckRuleCheckCaseResponseInfo>): ShowImageCheckRuleDetailResponse {
        this['check_info_list'] = checkInfoList;
        return this;
    }
    public set checkInfoList(checkInfoList: Array<ImageCheckRuleCheckCaseResponseInfo>  | undefined) {
        this['check_info_list'] = checkInfoList;
    }
    public get checkInfoList(): Array<ImageCheckRuleCheckCaseResponseInfo> | undefined {
        return this['check_info_list'];
    }
}