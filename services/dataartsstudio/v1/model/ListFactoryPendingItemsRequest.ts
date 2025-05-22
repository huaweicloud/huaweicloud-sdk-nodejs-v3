

export class ListFactoryPendingItemsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'submit_user_name'?: string;
    private 'item_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryPendingItemsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListFactoryPendingItemsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withSubmitUserName(submitUserName: string): ListFactoryPendingItemsRequest {
        this['submit_user_name'] = submitUserName;
        return this;
    }
    public set submitUserName(submitUserName: string  | undefined) {
        this['submit_user_name'] = submitUserName;
    }
    public get submitUserName(): string | undefined {
        return this['submit_user_name'];
    }
    public withItemName(itemName: string): ListFactoryPendingItemsRequest {
        this['item_name'] = itemName;
        return this;
    }
    public set itemName(itemName: string  | undefined) {
        this['item_name'] = itemName;
    }
    public get itemName(): string | undefined {
        return this['item_name'];
    }
    public withLimit(limit: number): ListFactoryPendingItemsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactoryPendingItemsRequest {
        this['offset'] = offset;
        return this;
    }
}