

export class ListWhitelistsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    private 'enable_whitelist'?: boolean | undefined;
    private 'listener_id'?: string | undefined;
    public whitelist?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListWhitelistsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListWhitelistsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListWhitelistsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListWhitelistsRequest {
        this['id'] = id;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): ListWhitelistsRequest {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withListenerId(listenerId: string): ListWhitelistsRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withWhitelist(whitelist: string): ListWhitelistsRequest {
        this['whitelist'] = whitelist;
        return this;
    }
}