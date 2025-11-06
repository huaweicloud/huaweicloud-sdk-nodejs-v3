

export class ListItemCommitsRequest {
    private 'project_id'?: string;
    private 'item_id'?: string;
    public type?: ListItemCommitsRequestTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, itemId?: string) { 
        this['project_id'] = projectId;
        this['item_id'] = itemId;
    }
    public withProjectId(projectId: string): ListItemCommitsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withItemId(itemId: string): ListItemCommitsRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withType(type: ListItemCommitsRequestTypeEnum | string): ListItemCommitsRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListItemCommitsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListItemCommitsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListItemCommitsRequestTypeEnum {
    COMMIT = 'commit',
    BRANCH = 'branch',
    MERGEREQUEST = 'mergerequest'
}
