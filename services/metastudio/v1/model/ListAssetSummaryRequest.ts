import { ListAssetSummarysReq } from './ListAssetSummarysReq';


export class ListAssetSummaryRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    public body?: ListAssetSummarysReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListAssetSummaryRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListAssetSummaryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ListAssetSummarysReq): ListAssetSummaryRequest {
        this['body'] = body;
        return this;
    }
}