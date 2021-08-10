import { PublishAssetReq } from './PublishAssetReq';


export class UnpublishAssetsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: PublishAssetReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UnpublishAssetsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UnpublishAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: PublishAssetReq): UnpublishAssetsRequest {
        this['body'] = body;
        return this;
    }
}