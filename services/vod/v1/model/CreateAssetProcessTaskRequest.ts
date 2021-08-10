import { AssetProcessReq } from './AssetProcessReq';


export class CreateAssetProcessTaskRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: AssetProcessReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateAssetProcessTaskRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateAssetProcessTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: AssetProcessReq): CreateAssetProcessTaskRequest {
        this['body'] = body;
        return this;
    }
}