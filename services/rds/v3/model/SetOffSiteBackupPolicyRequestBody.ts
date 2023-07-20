import { OffSiteBackupPolicy } from './OffSiteBackupPolicy';


export class SetOffSiteBackupPolicyRequestBody {
    private 'policy_para'?: Array<OffSiteBackupPolicy>;
    public constructor(policyPara?: Array<OffSiteBackupPolicy>) { 
        this['policy_para'] = policyPara;
    }
    public withPolicyPara(policyPara: Array<OffSiteBackupPolicy>): SetOffSiteBackupPolicyRequestBody {
        this['policy_para'] = policyPara;
        return this;
    }
    public set policyPara(policyPara: Array<OffSiteBackupPolicy>  | undefined) {
        this['policy_para'] = policyPara;
    }
    public get policyPara(): Array<OffSiteBackupPolicy> | undefined {
        return this['policy_para'];
    }
}