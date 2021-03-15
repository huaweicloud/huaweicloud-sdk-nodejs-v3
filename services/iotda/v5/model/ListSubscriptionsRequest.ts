

export class ListSubscriptionsRequest {
    private 'Instance-Id'?: string | undefined;
    public resource?: string;
    public event?: string;
    public callbackurl?: string;
    private 'app_id'?: string | undefined;
    public channel?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListSubscriptionsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withResource(resource: string): ListSubscriptionsRequest {
        this['resource'] = resource;
        return this;
    }
    public withEvent(event: string): ListSubscriptionsRequest {
        this['event'] = event;
        return this;
    }
    public withCallbackurl(callbackurl: string): ListSubscriptionsRequest {
        this['callbackurl'] = callbackurl;
        return this;
    }
    public withAppId(appId: string): ListSubscriptionsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withChannel(channel: string): ListSubscriptionsRequest {
        this['channel'] = channel;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSubscriptionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
}