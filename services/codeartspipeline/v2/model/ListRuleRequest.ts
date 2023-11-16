

export class ListRuleRequest {
    private 'domain_id'?: string;
    private 'cloud_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public name?: string;
    public constructor(domainId?: string, offset?: number, limit?: number) { 
        this['domain_id'] = domainId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withDomainId(domainId: string): ListRuleRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCloudProjectId(cloudProjectId: string): ListRuleRequest {
        this['cloud_project_id'] = cloudProjectId;
        return this;
    }
    public set cloudProjectId(cloudProjectId: string  | undefined) {
        this['cloud_project_id'] = cloudProjectId;
    }
    public get cloudProjectId(): string | undefined {
        return this['cloud_project_id'];
    }
    public withOffset(offset: number): ListRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListRuleRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListRuleRequest {
        this['name'] = name;
        return this;
    }
}