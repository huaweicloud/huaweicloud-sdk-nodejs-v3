

export class ListEndpointGroupsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public name?: string;
    public status?: ListEndpointGroupsRequestStatusEnum | string;
    private 'listener_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListEndpointGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEndpointGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListEndpointGroupsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListEndpointGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListEndpointGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListEndpointGroupsRequestStatusEnum | string): ListEndpointGroupsRequest {
        this['status'] = status;
        return this;
    }
    public withListenerId(listenerId: string): ListEndpointGroupsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointGroupsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
