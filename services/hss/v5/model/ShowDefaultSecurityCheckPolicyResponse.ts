import { PwdCheckTagInfo } from './PwdCheckTagInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultSecurityCheckPolicyResponse extends SdkResponse {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public content?: string;
    private 'pwd_policy_content'?: PwdCheckTagInfo;
    public constructor() { 
        super();
    }
    public withPolicyName(policyName: string): ShowDefaultSecurityCheckPolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ShowDefaultSecurityCheckPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withContent(content: string): ShowDefaultSecurityCheckPolicyResponse {
        this['content'] = content;
        return this;
    }
    public withPwdPolicyContent(pwdPolicyContent: PwdCheckTagInfo): ShowDefaultSecurityCheckPolicyResponse {
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