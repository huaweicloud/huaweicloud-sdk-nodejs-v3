

export class ListHealthChecksRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public status?: ListHealthChecksRequestStatusEnum;
    private 'endpoint_group_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListHealthChecksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListHealthChecksRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListHealthChecksRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListHealthChecksRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListHealthChecksRequestStatusEnum): ListHealthChecksRequest {
        this['status'] = status;
        return this;
    }
    public withEndpointGroupId(endpointGroupId: string): ListHealthChecksRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHealthChecksRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
