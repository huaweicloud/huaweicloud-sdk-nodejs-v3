import { PwdCheckTagInfo } from './PwdCheckTagInfo';


export class SecurityCheckPolicyInfoResponseInfo {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public content?: string;
    private 'pwd_policy_content'?: PwdCheckTagInfo;
    public constructor() { 
    }
    public withPolicyName(policyName: string): SecurityCheckPolicyInfoResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): SecurityCheckPolicyInfoResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withContent(content: string): SecurityCheckPolicyInfoResponseInfo {
        this['content'] = content;
        return this;
    }
    public withPwdPolicyContent(pwdPolicyContent: PwdCheckTagInfo): SecurityCheckPolicyInfoResponseInfo {
        this['pwd_policy_content'] = pwdPolicyContent;
        return this;
    }
    public set pwdPolicyContent(pwdPolicyContent: PwdCheckTagInfo  | undefined) {
        this['pwd_policy_content'] = pwdPolicyContent;
    }
    public get pwdPolicyContent(): PwdCheckTagInfo | undefined {
        return this['pwd_policy_content'];
    }
}