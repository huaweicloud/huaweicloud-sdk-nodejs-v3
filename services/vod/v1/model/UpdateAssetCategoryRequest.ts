import { UpdateCategoryReq } from './UpdateCategoryReq';


export class UpdateAssetCategoryRequest {
    private 'X-Sdk-Date'?: string;
    public body?: UpdateCategoryReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateAssetCategoryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateCategoryReq): UpdateAssetCategoryRequest {
        this['body'] = body;
        return this;
    }
}