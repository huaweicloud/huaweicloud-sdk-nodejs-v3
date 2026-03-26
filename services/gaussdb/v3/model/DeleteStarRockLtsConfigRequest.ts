import { HtapDeleteLTSConfigRequestBody } from './HtapDeleteLTSConfigRequestBody';


export class DeleteStarRockLtsConfigRequest {
    private 'X-Language'?: DeleteStarRockLtsConfigRequestXLanguageEnum | string;
    public body?: HtapDeleteLTSConfigRequestBody;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: DeleteStarRockLtsConfigRequestXLanguageEnum | string): DeleteStarRockLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteStarRockLtsConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteStarRockLtsConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: HtapDeleteLTSConfigRequestBody): DeleteStarRockLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteStarRockLtsConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
