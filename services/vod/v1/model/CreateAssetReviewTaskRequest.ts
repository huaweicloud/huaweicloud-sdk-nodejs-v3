import { AssetReviewReq } from './AssetReviewReq';


export class CreateAssetReviewTaskRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: AssetReviewReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateAssetReviewTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: AssetReviewReq): CreateAssetReviewTaskRequest {
        this['body'] = body;
        return this;
    }
}