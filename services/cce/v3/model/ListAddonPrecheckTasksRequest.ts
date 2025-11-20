

export class ListAddonPrecheckTasksRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public type?: ListAddonPrecheckTasksRequestTypeEnum | string;
    private 'task_id'?: string;
    private 'addon_instance_id'?: string;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): ListAddonPrecheckTasksRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): ListAddonPrecheckTasksRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withType(type: ListAddonPrecheckTasksRequestTypeEnum | string): ListAddonPrecheckTasksRequest {
        this['type'] = type;
        return this;
    }
    public withTaskId(taskId: string): ListAddonPrecheckTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAddonInstanceId(addonInstanceId: string): ListAddonPrecheckTasksRequest {
        this['addon_instance_id'] = addonInstanceId;
        return this;
    }
    public set addonInstanceId(addonInstanceId: string  | undefined) {
        this['addon_instance_id'] = addonInstanceId;
    }
    public get addonInstanceId(): string | undefined {
        return this['addon_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAddonPrecheckTasksRequestTypeEnum {
    ADDONSTATIC = 'addonStatic',
    ADDONUPGRADE = 'addonUpgrade'
}
