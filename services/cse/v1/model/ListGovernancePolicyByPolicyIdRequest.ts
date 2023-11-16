

export class ListGovernancePolicyByPolicyIdRequest {
    private 'Content-Type'?: string;
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'x-environment'?: string;
    public kind?: string;
    private 'policy_id'?: string;
    public constructor(contentType?: string, xEngineId?: string, xEnterpriseProjectID?: string, kind?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['kind'] = kind;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): ListGovernancePolicyByPolicyIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXEngineId(xEngineId: string): ListGovernancePolicyByPolicyIdRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListGovernancePolicyByPolicyIdRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironment(xEnvironment: string): ListGovernancePolicyByPolicyIdRequest {
        this['x-environment'] = xEnvironment;
        return this;
    }
    public set xEnvironment(xEnvironment: string  | undefined) {
        this['x-environment'] = xEnvironment;
    }
    public get xEnvironment(): string | undefined {
        return this['x-environment'];
    }
    public withKind(kind: string): ListGovernancePolicyByPolicyIdRequest {
        this['kind'] = kind;
        return this;
    }
    public withPolicyId(policyId: string): ListGovernancePolicyByPolicyIdRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}