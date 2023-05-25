import { CreateAssetByFileUploadReq } from './CreateAssetByFileUploadReq';


export class CreateAssetByFileUploadRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateAssetByFileUploadReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateAssetByFileUploadRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateAssetByFileUploadReq): CreateAssetByFileUploadRequest {
        this['body'] = body;
        return this;
    }
}