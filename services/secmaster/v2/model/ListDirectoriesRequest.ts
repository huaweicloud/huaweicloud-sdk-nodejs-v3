

export class ListDirectoriesRequest {
    private 'workspace_id'?: string;
    public category?: ListDirectoriesRequestCategoryEnum | string;
    public constructor(workspaceId?: string, category?: string) { 
        this['workspace_id'] = workspaceId;
        this['category'] = category;
    }
    public withWorkspaceId(workspaceId: string): ListDirectoriesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCategory(category: ListDirectoriesRequestCategoryEnum | string): ListDirectoriesRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDirectoriesRequestCategoryEnum {
    TABLE = 'TABLE',
    PIPE = 'PIPE',
    RETRIEVE_SCRIPT = 'RETRIEVE_SCRIPT',
    ANALYSIS_SCRIPT = 'ANALYSIS_SCRIPT',
    DATA_TRANSFORMATION = 'DATA_TRANSFORMATION',
    ALERT_RULE = 'ALERT_RULE'
}
