import { GetOffSiteBackupPolicy } from './GetOffSiteBackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOffSiteBackupPolicyResponse extends SdkResponse {
    private 'policy_para'?: Array<GetOffSiteBackupPolicy>;
    public constructor() { 
        super();
    }
    public withPolicyPara(policyPara: Array<GetOffSiteBackupPolicy>): ShowOffSiteBackupPolicyResponse {
        this['policy_para'] = policyPara;
        return this;
    }
    public set policyPara(policyPara: Array<GetOffSiteBackupPolicy>  | undefined) {
        this['policy_para'] = policyPara;
    }
    public get policyPara(): Array<GetOffSiteBackupPolicy> | undefined {
        return this['policy_para'];
    }
}