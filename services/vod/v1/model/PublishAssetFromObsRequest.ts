import { PublishAssetFromObsReq } from './PublishAssetFromObsReq';


export class PublishAssetFromObsRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: PublishAssetFromObsReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): PublishAssetFromObsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: PublishAssetFromObsReq): PublishAssetFromObsRequest {
        this['body'] = body;
        return this;
    }
}