

export class ListWorkflowsRequest {
    public name?: string;
    public description?: string;
    public status?: string;
    public labels?: string;
    private 'template_id'?: string;
    public limit?: string;
    public offset?: string;
    private 'sort_by'?: string;
    private 'search_type'?: ListWorkflowsRequestSearchTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): ListWorkflowsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListWorkflowsRequest {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): ListWorkflowsRequest {
        this['status'] = status;
        return this;
    }
    public withLabels(labels: string): ListWorkflowsRequest {
        this['labels'] = labels;
        return this;
    }
    public withTemplateId(templateId: string): ListWorkflowsRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withLimit(limit: string): ListWorkflowsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListWorkflowsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListWorkflowsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withSearchType(searchType: ListWorkflowsRequestSearchTypeEnum | string): ListWorkflowsRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: ListWorkflowsRequestSearchTypeEnum | string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): ListWorkflowsRequestSearchTypeEnum | string | undefined {
        return this['search_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowsRequestSearchTypeEnum {
    CONTAIN = 'contain',
    EQUAL = 'equal'
}
