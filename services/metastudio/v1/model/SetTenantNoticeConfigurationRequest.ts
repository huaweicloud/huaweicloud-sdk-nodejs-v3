import { SetTenantNoticeConfigurationReq } from './SetTenantNoticeConfigurationReq';


export class SetTenantNoticeConfigurationRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public body?: SetTenantNoticeConfigurationReq;
    public constructor() { 
    }
    public withAuthorization(authorization: string): SetTenantNoticeConfigurationRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): SetTenantNoticeConfigurationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): SetTenantNoticeConfigurationRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBody(body: SetTenantNoticeConfigurationReq): SetTenantNoticeConfigurationRequest {
        this['body'] = body;
        return this;
    }
}