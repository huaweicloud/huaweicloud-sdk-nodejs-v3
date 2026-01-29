

export class ListWorkflowsRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public order?: ListWorkflowsRequestOrderEnum | string;
    public sortby?: ListWorkflowsRequestSortbyEnum | string;
    public enabled?: boolean;
    public name?: string;
    public description?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    private 'aop_type'?: ListWorkflowsRequestAopTypeEnum | string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListWorkflowsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): ListWorkflowsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListWorkflowsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkflowsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: ListWorkflowsRequestOrderEnum | string): ListWorkflowsRequest {
        this['order'] = order;
        return this;
    }
    public withSortby(sortby: ListWorkflowsRequestSortbyEnum | string): ListWorkflowsRequest {
        this['sortby'] = sortby;
        return this;
    }
    public withEnabled(enabled: boolean): ListWorkflowsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): ListWorkflowsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListWorkflowsRequest {
        this['description'] = description;
        return this;
    }
    public withDataclassId(dataclassId: string): ListWorkflowsRequest {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): ListWorkflowsRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withAopType(aopType: ListWorkflowsRequestAopTypeEnum | string): ListWorkflowsRequest {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: ListWorkflowsRequestAopTypeEnum | string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): ListWorkflowsRequestAopTypeEnum | string | undefined {
        return this['aop_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowsRequestOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowsRequestSortbyEnum {
    UPDATE_TIME = 'update_time',
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowsRequestAopTypeEnum {
    NORMAL = 'NORMAL',
    SURVEY = 'SURVEY',
    HEMOSTASIS = 'HEMOSTASIS',
    EASE = 'EASE'
}
