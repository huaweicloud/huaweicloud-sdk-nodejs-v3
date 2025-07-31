

export class ListWebFrameworkHostInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public category?: string;
    private 'file_name'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'part_match'?: boolean;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebFrameworkHostInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebFrameworkHostInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebFrameworkHostInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategory(category: string): ListWebFrameworkHostInfoRequest {
        this['category'] = category;
        return this;
    }
    public withFileName(fileName: string): ListWebFrameworkHostInfoRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withHostName(hostName: string): ListWebFrameworkHostInfoRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListWebFrameworkHostInfoRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPartMatch(partMatch: boolean): ListWebFrameworkHostInfoRequest {
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