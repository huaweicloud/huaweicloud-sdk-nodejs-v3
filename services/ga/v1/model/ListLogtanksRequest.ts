

export class ListLogtanksRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public status?: ListLogtanksRequestStatusEnum | string;
    private 'resource_ids'?: Array<string>;
    private 'resource_type'?: ListLogtanksRequestResourceTypeEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListLogtanksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListLogtanksRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListLogtanksRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListLogtanksRequestStatusEnum | string): ListLogtanksRequest {
        this['status'] = status;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): ListLogtanksRequest {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withResourceType(resourceType: ListLogtanksRequestResourceTypeEnum | string): ListLogtanksRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListLogtanksRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListLogtanksRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLogtanksRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLogtanksRequestResourceTypeEnum {
    LISTENER = 'LISTENER'
}
