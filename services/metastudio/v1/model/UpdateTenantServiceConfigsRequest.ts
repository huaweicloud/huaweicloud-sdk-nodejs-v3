import { UpdateTenantServiceConfigsReq } from './UpdateTenantServiceConfigsReq';


export class UpdateTenantServiceConfigsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public body?: UpdateTenantServiceConfigsReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): UpdateTenantServiceConfigsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateTenantServiceConfigsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateTenantServiceConfigsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBody(body: UpdateTenantServiceConfigsReq): UpdateTenantServiceConfigsRequest {
        this['body'] = body;
        return this;
    }
}