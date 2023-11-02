

export class MetricOpenSearchParams {
    private 'architecture_guid'?: string;
    public query?: string;
    public limit?: number;
    public offset?: number;
    private 'search_name_description'?: boolean;
    private 'include_sub_architecture'?: boolean;
    public constructor(query?: string) { 
        this['query'] = query;
    }
    public withArchitectureGuid(architectureGuid: string): MetricOpenSearchParams {
        this['architecture_guid'] = architectureGuid;
        return this;
    }
    public set architectureGuid(architectureGuid: string  | undefined) {
        this['architecture_guid'] = architectureGuid;
    }
    public get architectureGuid(): string | undefined {
        return this['architecture_guid'];
    }
    public withQuery(query: string): MetricOpenSearchParams {
        this['query'] = query;
        return this;
    }
    public withLimit(limit: number): MetricOpenSearchParams {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): MetricOpenSearchParams {
        this['offset'] = offset;
        return this;
    }
    public withSearchNameDescription(searchNameDescription: boolean): MetricOpenSearchParams {
        this['search_name_description'] = searchNameDescription;
        return this;
    }
    public set searchNameDescription(searchNameDescription: boolean  | undefined) {
        this['search_name_description'] = searchNameDescription;
    }
    public get searchNameDescription(): boolean | undefined {
        return this['search_name_description'];
    }
    public withIncludeSubArchitecture(includeSubArchitecture: boolean): MetricOpenSearchParams {
        this['include_sub_architecture'] = includeSubArchitecture;
        return this;
    }
    public set includeSubArchitecture(includeSubArchitecture: boolean  | undefined) {
        this['include_sub_architecture'] = includeSubArchitecture;
    }
    public get includeSubArchitecture(): boolean | undefined {
        return this['include_sub_architecture'];
    }
}