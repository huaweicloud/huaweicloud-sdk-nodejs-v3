

export class ListTwoFactorLoginHostRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'display_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTwoFactorLoginHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListTwoFactorLoginHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withDisplayName(displayName: string): ListTwoFactorLoginHostRequest {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withLimit(limit: number): ListTwoFactorLoginHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTwoFactorLoginHostRequest {
        this['offset'] = offset;
        return this;
    }
}