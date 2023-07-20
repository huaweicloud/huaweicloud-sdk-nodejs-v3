import { QueryAvailableNodeTypeReq } from './QueryAvailableNodeTypeReq';


export class ListAvailableZoneRequest {
    private 'X-Language'?: ListAvailableZoneRequestXLanguageEnum | string;
    public body?: QueryAvailableNodeTypeReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListAvailableZoneRequestXLanguageEnum | string): ListAvailableZoneRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAvailableZoneRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAvailableZoneRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryAvailableNodeTypeReq): ListAvailableZoneRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAvailableZoneRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
