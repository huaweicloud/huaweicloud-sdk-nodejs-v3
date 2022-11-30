import { UpdateAssetMetaReq } from './UpdateAssetMetaReq';


export class UpdateAssetMetaRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UpdateAssetMetaReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateAssetMetaRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateAssetMetaRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateAssetMetaReq): UpdateAssetMetaRequest {
        this['body'] = body;
        return this;
    }
}