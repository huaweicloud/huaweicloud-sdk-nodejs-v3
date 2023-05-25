

export class ShowStorageUsageRequest {
    public limit?: number;
    public offset?: number;
    private 'resource_id'?: string | undefined;
    private 'resource_type'?: ShowStorageUsageRequestResourceTypeEnum | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ShowStorageUsageRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowStorageUsageRequest {
        this['offset'] = offset;
        return this;
    }
    public withResourceId(resourceId: string): ShowStorageUsageRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: ShowStorageUsageRequestResourceTypeEnum): ShowStorageUsageRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowStorageUsageRequestResourceTypeEnum | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStorageUsageRequestResourceTypeEnum {
    OSNOVASERVER = 'OS::Nova::Server',
    OSIRONICBAREMETALSERVER = 'OS::Ironic::BareMetalServer'
}
