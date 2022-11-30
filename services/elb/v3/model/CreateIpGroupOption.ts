import { CreateIpGroupIpOption } from './CreateIpGroupIpOption';


export class CreateIpGroupOption {
    private 'project_id'?: string | undefined;
    public description?: string;
    public name?: string;
    private 'ip_list': Array<CreateIpGroupIpOption> | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(ipList?: any) { 
        this['ip_list'] = ipList;
    }
    public withProjectId(projectId: string): CreateIpGroupOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withDescription(description: string): CreateIpGroupOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateIpGroupOption {
        this['name'] = name;
        return this;
    }
    public withIpList(ipList: Array<CreateIpGroupIpOption>): CreateIpGroupOption {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<CreateIpGroupIpOption> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateIpGroupOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}