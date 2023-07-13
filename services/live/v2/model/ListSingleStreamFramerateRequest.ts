

export class ListSingleStreamFramerateRequest {
    public domain: string;
    public app: string;
    public stream: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(domain?: any, app?: any, stream?: any) { 
        this['domain'] = domain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withDomain(domain: string): ListSingleStreamFramerateRequest {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ListSingleStreamFramerateRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListSingleStreamFramerateRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListSingleStreamFramerateRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSingleStreamFramerateRequest {
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