

export class UpdateInstanceReq {
    public name?: string;
    public description?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'security_group_id'?: string;
    private 'retention_policy'?: UpdateInstanceReqRetentionPolicyEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateInstanceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateInstanceReq {
        this['description'] = description;
        return this;
    }
    public withMaintainBegin(maintainBegin: string): UpdateInstanceReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): UpdateInstanceReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withSecurityGroupId(securityGroupId: string): UpdateInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withRetentionPolicy(retentionPolicy: UpdateInstanceReqRetentionPolicyEnum | string): UpdateInstanceReq {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: UpdateInstanceReqRetentionPolicyEnum | string  | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy(): UpdateInstanceReqRetentionPolicyEnum | string | undefined {
        return this['retention_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceReqRetentionPolicyEnum {
    PRODUCE_REJECT = 'produce_reject',
    TIME_BASE = 'time_base'
}
