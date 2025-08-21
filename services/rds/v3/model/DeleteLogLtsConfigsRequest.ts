import { DeleteLogConfigResponseBody } from './DeleteLogConfigResponseBody';


export class DeleteLogLtsConfigsRequest {
    public engine?: DeleteLogLtsConfigsRequestEngineEnum | string;
    private 'X-Language'?: DeleteLogLtsConfigsRequestXLanguageEnum | string;
    public body?: DeleteLogConfigResponseBody;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: DeleteLogLtsConfigsRequestEngineEnum | string): DeleteLogLtsConfigsRequest {
        this['engine'] = engine;
        return this;
    }
    public withXLanguage(xLanguage: DeleteLogLtsConfigsRequestXLanguageEnum | string): DeleteLogLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteLogLtsConfigsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteLogLtsConfigsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteLogConfigResponseBody): DeleteLogLtsConfigsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteLogLtsConfigsRequestEngineEnum {
    MYSQL = 'mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteLogLtsConfigsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
