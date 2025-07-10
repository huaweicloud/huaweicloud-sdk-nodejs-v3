

export class ListManageableGroupsRequest {
    private 'project_id'?: string;
    public scope?: ListManageableGroupsRequestScopeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListManageableGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withScope(scope: ListManageableGroupsRequestScopeEnum | string): ListManageableGroupsRequest {
        this['scope'] = scope;
        return this;
    }
    public withOffset(offset: number): ListManageableGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListManageableGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListManageableGroupsRequestScopeEnum {
    GROUP = 'group',
    REPOSITORY = 'repository'
}
