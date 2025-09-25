

export class ListHostsRiskRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(hostIdList?: Array<string>) { 
        this['host_id_list'] = hostIdList;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostsRiskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostIdList(hostIdList: Array<string>): ListHostsRiskRequest {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}