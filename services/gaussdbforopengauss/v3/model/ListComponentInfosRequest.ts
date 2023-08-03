

export class ListComponentInfosRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'component_type'?: ListComponentInfosRequestComponentTypeEnum | string;
    private 'availability_zone_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListComponentInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListComponentInfosRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListComponentInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListComponentInfosRequest {
        this['limit'] = limit;
        return this;
    }
    public withComponentType(componentType: ListComponentInfosRequestComponentTypeEnum | string): ListComponentInfosRequest {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: ListComponentInfosRequestComponentTypeEnum | string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): ListComponentInfosRequestComponentTypeEnum | string | undefined {
        return this['component_type'];
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListComponentInfosRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListComponentInfosRequestComponentTypeEnum {
    ALL = 'ALL',
    CN = 'CN',
    DN = 'DN',
    CM = 'CM',
    GTM = 'GTM',
    ETCD = 'ETCD'
}
