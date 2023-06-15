

export class ListSingleStreamDetailRequest {
    private 'publish_domain': string | undefined;
    public app: string;
    public stream: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(publishDomain?: any, app?: any, stream?: any) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withPublishDomain(publishDomain: string): ListSingleStreamDetailRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): ListSingleStreamDetailRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListSingleStreamDetailRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListSingleStreamDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSingleStreamDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}