import { UpdateWebTamperHostPolicyRequestInfo } from './UpdateWebTamperHostPolicyRequestInfo';


export class UpdateWebTamperHostPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public body?: UpdateWebTamperHostPolicyRequestInfo;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateWebTamperHostPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): UpdateWebTamperHostPolicyRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: UpdateWebTamperHostPolicyRequestInfo): UpdateWebTamperHostPolicyRequest {
        this['body'] = body;
        return this;
    }
}