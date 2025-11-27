

export class ListExportTasksRequest {
    private 'Instance-Id'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    private 'resource_type'?: string;
    private 'resource_condition'?: string;
    private 'app_type'?: string;
    private 'app_id'?: string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withInstanceId(instanceId: string): ListExportTasksRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListExportTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListExportTasksRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListExportTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withResourceType(resourceType: string): ListExportTasksRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceCondition(resourceCondition: string): ListExportTasksRequest {
        this['resource_condition'] = resourceCondition;
        return this;
    }
    public set resourceCondition(resourceCondition: string  | undefined) {
        this['resource_condition'] = resourceCondition;
    }
    public get resourceCondition(): string | undefined {
        return this['resource_condition'];
    }
    public withAppType(appType: string): ListExportTasksRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withAppId(appId: string): ListExportTasksRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}