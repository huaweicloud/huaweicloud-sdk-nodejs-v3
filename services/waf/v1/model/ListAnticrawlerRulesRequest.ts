

export class ListAnticrawlerRulesRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public offset?: number;
    public limit?: number;
    public page?: number;
    public pagesize?: number;
    public type?: ListAnticrawlerRulesRequestTypeEnum | string;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): ListAnticrawlerRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAnticrawlerRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ListAnticrawlerRulesRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withOffset(offset: number): ListAnticrawlerRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAnticrawlerRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPage(page: number): ListAnticrawlerRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListAnticrawlerRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withType(type: ListAnticrawlerRulesRequestTypeEnum | string): ListAnticrawlerRulesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAnticrawlerRulesRequestTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
