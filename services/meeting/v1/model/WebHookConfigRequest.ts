

export class WebHookConfigRequest {
    public corpId?: string;
    public spId?: string;
    public subscriberId: string;
    public subscriberKey: string;
    public url: string;
    public constructor(subscriberId?: any, subscriberKey?: any, url?: any) { 
        this['subscriberId'] = subscriberId;
        this['subscriberKey'] = subscriberKey;
        this['url'] = url;
    }
    public withCorpId(corpId: string): WebHookConfigRequest {
        this['corpId'] = corpId;
        return this;
    }
    public withSpId(spId: string): WebHookConfigRequest {
        this['spId'] = spId;
        return this;
    }
    public withSubscriberId(subscriberId: string): WebHookConfigRequest {
        this['subscriberId'] = subscriberId;
        return this;
    }
    public withSubscriberKey(subscriberKey: string): WebHookConfigRequest {
        this['subscriberKey'] = subscriberKey;
        return this;
    }
    public withUrl(url: string): WebHookConfigRequest {
        this['url'] = url;
        return this;
    }
}