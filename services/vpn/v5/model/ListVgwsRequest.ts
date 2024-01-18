

export class ListVgwsRequest {
    private 'vgw_id'?: string;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withVgwId(vgwId: string): ListVgwsRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListVgwsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}