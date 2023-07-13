import { CreateCategoryReq } from './CreateCategoryReq';


export class CreateAssetCategoryRequest {
    private 'X-Sdk-Date'?: string | undefined;
    public body?: CreateCategoryReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateAssetCategoryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateCategoryReq): CreateAssetCategoryRequest {
        this['body'] = body;
        return this;
    }
}