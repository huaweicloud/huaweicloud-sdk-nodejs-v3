import { OffSiteBackupPolicy } from './OffSiteBackupPolicy';


export class SetOffSiteBackupPolicyRequestBody {
    private 'policy_para'?: OffSiteBackupPolicy;
    public constructor(policyPara?: OffSiteBackupPolicy) { 
        this['policy_para'] = policyPara;
    }
    public withPolicyPara(policyPara: OffSiteBackupPolicy): SetOffSiteBackupPolicyRequestBody {
        this['policy_para'] = policyPara;
        return this;
    }
    public set policyPara(policyPara: OffSiteBackupPolicy  | undefined) {
        this['policy_para'] = policyPara;
    }
    public get policyPara(): OffSiteBackupPolicy | undefined {
        return this['policy_para'];
    }
}