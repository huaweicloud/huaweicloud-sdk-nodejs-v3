

export class CreateRedirectUrlConfig {
    public protocol?: CreateRedirectUrlConfigProtocolEnum;
    public host?: string;
    public port?: string;
    public path?: string;
    public query?: string;
    private 'status_code': CreateRedirectUrlConfigStatusCodeEnum | undefined;
    public constructor(statusCode?: any) { 
        this['status_code'] = statusCode;
    }
    public withProtocol(protocol: CreateRedirectUrlConfigProtocolEnum): CreateRedirectUrlConfig {
        this['protocol'] = protocol;
        return this;
    }
    public withHost(host: string): CreateRedirectUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPort(port: string): CreateRedirectUrlConfig {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): CreateRedirectUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): CreateRedirectUrlConfig {
        this['query'] = query;
        return this;
    }
    public withStatusCode(statusCode: CreateRedirectUrlConfigStatusCodeEnum): CreateRedirectUrlConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: CreateRedirectUrlConfigStatusCodeEnum | undefined) {
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
export enum CreateRedirectUrlConfigProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    PROTOCOL = '${protocol}'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateRedirectUrlConfigStatusCodeEnum {
    E_301 = '301',
    E_302 = '302',
    E_303 = '303',
    E_307 = '307',
    E_308 = '308'
}
