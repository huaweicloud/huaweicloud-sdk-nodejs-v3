import { ExportFilesReq } from './ExportFilesReq';


export class DownloadFileRequest {
    private 'X-Language'?: DownloadFileRequestXLanguageEnum | string;
    public body?: ExportFilesReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DownloadFileRequestXLanguageEnum | string): DownloadFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadFileRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadFileRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportFilesReq): DownloadFileRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadFileRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
