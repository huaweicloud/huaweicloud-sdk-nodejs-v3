import { PublishAssetReq } from './PublishAssetReq';


export class PublishAssetsRequest {
    private 'X-Sdk-Date'?: string;
    public body?: PublishAssetReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): PublishAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: PublishAssetReq): PublishAssetsRequest {
        this['body'] = body;
        return this;
    }
}