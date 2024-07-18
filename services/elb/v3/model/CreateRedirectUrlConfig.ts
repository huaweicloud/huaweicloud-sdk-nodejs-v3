import { CreateInsertHeadersConfig } from './CreateInsertHeadersConfig';
import { CreateRemoveHeadersConfig } from './CreateRemoveHeadersConfig';


export class CreateRedirectUrlConfig {
    public protocol?: CreateRedirectUrlConfigProtocolEnum | string;
    public host?: string;
    public port?: string;
    public path?: string;
    public query?: string;
    private 'status_code'?: CreateRedirectUrlConfigStatusCodeEnum | string;
    private 'insert_headers_config'?: CreateInsertHeadersConfig;
    private 'remove_headers_config'?: CreateRemoveHeadersConfig;
    public constructor(statusCode?: string) { 
        this['status_code'] = statusCode;
    }
    public withProtocol(protocol: CreateRedirectUrlConfigProtocolEnum | string): CreateRedirectUrlConfig {
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
    public withStatusCode(statusCode: CreateRedirectUrlConfigStatusCodeEnum | string): CreateRedirectUrlConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: CreateRedirectUrlConfigStatusCodeEnum | string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): CreateRedirectUrlConfigStatusCodeEnum | string | undefined {
        return this['status_code'];
    }
    public withInsertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig): CreateRedirectUrlConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: CreateInsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): CreateInsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig): CreateRedirectUrlConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: CreateRemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): CreateRemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
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
