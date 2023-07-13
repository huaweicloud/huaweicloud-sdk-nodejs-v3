

export class ListRecordCallbackConfigsRequest {
    private 'publish_domain'?: string | undefined;
    public app?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): ListRecordCallbackConfigsRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): ListRecordCallbackConfigsRequest {
        this['app'] = app;
        return this;
    }
    public withOffset(offset: number): ListRecordCallbackConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRecordCallbackConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}