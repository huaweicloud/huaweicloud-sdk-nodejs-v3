import { UpdateCategoryReq } from './UpdateCategoryReq';


export class UpdateAssetCategoryRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public body?: UpdateCategoryReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateAssetCategoryRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateAssetCategoryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withBody(body: UpdateCategoryReq): UpdateAssetCategoryRequest {
        this['body'] = body;
        return this;
    }
}