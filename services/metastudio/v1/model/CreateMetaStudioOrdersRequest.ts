import { CreateMetaStudioOrdersReq } from './CreateMetaStudioOrdersReq';


export class CreateMetaStudioOrdersRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public body?: CreateMetaStudioOrdersReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): CreateMetaStudioOrdersRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CreateMetaStudioOrdersRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): CreateMetaStudioOrdersRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBody(body: CreateMetaStudioOrdersReq): CreateMetaStudioOrdersRequest {
        this['body'] = body;
        return this;
    }
}