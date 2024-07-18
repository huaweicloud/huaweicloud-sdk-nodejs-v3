import { InsertHeadersConfig } from './InsertHeadersConfig';
import { RemoveHeadersConfig } from './RemoveHeadersConfig';


export class RedirectUrlConfig {
    public protocol?: RedirectUrlConfigProtocolEnum | string;
    public host?: string;
    public port?: string;
    public path?: string;
    public query?: string;
    private 'status_code'?: RedirectUrlConfigStatusCodeEnum | string;
    private 'insert_headers_config'?: InsertHeadersConfig;
    private 'remove_headers_config'?: RemoveHeadersConfig;
    public constructor() { 
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
    public withInsertHeadersConfig(insertHeadersConfig: InsertHeadersConfig): RedirectUrlConfig {
        this['insert_headers_config'] = insertHeadersConfig;
        return this;
    }
    public set insertHeadersConfig(insertHeadersConfig: InsertHeadersConfig  | undefined) {
        this['insert_headers_config'] = insertHeadersConfig;
    }
    public get insertHeadersConfig(): InsertHeadersConfig | undefined {
        return this['insert_headers_config'];
    }
    public withRemoveHeadersConfig(removeHeadersConfig: RemoveHeadersConfig): RedirectUrlConfig {
        this['remove_headers_config'] = removeHeadersConfig;
        return this;
    }
    public set removeHeadersConfig(removeHeadersConfig: RemoveHeadersConfig  | undefined) {
        this['remove_headers_config'] = removeHeadersConfig;
    }
    public get removeHeadersConfig(): RemoveHeadersConfig | undefined {
        return this['remove_headers_config'];
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
