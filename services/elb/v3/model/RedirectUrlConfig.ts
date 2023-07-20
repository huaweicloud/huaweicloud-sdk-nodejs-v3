

export class RedirectUrlConfig {
    public protocol?: RedirectUrlConfigProtocolEnum | string;
    public host?: string;
    public port?: string;
    public path?: string;
    public query?: string;
    private 'status_code'?: RedirectUrlConfigStatusCodeEnum | string;
    public constructor(protocol?: string, host?: string, port?: string, path?: string, query?: string, statusCode?: string) { 
        this['protocol'] = protocol;
        this['host'] = host;
        this['port'] = port;
        this['path'] = path;
        this['query'] = query;
        this['status_code'] = statusCode;
    }
    public withProtocol(protocol: RedirectUrlConfigProtocolEnum | string): RedirectUrlConfig {
        this['protocol'] = protocol;
        return this;
    }
    public withHost(host: string): RedirectUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPort(port: string): RedirectUrlConfig {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): RedirectUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): RedirectUrlConfig {
        this['query'] = query;
        return this;
    }
    public withStatusCode(statusCode: RedirectUrlConfigStatusCodeEnum | string): RedirectUrlConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: RedirectUrlConfigStatusCodeEnum | string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): RedirectUrlConfigStatusCodeEnum | string | undefined {
        return this['status_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RedirectUrlConfigProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    PROTOCOL = '${protocol}'
}
/**
    * @export
    * @enum {string}
    */
export enum RedirectUrlConfigStatusCodeEnum {
    E_301 = '301',
    E_302 = '302',
    E_303 = '303',
    E_307 = '307',
    E_308 = '308'
}
