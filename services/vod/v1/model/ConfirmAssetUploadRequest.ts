import { ConfirmAssetUploadReq } from './ConfirmAssetUploadReq';


export class ConfirmAssetUploadRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: ConfirmAssetUploadReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ConfirmAssetUploadRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ConfirmAssetUploadRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ConfirmAssetUploadReq): ConfirmAssetUploadRequest {
        this['body'] = body;
        return this;
    }
}