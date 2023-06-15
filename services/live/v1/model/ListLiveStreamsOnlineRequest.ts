

export class ListLiveStreamsOnlineRequest {
    private 'publish_domain': string | undefined;
    public app?: string;
    public offset?: number;
    public limit?: number;
    public stream?: string;
    public constructor(publishDomain?: any) { 
        this['publish_domain'] = publishDomain;
    }
    public withPublishDomain(publishDomain: string): ListLiveStreamsOnlineRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): ListLiveStreamsOnlineRequest {
        this['app'] = app;
        return this;
    }
    public withOffset(offset: number): ListLiveStreamsOnlineRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLiveStreamsOnlineRequest {
        this['limit'] = limit;
        return this;
    }
    public withStream(stream: string): ListLiveStreamsOnlineRequest {
        this['stream'] = stream;
        return this;
    }
}