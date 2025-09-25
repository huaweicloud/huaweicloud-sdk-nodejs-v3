

export class SwitchDecoyPortAutoBindRequest {
    private 'enterprise_project_id'?: string;
    public enable?: boolean;
    private 'linux_policy_id'?: string;
    private 'windows_policy_id'?: string;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchDecoyPortAutoBindRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnable(enable: boolean): SwitchDecoyPortAutoBindRequest {
        this['enable'] = enable;
        return this;
    }
    public withLinuxPolicyId(linuxPolicyId: string): SwitchDecoyPortAutoBindRequest {
        this['linux_policy_id'] = linuxPolicyId;
        return this;
    }
    public set linuxPolicyId(linuxPolicyId: string  | undefined) {
        this['linux_policy_id'] = linuxPolicyId;
    }
    public get linuxPolicyId(): string | undefined {
        return this['linux_policy_id'];
    }
    public withWindowsPolicyId(windowsPolicyId: string): SwitchDecoyPortAutoBindRequest {
        this['windows_policy_id'] = windowsPolicyId;
        return this;
    }
    public set windowsPolicyId(windowsPolicyId: string  | undefined) {
        this['windows_policy_id'] = windowsPolicyId;
    }
    public get windowsPolicyId(): string | undefined {
        return this['windows_policy_id'];
    }
}