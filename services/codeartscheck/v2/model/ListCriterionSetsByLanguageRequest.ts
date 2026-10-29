

export class ListCriterionSetsByLanguageRequest {
    public language?: string;
    public search?: string;
    private 'page_size'?: number;
    public page?: number;
    private 'project_id'?: string;
    private 'is_reliable'?: string;
    public constructor(language?: string, projectId?: string) { 
        this['language'] = language;
        this['project_id'] = projectId;
    }
    public withLanguage(language: string): ListCriterionSetsByLanguageRequest {
        this['language'] = language;
        return this;
    }
    public withSearch(search: string): ListCriterionSetsByLanguageRequest {
        this['search'] = search;
        return this;
    }
    public withPageSize(pageSize: number): ListCriterionSetsByLanguageRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPage(page: number): ListCriterionSetsByLanguageRequest {
        this['page'] = page;
        return this;
    }
    public withProjectId(projectId: string): ListCriterionSetsByLanguageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsReliable(isReliable: string): ListCriterionSetsByLanguageRequest {
        this['is_reliable'] = isReliable;
        return this;
    }
    public set isReliable(isReliable: string  | undefined) {
        this['is_reliable'] = isReliable;
    }
    public get isReliable(): string | undefined {
        return this['is_reliable'];
    }
}