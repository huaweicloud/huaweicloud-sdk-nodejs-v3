import { ImportResourceRequestBody } from './ImportResourceRequestBody';


export class ImportResourceRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public resource?: string;
    private 'business_id'?: string;
    public body?: ImportResourceRequestBody;
    public constructor(resource?: string) { 
        this['resource'] = resource;
    }
    public withAuthorization(authorization: string): ImportResourceRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ImportResourceRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ImportResourceRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withResource(resource: string): ImportResourceRequest {
        this['resource'] = resource;
        return this;
    }
    public withBusinessId(businessId: string): ImportResourceRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: string  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): string | undefined {
        return this['business_id'];
    }
    public withBody(body: ImportResourceRequestBody): ImportResourceRequest {
        this['body'] = body;
        return this;
    }
}