

export class ListResourceGroupsServicesResourcesRequest {
    private 'group_id'?: string;
    public service?: string;
    private 'dim_name'?: string;
    public limit?: string;
    public offset?: number;
    public status?: ListResourceGroupsServicesResourcesRequestStatusEnum | string;
    private 'dim_value'?: string;
    public tag?: string;
    private 'extend_relation_id'?: string;
    private 'product_name'?: string;
    private 'resource_name'?: string;
    private 'event_status'?: ListResourceGroupsServicesResourcesRequestEventStatusEnum | string;
    public constructor(groupId?: string, service?: string) { 
        this['group_id'] = groupId;
        this['service'] = service;
    }
    public withGroupId(groupId: string): ListResourceGroupsServicesResourcesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withService(service: string): ListResourceGroupsServicesResourcesRequest {
        this['service'] = service;
        return this;
    }
    public withDimName(dimName: string): ListResourceGroupsServicesResourcesRequest {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
    public withLimit(limit: string): ListResourceGroupsServicesResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourceGroupsServicesResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: ListResourceGroupsServicesResourcesRequestStatusEnum | string): ListResourceGroupsServicesResourcesRequest {
        this['status'] = status;
        return this;
    }
    public withDimValue(dimValue: string): ListResourceGroupsServicesResourcesRequest {
        this['dim_value'] = dimValue;
        return this;
    }
    public set dimValue(dimValue: string  | undefined) {
        this['dim_value'] = dimValue;
    }
    public get dimValue(): string | undefined {
        return this['dim_value'];
    }
    public withTag(tag: string): ListResourceGroupsServicesResourcesRequest {
        this['tag'] = tag;
        return this;
    }
    public withExtendRelationId(extendRelationId: string): ListResourceGroupsServicesResourcesRequest {
        this['extend_relation_id'] = extendRelationId;
        return this;
    }
    public set extendRelationId(extendRelationId: string  | undefined) {
        this['extend_relation_id'] = extendRelationId;
    }
    public get extendRelationId(): string | undefined {
        return this['extend_relation_id'];
    }
    public withProductName(productName: string): ListResourceGroupsServicesResourcesRequest {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withResourceName(resourceName: string): ListResourceGroupsServicesResourcesRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEventStatus(eventStatus: ListResourceGroupsServicesResourcesRequestEventStatusEnum | string): ListResourceGroupsServicesResourcesRequest {
        this['event_status'] = eventStatus;
        return this;
    }
    public set eventStatus(eventStatus: ListResourceGroupsServicesResourcesRequestEventStatusEnum | string  | undefined) {
        this['event_status'] = eventStatus;
    }
    public get eventStatus(): ListResourceGroupsServicesResourcesRequestEventStatusEnum | string | undefined {
        return this['event_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceGroupsServicesResourcesRequestStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
/**
    * @export
    * @enum {string}
    */
export enum ListResourceGroupsServicesResourcesRequestEventStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
