import { UploadMetaDataByUrlReq } from './UploadMetaDataByUrlReq';


export class UploadMetaDataByUrlRequest {
    private 'X-Sdk-Date'?: string;
    public body?: UploadMetaDataByUrlReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UploadMetaDataByUrlRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UploadMetaDataByUrlReq): UploadMetaDataByUrlRequest {
        this['body'] = body;
        return this;
    }
}