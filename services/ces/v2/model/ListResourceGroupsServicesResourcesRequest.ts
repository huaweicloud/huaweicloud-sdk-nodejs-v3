

export class ListResourceGroupsServicesResourcesRequest {
    private 'group_id'?: string;
    public service?: string;
    private 'dim_name'?: string;
    public limit?: string;
    public offset?: number;
    public status?: ListResourceGroupsServicesResourcesRequestStatusEnum | string;
    private 'dim_value'?: string;
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
