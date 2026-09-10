

export class GetInstancesOpsResourceUsageRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    private 'resource_type'?: GetInstancesOpsResourceUsageRequestResourceTypeEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): GetInstancesOpsResourceUsageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): GetInstancesOpsResourceUsageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withResourceType(resourceType: GetInstancesOpsResourceUsageRequestResourceTypeEnum | string): GetInstancesOpsResourceUsageRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: GetInstancesOpsResourceUsageRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): GetInstancesOpsResourceUsageRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetInstancesOpsResourceUsageRequestResourceTypeEnum {
    CPU = 'cpu',
    MEM = 'mem',
    DISK = 'disk',
    DISK_WEEK = 'disk_week',
    IO = 'io'
}
