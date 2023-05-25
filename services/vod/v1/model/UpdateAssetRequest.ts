import { UploadAssetReq } from './UploadAssetReq';


export class UpdateAssetRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UploadAssetReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UploadAssetReq): UpdateAssetRequest {
        this['body'] = body;
        return this;
    }
}