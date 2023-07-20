

export class ListUpStreamDetailRequest {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(publishDomain?: string, app?: string, stream?: string) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withPublishDomain(publishDomain: string): ListUpStreamDetailRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): ListUpStreamDetailRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListUpStreamDetailRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListUpStreamDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUpStreamDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}