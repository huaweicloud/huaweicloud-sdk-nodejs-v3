

export class ListLoginWhiteIpRequest {
    private 'enterprise_project_id'?: string;
    private 'white_ip'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLoginWhiteIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withWhiteIp(whiteIp: string): ListLoginWhiteIpRequest {
        this['white_ip'] = whiteIp;
        return this;
    }
    public set whiteIp(whiteIp: string  | undefined) {
        this['white_ip'] = whiteIp;
    }
    public get whiteIp(): string | undefined {
        return this['white_ip'];
    }
}