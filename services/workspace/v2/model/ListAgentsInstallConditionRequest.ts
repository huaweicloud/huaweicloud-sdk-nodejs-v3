

export class ListAgentsInstallConditionRequest {
    private 'enterprise_project_id'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    public status?: string;
    private 'ip_address'?: string;
    private 'is_installed'?: boolean;
    private 'desktop_pool_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAgentsInstallConditionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDesktopId(desktopId: string): ListAgentsInstallConditionRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ListAgentsInstallConditionRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withStatus(status: string): ListAgentsInstallConditionRequest {
        this['status'] = status;
        return this;
    }
    public withIpAddress(ipAddress: string): ListAgentsInstallConditionRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIsInstalled(isInstalled: boolean): ListAgentsInstallConditionRequest {
        this['is_installed'] = isInstalled;
        return this;
    }
    public set isInstalled(isInstalled: boolean  | undefined) {
        this['is_installed'] = isInstalled;
    }
    public get isInstalled(): boolean | undefined {
        return this['is_installed'];
    }
    public withDesktopPoolId(desktopPoolId: string): ListAgentsInstallConditionRequest {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withLimit(limit: number): ListAgentsInstallConditionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAgentsInstallConditionRequest {
        this['offset'] = offset;
        return this;
    }
}