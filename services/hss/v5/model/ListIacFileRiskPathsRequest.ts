

export class ListIacFileRiskPathsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'file_id'?: string;
    private 'rule_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    public namespace?: string;
    public constructor(offset?: number, limit?: number, fileId?: string, ruleId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['file_id'] = fileId;
        this['rule_id'] = ruleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIacFileRiskPathsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListIacFileRiskPathsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIacFileRiskPathsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFileId(fileId: string): ListIacFileRiskPathsRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withRuleId(ruleId: string): ListIacFileRiskPathsRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withResourceName(resourceName: string): ListIacFileRiskPathsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListIacFileRiskPathsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withNamespace(namespace: string): ListIacFileRiskPathsRequest {
        this['namespace'] = namespace;
        return this;
    }
}