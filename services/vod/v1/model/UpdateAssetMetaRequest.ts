import { UpdateAssetMetaReq } from './UpdateAssetMetaReq';


export class UpdateAssetMetaRequest {
    private 'X-Sdk-Date'?: string;
    public body?: UpdateAssetMetaReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateAssetMetaRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateAssetMetaReq): UpdateAssetMetaRequest {
        this['body'] = body;
        return this;
    }
}