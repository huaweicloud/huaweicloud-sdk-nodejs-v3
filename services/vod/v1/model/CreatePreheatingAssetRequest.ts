import { CreatePreheatingAssetReq } from './CreatePreheatingAssetReq';


export class CreatePreheatingAssetRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreatePreheatingAssetReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreatePreheatingAssetRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreatePreheatingAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreatePreheatingAssetReq): CreatePreheatingAssetRequest {
        this['body'] = body;
        return this;
    }
}