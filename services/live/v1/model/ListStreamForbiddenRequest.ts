

export class ListStreamForbiddenRequest {
    public domain: string;
    private 'app_name'?: string | undefined;
    private 'stream_name'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListStreamForbiddenRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ListStreamForbiddenRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withStreamName(streamName: string): ListStreamForbiddenRequest {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
    public withPage(page: number): ListStreamForbiddenRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListStreamForbiddenRequest {
        this['size'] = size;
        return this;
    }
}