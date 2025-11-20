

export class ShowTenantNoticeConfigurationRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public limit?: number;
    public offset?: number;
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withAuthorization(authorization: string): ShowTenantNoticeConfigurationRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowTenantNoticeConfigurationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowTenantNoticeConfigurationRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withLimit(limit: number): ShowTenantNoticeConfigurationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTenantNoticeConfigurationRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: string): ShowTenantNoticeConfigurationRequest {
        this['type'] = type;
        return this;
    }
}