

export class RedirectUrlConfig {
    public protocol: RedirectUrlConfigProtocolEnum;
    public host: string;
    public port: string;
    public path: string;
    public query: string;
    private 'status_code': RedirectUrlConfigStatusCodeEnum | undefined;
    public constructor(protocol?: any, host?: any, port?: any, path?: any, query?: any, statusCode?: any) { 
        this['protocol'] = protocol;
        this['host'] = host;
        this['port'] = port;
        this['path'] = path;
        this['query'] = query;
        this['status_code'] = statusCode;
    }
    public withProtocol(protocol: RedirectUrlConfigProtocolEnum): RedirectUrlConfig {
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
    public withStatusCode(statusCode: RedirectUrlConfigStatusCodeEnum): RedirectUrlConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: RedirectUrlConfigStatusCodeEnum | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode() {
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
