

export class ListEndpointsRequest {
    private 'endpoint_group_id': string | undefined;
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public status?: ListEndpointsRequestStatusEnum;
    public constructor(endpointGroupId?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): ListEndpointsRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withLimit(limit: number): ListEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEndpointsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListEndpointsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListEndpointsRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListEndpointsRequestStatusEnum): ListEndpointsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
