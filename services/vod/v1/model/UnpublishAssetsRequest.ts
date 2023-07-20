import { PublishAssetReq } from './PublishAssetReq';


export class UnpublishAssetsRequest {
    private 'X-Sdk-Date'?: string;
    public body?: PublishAssetReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UnpublishAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: PublishAssetReq): UnpublishAssetsRequest {
        this['body'] = body;
        return this;
    }
}