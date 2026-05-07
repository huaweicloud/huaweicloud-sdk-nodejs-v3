

export class ListAiComponentStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    public catalogue?: string;
    public limit?: number;
    public offset?: number;
    private 'ai_component_name'?: string;
    public constructor(category?: string, catalogue?: string) { 
        this['category'] = category;
        this['catalogue'] = catalogue;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAiComponentStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): ListAiComponentStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withCatalogue(catalogue: string): ListAiComponentStatisticsRequest {
        this['catalogue'] = catalogue;
        return this;
    }
    public withLimit(limit: number): ListAiComponentStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiComponentStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withAiComponentName(aiComponentName: string): ListAiComponentStatisticsRequest {
        this['ai_component_name'] = aiComponentName;
        return this;
    }
    public set aiComponentName(aiComponentName: string  | undefined) {
        this['ai_component_name'] = aiComponentName;
    }
    public get aiComponentName(): string | undefined {
        return this['ai_component_name'];
    }
}