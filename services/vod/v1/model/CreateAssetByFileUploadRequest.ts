import { CreateAssetByFileUploadReq } from './CreateAssetByFileUploadReq';


export class CreateAssetByFileUploadRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateAssetByFileUploadReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateAssetByFileUploadRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
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