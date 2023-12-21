

export class ListJarPackageHostInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'file_name'?: string;
    public category?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public limit?: number;
    public offset?: number;
    private 'part_match'?: boolean;
    public constructor(fileName?: string) { 
        this['file_name'] = fileName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListJarPackageHostInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFileName(fileName: string): ListJarPackageHostInfoRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withCategory(category: string): ListJarPackageHostInfoRequest {
        this['category'] = category;
        return this;
    }
    public withHostName(hostName: string): ListJarPackageHostInfoRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListJarPackageHostInfoRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withLimit(limit: number): ListJarPackageHostInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListJarPackageHostInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withPartMatch(partMatch: boolean): ListJarPackageHostInfoRequest {
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