

export class RecordControlInfo {
    private 'publish_domain': string | undefined;
    public app: string;
    public stream: string;
    public constructor(publishDomain?: any, app?: any, stream?: any) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withPublishDomain(publishDomain: string): RecordControlInfo {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): RecordControlInfo {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): RecordControlInfo {
        this['stream'] = stream;
        return this;
    }
}