import { ConfirmAssetUploadReq } from './ConfirmAssetUploadReq';


export class ConfirmAssetUploadRequest {
    private 'X-Sdk-Date'?: string;
    public body?: ConfirmAssetUploadReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ConfirmAssetUploadRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ConfirmAssetUploadReq): ConfirmAssetUploadRequest {
        this['body'] = body;
        return this;
    }
}