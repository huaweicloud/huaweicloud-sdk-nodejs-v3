

export class ListFactoryPendingItemsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'submit_user_name'?: string;
    private 'item_name'?: string;
    private 'update_type'?: string;
    private 'task_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
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
    public withUpdateType(updateType: string): ListFactoryPendingItemsRequest {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): string | undefined {
        return this['update_type'];
    }
    public withTaskType(taskType: string): ListFactoryPendingItemsRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withStartTime(startTime: string): ListFactoryPendingItemsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListFactoryPendingItemsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
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