

export class ListAppsRequest {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'app_name'?: string;
    private 'host_ip'?: string;
    public version?: string;
    private 'install_dir'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    private 'part_match'?: boolean;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withHostId(hostId: string): ListAppsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): ListAppsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAppName(appName: string): ListAppsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withHostIp(hostIp: string): ListAppsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withVersion(version: string): ListAppsRequest {
        this['version'] = version;
        return this;
    }
    public withInstallDir(installDir: string): ListAppsRequest {
        this['install_dir'] = installDir;
        return this;
    }
    public set installDir(installDir: string  | undefined) {
        this['install_dir'] = installDir;
    }
    public get installDir(): string | undefined {
        return this['install_dir'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListAppsRequest {
        this['category'] = category;
        return this;
    }
    public withPartMatch(partMatch: boolean): ListAppsRequest {
        this['part_match'] = partMatch;
        return this;
    }
    public set partMatch(partMatch: boolean  | undefined) {
        this['part_match'] = partMatch;
    }
    public get partMatch(): boolean | undefined {
        return this['part_match'];
    }
}