import { QueryAvailableNodeTypeReq } from './QueryAvailableNodeTypeReq';


export class ListAvailableZoneRequest {
    private 'X-Language'?: ListAvailableZoneRequestXLanguageEnum | undefined;
    public body?: QueryAvailableNodeTypeReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListAvailableZoneRequestXLanguageEnum): ListAvailableZoneRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAvailableZoneRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
