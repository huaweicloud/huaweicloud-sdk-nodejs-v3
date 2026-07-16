

export class ShowWorkflowLabelsRequest {
    public limit?: number;
    public offset?: number;
    public order?: ShowWorkflowLabelsRequestOrderEnum | string;
    private 'sort_by'?: ShowWorkflowLabelsRequestSortByEnum | string;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowWorkflowLabelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowWorkflowLabelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: ShowWorkflowLabelsRequestOrderEnum | string): ShowWorkflowLabelsRequest {
        this['order'] = order;
        return this;
    }
    public withSortBy(sortBy: ShowWorkflowLabelsRequestSortByEnum | string): ShowWorkflowLabelsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: ShowWorkflowLabelsRequestSortByEnum | string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): ShowWorkflowLabelsRequestSortByEnum | string | undefined {
        return this['sort_by'];
    }
    public withTemplateId(templateId: string): ShowWorkflowLabelsRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWorkflowLabelsRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowWorkflowLabelsRequestSortByEnum {
    USER_NAME = 'user_name',
    CREATE_TIME = 'create_time'
}
