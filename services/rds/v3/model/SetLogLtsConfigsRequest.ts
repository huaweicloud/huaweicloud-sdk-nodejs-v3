import { AddLogConfigResponseBody } from './AddLogConfigResponseBody';


export class SetLogLtsConfigsRequest {
    public engine?: SetLogLtsConfigsRequestEngineEnum | string;
    private 'X-Language'?: SetLogLtsConfigsRequestXLanguageEnum | string;
    public body?: AddLogConfigResponseBody;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: SetLogLtsConfigsRequestEngineEnum | string): SetLogLtsConfigsRequest {
        this['engine'] = engine;
        return this;
    }
    public withXLanguage(xLanguage: SetLogLtsConfigsRequestXLanguageEnum | string): SetLogLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetLogLtsConfigsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetLogLtsConfigsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: AddLogConfigResponseBody): SetLogLtsConfigsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetLogLtsConfigsRequestEngineEnum {
    MYSQL = 'mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum SetLogLtsConfigsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
