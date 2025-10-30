import { ListVulRepairCmdsRequestBody } from './ListVulRepairCmdsRequestBody';


export class ListVulRepairCmdsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'host_name'?: string;
    private 'vul_name'?: string;
    public category?: string;
    public body?: ListVulRepairCmdsRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulRepairCmdsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulRepairCmdsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulRepairCmdsRequest {
        this['offset'] = offset;
        return this;
    }
    public withHostName(hostName: string): ListVulRepairCmdsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withVulName(vulName: string): ListVulRepairCmdsRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCategory(category: string): ListVulRepairCmdsRequest {
        this['category'] = category;
        return this;
    }
    public withBody(body: ListVulRepairCmdsRequestBody): ListVulRepairCmdsRequest {
        this['body'] = body;
        return this;
    }
}