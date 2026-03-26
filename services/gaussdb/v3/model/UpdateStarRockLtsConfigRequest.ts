import { HtapCreateLTSConfigRequestBody } from './HtapCreateLTSConfigRequestBody';


export class UpdateStarRockLtsConfigRequest {
    private 'X-Language'?: UpdateStarRockLtsConfigRequestXLanguageEnum | string;
    public body?: HtapCreateLTSConfigRequestBody;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: UpdateStarRockLtsConfigRequestXLanguageEnum | string): UpdateStarRockLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateStarRockLtsConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateStarRockLtsConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: HtapCreateLTSConfigRequestBody): UpdateStarRockLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateStarRockLtsConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
