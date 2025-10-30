

export class ListWebAppAndServicesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public category?: string;
    public name?: string;
    public catalogue?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_ip'?: string;
    public version?: string;
    private 'install_dir'?: string;
    private 'part_match'?: boolean;
    public constructor(category?: string, name?: string, catalogue?: string) { 
        this['category'] = category;
        this['name'] = name;
        this['catalogue'] = catalogue;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebAppAndServicesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebAppAndServicesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebAppAndServicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategory(category: string): ListWebAppAndServicesRequest {
        this['category'] = category;
        return this;
    }
    public withName(name: string): ListWebAppAndServicesRequest {
        this['name'] = name;
        return this;
    }
    public withCatalogue(catalogue: string): ListWebAppAndServicesRequest {
        this['catalogue'] = catalogue;
        return this;
    }
    public withHostName(hostName: string): ListWebAppAndServicesRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListWebAppAndServicesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): ListWebAppAndServicesRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withVersion(version: string): ListWebAppAndServicesRequest {
        this['version'] = version;
        return this;
    }
    public withInstallDir(installDir: string): ListWebAppAndServicesRequest {
        this['install_dir'] = installDir;
        return this;
    }
    public set installDir(installDir: string  | undefined) {
        this['install_dir'] = installDir;
    }
    public get installDir(): string | undefined {
        return this['install_dir'];
    }
    public withPartMatch(partMatch: boolean): ListWebAppAndServicesRequest {
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