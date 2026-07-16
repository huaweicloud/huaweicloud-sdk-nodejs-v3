

export class ShowWorkflowsOverviewRequest {
    private 'workspace_id'?: string;
    private 'search_type'?: ShowWorkflowsOverviewRequestSearchTypeEnum | string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): ShowWorkflowsOverviewRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSearchType(searchType: ShowWorkflowsOverviewRequestSearchTypeEnum | string): ShowWorkflowsOverviewRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: ShowWorkflowsOverviewRequestSearchTypeEnum | string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): ShowWorkflowsOverviewRequestSearchTypeEnum | string | undefined {
        return this['search_type'];
    }
    public withName(name: string): ShowWorkflowsOverviewRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowWorkflowsOverviewRequest {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWorkflowsOverviewRequestSearchTypeEnum {
    CONTAIN = 'contain',
    EQUAL = 'equal'
}
