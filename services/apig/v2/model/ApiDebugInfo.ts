

export class ApiDebugInfo {
    public body?: string;
    public header?: { [key: string]: Array<string>; };
    public method?: ApiDebugInfoMethodEnum | string;
    public mode?: string;
    public path?: string;
    public query?: { [key: string]: Array<string>; };
    public scheme?: string;
    private 'app_key'?: string;
    private 'app_secret'?: string;
    public domain?: string;
    public stage?: string;
    public constructor(method?: string, mode?: string, path?: string, scheme?: string) { 
        this['method'] = method;
        this['mode'] = mode;
        this['path'] = path;
        this['scheme'] = scheme;
    }
    public withBody(body: string): ApiDebugInfo {
        this['body'] = body;
        return this;
    }
    public withHeader(header: { [key: string]: Array<string>; }): ApiDebugInfo {
        this['header'] = header;
        return this;
    }
    public withMethod(method: ApiDebugInfoMethodEnum | string): ApiDebugInfo {
        this['method'] = method;
        return this;
    }
    public withMode(mode: string): ApiDebugInfo {
        this['mode'] = mode;
        return this;
    }
    public withPath(path: string): ApiDebugInfo {
        this['path'] = path;
        return this;
    }
    public withQuery(query: { [key: string]: Array<string>; }): ApiDebugInfo {
        this['query'] = query;
        return this;
    }
    public withScheme(scheme: string): ApiDebugInfo {
        this['scheme'] = scheme;
        return this;
    }
    public withAppKey(appKey: string): ApiDebugInfo {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): ApiDebugInfo {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withDomain(domain: string): ApiDebugInfo {
        this['domain'] = domain;
        return this;
    }
    public withStage(stage: string): ApiDebugInfo {
        this['stage'] = stage;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiDebugInfoMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS'
}
