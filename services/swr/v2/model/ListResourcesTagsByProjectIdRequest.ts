

export class ListResourcesTagsByProjectIdRequest {
    private 'resource_type'?: ListResourcesTagsByProjectIdRequestResourceTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'instance_id'?: string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourcesTagsByProjectIdRequestResourceTypeEnum | string): ListResourcesTagsByProjectIdRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourcesTagsByProjectIdRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourcesTagsByProjectIdRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withOffset(offset: number): ListResourcesTagsByProjectIdRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListResourcesTagsByProjectIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstanceId(instanceId: string): ListResourcesTagsByProjectIdRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourcesTagsByProjectIdRequestResourceTypeEnum {
    INSTANCES = 'instances',
    NAMESPACES = 'namespaces',
    REPOSITORIES = 'repositories'
}
