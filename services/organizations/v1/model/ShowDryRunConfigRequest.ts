

export class ShowDryRunConfigRequest {
    private 'X-Security-Token'?: string;
    private 'root_id'?: string;
    private 'policy_type'?: ShowDryRunConfigRequestPolicyTypeEnum | string;
    public constructor(rootId?: string, policyType?: string) { 
        this['root_id'] = rootId;
        this['policy_type'] = policyType;
    }
    public withXSecurityToken(xSecurityToken: string): ShowDryRunConfigRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRootId(rootId: string): ShowDryRunConfigRequest {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withPolicyType(policyType: ShowDryRunConfigRequestPolicyTypeEnum | string): ShowDryRunConfigRequest {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: ShowDryRunConfigRequestPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): ShowDryRunConfigRequestPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDryRunConfigRequestPolicyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy'
}
