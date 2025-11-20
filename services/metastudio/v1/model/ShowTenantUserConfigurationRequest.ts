

export class ShowTenantUserConfigurationRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ShowTenantUserConfigurationRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowTenantUserConfigurationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowTenantUserConfigurationRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withLimit(limit: number): ShowTenantUserConfigurationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTenantUserConfigurationRequest {
        this['offset'] = offset;
        return this;
    }
}