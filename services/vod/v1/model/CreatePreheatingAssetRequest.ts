import { CreatePreheatingAssetReq } from './CreatePreheatingAssetReq';


export class CreatePreheatingAssetRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreatePreheatingAssetReq;
    public constructor() { 
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