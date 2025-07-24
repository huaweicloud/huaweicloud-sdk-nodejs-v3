import { ExportFilesReq } from './ExportFilesReq';


export class DownloadCreateTemplateRequest {
    private 'X-Language'?: DownloadCreateTemplateRequestXLanguageEnum | string;
    public body?: ExportFilesReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DownloadCreateTemplateRequestXLanguageEnum | string): DownloadCreateTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadCreateTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadCreateTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportFilesReq): DownloadCreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadCreateTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
