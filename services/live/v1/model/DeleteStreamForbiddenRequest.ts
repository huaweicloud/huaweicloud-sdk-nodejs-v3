

export class DeleteStreamForbiddenRequest {
    public domain: string;
    private 'app_name': string | undefined;
    private 'stream_name': string | undefined;
    public constructor(domain?: any, appName?: any, streamName?: any) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['stream_name'] = streamName;
    }
    public withDomain(domain: string): DeleteStreamForbiddenRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): DeleteStreamForbiddenRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withStreamName(streamName: string): DeleteStreamForbiddenRequest {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
}