

export class ShowAntiVirusRuleRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'engine_type'?: number;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    public constructor(projectId?: string, objectId?: string, engineType?: number, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['engine_type'] = engineType;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ShowAntiVirusRuleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ShowAntiVirusRuleRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withEngineType(engineType: number): ShowAntiVirusRuleRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: number  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): number | undefined {
        return this['engine_type'];
    }
    public withLimit(limit: number): ShowAntiVirusRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAntiVirusRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAntiVirusRuleRequest {
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