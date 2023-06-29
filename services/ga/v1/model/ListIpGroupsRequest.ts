

export class ListIpGroupsRequest {
    public limit?: number;
    public marker?: string;
    private 'listener_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListIpGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListIpGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withListenerId(listenerId: string): ListIpGroupsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
}