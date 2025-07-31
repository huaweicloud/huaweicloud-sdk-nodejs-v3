import { UpdateWebTamperRaspPathRequestInfo } from './UpdateWebTamperRaspPathRequestInfo';


export class UpdateWebTamperRaspPathRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    public body?: UpdateWebTamperRaspPathRequestInfo;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateWebTamperRaspPathRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): UpdateWebTamperRaspPathRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): UpdateWebTamperRaspPathRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: UpdateWebTamperRaspPathRequestInfo): UpdateWebTamperRaspPathRequest {
        this['body'] = body;
        return this;
    }
}